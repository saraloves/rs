webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highcharts/ReactHighstock */ "./node_modules/react-highcharts/ReactHighstock.js");
/* harmony import */ var react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/test/hobostrap/components/Chart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // chart.series[0].data

var data = [[1483401600000, 115.80, 116.33, 114.76, 116.15], [1483488000000, 115.85, 116.51, 115.75, 116.02], [1483574400000, 115.92, 116.86, 115.81, 116.61], [1483660800000, 116.78, 118.16, 116.47, 117.91], [1483920000000, 117.95, 119.43, 117.94, 118.99], [1484006400000, 118.77, 119.38, 118.30, 119.11], [1484092800000, 118.74, 119.93, 118.60, 119.75], [1484179200000, 118.90, 119.30, 118.21, 119.25], [1484265600000, 119.11, 119.62, 118.81, 119.04], [1484611200000, 118.34, 120.24, 118.22, 120.00], [1484697600000, 120.00, 120.50, 119.71, 119.99], [1484784000000, 119.40, 120.09, 119.37, 119.78], [1484870400000, 120.45, 120.45, 119.73, 120.00], [1485129600000, 120.00, 120.81, 119.77, 120.08], [1485216000000, 119.55, 120.10, 119.50, 119.97], [1485302400000, 120.42, 122.10, 120.28, 121.88], [1485388800000, 121.67, 122.44, 121.60, 121.94], [1485475200000, 122.14, 122.35, 121.60, 121.95], [1485734400000, 120.93, 121.63, 120.66, 121.63], [1485820800000, 121.15, 121.39, 120.62, 121.35], [1485907200000, 127.03, 130.49, 127.01, 128.75], [1485993600000, 127.98, 129.39, 127.78, 128.53], [1486080000000, 128.31, 129.19, 128.16, 129.08], [1486339200000, 129.13, 130.50, 128.90, 130.29], [1486425600000, 130.54, 132.09, 130.45, 131.53], [1486512000000, 131.35, 132.22, 131.22, 132.04], [1486598400000, 131.65, 132.44, 131.12, 132.42], [1486684800000, 132.46, 132.94, 132.05, 132.12], [1486944000000, 133.08, 133.82, 132.75, 133.29], [1487030400000, 133.47, 135.09, 133.25, 135.02], [1487116800000, 135.52, 136.27, 134.62, 135.51], [1487203200000, 135.67, 135.90, 134.84, 135.34], [1487289600000, 135.10, 135.83, 135.10, 135.72], [1487635200000, 136.23, 136.75, 135.98, 136.70], [1487721600000, 136.43, 137.12, 136.11, 137.11], [1487808000000, 137.38, 137.48, 136.30, 136.53], [1487894400000, 135.91, 136.66, 135.28, 136.66], [1488153600000, 137.14, 137.44, 136.28, 136.93], [1488240000000, 137.08, 137.44, 136.70, 136.99], [1488326400000, 137.89, 140.15, 137.60, 139.79], [1488412800000, 140.00, 140.28, 138.76, 138.96], [1488499200000, 138.78, 139.83, 138.59, 139.78], [1488758400000, 139.36, 139.77, 138.60, 139.34], [1488844800000, 139.06, 139.98, 138.79, 139.52], [1488931200000, 138.95, 139.80, 138.82, 139.00], [1489017600000, 138.74, 138.79, 137.05, 138.68], [1489104000000, 139.25, 139.36, 138.64, 139.14], [1489363200000, 138.85, 139.43, 138.82, 139.20], [1489449600000, 139.30, 139.65, 138.84, 138.99], [1489536000000, 139.41, 140.75, 139.02, 140.46], [1489622400000, 140.72, 141.02, 140.26, 140.69], [1489708800000, 141.00, 141.00, 139.89, 139.99], [1489968000000, 140.40, 141.50, 140.23, 141.46], [1490054400000, 142.11, 142.80, 139.73, 139.84], [1490140800000, 139.84, 141.60, 139.76, 141.42], [1490227200000, 141.26, 141.58, 140.61, 140.92]];
var config = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'AAPL Stock Price'
  },
  series: [{
    type: 'candlestick',
    name: 'AAPL',
    data: data,
    tooltip: {
      valueDecimals: 2
    }
  }]
};
var gimmeScope;

var MyChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyChart, _React$Component);

  function MyChart(props) {
    var _this;

    _classCallCheck(this, MyChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyChart).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyChart, [{
    key: "onClick",
    value: function onClick() {
      gimmeScope = this;
      var chart = gimmeScope.refs.chart.getChart(); // for (var i=0; i<5; i++) {
      //  setTimeout(()=>{alert('hi')}, 2000);
      // }

      var newPoints = [[1490313600000, 141.50, 141.74, 140.35, 140.64], [1490572800000, 139.39, 141.22, 138.62, 140.88], [1490659200000, 140.91, 144.04, 140.62, 143.80], [1490745600000, 143.68, 144.49, 143.19, 144.12], [1490832000000, 144.19, 144.50, 143.50, 144.44]];

      var _loop = function _loop(i) {
        setTimeout(function () {
          chart.series[0].addPoint(newPoints[i]);
        }, 2000 * (i + 1));
      };

      for (var i = 0; i < newPoints.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_2___default.a, {
        config: config,
        ref: "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "secondary",
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "More Data"));
    }
  }]);

  return MyChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MyChart);

/***/ })

})
//# sourceMappingURL=index.js.b23f206b899ccd714058.hot-update.js.map