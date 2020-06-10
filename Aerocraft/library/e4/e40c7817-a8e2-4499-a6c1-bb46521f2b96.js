System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, CloudSc;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      _cclegacy._RF.push({}, "e40c7gXqOJEmabBu0ZSHyuW", "CloudSc", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CloudSc", CloudSc = (_dec = ccclass('CloudSc'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(CloudSc, _Component);

        function CloudSc() {
          _classCallCheck(this, CloudSc);

          return _possibleConstructorReturn(this, _getPrototypeOf(CloudSc).apply(this, arguments));
        }

        _createClass(CloudSc, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.node.setPosition(this.node.position.x, Math.random() * 10 - 5, this.node.position.z);

            var _iterator = _createForOfIteratorHelper(this.node.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var node = _step.value;
                var scale = Math.random() * 1 + 0.3;
                node.setScale(scale, scale, scale);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.node.position.x <= -20) {
              this.node.setPosition(20, Math.random() * 10 - 5, this.node.position.z);

              var _iterator2 = _createForOfIteratorHelper(this.node.children),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var node = _step2.value;
                  var scale = Math.random() * 1 + 0.3;
                  node.setScale(scale, scale, scale);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }]);

        return CloudSc;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovV29ya0Rlc2svY29jb3MzZC9BZXJvY3JhZnQvYXNzZXRzL3NyYy9DbG91ZFNjLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDbG91ZFNjIiwibm9kZSIsInNldFBvc2l0aW9uIiwicG9zaXRpb24iLCJ4IiwiTWF0aCIsInJhbmRvbSIsInoiLCJjaGlsZHJlbiIsInNjYWxlIiwic2V0U2NhbGUiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ2JDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O3lCQUdKQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEM7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTO0FBQ0w7QUFDQSxpQkFBS0csSUFBTCxDQUFVQyxXQUFWLENBQ0ksS0FBS0QsSUFBTCxDQUFVRSxRQUFWLENBQW1CQyxDQUR2QixFQUVJQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsQ0FGekIsRUFHSSxLQUFLTCxJQUFMLENBQVVFLFFBQVYsQ0FBbUJJLENBSHZCOztBQUZLLHVEQU9XLEtBQUtOLElBQUwsQ0FBVU8sUUFQckI7QUFBQTs7QUFBQTtBQU9MLGtFQUFtQztBQUFBLG9CQUEzQlAsSUFBMkI7QUFDL0Isb0JBQUlRLEtBQUssR0FBR0osSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLEdBQWhDO0FBQ0FMLGdCQUFBQSxJQUFJLENBQUNTLFFBQUwsQ0FDSUQsS0FESixFQUNVQSxLQURWLEVBQ2dCQSxLQURoQjtBQUdIO0FBWkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFSOzs7aUNBRU9FLFMsRUFBbUI7QUFDdkI7QUFDQSxnQkFBRyxLQUFLVixJQUFMLENBQVVFLFFBQVYsQ0FBbUJDLENBQW5CLElBQXdCLENBQUMsRUFBNUIsRUFBK0I7QUFDM0IsbUJBQUtILElBQUwsQ0FBVUMsV0FBVixDQUNJLEVBREosRUFFSUcsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQWhCLEdBQXFCLENBRnpCLEVBR0ksS0FBS0wsSUFBTCxDQUFVRSxRQUFWLENBQW1CSSxDQUh2Qjs7QUFEMkIsMERBTVgsS0FBS04sSUFBTCxDQUFVTyxRQU5DO0FBQUE7O0FBQUE7QUFNM0IsdUVBQW1DO0FBQUEsc0JBQTNCUCxJQUEyQjtBQUMvQixzQkFBSVEsS0FBSyxHQUFHSixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsR0FBaEM7QUFDQUwsa0JBQUFBLElBQUksQ0FBQ1MsUUFBTCxDQUNJRCxLQURKLEVBQ1VBLEtBRFYsRUFDZ0JBLEtBRGhCO0FBR0g7QUFYMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk5QjtBQUNKOzs7O1FBdEN3QlosUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdDbG91ZFNjJylcclxuZXhwb3J0IGNsYXNzIENsb3VkU2MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMTAgLSA1LFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24uelxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IE1hdGgucmFuZG9tKCkgKiAxICsgMC4zO1xyXG4gICAgICAgICAgICBub2RlLnNldFNjYWxlKFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsc2NhbGUsc2NhbGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBpZih0aGlzLm5vZGUucG9zaXRpb24ueCA8PSAtMjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAyMCxcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAxMCAtIDUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24uelxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IE1hdGgucmFuZG9tKCkgKiAxICsgMC4zO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRTY2FsZShcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZSxzY2FsZSxzY2FsZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=