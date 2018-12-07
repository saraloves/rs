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
    border: "border border-primary",
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
        className: "jsx-3306815715" + " " + "chat",
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
        className: "jsx-3306815715",
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
        styleId: "3306815715",
        css: ".tweetbox.jsx-3306815715{border:1px solid #C9C1D5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXN0L2hvYm9zdHJhcC9jb21wb25lbnRzL0NoYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVvQixBQUd5Qyx5QkFDNUIiLCJmaWxlIjoiL1VzZXJzL3Rlc3QvaG9ib3N0cmFwL2NvbXBvbmVudHMvQ2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFxuICBCdXR0b24sXG4gIE1lZGlhXG5cbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IHJhd0RhdGEgPSBbXG4gIFtcIkRlYyA1LCAxMjozMFwiLCBcImdyZXRhXCIsIFwidGhpbmsgdGhleSdyZSBsb3NpbmcgbW9tZW50dW0/XCJdLFxuICBbXCJEZWMgNSwgMTI6MzBcIiwgXCJyYWxwaFwiLCBcImdvb2dsZSBhbGwgdGhlIHdheSFcIl0sXG4gIFtcIkRlYyA1LCAxMjozMFwiLCBcImdyZWVuYmVhbnNcIiwgXCIkU1BZIDQ1MCB5b3UgaGVhcmQgaXQgaGVyZSBmaXJzdFwiXSxcbiAgW1wiRGVjIDUsIDEyOjMwXCIsIFwiZmFjZXBsYW50NjVcIiwgXCJAZ3JlZW5iZWFucyB5b3UncmUgZHJlYW1pbmdcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcInRvb250b3duXCIsIFwibmV3IGJlYXIgbWFya2V0IGRlZmluaXRlbHlcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImdyZWcxOTc0XCIsIFwibWF5YmUgYXBwbGUgY2FuIHR1cm4gdGhpbmdzIGFyb3VuZD9cIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImdvcmV2aWRhbFwiLCBcIm1hbiBjcmF6eSBkYXkgaW4gdGhlIG1hcmtldHNcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImpha2VcIiwgXCJpJ20gZGVmaW5pdGVseSBzZWxsaW5nIGxvbCBnb29kIGx1Y2sgdG8geW91IGJ1bGxzXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJob2JvdGFlXCIsIFwiZm9sbG93IG1lIG9uIHNlZWtpbmdhbHBoYVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwia29hbGFzYXJhXCIsIFwid2hlbiBkbyBlYXJuaW5ncyBjb21lIG91dD9cIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcInN1ZXlsaWNpb3VzXCIsIFwieW91IHN1Y2shIEhBXCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJqZXNzaHN1XCIsIFwidGhpbmsgdGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBlbmRcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcImFuZHJld3RoZW1hcmluZVwiLCBcInlvdSBzdWNrIVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwiYm9nZW5lXCIsIFwibm8gd2F5IHlvdSBzdWNrIVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwicmFscGhuYWRlclwiLCBcImdlb3JnZSBidXNoIHNlbmlvciBSSVBcIl0sXG4gIFtcIkRlYyA1LCAxMjozMVwiLCBcIm1vbmljYWJvbmljYVwiLCBcInRydW1wIGlzIGRlc3Ryb3lpbmcgdGhpcyBjb3VudHJ5XCJdLFxuICBbXCJEZWMgNSwgMTI6MzFcIiwgXCJ5ZWFoeWVhaFwiLCBcImNoaW5hIGJhY2tlZCBkb3duIVwiXSxcbiAgW1wiRGVjIDUsIDEyOjMxXCIsIFwieW91c3Vja2xvbFwiLCBcIiRTUFkgd2lsbCByZWJvdW5kIHNvb25cIl1cbl1cblxuY29uc3QgZm9ybWF0Q2hhdCA9IHJhd0RhdGEubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZWRpYSBib3JkZXI9XCJib3JkZXIgYm9yZGVyLXByaW1hcnlcIiBjbGFzc05hbWU9XCJ0d2VldGJveFwiPlxuICAgICAgPE1lZGlhIGxlZnQgaHJlZj1cIiNcIj5cbiAgICAgICAgPE1lZGlhIG9iamVjdCBkYXRhLXNyYz1cImhvbGRlci5qc1wiIGFsdD1cImltZ1wiIC8+XG4gICAgICA8L01lZGlhPlxuICAgICAgPE1lZGlhIGJvZHk+XG4gICAgICAgIHtlbGVtZW50WzBdfVxuICAgICAgICA8TWVkaWEgaGVhZGluZz5cbiAgICAgICAgICB7ZWxlbWVudFsxXX1cbiAgICAgICAgPC9NZWRpYT5cbiAgICAgICAge2VsZW1lbnRbMl19XG4gICAgICA8L01lZGlhPlxuICAgIDwvTWVkaWE+XG5cbiAgKVxufSlcblxuXG5jbGFzcyBDaGF0Ym94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hhdDogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdENoYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuc3RhdGUuY2hhdCA9IFsuLi50aGlzLnN0YXRlLmNoYXQsIGZvcm1hdENoYXRbaV1dXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlOiB0aGlzLnN0YXRlfSlcbiAgICAgIH0sIDIwMDAgKiAoaSArIDEpKTtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNoYXQpXG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0XCIgPlR3ZWV0IGhlcmUhXG4gICAgICAgIDxNZWRpYSBsaXN0IGNsYXNzTmFtZT1cInR3ZWV0c1wiIHJlZj1cInR3ZWV0c1wiPlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jaGF0IH1cbiAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIj48L2lucHV0PlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZGFuZ2VyXCI+U3VibWl0ITwvQnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudHdlZXRib3gge1xuICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M5QzFENTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdGJveCJdfQ== */\n/*@ sourceURL=/Users/test/hobostrap/components/Chat.js */",
        __self: this
      }));
    }
  }]);

  return Chatbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chatbox);

/***/ })

})
//# sourceMappingURL=index.js.bab52884c1ec6ab25dc1.hot-update.js.map