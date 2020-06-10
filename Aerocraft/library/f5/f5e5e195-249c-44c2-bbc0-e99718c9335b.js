System.register(["cc", "code-quality:cr", "./GameSpeedRateSc.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, v3, GameSpeedRateSc, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ObjectMoveSc;

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

  function _reportPossibleCrUseOfGameSpeedRateSc(extras) {
    _reporterNs.report("GameSpeedRateSc", "./GameSpeedRateSc", _context.meta, extras);
  }

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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameSpeedRateScJs) {
      GameSpeedRateSc = _GameSpeedRateScJs.GameSpeedRateSc;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f5e5eGVJJxEwrvA6ZcYyTNb", "ObjectMoveSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ObjectMoveSc", ObjectMoveSc = (_dec = ccclass('ObjectMoveSc'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(ObjectMoveSc, _Component);

        function ObjectMoveSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ObjectMoveSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ObjectMoveSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "speed", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(ObjectMoveSc, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.node.setPosition(this.node.position.x + this.speed.x * deltaTime * (_crd && GameSpeedRateSc === void 0 ? (_reportPossibleCrUseOfGameSpeedRateSc({
              error: Error()
            }), GameSpeedRateSc) : GameSpeedRateSc).speedRate, this.node.position.y + this.speed.y * deltaTime * (_crd && GameSpeedRateSc === void 0 ? (_reportPossibleCrUseOfGameSpeedRateSc({
              error: Error()
            }), GameSpeedRateSc) : GameSpeedRateSc).speedRate, this.node.position.z + this.speed.z * deltaTime * (_crd && GameSpeedRateSc === void 0 ? (_reportPossibleCrUseOfGameSpeedRateSc({
              error: Error()
            }), GameSpeedRateSc) : GameSpeedRateSc).speedRate);
          }
        }]);

        return ObjectMoveSc;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(3, 0, 0);
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9PYmplY3RNb3ZlU2MudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInYzIiwiR2FtZVNwZWVkUmF0ZVNjIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiT2JqZWN0TW92ZVNjIiwiZGVsdGFUaW1lIiwibm9kZSIsInNldFBvc2l0aW9uIiwicG9zaXRpb24iLCJ4Iiwic3BlZWQiLCJzcGVlZFJhdGUiLCJ5IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF1QkMsTUFBQUEsRSxPQUFBQSxFOzs7O0FBQ25DQyxNQUFBQSxlLHNCQUFBQSxlOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRUssQ0FDTDtBQUNIOzs7aUNBR09HLFMsRUFBbUI7QUFDdkIsaUJBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUNJLEtBQUtELElBQUwsQ0FBVUUsUUFBVixDQUFtQkMsQ0FBbkIsR0FBdUIsS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEdBQWVKLFNBQWYsR0FBMkI7QUFBQTtBQUFBLG9EQUFnQk0sU0FEdEUsRUFFSSxLQUFLTCxJQUFMLENBQVVFLFFBQVYsQ0FBbUJJLENBQW5CLEdBQXVCLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBWCxHQUFlUCxTQUFmLEdBQTJCO0FBQUE7QUFBQSxvREFBZ0JNLFNBRnRFLEVBR0ksS0FBS0wsSUFBTCxDQUFVRSxRQUFWLENBQW1CSyxDQUFuQixHQUF1QixLQUFLSCxLQUFMLENBQVdHLENBQVgsR0FBZVIsU0FBZixHQUEyQjtBQUFBO0FBQUEsb0RBQWdCTSxTQUh0RTtBQUtIOzs7O1FBWjZCWixTLGlGQUk3QkksUTs7Ozs7aUJBQ1lILEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lU3BlZWRSYXRlU2MgfSBmcm9tICcuL0dhbWVTcGVlZFJhdGVTYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnT2JqZWN0TW92ZVNjJylcclxuZXhwb3J0IGNsYXNzIE9iamVjdE1vdmVTYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOlZlYzMgPSB2MygzLDAsMCk7XHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMuc3BlZWQueCAqIGRlbHRhVGltZSAqIEdhbWVTcGVlZFJhdGVTYy5zcGVlZFJhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5zcGVlZC55ICogZGVsdGFUaW1lICogR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZSxcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnogKyB0aGlzLnNwZWVkLnogKiBkZWx0YVRpbWUgKiBHYW1lU3BlZWRSYXRlU2Muc3BlZWRSYXRlXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==