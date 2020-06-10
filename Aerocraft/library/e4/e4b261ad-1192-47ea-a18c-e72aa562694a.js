System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, GameSpeedRateSc;

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
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CameraComponent = _cc.CameraComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e4b26GtEZJH6qGM5yqlYmlK", "GameSpeedRateSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameSpeedRateSc", GameSpeedRateSc = (_dec = ccclass('GameSpeedRateSc'), _dec2 = property(CameraComponent), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(GameSpeedRateSc, _Component);

        function GameSpeedRateSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameSpeedRateSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameSpeedRateSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxRate", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameSpeedRateSc, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            GameSpeedRateSc.speedRate += deltaTime * 0.5;

            if (GameSpeedRateSc.speedRate >= this.maxRate) {
              GameSpeedRateSc.speedRate = this.maxRate;
            }

            var target = GameSpeedRateSc.speedRate * 5 + 45;
            this.camera.fov += (target - this.camera.fov) * deltaTime;
          }
        }]);

        return GameSpeedRateSc;
      }(Component), _class3.speedRate = 1, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9HYW1lU3BlZWRSYXRlU2MudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIkNhbWVyYUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVTcGVlZFJhdGVTYyIsImRlbHRhVGltZSIsInNwZWVkUmF0ZSIsIm1heFJhdGUiLCJ0YXJnZXQiLCJjYW1lcmEiLCJmb3YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlOzs7Ozs7QUFDOUJDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O2lDQUdKQyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQ0YsZUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlBLENBQ0w7QUFDSDs7O2lDQUVPSSxTLEVBQW1CO0FBQ3ZCRCxZQUFBQSxlQUFlLENBQUNFLFNBQWhCLElBQTZCRCxTQUFTLEdBQUcsR0FBekM7O0FBQ0EsZ0JBQUdELGVBQWUsQ0FBQ0UsU0FBaEIsSUFBNkIsS0FBS0MsT0FBckMsRUFBNkM7QUFDekNILGNBQUFBLGVBQWUsQ0FBQ0UsU0FBaEIsR0FBNEIsS0FBS0MsT0FBakM7QUFDSDs7QUFDRCxnQkFBSUMsTUFBTSxHQUFHSixlQUFlLENBQUNFLFNBQWhCLEdBQTRCLENBQTVCLEdBQWdDLEVBQTdDO0FBQ0EsaUJBQUtHLE1BQUwsQ0FBWUMsR0FBWixJQUFtQixDQUFDRixNQUFNLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxHQUF0QixJQUE2QkwsU0FBaEQ7QUFDSDs7OztRQWpCZ0NMLFMsV0FDbkJNLFMsR0FBbUIsQzs7Ozs7aUJBRVIsSTs7a0ZBQ3hCSCxROzs7OztpQkFDUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDYW1lcmFDb21wb25lbnQgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZVNwZWVkUmF0ZVNjJylcclxuZXhwb3J0IGNsYXNzIEdhbWVTcGVlZFJhdGVTYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNwZWVkUmF0ZTpudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KENhbWVyYUNvbXBvbmVudClcclxuICAgIGNhbWVyYTpDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhSYXRlID0gNTtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZSArPSBkZWx0YVRpbWUgKiAwLjU7XHJcbiAgICAgICAgaWYoR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZSA+PSB0aGlzLm1heFJhdGUpe1xyXG4gICAgICAgICAgICBHYW1lU3BlZWRSYXRlU2Muc3BlZWRSYXRlID0gdGhpcy5tYXhSYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZSAqIDUgKyA0NTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgKz0gKHRhcmdldCAtIHRoaXMuY2FtZXJhLmZvdikgKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuIl19