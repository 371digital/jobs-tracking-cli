import {BaseCommand, request} from 'services';
import {linkMarckupFields} from '_constants';
import inquirer from 'inquirer';
import 'colors';

class Change extends BaseCommand {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);

    this.create({
      command: 'change',
      builder: {},
      describe: 'Use for add changes to the project.',
    });
    this.handler(this.change);
  }

  generateIds(links) {
    return links.map(link => {
      link.id = this.uuid();
      return link;
    });
  }

  createValuePattern(key) {
    return new RegExp(`{{${key}}}`);
  }

  getMarckupField(url) {
    const finedConfig = linkMarckupFields.find(marckupField => {
      const pattern = this.createValuePattern(marckupField.value);
      return url.match(pattern) !== null;
    });

    return {
      hasField: !!finedConfig,
      fieldConfig: finedConfig || {},
    };
  }

  getPrompts(links) {
    return links.reduce((prompts, link) => {
      const {hasField, fieldConfig} = this.getMarckupField(link.url);
      if (hasField) {
        prompts.push({
          message: `Please enter ${fieldConfig.name} for ${link.title} :`,
          type: 'string',
          name: link.id,
        });
      }
  
      return prompts;
    }, []);
  }

  editMarckupValuesForLinks(answers, links) {
    const newLinks = [];
    links.forEach(link => {
      const answer = answers[link.id];
      if (typeof answer === 'undefined') {
        newLinks.push(link);
        return;
      }
      if (answer.length) {
        const {fieldConfig} = this.getMarckupField(link.url);
        link.url = link.url.replace(
          this.createValuePattern(fieldConfig.value),
          answer,
        );
        newLinks.push(link);
      }
    });
    return newLinks;
  }

  async prepareLinks(links) {
    if (!Array.isArray(links)) return;
    links = this.generateIds(links);
    const prompts = this.getPrompts(links);
    const answers = await inquirer.prompt(prompts);
    return this.editMarckupValuesForLinks(answers, links);
  }

  async getChangeContent() {
    const answers = await inquirer.prompt({
      message: `Please enter your message :`,
      type: 'string',
      name: 'content',
    });
    return answers.content;
  }

  async createChange(projectConfig) {
    return await request.post('/changes/createChange', {
      type: projectConfig.type,
      project: projectConfig.projectId,
      content: projectConfig.content,
      links: projectConfig.links,
      media: projectConfig.media,
    });
  }

  async change() {
    this.validateAuth();
    const projectConfig = this.getProjectConfig();
    projectConfig.links = await this.prepareLinks(projectConfig.links);
    projectConfig.content = await this.getChangeContent();
    this.startSpinner('Create Change Start!');
    await this.createChange(projectConfig).then(res => {
      if (this.isSuccessResponse(res)) {
        this.clearSpinner('Create Change Success!');
      } else {
        this.clearSpinnerWithError(`Create Change Error: ${res.data.message}`);
      }
    });
  }
}
export default new Change();
