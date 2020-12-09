function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #div class=\"backdrop\" >\n    \n    <mat-card class=\"card\">\n        <div mat-card-image></div>\n      <mat-card-header>\n        <mat-card-title>{{ this.type===\"movie\" ? movieContent['name'] : tvContent['name'] }}</mat-card-title>\n        <mat-card-subtitle>{{ this.type===\"movie\" ? movieContent['genre'] : tvContent['genre'] }}</mat-card-subtitle>\n      </mat-card-header>\n      \n      <mat-card-content>\n        <p>\n          {{ this.type===\"movie\" ? movieContent['plot'] : tvContent['plot'] }}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"addToWatchlist(data)\">Add</button>\n      </mat-card-actions>\n    </mat-card>\n    \n</div>\n\n<list [heading]=\"'More Like This...'\" [list]=\"similar\"></list>\n\n<!-- [style]='\"background-image:url(\"+ movieContent[\"backdropURL\"] +\")\"' -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">Copyright © 2020 - Chirag</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n<mat-toolbar>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span id=\"logo\" routerLink=\"/home\">movieDB v2</span>\n    <span class=\"example-spacer\"></span>\n\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"text\"\n                \n                (input)=\"search($event.target.value)\"\n                 placeholder=\"Search\"\n                 aria-label=\"Number\"\n                 matInput\n                 [formControl]=\"myControl\"\n                 [matAutocomplete]=\"auto\">\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of _options\" [value]=\"option['title']\" (onSelectionChange)=\"enter(option['type'], option['id'])\" [routerLink]=\"['/content', option['type'], option['id']]\">\n              {{ option['title'] || option['name'] }} <span class=\"right\">{{ option['year'].substring(0,4) }}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n    </form>\n\n      <span class=\"example-spacer\"></span>\n      <div class=\"watchlist\" routerLink=\"/watchlist\">\n        <span>Watchlist</span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon [matBadge]=\"listCount\" matBadgeColor=\"warn\">favorite</mat-icon>\n    </button>\n      </div>\n    <!-- <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button> -->\n</mat-toolbar>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n    <div class=\"padding\"></div>\n    <list [heading]=\"'In Theatres'\" [list]=\"inTheatres\"></list>\n    <list [heading]=\"'Top Rated Movies'\" [list]=\"topRatedMovies\"></list>\n    <!-- <list [heading]=\"'Top Rated Tv'\" [list]=\"topRatedTv\"></list> -->\n    <list [heading]=\"'Popular Tv'\" [list]=\"popularTv\"></list>\n    \n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/watchlist/watchlist.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/watchlist/watchlist.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWatchlistWatchlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <list [heading]=\"'Your Watchlist'\" [list]=\"watchlist\" ></list>\n    <button mat-raised-button (click)=\"clearList()\">Clear Watchlist</button>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/img-detail/img-detail.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/img-detail/img-detail.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImgDetailImgDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n     <h3>{{ heading }}</h3>\n     <div class=\"scrolls\">\n          <div [routerLink]=\"['/content', content['type'], content['id']]\" *ngFor=\"let content of list\" class=\"imageDiv\">\n               <!-- <img  (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\" [ngStyle]=\"hover? \n               {'-webkit-transform': 'scale(1.3)',\n                    '-ms-transform': 'scale(1.3)', \n                    'transform': 'scale(1.3)'}: {}\" [src]=\"content.imgSrc\" \n               /> -->\n               <img [src]=\"content.imgSrc\" />\n          </div>\n     </div>\n</div>\n\n<!-- <button mat-raised-button (click)=\"addToWatchlist(content)\">Add To Watchlist</button> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/components/content/content.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/watchlist/watchlist.component */
    "./src/app/components/watchlist/watchlist.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'content/:type/:id',
      component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
    }, {
      path: 'watchlist',
      component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_5__["WatchlistComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'movieDB-v2';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/components/content/content.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/watchlist/watchlist.component */
    "./src/app/components/watchlist/watchlist.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/tmdb.service */
    "./src/app/services/tmdb.service.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _img_detail_img_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./img-detail/img-detail.component */
    "./src/app/img-detail/img-detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__["WatchlistComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _img_detail_img_detail_component__WEBPACK_IMPORTED_MODULE_19__["ImgDetailComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"]],
      providers: [_services_tmdb_service__WEBPACK_IMPORTED_MODULE_17__["TmdbService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/content/content.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/content/content.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.backdrop {\r\n    /* background-image: linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%); */\r\n        padding-top: 80px;;\r\n        height:100%; \r\n        background-size:cover; \r\n        width:auto;\r\n        background-position:50% 50%;\r\n        \r\n}\r\n\r\n.card {\r\n    width: 800px;\r\n    margin: auto;\r\n    background-color: black;\r\n    color: white;\r\n    opacity:.8;\r\n}\r\n\r\nmat-card-subtitle {\r\n    color: teal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksd0ZBQXdGO1FBQ3BGLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLFVBQVU7UUFDViwyQkFBMkI7O0FBRW5DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuODUpIDE1JSxyZ2JhKDAsMCwwLC4yKSA0MCUsIzAwMCA5MCUpOyAqL1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4OztcclxuICAgICAgICBoZWlnaHQ6MTAwJTsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxuICAgICAgICBcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5Oi44O1xyXG59XHJcblxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/content/content.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/content/content.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppComponentsContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/tmdb.service */
    "./src/app/services/tmdb.service.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(route, service, user) {
        _classCallCheck(this, ContentComponent);

        this.route = route;
        this.service = service;
        this.user = user;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.type = params['type'];

            if (_this.type === 'movie') {
              _this.getMovieContent(_this.id);
            }

            if (_this.type === 'tv') {
              _this.getTvContent(_this.id);
            }

            _this.similar = _this.getSimilar();
          });
        }
      }, {
        key: "getMovieContent",
        value: function getMovieContent(id) {
          var _this2 = this;

          this.service.getMovieContent(this.id).subscribe(function (data) {
            _this2.data = data;
            _this2.movieContent = {
              imgURL: "url(https://image.tmdb.org/t/p/400".concat(data["poster_path"], ")"),
              backdropURL: "url(https://image.tmdb.org/t/p/original".concat(data["backdrop_path"], ")"),
              name: data['title'],
              year: data['release_date'].substr(0, 4),
              rating: data['vote_average'],
              plot: data['overview'],
              genre: data['genres'].map(function (x) {
                return x.name;
              }).join(' '),
              runtime: data['runtime'] + ' min',
              id: data['id']
            };
            _this2.div.nativeElement.style.backgroundImage = _this2.movieContent.backdropURL; // this.div.nativeElement.style.background = `linear-gradient(top bottom left right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), ${this.movieContent.backdropURL} no-repeat`;

            console.log('div ', _this2.div.nativeElement.style.background);
            console.log('Movie', _this2.movieContent, _this2.movieContent.backdropURL);
          });
        }
      }, {
        key: "getTvContent",
        value: function getTvContent(id) {
          var _this3 = this;

          this.service.getTvContent(this.id).subscribe(function (data) {
            _this3.data = data;
            _this3.tvContent = {
              imgURL: "url(https://image.tmdb.org/t/p/400".concat(data["poster_path"], ")"),
              backdropURL: "url(https://image.tmdb.org/t/p/original".concat(data["backdrop_path"], ")"),
              name: data['name'],
              year: data['first_air_date'].substr(0, 4),
              rating: data['vote_average'],
              plot: data['overview'],
              genre: data['genres'].map(function (x) {
                return x.name;
              }).join(' '),
              runtime: data['episode_run_time'] + ' min',
              id: data['id']
            };
            _this3.div.nativeElement.style.backgroundImage = _this3.tvContent.backdropURL;
            console.log('TV', _this3.tvContent);
          });
        }
      }, {
        key: "addToWatchlist",
        value: function addToWatchlist(data) {
          this.user.addToList(data);
        }
      }, {
        key: "getSimilar",
        value: function getSimilar() {
          var _this4 = this;

          this.service.getSimilar(this.type, this.id).subscribe(function (data) {
            console.log(data);
            _this4.similar = data['results'].map(function (x) {
              return {
                id: x['id'],
                name: x['title'],
                imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
                type: 'movie',
                rating: x['vote_average']
              };
            });
            _this4.similar = _this4.similar.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log(_this4.similar);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"]
      }, {
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('div', {
      "static": true
    })], ContentComponent.prototype, "div", void 0);
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.css */
      "./src/app/components/content/content.component.css"))["default"]]
    })], ContentComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n    padding-top: 100px;\r\n    padding-bottom: 20px;\r\n    text-align:center;\r\n    color: rgb(100, 100, 100);\r\n    font-size: 14px;\r\n    background-color:black;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  #logo {\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    height: 96%;\r\n  }\r\n\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  .right {\r\n    float: right;\r\n  }\r\n\r\n  .watchlist {\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n\r\n  mat-toolbar {\r\n      background-color: rgb(42, 45, 66);\r\n      color: white;\r\n      position: fixed;\r\n      top: 0;\r\n      width: 100%;\r\n      box-shadow: 0 5px 10px -3px #010101;\r\n      z-index: 1;\r\n  }\r\n\r\n  mat-option {\r\n    background-color: black;\r\n    opacity: .95;\r\n    color: white;\r\n  }\r\n\r\n  .mat-option.mat-active, .mat-option:hover {\r\n    background-color: black;\r\n    opacity: 1 !important;\r\n    color: white;\r\n  }\r\n\r\n  .mat-option.mat-selected {\r\n    background-color: black !important;\r\n    color: white !important;\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  form {\r\n      color: red;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7TUFDSSxpQ0FBaUM7TUFDakMsWUFBWTtNQUNaLGVBQWU7TUFDZixNQUFNO01BQ04sV0FBVztNQUNYLG1DQUFtQztNQUNuQyxVQUFVO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7O0VBSUE7TUFDSSxVQUFVO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gICNsb2dvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk2JTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAud2F0Y2hsaXN0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDY2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggLTNweCAjMDEwMTAxO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgbWF0LW9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC45NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5tYXQtb3B0aW9uLm1hdC1hY3RpdmUsIC5tYXQtb3B0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBmb3JtIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/tmdb.service */
    "./src/app/services/tmdb.service.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(tmdb, user, router) {
        _classCallCheck(this, HeaderComponent);

        this.tmdb = tmdb;
        this.user = user;
        this.router = router;
        this.options = [];
        this._options = []; // Auto Complete

        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.user.count.subscribe(function (x) {
            return _this5.listCount = x;
          });
        }
      }, {
        key: "search",
        value: function search(e) {
          var _this6 = this;

          this.options = [];
          this._options = [];
          console.log(e);
          this.tmdb.getList(e).subscribe(function (data) {
            console.log('DATA:', data);
            _this6.options = data['results'].map(function (x) {
              _this6._options.push({
                type: x['media_type'],
                id: x['id'],
                name: x['title'] ? x['title'] : x['name'],
                rating: x['vote_average'],
                year: x['release_date'] ? x['release_date'] : x['first_air_date']
              });

              return _this6._options;
            });
            _this6._options = _this6._options.filter(function (item) {
              for (var key in item) {
                if (item[key] === undefined || item[key] === 0) return false;
              }

              return true;
            }); // x => x['rating']!==0 || x['rating']!==undefined || x['year']!==undefined)

            _this6._options = _this6._options.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log('OPTIONS:', _this6._options); // Auto Complete

            _this6.filteredOptions = _this6.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return value.length >= 3 ? value : [];
            }));
            console.log('F.O. ', _this6.filteredOptions);
          });
        }
      }, {
        key: "enter",
        value: function enter(type, id) {
          console.log(type, id);
          this.router.navigate(['/content', type, id]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_5__["TmdbService"]
      }, {
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .main {\r\n    background-color: #000000;\r\n    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);\r\n} */\r\n\r\n.padding {\r\n    padding-top: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKTtcclxufSAqL1xyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tmdb.service */
    "./src/app/services/tmdb.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(service) {
        _classCallCheck(this, HomeComponent);

        this.service = service;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInTheatres();
          this.getTopRatedMovies();
          this.getTopRatedTv();
          this.getPopularTv();
        }
      }, {
        key: "getInTheatres",
        value: function getInTheatres() {
          var _this7 = this;

          this.service.getInTheatres().subscribe(function (data) {
            console.log(data);
            _this7.inTheatres = data['results'].map(function (x) {
              return {
                id: x['id'],
                name: x['title'],
                imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
                type: 'movie',
                rating: x['vote_average']
              };
            });
            _this7.inTheatres = _this7.inTheatres.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log(_this7.inTheatres);
          });
        }
      }, {
        key: "getTopRatedMovies",
        value: function getTopRatedMovies() {
          var _this8 = this;

          this.service.getTopRatedMovies().subscribe(function (data) {
            console.log(data);
            _this8.topRatedMovies = data['results'].map(function (x) {
              return {
                id: x['id'],
                name: x['title'],
                imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
                type: 'movie',
                rating: x['vote_average']
              };
            });
            _this8.topRatedMovies = _this8.topRatedMovies.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log(_this8.topRatedMovies);
          });
        }
      }, {
        key: "getTopRatedTv",
        value: function getTopRatedTv() {
          var _this9 = this;

          this.service.getTopRatedTv().subscribe(function (data) {
            console.log(data);
            _this9.topRatedTv = data['results'].map(function (x) {
              return {
                id: x['id'],
                name: x['title'],
                imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
                type: 'tv',
                rating: x['vote_average']
              };
            });
            _this9.topRatedTv = _this9.topRatedTv.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log(_this9.topRatedTv);
          });
        }
      }, {
        key: "getPopularTv",
        value: function getPopularTv() {
          var _this10 = this;

          this.service.getPopularTv().subscribe(function (data) {
            console.log(data);
            _this10.popularTv = data['results'].map(function (x) {
              return {
                id: x['id'],
                name: x['title'],
                imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
                type: 'tv',
                rating: x['vote_average']
              };
            });
            _this10.popularTv = _this10.popularTv.sort(function (a, b) {
              return b['rating'] - a['rating'];
            });
            console.log(_this10.popularTv);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/not-found/not-found.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/components/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/watchlist/watchlist.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/watchlist/watchlist.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWatchlistWatchlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    min-height: 1080px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhdGNobGlzdC93YXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTA4MHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/watchlist/watchlist.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/watchlist/watchlist.component.ts ***!
    \*************************************************************/

  /*! exports provided: WatchlistComponent */

  /***/
  function srcAppComponentsWatchlistWatchlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function () {
      return WatchlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");

    var WatchlistComponent = /*#__PURE__*/function () {
      function WatchlistComponent(user) {
        _classCallCheck(this, WatchlistComponent);

        this.user = user;
      }

      _createClass(WatchlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.watchlist = this.user.getWatchlist().map(function (x) {
            return {
              id: x['id'],
              name: x['title'],
              imgSrc: 'https://image.tmdb.org/t/p/w200' + x['poster_path'],
              type: 'movie',
              rating: x['vote_average']
            };
          });
          console.log(this.watchlist);
        }
      }, {
        key: "clearList",
        value: function clearList() {
          this.user.clearList();
          this.watchlist = [];
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(i) {}
      }]);

      return WatchlistComponent;
    }();

    WatchlistComponent.ctorParameters = function () {
      return [{
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    WatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-watchlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./watchlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/watchlist/watchlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./watchlist.component.css */
      "./src/app/components/watchlist/watchlist.component.css"))["default"]]
    })], WatchlistComponent);
    /***/
  },

  /***/
  "./src/app/img-detail/img-detail.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/img-detail/img-detail.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImgDetailImgDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    background-color: black;\r\n    box-shadow: 5px 5px 10px -3px #010101;\r\n    border-radius: 3px;\r\n    color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1nLWRldGFpbC9pbWctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pbWctZGV0YWlsL2ltZy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggLTNweCAjMDEwMTAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/img-detail/img-detail.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/img-detail/img-detail.component.ts ***!
    \****************************************************/

  /*! exports provided: ImgDetailComponent */

  /***/
  function srcAppImgDetailImgDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgDetailComponent", function () {
      return ImgDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImgDetailComponent = /*#__PURE__*/function () {
      function ImgDetailComponent() {
        _classCallCheck(this, ImgDetailComponent);
      }

      _createClass(ImgDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImgDetailComponent;
    }();

    ImgDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-img-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./img-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/img-detail/img-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./img-detail.component.css */
      "./src/app/img-detail/img-detail.component.css"))["default"]]
    })], ImgDetailComponent);
    /***/
  },

  /***/
  "./src/app/list/list.component.css":
  /*!*****************************************!*\
    !*** ./src/app/list/list.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper { \r\n    background:transparent; \r\n    /* box-shadow: 1px 1px 10px #999;  */\r\n    margin: auto; \r\n    text-align: left; \r\n    position: relative;\r\n    border-radius: 5px;\r\n    \r\n    margin-bottom: 20px !important;\r\n    width: 100%;\r\n}\r\n\r\nh3 {\r\n    color: white;\r\n    font-weight: 500;\r\n    margin-left: 20px;\r\n    \r\n}\r\n\r\n.scrolls { \r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    white-space:nowrap;\r\n    height: 300px;\r\n}\r\n\r\n.imageDiv { \r\n    margin: 0;\r\n    height: 300px;\r\n    width: 1200px;\r\n    display: inline;\r\n    \r\n}\r\n\r\n.imageDiv img { \r\n    box-shadow: 1px 1px 10px #999; \r\n    margin: 2px;\r\n    max-height: 250px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    transition: all .2s ease-in-out;\r\n    /* overflow: visible; */\r\n}\r\n\r\n/* button{ display:none}\r\nimg:hover button{\r\n    display:block;\r\n    overflow: visible;\r\n} */\r\n\r\nimg:hover {\r\n    transform: scale(1.3);\r\n        \r\n}\r\n\r\n::-webkit-scrollbar{\r\n    height: 1px;\r\n    width: 1px;\r\n    background: gray;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:horizontal{\r\n    background: #000;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBR2xCLGtCQUFrQjs7SUFFbEIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTs7OztHQUlHOztBQUVIO0lBR1EscUJBQXFCOztBQUU3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIgeyBcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IFxyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM5OTk7ICAqL1xyXG4gICAgbWFyZ2luOiBhdXRvOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4uc2Nyb2xscyB7IFxyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufSBcclxuLmltYWdlRGl2IHsgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIFxyXG59IFxyXG5cclxuLmltYWdlRGl2IGltZyB7IFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM5OTk7IFxyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvKiBvdmVyZmxvdzogdmlzaWJsZTsgKi9cclxufVxyXG5cclxuLyogYnV0dG9ueyBkaXNwbGF5Om5vbmV9XHJcbmltZzpob3ZlciBidXR0b257XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn0gKi9cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICBcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3Jpem9udGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(router) {
        _classCallCheck(this, ListComponent);

        this.router = router;
        this.detail = false;
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadContent",
        value: function loadContent(id, type) {
          this.router.navigate(["/content/".concat(type, "/").concat(id)]);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListComponent.prototype, "detail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListComponent.prototype, "onDeleteItem", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/list/list.component.css"))["default"]]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/services/tmdb.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/tmdb.service.ts ***!
    \******************************************/

  /*! exports provided: TmdbService */

  /***/
  function srcAppServicesTmdbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmdbService", function () {
      return TmdbService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TmdbService = /*#__PURE__*/function () {
      function TmdbService(http) {
        _classCallCheck(this, TmdbService);

        this.http = http;
        this.key = '092e8cb2fdfe2fa5f210c9f2a932d024';
        this.searchURL = "https://api.themoviedb.org/3/search/multi?api_key=".concat(this.key, "&language=en-US&query=");
        this.movieURL = 'https://api.themoviedb.org/3/movie';
        this.tvURL = 'https://api.themoviedb.org/3/tv';
      }

      _createClass(TmdbService, [{
        key: "getList",
        value: function getList(str) {
          return this.http.get(this.searchURL + str + '&page=1&include_adult=false');
        }
      }, {
        key: "getMovieContent",
        value: function getMovieContent(id) {
          return this.http.get("".concat(this.movieURL, "/").concat(id, "?api_key=").concat(this.key, "&language=en-US"));
        }
      }, {
        key: "getTvContent",
        value: function getTvContent(id) {
          return this.http.get("".concat(this.tvURL, "/").concat(id, "?api_key=").concat(this.key, "&language=en-US"));
        }
      }, {
        key: "getInTheatres",
        value: function getInTheatres() {
          return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1');
        }
      }, {
        key: "getTopRatedMovies",
        value: function getTopRatedMovies() {
          return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1');
        }
      }, {
        key: "getTopRatedTv",
        value: function getTopRatedTv() {
          return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1');
        }
      }, {
        key: "getPopularTv",
        value: function getPopularTv() {
          return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1');
        }
      }, {
        key: "getSimilar",
        value: function getSimilar(type, id) {
          return this.http.get("https://api.themoviedb.org/3/".concat(type, "/").concat(id, "/recommendations?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1"));
        }
      }]);

      return TmdbService;
    }();

    TmdbService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    TmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], TmdbService);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.count = this.source.asObservable();
        this.watchlist = [];
      }

      _createClass(UserService, [{
        key: "sendCount",
        value: function sendCount(value) {
          this.source.next(value);
        }
      }, {
        key: "addToList",
        value: function addToList(data) {
          this.watchlist.push(data);
          localStorage.setItem('list', JSON.stringify(this.watchlist));
          this.sendCount(this.watchlist.length);
          console.log(this.watchlist);
        }
      }, {
        key: "getWatchlist",
        value: function getWatchlist() {
          return JSON.parse(localStorage.getItem('list'));
          this.sendCount(this.watchlist.length);
        }
      }, {
        key: "clearList",
        value: function clearList() {
          localStorage.clear();
          this.watchlist = [];
          this.sendCount(this.watchlist.length);
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Chirag\Desktop\movieDB-v2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map