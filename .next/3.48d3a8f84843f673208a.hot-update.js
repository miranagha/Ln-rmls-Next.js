webpackHotUpdate(3,{

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_js__ = __webpack_require__("./components/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AsideText_js__ = __webpack_require__("./components/AsideText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Section_js__ = __webpack_require__("./components/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer_js__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_min_css__);
var _jsxFileName = "/home/mir/Desktop/Ln-rmls-Next.js/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import React, { Component } from 'react';
global.jQuery = global.$ = __webpack_require__("./node_modules/jquery/dist/jquery.js");









// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap';
// import "font-awesome/css/font-awesome.min.js";
// import "jquery";

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "row", __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "../node_modules/material-design-icons-iconfont/dist/material-design-icons.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "title",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        "London Removals"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "manifest", href: "%PUBLIC_URL%/manifest.json", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "/_next/static/style.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { content: "width=device-width, initial-scale=1", name: "viewport", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "col-sm-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Section_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "aside",
      { className: "col-sm-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Form_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AsideText_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Footer_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    })
  );
};

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/home/mir/Desktop/Ln-rmls-Next.js/pages/index.js");
  reactHotLoader.register(_default, "default", "/home/mir/Desktop/Ln-rmls-Next.js/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=3.48d3a8f84843f673208a.hot-update.js.map