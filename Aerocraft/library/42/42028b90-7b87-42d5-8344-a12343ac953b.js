System.register(["cc", "code-quality:cr", "./FlyObjectSc.js", "./GameSpeedRateSc.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, instantiate, LabelComponent, ParticleSystemComponent, FlyObjectType, GameSpeedRateSc, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, GameLogicSc;

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

  function _reportPossibleCrUseOfFlyObjectType(extras) {
    _reporterNs.report("FlyObjectType", "./FlyObjectSc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSpeedRateSc(extras) {
    _reporterNs.report("GameSpeedRateSc", "./GameSpeedRateSc", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      LabelComponent = _cc.LabelComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_FlyObjectScJs) {
      FlyObjectType = _FlyObjectScJs.FlyObjectType;
    }, function (_GameSpeedRateScJs) {
      GameSpeedRateSc = _GameSpeedRateScJs.GameSpeedRateSc;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "42028uQe4dC1YNEoSNDrJU7", "GameLogicSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameLogicSc", GameLogicSc = (_dec = ccclass('GameLogicSc'), _dec2 = property(ParticleSystemComponent), _dec3 = property(ParticleSystemComponent), _dec4 = property(LabelComponent), _dec5 = property(LabelComponent), _dec6 = property([Prefab]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameLogicSc, _Component);

        function GameLogicSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameLogicSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameLogicSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "particle1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "particle2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelPower", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelScore", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Score", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Power", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "objects", _descriptor7, _assertThisInitialized(_this));

          _this.time = 2;
          return _this;
        }

        _createClass(GameLogicSc, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            this.time += deltaTime * (_crd && GameSpeedRateSc === void 0 ? (_reportPossibleCrUseOfGameSpeedRateSc({
              error: Error()
            }), GameSpeedRateSc) : GameSpeedRateSc).speedRate;

            if (this.time >= 2) {
              this.time = 0;
              var gourp = instantiate(this.objects[Math.floor(Math.random() * this.objects.length)]);
              var y = Math.random() * 7 - 3.5;

              for (var i = gourp.children.length - 1; i >= 0; i--) {
                var obj = gourp.children[i];
                obj.parent = this.node;
                obj.setPosition(20 + obj.position.x, y + obj.position.y, obj.position.z);
              }
            }

            this.labelPower.string = "能量：" + this.Power.toString();
            this.labelScore.string = "分数：" + this.Score.toString();
          }
        }, {
          key: "handleFlyObject",
          value: function handleFlyObject(flyobject) {
            var particle = null;

            if (flyobject.type == (_crd && FlyObjectType === void 0 ? (_reportPossibleCrUseOfFlyObjectType({
              error: Error()
            }), FlyObjectType) : FlyObjectType).Power) {
              this.Power += flyobject.value;
              particle = this.particle1;
              (_crd && GameSpeedRateSc === void 0 ? (_reportPossibleCrUseOfGameSpeedRateSc({
                error: Error()
              }), GameSpeedRateSc) : GameSpeedRateSc).speedRate = 1;
            } else if (flyobject.type == (_crd && FlyObjectType === void 0 ? (_reportPossibleCrUseOfFlyObjectType({
              error: Error()
            }), FlyObjectType) : FlyObjectType).Score) {
              this.Score += flyobject.value;
              particle = this.particle2;
            }

            particle.stop();
            particle.play();
            particle.node.setPosition(flyobject.node.position.x, flyobject.node.position.y, flyobject.node.position.z + 2);
          }
        }]);

        return GameLogicSc;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particle1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particle2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelPower", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Score", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Power", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "objects", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9HYW1lTG9naWNTYy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJMYWJlbENvbXBvbmVudCIsIlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IiwiRmx5T2JqZWN0VHlwZSIsIkdhbWVTcGVlZFJhdGVTYyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVMb2dpY1NjIiwidGltZSIsImRlbHRhVGltZSIsInNwZWVkUmF0ZSIsImdvdXJwIiwib2JqZWN0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInkiLCJpIiwiY2hpbGRyZW4iLCJvYmoiLCJwYXJlbnQiLCJub2RlIiwic2V0UG9zaXRpb24iLCJwb3NpdGlvbiIsIngiLCJ6IiwibGFiZWxQb3dlciIsInN0cmluZyIsIlBvd2VyIiwidG9TdHJpbmciLCJsYWJlbFNjb3JlIiwiU2NvcmUiLCJmbHlvYmplY3QiLCJwYXJ0aWNsZSIsInR5cGUiLCJ2YWx1ZSIsInBhcnRpY2xlMSIsInBhcnRpY2xlMiIsInN0b3AiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsdUIsT0FBQUEsdUI7Ozs7QUFDckRDLE1BQUFBLGEsa0JBQUFBLGE7O0FBQ2JDLE1BQUFBLGUsc0JBQUFBLGU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzs2QkFHSkMsVyxXQURaRixPQUFP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QUNQQSxROzs7OztpQkFDTyxDOzs7Ozs7O2lCQUdZLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIExhYmVsQ29tcG9uZW50LCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEZseU9iamVjdFNjLCBGbHlPYmplY3RUeXBlIH0gZnJvbSAnLi9GbHlPYmplY3RTYyc7XHJcbmltcG9ydCB7IEdhbWVTcGVlZFJhdGVTYyB9IGZyb20gJy4vR2FtZVNwZWVkUmF0ZVNjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lTG9naWNTYycpXHJcbmV4cG9ydCBjbGFzcyBHYW1lTG9naWNTYyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50KVxyXG4gICAgcGFydGljbGUxOlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudClcclxuICAgIHBhcnRpY2xlMjpQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTGFiZWxDb21wb25lbnQpXHJcbiAgICBsYWJlbFBvd2VyOkxhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShMYWJlbENvbXBvbmVudClcclxuICAgIGxhYmVsU2NvcmU6TGFiZWxDb21wb25lbnQgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHlcclxuICAgIFNjb3JlID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgUG93ZXIgPSA1O1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoW1ByZWZhYl0pXHJcbiAgICBvYmplY3RzOiBQcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0aW1lID0gMjtcclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGFUaW1lICogR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZTtcclxuICAgICAgICBpZiAodGhpcy50aW1lID49IDIpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IGdvdXJwOiBOb2RlID0gaW5zdGFudGlhdGUodGhpcy5vYmplY3RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMub2JqZWN0cy5sZW5ndGgpXSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSAqIDcgLSAzLjU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBnb3VycC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGdvdXJwLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIG9iai5zZXRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAyMCArIG9iai5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHkgKyAgb2JqLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYWJlbFBvd2VyLnN0cmluZyA9IFwi6IO96YeP77yaXCIgKyB0aGlzLlBvd2VyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbFNjb3JlLnN0cmluZyA9IFwi5YiG5pWw77yaXCIgKyB0aGlzLlNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVGbHlPYmplY3QoZmx5b2JqZWN0OkZseU9iamVjdFNjKXtcclxuICAgICAgICBsZXQgcGFydGljbGU6UGFydGljbGVTeXN0ZW1Db21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIGlmKGZseW9iamVjdC50eXBlID09IEZseU9iamVjdFR5cGUuUG93ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLlBvd2VyICs9IGZseW9iamVjdC52YWx1ZTtcclxuICAgICAgICAgICAgcGFydGljbGUgPSB0aGlzLnBhcnRpY2xlMTtcclxuICAgICAgICAgICAgR2FtZVNwZWVkUmF0ZVNjLnNwZWVkUmF0ZSA9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYoZmx5b2JqZWN0LnR5cGUgPT0gRmx5T2JqZWN0VHlwZS5TY29yZSl7XHJcbiAgICAgICAgICAgIHRoaXMuU2NvcmUgKz0gZmx5b2JqZWN0LnZhbHVlO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJ0aWNsZS5zdG9wKCk7XHJcbiAgICAgICAgcGFydGljbGUucGxheSgpO1xyXG4gICAgICAgIHBhcnRpY2xlLm5vZGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgIGZseW9iamVjdC5ub2RlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIGZseW9iamVjdC5ub2RlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIGZseW9iamVjdC5ub2RlLnBvc2l0aW9uLnogKyAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==