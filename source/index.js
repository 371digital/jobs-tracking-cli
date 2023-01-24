import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import commands from './commands';

export const startCli = () => {
  const cli = yargs(hideBin(process.argv));
  cli.version('1.0.0');

  const commandKeys = Object.keys(commands);
  commandKeys.forEach(commandOptionKey => {
    cli.command(commands[commandOptionKey]);
  });
  
  cli.parse(process.argv.slice(2)); 
}