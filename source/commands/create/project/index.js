import {BaseCommand} from 'services';
import {changeTypes} from '_constants';
import inquirer from 'inquirer';
import 'colors';

class Project extends BaseCommand {
  constructor(props) {
    super(props);
    this.projectCreate = this.projectCreate.bind(this);
    this.create({
      command: 'project',
      builder: {},
      describe: 'Use for create a project.',
    });
    this.handler(this.projectCreate);
  }

  async projectCreate() {
    const projects = await this.getProjects();
    const answer = await inquirer.prompt([
      {
        name: 'project',
        message: 'Select project',
        type: 'list',
        choices: projects.map(project => ({
          value: project._id,
          name: project.title,
        })),
      },
      {
        name: 'type',
        message: 'Select Change Type',
        type: 'list',
        choices: changeTypes,
      },
    ]);
    await this.createProjectConfig({id: answer.project, type: answer.type});
  }
}
export default new Project();
