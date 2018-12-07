webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/test/hobostrap/components/Chat.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var rawData = [["Dec 5, 12:30", "greta", "think they're losing momentum?"], ["Dec 5, 12:30", "ralph", "google all the way!"], ["Dec 5, 12:30", "greenbeans", "$SPY 450 you heard it here first"], ["Dec 5, 12:30", "faceplant65", "@greenbeans you're dreaming"], ["Dec 5, 12:31", "toontown", "new bear market definitely"], ["Dec 5, 12:31", "greg1974", "maybe apple can turn things around?"], ["Dec 5, 12:31", "gorevidal", "man crazy day in the markets"], ["Dec 5, 12:31", "jake", "i'm definitely selling lol good luck to you bulls"], ["Dec 5, 12:31", "hobotae", "follow me on seekingalpha"], ["Dec 5, 12:31", "koalasara", "when do earnings come out?"], ["Dec 5, 12:31", "sueylicious", "you suck! HA"], ["Dec 5, 12:31", "jesshsu", "think this is the beginning of the end"], ["Dec 5, 12:31", "andrewthemarine", "you suck!"], ["Dec 5, 12:31", "bogene", "no way you suck!"], ["Dec 5, 12:31", "ralphnader", "george bush senior RIP"], ["Dec 5, 12:31", "monicabonica", "trump is destroying this country"], ["Dec 5, 12:31", "yeahyeah", "china backed down!"], ["Dec 5, 12:31", "yousucklol", "$SPY will rebound soon"]];
var formatChat = rawData.map(function (element) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    color: "primary",
    className: "tweetbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    left: true,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    object: true,
    "data-src": "holder.js",
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, element[0], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    heading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, element[1]), element[2]));
});

var Chatbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chatbox, _React$Component);

  function Chatbox(props) {
    var _this;

    _classCallCheck(this, Chatbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chatbox).call(this, props));
    _this.state = {
      chat: []
    };
    return _this;
  }

  _createClass(Chatbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _loop = function _loop(i) {
        setTimeout(function () {
          _this2.state.chat = _toConsumableArray(_this2.state.chat).concat([formatChat[i]]);

          _this2.setState({
            state: _this2.state
          });
        }, 2000 * (i + 1));
      };

      for (var i = 0; i < formatChat.length; i++) {
        _loop(i);
      }

      console.log(this.state.chat);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1888802160" + " " + "chat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Tweet here!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
        list: true,
        className: "tweets",
        ref: "tweets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.chat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        className: "jsx-1888802160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Submit!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1888802160",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXN0L2hvYm9zdHJhcC9jb21wb25lbnRzL0NoYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVvQixBQUlZIiwiZmlsZSI6Ii9Vc2Vycy90ZXN0L2hvYm9zdHJhcC9jb21wb25lbnRzL0NoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBcbiAgQnV0dG9uLFxuICBNZWRpYVxuXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCByYXdEYXRhID0gW1xuICBbXCJEZWMgNSwgMTI6MzBcIiwgXCJncmV0YVwiLCBcInRoaW5rIHRoZXkncmUgbG9zaW5nIG1vbWVudHVtP1wiXSxcbiAgW1wiRGVjIDUsIDEyOjMwXCIsIFwicmFscGhcIiwgXCJnb29nbGUgYWxsIHRoZSB3YXkhXCJdLFxuICBbXCJEZWMgNSwgMTI6MzBcIiwgXCJncmVlbmJlYW5zXCIsIFwiJFNQWSA0NTAgeW91IGhlYXJkIGl0IGhlcmUgZmlyc3RcIl0sXG4gIFtcIkRlYyA1LCAxMjozMFwiLCBcImZhY2VwbGFudDY1XCIsIFwiQGdyZWVuYmVhbnMgeW91J3JlIGRyZWFtaW5nXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJ0b29udG93blwiLCBcIm5ldyBiZWFyIG1hcmtldCBkZWZpbml0ZWx5XCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJncmVnMTk3NFwiLCBcIm1heWJlIGFwcGxlIGNhbiB0dXJuIHRoaW5ncyBhcm91bmQ/XCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJnb3JldmlkYWxcIiwgXCJtYW4gY3JhenkgZGF5IGluIHRoZSBtYXJrZXRzXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJqYWtlXCIsIFwiaSdtIGRlZmluaXRlbHkgc2VsbGluZyBsb2wgZ29vZCBsdWNrIHRvIHlvdSBidWxsc1wiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwiaG9ib3RhZVwiLCBcImZvbGxvdyBtZSBvbiBzZWVraW5nYWxwaGFcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImtvYWxhc2FyYVwiLCBcIndoZW4gZG8gZWFybmluZ3MgY29tZSBvdXQ/XCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJzdWV5bGljaW91c1wiLCBcInlvdSBzdWNrISBIQVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwiamVzc2hzdVwiLCBcInRoaW5rIHRoaXMgaXMgdGhlIGJlZ2lubmluZyBvZiB0aGUgZW5kXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJhbmRyZXd0aGVtYXJpbmVcIiwgXCJ5b3Ugc3VjayFcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImJvZ2VuZVwiLCBcIm5vIHdheSB5b3Ugc3VjayFcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcInJhbHBobmFkZXJcIiwgXCJnZW9yZ2UgYnVzaCBzZW5pb3IgUklQXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJtb25pY2Fib25pY2FcIiwgXCJ0cnVtcCBpcyBkZXN0cm95aW5nIHRoaXMgY291bnRyeVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwieWVhaHllYWhcIiwgXCJjaGluYSBiYWNrZWQgZG93biFcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcInlvdXN1Y2tsb2xcIiwgXCIkU1BZIHdpbGwgcmVib3VuZCBzb29uXCJdXG5dXG5cbmNvbnN0IGZvcm1hdENoYXQgPSByYXdEYXRhLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVkaWEgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidHdlZXRib3hcIj5cbiAgICAgIDxNZWRpYSBsZWZ0IGhyZWY9XCIjXCI+XG4gICAgICAgIDxNZWRpYSBvYmplY3QgZGF0YS1zcmM9XCJob2xkZXIuanNcIiBhbHQ9XCJpbWdcIiAvPlxuICAgICAgPC9NZWRpYT5cbiAgICAgIDxNZWRpYSBib2R5PlxuICAgICAgICB7ZWxlbWVudFswXX1cbiAgICAgICAgPE1lZGlhIGhlYWRpbmc+XG4gICAgICAgICAge2VsZW1lbnRbMV19XG4gICAgICAgIDwvTWVkaWE+XG4gICAgICAgIHtlbGVtZW50WzJdfVxuICAgICAgPC9NZWRpYT5cbiAgICA8L01lZGlhPlxuXG4gIClcbn0pXG5cblxuY2xhc3MgQ2hhdGJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoYXQ6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRDaGF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLnN0YXRlLmNoYXQgPSBbLi4udGhpcy5zdGF0ZS5jaGF0LCBmb3JtYXRDaGF0W2ldXVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZTogdGhpcy5zdGF0ZX0pXG4gICAgICB9LCAyMDAwICogKGkgKyAxKSk7XG5cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jaGF0KVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdFwiID5Ud2VldCBoZXJlIVxuICAgICAgICA8TWVkaWEgbGlzdCBjbGFzc05hbWU9XCJ0d2VldHNcIiByZWY9XCJ0d2VldHNcIj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hhdCB9XG4gICAgICAgIDwvTWVkaWE+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCI+PC9pbnB1dD5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImRhbmdlclwiPlN1Ym1pdCE8L0J1dHRvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnR3ZWV0Ym94IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdGJveCJdfQ== */\n/*@ sourceURL=/Users/test/hobostrap/components/Chat.js */",
        __self: this
      }));
    }
  }]);

  return Chatbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chatbox);

/***/ })

})
//# sourceMappingURL=index.js.0b309e69d447931fcaa2.hot-update.js.map