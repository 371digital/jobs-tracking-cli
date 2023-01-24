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
var _inquirer = _interopRequireDefault(require("inquirer"));
require("colors");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Login = /*#__PURE__*/function (_BaseCommand) {
  (0, _inherits2["default"])(Login, _BaseCommand);
  var _super = _createSuper(Login);
  function Login(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Login);
    _this = _super.call(this, props);
    _this.login = _this.login.bind((0, _assertThisInitialized2["default"])(_this));
    _this.create({
      command: 'login',
      builder: {},
      describe: 'Use for login the system.'
    });
    _this.handler(_this.login);
    return _this;
  }
  (0, _createClass2["default"])(Login, [{
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this2 = this;
        var _yield$inquirer$promp, password;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _inquirer["default"].prompt([{
                name: 'password',
                message: 'Please enter your password.',
                type: 'password'
              }]);
            case 2:
              _yield$inquirer$promp = _context2.sent;
              password = _yield$inquirer$promp.password;
              this.startSpinner('Checking password!');
              _context2.next = 7;
              return _services.request.post('/auth/checkPassword', {
                password: password
              }).then( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!_this2.isSuccessResponse(res)) {
                          _context.next = 7;
                          break;
                        }
                        _this2.clearSpinner('Login Success!');
                        _context.next = 4;
                        return _services.localStorage.setItem('password', password);
                      case 4:
                        _services.request.defaults.headers.common['password'] = password;
                        _context.next = 8;
                        break;
                      case 7:
                        _this2.clearSpinnerWithError('Wrong Password!');
                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login() {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }]);
  return Login;
}(_services.BaseCommand);
var _default = new Login();
exports["default"] = _default;
//# sourceMappingURL=index.js.map