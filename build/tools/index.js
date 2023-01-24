"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ora = _interopRequireDefault(require("ora"));
var _services = require("../services");
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var Tools = /*#__PURE__*/function () {
  function Tools() {
    (0, _classCallCheck2["default"])(this, Tools);
  }
  (0, _createClass2["default"])(Tools, [{
    key: "uuid",
    value: function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }, {
    key: "startSpinner",
    value: function startSpinner(text) {
      this.spinner = (0, _ora["default"])(text).start();
    }
  }, {
    key: "clearSpinner",
    value: function clearSpinner(message) {
      this.spinner.succeed(message);
    }
  }, {
    key: "clearSpinnerWithError",
    value: function clearSpinnerWithError(message) {
      this.spinner.fail(message);
      process.exit(-1);
    }
  }, {
    key: "isSuccessResponse",
    value: function isSuccessResponse(response) {
      return response.data.code === 200;
    }
  }, {
    key: "validateAuth",
    value: function validateAuth() {
      this.startSpinner('Login check started!');
      var password = _services.localStorage.getItem('password');
      if (!password) {
        this.clearSpinnerWithError('Login required, please login!');
      }
      this.clearSpinner('Login check success!');
    }
  }, {
    key: "writeFile",
    value: function () {
      var _writeFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filePath, content) {
        var _this = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return new Promise( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _fs["default"].writeFile(filePath, content, function (error) {
                          if (error) {
                            _this.clearSpinnerWithError(error);
                            process.exit(1);
                          }
                          resolve(true);
                        });
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function writeFile(_x, _x2) {
        return _writeFile.apply(this, arguments);
      }
      return writeFile;
    }()
  }, {
    key: "readJsonFile",
    value: function readJsonFile(path) {
      var rawData = _fs["default"].readFileSync(path);
      return JSON.parse(rawData);
    }
  }, {
    key: "getProjectConfigPath",
    value: function getProjectConfigPath() {
      return _path["default"].join(process.cwd(), 'project.json');
    }
  }, {
    key: "getProjectConfig",
    value: function getProjectConfig() {
      this.startSpinner('Start getting project config!');
      var projectConfigPath = this.getProjectConfigPath();
      if (!_fs["default"].existsSync(projectConfigPath)) {
        this.clearSpinnerWithError('Project config file not found, please start `create project` command');
      }
      this.clearSpinner('Getting project config success!');
      return this.readJsonFile(projectConfigPath);
    }
  }, {
    key: "getProjects",
    value: function () {
      var _getProjects = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _services.request)('projects/getProjects').then(function (res) {
                if (_this2.isSuccessResponse(res)) {
                  return res.data.data;
                }
              });
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function getProjects() {
        return _getProjects.apply(this, arguments);
      }
      return getProjects;
    }()
  }, {
    key: "createProjectConfig",
    value: function () {
      var _createProjectConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref2) {
        var id, type, projectConfig;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref2.id, type = _ref2.type;
              this.startSpinner('Start project.json create!');
              projectConfig = {
                projectId: id,
                media: [],
                type: type,
                links: []
              };
              _context4.next = 5;
              return this.writeFile(this.getProjectConfigPath(), JSON.stringify(projectConfig));
            case 5:
              this.clearSpinner('Finish project.json creation!');
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createProjectConfig(_x4) {
        return _createProjectConfig.apply(this, arguments);
      }
      return createProjectConfig;
    }()
  }]);
  return Tools;
}();
var _default = Tools;
exports["default"] = _default;
//# sourceMappingURL=index.js.map