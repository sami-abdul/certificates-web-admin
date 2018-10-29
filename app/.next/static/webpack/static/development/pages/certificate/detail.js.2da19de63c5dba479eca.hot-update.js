webpackHotUpdate("static/development/pages/certificate/detail.js",{

/***/ "./pages/certificate/detail.js":
/*!*************************************!*\
  !*** ./pages/certificate/detail.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/certificateController */ "./interface/certificateController.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "../node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _interface_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interface/web3 */ "./interface/web3.js");


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
 * Certificate details page
 */

var CertificateDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CertificateDetail, _Component);

  function CertificateDetail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CertificateDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CertificateDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: false,
      errorMessage: '',
      transactionHash: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "flipCertificateStatus",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var statusEvent, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                if (!_this.props.isRevoked) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__["default"].methods.enactCertificate(_this.props.address).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash
                  });
                }).on('confirmation', function () {
                  console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                  statusEvent = newCertificateInstance.events.CertificateEnacted;
                });

              case 7:
                _this.setState({
                  loading: false
                });

                _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/certificate/".concat(_this.props.address));
                _context.next = 15;
                break;

              case 11:
                _context.next = 13;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__["default"].methods.revokeCertificate(_this.props.address).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash
                  });
                }).on('confirmation', function () {
                  console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                  statusEvent = newCertificateInstance.events.CertificateEnacted;
                });

              case 13:
                _this.setState({
                  loading: false
                });

                _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/certificate/".concat(_this.props.address));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CertificateDetail, [{
    key: "renderCertificateDetails",
    value: function renderCertificateDetails() {
      var validity;
      var _this$props = this.props,
          address = _this$props.address,
          studentId = _this$props.studentId,
          courseId = _this$props.courseId,
          studentName = _this$props.studentName,
          courseName = _this$props.courseName,
          issuedDate = _this$props.issuedDate,
          isRevoked = _this$props.isRevoked;

      if (!isRevoked) {
        validity = "Valid";
      } else {
        validity = "Invalid";
      }

      var items = [{
        header: address,
        meta: 'Certificate ID',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: studentName,
        meta: 'Name of Student',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: courseName,
        meta: 'Name of Course',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: studentId,
        meta: 'Unique Id of Student',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: courseId,
        meta: 'Course Id',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: issuedDate,
        meta: 'Date of certificate',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: validity,
        meta: 'The Validity of Certificate',
        style: {
          overflowWrap: 'break-word'
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Group, {
        style: {
          marginTop: '20px'
        },
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      var content;

      if (this.props.isRevoked) {
        content = 'Enact Certificate';
      } else {
        content = 'Revoke Certificate';
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '50px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Certificate Details")), this.renderCertificateDetails(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingBottom: '100px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        loading: this.state.loading,
        onClick: this.flipCertificateStatus,
        floated: "right",
        content: content,
        icon: "circle",
        primary: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '40px'
        }
      }, this.state.transactionHash ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.state.transactionHash,
        target: "_blank"
      }, "See transaction status on EtherScan") : null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var certificate, date, certificateDate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getCertificateById(props.query.address).call();

              case 2:
                certificate = _context2.sent;
                console.log(certificate);
                date = new Date(parseInt(certificate['4']));
                certificateDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                console.log(date);
                return _context2.abrupt("return", {
                  address: props.query.address,
                  studentId: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].convertHexToString(certificate['0']),
                  courseId: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].convertHexToString(certificate['1']),
                  studentName: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].convertHexToString(certificate['2']),
                  courseName: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].convertHexToString(certificate['3']),
                  issuedDate: certificateDate,
                  isRevoked: certificate['5']
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return CertificateDetail;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertificateDetail);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/certificate/detail")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=detail.js.2da19de63c5dba479eca.hot-update.js.map