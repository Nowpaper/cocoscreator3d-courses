System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, OutViewRemoveSelfSc;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e421dFeWGRAAIvYD6DTu1yy", "OutViewRemoveSelfSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("OutViewRemoveSelfSc", OutViewRemoveSelfSc = (_dec = ccclass('OutViewRemoveSelfSc'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(OutViewRemoveSelfSc, _Component);

        function OutViewRemoveSelfSc() {
          _classCallCheck(this, OutViewRemoveSelfSc);

          return _possibleConstructorReturn(this, _getPrototypeOf(OutViewRemoveSelfSc).apply(this, arguments));
        }

        _createClass(OutViewRemoveSelfSc, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.node.position.x <= -20) {
              this.node.destroy();
            }
          }
        }]);

        return OutViewRemoveSelfSc;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9PdXRWaWV3UmVtb3ZlU2VsZlNjLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJPdXRWaWV3UmVtb3ZlU2VsZlNjIiwiZGVsdGFUaW1lIiwibm9kZSIsInBvc2l0aW9uIiwieCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ2JDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O3FDQUdKQyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQzs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVEsQ0FDSjtBQUNIOzs7aUNBRU1HLFMsRUFBbUI7QUFDdEIsZ0JBQUksS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxDQUFuQixJQUF3QixDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLG1CQUFLRixJQUFMLENBQVVHLE9BQVY7QUFDSDtBQUNKOzs7O1FBaEJvQ1IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdPdXRWaWV3UmVtb3ZlU2VsZlNjJylcclxuZXhwb3J0IGNsYXNzIE91dFZpZXdSZW1vdmVTZWxmU2MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueCA8PSAtMjApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19