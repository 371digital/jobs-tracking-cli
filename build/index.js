"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startCli = void 0;
var _yargs = _interopRequireDefault(require("yargs"));
var _helpers = require("yargs/helpers");
var _commands = _interopRequireDefault(require("./commands"));
var startCli = function startCli() {
  var cli = (0, _yargs["default"])((0, _helpers.hideBin)(process.argv));
  cli.version('1.0.0');
  var commandKeys = Object.keys(_commands["default"]);
  commandKeys.forEach(function (commandOptionKey) {
    cli.command(_commands["default"][commandOptionKey]);
  });
  cli.parse(process.argv.slice(2));
};
exports.startCli = startCli;
//# sourceMappingURL=index.js.map