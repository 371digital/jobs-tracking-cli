import {BaseCommand, localStorage, request} from 'services';
import 'colors';

class Logout extends BaseCommand {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.create({
      command: 'logout',
      builder: {},
      describe: 'Use for logout the system.',
    });
    this.handler(this.logout);
  }

  async logout() {
    this.startSpinner('Logout Start!');
    await localStorage.removeItem('password');
    request.defaults.headers.common['password'] = '';
    this.clearSpinner('Logout Success!');
  }
}
export default new Logout();
