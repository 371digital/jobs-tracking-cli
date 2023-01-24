"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _login = _interopRequireDefault(require("./login"));
var _logout = _interopRequireDefault(require("./logout"));
var _create = _interopRequireDefault(require("./create"));
var commands = {
  create: _create["default"].commandOptions,
  login: _login["default"].commandOptions,
  logout: _logout["default"].commandOptions
};
var _default = commands;
exports["default"] = _default;
//# sourceMappingURL=index.js.map