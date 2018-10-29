webpackHotUpdate("static/development/pages/certificate/new.js",{

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
  "inputs": [{
    "name": "_certId",
    "type": "bytes32"
  }],
  "name": "enactCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
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
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
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
  }, {
    "name": "_txHash",
    "type": "bytes32"
  }],
  "name": "setCertificateTxHash",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
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
  "constant": false,
  "inputs": [],
  "name": "unpause",
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
  "name": "paused",
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
}];
var contractAddress = '0x771c8b94f9ccc1308e680b38b6be671c79c591c0';
/* harmony default export */ __webpack_exports__["default"] = (new _interface_web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, contractAddress));

/***/ })

})
//# sourceMappingURL=new.js.425f479eaa4428fc8560.hot-update.js.map