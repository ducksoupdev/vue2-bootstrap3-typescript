/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = __webpack_require__(1);
	var dropdown_1 = __webpack_require__(2);
	Vue.directive('vue2-bs3-dropdown', new dropdown_1.DropdownDirective());


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var DropdownHandler = (function () {
	    function DropdownHandler() {
	        var _this = this;
	        this.dropdownEventListener = function (event) { return _this.hideDropdown(event); };
	        this.isOpen = false;
	    }
	    DropdownHandler.prototype.init = function (dropdownElement) {
	        this.dropdownElement = dropdownElement;
	        var toggleButton = this.dropdownElement.querySelector('.dropdown-toggle');
	        var dropdownMenu = this.dropdownElement.querySelector('.dropdown-menu');
	        if (toggleButton && dropdownMenu) {
	            this.toggleButton = toggleButton;
	            this.dropdownMenu = dropdownMenu;
	            this.setupToggle();
	        }
	    };
	    DropdownHandler.prototype.setupToggle = function () {
	        var _this = this;
	        this.toggleButton.addEventListener('click', function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	            _this.isOpen ? _this.hideDropdown() : _this.showDropdown();
	        });
	    };
	    DropdownHandler.prototype.showDropdown = function () {
	        this.dropdownElement.classList.add('open');
	        this.isOpen = true;
	        this.addBackdrop();
	        // document.addEventListener('click', this.dropdownEventListener);
	    };
	    ;
	    DropdownHandler.prototype.hideDropdown = function () {
	        this.dropdownElement.classList.remove('open');
	        this.isOpen = false;
	        // document.removeEventListener('click', this.dropdownEventListener);
	    };
	    ;
	    DropdownHandler.prototype.addBackdrop = function () {
	        var _this = this;
	        var backdrop = document.createElement('DIV');
	        backdrop.classList.add('dropdown-backdrop');
	        backdrop.addEventListener('click', function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	            _this.removeBackdrop();
	        });
	        this.dropdownElement.insertBefore(backdrop, this.dropdownMenu);
	    };
	    DropdownHandler.prototype.removeBackdrop = function () {
	        var backdrop = this.dropdownElement.querySelector('.dropdown-backdrop');
	        if (backdrop) {
	            this.hideDropdown();
	            this.dropdownElement.removeChild(backdrop);
	        }
	    };
	    return DropdownHandler;
	}());
	exports.DropdownHandler = DropdownHandler;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var handler_1 = __webpack_require__(4);
	var DropdownDirective = (function () {
	    function DropdownDirective() {
	    }
	    DropdownDirective.prototype.bind = function (el) {
	        var dropdownHandler = new handler_1.DropdownHandler();
	        dropdownHandler.init(el);
	    };
	    return DropdownDirective;
	}());
	exports.DropdownDirective = DropdownDirective;


/***/ }
/******/ ]);
//# sourceMappingURL=vue2-bs3-dropdown.js.map