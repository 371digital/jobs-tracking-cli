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
var _services = require("../../services");
require("colors");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Logout = /*#__PURE__*/function (_BaseCommand) {
  (0, _inherits2["default"])(Logout, _BaseCommand);
  var _super = _createSuper(Logout);
  function Logout(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Logout);
    _this = _super.call(this, props);
    _this.logout = _this.logout.bind((0, _assertThisInitialized2["default"])(_this));
    _this.create({
      command: 'logout',
      builder: {},
      describe: 'Use for logout the system.'
    });
    _this.handler(_this.logout);
    return _this;
  }
  (0, _createClass2["default"])(Logout, [{
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.startSpinner('Logout Start!');
              _context.next = 3;
              return _services.localStorage.removeItem('password');
            case 3:
              _services.request.defaults.headers.common['password'] = '';
              this.clearSpinner('Logout Success!');
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }]);
  return Logout;
}(_services.BaseCommand);
var _default = new Logout();
exports["default"] = _default;
//# sourceMappingURL=index.js.map