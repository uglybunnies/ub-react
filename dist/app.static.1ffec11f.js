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

var _Header = __webpack_require__(25);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(27);

var _Footer2 = _interopRequireDefault(_Footer);

__webpack_require__(28);

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
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(
                'main',
                { className: 'content' },
                _react2.default.createElement(_reactStaticRoutes2.default, null)
            ),
            _react2.default.createElement(_Footer2.default, null)
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

var _About = __webpack_require__(13);

var _About2 = _interopRequireDefault(_About);

var _WebProjects = __webpack_require__(14);

var _WebProjects2 = _interopRequireDefault(_WebProjects);

var _Rjm = __webpack_require__(15);

var _Rjm2 = _interopRequireDefault(_Rjm);

var _Platinum = __webpack_require__(16);

var _Platinum2 = _interopRequireDefault(_Platinum);

var _ErranAndrews = __webpack_require__(17);

var _ErranAndrews2 = _interopRequireDefault(_ErranAndrews);

var _Platzner = __webpack_require__(18);

var _Platzner2 = _interopRequireDefault(_Platzner);

var _UrbanForest = __webpack_require__(19);

var _UrbanForest2 = _interopRequireDefault(_UrbanForest);

var _Cdlp = __webpack_require__(20);

var _Cdlp2 = _interopRequireDefault(_Cdlp);

var _SerpentVenom = __webpack_require__(21);

var _SerpentVenom2 = _interopRequireDefault(_SerpentVenom);

var _Adge = __webpack_require__(22);

var _Adge2 = _interopRequireDefault(_Adge);

var _Nsb = __webpack_require__(23);

var _Nsb2 = _interopRequireDefault(_Nsb);

var _ = __webpack_require__(24);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Home2.default,
  t_1: _About2.default,
  t_2: _WebProjects2.default,
  t_3: _Rjm2.default,
  t_4: _Platinum2.default,
  t_5: _ErranAndrews2.default,
  t_6: _Platzner2.default,
  t_7: _UrbanForest2.default,
  t_8: _Cdlp2.default,
  t_9: _SerpentVenom2.default,
  t_10: _Adge2.default,
  t_11: _Nsb2.default,
  t_12: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_12" }, "/": { t: "t_0" }, "about": { t: "t_1" }, "web-projects": { t: "t_2", c: { "rejuvenation-site": { t: "t_3" }, "platinum-site": { t: "t_4" }, "erran-andrews": { t: "t_5" }, "platzner": { t: "t_6" }, "urban-forest": { t: "t_7" }, "cafe-de-la-paz": { t: "t_8" }, "serpentvenom": { t: "t_9" }, "adge": { t: "t_10" }, "ni-sa-bula": { t: "t_11" } } } }

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

var _DadJokes = __webpack_require__(10);

var _DadJokes2 = _interopRequireDefault(_DadJokes);

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
            'header',
            { className: 'pa2 home-splash' },
            _react2.default.createElement('img', { src: '/assets/home-splash-sv.png', alt: 'SerpentVenom', className: 'splash-sv' }),
            _react2.default.createElement('img', { src: '/assets/home-splash-adge.png', alt: 'Adge', className: 'splash-adge' }),
            _react2.default.createElement('img', { src: '/assets/home-splash-rjm.png', alt: 'Rejuvenation Medi-Spas', className: 'splash-rjm' }),
            _react2.default.createElement(
                'h1',
                { className: 'brand m0 mb pt ' },
                'Welcome to Ugly Bunnies',
                _react2.default.createElement(
                    'sup',
                    null,
                    '*'
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'white s5' },
                ' Ugly Bunnies is run by Michael Wong, a Conceptual Information Artist and Web Professional who crafts ',
                _react2.default.createElement(
                    'a',
                    { href: '/web-projects', className: 'light' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        'engaging web-based experiences'
                    )
                ),
                ' in the San Francisco Bay Area.'
            ),
            _react2.default.createElement(
                'p',
                { className: 'note white m0' },
                _react2.default.createElement(
                    'strong',
                    null,
                    '*'
                ),
                ' If you are disappointed in not finding ugly bunnies here, perhaps you can seek them ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://uglybunnies.tumblr.com/', className: 'light' },
                    'here'
                ),
                '.'
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'dad-jokes-sec p0 ph2 pb2' },
            _react2.default.createElement(
                'h1',
                { className: 'green s1 m0 pt' },
                'Dad Jokes'
            ),
            _react2.default.createElement(
                'h2',
                { className: 'brand s4 m0 p0 ' },
                'Groans & Guffaws brought to you courtesy of ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://icanhazdadjoke.com', className: 'light' },
                    'icanhazdadjoke.com'
                )
            ),
            _react2.default.createElement(_DadJokes2.default, null)
        ),
        _react2.default.createElement(
            'section',
            { className: 'p0 ph2 pb2' },
            _react2.default.createElement(
                'ul',
                { className: 'inline-list m0 p0 social-accounts tac' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'https://www.linkedin.com/in/uglybunnies/', className: 'soc-links' },
                        _react2.default.createElement('i', { className: 'icon-linkedin-squared' })
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/uglybunnies', className: 'soc-links' },
                        _react2.default.createElement('i', { className: 'icon-github-circled' })
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'https://twitter.com/NoUglyBunnies', className: 'soc-links' },
                        _react2.default.createElement('i', { className: 'icon-twitter' })
                    )
                )
            )
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _ListJoke = __webpack_require__(12);

var _ListJoke2 = _interopRequireDefault(_ListJoke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DadJokes = function (_Component) {
    _inherits(DadJokes, _Component);

    function DadJokes() {
        _classCallCheck(this, DadJokes);

        var _this = _possibleConstructorReturn(this, (DadJokes.__proto__ || Object.getPrototypeOf(DadJokes)).call(this));

        _this.state = {
            currentJoke: 'What do you call a dad that has fallen through the ice? A Popsicle.'
        };
        _this.getNewJoke = _this.getNewJoke.bind(_this);

        return _this;
    }

    _createClass(DadJokes, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getNewJoke();
        }
    }, {
        key: 'getNewJoke',
        value: function getNewJoke() {
            var _this2 = this;

            _axios2.default.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } }).then(function (resp) {
                var joke = resp.data.joke;
                _this2.setState({
                    currentJoke: joke
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'dad-jokes' },
                _react2.default.createElement(_ListJoke2.default, { joke: this.state.currentJoke }),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.getNewJoke, className: 's2' },
                        'Let\u2019s Have Another!'
                    )
                )
            );
        }
    }]);

    return DadJokes;
}(_react.Component);

exports.default = DadJokes;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListJoke = function (_Component) {
    _inherits(ListJoke, _Component);

    function ListJoke(props) {
        _classCallCheck(this, ListJoke);

        return _possibleConstructorReturn(this, (ListJoke.__proto__ || Object.getPrototypeOf(ListJoke)).call(this, props));
    }

    _createClass(ListJoke, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                { className: 'joke s1 white pa2 m0 mb1' },
                this.props.joke
            );
        }
    }]);

    return ListJoke;
}(_react.Component);

exports.default = ListJoke;

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
                'About Ugly Bunnies by Michael Wong'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'p0 ph2 pt2' },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'About Ugly Bunnies'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Ugly Bunnies is my personal website. The site features my web design portfolio, and will soon feature my art portfolio and other musings on web design and development.'
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'p0 ph2 pb2' },
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'Origins'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Before Ugly Bunnies, there was SerpentVenom my previous site. I decided to let go of SerpentVenom a while ago and set out to build a new site. The name came about very surreptiously while I was teaching my class about how to search for available domains. I decided to look for uglybunnies.com and lo and behold, it was available.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'Technical Information'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Ugly Bunnies was designed and built with standards in mind. The structure of the site is written in HTML5. Modern CSS is used to implement the layout and visual design. Funtionality is provided by unobtrusive JavaScript. Visitors using older versions of Internet Explorer may not be able to experience the site as intended.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'About Michael'
            ),
            _react2.default.createElement(
                'p',
                null,
                'As for me, I\'m Michael Wong. I\'m a Web Designer/Developer by trade but an artist at heart. I have designed or contributed to a wide variety of web projects including global sports events, e-commerce, software company corporate sites, government sites, non-profit sites, and personal sites that include blogs, and also art and design portfolios.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'Art'
            ),
            _react2.default.createElement(
                'p',
                null,
                'I studied Conceptual/Information Arts (CIA), a program within the Art Department at San Francisco State University (SFSU). CIA focuses on preparing artists and media experimenters to work at the cutting edge of technology. The study of contemporary digital production skills is accompanied by the analysis of the cultural context of technology, as well as experimentation with newly emerging technologies.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'I use computers to create art both for the web and for print. Personal computers and the emergence of the internet have given artists like myself an opportunity to create art that is not dependent upon grants, galleries or patrons. This means we have an autonomy that some working artists do not always enjoy. This autonomy makes communicating my message easier.'
            ),
            _react2.default.createElement(
                'h3',
                { className: 's4 ruby' },
                'My Message'
            ),
            _react2.default.createElement(
                'p',
                null,
                'I believe that art is a vehicle for raising awareness. As special interests and corporate money hold sway over our elected officials, most of us are only concerned about the next pop idol or TV survivor. What I want people to realize is that their apathy toward what goes on in our government is setting up a situation that will eventually be out of our control. I want to show people what they are missing and give them a reason to care.'
            ),
            _react2.default.createElement(
                'h3',
                { className: 's4 ruby' },
                'Ad Art'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Sometimes print advertisements, especially billboards, will capture my attention in ways the advertisers did not intend. When this happens, my response is to take the intended message and tweak it to reflect my response to the original message. My Ad Art posters are the result of this exploration and manipulation of messages.'
            ),
            _react2.default.createElement(
                'h3',
                { className: 's4 ruby' },
                'Photography'
            ),
            _react2.default.createElement(
                'p',
                null,
                'I have been creating photographic imagery for over 17 years. I mainly work in color with occasional forays into Black and White. I started out with a 35mm Nikon FM2 but I have embraced digital photography because of the immediacy and affordability that the technology offers. Whether film or digital, all of my images are created in camera. Their compositions have not been digitally altered.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'My photography reflects my desire to capture what I see. I begin with ideas like the view through a window, the unusual angles and scenes of urban life, the beauty of nature, or photographic experimentation. The results range from straightforward representation to the abstract.'
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
            { className: 'ph2 pb2 pt2' },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 m0 mb1' },
                'Web Projects'
            ),
            _react2.default.createElement(
                'p',
                null,
                'I\'ve been a web professional for quite a while and have done a variety of projects throughout my career. Here are some projects I\'ve worked on.'
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph1', id: 'websites' },
            _react2.default.createElement(
                'header',
                { className: 'ph1 pb2' },
                _react2.default.createElement(
                    'h2',
                    { className: 's2 ruby m0' },
                    'Websites'
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'mb2' },
                    'This is a collection of some the websites I designed and developed on freelance basis.'
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_hero.png', alt: 'Platinum Medical Spa', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/platinum-site', className: 'blocks' },
                                    'Platinum Medical Spa Site'
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_hero_320.png', alt: 'Rejuvenation Medi-Spas', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/rejuvenation-site', className: 'blocks' },
                                    'Rejuvenation Medi-Spas Site'
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_hero.png', alt: 'SerpentVenom', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/serpentvenom', className: 'blocks' },
                                    'SerpentVenom Portfolio Site'
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
                            'This is the third version of my former website, SerpentVenom. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/serpentvenom', className: 'db tar mv goto' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/erranAndrews_hero_320.png', alt: 'Erran Andrews', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/erran-andrews', className: 'blocks' },
                                    'Erran Andrews Hair Design Site'
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_hero.png', alt: 'Ni Sa Bula', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/ni-sa-bula', className: 'blocks' },
                                    'Ni Sa Bula E-Commerce Site'
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
                            'This is an e-commerce site that I single-handedly designed and developed in 2008 using the Zen Cart e-commerce solution. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/ni-sa-bula', className: 'db tar mv goto' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_hero.png', alt: 'Adge IT Consulting', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/adge', className: 'blocks' },
                                    'Adge IT Consulting Site Design'
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
                            'This 2007 project ended up being my first experience with spec work. ',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/adge', className: 'db tar mv goto' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/Platzner-Hero_320.png', alt: 'Platzner & Co.', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/platzner', className: 'blocks' },
                                    'Platzner & Co. Site Design'
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
                ),
                _react2.default.createElement(
                    'article',
                    { className: 'group-item m0' },
                    _react2.default.createElement(
                        'header',
                        { className: 'relative' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_hero_320.png', alt: 'Template Design for Sandvox', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/urban-forest', className: 'blocks' },
                                    'Template Design for Sandvox'
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
                            _react2.default.createElement(
                                'a',
                                { href: 'http://www.karelia.com/products/sandvox/' },
                                'Sandvox'
                            ),
                            ' is a website building tool for Macs. This is the Urban Forest template I designed for them in 2005.',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/urban-forest', className: 'db tar mv goto' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_home_hero.png', alt: 'Cafe de la Paz Website', className: 'hero-image' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 's5 ph m0 absolute' },
                            _react2.default.createElement(
                                'span',
                                { className: 'absolute' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/web-projects/cafe-de-la-paz', className: 'blocks' },
                                    'Caf\xE9 de la Paz Restaurant Site'
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
                            'This is my first freelance project. Designed in 2004 for Caf\xE9 de la Paz, a restaurant in Berkeley, California.',
                            _react2.default.createElement(
                                'a',
                                { href: '/web-projects/cafe-de-la-paz', className: 'db tar mv goto' },
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
/* 15 */
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
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/rjm-splash.png', srcSet: '/assets/web-projects/rjm-splash.png 320w, /assets/web-projects/rjm-splash_720.png 720w', alt: 'Rejuvenation Medi-Spas', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2 spec-rjm', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
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
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail4.png', alt: 'Top navigation detail', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail1.png', alt: 'Home page detail of the masthead', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic7' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/rjm_home_detail2.png', alt: 'Home page detail of coupon section', className: 'hero-image pop-pic' })
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
                'This project is the the last bit of unpaid "spec work" I have done. Lesson learned, I no longer do projects on spec as a result.'
            )
        )
    );
};

/***/ }),
/* 16 */
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
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/platinum-splash.png', srcSet: '/assets/web-projects/platinum-splash.png 320w, /assets/web-projects/platinum-splash_720.png 720w', alt: 'Platinum Medical Spa', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
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
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_services.png', alt: 'Services page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/platinum_home.png', alt: 'Staff page layout', className: 'hero-image pop-pic' })
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
                { className: 's2 ruby' },
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
                'The site features some classic CSS techniques for creating gradients and box shadows using images since browser support for these properties did not exist yet. The topnav hover changes were managed using the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://css-tricks.com/css-sprites/' },
                    'CSS Sprites'
                ),
                ' technique.'
            )
        )
    );
};

/***/ }),
/* 17 */
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
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/erran-splash.png', alt: 'Erran Andrews Hair Design', srcSet: '/assets/web-projects/erran-splash.png 320w, /assets/web-projects/erran-splash_720.png 720w', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2 spec-ea', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Erran Andrews Hair Design'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is a portfolio site designed in 2009 to promote the hair design work of Erran Andrews, a San Francisco-based hairstylist. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                'The site launched in 2009 but disappeared after the site hosting and domain registration expired the next year.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
/* 18 */
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
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/platzner-splash.png', srcSet: '/assets/web-projects/platzner-splash.png 320w, /assets/web-projects/platzner-splash_720.png 720w', alt: 'Proposed Platzner & Co. Website', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Proposed Platzner & Co. Website'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is the design of a website for a small consultancy that I did in 2008. The client chose to go in a different direction and paid for services rendered. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
/* 19 */
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
                'Ugly Bunnies -- Template Design for Sandvox'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/UF-splash.png', alt: 'Template Design for Sandvox', srcSet: '/assets/web-projects/UF-splash.png 320w, /assets/web-projects/UF-splash_720.png 720w', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Template Design for Sandvox'
            ),
            _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'http://www.karelia.com/products/sandvox/' },
                    'Sandvox'
                ),
                ' is a website building tool for Macs. This a the Urban Forest template I designed for them in 2005. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail2.png', alt: 'Detail of the rendered template', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail3.png', alt: 'Detail of the photo Navigation', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail1.png', alt: 'Detail of the rendered template', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The design features a fixed-width layout suitable for 17-inch monitors which had become the standard at that time. The masthead features a multi-layered background that was designed to accommodate a variable height depending on the content placed within it. Other details include image galler pagination controls designed to look like leaves.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0' },
                        'The template had to support a number of layouts including a homepage, blog post page and a Flash-powered image viewer. The template also needed to accommodate a sidebar on the left and/or right side.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail6.png', alt: 'Example site using the template', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail5.png', alt: 'Example site using the template', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/UF_detail4.png', alt: 'Example of the pagination controls on a page', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This design has proven to be the most enduring design I have done. The design is still used in production by several websites (including ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://www.todayinthegarden.com/' },
                    'this one'
                ),
                ' and ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://luckydogcambridge.com/' },
                    'this one'
                ),
                ' for example).'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'My main contribution to the template was my CSS code. The client wanted to create a framework that was inspired by the ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://www.csszengarden.com/' },
                    'CSS Zen Garden'
                ),
                ' so that new designs could be easily incorporated into the system without requiring new markup or a separate code base.'
            )
        )
    );
};

/***/ }),
/* 20 */
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
                'Ugly Bunnies -- Caf\xE9 de la Paz Website'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/cdlp-splash.png', alt: 'Caf\xE9 de la Paz Website', srcSet: '/assets/web-projects/cdlp-splash.png 320w, /assets/web-projects/cdlp-splash_720.png 720w', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Caf\xE9 de la Paz Website'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is my first freelance project. Designed in 2004 for Caf\xE9 de la Paz, a restaurant in Berkeley, California. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_detail3.png', alt: 'Detail of the menu page', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_detail2.png', alt: 'Detail of the right sidebar', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_detail1.png', alt: 'Detail of the site navigation', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'The design features a fluid layout suitable for 17-inch monitors which had become the standard at that time. The page is bookended by the curved shapes at the top left and bottom right. The colors were drawn from earth and sand tones.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'project-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0' },
                        'The site had on primary layout with some content changes appearing in the right sidebar. Curves are incorporated to soften the edges and make the site feel more welcoming. The site naviation uses the same custom typeface that is used for the tagline that is adjacent to the logo.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_detail5.png', alt: 'Menu page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/cdlp_detail4.png', alt: 'Hompage layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'The design remained active for two years when the restaurant owner decided he no longer wanted to pay for regular updates and maintenance and arranged to have someone else do that work. They proceeded to break the design and ended up doing a new design that lasted until the restaraunt closed a couple of years later.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This site was built in compliance with strict XHTML standards and CSS2 for layout. Images are used to display the custom typeface of the tagline and site navigation items since text replacement techniues were still a few years away from being conceived. JavaScript is used to unobtrusively change the naviation items on hover.'
            )
        )
    );
};

/***/ }),
/* 21 */
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
                'Ugly Bunnies -- SerpentVenom Website'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/sv-splash.png', srcSet: '/assets/web-projects/sv-splash.png 320w, /assets/web-projects/sv-splash_720.png 720w', alt: 'SerpentVenom Spa', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2 spec-sv', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'SerpentVenom'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This 2009 design is the third version of my former website, SerpentVenom. SerpentVenom featured my art and design portfolios as well as my blog and some articles I had written. I retired the site when I realized I had not updated the blog in over a year.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                        { className: 'item pic1 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail3.png', alt: 'Project screenshot gallery', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail2.png', alt: 'Project page detail', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail1.png', alt: 'Home page detail of masthead', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail4.png', alt: 'Project gallery lightbox', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'SerpentVenom was originally designed for desktop only and was eventually converted to be responsive in order to support mobile devices like phones and tablets. Color is used to distinguish one type of content from another; blue for web projects, green for art projects and yellow for blog posts and articles. The color palette is drawn first from the blue of the logo. Shades and tints were created by adjusting the HSB values in PhotoShop. Green and yellow hues were selected using similar saturation and blackness values as the main blue color.'
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
                        'The layout of the homepage is built upon repeated use of the golden ratio. The golden ratio also influences other page layouts such as the project pages, blog post pages, blog archive pages, and article pages.'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'Project pages featured a unique UI to control what aspect of the project was featured such as Design, Development and a project gallery that displayed images using my custom lightbox script.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail5.png', alt: 'Homepage layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail8.png', alt: 'Homepage tablet layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic7 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail7.png', alt: 'Blog page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic8 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/sv_detail6.png', alt: 'Project page layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This incarnation of SerpentVenom stayed in production for nearly 7 years. While I was sad to see it go, I felt that a change was in order and so I rebranded to use Ugly Bunnies.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'SerpentVenom was powered by Wordpress using a custom theme that I developed from scratch. The markup is HTML5 compliant. Layouts, gradients and transitions are all provided by CSS. The Project Viewer and Lightbox are written in vanilla JavaScript.'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'Responsive design is achieved using CSS media queries. Flexbox was used to change the layout order for small screen devices.'
            )
        )
    );
};

/***/ }),
/* 22 */
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
                'Ugly Bunnies -- Adge Website Design'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/adge-splash.png', srcSet: '/assets/web-projects/platinum-splash.png 320w, /assets/web-projects/adge-splash_720.png 720w', alt: 'Adge homepage design', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Adge IT Consultants'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This 2007 project ended up being my first experience with spec work. These comps were produced in the hope that they would seal the deal in getting my contract signed. Unfortunately, the client chose to go in another direction and walked away. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_detail7.png', alt: 'Home page detail of matrix and right sidebar', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_detail3.png', alt: 'Home page detail of the right side of the masthead', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_detail2.png', alt: 'Home page detail of header', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This design predates smart mobile devices and was designed to work best with 17-inch monitors. The homepage featured a matrix of services that "lit up" when the user moused over each service. The user could see more information about each service by clicking on the particular service.'
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
                        'The design features two different layouts including the homepage and a content page with a right sidebar. The main navigation element is the global site navigation in the form of a horizontal bar featuring color changes on hover.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_detail5.png', alt: 'Services page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/adge_detail4.png', alt: 'Homepage layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This project did not proceed past the mock designs seen here. The lesson learned here is that spec work does not ensure that you will get the gig. Always make sure you have a signed contract in hand before any work is done.'
            )
        )
    );
};

/***/ }),
/* 23 */
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
                'Ugly Bunnies -- Ni Sa Bula E-Commerce Site'
            )
        ),
        _react2.default.createElement(
            'header',
            { className: 'splash lh0' },
            _react2.default.createElement('img', { src: '/assets/web-projects/nsb_splash.png', srcSet: '/assets/web-projects/nsb_splash.png 320w, /assets/web-projects/nsb-splash_720.png 720w', alt: 'Adge homepage design', className: 'hero-image' })
        ),
        _react2.default.createElement(
            'section',
            { className: 'ph2 pb2', onClick: popPic },
            _react2.default.createElement(
                'h1',
                { className: 'copy-header s1 mv1' },
                'Ni Sa Bula E-Commerce Site'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is an e-commerce site that I single-handedly designed and developed in 2008 using the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://www.zen-cart.com/' },
                    'Zen Cart'
                ),
                ' e-commerce solution. Click on each screenshot to enlarge them.'
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
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
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail3.png', alt: 'Detail of the product details page', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic2 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail2.png', alt: 'Home page detail of other featured products', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic3' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail1.png', alt: 'Home page detail the featured product', className: 'hero-image pop-pic' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-group-item copy' },
                    _react2.default.createElement(
                        'p',
                        { className: 'm0 mb2' },
                        'This site was designed primarily for desktop users as mobile use was still limited. The site features a 4-column grid-based design. The homepage design includes a "hero" product and four more featured products that could be changed using the Zen Cart admin tools. Larger versions of the product images on the product detail page could be viewed in modal experience by clicking on the magnifying glass situated below the image.'
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
                        'The design features two basic layouts; the homepage and the content layout page with a right sidebar that was used for product details and search result listings. Navigation on underlying pages was provided by a topnav bar listing product categories. A Fijian paper fabic pattern was used as a background tile as a tribute to the proprietor\u2019s heritage. The color palette features earthtones accompanied by a red hue that was extracted from the logo for accents, and a blue hue for links.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items project-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic4' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail4.png', alt: 'Services page layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic5 mid' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail5.png', alt: 'Homepage layout', className: 'hero-image pop-pic' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item pic6 right' },
                        _react2.default.createElement('img', { src: '/assets/web-projects/nsb_detail6.png', alt: 'Search Results layout', className: 'hero-image pop-pic' })
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This project was successfully launched and stayed in production for two years. It was eventually taken on by another developer who moved it to Shopify after some unfortunate edits broke the template I had provided. '
            ),
            _react2.default.createElement(
                'h2',
                { className: 's2 ruby' },
                'The Development'
            ),
            _react2.default.createElement(
                'p',
                { className: 'm0 mb2' },
                'This project was built with the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://www.zen-cart.com/' },
                    'Zen Cart'
                ),
                ' e-commerce application which is written in PHP and accompanied by a MySQL database. The template is a modified version of the base template that comes with the Zen Cart system. Standards-compliant CSS controls the layout and styling. Custom JavaScript was used to create and launch the larger product image on the detail page.'
            )
        )
    );
};

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Topnav = __webpack_require__(26);

var _Topnav2 = _interopRequireDefault(_Topnav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            showMenu: false
        };
        _this.expandMenu = _this.expandMenu.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'expandMenu',
        value: function expandMenu() {
            this.setState({
                showMenu: !this.state.showMenu
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    { className: 'masthead' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo pa1' },
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
                        { href: '#', className: 'pa', id: 'menuControl', onClick: this.expandMenu, title: 'Click to open menu' },
                        _react2.default.createElement('i', { className: 'icon-menu' })
                    )
                ),
                _react2.default.createElement(_Topnav2.default, { isOpen: this.state.showMenu, expandMenu: this.expandMenu })
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topnav = function (_Component) {
    _inherits(Topnav, _Component);

    function Topnav(props) {
        _classCallCheck(this, Topnav);

        var _this = _possibleConstructorReturn(this, (Topnav.__proto__ || Object.getPrototypeOf(Topnav)).call(this, props));

        _this.height = 0;
        return _this;
    }

    _createClass(Topnav, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var mNav = document.getElementById('topNav');
            this.height = mNav.scrollHeight + "px";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'topnav m0' },
                    _react2.default.createElement(
                        'ul',
                        { id: 'topNav',
                            className: this.props.isOpen ? 'menu show' : 'menu',
                            style: this.props.isOpen ? { height: this.height } : { height: 0 }
                        },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/', onClick: this.props.expandMenu },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/web-projects', onClick: this.props.expandMenu },
                                'Web Projects'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/about', onClick: this.props.expandMenu },
                                'About Ugly Bunnies'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Topnav;
}(_react.Component);

exports.default = Topnav;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'footer',
                { className: 'site-footer pa2' },
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: 'inline-list site-links m0 p0' },
                        _react2.default.createElement(
                            'li',
                            { className: 'm0 p0' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'm0 p0' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/web-projects' },
                                'Web Projects'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'm0 p0' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/about' },
                                'About Ugly Bunnies'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 's8' },
                    'Copyright \xA9 2001-',
                    this.state.date.getFullYear(),
                    ' Michael Wong. All Rights Reserved.'
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.1ffec11f.js.map