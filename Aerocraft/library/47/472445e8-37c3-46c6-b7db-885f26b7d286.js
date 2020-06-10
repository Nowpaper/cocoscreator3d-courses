System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AutoRotateSc;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "47244XoN8NGxrfbiF8mt9KG", "AutoRotateSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AutoRotateSc", AutoRotateSc = (_dec = ccclass('AutoRotateSc'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AutoRotateSc, _Component);

        function AutoRotateSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AutoRotateSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoRotateSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "speed", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(AutoRotateSc, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            this.node.setRotationFromEuler(this.node.eulerAngles.x + this.speed.x * deltaTime, this.node.eulerAngles.y + this.speed.y * deltaTime, this.node.eulerAngles.z + this.speed.z * deltaTime);
          }
        }]);

        return AutoRotateSc;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9BdXRvUm90YXRlU2MudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInYzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQXV0b1JvdGF0ZVNjIiwiZGVsdGFUaW1lIiwibm9kZSIsInNldFJvdGF0aW9uRnJvbUV1bGVyIiwiZXVsZXJBbmdsZXMiLCJ4Iiwic3BlZWQiLCJ5IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQXVCQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUNwQ0MsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBU0ssQ0FDTDtBQUNIOzs7aUNBRU9HLFMsRUFBbUI7QUFDdkI7QUFDQSxpQkFBS0MsSUFBTCxDQUFVQyxvQkFBVixDQUNJLEtBQUtELElBQUwsQ0FBVUUsV0FBVixDQUFzQkMsQ0FBdEIsR0FBMEIsS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEdBQWVKLFNBRDdDLEVBRUksS0FBS0MsSUFBTCxDQUFVRSxXQUFWLENBQXNCRyxDQUF0QixHQUEwQixLQUFLRCxLQUFMLENBQVdDLENBQVgsR0FBZU4sU0FGN0MsRUFHSSxLQUFLQyxJQUFMLENBQVVFLFdBQVYsQ0FBc0JJLENBQXRCLEdBQTBCLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBWCxHQUFlUCxTQUg3QztBQUtIOzs7O1FBbkI2QkwsUyxpRkFLN0JHLFE7Ozs7O2lCQUNZRixFQUFFLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0F1dG9Sb3RhdGVTYycpXHJcbmV4cG9ydCBjbGFzcyBBdXRvUm90YXRlU2MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6VmVjMyA9IHYzKCk7XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbkZyb21FdWxlcihcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzLnggKyB0aGlzLnNwZWVkLnggKiBkZWx0YVRpbWUsXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcy55ICsgdGhpcy5zcGVlZC55ICogZGVsdGFUaW1lLFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMueiArIHRoaXMuc3BlZWQueiAqIGRlbHRhVGltZVxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0=