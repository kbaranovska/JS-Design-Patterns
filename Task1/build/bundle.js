/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_AmericanSocketAdapter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ChineseSocketAdapter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Socket__ = __webpack_require__(6);




document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#adapterOptions').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    document.querySelector('#output').innerHTML = "";

    if(!event.target.value){
        alert("Please, select an adapter");
        return;
    }

    const adapters = {
        American: new __WEBPACK_IMPORTED_MODULE_0__src_AmericanSocketAdapter__["a" /* default */](),
        Chinese: new __WEBPACK_IMPORTED_MODULE_1__src_ChineseSocketAdapter__["a" /* default */]()
    };

    let socketAdapter = adapters[event.target.value];

    let socket = new __WEBPACK_IMPORTED_MODULE_2__src_Socket__["a" /* default */](socketAdapter);
    let socketSettings = socket.plugIn();
    
    document.querySelector('#output').innerHTML = socketSettings;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AmericanSocket__ = __webpack_require__(3);


class AmericanSocketAdapter {
    constructor() {
        this.adaptee = new __WEBPACK_IMPORTED_MODULE_0__AmericanSocket__["a" /* default */]();
    }

    plugIn() {
        return this.adaptee.plugIn();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AmericanSocketAdapter);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AmericanSocket {
    plugIn() {
        const voltage = this.getVoltage();
        const shapeType = this.getShapeType();

        return `American socket settings:\nVoltage is: ${voltage};\nShape is: ${shapeType}`;
    }

    getVoltage() {
        return "120V";
    }

    getShapeType() {
        return "Type C";
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AmericanSocket);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChineseSocket__ = __webpack_require__(5);


class ChineseSocketAdapter {
    constructor() {
        this.adaptee = new __WEBPACK_IMPORTED_MODULE_0__ChineseSocket__["a" /* default */]();
    }

    plugIn() {
        return this.adaptee.plugIn();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ChineseSocket__["a" /* default */]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ChineseSocket {
    plugIn() {
        const voltage = this.getVoltage();
        const shapeType = this.getShapeType();

        return `Chinese socket settings:\nVoltage is: ${voltage};\nShape is: ${shapeType}`;
    }

    getVoltage() {
        return "110-120V";
    }

    getShapeType() {
        return "Type A";
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ChineseSocket);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Socket {
    constructor(adapter){
        this.adapter = adapter;
    }

    plugIn() {
        return this.adapter.plugIn();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Socket);

/***/ })
/******/ ]);