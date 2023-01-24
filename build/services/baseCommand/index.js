"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _tools = _interopRequireDefault(require("../../tools"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BaseCommand = /*#__PURE__*/function (_Tools) {
  (0, _inherits2["default"])(BaseCommand, _Tools);
  var _super = _createSuper(BaseCommand);
  function BaseCommand(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BaseCommand);
    _this = _super.call(this, props);
    _this.commandOptions = {
      command: '',
      describe: '',
      builder: {},
      handler: function handler() {},
      commands: {}
    };
    return _this;
  }
  (0, _createClass2["default"])(BaseCommand, [{
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.commandOptions;
      this.commandOptions = options;
    }
  }, {
    key: "handler",
    value: function handler(_handler) {
      if (this.commandOptions) this.commandOptions.handler = _handler;
    }
  }]);
  return BaseCommand;
}(_tools["default"]);
var _default = BaseCommand;
exports["default"] = _default;
//# sourceMappingURL=index.js.map