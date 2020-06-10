System.register(["cc", "code-quality:cr", "./FlyObjectSc.js", "./GameLogicSc.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, systemEvent, SystemEventType, director, ColliderComponent, find, FlyObjectSc, GameLogicSc, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AerocraftSc;

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

  function _reportPossibleCrUseOfFlyObjectSc(extras) {
    _reporterNs.report("FlyObjectSc", "./FlyObjectSc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogicSc(extras) {
    _reporterNs.report("GameLogicSc", "./GameLogicSc", _context.meta, extras);
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
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      director = _cc.director;
      ColliderComponent = _cc.ColliderComponent;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_FlyObjectScJs) {
      FlyObjectSc = _FlyObjectScJs.FlyObjectSc;
    }, function (_GameLogicScJs) {
      GameLogicSc = _GameLogicScJs.GameLogicSc;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "33e66xLqT5G1IGn36LxsoEp", "AerocraftSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AerocraftSc", AerocraftSc = (_dec = ccclass('AerocraftSc'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AerocraftSc, _Component);

        function AerocraftSc() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AerocraftSc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AerocraftSc)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "speed", _descriptor, _assertThisInitialized(_this));

          _this.targetY = 0;
          return _this;
        }

        _createClass(AerocraftSc, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            systemEvent.on(SystemEventType.MOUSE_MOVE, this.onMouseMove, this);
            var Collider = this.getComponent(ColliderComponent);
            Collider.on('onTriggerEnter', this.onTrigger, this);
          }
        }, {
          key: "onTrigger",
          value: function onTrigger(event) {
            var objectsc = event.otherCollider.node.parent.getComponent(_crd && FlyObjectSc === void 0 ? (_reportPossibleCrUseOfFlyObjectSc({
              error: Error()
            }), FlyObjectSc) : FlyObjectSc);
            find('game').getComponent(_crd && GameLogicSc === void 0 ? (_reportPossibleCrUseOfGameLogicSc({
              error: Error()
            }), GameLogicSc) : GameLogicSc).handleFlyObject(objectsc);
            event.otherCollider.node.parent.destroy();
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(e) {
            var rate = e.getLocationInView().y / director.getWinSize().height;
            this.targetY = 5 - 10 * rate;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            var sub = this.targetY - this.node.position.y;

            if (Math.abs(sub) > 0.1) {
              var add = this.speed * deltaTime * sub;
              this.node.setPosition(this.node.position.x, this.node.position.y + add, this.node.position.z);
              this.node.setRotationFromEuler(0, 0, sub * 30);
            }
          }
        }]);

        return AerocraftSc;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9BZXJvY3JhZnRTYy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudFR5cGUiLCJkaXJlY3RvciIsIkNvbGxpZGVyQ29tcG9uZW50IiwiZmluZCIsIkZseU9iamVjdFNjIiwiR2FtZUxvZ2ljU2MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBZXJvY3JhZnRTYyIsInRhcmdldFkiLCJvbiIsIk1PVVNFX01PVkUiLCJvbk1vdXNlTW92ZSIsIkNvbGxpZGVyIiwiZ2V0Q29tcG9uZW50Iiwib25UcmlnZ2VyIiwiZXZlbnQiLCJvYmplY3RzYyIsIm90aGVyQ29sbGlkZXIiLCJub2RlIiwicGFyZW50IiwiaGFuZGxlRmx5T2JqZWN0IiwiZGVzdHJveSIsImUiLCJyYXRlIiwiZ2V0TG9jYXRpb25JblZpZXciLCJ5IiwiZ2V0V2luU2l6ZSIsImhlaWdodCIsImRlbHRhVGltZSIsInN1YiIsInBvc2l0aW9uIiwiTWF0aCIsImFicyIsImFkZCIsInNwZWVkIiwic2V0UG9zaXRpb24iLCJ4IiwieiIsInNldFJvdGF0aW9uRnJvbUV1bGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUE2QkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGlCLE9BQUFBLGlCO0FBQWtDQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDbkhDLE1BQUFBLFcsa0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFcsa0JBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0JJRyxPLEdBQVUsQzs7Ozs7O2tDQW5CVDtBQUNMO0FBQ0FWLFlBQUFBLFdBQVcsQ0FBQ1csRUFBWixDQUFlVixlQUFlLENBQUNXLFVBQS9CLEVBQTBDLEtBQUtDLFdBQS9DLEVBQTJELElBQTNEO0FBQ0EsZ0JBQUlDLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCWixpQkFBbEIsQ0FBZjtBQUNBVyxZQUFBQSxRQUFRLENBQUNILEVBQVQsQ0FBWSxnQkFBWixFQUE4QixLQUFLSyxTQUFuQyxFQUE4QyxJQUE5QztBQUNIOzs7b0NBRWtCQyxLLEVBQXNCO0FBQ3JDLGdCQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLE1BQXpCLENBQWdDTixZQUFoQztBQUFBO0FBQUEsMkNBQWY7QUFDQVgsWUFBQUEsSUFBSSxDQUFDLE1BQUQsQ0FBSixDQUFhVyxZQUFiO0FBQUE7QUFBQSw0Q0FBdUNPLGVBQXZDLENBQXVESixRQUF2RDtBQUNBRCxZQUFBQSxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCQyxNQUF6QixDQUFnQ0UsT0FBaEM7QUFDSDs7O3NDQUNXQyxDLEVBQWE7QUFDckIsZ0JBQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxpQkFBRixHQUFzQkMsQ0FBdEIsR0FBMEJ6QixRQUFRLENBQUMwQixVQUFULEdBQXNCQyxNQUEzRDtBQUNBLGlCQUFLbkIsT0FBTCxHQUFlLElBQUksS0FBS2UsSUFBeEI7QUFFSDs7O2lDQUlPSyxTLEVBQW1CO0FBQ3ZCO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBRyxLQUFLckIsT0FBTCxHQUFlLEtBQUtVLElBQUwsQ0FBVVksUUFBVixDQUFtQkwsQ0FBNUM7O0FBQ0EsZ0JBQUdNLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxHQUFULElBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLGtCQUFJSSxHQUFHLEdBQUcsS0FBS0MsS0FBTCxHQUFhTixTQUFiLEdBQXlCQyxHQUFuQztBQUNBLG1CQUFLWCxJQUFMLENBQVVpQixXQUFWLENBQ0ksS0FBS2pCLElBQUwsQ0FBVVksUUFBVixDQUFtQk0sQ0FEdkIsRUFFSSxLQUFLbEIsSUFBTCxDQUFVWSxRQUFWLENBQW1CTCxDQUFuQixHQUF1QlEsR0FGM0IsRUFHSSxLQUFLZixJQUFMLENBQVVZLFFBQVYsQ0FBbUJPLENBSHZCO0FBS0EsbUJBQUtuQixJQUFMLENBQVVvQixvQkFBVixDQUErQixDQUEvQixFQUFpQyxDQUFqQyxFQUFtQ1QsR0FBRyxHQUFHLEVBQXpDO0FBQ0g7QUFDSjs7OztRQWxDNEJoQyxTLGlGQW1CNUJTLFE7Ozs7O2lCQUNPLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudFR5cGUsIEV2ZW50TW91c2UsIGRpcmVjdG9yLCBDb2xsaWRlckNvbXBvbmVudCwgSVRyaWdnZXJFdmVudCwgZmluZCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgRmx5T2JqZWN0U2MgfSBmcm9tICcuL0ZseU9iamVjdFNjJztcclxuaW1wb3J0IHsgR2FtZUxvZ2ljU2MgfSBmcm9tICcuL0dhbWVMb2dpY1NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdBZXJvY3JhZnRTYycpXHJcbmV4cG9ydCBjbGFzcyBBZXJvY3JhZnRTYyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZU1vdmUsdGhpcyk7IFxyXG4gICAgICAgIGxldCBDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICBDb2xsaWRlci5vbignb25UcmlnZ2VyRW50ZXInLCB0aGlzLm9uVHJpZ2dlciwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgb25UcmlnZ2VyIChldmVudDogSVRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIGxldCBvYmplY3RzYyA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KEZseU9iamVjdFNjKTtcclxuICAgICAgICBmaW5kKCdnYW1lJykuZ2V0Q29tcG9uZW50KEdhbWVMb2dpY1NjKS5oYW5kbGVGbHlPYmplY3Qob2JqZWN0c2MpO1xyXG4gICAgICAgIGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZU1vdmUoZTpFdmVudE1vdXNlKXtcclxuICAgICAgICBsZXQgcmF0ZSA9IGUuZ2V0TG9jYXRpb25JblZpZXcoKS55IC8gZGlyZWN0b3IuZ2V0V2luU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICB0aGlzLnRhcmdldFkgPSA1IC0gMTAgKiByYXRlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZCA9IDg7XHJcbiAgICBwcml2YXRlIHRhcmdldFkgPSAwO1xyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBsZXQgc3ViID0gdGhpcy50YXJnZXRZIC0gdGhpcy5ub2RlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoc3ViKSA+IDAuMSl7XHJcbiAgICAgICAgICAgIGxldCBhZGQgPSB0aGlzLnNwZWVkICogZGVsdGFUaW1lICogc3ViO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgYWRkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnpcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uRnJvbUV1bGVyKDAsMCxzdWIgKiAzMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==