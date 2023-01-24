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
var Change = /*#__PURE__*/function (_BaseCommand) {
  (0, _inherits2["default"])(Change, _BaseCommand);
  var _super = _createSuper(Change);
  function Change(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Change);
    _this = _super.call(this, props);
    _this.change = _this.change.bind((0, _assertThisInitialized2["default"])(_this));
    _this.create({
      command: 'change',
      builder: {},
      describe: 'Use for add changes to the project.'
    });
    _this.handler(_this.change);
    return _this;
  }
  (0, _createClass2["default"])(Change, [{
    key: "generateIds",
    value: function generateIds(links) {
      var _this2 = this;
      return links.map(function (link) {
        link.id = _this2.uuid();
        return link;
      });
    }
  }, {
    key: "createValuePattern",
    value: function createValuePattern(key) {
      return new RegExp("{{".concat(key, "}}"));
    }
  }, {
    key: "getMarckupField",
    value: function getMarckupField(url) {
      var _this3 = this;
      var finedConfig = _constants.linkMarckupFields.find(function (marckupField) {
        var pattern = _this3.createValuePattern(marckupField.value);
        return url.match(pattern) !== null;
      });
      return {
        hasField: !!finedConfig,
        fieldConfig: finedConfig || {}
      };
    }
  }, {
    key: "getPrompts",
    value: function getPrompts(links) {
      var _this4 = this;
      return links.reduce(function (prompts, link) {
        var _this4$getMarckupFiel = _this4.getMarckupField(link.url),
          hasField = _this4$getMarckupFiel.hasField,
          fieldConfig = _this4$getMarckupFiel.fieldConfig;
        if (hasField) {
          prompts.push({
            message: "Please enter ".concat(fieldConfig.name, " for ").concat(link.title, " :"),
            type: 'string',
            name: link.id
          });
        }
        return prompts;
      }, []);
    }
  }, {
    key: "editMarckupValuesForLinks",
    value: function editMarckupValuesForLinks(answers, links) {
      var _this5 = this;
      var newLinks = [];
      links.forEach(function (link) {
        var answer = answers[link.id];
        if (typeof answer === 'undefined') {
          newLinks.push(link);
          return;
        }
        if (answer.length) {
          var _this5$getMarckupFiel = _this5.getMarckupField(link.url),
            fieldConfig = _this5$getMarckupFiel.fieldConfig;
          link.url = link.url.replace(_this5.createValuePattern(fieldConfig.value), answer);
          newLinks.push(link);
        }
      });
      return newLinks;
    }
  }, {
    key: "prepareLinks",
    value: function () {
      var _prepareLinks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(links) {
        var prompts, answers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (Array.isArray(links)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              links = this.generateIds(links);
              prompts = this.getPrompts(links);
              _context.next = 6;
              return _inquirer["default"].prompt(prompts);
            case 6:
              answers = _context.sent;
              return _context.abrupt("return", this.editMarckupValuesForLinks(answers, links));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function prepareLinks(_x) {
        return _prepareLinks.apply(this, arguments);
      }
      return prepareLinks;
    }()
  }, {
    key: "getChangeContent",
    value: function () {
      var _getChangeContent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var answers;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _inquirer["default"].prompt({
                message: "Please enter your message :",
                type: 'string',
                name: 'content'
              });
            case 2:
              answers = _context2.sent;
              return _context2.abrupt("return", answers.content);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getChangeContent() {
        return _getChangeContent.apply(this, arguments);
      }
      return getChangeContent;
    }()
  }, {
    key: "createChange",
    value: function () {
      var _createChange = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(projectConfig) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _services.request.post('/changes/createChange', {
                type: projectConfig.type,
                project: projectConfig.projectId,
                content: projectConfig.content,
                links: projectConfig.links,
                media: projectConfig.media
              });
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createChange(_x2) {
        return _createChange.apply(this, arguments);
      }
      return createChange;
    }()
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this6 = this;
        var projectConfig;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.validateAuth();
              projectConfig = this.getProjectConfig();
              _context4.next = 4;
              return this.prepareLinks(projectConfig.links);
            case 4:
              projectConfig.links = _context4.sent;
              _context4.next = 7;
              return this.getChangeContent();
            case 7:
              projectConfig.content = _context4.sent;
              this.startSpinner('Create Change Start!');
              _context4.next = 11;
              return this.createChange(projectConfig).then(function (res) {
                if (_this6.isSuccessResponse(res)) {
                  _this6.clearSpinner('Create Change Success!');
                } else {
                  _this6.clearSpinnerWithError("Create Change Error: ".concat(res.data.message));
                }
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function change() {
        return _change.apply(this, arguments);
      }
      return change;
    }()
  }]);
  return Change;
}(_services.BaseCommand);
var _default = new Change();
exports["default"] = _default;
//# sourceMappingURL=index.js.map