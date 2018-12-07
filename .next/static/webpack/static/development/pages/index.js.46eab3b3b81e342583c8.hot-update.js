webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
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




var rawData = [["Dec 5, 06:30", "greta", "think they're losing momentum?"], ["Dec 5, 06:30", "ralph", "google all the way!"], ["Dec 5, 06:30", "greenbeans", "$SPY 450 you heard it here first"], ["Dec 5, 06:30", "faceplant65", "@greenbeans you're dreaming"], ["Dec 5, 06:31", "toontown", "new bear market definitely"], ["Dec 5, 06:31", "greg1974", "maybe apple can turn things around?"], ["Dec 5, 06:31", "gorevidal", "man crazy day in the markets"], ["Dec 5, 06:31", "jake", "i'm definitely selling lol good luck to you bulls"], ["Dec 5, 06:31", "hobotae", "follow me on seekingalpha"], ["Dec 5, 06:31", "koalasara", "when do earnings come out?"], ["Dec 5, 06:31", "sueylicious", "you suck! HA"], ["Dec 5, 06:31", "jesshsu", "think this is the beginning of the end"], ["Dec 5, 06:31", "andrewthemarine", "you suck!"], ["Dec 5, 06:31", "bogene", "no way you suck!"], ["Dec 5, 06:31", "ralphnader", "george bush senior RIP"], ["Dec 5, 06:31", "monicabonica", "trump is destroying this country"], ["Dec 5, 06:31", "yeahyeah", "china backed down!"], ["Dec 5, 06:31", "yousucklol", "$SPY will rebound soon"]];
var formatChat = rawData.map(function (element) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    heading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, element[1]), element[2]);
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Tweet here!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
        list: true,
        className: "tweets",
        ref: "tweets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.state.chat), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Submit!"));
    }
  }]);

  return Chatbox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chatbox);

/***/ })

})
//# sourceMappingURL=index.js.46eab3b3b81e342583c8.hot-update.js.map