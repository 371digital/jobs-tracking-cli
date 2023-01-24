"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _services = require("../../services");
var _change = _interopRequireDefault(require("./change"));
var _project = _interopRequireDefault(require("./project"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Create = /*#__PURE__*/function (_BaseCommand) {
  (0, _inherits2["default"])(Create, _BaseCommand);
  var _super = _createSuper(Create);
  function Create(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Create);
    _this = _super.call(this, props);
    _this.create({
      command: 'create',
      builder: function builder(yargs) {
        yargs.command(_change["default"].commandOptions);
        yargs.command(_project["default"].commandOptions);
      },
      describe: 'Use for new creations [change|project]'
    });
    return _this;
  }
  return (0, _createClass2["default"])(Create);
}(_services.BaseCommand);
var _default = new Create();
exports["default"] = _default;
//# sourceMappingURL=index.js.map