"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// HouseWife Tools local edition

function hwt_start() {
  var _runCommand, _quitEditingContext, _submitEdit, _softCommand;
  var HWT_VER = '1.1.8';

  /*-------------------------------- Routing ---------------------------------*/
  var MO = new MutationObserver(observe);
  function observe(mutationList, observer) {
    var _iterator = _createForOfIteratorHelper(mutationList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type == 'childList' && mutation.target.id == 'content') {
          if ([].find.call(mutation.addedNodes, function (i) {
            var _i$classList;
            return i === null || i === void 0 || (_i$classList = i.classList) === null || _i$classList === void 0 ? void 0 : _i$classList.contains('content');
          })) {
            determineState();
          } else {
            var msg = [].find.call(mutation.addedNodes, function (i) {
              var _i$classList2, _i$classList3;
              return (i === null || i === void 0 || (_i$classList2 = i.classList) === null || _i$classList2 === void 0 ? void 0 : _i$classList2.contains('error')) || (i === null || i === void 0 || (_i$classList3 = i.classList) === null || _i$classList3 === void 0 ? void 0 : _i$classList3.contains('message'));
            });
            if (msg) {
              messageBroker.handle(msg, msg.className, msg.textContent);
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  function reObserve() {
    MO.observe(document.querySelector('#content'), {
      subtree: true,
      childList: true
    });
  }
  function determineState() {
    setBlur(0);
    if (queuedCommand) {
      runCommand.apply(void 0, _toConsumableArray(queuedCommand));
    }
    var content = document.querySelector('.content');
    if (!content) {
      handleIndex();
      return;
    }
    var hl = getHeadLine(content);
    var _parseHeadLine = parseHeadLine(hl),
      _parseHeadLine2 = _slicedToArray(_parseHeadLine, 4),
      m = _parseHeadLine2[0],
      boardID = _parseHeadLine2[1],
      boardName = _parseHeadLine2[2],
      topicID = _parseHeadLine2[3];
    if (m) {
      if (boardName && topicID) {
        handleTopic(content, boardID, boardName, topicID);
      } else {
        handleBoardPage(content, boardID);
      }
    } else {
      var _hl$;
      var title = hl === null || hl === void 0 || (_hl$ = hl[0]) === null || _hl$ === void 0 ? void 0 : _hl$.textContent;
      if (title == 'The list of existing boards:') {
        handleBoardList(content);
      }
      if (title == 'Revent viewed topics') {
        handleRVT(content);
      }
    }
  }
  function getHeadLine() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('.content');
    var index = 0,
      ret = [];
    var _iterator2 = _createForOfIteratorHelper(content.childNodes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var node = _step2.value;
        if (node.nodeName == 'BR') {
          if (index == 0) continue;else break;
        }
        ret.push(node);
        index++;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return ret;
  }
  function parseHeadLine() {
    var headLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getHeadLine(content);
    var headLinePattern = /\[([0-9]+)\](?:\s*(.+?)[\s]{2,}\[([0-9]+)\])?/m;
    return (headLine === null || headLine === void 0 ? void 0 : headLine[0].textContent.match(headLinePattern)) || [0, 0, 0, 0];
  }
  var actions = {};
  actions.home = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var pushHistory,
      res,
      htm,
      dom,
      c,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pushHistory = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
          setBlur(1);
          _context.next = 4;
          return fetch("/", {
            credentials: 'include'
          });
        case 4:
          res = _context.sent;
          if (res.ok) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          _context.next = 9;
          return res.text();
        case 9:
          htm = _context.sent;
          if (htm) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return");
        case 12:
          dom = document.createRange().createContextualFragment(htm);
          c = dom.querySelector('#content');
          document.querySelector('#content').replaceWith(c);
          if (pushHistory) pushHistoryState({
            screen: 'index'
          }, '#/');
          handleIndex();
          setBlur(0);
          reObserve();
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  function handleHash(hash) {
    if (!hash) {
      actions.home(false);
      return;
    }
    var _hash$match$slice = hash.match(/^#(?:\/([0-9]+|[^\/\:\s]*))?(?:\:([0-9]+|))?(?:\/([0-9]+|))?(?:\:([0-9]+|))?(?:#([0-9]+|))?/).slice(1),
      _hash$match$slice2 = _slicedToArray(_hash$match$slice, 5),
      board = _hash$match$slice2[0],
      boardPage = _hash$match$slice2[1],
      topic = _hash$match$slice2[2],
      topicPage = _hash$match$slice2[3],
      post = _hash$match$slice2[4];
    if (board == '') {
      actions.home(false);
    } else {
      messageBroker.expect()["catch"](function () {
        setBlur(0);
        window.history.replaceState({
          screen: 'index'
        }, '', '#/');
      });
      if (!isNaN(+board)) {
        if (!isNaN(+topic)) {
          if (post) interactivePosts.toPin = post;
          runCommand("TOPIC -n ".concat(topic).concat(!isNaN(+topicPage) ? " -p ".concat(topicPage) : ''), {
            skipHistory: true
          });
        } else {
          runCommand("BOARD -n ".concat(board).concat(!isNaN(+boardPage) ? " -p ".concat(boardPage) : ''), {
            skipHistory: true
          });
        }
      } else if (board == 'boards') {
        runCommand("BOARDS", {
          skipHistory: true
        });
      } else if (board == 'rvt') {
        runCommand("RVT", {
          skipHistory: true
        });
      } else {
        console.error('Unhandled hash:', hash);
      }
    }
  }
  window.addEventListener('hashchange', function (ev) {
    var _URL;
    handleHash((_URL = new URL(ev.newURL)) === null || _URL === void 0 ? void 0 : _URL.hash);
  });
  var virtualHistory = {};
  var historySkip = 0; // runCommand() increments this in cases when a command is initiated by a hashchange or concatenated command;
  function pushHistoryState(state, url) {
    // this prevents pushing a state when unnecessary, preserving navigation.
    virtualHistory = {
      state: state,
      url: url
    };
    if (historySkip > 0) {
      historySkip--;
    } else {
      window.history.pushState(state, '', url);
    }
  }

  /*-------------------------- App state handlers ----------------------------*/
  function handleIndex() {
    setLogo();
    var c = document.querySelector('#content'),
      isLoggedIn = [].find.call(c.childNodes, function (node) {
        return node.nodeName == "#text" && node.textContent.indexOf('You are logged in') == 0;
      }),
      lastBr = c.querySelector('.hwt-logo');
    lastBr.insertAdjacentHTML('afterend', "<br>\n    <div class=\"hwt-menu ".concat(!isLoggedIn ? " hwt-guest" : '', "\">\n      <button class=\"hwt-btn hwt-cmdlink hwt-members-only\" data-command=\"BOARDS\">boards</button>\n      <button class=\"hwt-btn hwt-action hwt-guests-only\" data-action=\"login\">login</button>\n      <button class=\"hwt-btn hwt-action hwt-guests-only\" data-action=\"register\" >register</button>\n      <button class=\"hwt-btn hwt-cmdlink\" data-command=\"HELP\" data-noload=\"true\">help</button>\n      <button class=\"hwt-btn hwt-cmdlink hwt-members-only\" data-command=\"LOGOUT\" data-noload=\"true\">logout</button>\n      <button class=\"hwt-btn hwt-cmdlink hwt-members-only\" data-command=\"RVT\" title=\"Recent viewed topics\">recent</button>\n      <button class=\"hwt-btn hwt-cmdlink hwt-members-only\" data-command=\"INVITES\" data-noload=\"true\">invites</button>\n      <button class=\"hwt-btn hwt-cmdlink\" data-command=\"DONATE\" data-noload=\"true\">donate</button>\n      <button class=\"hwt-btn hwt-action\" data-action=\"hwtinfo\" title=\"About this UserScript\">hwt</button>\n      <button class=\"hwt-btn hwt-cmdlink\" data-command=\"LISTFONTS\" title=\"Select font\" data-noload=\"true\">Fonts</button>\n    </div>"));
  }
  function handleBoardList(content) {
    pushHistoryState({
      screen: 'board-list'
    }, '#/boards');
    content.querySelectorAll('.pendant').forEach(function (p) {
      var _b$textContent$match;
      var b = p.previousSibling;
      if (b.nodeName != '#text') return;
      var n = (_b$textContent$match = b.textContent.match(/^\[([0-9]+)\]/)) === null || _b$textContent$match === void 0 ? void 0 : _b$textContent$match[1];
      if (n) {
        makeClickable(b, "BOARD -n ".concat(n));
      }
    });
    getHeadLine(content)[0].previousElementSibling.insertAdjacentHTML('afterend', "\n    <button class=\"hwt-action hwt-btn\" data-action=\"home\" title=\"Home\">\u2302</button> ");
  }
  function handleRVT(content) {
    var _pagination = pagination(content),
      _pagination2 = _slicedToArray(_pagination, 2),
      page = _pagination2[0],
      lastPage = _pagination2[1];
    pushHistoryState({
      screen: 'rvt',
      page: page,
      lastPage: lastPage
    }, '#/rvt');
    content.querySelectorAll('.postsnumber').forEach(function (p) {
      var _p$textContent$match;
      var n = (_p$textContent$match = p.textContent.match(/\[(.+)\]/)) === null || _p$textContent$match === void 0 ? void 0 : _p$textContent$match[1];
      if (n) {
        var _p$nextElementSibling;
        (_p$nextElementSibling = p.nextElementSibling) === null || _p$nextElementSibling === void 0 || (_p$nextElementSibling = _p$nextElementSibling.querySelector('.pm')) === null || _p$nextElementSibling === void 0 || _p$nextElementSibling.insertAdjacentHTML('beforebegin', "<button class=\"hwt-btn hwt-cmdlink\" data-command=\"TOPIC -n ".concat(n, " && LAST\" title=\"Last page\">&gt;&gt;</button>"));
        makeClickable(p, "TOPIC -n ".concat(n), "First page");
      }
    });
    getHeadLine(content)[0].previousElementSibling.insertAdjacentHTML('afterend', "\n    <button class=\"hwt-action hwt-btn\" data-action=\"home\" title=\"Home\">\u2302</button> ");
  }
  function handleBoardPage(content, boardID) {
    var _pagination3 = pagination(content),
      _pagination4 = _slicedToArray(_pagination3, 2),
      page = _pagination4[0],
      lastPage = _pagination4[1];
    pushHistoryState({
      screen: 'board-page',
      board: boardID,
      page: page,
      lastPage: lastPage
    }, "#/".concat(boardID, ":").concat(page));
    getHeadLine(content)[0].previousElementSibling.insertAdjacentHTML('afterend', "\n    <button class=\"hwt-cmdlink hwt-btn\" data-command=\"BOARDS\" title=\"To board list\">^</button>");
    content.querySelectorAll('.postsnumber').forEach(function (p) {
      var _p$textContent$match2;
      var n = (_p$textContent$match2 = p.textContent.match(/\[(.+)\]/)) === null || _p$textContent$match2 === void 0 ? void 0 : _p$textContent$match2[1];
      if (n) {
        var _p$nextElementSibling2;
        (_p$nextElementSibling2 = p.nextElementSibling) === null || _p$nextElementSibling2 === void 0 || (_p$nextElementSibling2 = _p$nextElementSibling2.querySelector('.pm')) === null || _p$nextElementSibling2 === void 0 || _p$nextElementSibling2.insertAdjacentHTML('beforebegin', "<button class=\"hwt-btn hwt-cmdlink\" data-command=\"TOPIC -n ".concat(n, " && LAST\" title=\"Last page\">&gt;&gt;</button>"));
        makeClickable(p, "TOPIC -n ".concat(n), "First page");
      }
    });
    content.insertAdjacentHTML('beforeend', "<div class=\"show-topic-form\">\n      <button class=\"hwt-action hwt-btn\" data-action=\"newtopicform\">new topic</button>\n    </div>");
  }
  function handleTopic(content, boardID, boardName, topicID) {
    var _pagination5 = pagination(content),
      _pagination6 = _slicedToArray(_pagination5, 2),
      page = _pagination6[0],
      lastPage = _pagination6[1];
    pushHistoryState({
      screen: 'topic',
      board: boardID,
      topic: topicID,
      page: page,
      lastPage: lastPage
    }, "#/".concat(boardID, "/").concat(topicID, ":").concat(page));
    var headLine = getHeadLine(content);
    var html = "<span class=\"hwt-backlink\">\n    <button class=\"hwt-btn hwt-cmdlink\" data-command=\"BOARD -n ".concat(boardID, "\" title=\"To board #").concat(boardID, " (").concat(boardName, ")\">^ [").concat(boardID, "] ").concat(boardName, "</button>\n    [").concat(topicID, "]\n  </span>");
    headLine[0].replaceWith(createElementFromHTML(html));
    postingForm.create();
    interactivePosts.init(content.querySelectorAll('.post'));
  }

  /*---------------------------------- CSS -----------------------------------*/
  var injector = {
    inject: function inject(alias, css) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "beforeend";
      var id = "injector:".concat(alias);
      var existing = document.getElementById(id);
      if (existing) {
        existing.innerHTML = css;
        return;
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      head.insertAdjacentHTML(position, "<style type=\"text/css\" id=\"".concat(id, "\">").concat(css, "</style>"));
    },
    remove: function remove(alias) {
      var id = "injector:".concat(alias);
      var style = document.getElementById(id);
      if (style) {
        var head = document.head || document.getElementsByTagName('head')[0];
        if (head) head.removeChild(document.getElementById(id));
      }
    }
  };

  /*--------------------------- General utilities ----------------------------*/
  EventTarget.prototype.delegateEventListener = function (types, targetSelectors, listener, options) {
    // if (! (types instanceof Array))
    // types = types.split(' ')
    if (!(targetSelectors instanceof Array)) targetSelectors = [targetSelectors];
    this.addMultiEventListener(types, function (ev) {
      targetSelectors.some(function (selector) {
        if (ev.target.matches(selector)) {
          listener.bind(ev.target)(ev);
          return true;
        }
      });
    }, options);
  };
  EventTarget.prototype.addMultiEventListener = function (types, listener, options) {
    var _this = this;
    if (!(types instanceof Array)) types = types.split(' ');
    types.forEach(function (type) {
      _this.addEventListener(type, function (ev) {
        listener.bind(ev.target)(ev);
      }, options);
    });
  };
  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
  }
  function repeatString(_char, times) {
    if (isNaN(times) || times <= 0) return "";
    return new Array(times + 1).join(_char);
  }
  function randomIntBetween() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    // find diff
    var difference = max - min;
    // generate random number 
    var rand = Math.random();
    // multiply with difference 
    rand = Math.floor(rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
  }

  // Returns a promise wrapped in an object that contains resolve() and reject() methods for the promise
  function exposedPromise() {
    var promiseResolve,
      promiseReject,
      promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
    return {
      promise: promise,
      resolve: promiseResolve,
      reject: promiseReject
    };
  }

  /*------------------------- App-specific utilities -------------------------*/
  // Turns a text node into a "link"
  function makeClickable(node, command) {
    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var noload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    node.replaceWith(createElementFromHTML("<button class=\"hwt-cmdlink\" data-command=\"".concat(command, "\" title=\"").concat(title, "\" ").concat(noload ? " data-noload=\"true\"" : '', ">").concat(node.textContent, "</button>")));
  }
  // Auto-inputting commands
  document.body.delegateEventListener(['click', 'input'], '.hwt-cmdlink', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var command, noLoad, skipHistory, last;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          command = this.dataset.command, noLoad = this.dataset.noload == "true", skipHistory = this.dataset.skiphistory == 'true';
          if (command) {
            command = command.split('&&');
            if (command.length > 1) {
              last = command.pop();
              command = [command.join('&&'), last];
            }
            runCommand(command, {
              load: !noLoad,
              skipHistory: skipHistory
            });
          }
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  })));
  var queuedCommand = null;
  function runCommand(_x) {
    return (_runCommand = _runCommand || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(command) {
      var _ref3,
        _ref3$load,
        load,
        _ref3$skipHistory,
        skipHistory,
        cmdLine,
        _ref4,
        _ref5,
        thisCommand,
        nextCommand,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref3 = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {}, _ref3$load = _ref3.load, load = _ref3$load === void 0 ? true : _ref3$load, _ref3$skipHistory = _ref3.skipHistory, skipHistory = _ref3$skipHistory === void 0 ? false : _ref3$skipHistory;
            cmdLine = document.querySelector('#cmd');
            if (cmdLine) {
              _context3.next = 4;
              break;
            }
            return _context3.abrupt("return");
          case 4:
            _context3.next = 6;
            return postingForm.quitEditingContext();
          case 6:
            // If in editing context prevent a command from being leaked into the post body
            _ref4 = command instanceof Array ? command : [command], _ref5 = _slicedToArray(_ref4, 2), thisCommand = _ref5[0], nextCommand = _ref5[1];
            if (nextCommand) {
              queuedCommand = [nextCommand, {
                load: load,
                skipHistory: skipHistory
              }];
              skipHistory = true;
            } else {
              queuedCommand = null;
            }
            if (skipHistory) {
              historySkip++;
            }
            cmdLine.value = thisCommand;
            cmdLine.dispatchEvent(new KeyboardEvent('keydown', {
              keyCode: 13
            })); // Simulatie pressing Enter
            if (load) setBlur(1);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))).apply(this, arguments);
  }
  function makeLoginForm() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LOGIN';
    return function () {
      var _document$querySelect;
      (_document$querySelect = document.querySelector('.hwt-login-form')) === null || _document$querySelect === void 0 || _document$querySelect.remove();
      document.querySelector('.hwt-menu').insertAdjacentHTML('afterend', "<br>\n      <div class=\"hwt-login-form\">\n        <div class=\"hwt-login-login\">\n          <label for=\"hwt-login\">Login:</label>\n          <input type=\"text\" id=\"hwt-login\">\n        </div>\n      </div><br>");
      var login = document.querySelector('#hwt-login');
      login.focus();
      var passwordAdded = false;
      login.addEventListener('keypress', function (ev) {
        if (ev.key == 'Enter' && !passwordAdded) {
          login.insertAdjacentHTML('afterend', "<br>\n          <div class=\"hwt-login-password\">\n            <label for=\"hwt-password\">Password:</label>\n            <input type=\"password\" id=\"hwt-password\">\n          </div>\n        ");
          passwordAdded = true;
          var password = document.querySelector('#hwt-password');
          password.focus();
          password.addEventListener('keypress', function (ev) {
            if (ev.key == 'Enter') {
              runCommand("".concat(action, " -u ").concat(login.value, " -p ").concat(password.value), {
                load: false
              });
            }
          });
        }
      });
    };
  }
  actions.login = makeLoginForm('login');
  actions.register = makeLoginForm('register');
  document.body.delegateEventListener(['click', 'input'], '.hwt-action', /*async*/function () {
    var action = this.dataset.action;
    actions[action](this);
  });
  function pagination() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('.content');
    var html, current, total;
    var found = [].find.call(content.childNodes, function (node) {
      var _node$textContent$mat;
      var m;
      if (node.nodeName == "#text" && (m = (_node$textContent$mat = node.textContent.match(/Page ([0-9]+)\/([0-9]+)/)) === null || _node$textContent$mat === void 0 ? void 0 : _node$textContent$mat.slice(1))) {
        var _m$map = m.map(function (n) {
          return +n;
        });
        var _m$map2 = _slicedToArray(_m$map, 2);
        current = _m$map2[0];
        total = _m$map2[1];
        html = "<span class=\"hwt-pagination\">\n        ".concat(current > 1 ? "<button class=\"hwt-cmdlink hwt-btn\" data-command=\"FIRST\" title=\"First page\">&lt;&lt;</button>\n          <button class=\"hwt-cmdlink hwt-btn\" data-command=\"PREV\" title=\"Previous page\">&lt;</button>" : '', "\n        ").concat(node.textContent, "\n        ").concat(current < total ? "<button class=\"hwt-cmdlink hwt-btn\" data-command=\"NEXT\" title=\"Next page\">&gt;</button>\n          <button class=\"hwt-cmdlink hwt-btn\" data-command=\"LAST\" title=\"Last page\">&gt;&gt;</button>" : '', "\n      </span>");
        node.replaceWith(createElementFromHTML(html));
        return true;
      } else return false;
    });
    if (found) {
      // Copy pagination to bottom
      content.insertAdjacentHTML('beforeend', '<br>' + html);
      return [current, total];
    }
  }
  var messageBroker = {
    handle: function handle(element, type, message) {
      //successful login
      if (type == 'message' && message == 'you are logged in') {
        document.querySelector('.hwt-login-form').remove();
        document.querySelector('.hwt-menu').classList.remove('hwt-guest');
      }
      //successful registration -> immediate login
      if (type == 'message' && message == 'you are now registered') {
        var login = document.querySelector('#hwt-login').value,
          password = document.querySelector('#hwt-password').value;
        runCommand("LOGIN -u ".concat(login, " -p ").concat(password), {
          load: false
        });
      }
      // Logout
      if (type == 'message' && message == 'You have been logged out') {
        document.querySelector('.hwt-menu').classList.add('hwt-guest');
      }
      // Successful deletion
      if (type == 'message' && message == 'Post has been deleted') {
        var _this$expected;
        (_this$expected = this.expected) === null || _this$expected === void 0 || _this$expected.resolve();
      }
      // Unsuccessful deletion / edit
      if (type == 'error') {
        var _this$expected2;
        (_this$expected2 = this.expected) === null || _this$expected2 === void 0 || _this$expected2.reject();
      }
      // Font list
      if (type == 'message' && ~message.indexOf('[0] Default')) {
        linkifyFonts(element);
      }
    },
    // expected: {},
    expect: function expect( /*type*/
    ) {
      var xp = exposedPromise();
      this.expected /*['_'+type]*/ = xp;
      return xp.promise;
    }
  };

  // Keyboard navigation
  document.addEventListener("keydown", function (ev) {
    if (ev.ctrlKey) {
      if (ev.key == 'ArrowLeft' && window.history.state.page > 1) {
        runCommand('PREV');
      }
      if (ev.key == 'ArrowRight' && window.history.state.page < window.history.state.lastPage) {
        runCommand('NEXT');
      }
      if (ev.key == 'ArrowUp') {
        ev.preventDefault();
        if (window.history.state.screen == 'board-page') {
          runCommand('BOARDS');
        }
        if (window.history.state.screen == 'topic') {
          runCommand("BOARD -n ".concat(window.history.state.board));
        }
        if (window.history.state.screen == 'board-list') {
          actions.home();
        }
      }
      if (ev.key == 'Enter' && ~document.activeElement.id.indexOf('hwt-pf')) {
        if (document.querySelector('#hwt-pf-title')) actions.newtopic();else if (postingForm.context) postingForm.submitEdit();else actions.reply();
      }
    } else {
      var sc = document.querySelector('.scrollcontent');
      if (ev.key == 'PageUp') {
        sc.scrollTop = 0;
      }
      if (ev.key == 'PageDown') {
        sc.scrollTop = sc.scrollHeight;
      }
    }
  });
  function setLogo() {
    var verSpace = (15 - HWT_VER.length) / 2,
      verStr = repeatString(' ', Math.ceil(verSpace)) + HWT_VER + repeatString(' ', Math.floor(verSpace)),
      logo = ["        ,---------------.", "    |   |   HouseWife   |", "  --+-- |     Tools     |", "    |   |" + verStr + "|", "        `---------------'"].map(function (line) {
        return line.replace(/ /g, ' ');
      }),
      node = document.querySelector('#content br'),
      replacedNodes = '';
    for (var i = 0; i < 8;) {
      if (node.nodeName == '#text') {
        replacedNodes += node.textContent + (i >= 2 ? (logo === null || logo === void 0 ? void 0 : logo[i - 2]) || '' : '');
        i++;
      } else {
        replacedNodes += node.outerHTML;
      }
      var next = node.nextSibling;
      node.remove();
      node = next;
    }
    document.querySelector('#content').insertAdjacentHTML('afterbegin', "<div class=\"hwt-logo\">".concat(replacedNodes, "</div>"));
  }
  actions.reply = function () {
    var _postingForm$textarea;
    var msg = (_postingForm$textarea = postingForm.textarea) === null || _postingForm$textarea === void 0 ? void 0 : _postingForm$textarea.value;
    if (msg) runCommand(["REPLY -m ".concat(msg), "LAST"]);
  };
  actions.newtopic = function () {
    var _postingForm$title, _postingForm$textarea2;
    var title = (_postingForm$title = postingForm.title) === null || _postingForm$title === void 0 ? void 0 : _postingForm$title.value,
      content = (_postingForm$textarea2 = postingForm.textarea) === null || _postingForm$textarea2 === void 0 ? void 0 : _postingForm$textarea2.value;
    if (title && content) runCommand("NEWTOPIC -t ".concat(title, " -c ").concat(content));
  };
  actions.newtopicform = function () {
    var _document$querySelect2;
    (_document$querySelect2 = document.querySelector('.show-topic-form')) === null || _document$querySelect2 === void 0 || _document$querySelect2.remove();
    postingForm.create(true);
  };
  actions.edit = function () {
    var _postingForm$textarea3;
    var msg = (_postingForm$textarea3 = postingForm.textarea) === null || _postingForm$textarea3 === void 0 ? void 0 : _postingForm$textarea3.value;
    if (msg) runCommand(msg);
  };
  var animationRun;
  function setBlur() {
    var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var wr = document.querySelector('#wrapper');
    if (toggle) {
      wr.classList.add('hwt-blurred');
      startAnimation();
    } else {
      wr.classList.remove('hwt-blurred');
      setTimeout(function () {
        return clearInterval(animationRun);
      }, 210);
    }
  }
  function startAnimation() {
    var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var loader;
    while (!(loader = document.querySelector('.hwt-loading-animation'))) {
      document.querySelector('#wrapper').insertAdjacentHTML('afterbegin', '<div class="hwt-loading-animation"></div>');
    }
    var makeLine = function makeLine() {
      var line = '';
      for (var i = 0; i < size * 2; i++) {
        line += String.fromCharCode(randomIntBetween(0x2800, 0x28ff)); // Braille block
      }

      return line + '<br>';
    };
    var lines = [];
    for (var i = 0; i < size; i++) {
      lines.push(makeLine());
    }
    loader.innerHTML = lines.join('');
    animationRun = setInterval(function () {
      lines.shift();
      lines.push(makeLine());
      loader.innerHTML = lines.join('');
    }, speed);
  }
  actions.hwtinfo = function () {
    var r = function r(str) {
        return "<span class=\"reverse\">&nbsp;".concat(str, "&nbsp;</span>");
      },
      d2 = function d2(str) {
        return "<div style=\"padding:2px\">".concat(str, "</div>");
      };
    var msg = "<div class=\"message\"><div style=\"padding-left:10px\">\n    <br>\n    ".concat(r("HouseWife Tools v.".concat(HWT_VER)), "\n    <br><br>\n    Keyboard Shortcuts:<br><br>\n    ").concat(d2("".concat(r("Ctrl + \u2192"), ", ").concat(r("Ctrl + \u2190"), " Navigate between pages")), "\n    ").concat(d2("".concat(r("Ctrl + \u2191"), " Move up one layer")), "\n    ").concat(d2("".concat(r("PageUp"), ", ").concat(r("PageDown"), " Scroll up and down the page")), "\n    ").concat(d2("".concat(r("Ctrl + Enter"), " Submit a post")), "\n    <br><br>\n    ").concat(d2("<a href=\"https://github.com/Juribiyan/housewife-tools\" target=\"_blank\">Project GitHub</a>"), "\n  </div></div>");
    document.querySelector('#content').insertAdjacentHTML('beforeend', msg);
  };

  // --------------------- Post interaction ---------------------
  var interactivePosts = {
    processPost: function processPost(post) {
      var _pn$innerText$match,
        _postCode$innerText$m,
        _this3 = this;
      var pn = post.querySelector('.postnumber');
      var id = +(pn === null || pn === void 0 || (_pn$innerText$match = pn.innerText.match(/[0-9]+/)) === null || _pn$innerText$match === void 0 ? void 0 : _pn$innerText$match[0]);
      if (isNaN(id)) return 0;
      var postCode = post.querySelector('.post-code');
      var pc = postCode === null || postCode === void 0 || (_postCode$innerText$m = postCode.innerText.match(/[A-Z]+/)) === null || _postCode$innerText$m === void 0 ? void 0 : _postCode$innerText$m[0];
      if (!pc) return 0;
      pn.insertAdjacentHTML('beforeend', "<span class=\"hwt-post-menu\">\n      <button class=\"hwt-btn hwt-post-edit\">edit</button>\n      <button class=\"hwt-btn hwt-cmdlink hwt-post-delete\" data-command=\"DELETE -p ".concat(id, "\" data-noload=\"true\">delete</button>\n      <button class=\"hwt-btn hwt-action\" data-action=\"anchor\" data-id=\"").concat(id, "\">#</button>\n    </span"));
      pn.querySelector('.hwt-post-delete').addMultiEventListener(['click', 'input'], function () {
        var _this2 = this;
        messageBroker.expect().then(function () {
          var _pn$querySelector;
          post.classList.add('hwt-deleted');
          (_pn$querySelector = pn.querySelector('.hwt-post-menu')) === null || _pn$querySelector === void 0 || _pn$querySelector.remove();
        })["catch"](function () {
          var _pn$querySelector2;
          _this2.remove();
          (_pn$querySelector2 = pn.querySelector('.hwt-post-edit')) === null || _pn$querySelector2 === void 0 || _pn$querySelector2.remove();
        });
      });
      pn.querySelector('.hwt-post-edit').addMultiEventListener(['click', 'input'], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var json;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return softCommand("EDIT -p ".concat(id));
            case 2:
              json = _context4.sent;
              if (json && json.edit == 1) {
                postingForm.enterEditingContext(json.edittext, json.path, id);
              } else {
                this.remove();
                pn.querySelector('.hwt-post-delete').remove();
                if (json.message) {
                  document.querySelector('#content').insertAdjacentHTML('beforeend', json.message);
                }
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      })));
      postCode.addEventListener('mouseenter', function () {
        return _this3.highlight(pc /*, post*/);
      });
      postCode.addEventListener('mouseleave', function () {
        return _this3.highlight(false);
      });
      postCode.addEventListener('click', function () {
        return postingForm.insert("2".concat(pc, ": "));
      });
      var content = post.querySelector('.post-content');
      if (content) {
        [].filter.call(content.childNodes, function (node) {
          var _node$classList, _node$previousSibling;
          return (
            // Find new line nodes
            (node.nodeName == "#text" || node.nodeName != 'BR' && !((_node$classList = node.classList) !== null && _node$classList !== void 0 && _node$classList.contains('postnumber')) && !node.querySelector('.pendant')) && ['BR', 'DIV'].includes((_node$previousSibling = node.previousSibling) === null || _node$previousSibling === void 0 ? void 0 : _node$previousSibling.nodeName)
          );
        }).forEach(function (subNode) {
          // add interactivity to posts references in text
          var refID = false,
            ref,
            replacedContent = subNode.textContent.replace(/^2?([A-Z]+)[,\:]?/, function (m, g1) {
              ref = m;
              refID = g1;
              return '';
            });
          if (refID) {
            subNode.textContent = replacedContent;
            var refLink = createElementFromHTML("<span class=\"hwt-reflink\">".concat(ref, "</span>"));
            refLink.addEventListener('mouseenter', function () {
              return _this3.highlight(refID /*, post*/);
            });
            refLink.addEventListener('mouseleave', function () {
              return _this3.highlight(false);
            });
            if (typeof subNode.innerHTML != 'undefined') subNode.prepend(refLink);else content.insertBefore(refLink, subNode);
          }
        });
        // TODO: multiple references like in https://314n.org/#/1/23:7
      }

      return {
        el: post,
        id: id,
        author: pc
      };
    },
    init: function init(posts, postTo) {
      this.posts = [].map.call(posts, this.processPost.bind(this)).filter(function (post) {
        return post !== 0;
      });
      if (this.toPin) {
        this.pin(this.toPin, true);
        this.toPin = false;
      }
    },
    posts: [],
    highlight: function highlight(pc) {
      this.posts.forEach(function (post) {
        if (pc === false) {
          post.el.classList.remove('hwt-post-highlight');
        } else if (post.author == pc) {
          post.el.classList.add('hwt-post-highlight');
        }
      });
    },
    pin: function pin(id) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var found;
      this.posts.forEach(function (post) {
        if (post.id == id) {
          post.el.classList.add('hwt-post-pinned');
          found = true;
          if (initial) {
            setTimeout(function () {
              return post.el.scrollIntoView();
            }, 500);
          }
        } else {
          post.el.classList.remove('hwt-post-pinned');
        }
      });
      return found;
    },
    toPin: false
  };
  actions.anchor = function (btn) {
    var _virtualHistory, _virtualHistory2;
    var id = btn.dataset.id;
    var found = interactivePosts.pin(id);
    if (!found || !((_virtualHistory = virtualHistory) !== null && _virtualHistory !== void 0 && _virtualHistory.state && (_virtualHistory2 = virtualHistory) !== null && _virtualHistory2 !== void 0 && _virtualHistory2.url)) return;
    virtualHistory.state.post = id;
    window.history.replaceState(virtualHistory.state, '', virtualHistory.url + '#' + id);
  };
  var postingForm = {
    get form() {
      return this._form || this.update() && this._form;
    },
    get wrapper() {
      return this._wrapper || this.update() && this._wrapper;
    },
    get textarea() {
      return this._textarea || this.update() && this._textarea;
    },
    get title() {
      return this._title || this.update() && this._title;
    },
    update: function update() {
      var _this$_form, _this$_wrapper, _this$_wrapper2;
      this._form = document.querySelector('#hwt-posting-form');
      this._wrapper = (_this$_form = this._form) === null || _this$_form === void 0 ? void 0 : _this$_form.querySelector('.hwt-textarea-wrapper');
      this._textarea = (_this$_wrapper = this._wrapper) === null || _this$_wrapper === void 0 ? void 0 : _this$_wrapper.querySelector('textarea');
      this._title = (_this$_wrapper2 = this._wrapper) === null || _this$_wrapper2 === void 0 ? void 0 : _this$_wrapper2.querySelector('input');
    },
    create: function create() {
      var _this4 = this;
      var withTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var html = "\n      <div id=\"hwt-posting-form\" style=\"visibility:hidden\">\n        <div class=\"hwt-textarea-wrapper".concat(withTitle ? ' hwt-tc-with-title' : '', "\">\n          <div class=\"hwt-textarea-border\"></div>\n          ").concat(withTitle ? "<input id=\"hwt-pf-title\" type=\"text\" class=\"hwt-txt-input hwt-title-input\" placeholder=\"Title...\">" : '', "\n          <textarea id=\"hwt-pf-textarea\" style=\"resize:false\" rows=\"3\" class=\"hwt-txt-input hwt-msg-area\"").concat(withTitle ? " placeholder=\"Message...\"" : '', "></textarea>\n        </div>\n        <div class=\"hwt-reply-button-wrapper\">\n          ").concat(withTitle ? "<button class=\"hwt-btn hwt-action\" data-action=\"newtopic\" title=\"Create new topic\">post</button>" : "<button class=\"hwt-btn hwt-action hwt-reply-btn\" data-action=\"reply\">reply</button>", "\n        </div>\n      </div>");
      document.querySelector('.content').insertAdjacentHTML('afterend', html);
      this.update();
      var debounceTimeout, ro;
      var debouncedResizeHandler = function debouncedResizeHandler(ev) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function () {
          if (!_this4.form.parentNode) {
            ro.disconnect();
            return;
          }
          _this4.updateBorders(withTitle);
        }, 10);
      };
      ro = new ResizeObserver(debouncedResizeHandler);
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          debouncedResizeHandler();
          ro.observe(_this4.textarea);
          _this4.form.style.visibility = 'visible';
        });
      }, 200);
      this.textarea.addEventListener("input", function (ev) {
        _this4.textarea.rows = Math.max(_this4.textarea.value.split(/\n/).length, 3);
      });
    },
    updateBorders: function updateBorders(withTitle) {
      var border = this.wrapper.querySelector('.hwt-textarea-border');
      // Determine the character dimensions
      border.textContent = repeatString("-", 10); // for better subpixel precision in Chrome
      var charWidth = border.offsetWidth / 10,
        charHeight = border.offsetHeight;
      injector.inject('hwt-postingform-margins', "\n      .hwt-textarea-wrapper .hwt-txt-input {\n        border-width: ".concat(charHeight, "px ").concat(charWidth * 2, "px\n      }\n      ").concat(withTitle ? ".hwt-msg-area {\n        border-top-width: 0!important;\n      }" : ''));
      var w = Math.floor(this.wrapper.offsetWidth / charWidth),
        h = Math.round(this.wrapper.offsetHeight / charHeight);
      var head = "," + repeatString("–", w - 2) + ".<br>",
        line = "|" + repeatString("&nbsp;", w - 2) + "|<br>",
        tail = "`" + repeatString("–", w - 2) + "'";
      if (!withTitle) {
        border.innerHTML = head + repeatString(line, h - 2) + tail;
      } else {
        var divider = "}" + repeatString("-", w - 2) + "{<br>";
        border.innerHTML = head + line + divider + repeatString(line, h - 4) + tail;
      }
    },
    insert: function insert(txt) {
      this.textarea.value = txt;
    },
    enterEditingContext: function enterEditingContext(txt, path, postID) {
      var $path = document.querySelector('#path');
      this.context = {
        path: $path.innerHTML,
        value: this.textarea.value,
        edittext: txt,
        postID: postID
      };
      this.textarea.value = txt;
      $path.innerHTML = "".concat(path, "&nbsp;&gt;&nbsp;");
      var rb = this.form.querySelector('.hwt-reply-btn');
      rb.style.display = 'none';
      rb.insertAdjacentHTML('afterend', "<div class=\"hwt-edit-btns\">\n      <button class=\"hwt-btn hwt-action\" data-action=\"submitedit\">edit</button>\n      <button class=\"hwt-btn hwt-action\" data-action=\"unedit\">cancel</button>\n    </div>");
      this.isEditing = true;
    },
    // return to normal context by sending an original message
    quitEditingContext: function quitEditingContext() {
      return (_quitEditingContext = _quitEditingContext || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var reflectOnly,
          $path,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              reflectOnly = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : false;
              if (this.context) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return", false);
            case 3:
              $path = document.querySelector('#path');
              $path.innerHTML = this.context.path;
              this.textarea.value = this.context.value;
              this.form.querySelector('.hwt-reply-btn').style.display = '';
              this.form.querySelector('.hwt-edit-btns').remove();
              if (reflectOnly) {
                _context5.next = 11;
                break;
              }
              _context5.next = 11;
              return softCommand(this.context.edittext, false);
            case 11:
              delete this.context;
              return _context5.abrupt("return", true);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }))).apply(this, arguments);
    },
    submitEdit: function submitEdit() {
      return (_submitEdit = _submitEdit || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var res, _this$context, _yield$softCommand, id, htm, dom, newPost, oldPost;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return softCommand(postingForm.textarea.value, false);
            case 2:
              res = _context6.sent;
              if (!res.message) {
                _context6.next = 32;
                break;
              }
              document.querySelector('#content').insertAdjacentHTML('beforeend', res.message);
              if (!~res.message.indexOf("Post has been edited")) {
                _context6.next = 32;
                break;
              }
              id = (_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.postID;
              if (id) {
                _context6.next = 9;
                break;
              }
              return _context6.abrupt("return");
            case 9:
              _context6.next = 11;
              return softCommand("REFRESH", true, true);
            case 11:
              _context6.t1 = _yield$softCommand = _context6.sent;
              _context6.t0 = _context6.t1 === null;
              if (_context6.t0) {
                _context6.next = 15;
                break;
              }
              _context6.t0 = _yield$softCommand === void 0;
            case 15:
              if (!_context6.t0) {
                _context6.next = 19;
                break;
              }
              _context6.t2 = void 0;
              _context6.next = 20;
              break;
            case 19:
              _context6.t2 = _yield$softCommand.message;
            case 20:
              htm = _context6.t2;
              if (htm) {
                _context6.next = 23;
                break;
              }
              return _context6.abrupt("return");
            case 23:
              dom = document.createRange().createContextualFragment(htm);
              newPost = [].find.call(dom.querySelectorAll('.post'), function (post) {
                var _post$querySelector;
                return ((_post$querySelector = post.querySelector('.postnumber')) === null || _post$querySelector === void 0 || (_post$querySelector = _post$querySelector.innerText) === null || _post$querySelector === void 0 || (_post$querySelector = _post$querySelector.match(/[0-9]+/)) === null || _post$querySelector === void 0 ? void 0 : _post$querySelector[0]) == id;
              });
              if (newPost) {
                _context6.next = 27;
                break;
              }
              return _context6.abrupt("return");
            case 27:
              oldPost = interactivePosts.posts.find(function (post) {
                return post.id == id;
              });
              if (oldPost) {
                _context6.next = 30;
                break;
              }
              return _context6.abrupt("return");
            case 30:
              oldPost.el.innerHTML = newPost.innerHTML;
              oldPost = interactivePosts.processPost.bind(interactivePosts)(oldPost.el);
            case 32:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }))).apply(this, arguments);
    }
  };
  actions.submitedit = postingForm.submitEdit.bind(postingForm);
  function softCommand(_x2) {
    return (_softCommand = _softCommand || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(command) {
      var quitEditingContext,
        reflectOnly,
        fd,
        f,
        res,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            quitEditingContext = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : true;
            reflectOnly = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : false;
            if (!quitEditingContext) {
              _context7.next = 5;
              break;
            }
            _context7.next = 5;
            return postingForm.quitEditingContext(reflectOnly);
          case 5:
            fd = new FormData();
            fd.append('input', command);
            _context7.next = 9;
            return fetch("/console.php", {
              method: 'POST',
              body: fd,
              credentials: 'include'
            });
          case 9:
            f = _context7.sent;
            if (f.ok) {
              _context7.next = 12;
              break;
            }
            return _context7.abrupt("return");
          case 12:
            _context7.next = 14;
            return f.json();
          case 14:
            res = _context7.sent;
            return _context7.abrupt("return", res);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))).apply(this, arguments);
  }
  function linkifyFonts(msg) {
    var _msg$childNodes;
    msg === null || msg === void 0 || (_msg$childNodes = msg.childNodes) === null || _msg$childNodes === void 0 || _msg$childNodes.forEach(function (node) {
      if (node.nodeName == '#text') {
        var _node$textContent$mat2;
        var n = (_node$textContent$mat2 = node.textContent.match(/\[([0-9]+)\]/)) === null || _node$textContent$mat2 === void 0 ? void 0 : _node$textContent$mat2[1];
        if (n) {
          makeClickable(node, "SETFONT -f ".concat(n), 'Set font', true);
        }
      }
    });
  }

  // ---------------- Starting ----------------
  reObserve();
  handleIndex();
  if (document.location.hash) {
    handleHash(document.location.hash);
  }
}