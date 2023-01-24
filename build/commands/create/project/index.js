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
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _services = require("../../../services");
var _constants = require("../../../constants");
var _inquirer = _interopRequireDefault(require("inquirer"));
require("colors");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Project = /*#__PURE__*/function (_BaseCommand) {
  (0, _inherits2["default"])(Project, _BaseCommand);
  var _super = _createSuper(Project);
  function Project(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Project);
    _this = _super.call(this, props);
    _this.projectCreate = _this.projectCreate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.create({
      command: 'project',
      builder: {},
      describe: 'Use for create a project.'
    });
    _this.handler(_this.projectCreate);
    return _this;
  }
  (0, _createClass2["default"])(Project, [{
    key: "projectCreate",
    value: function () {
      var _projectCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var projects, answer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getProjects();
            case 2:
              projects = _context.sent;
              _context.next = 5;
              return _inquirer["default"].prompt([{
                name: 'project',
                message: 'Select project',
                type: 'list',
                choices: projects.map(function (project) {
                  return {
                    value: project._id,
                    name: project.title
                  };
                })
              }, {
                name: 'type',
                message: 'Select Change Type',
                type: 'list',
                choices: _constants.changeTypes
              }]);
            case 5:
              answer = _context.sent;
              _context.next = 8;
              return this.createProjectConfig({
                id: answer.project,
                type: answer.type
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function projectCreate() {
        return _projectCreate.apply(this, arguments);
      }
      return projectCreate;
    }()
  }]);
  return Project;
}(_services.BaseCommand);
var _default = new Project();
exports["default"] = _default;
//# sourceMappingURL=index.js.map