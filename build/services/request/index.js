"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _ = require("./..");
var _constants = require("../../constants");
var instance = _axios["default"].create({
  baseURL: "".concat(_constants.serverIp, "api/")
});
instance.defaults.headers.common["password"] = _.localStorage.getItem("password") || "";
var _default = instance;
exports["default"] = _default;
//# sourceMappingURL=index.js.map