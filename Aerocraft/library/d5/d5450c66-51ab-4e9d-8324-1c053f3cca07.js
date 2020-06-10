System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, FlyObjectType, FlyObjectSc;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0,
    FlyObjectType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d5450xmUatOnYMkHAU/PMoH", "FlyObjectSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (FlyObjectType) {
        FlyObjectType[FlyObjectType["Power"] = 0] = "Power";
        FlyObjectType[FlyObjectType["Score"] = 1] = "Score";
      })(FlyObjectType || _export("FlyObjectType", FlyObjectType = {}));

      Enum(FlyObjectType);

      _export("FlyObjectSc", FlyObjectSc = (_dec = ccclass('FlyObjectSc'), _dec2 = property({
        type: FlyObjectType
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(FlyObjectSc, _Component);

        function FlyObjectSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FlyObjectSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FlyObjectSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "value", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(FlyObjectSc, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return FlyObjectSc;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FlyObjectType.Score;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9GbHlPYmplY3RTYy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiRW51bSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZseU9iamVjdFR5cGUiLCJGbHlPYmplY3RTYyIsInR5cGUiLCJTY29yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUM5QkMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7aUJBRUxDLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtTQUFBQSxhLDZCQUFBQSxhOztBQUdaSCxNQUFBQSxJQUFJLENBQUNHLGFBQUQsQ0FBSjs7NkJBRWFDLFcsV0FEWkgsT0FBTyxDQUFDLGFBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFDRjtBQUFOLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLQSxDQUVSLEMsQ0FERztBQUdKO0FBQ0E7QUFDQTs7Ozs7UUFaNkJKLFM7Ozs7O2lCQUVSSSxhQUFhLENBQUNHLEs7O2dGQUNsQ0osUTs7Ozs7aUJBQ2MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgRW51bSB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEZseU9iamVjdFR5cGV7XHJcbiAgICBQb3dlcixTY29yZVxyXG59XHJcbkVudW0oRmx5T2JqZWN0VHlwZSk7XHJcbkBjY2NsYXNzKCdGbHlPYmplY3RTYycpXHJcbmV4cG9ydCBjbGFzcyBGbHlPYmplY3RTYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Rmx5T2JqZWN0VHlwZX0pXHJcbiAgICB0eXBlOkZseU9iamVjdFR5cGUgPSBGbHlPYmplY3RUeXBlLlNjb3JlO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2YWx1ZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==