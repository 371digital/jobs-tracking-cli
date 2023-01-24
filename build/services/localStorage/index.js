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
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _fs = _interopRequireDefault(require("fs"));
var _os = _interopRequireDefault(require("os"));
var _tools = _interopRequireDefault(require("../../tools"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LocalStorage = /*#__PURE__*/function (_Tools) {
  (0, _inherits2["default"])(LocalStorage, _Tools);
  var _super = _createSuper(LocalStorage);
  function LocalStorage() {
    var _this;
    (0, _classCallCheck2["default"])(this, LocalStorage);
    _this = _super.call(this);
    _this.db = null;
    _this.root = "".concat(_os["default"].homedir(), "/.jobs-tracking");
    _this.dbPath = "".concat(_this.root, "/db.json");
    return _this;
  }
  (0, _createClass2["default"])(LocalStorage, [{
    key: "checkDB",
    value: function checkDB() {
      if (!_fs["default"].existsSync(this.dbPath)) {
        _fs["default"].mkdirSync(this.root);
        _fs["default"].writeFileSync(this.dbPath, "{}");
      }
      if (!this.db) {
        this.db = this.readJsonFile(this.dbPath);
      }
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      this.checkDB();
      return this.db[key];
    }
  }, {
    key: "setItem",
    value: function () {
      var _setItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(key, value) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.checkDB();
              this.db[key] = value;
              _context.next = 4;
              return this.writeFile(this.dbPath, JSON.stringify(this.db));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setItem(_x, _x2) {
        return _setItem.apply(this, arguments);
      }
      return setItem;
    }()
  }, {
    key: "removeItem",
    value: function () {
      var _removeItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(key) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.checkDB();
              delete this.db[key];
              _context2.next = 4;
              return this.writeFile(this.dbPath, JSON.stringify(this.db));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function removeItem(_x3) {
        return _removeItem.apply(this, arguments);
      }
      return removeItem;
    }()
  }]);
  return LocalStorage;
}(_tools["default"]);
var _default = new LocalStorage();
exports["default"] = _default;
//# sourceMappingURL=index.js.map