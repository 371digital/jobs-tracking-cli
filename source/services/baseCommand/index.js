import Tools from 'tools';

class BaseCommand extends Tools {
  constructor(props) {
    super(props);
    this.commandOptions = {
      command: '',
      describe: '',
      builder: {},
      handler() {},
      commands: {},
    };
  }

  create(options = this.commandOptions) {
    this.commandOptions = options;
  }

  handler(handler) {
    if (this.commandOptions) this.commandOptions.handler = handler;
  }
}
export default BaseCommand;
