// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"2IwU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n#app{\n    min-width: 50vw;\n    position: relative;\n    animation: volar 2s linear infinite;\n    margin-top:20px\n}\n/* \u63A5\u4E0B\u6765\u6211\u8981\u5F00\u59CB\u753B\u7AF9\u873B\u8713 */\n.fly{\n    width: 100px;\n\theight: 5px;\n    background: transparent;\n    margin: 0 auto;\n    margin-bottom: 10px;\n    position: relative;\n}\n.turn{\n    width: 100px;\n    height: 5px;\n    background-color: gray;\n    border-radius: 5px;\n    border: 2px solid gray;\n    z-index: 100;\n    opacity: 0.6;\n    position: absolute;\n    top: 10px;\n    /*\u5F00\u59CB\u65CB\u8F6C\u4E86*/\n    animation: rotar .1s infinite linear;\n}\n.up{\n    width: 20px; \n    height: 10px; \n    display: block;\n    border: 2px solid #555; \n    background: #BD8D22;\n    border-radius: 100px 100px 0 0;\n    position: absolute; \n    top: 0;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 2;\n}\n.down{\n    width: 7px;\n\theight: 30px;\n    z-index: 1;\n\tbackground: #FCC136;\n    position: relative;\n    top: 7px;\n\tborder: 2px solid black;\n\tmargin: 0 auto;\n}\n@keyframes rotar {\n    from{transform:rotate3D(0,1,0,0deg);}\n    to{transform:rotate3D(0,1,0,360deg);}\n}\n/* \u63A5\u4E0B\u6765\u6211\u8981\u5F00\u59CB\u753B\u5934 */\n.big_head{\n    background: #35A1C9;\n    border: 2px solid black;\n}\n.left_beards{\n    float: left;\n    left: 16px;\n}\n.left_beard1 {\n    margin-bottom: 18px;\n    transform: rotate(25deg);\n    background-color: black;\n}\n.left_beard2 {\n    margin-bottom: 10px;\n    background-color: black;\n}\n.left_beard3 {\n    transform: rotate(-10deg);\n    background-color: black;\n}\n.right_beards {\n    float:right;\n    right: 16px;\n}\n.right_beard1 {\n    margin-bottom: 18px;\n    transform: rotate(-25deg);\n    background-color: black;\n}\n.right_beard2 {\n    margin-bottom: 10px;\n    background-color: black;\n}\n.right_beard3 {\n    transform: rotate(10deg);\n    background-color: black;\n}\n.face{\n\tbackground: white;\n\tborder: 2px solid black;\n}\n\n.eyes li{\n    background: white;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 1px solid black;\n    overflow: hidden;\n}\n.left_eye{\n    left: 58px;\n    background: black;\n}\n.left_eyeball{\n    top: 5px;\n    left: 10px;\n    background: white;\n}\n.right_eye{\n    right: 58px;\n    background: black;\n}\n.right_eyeball{\n    background: white;\n    right: 7px;\n    top: 9px;\n}\n.right_empty{\n    background-color: white;\n}\n.right_empty:after {\n    content: \"\u2312\";\n    width: 48px;\n    line-height: 2.5;\n    font-size: 30px;\n    position: absolute;\n    text-align: center;\n    font-weight: bold;\n  }\n.right_empty:after {\n    color: #000;\n  }\n  @keyframes pulse {\n    to {\n      bottom: 100px;\n    }\n    from {\n      bottom: 0;\n    }\n  }\n.noise{\n    background: #B11735;\n    border: 1px solid black;  \n  }\n  .noise_white{\n    background: white; \n    border: 1px solid #fff;\n  }\n  .centre_beard{\n    background-color: black;\n  }\n  .mouth{\n    background: #B11635;\n}\n\n.mouth_in::before,.mouth_in::after{\n    background: #CA2533;\n}\n\n/*  \u63A5\u4E0B\u6765\u6211\u8981\u5F00\u59CB\u753B\u8EAB\u4F53 */\n.main{\n    background: #35A1C9;\n    border: 2px solid black;\n}\n.scarf{\n    background:#A1172E;\n}\n.bell{\n    border: 2px solid black;\n    background-color: #F19629;\n}\n.bell_up{\n    background-color:black;\n}\n.bell_down{\n    background-color: black;\n}\n.pocket_cloth{\n    background: white;\n}\n.pocket{\n    background: white;\n    border: 2px solid black;\n}\n\n.elbow_left{\n   transform: rotate(-45deg);\n   left: -46px;\n   background: #35A1C9;\n   border: 2px solid black; \n}\n.elbow_right{\n   transform: rotate(45deg);\n   right: -46px;\n   background: #35A1C9;\n   border: 2px solid black; \n}\n\n.hand_left{\n    top: -35px;\n    background-color: white;\n    border: 2px solid black;\n}\n.hand_right{\n    left: -3px;\n    background-color: white;\n    border: 2px solid black;\n}\n/* \u63A5\u4E0B\u6765,\u6211\u8981\u5F00\u59CB\u753B\u817F\u4E86 */\n\n.leg_left,\n.leg_right{\n    background: white;\n    border: 2px solid black; \n}\n@keyframes volar{\n    0%   {left:0px;}\n    25%  {left:-10px;}\n    50%  {left:0px;}\n    75%  {left:10px;}\n    100% {left:0px;}\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
textApp.innerText = _style.default.substr(0, n);
htmlApp.innerHTML = _style.default.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > _style.default.length) {
    window.clearInterval(id);
    return;
  }

  textApp.innerText = _style.default.substr(0, n);
  htmlApp.innerHTML = _style.default.substr(0, n);
  textApp.scrollTop = textApp.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

buttonPause.onclick = function () {
  pause();
};

buttonPlay.onclick = function () {
  id = play();
};

buttonSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

buttonNormal.onclick = function () {
  pause();
  time = 100;
  id = play();
};

buttonFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./style.js":"2IwU"}]},{},["epB2"], null)
//# sourceMappingURL=main.eb3c4ff4.js.map