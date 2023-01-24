import {BaseCommand, localStorage, request} from 'services';
import inquirer from 'inquirer';
import 'colors';

class Login extends BaseCommand {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

    this.create({
      command: 'login',
      builder: {},
      describe: 'Use for login the system.',
    });
    this.handler(this.login);
  }
  
  async login() {
    const {password} = await inquirer.prompt([
      {
        name: 'password',
        message: 'Please enter your password.',
        type: 'password',
      },
    ]);
    this.startSpinner('Checking password!');
    await request
      .post('/auth/checkPassword', {password: password})
      .then(async (res) => {
        if (this.isSuccessResponse(res)) {
          this.clearSpinner('Login Success!');
          await localStorage.setItem('password', password);
          request.defaults.headers.common['password'] = password;
        } else {
          this.clearSpinnerWithError('Wrong Password!');
        }
      });
  }
}
export default new Login();
