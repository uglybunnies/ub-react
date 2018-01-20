(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (e) {
    var showing = document.querySelectorAll('.view');
    var shows = showing.length > 0 ? true : false;
    var target = e.target;
    var reset = function reset(showing) {
        showing.forEach(function (pic) {
            if (pic.classList.contains('view')) {
                pic.classList.remove('view');
                pic.removeAttribute('style');
            }
        });
    };
    if (target.matches('.pop-pic')) {
        var viewWidth = window.innerWidth < 800 ? true : false;
        var parent = target.offsetParent;
        var translateVals = viewWidth ? 'scale(1.8)' : 'scale(2)';
        if (parent.matches('.view') && shows) {
            reset(showing);
        } else {
            if (shows) {
                reset(showing);
            }
            parent.classList.add('view');
            parent.style.zIndex = 5;
            parent.style.transform = translateVals;
        }
    } else {
        reset(showing);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function topnav(e) {
    var target = e.target;
    if (target.matches('#menuControl')) {
        e.preventDefault();
    }
    var mNav = document.getElementById('topNav');
    mNav.classList.toggle('show');
    mNav.style.height = mNav.classList.contains('show') ? mNav.scrollHeight + "px" : 0;
}

exports.default = function () {
    return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'header',
                { className: 'masthead pa2' },
                _react2.default.createElement(
                    'div',
                    { className: 'logo' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'site-name word-mark' },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/', className: 'slink' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Ugly'
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                null,
                                'Bunnies'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'pa', id: 'menuControl', onClick: topnav },
                    _react2.default.createElement(
                        'i',
                        { className: 'icon-menu' },
                        '\uF0C9'
                    )
                )
            ),
            _react2.default.createElement(
                'nav',
                { className: 'topnav m0' },
                _react2.default.createElement(
                    'ul',
                    { id: 'topNav', className: 'menu' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/', onClick: topnav },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/web-projects', onClick: topnav },
                            'Web Projects'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'main',
                { className: 'content' },
                _react2.default.createElement(_reactStaticRoutes2.default, null)
            ),
            _react2.default.createElement(
                'footer',
                { className: 'pa2' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Copyright \xA9 2001-2018 Michael Wong. All Rights Reserved.'
                )
            )
        )
    );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _WebProjects = __webpack_require__(10);

var _WebProjects2 = _interopRequireDefault(_WebProjects);

var _Rjm = __webpack_require__(11);

var _Rjm2 = _interopRequireDefault(_Rjm);

var _Platinum = __webpack_require__(12);

var _Platinum2 = _interopRequireDefault(_Platinum);

var _ErranAndrews = __webpack_require__(13);

var _ErranAndrews2 = _interopRequireDefault(_ErranAndrews);

var _Platzner = __webpack_require__(14);

var _Platzner2 = _interopRequireDefault(_Platzner);

var _ = __webpack_require__(15);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Home2.default,
  t_1: _WebProjects2.default,
  t_2: _Rjm2.default,
  t_3: _Platinum2.default,
  t_4: _ErranAndrews2.default,
  t_5: _Platzner2.default,
  t_6: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_6" }, "/": { t: "t_0" }, "web-projects": { t: "t_1", c: { "rejuvenation-site": { t: "t_2" }, "platinum-site": { t: "t_3" }, "erran-andrews": { t: "t_4" }, "platzner": { t: "t_5" } } } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Welcome to Ugly Bunnies by Michael Wong'
            )
        ),
        _react2.default.createElement(
            'h1',
            { style: { textAlign: 'center' } },
            'Welcome to Ugly Bunnies'
        )
    );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Ugly Bunnies -- Web Projects by Michael Wong'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'ph1' },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Web Projects'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is a collection of some of my web-based work including websites and interactive experiences.'
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph1' },
            _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'h2',
                    { className: 's2 blue' },
                    'Websites'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'group' },
                _react2.default.createElement(
                    'article',
                    { className: 'group-item' },
                    _react2.default.createElement(
                        'header',
                        { className: 'relative' },
                        _react2.default.createElement('img', { src: 'assets/web-projects/platinum_hero_320.png', alt: 'Platinum Medical Spa', srcSet: 'assets/web-projects/platinum_hero.png 1024w', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/platinum-site', className: 'blocks' },
                                    'Platinum Medical Spa Website'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'excerpt pa1 mb2' },
                        _react2.default.createElement(
                            'p',
                            { className: 'm0 mb' },
                            'This site was created in collaboration with my colleague who was attempting to build a business around creating websites optimized for ',
                            _react2.default.createElement(
                                'a',
                                { href: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
                                'SEO'
                            ),
                            '. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/platinum-site', className: 'db tar mv goto' },
                                'Learn more \xBB'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'article',
                    { className: 'group-item m0' },
                    _react2.default.createElement(
                        'header',
                        { className: 'relative' },
                        _react2.default.createElement('img', { src: 'assets/web-projects/rjm_hero_320.png', alt: 'Rejuvenation Medi-Spas', srcSet: 'assets/web-projects/rjm_hero.png 1024w', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/rejuvenation-site', className: 'blocks' },
                                    'Rejuvenation Medi-Spas Website'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'excerpt pa1 mb2' },
                        _react2.default.createElement(
                            'p',
                            { className: 'm0 mb' },
                            'This site was also created in collaboration with my colleague who was attempting to build a business around creating websites optimized for ',
                            _react2.default.createElement(
                                'a',
                                { href: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
                                'SEO'
                            ),
                            '. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/rejuvenation-site', className: 'db tar mv goto' },
                                'Learn more \xBB'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'article',
                    { className: 'group-item m0' },
                    _react2.default.createElement(
                        'header',
                        { className: 'relative' },
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/erran-andrews', className: 'blocks' },
                                    'Erran Andrews Hair Design Website'
                                )
                            )
                        ),
                        _react2.default.createElement('img', { src: 'assets/web-projects/erranAndrews_hero_320.png', alt: 'Erran Andrews', srcSet: 'assets/web-projects/erranAndrews_hero.png 1024w', className: 'hero-image' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'excerpt pa1 mb2' },
                        _react2.default.createElement(
                            'p',
                            { className: 'm0 mb' },
                            'This is a portfolio site designed to promote the hair design work of Erran Andrews. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/erran-andrews', className: 'db tar mv goto' },
                                'Learn more \xBB'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'article',
                    { className: 'group-item m0' },
                    _react2.default.createElement(
                        'header',
                        { className: 'relative' },
                        _react2.default.createElement('img', { src: 'assets/web-projects/Platzner-Hero_320.png', alt: 'Platzner & Co.', srcSet: 'assets/web-projects/Platzner-Hero.png 1024w', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/platzner', className: 'blocks' },
                                    'Platzner & Co. Website'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'excerpt pa1 mb2' },
                        _react2.default.createElement(
                            'p',
                            { className: 'm0 mb' },
                            'This is the proposed design of a website for a small consultancy. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/platzner', className: 'db tar mv goto' },
                                'Learn more \xBB'
                            )
                        )
                    )
                )
            )
        )
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var popPic = __webpack_require__(2);

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Ugly Bunnies -- Rejuvenation Medi-Spas Website'
            )
        ),
        _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement('img', { src: '/assets/web-projects/rjm-splash.png', srcSet: '/assets/web-projects/rjm-splash.png 320w, /assets/web-projects/rjm-splash_720.png 720w', alt: 'Rejuvenation Medi-Spas', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 standard', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Rejuvenation Medi-Spas'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This 2009 site was also created in collaboration with my colleague who was attempting to build a business around creating websites optimized for ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
                    'SEO'
                ),
                '. The site was never published because the client ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://youtu.be/jVkLVRt6c1U' },
                    'could not pay'
                ),
                ' after his partners refused to go forward.  Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Design'
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic1 vert right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail3.png', alt: 'Home page detail of sidebar', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail2.png', alt: 'Home page detail of coupon section', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail1.png', alt: 'Home page detail of the masthead', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. It features a distinctive visual style that incorporates layers of semi-opaque shapes overlaid onto each other to create a sense of depth and movement.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group mb2' },
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The site features three different layouts including the homepage, a content page with a left sidebar and a content page with no sidebars. Navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/RJM_staff.png', alt: 'Staff page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/RJM_services.png', alt: 'Services page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/RJM_home.png', alt: 'Home page layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This project is the second and last bit of unpaid "spec work" I have done. Lesson learned, I no longer do projects on spec as a result.'
            )
        )
    );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var popPic = __webpack_require__(2);

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Ugly Bunnies -- Platinum Medical Spa Website'
            )
        ),
        _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement('img', { src: '/assets/web-projects/platinum-splash.png', srcSet: '/assets/web-projects/platinum-splash.png 320w, /assets/web-projects/platinum-splash_720.png 720w', alt: 'Platinum Medical Spa', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 standard', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Platinum Medical Spa'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This 2008 site was created in collaboration with my colleague who was attempting to build a business around creating websites optimized for ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
                    'SEO'
                ),
                '.  Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Design'
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic1 vert right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_home_detail3.png', alt: 'Home page detail of sidebar', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_home_detail2.png', alt: 'Home page detail of coupon section', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_home_detail1.png', alt: 'Home page detail of header', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. The masthead features the reflection visual effect that was the must have effect at the time. In this case, I extended the reflection to include the navbar, an original visual design element according to my colleague.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group mb2' },
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The site features two different layouts including the homepage and a content page with a left sidebar. Navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_home.png', alt: 'Staff page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_services.png', alt: 'Services page layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This project was released and the design remained active for about a year before it was replace with a Flash-based site that killed all the SEO value we had built.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'My main contribution to the development of the site was the markup and CSS. The site was compliant with the strict XHTML standard (HTML5 was still just a glimmer of hope at this time). My colleague took my front-end code and incorporated it into his custom PHP framework.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'The site feature some classic CSS techniques for creating gradients and box shadows using images since browser support for these properties did not exist yet. The topnav hover changes were managed using the',
                _react2.default.createElement(
                    'a',
                    { href: 'https://css-tricks.com/css-sprites/' },
                    ' CSS Sprites'
                ),
                ' technique.'
            )
        )
    );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var popPic = __webpack_require__(2);

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Ugly Bunnies -- Erran Andrews Hair Design'
            )
        ),
        _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement('img', { src: '/assets/web-projects/erran-splash.png', alt: 'Erran Andrews Hair Design', srcSet: '/assets/web-projects/erran-splash.png 320w, /assets/web-projects/erran-splash_720.png 720w', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 spec-ea', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Erran Andrews Hair Design'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is a portfolio site designed in 2010 to promote the hair design work of Erran Andrews, a San Francisco-based hairstylist. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Design'
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_detail4.png', alt: 'Detail of the style gallery for men', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_detail3.png', alt: 'Detail of the style gallery for women', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_detail2.png', alt: 'Detail of the photo lightbox', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic1' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_detail1.png', alt: 'Detail of the topnav', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. This design emphasizes the images that appear in the wide column on the right while copy is featured in the narrow column on the left.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group mb2' },
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The site features six pages using the same layout. The style gallery features a tab interface that allows the user to switch between styles for women and men. The portfolio featured my original implementation of a gallery lightbox. The home page featured a Flash-based slideshow because Flash was everywhere and well-suited for this feature.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic7 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_contact.png', alt: 'Contact Page', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_about.png', alt: 'About Page', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/erran_home.png', alt: 'Home Page', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'The site launched in 2008 but disappeared after the site hosting and domain registration expired the next year.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'The site was built in compliance with strict XHTML standards and what was then state-of-the-art CSS2 for layout and visual enhancements including ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://css-tricks.com/css-sprites/' },
                    'CSS Sprites'
                ),
                ' and image-base gradients. The Flash slideshow is loaded dynamically using JavaScript so that users would see a static image if Flash was not available.'
            )
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var popPic = __webpack_require__(2);

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Ugly Bunnies -- Proposed Platzner & Co. Website'
            )
        ),
        _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement('img', { src: '/assets/web-projects/platzner-splash.png', srcSet: '/assets/web-projects/platzner-splash.png 320w, /assets/web-projects/platzner-splash_720.png 720w', alt: 'Proposed Platzner & Co. Website', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 standard', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Proposed Platzner & Co. Website'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is the design of a website for a small consultancy that I did in 2008. The client chose to go in a different direction and paid for services rendered. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 blue' },
                'The Design'
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic1 vert right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platzner_detail3.png', alt: 'Home page detail of sidebar', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platzner_detail2.png', alt: 'Home page detail of blog excerpts', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platzner_detail1.png', alt: 'Home page detail of the masthead', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This design is inspired by the Art Deco movement as requested by the client. Some details include custom bullets for lists, custom horizontal rules for sections, and a custom pattern to create a wallpaper background.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group mb2' },
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The site was to feature three different layouts including the homepage, a content page with a left sidebar and a blog post page with a right sidebar. I designed all visual elements of the site including the logo, masthead background, custom bullets and the custom horizontal rules.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platznerBlogMockup.png', alt: 'Blog post page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platznerContentMockup.png', alt: 'Content page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platznerHomeMockup.png', alt: 'Home page layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'The client chose to walk away rather than accept the design. Their feedback was that the site looked too "techy".'
            )
        )
    );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.ac679f42.js.map