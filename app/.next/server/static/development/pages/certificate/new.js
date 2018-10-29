module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../routes.js":
/*!********************!*\
  !*** ../routes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes
    .add('index', 'index')
    .add('/certificate/new', '/certificate/new')
    .add('/certificate/:address', '/certificate/detail');


module.exports = routes;

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var _interface_certificateController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface/certificateController */ "./interface/certificateController.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      idType: 'studentId',
      loading: false,
      idValue: '',
      errorMessage: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var certificate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 2;

                if (!(_this.state.idType === 'studentId')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getCertificateByStudentId(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].convertStringToHex(_this.state.idValue)).call();

              case 6:
                certificate = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getCertificateById(_this.state.idValue).call();

              case 11:
                certificate = _context.sent;

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 17:
                _this.setState({
                  loading: false,
                  contributionValue: ''
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 14]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = [{
        key: 'studentId',
        text: 'Student ID',
        value: 'studentId'
      }, {
        key: 'certificateId',
        text: 'Certificate ID',
        value: 'certificateId'
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.onSearch,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        style: {
          marginTop: '50px'
        },
        type: "text",
        size: "massive",
        onChange: function onChange(event) {
          return _this2.setState({
            idValue: event.target.value
          });
        },
        value: this.state.idValue,
        fluid: true,
        placeholder: "Search Certificate by...",
        action: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        compact: true,
        options: options,
        value: this.state.idType,
        onChange: function onChange(e, _ref2) {
          var value = _ref2.value;
          return _this2.setState({
            idType: value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "submit"
      }, "Search"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
  })), props.children);
});

/***/ }),

/***/ "./interface/certificateController.js":
/*!********************************************!*\
  !*** ./interface/certificateController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/web3 */ "./interface/web3.js");

var abi = [{
  "constant": false,
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "paused",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "isOwner",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "repository",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "certificateId",
    "type": "bytes32"
  }],
  "name": "CertificateIssued",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "certificateId",
    "type": "bytes32"
  }],
  "name": "CertificateRevoked",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "certificateId",
    "type": "bytes32"
  }],
  "name": "CertificateEnacted",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [],
  "name": "Paused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [],
  "name": "Unpaused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  }],
  "name": "OwnershipRenounced",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "constant": true,
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "isCertificateIssued",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "isCertificateValid",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "getCertificateById",
  "outputs": [{
    "name": "",
    "type": "bytes32"
  }, {
    "name": "",
    "type": "bytes32"
  }, {
    "name": "",
    "type": "bytes32"
  }, {
    "name": "",
    "type": "bytes32"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_stdId",
    "type": "bytes32"
  }],
  "name": "getCertificateByStudentId",
  "outputs": [{
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "uint256[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAllCertificates",
  "outputs": [{
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "bytes32[]"
  }, {
    "name": "",
    "type": "uint256[]"
  }, {
    "name": "",
    "type": "bool[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_stdId",
    "type": "bytes32"
  }, {
    "name": "_crsId",
    "type": "bytes32"
  }, {
    "name": "_stdName",
    "type": "bytes32"
  }, {
    "name": "_crsName",
    "type": "bytes32"
  }, {
    "name": "_date",
    "type": "uint256"
  }],
  "name": "issueCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "revokeCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "enactCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}];
var contractAddress = '0x0da2dda88b77be6302e070171bd78d007470f611';
/* harmony default export */ __webpack_exports__["default"] = (new _interface_web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, contractAddress));

/***/ }),

/***/ "./interface/web3.js":
/*!***************************!*\
  !*** ./interface/web3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== "undefined") {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} else {
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/e7cc830da9f546b29a0f80a94a2e8cc6');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/certificate/new.js":
/*!**********************************!*\
  !*** ./pages/certificate/new.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _interface_certificateController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interface/certificateController */ "./interface/certificateController.js");
/* harmony import */ var _interface_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interface/web3 */ "./interface/web3.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * New certificate page
 */

var CertificateNew =
/*#__PURE__*/
function (_Component) {
  _inherits(CertificateNew, _Component);

  function CertificateNew() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CertificateNew);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CertificateNew)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      studentId: '',
      courseId: '',
      studentName: '',
      courseName: '',
      errorMessage: '',
      transactionHash: '',
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFormSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var certificateAddress, _this$state, studentId, courseId, studentName, courseName, accounts;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, studentId = _this$state.studentId, courseId = _this$state.courseId, studentName = _this$state.studentName, courseName = _this$state.courseName;

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 3;
                _context.next = 6;
                return _interface_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_5__["default"].methods.issueCertificate(_utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].convertStringToHex(studentId), _utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].convertStringToHex(courseId), _utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].convertStringToHex(studentName), _utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].convertStringToHex(courseName), _utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].getUnixTime()).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash
                  });
                }).on('confirmation', function () {
                  console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                  certificateAddress = newCertificateInstance.events.CertificateIssued.returnValues.certificateId;
                });

              case 9:
                _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute("/certificate/".concat(certificateAddress));
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 15:
                _this.setState({
                  loading: false
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CertificateNew, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '50px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Fill in the details of Certificate to issue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.onFormSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Student ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        required: true,
        onChange: function onChange(event) {
          return _this2.setState({
            studentId: event.target.value
          });
        },
        value: this.state.studentId
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Course ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        required: true,
        onChange: function onChange(event) {
          return _this2.setState({
            courseId: event.target.value
          });
        },
        value: this.state.courseId
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Student Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        required: true,
        onChange: function onChange(event) {
          return _this2.setState({
            studentName: event.target.value
          });
        },
        value: this.state.studentName
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Course Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        required: true,
        onChange: function onChange(event) {
          return _this2.setState({
            courseName: event.target.value
          });
        },
        value: this.state.courseName
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        primary: true,
        loading: this.state.loading
      }, "Create!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, this.state.transactionHash ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.state.transactionHash,
        target: "_blank"
      }, "See transaction status on EtherScan") : null)));
    }
  }]);

  return CertificateNew;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertificateNew);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/web3 */ "./interface/web3.js");

var helperFunctions = {
  convertStringToHex: function convertStringToHex(value) {
    return _interface_web3__WEBPACK_IMPORTED_MODULE_0__["default"].utils.fromAscii(value);
  },
  convertHexToString: function convertHexToString(value) {
    return _interface_web3__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toAscii(value);
  },
  getUnixTime: function getUnixTime() {
    return new Date().getTime();
  },
  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (helperFunctions);

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/certificate/new.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/certificate/new.js */"./pages/certificate/new.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=new.js.map