module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/davidec/Desktop/stupid-trials/Ln-rmls-Next.js/components/Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "container text-center col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
    width: "100%",
    color: "black",
    height: "1px",
    "background-color": "rgb(88, 82, 82)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    rel: "noopener noreferrer",
    className: "fa fa-facebook social-media",
    href: "https://www.facebook.com/miran.agha46",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "fa fa-google social-media",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "fa fa-instagram social-media",
    href: "#",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "fa fa-twitter social-media",
    href: "#",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: {
      color: '#808080',
      textDecoration: 'underline'
    },
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Contact us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "text-center",
    sytle: "font-size:63px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Copyright @ 2018 Top London Removal | all rights reserved"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/home/davidec/Desktop/stupid-trials/Ln-rmls-Next.js/components/Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar navbar-inverse navbar-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "phone",
    href: "tel:07490531699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "glyphicon glyphicon-earphone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), " 02080000000")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    "aria-expanded": "false",
    className: "navbar-toggle navbar-toggle-org collapsed",
    "data-target": "#bs-example-navbar-collapse-1",
    "data-toggle": "collapse",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Toggle navigation"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-brand logo",
    href: "./",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/logo.png",
    alt: "Top london removals",
    width: "161px",
    height: "87px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "nav navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "HOME"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-expanded": "false",
    "aria-haspopup": "true",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    href: "",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "REMOVALS", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "caret",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "sub-navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/home-removals",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Home Removals"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "sub-navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/office-removals",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Office Removals"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "sub-navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/international-removals",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "International Removals"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/man-and-van",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "MAN AND VAN"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/prices",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "PRICES"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/get-a-quote",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "GET A QUOTE"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./layouts/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer_js__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/home/davidec/Desktop/stupid-trials/Ln-rmls-Next.js/layouts/main.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
});

/***/ }),

/***/ "./pages/home-removals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main__ = __webpack_require__("./layouts/main.js");
var _jsxFileName = "/home/davidec/Desktop/stupid-trials/Ln-rmls-Next.js/pages/home-removals.js";




var HomeRemovals = function HomeRemovals() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home Removals")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "main-container col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-8 col-md-push-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "London Home Removals"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "move home in comfort and style. We can come to your assistance, whether you need to move locally, nationally or internationally. Do everything in our power to take as much fuss and stress out of the experience as we can by offering to carry out a range of tasks on your behalf. We go the extra mile to deliver the customer satisfaction and offer a number of specialised services that many of our competitors don\u2019t."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/get-a-quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn btn-lg btn-removals pull-right",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Get a quote now")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-8 col-md-push-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "A highly-recommended service"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "We have been in the business for well over 15 years, and more and more domestic and commercial customerspeople are choosing us. Thanks to our ever-growing reputation. We are eager to introduce you to our door-to-door national and international services, and we are able to provide short and long-term solutions if needed. If you are not moving in on the same day you are leaving your current property, or are heading overseas for a few months, these services could prove to be the perfect solution. Our vast experience in moving a diverse range of clients means we can get your items from A to B in style without you needing to lift  a finger if you don\u2019t want to. "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Cutting down your workload"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Relocation comes with a large number of duties. However, we can take much of the strain from your big move with our comprehensive packing and loading services. If you want us to, We can visit your home in advance of the big move to help with packing and can arrive at your property armed with boxes, bubble wrap and packing paper to cut your workload down even further. We are passionate making move house a breeze. "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Extra flexibility"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "One of the reasons so many customers choose us over other London removal companies is our flexibility. We are happy to help you move during hours that could be deemed unsociable as well as public holidays and weekends. We may even be able to help you move at short notice if another firm has let you down or you have just found out you need to relocate quickly."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Calculating the cost"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "There are many different factors that might determine how long your move will take, such as parking issues, the size of your street and whether you live in a flat or house. We offer bespoke quotes based on our clients'' unique needs and circumstances, so why not talk to us today and get a competitive quote for your move? We are fully insured and always treat our clients' items with the utmost respect. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), "Get the wheels in motion and talk to our friendly, professional team today", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "a",
    href: "tel:07490531699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, " 07490531699"), ".")))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeRemovals);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/home-removals.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=home-removals.js.map