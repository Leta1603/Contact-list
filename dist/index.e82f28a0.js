// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2L15i":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dV6cC":[function(require,module,exports) {
var _render = require("./render");
var _localStorage = require("./localStorage");
// import { closeSideBar, openSideBar } from "./sidebar";
// import { createGroupList, createGroupSelect } from "./group";
const addContactBtn = document.getElementById("addContactBtn");
const addGroupBtn = document.getElementById("addGroupBtn");
const saveGroupBtn = document.getElementById("saveGroupBtn");
const saveContactBtn = document.getElementById("saveContact");
const groupsBtn = document.getElementById("groupsBtn");
const groupsSidebar = document.querySelector(".sidebar-groups");
const contactSidebar = document.querySelector(".sidebar-contact");
const groupsSidebarCloseBtn = document.querySelector(".sidebar-groups .sidebar-header__cross");
const contactSidebarCloseBtn = document.querySelector(".sidebar-contact .sidebar-header__cross");
const groupSelect = document.getElementById("groups");
const form = document.querySelector(".contact-form");
const fullNameInput = form.elements.fullName;
const phoneNumberInput = form.elements.phoneNumber;
function deleteContact(contactList, contacts, typeOfGroup) {
    const deleteIconsArray = contactList.querySelectorAll(".contact-delete");
    deleteIconsArray.forEach((icon, index)=>{
        icon.addEventListener("click", (e)=>{
            const itemIndex = Number(e.target.closest(".contact-group__item").dataset.contactid);
            if (itemIndex === index) {
                contacts.splice(itemIndex, 1);
                e.target.closest(".contact-group__item").remove();
                (0, _localStorage.setDataInLocalStorage)(`${typeOfGroup}`, contacts);
            }
            showContacts(typeOfGroup, contactList);
        });
    });
}
function editContact(contactList, contacts) {
    const editIconsArray = contactList.querySelectorAll(".contact-edit");
    editIconsArray.forEach((icon, index)=>{
        icon.addEventListener("click", (e)=>{
            const contactItem = e.target.closest(".contact-group__item");
            if (Number(contactItem.dataset.contactid) === index) {
                console.log(12345);
                let contact = contacts.find((item, contactIndex)=>contactIndex === Number(contactItem.dataset.contactid));
                openSideBar(contactSidebar);
                fullNameInput.value = contact.fullName;
                phoneNumberInput.value = contact.phoneNumber;
                groupSelect.value = contact.typeOfGroup;
                contactSidebar.dataset.indexofcontact = String(index);
                contactSidebar.dataset.typeofgroup = contact.typeOfGroup;
            }
        });
    });
}
function showContacts(typeOfGroup, contactList) {
    const contactsFromLocalStorage = (0, _localStorage.getDataFromLocalStorage)(`${typeOfGroup}`);
    contactList.innerHTML = "";
    if (contactsFromLocalStorage.length > 0) contactsFromLocalStorage.forEach((contact, index)=>{
        contactList.innerHTML += (0, _render.renderContact)(contact, index);
    });
    deleteContact(contactList, contactsFromLocalStorage, typeOfGroup);
    editContact(contactList, contactsFromLocalStorage);
}
function onTitleClick(group, titleOfTheGroup = null) {
    if (!titleOfTheGroup) titleOfTheGroup = group.querySelector(".contact-group__title");
    titleOfTheGroup.classList.toggle("contact-group__title_active");
    const listOfContacts = group.querySelector(".contact-group__list");
    if (titleOfTheGroup.classList.contains("contact-group__title_active")) {
        let typeOfGroup = group.dataset.grouptype;
        showContacts(typeOfGroup, listOfContacts);
    } else listOfContacts.innerHTML = "";
}
function addGroupListener() {
    const contactGroups = document.querySelectorAll(".contact-group");
    contactGroups?.forEach((group)=>{
        const titleOfTheGroup = group.querySelector(".contact-group__title");
        titleOfTheGroup.addEventListener("click", ()=>onTitleClick(group, titleOfTheGroup));
    });
}
function showTitlesOfGroups() {
    let wrapper = document.querySelector(".contacts__wrapper");
    wrapper.innerHTML = "";
    let groupsFromLocalStorage = (0, _localStorage.getDataFromLocalStorage)("groups");
    if (groupsFromLocalStorage.length > 0) {
        groupsFromLocalStorage.forEach((group)=>{
            wrapper.innerHTML += (0, _render.renderContactGroup)(group);
        });
        addGroupListener();
    } else document.querySelector(".main").classList.add("main_empty");
}
showTitlesOfGroups();
document.addEventListener("click", (e)=>{
    const isClickOutsideOfGroupsSidebar = groupsSidebar.querySelector(".sidebar__container")?.contains(e.target);
    const isClickOutsideOfContactsSidebar = contactSidebar.querySelector(".sidebar__container")?.contains(e.target);
    const isClickOnGroupsBtn = groupsBtn.contains(e.target);
    const isClickOnContactBtn = addContactBtn.contains(e.target);
    if (!isClickOutsideOfGroupsSidebar && !isClickOutsideOfContactsSidebar && !isClickOnGroupsBtn && !isClickOnContactBtn) {
        closeSideBar(groupsSidebar);
        closeSideBar(contactSidebar);
    }
});
groupsBtn?.addEventListener("click", (e)=>{
    e.preventDefault();
    openSideBar(groupsSidebar);
});
addContactBtn?.addEventListener("click", (e)=>{
    e.preventDefault();
    openSideBar(contactSidebar);
    contactSidebar.dataset.indexofcontact = "-1";
    contactSidebar.dataset.typeofgroup = "empty";
});
groupsSidebarCloseBtn?.addEventListener("click", ()=>{
    closeSideBar(groupsSidebar);
});
contactSidebarCloseBtn?.addEventListener("click", ()=>{
    closeSideBar(contactSidebar);
});
addGroupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const groupList = document.querySelector(".group-list");
    groupList.innerHTML += (0, _render.renderGroupItem)("", groupList.childElementCount + 1);
});
saveGroupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const groupList = document.querySelector(".group-list");
    const groupsItems = groupList.querySelectorAll(".group-list__item");
    let groups = (0, _localStorage.getDataFromLocalStorage)("groups");
    groupsItems.forEach((item)=>{
        const itemValue = item.querySelector(".sidebar-input").value.trim();
        if (itemValue && !groups.includes(itemValue)) {
            groups.push(itemValue);
            (0, _localStorage.setDataInLocalStorage)(`${itemValue}`, []);
        }
    });
    (0, _localStorage.setDataInLocalStorage)("groups", groups);
    showTitlesOfGroups();
    closeSideBar(groupsSidebar);
});
function isGroupActive(nameOfGroup) {
    const groupWrapper = document.querySelector(`.contact-group[data-grouptype=\"${nameOfGroup}\"]`);
    const titleOfTheGroup = groupWrapper.querySelector(".contact-group__title");
    return titleOfTheGroup.classList.contains("contact-group__title_active");
}
function showGroup(nameOfGroup) {
    const groupWrapper = document.querySelector(`.contact-group[data-grouptype=\"${nameOfGroup}\"]`);
    if (!isGroupActive(nameOfGroup)) onTitleClick(groupWrapper);
    else {
        const listOfContacts = groupWrapper.querySelector(".contact-group__list");
        showContacts(nameOfGroup, listOfContacts);
    }
}
function showGroupChanges(oldGroup, nameOfGroup) {
    const oldGroupWrapper = document.querySelector(`.contact-group[data-grouptype=\"${oldGroup}\"]`);
    const listOfOldGroup = oldGroupWrapper.querySelector(".contact-group__list");
    if (oldGroup !== nameOfGroup) {
        showContacts(oldGroup, listOfOldGroup);
        showGroup(nameOfGroup);
    } else showContacts(oldGroup, listOfOldGroup);
}
function isDataValid(fullName, phoneNumber, groupValue) {
    if (fullName && phoneNumber && groupValue) {
        const phoneNumberPattern = /^(\+7|8)\d{10}$|^(\+375)\d{9}$/;
        let isPhoneNumberValid = phoneNumberPattern.test(phoneNumber);
        const fullNamePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
        let isFullNameValid = fullNamePattern.test(fullName);
        return isFullNameValid && isPhoneNumberValid;
    }
    return false;
}
function updateGroups(contactInfo, groupValue) {
    let indexOfContact = contactSidebar.dataset.indexofcontact;
    let oldTypeOfGroup = contactSidebar.dataset.typeofgroup;
    const oldContacts = (0, _localStorage.getDataFromLocalStorage)(`${oldTypeOfGroup}`);
    const newContacts = (0, _localStorage.getDataFromLocalStorage)(`${groupValue}`);
    if (indexOfContact > -1 && oldTypeOfGroup !== "empty") {
        oldContacts[indexOfContact] = {
            ...contactInfo
        };
        if (oldTypeOfGroup !== groupValue) {
            newContacts.push({
                ...contactInfo
            });
            (0, _localStorage.setDataInLocalStorage)(`${groupValue}`, newContacts);
            oldContacts.splice(indexOfContact, 1);
        }
        (0, _localStorage.setDataInLocalStorage)(`${oldTypeOfGroup}`, oldContacts);
        showGroupChanges(oldTypeOfGroup, groupValue);
    } else {
        newContacts.push({
            ...contactInfo
        });
        (0, _localStorage.setDataInLocalStorage)(`${groupValue}`, newContacts);
        showGroup(contactInfo.typeOfGroup);
    }
}
saveContactBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let fullName = fullNameInput.value.trim();
    let phoneNumber = phoneNumberInput.value.trim();
    let groupValue = groupSelect.value.trim();
    if (isDataValid(fullName, phoneNumber, groupValue)) {
        let contactInfo = {
            fullName: fullNameInput.value.trim(),
            phoneNumber: phoneNumberInput.value.trim(),
            typeOfGroup: groupSelect.value.trim()
        };
        updateGroups(contactInfo, groupValue);
        closeSideBar(contactSidebar);
    } else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435!");
});
function createGroupList(groups) {
    const groupList = document.querySelector(".group-list");
    groupList.innerHTML = "";
    groups.forEach((group, index)=>{
        groupList.innerHTML += (0, _render.renderGroupItem)(group, index);
    });
    deleteGroup(groupList);
}
function createGroupSelect(groups) {
    groupSelect.innerHTML = (0, _render.renderFirstOption)();
    groups.forEach((group)=>{
        groupSelect.innerHTML += (0, _render.renderOption)(group);
    });
}
function openSideBar(sidebar) {
    let groups = (0, _localStorage.getDataFromLocalStorage)("groups");
    if (sidebar === groupsSidebar) {
        groupsSidebar?.classList.add("sidebar-groups_active");
        contactSidebar?.classList.remove("sidebar-contact_active");
        createGroupList(groups);
    } else if (sidebar === contactSidebar) {
        contactSidebar?.classList.add("sidebar-contact_active");
        console.log(contactSidebar?.classList);
        groupsSidebar?.classList.remove("sidebar-groups_active");
        createGroupSelect(groups);
    }
    document.body.classList.add("body_lock");
}
function closeSideBar(sidebar) {
    if (sidebar === groupsSidebar) groupsSidebar?.classList.remove("sidebar-groups_active");
    else if (sidebar === contactSidebar) {
        console.log("delete");
        // contactSidebar?.classList.remove("sidebar-contact_active");
        fullNameInput.value = "";
        phoneNumberInput.value = "";
    }
    document.body.classList.remove("body_lock");
}
function deleteGroup(groupList) {
    const deleteIconsArray = groupList.querySelectorAll(".contact-delete");
    deleteIconsArray.forEach((icon, index)=>{
        icon.addEventListener("click", (e)=>{
            const itemIndex = Number(e.target.closest(".group-list__item").dataset.groupid);
            if (itemIndex === index) {
                const groups = (0, _localStorage.getDataFromLocalStorage)("groups");
                const nameOfGroup = groups[itemIndex];
                groups.splice(itemIndex, 1);
                (0, _localStorage.setDataInLocalStorage)("groups", groups);
                localStorage.removeItem(`${nameOfGroup}`);
                e.target.closest(".group-list__item").remove();
                document.querySelector(`.contact-group[data-grouptype=\"${nameOfGroup}\"]`).remove();
            }
        });
    });
}

},{"./render":"6Nkx6","./localStorage":"45bAM"}],"6Nkx6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContact", ()=>renderContact);
parcelHelpers.export(exports, "renderGroupItem", ()=>renderGroupItem);
parcelHelpers.export(exports, "renderFirstOption", ()=>renderFirstOption);
parcelHelpers.export(exports, "renderOption", ()=>renderOption);
parcelHelpers.export(exports, "renderContactGroup", ()=>renderContactGroup);
function renderContact(obj, index) {
    return `<li class="contact-group__item" data-contactId= ${index}>
                  <div class="contact__info"">${obj?.fullName}</div>
                  <div class="contact__phone-and-icons">
                    <div class="contact__phone-number">
                      ${obj?.phoneNumber}
                    </div>
                    <div class="contact__icons">
                      <div class="contact-icon contact-edit">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_11401_17)">
                            <path
                              opacity="0.3"
                              d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11401_17">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="contact-icon contact-delete">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_11401_26)">
                            <path
                              opacity="0.3"
                              d="M6.66664 20.3889C6.66664 21.55 7.61664 22.5 8.77775 22.5H17.2222C18.3833 22.5 19.3333 21.55 19.3333 20.3889V7.72222H6.66664V20.3889ZM9.26331 12.8733L10.7516 11.385L13 13.6228L15.2378 11.385L16.7261 12.8733L14.4883 15.1111L16.7261 17.3489L15.2378 18.8372L13 16.5994L10.7622 18.8372L9.27386 17.3489L11.5116 15.1111L9.26331 12.8733ZM16.6944 4.55556L15.6389 3.5H10.3611L9.30553 4.55556H5.61108V6.66667H20.3889V4.55556H16.6944Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11401_26">
                              <rect
                                width="25.3333"
                                height="25.3333"
                                fill="white"
                                transform="translate(0.333313 0.333313)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>`;
}
function renderGroupItem(name, index) {
    return `<li class="group-list__item" data-groupId = "${index}">
              <label class="input-label">
                <input
                  type="text"
                  class="sidebar-input"
                  maxlength="25"
                  placeholder="\u{412}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{43D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435}"
                  value="${name || ""}"
                />
              </label>
              <div class="contact-icon contact-delete">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11401_26)">
                    <path
                      opacity="0.3"
                      d="M6.66664 20.3889C6.66664 21.55 7.61664 22.5 8.77775 22.5H17.2222C18.3833 22.5 19.3333 21.55 19.3333 20.3889V7.72222H6.66664V20.3889ZM9.26331 12.8733L10.7516 11.385L13 13.6228L15.2378 11.385L16.7261 12.8733L14.4883 15.1111L16.7261 17.3489L15.2378 18.8372L13 16.5994L10.7622 18.8372L9.27386 17.3489L11.5116 15.1111L9.26331 12.8733ZM16.6944 4.55556L15.6389 3.5H10.3611L9.30553 4.55556H5.61108V6.66667H20.3889V4.55556H16.6944Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11401_26">
                      <rect
                        width="25.3333"
                        height="25.3333"
                        fill="white"
                        transform="translate(0.333313 0.333313)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </li>`;
}
function renderFirstOption() {
    return `<option value="" disabled selected hidden> \u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{443}</option>`;
}
function renderOption(name) {
    return `<option value="${name}">${name}</option>`;
}
function renderContactGroup(name) {
    return `<div class="contact-group" data-groupType = "${name}">
              <div class="contact-group__title">
                ${name}
              </div>
              <ul class="contact-group__list"></ul>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"45bAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDataFromLocalStorage", ()=>getDataFromLocalStorage);
parcelHelpers.export(exports, "setDataInLocalStorage", ()=>setDataInLocalStorage);
function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
function setDataInLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2L15i","dV6cC"], "dV6cC", "parcelRequiref350")

//# sourceMappingURL=index.e82f28a0.js.map
