import {BaseCommand} from 'services';
import Change from './change';
import Project from './project';

class Create extends BaseCommand {
  constructor(props) {
    super(props);
    this.create({
      command: 'create',
      builder: yargs => {
        yargs.command(Change.commandOptions);
        yargs.command(Project.commandOptions);
      },
      describe: 'Use for new creations [change|project]',
    });
  }
}
export default new Create();
