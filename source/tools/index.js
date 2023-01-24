import ora from 'ora';
import {request, localStorage} from 'services';
import path from 'path';
import fs from 'fs';

class Tools {
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  startSpinner(text) {
    this.spinner = ora(text).start();
  }

  clearSpinner(message) {
    this.spinner.succeed(message);
  }

  clearSpinnerWithError(message) {
    this.spinner.fail(message);
    process.exit(-1)
  }

  isSuccessResponse(response) {
    return response.data.code === 200;
  }

  validateAuth() {
    this.startSpinner('Login check started!');
    const password = localStorage.getItem('password');
    if (!password) {
      this.clearSpinnerWithError('Login required, please login!');
    }
    this.clearSpinner('Login check success!');
  }

  async writeFile(filePath, content) {
    return await new Promise(async resolve => {
      fs.writeFile(filePath, content, error => {
        if (error) {
          this.clearSpinnerWithError(error);
          process.exit(1);
        }
        resolve(true);
      });
    });
  }

  readJsonFile(path) {
    const rawData = fs.readFileSync(path);
    return JSON.parse(rawData);
  }

  getProjectConfigPath() {
    return path.join(process.cwd(), 'project.json');
  }

  getProjectConfig() {
    this.startSpinner('Start getting project config!');
    const projectConfigPath = this.getProjectConfigPath();
    if (!fs.existsSync(projectConfigPath)) {
      this.clearSpinnerWithError(
        'Project config file not found, please start `create project` command',
      );
    }
    this.clearSpinner('Getting project config success!');
    return this.readJsonFile(projectConfigPath);
  }

  async getProjects() {
    return await request('projects/getProjects').then(res => {
      if (this.isSuccessResponse(res)) {
        return res.data.data;
      }
    });
  }

  async createProjectConfig({id, type}) {
    this.startSpinner('Start project.json create!');
    const projectConfig = {
      projectId: id,
      media: [],
      type: type,
      links: [],
    };
    await this.writeFile(
      this.getProjectConfigPath(),
      JSON.stringify(projectConfig),
    );
    this.clearSpinner('Finish project.json creation!');
  }
}
export default Tools;
