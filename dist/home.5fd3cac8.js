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
})({"js/home.js":[function(require,module,exports) {
var topProjects = document.querySelector(".home_works_top");
var centerProjects = document.querySelector(".home_works_center");
var bottomProjects = document.querySelector(".home_works_bottom");
var projects = [{
  img: "/assets/images/project_1.png",
  title: "Smoking photos",
  info: "Smoke"
}, {
  img: "/assets/images/project_2.png",
  title: "Night City",
  info: "Night"
}, {
  img: "/assets/images/project_3.png",
  title: "Night City View",
  info: "City"
}, {
  img: "/assets/images/project_4.png",
  title: "Motion Portrait",
  info: "Portrait"
}, {
  img: "/assets/images/project_5.png",
  title: "Human Skin",
  info: "Skin"
}, {
  img: "/assets/images/project_6.png",
  title: "Ghost Rider",
  info: "Smoke"
}, {
  img: "/assets/images/project_7.png",
  title: "Black and White Photo of Young Human",
  info: "Portrait"
}];
var createWorkElement = function createWorkElement(element) {
  var project = document.createElement("div");
  var span = document.createElement("span");
  var img = document.createElement("img");
  var title = document.createElement("h3");
  var info = document.createElement("p");
  var div = document.createElement("div");
  var cover = document.createElement("div");
  span.innerText = "0".concat(projects.findIndex(function (m) {
    return m === element;
  }) + 1);
  img.src = element.img;
  title.innerText = element.title;
  info.innerText = element.info;
  span.dataset.splitting = "chars";
  title.dataset.splitting = "chars";
  info.dataset.splitting = "chars";
  div.appendChild(img);
  div.appendChild(cover);
  project.appendChild(span);
  project.appendChild(div);
  project.appendChild(title);
  project.appendChild(info);
  project.classList.add("home_works_project");
  span.classList.add("number");
  div.classList.add("home_works_project_cover");
  return project;
};
projects.slice(0, 3).forEach(function (element) {
  var project = createWorkElement(element);
  topProjects.appendChild(project);
});
projects.slice(3, 5).forEach(function (element) {
  var project = createWorkElement(element);
  centerProjects.appendChild(project);
});
projects.slice(5, 7).forEach(function (element) {
  var project = createWorkElement(element);
  bottomProjects.appendChild(project);
  Splitting();
});
var heroTl = gsap.timeline({
  defaults: {
    ease: "power2.easeInOut"
  }
});
heroTl.to(".home_hero_content h1 .char", {
  y: 0,
  stagger: 0.1,
  opacity: 1
});
heroTl.fromTo([".home_hero_skills .char", ".home_hero_socials .char"], {
  y: 100
}, {
  y: 0
});
gsap.to(".skill_svg", {
  duration: 5,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
  repeatDelay: 2,
  motionPath: {
    path: ".line_path",
    align: ".line_path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 1,
    end: 0
  }
});
ScrollTrigger.create({
  trigger: ".home_hero_content_info",
  start: "top center",
  once: true,
  // markers: true,
  onEnter: function onEnter() {
    // const heroTl = gsap.timeline({
    //   defaults: {
    //     ease: "power2.inOut",
    //   },
    // });
    heroTl.to(".home_hero_content_info .char", {
      y: 0
    });
    heroTl.fromTo(".home_hero_content_img  div", {
      x: "0%"
    }, {
      x: "100%"
    }, "-=0.5");
    heroTl.fromTo(".home_hero_content_img  img", {
      scale: "1.5"
    }, {
      scale: "1",
      ease: "power1.out"
    }, "-=0.5");
  }
});
ScrollTrigger.create({
  trigger: ".home_works",
  start: "top bottom-=400px",
  once: true,
  // markers: true,
  onEnter: function onEnter() {
    gsap.to(".home_works h1 .char", {
      y: 0
    });
  }
});
var homeProjects = document.querySelectorAll(".home_works_project");
homeProjects.forEach(function (project) {
  var numberChars = project.querySelectorAll(".number .char");
  var cover = project.querySelector(".home_works_project_cover div");
  var img = project.querySelector(".home_works_project_cover img");
  var info = project.querySelectorAll("h3 .char");
  var text = project.querySelectorAll("p .char");
  ScrollTrigger.create({
    trigger: project,
    start: "top center",
    once: true,
    // markers: true,
    onEnter: function onEnter() {
      var projectTl = gsap.timeline({
        defaults: {
          ease: "power2.inOut"
        }
      });
      projectTl.to(numberChars, {
        y: 0,
        stagger: 0.05
      });
      projectTl.fromTo(cover, 0.75, {
        x: "0%"
      }, {
        x: "100%"
      }, "-=0.5");
      projectTl.fromTo(img, 0.75, {
        scale: "1.5"
      }, {
        scale: "1"
      }, "-=0.75");
      projectTl.to([info, text], {
        y: 0,
        stagger: 0.05
      }, "-=0.5");
    }
  });
});
barba.hooks.beforeEnter(function () {
  heroTl.kill();
});

// barba.hooks.afterEnter(() => {
//   createProjects();
// });
// createProjects();
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54009" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/home.js"], null)
//# sourceMappingURL=/home.5fd3cac8.js.map