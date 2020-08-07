webpackHotUpdate(5,{

/***/ "./components/Section.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_Modal1_js__ = __webpack_require__("./components/modals/Modal1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_Modal2_js__ = __webpack_require__("./components/modals/Modal2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_Modal3_js__ = __webpack_require__("./components/modals/Modal3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_Modal4_js__ = __webpack_require__("./components/modals/Modal4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_Modal5_js__ = __webpack_require__("./components/modals/Modal5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__ = __webpack_require__("./node_modules/react-icons/lib/md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/user/Documents/Ln-rmls-Next.js/components/Section.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Section =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "nextActivModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            activModal: prevState.activModal + 1
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "previousActivModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            activModal: prevState.activModal - 1
          };
        });
      }
    });
    _this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      activModal: 0
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Section, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal,
        activModal: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var modals = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__modals_Modal1_js__["a" /* default */], {
        nextActivModal: this.nextActivModal,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__modals_Modal2_js__["a" /* default */], {
        nextActivModal: this.nextActivModal,
        toggle: this.toggle,
        previousActivModal: this.previousActivModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__modals_Modal3_js__["a" /* default */], {
        nextActivModal: this.nextActivModal,
        toggle: this.toggle,
        previousActivModal: this.previousActivModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__modals_Modal4_js__["a" /* default */], {
        nextActivModal: this.nextActivModal,
        toggle: this.toggle,
        previousActivModal: this.previousActivModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__modals_Modal5_js__["a" /* default */], {
        toggle: this.toggle,
        previousActivModal: this.previousActivModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-container col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Outstanding London Removals "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-eft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "In London on moving day without a plan? You need a man with a van service. At Top London Removals, we are passionate about moving you from A to B with a minimum of fuss and are able to offer some of the most competitive prices in the industry. Our Man and Van team is here 24/7 to help you move across London or further afield, and can even come to your assistance if you\u2019re relocating overseas. Our company has a diverse client base and can assist you whether you\u2019re moving a single item or are a large corporation wishing to relocate."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-center h2 types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Types of ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "typesofmoves",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Moves")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["c" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["m" /* Row */], {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["a" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "material-icon-lg material-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__["MdHome"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/home-removals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-removals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "House"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["a" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "material-icon-lg material-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__["MdLocationCity"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/office-removals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-removals",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Office"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["a" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "material-icon-lg material-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__["MdPublic"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/international-removals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-removals",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "International"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-lg btn-tips",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, this.props.buttonLabel, "TOP 5 MOVING TIPS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["g" /* Modal */], {
        isOpen: this.state.modal,
        toggle: this.toggle,
        className: this.props.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["h" /* ModalBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, modals[this.state.activModal])))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Top removal experts in London"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Having been in the business since way back in 2001, we can be counted on to deliver the exceptional removal services that you require. We can also help you with packing, loading, unpacking and waste disposal, and can even provide the assistance you need when you need to assemble and disassemble furniture. We are fully-insured and treat your items with the utmost respect, providing a quality guarantee to each and every customer. Our specialised services are designed to take the stress out of relocation, and we have worked on a huge range of moves over the years."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Reliable man and van company"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "All our uniformed loaders and drivers are fully-trained and competent enough to carry out the work safely and professionally. We take pride in our quality assurance procedures and constantly seek out feedback from our clients to ensure we remain at the top. We understand better than anybody how important it is to need trustworthy and efficient partners when you move, and this is exactly the guarantee we provide to every customer. Not only are we fully insured, meaning we are fully responsible for all your items while they are being transported by us and a quality guarantee is provided to every customer, but we pride ourselves on being sensitive and adaptable."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Office removals London"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "If you\u2019re a business, chances are you have big concerns about keeping downtime to a minimum and making the swiftest move you possibly can. If this is the case, let us step in. We can carefully pack and label all items on your behalf, remove and reassemble shelving systems to support your accounts team and carry out moves during evenings and weekends to diminish lost hours and revenue. Whether you\u2019re moving within the same complex or to another part of the country, we can help. Our business clients have included everyone from small start-ups to large, long-established organisations."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Storage solutions available"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "You can rely on us to use our vast experience to make the experience as smooth as possible. In fact, you don\u2019t need to lift as much as a finger to use our services. We also offer short and long-term storage solutions, which means you are fully covered if you are not moving into your new home or business premises on the same day you leave your old base. We offer global moving services and can transport your goods to anywhere in the world."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Why not ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/get-a-quote",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, " get in touch ")), "today if you\u2019ve been looking for the best office and house removals in London?")));
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ })

})
//# sourceMappingURL=5.de2a3067e1b99c7fd56b.hot-update.js.map