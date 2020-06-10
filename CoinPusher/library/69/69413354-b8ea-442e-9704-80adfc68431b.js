System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, LabelComponent, systemEvent, SystemEventType, view, instantiate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GameLogic;

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
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      LabelComponent = _cc.LabelComponent;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      view = _cc.view;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "69413NUuOpELpcEgK38aEMb", "GameLogic", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameLogic", GameLogic = (_dec = ccclass('GameLogic'), _dec2 = property(Prefab), _dec3 = property(LabelComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameLogic, _Component);

        function GameLogic() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameLogic);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameLogic)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "coin", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));

          _this._score = 0;
          return _this;
        }

        _createClass(GameLogic, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            systemEvent.on(SystemEventType.TOUCH_END, this.touch_end, this);
          }
        }, {
          key: "touch_end",
          value: function touch_end(e) {
            var rate = e.getLocationX() / view.getCanvasSize().width;
            var x = 4 * rate - 2;
            var coin = instantiate(this.coin);
            this.node.addChild(coin);
            coin.setPosition(x, 3, 0.18);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "score",
          get: function get() {
            return this._score;
          },
          set: function set(v) {
            this._score = v;
            this.label.string = v.toString();
          }
        }]);

        return GameLogic;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMveWFuZ2hlbmdyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2NvY29zY3JlYXRvci9Db2luUHVzaGVyL2Fzc2V0cy9HYW1lTG9naWMudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkxhYmVsQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudFR5cGUiLCJ2aWV3IiwiaW5zdGFudGlhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lTG9naWMiLCJfc2NvcmUiLCJvbiIsIlRPVUNIX0VORCIsInRvdWNoX2VuZCIsImUiLCJyYXRlIiwiZ2V0TG9jYXRpb25YIiwiZ2V0Q2FudmFzU2l6ZSIsIndpZHRoIiwieCIsImNvaW4iLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsInYiLCJsYWJlbCIsInN0cmluZyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBd0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7Ozs7OztBQUNqR0MsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQVFIQyxRQUFRLENBQUNQLE1BQUQsQyxVQUVSTyxRQUFRLENBQUNOLGNBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBaUJEUSxNLEdBQWtCLEM7Ozs7OztrQ0FmakI7QUFDTDtBQUNBUCxZQUFBQSxXQUFXLENBQUNRLEVBQVosQ0FBZVAsZUFBZSxDQUFDUSxTQUEvQixFQUF5QyxLQUFLQyxTQUE5QyxFQUF3RCxJQUF4RDtBQUNIOzs7b0NBQ2lCQyxDLEVBQVE7QUFDdEIsZ0JBQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxZQUFGLEtBQW1CWCxJQUFJLENBQUNZLGFBQUwsR0FBcUJDLEtBQW5EO0FBQ0EsZ0JBQUlDLENBQUMsR0FBSSxJQUFJSixJQUFMLEdBQWEsQ0FBckI7QUFDQSxnQkFBSUssSUFBUyxHQUFHZCxXQUFXLENBQUMsS0FBS2MsSUFBTixDQUEzQjtBQUNBLGlCQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ0csV0FBTCxDQUFpQkosQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsSUFBckI7QUFDSCxXLENBQ0Q7QUFDQTtBQUNBOzs7OzhCQUc0QjtBQUN4QixtQkFBTyxLQUFLVCxNQUFaO0FBQ0gsVzs0QkFDZ0JjLEMsRUFBWTtBQUN6QixpQkFBS2QsTUFBTCxHQUFjYyxDQUFkO0FBQ0EsaUJBQUtDLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQkYsQ0FBQyxDQUFDRyxRQUFGLEVBQXBCO0FBQ0g7Ozs7UUFqQzBCM0IsUzs7Ozs7aUJBUWIsSTs7Ozs7OztpQkFFUyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIExhYmVsQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBUb3VjaCwgdmlldywgaW5zdGFudGlhdGUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2FtZUxvZ2ljJylcbmV4cG9ydCBjbGFzcyBHYW1lTG9naWMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIEBwcm9wZXJ0eShQcmVmYWIpXG4gICAgY29pbjpQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShMYWJlbENvbXBvbmVudClcbiAgICBsYWJlbDpMYWJlbENvbXBvbmVudCA9IG51bGw7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnRvdWNoX2VuZCx0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB0b3VjaF9lbmQoZTpUb3VjaCl7XG4gICAgICAgIGxldCByYXRlID0gZS5nZXRMb2NhdGlvblgoKSAvIHZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoO1xuICAgICAgICBsZXQgeCA9ICg0ICogcmF0ZSkgLSAyO1xuICAgICAgICBsZXQgY29pbjpOb2RlID0gaW5zdGFudGlhdGUodGhpcy5jb2luKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvaW4pO1xuICAgICAgICBjb2luLnNldFBvc2l0aW9uKHgsMywwLjE4KTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxuICAgIFxuICAgIHByaXZhdGUgX3Njb3JlIDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZ2V0IHNjb3JlKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2NvcmUodiA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zY29yZSA9IHY7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdi50b1N0cmluZygpO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==