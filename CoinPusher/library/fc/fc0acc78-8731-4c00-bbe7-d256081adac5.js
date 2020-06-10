System.register(["cc", "code-quality:cr", "./GameLogic.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, ColliderComponent, GameLogic, _dec, _class, _crd, ccclass, property, Bottom;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ColliderComponent = _cc.ColliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameLogicJs) {
      GameLogic = _GameLogicJs.GameLogic;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fc0acx4hzFMALvn0lYIGtrF", "Bottom", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Bottom", Bottom = (_dec = ccclass('Bottom'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Bottom, _Component);

        function Bottom() {
          _classCallCheck(this, Bottom);

          return _possibleConstructorReturn(this, _getPrototypeOf(Bottom).apply(this, arguments));
        }

        _createClass(Bottom, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var Collider = this.getComponent(ColliderComponent);
            Collider.on('onCollisionStay', this.onCollision, this);
          }
        }, {
          key: "onCollision",
          value: function onCollision(event) {
            event.otherCollider.node.destroy();
            this.node.parent.getComponent(_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).score += 10;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return Bottom;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMveWFuZ2hlbmdyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2NvY29zY3JlYXRvci9Db2luUHVzaGVyL2Fzc2V0cy9Cb3R0b20udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIkNvbGxpZGVyQ29tcG9uZW50IiwiR2FtZUxvZ2ljIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQm90dG9tIiwiQ29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJvbiIsIm9uQ29sbGlzaW9uIiwiZXZlbnQiLCJvdGhlckNvbGxpZGVyIiwibm9kZSIsImRlc3Ryb3kiLCJwYXJlbnQiLCJzY29yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsaUIsT0FBQUEsaUI7Ozs7QUFDN0JDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzt3QkFHSkMsTSxXQURaRixPQUFPLENBQUMsUUFBRCxDOzs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFZ0I7QUFDWixnQkFBSUcsUUFBUSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JOLGlCQUFsQixDQUFmO0FBQ0FLLFlBQUFBLFFBQVEsQ0FBQ0UsRUFBVCxDQUFZLGlCQUFaLEVBQStCLEtBQUtDLFdBQXBDLEVBQWlELElBQWpEO0FBQ0g7OztzQ0FFb0JDLEssRUFBd0I7QUFDekNBLFlBQUFBLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLE9BQXpCO0FBQ0EsaUJBQUtELElBQUwsQ0FBVUUsTUFBVixDQUFpQlAsWUFBakI7QUFBQTtBQUFBLHdDQUF5Q1EsS0FBekMsSUFBa0QsRUFBbEQ7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQXBCd0JmLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENvbGxpZGVyQ29tcG9uZW50LCBJQ29sbGlzaW9uRXZlbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lTG9naWMgfSBmcm9tICcuL0dhbWVMb2dpYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQm90dG9tJylcbmV4cG9ydCBjbGFzcyBCb3R0b20gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgcHVibGljIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IENvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpO1xuICAgICAgICBDb2xsaWRlci5vbignb25Db2xsaXNpb25TdGF5JywgdGhpcy5vbkNvbGxpc2lvbiwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgb25Db2xsaXNpb24gKGV2ZW50OiBJQ29sbGlzaW9uRXZlbnQpIHtcbiAgICAgICAgZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoR2FtZUxvZ2ljKS5zY29yZSArPSAxMDtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=