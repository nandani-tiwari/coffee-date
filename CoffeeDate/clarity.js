/* clarity-js v0.7.59: https://github.com/microsoft/clarity (License: MIT) */
!function() {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get queue() {
          return br
      },
      get start() {
          return yr
      },
      get stop() {
          return wr
      },
      get track() {
          return hr
      }
  })
    , e = Object.freeze({
      __proto__: null,
      get clone() {
          return Xr
      },
      get compute() {
          return Yr
      },
      get data() {
          return jr
      },
      get keys() {
          return Ar
      },
      get reset() {
          return qr
      },
      get start() {
          return Hr
      },
      get stop() {
          return Fr
      },
      get trigger() {
          return Wr
      },
      get update() {
          return Ur
      }
  })
    , n = Object.freeze({
      __proto__: null,
      get check() {
          return Zr
      },
      get compute() {
          return $r
      },
      get data() {
          return Dr
      },
      get start() {
          return Kr
      },
      get stop() {
          return ti
      },
      get trigger() {
          return Qr
      }
  })
    , a = Object.freeze({
      __proto__: null,
      get compute() {
          return ui
      },
      get data() {
          return ei
      },
      get log() {
          return oi
      },
      get reset() {
          return ci
      },
      get start() {
          return ri
      },
      get stop() {
          return ii
      },
      get updates() {
          return ni
      }
  })
    , r = Object.freeze({
      __proto__: null,
      get callback() {
          return wi
      },
      get callbacks() {
          return di
      },
      get clear() {
          return bi
      },
      get consent() {
          return yi
      },
      get data() {
          return li
      },
      get electron() {
          return fi
      },
      get id() {
          return mi
      },
      get metadata() {
          return gi
      },
      get save() {
          return ki
      },
      get shortid() {
          return Oi
      },
      get start() {
          return pi
      },
      get stop() {
          return vi
      }
  })
    , i = Object.freeze({
      __proto__: null,
      get data() {
          return Ci
      },
      get envelope() {
          return Ai
      },
      get start() {
          return Di
      },
      get stop() {
          return ji
      }
  })
    , o = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      drop: [],
      mask: [],
      unmask: [],
      regions: [],
      cookies: [],
      fraud: !0,
      checksum: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
      dob: null,
      delayDom: !1,
      throttleDom: !0,
      conversions: !1,
      longTask: 30,
      includeSubdomains: !0
  };
  function u(t) {
      return window.Zone && "__symbol__"in window.Zone ? window.Zone.__symbol__(t) : t
  }
  var c = 0;
  function s(t) {
      void 0 === t && (t = null);
      var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now()
        , n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
      return Math.max(Math.round(e + n - c), 0)
  }
  var l = "0.7.58";
  function d(t, e) {
      void 0 === e && (e = null);
      for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
          if (a = (a << 5) + a ^ t.charCodeAt(i),
          i + 1 < t.length)
              r = (r << 5) + r ^ t.charCodeAt(i + 1)
      }
      return n = Math.abs(a + 11579 * r),
      (e ? n % Math.pow(2, e) : n).toString(36)
  }
  var f = /\S/gi
    , h = !0
    , p = null
    , v = null
    , g = null;
  function m(t, e, n, a, r) {
      if (void 0 === a && (a = !1),
      t) {
          if ("input" == e && ("checkbox" === r || "radio" === r))
              return t;
          switch (n) {
          case 0:
              return t;
          case 1:
              switch (e) {
              case "*T":
              case "value":
              case "placeholder":
              case "click":
                  return function(t) {
                      var e = -1
                        , n = 0
                        , a = !1
                        , r = !1
                        , i = !1
                        , o = null;
                      E();
                      for (var u = 0; u < t.length; u++) {
                          var c = t.charCodeAt(u);
                          if (a = a || c >= 48 && c <= 57,
                          r = r || 64 === c,
                          i = 9 === c || 10 === c || 13 === c || 32 === c,
                          0 === u || u === t.length - 1 || i) {
                              if (a || r) {
                                  null === o && (o = t.split(""));
                                  var s = t.substring(e + 1, i ? u : u + 1);
                                  s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s),
                                  o.splice(e + 1 - n, s.length, s),
                                  n += s.length - 1
                              }
                              i && (a = !1,
                              r = !1,
                              e = u)
                          }
                      }
                      return o ? o.join("") : t
                  }(t);
              case "input":
              case "change":
                  return S(t)
              }
              return t;
          case 2:
          case 3:
              switch (e) {
              case "*T":
              case "data-":
                  return a ? b(t) : w(t);
              case "src":
              case "srcset":
              case "title":
              case "alt":
                  return 3 === n ? "" : t;
              case "value":
              case "click":
              case "input":
              case "change":
                  return S(t);
              case "placeholder":
                  return w(t)
              }
              break;
          case 4:
              switch (e) {
              case "*T":
              case "data-":
                  return a ? b(t) : w(t);
              case "value":
              case "input":
              case "click":
              case "change":
                  return Array(5).join("•");
              case "checksum":
                  return ""
              }
              break;
          case 5:
              switch (e) {
              case "*T":
              case "data-":
                  return k(t, "▪", "▫");
              case "value":
              case "input":
              case "click":
              case "change":
                  return Array(5).join("•");
              case "checksum":
              case "src":
              case "srcset":
              case "alt":
              case "title":
                  return ""
              }
          }
      }
      return t
  }
  function y(t, e) {
      if (void 0 === e && (e = !1),
      e)
          return "".concat("https://").concat("Electron");
      var n = o.drop;
      if (n && n.length > 0 && t && t.indexOf("?") > 0) {
          var a = t.split("?")
            , r = a[0]
            , i = a[1];
          return r + "?" + i.split("&").map((function(t) {
              return n.some((function(e) {
                  return 0 === t.indexOf("".concat(e, "="))
              }
              )) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
          }
          )).join("&")
      }
      return t
  }
  function b(t) {
      var e = t.trim();
      if (e.length > 0) {
          var n = e[0]
            , a = t.indexOf(n)
            , r = t.substr(0, a)
            , i = t.substr(a + e.length);
          return "".concat(r).concat(e.length.toString(36)).concat(i)
      }
      return t
  }
  function w(t) {
      return t.replace(f, "•")
  }
  function k(t, e, n) {
      return E(),
      t ? t.replace(v, e).replace(p, n) : t
  }
  function S(t) {
      for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
          n += a > 0 && a % 5 == 0 ? " " : "•";
      return n
  }
  function E() {
      if (h && null === p)
          try {
              p = new RegExp("\\p{N}","gu"),
              v = new RegExp("\\p{L}","gu"),
              g = new RegExp("\\p{Sc}","gu")
          } catch (t) {
              h = !1
          }
  }
  var O = null
    , T = null
    , N = !1;
  function M() {
      N && (O = {
          time: s(),
          event: 4,
          data: {
              visible: T.visible,
              docWidth: T.docWidth,
              docHeight: T.docHeight,
              screenWidth: T.screenWidth,
              screenHeight: T.screenHeight,
              scrollX: T.scrollX,
              scrollY: T.scrollY,
              pointerX: T.pointerX,
              pointerY: T.pointerY,
              activityTime: T.activityTime,
              scrollTime: T.scrollTime
          }
      }),
      T = T || {
          visible: 1,
          docWidth: 0,
          docHeight: 0,
          screenWidth: 0,
          screenHeight: 0,
          scrollX: 0,
          scrollY: 0,
          pointerX: 0,
          pointerY: 0,
          activityTime: 0,
          scrollTime: 0
      }
  }
  function x(t, e, n, a) {
      switch (t) {
      case 8:
          T.docWidth = e,
          T.docHeight = n;
          break;
      case 11:
          T.screenWidth = e,
          T.screenHeight = n;
          break;
      case 10:
          T.scrollX = e,
          T.scrollY = n,
          T.scrollTime = a;
          break;
      default:
          T.pointerX = e,
          T.pointerY = n
      }
      N = !0
  }
  function _(t) {
      T.activityTime = t
  }
  function I(t, e) {
      T.visible = "visible" === e ? 1 : 0,
      T.visible || _(t),
      N = !0
  }
  function C() {
      N && Gr(4)
  }
  var D = Object.freeze({
      __proto__: null,
      activity: _,
      compute: C,
      reset: M,
      start: function() {
          N = !1,
          M()
      },
      get state() {
          return O
      },
      stop: function() {
          M()
      },
      track: x,
      visibility: I
  })
    , j = null;
  function A(t, e) {
      Qi() && t && "string" == typeof t && t.length < 255 && (j = e && "string" == typeof e && e.length < 255 ? {
          key: t,
          value: e
      } : {
          value: t
      },
      Gr(24))
  }
  var R, L = null, P = null;
  function z(t) {
      t in L || (L[t] = 0),
      t in P || (P[t] = 0),
      L[t]++,
      P[t]++
  }
  function H(t, e) {
      null !== e && (t in L || (L[t] = 0),
      t in P || (P[t] = 0),
      L[t] += e,
      P[t] += e)
  }
  function W(t, e) {
      null !== e && !1 === isNaN(e) && (t in L || (L[t] = 0),
      (e > L[t] || 0 === L[t]) && (P[t] = e,
      L[t] = e))
  }
  function X(t, e, n) {
      return window.setTimeout(Pi(t), e, n)
  }
  function Y(t) {
      return window.clearTimeout(t)
  }
  var q = 0
    , U = 0
    , F = null;
  function V() {
      F && Y(F),
      F = X(B, U),
      q = s()
  }
  function B() {
      var t = s();
      R = {
          gap: t - q
      },
      Gr(25),
      R.gap < 3e5 ? F = X(B, U) : Gi && (A("clarity", "suspend"),
      Mo(),
      ["mousemove", "touchstart"].forEach((function(t) {
          return Hi(document, t, $i)
      }
      )),
      ["resize", "scroll", "pageshow"].forEach((function(t) {
          return Hi(window, t, $i)
      }
      )))
  }
  var J = Object.freeze({
      __proto__: null,
      get data() {
          return R
      },
      reset: V,
      start: function() {
          U = 6e4,
          q = 0
      },
      stop: function() {
          Y(F),
          q = 0,
          U = 0
      }
  })
    , G = null;
  function K(t, e) {
      if (t in G) {
          var n = G[t]
            , a = n[n.length - 1];
          e - a[0] > 100 ? G[t].push([e, 0]) : a[1] = e - a[0]
      } else
          G[t] = [[e, 0]]
  }
  function Z() {
      Gr(36)
  }
  function Q() {
      G = {}
  }
  var $ = Object.freeze({
      __proto__: null,
      compute: Z,
      get data() {
          return G
      },
      reset: Q,
      start: function() {
          G = {}
      },
      stop: function() {
          G = {}
      },
      track: K
  })
    , tt = null;
  function et(t) {
      Qi() && o.lean && (o.lean = !1,
      tt = {
          key: t
      },
      wi(),
      ki(),
      o.upgrade && o.upgrade(t),
      Gr(3))
  }
  var nt = Object.freeze({
      __proto__: null,
      get data() {
          return tt
      },
      start: function() {
          !o.lean && o.upgrade && o.upgrade("Config"),
          tt = null
      },
      stop: function() {
          tt = null
      },
      upgrade: et
  });
  function at(t, e, n, a) {
      return new (n || (n = Promise))((function(r, i) {
          function o(t) {
              try {
                  c(a.next(t))
              } catch (t) {
                  i(t)
              }
          }
          function u(t) {
              try {
                  c(a.throw(t))
              } catch (t) {
                  i(t)
              }
          }
          function c(t) {
              var e;
              t.done ? r(t.value) : (e = t.value,
              e instanceof n ? e : new n((function(t) {
                  t(e)
              }
              ))).then(o, u)
          }
          c((a = a.apply(t, e || [])).next())
      }
      ))
  }
  function rt(t, e) {
      var n, a, r, i, o = {
          label: 0,
          sent: function() {
              if (1 & r[0])
                  throw r[1];
              return r[1]
          },
          trys: [],
          ops: []
      };
      return i = {
          next: u(0),
          throw: u(1),
          return: u(2)
      },
      "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
      }
      ),
      i;
      function u(u) {
          return function(c) {
              return function(u) {
                  if (n)
                      throw new TypeError("Generator is already executing.");
                  for (; i && (i = 0,
                  u[0] && (o = 0)),
                  o; )
                      try {
                          if (n = 1,
                          a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a),
                          0) : a.next) && !(r = r.call(a, u[1])).done)
                              return r;
                          switch (a = 0,
                          r && (u = [2 & u[0], r.value]),
                          u[0]) {
                          case 0:
                          case 1:
                              r = u;
                              break;
                          case 4:
                              return o.label++,
                              {
                                  value: u[1],
                                  done: !1
                              };
                          case 5:
                              o.label++,
                              a = u[1],
                              u = [0];
                              continue;
                          case 7:
                              u = o.ops.pop(),
                              o.trys.pop();
                              continue;
                          default:
                              if (!(r = o.trys,
                              (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                  o = 0;
                                  continue
                              }
                              if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                  o.label = u[1];
                                  break
                              }
                              if (6 === u[0] && o.label < r[1]) {
                                  o.label = r[1],
                                  r = u;
                                  break
                              }
                              if (r && o.label < r[2]) {
                                  o.label = r[2],
                                  o.ops.push(u);
                                  break
                              }
                              r[2] && o.ops.pop(),
                              o.trys.pop();
                              continue
                          }
                          u = e.call(t, o)
                      } catch (t) {
                          u = [6, t],
                          a = 0
                      } finally {
                          n = r = 0
                      }
                  if (5 & u[0])
                      throw u[1];
                  return {
                      value: u[0] ? u[1] : void 0,
                      done: !0
                  }
              }([u, c])
          }
      }
  }
  var it = null;
  function ot(t, e) {
      ct(t, "string" == typeof e ? [e] : e)
  }
  function ut(t, e, n, a) {
      return void 0 === e && (e = null),
      void 0 === n && (n = null),
      void 0 === a && (a = null),
      at(this, void 0, void 0, (function() {
          var r, i;
          return rt(this, (function(o) {
              switch (o.label) {
              case 0:
                  return i = {},
                  [4, dt(t)];
              case 1:
                  return i.userId = o.sent(),
                  i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")),
                  ct("userId", [(r = i).userId]),
                  ct("userHint", [r.userHint]),
                  ct("userType", [ft(t)]),
                  e && (ct("sessionId", [e]),
                  r.sessionId = e),
                  n && (ct("pageId", [n]),
                  r.pageId = n),
                  [2, r]
              }
              var u
          }
          ))
      }
      ))
  }
  function ct(t, e) {
      if (Qi() && t && e && "string" == typeof t && t.length < 255) {
          for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++)
              "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
          it[t] = n
      }
  }
  function st() {
      Gr(34)
  }
  function lt() {
      it = {}
  }
  function dt(t) {
      return at(this, void 0, void 0, (function() {
          var e;
          return rt(this, (function(n) {
              switch (n.label) {
              case 0:
                  return n.trys.push([0, 4, , 5]),
                  crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
              case 1:
                  return e = n.sent(),
                  [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                      return ("00" + t.toString(16)).slice(-2)
                  }
                  )).join("")];
              case 2:
                  return [2, ""];
              case 3:
                  return [3, 5];
              case 4:
                  return n.sent(),
                  [2, ""];
              case 5:
                  return [2]
              }
          }
          ))
      }
      ))
  }
  function ft(t) {
      return t && t.indexOf("@") > 0 ? "email" : "string"
  }
  var ht = "CompressionStream"in window;
  function pt(t) {
      return at(this, void 0, void 0, (function() {
          var e, n;
          return rt(this, (function(a) {
              switch (a.label) {
              case 0:
                  return a.trys.push([0, 3, , 4]),
                  ht ? (e = new ReadableStream({
                      start: function(e) {
                          return at(this, void 0, void 0, (function() {
                              return rt(this, (function(n) {
                                  return e.enqueue(t),
                                  e.close(),
                                  [2]
                              }
                              ))
                          }
                          ))
                      }
                  }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")),
                  n = Uint8Array.bind,
                  [4, vt(e)]) : [3, 2];
              case 1:
                  return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))];
              case 2:
                  return [3, 4];
              case 3:
                  return a.sent(),
                  [3, 4];
              case 4:
                  return [2, null]
              }
          }
          ))
      }
      ))
  }
  function vt(t) {
      return at(this, void 0, void 0, (function() {
          var e, n, a, r, i;
          return rt(this, (function(o) {
              switch (o.label) {
              case 0:
                  e = t.getReader(),
                  n = [],
                  a = !1,
                  r = [],
                  o.label = 1;
              case 1:
                  return a ? [3, 3] : [4, e.read()];
              case 2:
                  return i = o.sent(),
                  a = i.done,
                  r = i.value,
                  a ? [2, n] : (n.push.apply(n, r),
                  [3, 1]);
              case 3:
                  return [2, n]
              }
          }
          ))
      }
      ))
  }
  var gt = null;
  function mt(t) {
      try {
          if (!gt)
              return;
          var e = function(t) {
              try {
                  return JSON.parse(t)
              } catch (t) {
                  return []
              }
          }(t);
          e.forEach((function(t) {
              gt(t)
          }
          ))
      } catch (t) {}
  }
  var yt = [D, a, Object.freeze({
      __proto__: null,
      compute: st,
      get data() {
          return it
      },
      identify: ut,
      reset: lt,
      set: ot,
      start: function() {
          lt()
      },
      stop: function() {
          lt()
      }
  }), n, $, r, i, t, J, nt, e];
  function bt() {
      L = {},
      P = {},
      z(5),
      yt.forEach((function(t) {
          return Pi(t.start)()
      }
      ))
  }
  function wt() {
      yt.slice().reverse().forEach((function(t) {
          return Pi(t.stop)()
      }
      )),
      L = {},
      P = {}
  }
  function kt() {
      st(),
      C(),
      ui(),
      Gr(0),
      Z(),
      $r(),
      Yr()
  }
  var St, Et = [];
  function Ot(t, e, n) {
      o.fraud && null !== t && n && n.length >= 5 && (St = {
          id: t,
          target: e,
          checksum: d(n, 28)
      },
      Et.indexOf(St.checksum) < 0 && (Et.push(St.checksum),
      xr(41)))
  }
  var Tt = "load,active,fixed,visible,focus,show,collaps,animat".split(",")
    , Nt = {};
  function Mt(t, e) {
      var n = t.attributes
        , a = t.prefix ? t.prefix[e] : null
        , r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
      switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
          return "";
      case "HTML":
          return "HTML";
      default:
          if (null === a)
              return "";
          a = "".concat(a).concat(">"),
          t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
          var i = "".concat(a).concat(t.tag).concat(r)
            , o = "id"in n && n.id.length > 0 ? n.id : null
            , u = "BODY" !== t.tag && "class"in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
              return xt(t)
          }
          )).join(".") : null;
          if (u && u.length > 0)
              if (0 === e) {
                  var c = "".concat(function(t) {
                      for (var e = t.split(">"), n = 0; n < e.length; n++) {
                          var a = e[n].indexOf("~")
                            , r = e[n].indexOf(".");
                          e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                      }
                      return e.join(">")
                  }(a)).concat(t.tag).concat(".").concat(u);
                  c in Nt || (Nt[c] = []),
                  Nt[c].indexOf(t.id) < 0 && Nt[c].push(t.id),
                  i = "".concat(c).concat("~").concat(Nt[c].indexOf(t.id))
              } else
                  i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
          return i = o && xt(o) ? "".concat(function(t) {
              var e = t.lastIndexOf("*S")
                , n = t.lastIndexOf("".concat("iframe:").concat("HTML"))
                , a = Math.max(e, n);
              if (a < 0)
                  return "";
              return t.substring(0, t.indexOf(">", a) + 1)
          }(a)).concat("#").concat(o) : i,
          i
      }
  }
  function xt(t) {
      if (!t)
          return !1;
      if (Tt.some((function(e) {
          return t.toLowerCase().indexOf(e) >= 0
      }
      )))
          return !1;
      for (var e = 0; e < t.length; e++) {
          var n = t.charCodeAt(e);
          if (n >= 48 && n <= 57)
              return !1
      }
      return !0
  }
  var _t = 1
    , It = null
    , Ct = []
    , Dt = []
    , jt = {}
    , At = []
    , Rt = []
    , Lt = []
    , Pt = []
    , zt = []
    , Ht = []
    , Wt = null
    , Xt = null
    , Yt = null
    , qt = null;
  function Ut() {
      Vt(),
      Bt(document, !0)
  }
  function Ft() {
      Vt()
  }
  function Vt() {
      _t = 1,
      Ct = [],
      Dt = [],
      jt = {},
      At = [],
      Rt = [],
      Lt = "address,password,contact".split(","),
      Pt = "password,secret,pass,social,ssn,code,hidden".split(","),
      zt = "radio,checkbox,range,button,reset,submit".split(","),
      Ht = "INPUT,SELECT,TEXTAREA".split(","),
      It = new Map,
      Wt = new WeakMap,
      Xt = new WeakMap,
      Yt = new WeakMap,
      qt = new WeakMap,
      Nt = {}
  }
  function Bt(t, e) {
      void 0 === e && (e = !1);
      try {
          e && o.unmask.forEach((function(t) {
              return t.indexOf("!") < 0 ? Rt.push(t) : At.push(t.substr(1))
          }
          )),
          "querySelectorAll"in t && (o.regions.forEach((function(e) {
              return t.querySelectorAll(e[1]).forEach((function(t) {
                  return Ga(t, "".concat(e[0]))
              }
              ))
          }
          )),
          o.mask.forEach((function(e) {
              return t.querySelectorAll(e).forEach((function(t) {
                  return Yt.set(t, 3)
              }
              ))
          }
          )),
          o.checksum.forEach((function(e) {
              return t.querySelectorAll(e[1]).forEach((function(t) {
                  return qt.set(t, e[0])
              }
              ))
          }
          )),
          Rt.forEach((function(e) {
              return t.querySelectorAll(e).forEach((function(t) {
                  return Yt.set(t, 0)
              }
              ))
          }
          )))
      } catch (t) {
          Cr(5, 1, t ? t.name : null)
      }
  }
  function Jt(t, e) {
      if (void 0 === e && (e = !1),
      null === t)
          return null;
      var n = Wt.get(t);
      return !n && e && (n = _t++,
      Wt.set(t, n)),
      n || null
  }
  function Gt(t) {
      var e = !1;
      if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
          var n = t;
          try {
              n.contentDocument && (Xt.set(n.contentDocument, n),
              e = !0)
          } catch (t) {}
      }
      return e
  }
  function Kt(t) {
      var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
      return e && Xt.has(e) ? Xt.get(e) : null
  }
  function Zt(t, e, n) {
      if ("object" == typeof t[n] && "object" == typeof e[n]) {
          for (var a in t[n])
              if (t[n][a] !== e[n][a])
                  return !0;
          for (var a in e[n])
              if (e[n][a] !== t[n][a])
                  return !0;
          return !1
      }
      return t[n] !== e[n]
  }
  function Qt(t) {
      var e = t.parent && t.parent in Ct ? Ct[t.parent] : null
        , n = e ? e.selector : null
        , a = t.data
        , r = function(t, e) {
          e.metadata.position = 1;
          for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
              var a = Ct[t.children[n]];
              if (e.data.tag === a.data.tag) {
                  e.metadata.position = a.metadata.position + 1;
                  break
              }
          }
          return e.metadata.position
      }(e, t)
        , i = {
          id: t.id,
          tag: a.tag,
          prefix: n,
          position: r,
          attributes: a.attributes
      };
      t.selector = [Mt(i, 0), Mt(i, 1)],
      t.hash = t.selector.map((function(t) {
          return t ? d(t) : null
      }
      )),
      t.hash.forEach((function(e) {
          return jt[e] = t.id
      }
      ))
  }
  function $t(t) {
      var e = te(ne(t));
      return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
  }
  function te(t) {
      return It.has(t) ? It.get(t) : null
  }
  function ee(t) {
      var e = Jt(t);
      return e in Ct ? Ct[e] : null
  }
  function ne(t) {
      return t in jt ? jt[t] : null
  }
  function ae(t) {
      return It.has(Jt(t))
  }
  function re() {
      for (var t = [], e = 0, n = Dt; e < n.length; e++) {
          var a = n[e];
          a in Ct && t.push(Ct[a])
      }
      return Dt = [],
      t
  }
  function ie(t) {
      if (It.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          It.delete(t);
          var e = t in Ct ? Ct[t] : null;
          if (e && e.children)
              for (var n = 0, a = e.children; n < a.length; n++) {
                  ie(a[n])
              }
      }
  }
  function oe(t) {
      for (var e = null; null === e && t.previousSibling; )
          e = Jt(t.previousSibling),
          t = t.previousSibling;
      return e
  }
  function ue(t, e, n, a) {
      void 0 === n && (n = !0),
      void 0 === a && (a = !1);
      var r = Dt.indexOf(t);
      r >= 0 && 1 === e && a ? (Dt.splice(r, 1),
      Dt.push(t)) : -1 === r && n && Dt.push(t)
  }
  var ce = Object.freeze({
      __proto__: null,
      add: function(t, e, n, a) {
          var r = Jt(t, !0)
            , i = e ? Jt(e) : null
            , u = oe(t)
            , c = null
            , s = Ka(t) ? r : null
            , l = qt.has(t) ? qt.get(t) : null
            , d = o.content ? 1 : 3;
          i >= 0 && Ct[i] && ((c = Ct[i]).children.push(r),
          s = null === s ? c.region : s,
          l = null === l ? c.metadata.fraud : l,
          d = c.metadata.privacy),
          n.attributes && "data-clarity-region"in n.attributes && (Ga(t, n.attributes["data-clarity-region"]),
          s = r),
          It.set(r, t),
          Ct[r] = {
              id: r,
              parent: i,
              previous: u,
              children: [],
              data: n,
              selector: null,
              hash: null,
              region: s,
              metadata: {
                  active: !0,
                  suspend: !1,
                  privacy: d,
                  position: null,
                  fraud: l,
                  size: null
              }
          },
          function(t, e, n) {
              var a, r = e.data, i = e.metadata, o = i.privacy, u = r.attributes || {}, c = r.tag.toUpperCase();
              switch (!0) {
              case Ht.indexOf(c) >= 0:
                  var s = u.type
                    , l = ""
                    , d = ["class", "style"];
                  Object.keys(u).filter((function(t) {
                      return !d.includes(t)
                  }
                  )).forEach((function(t) {
                      return l += u[t].toLowerCase()
                  }
                  ));
                  var f = Pt.some((function(t) {
                      return l.indexOf(t) >= 0
                  }
                  ));
                  i.privacy = "INPUT" === c && zt.indexOf(s) >= 0 ? o : f ? 4 : 2;
                  break;
              case "data-clarity-mask"in u:
                  i.privacy = 3;
                  break;
              case "data-clarity-unmask"in u:
                  i.privacy = 0;
                  break;
              case Yt.has(t):
                  i.privacy = Yt.get(t);
                  break;
              case qt.has(t):
                  i.privacy = 2;
                  break;
              case "*T" === c:
                  var h = n && n.data ? n.data.tag : ""
                    , p = n && n.selector ? n.selector[1] : ""
                    , v = ["STYLE", "TITLE", "svg:style"];
                  i.privacy = v.includes(h) || At.some((function(t) {
                      return p.indexOf(t) >= 0
                  }
                  )) ? 0 : o;
                  break;
              case 1 === o:
                  i.privacy = function(t, e, n) {
                      if (t && e.some((function(e) {
                          return t.indexOf(e) >= 0
                      }
                      )))
                          return 2;
                      return n.privacy
                  }(u.class, Lt, i);
                  break;
              case "IMG" === c:
                  (null === (a = u.src) || void 0 === a ? void 0 : a.startsWith("blob:")) && (i.privacy = 3)
              }
          }(t, Ct[r], c),
          Qt(Ct[r]),
          function(t) {
              if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
                  var e = te(t.id);
                  !e || e.complete && 0 !== e.naturalWidth || Hi(e, "load", (function() {
                      e.setAttribute("data-clarity-loaded", "".concat(Oi()))
                  }
                  )),
                  t.metadata.size = []
              }
          }(Ct[r]),
          ue(r, a)
      },
      get: ee,
      getId: Jt,
      getNode: te,
      getValue: function(t) {
          return t in Ct ? Ct[t] : null
      },
      has: ae,
      hashText: $t,
      iframe: Kt,
      lookup: ne,
      parse: Bt,
      sameorigin: Gt,
      start: Ut,
      stop: Ft,
      update: function(t, e, n, a) {
          var r = Jt(t)
            , i = e ? Jt(e) : null
            , o = oe(t)
            , u = !1
            , c = !1;
          if (r in Ct) {
              var s = Ct[r];
              if (s.metadata.active = !0,
              s.previous !== o && (u = !0,
              s.previous = o),
              s.parent !== i) {
                  u = !0;
                  var l = s.parent;
                  if (s.parent = i,
                  null !== i && i >= 0) {
                      var d = null === o ? 0 : Ct[i].children.indexOf(o) + 1;
                      Ct[i].children.splice(d, 0, r),
                      s.region = Ka(t) ? r : Ct[i].region
                  } else
                      !function(t, e) {
                          if (t in Ct) {
                              var n = Ct[t];
                              n.metadata.active = !1,
                              n.parent = null,
                              ue(t, e),
                              ie(t)
                          }
                      }(r, a);
                  if (null !== l && l >= 0) {
                      var f = Ct[l].children.indexOf(r);
                      f >= 0 && Ct[l].children.splice(f, 1)
                  }
                  c = !0
              }
              for (var h in n)
                  Zt(s.data, n, h) && (u = !0,
                  s.data[h] = n[h]);
              Qt(s),
              ue(r, a, u, c)
          }
      },
      updates: re
  })
    , se = 5e3
    , le = {}
    , de = []
    , fe = null
    , he = null
    , pe = null;
  function ve() {
      le = {},
      de = [],
      fe = null,
      he = null
  }
  function ge(t, e) {
      return void 0 === e && (e = 0),
      at(this, void 0, void 0, (function() {
          var n, a, r;
          return rt(this, (function(i) {
              for (n = 0,
              a = de; n < a.length; n++)
                  if (a[n].task === t)
                      return [2];
              return r = new Promise((function(n) {
                  de[1 === e ? "unshift" : "push"]({
                      task: t,
                      resolve: n,
                      id: mi()
                  })
              }
              )),
              null === fe && null === he && me(),
              [2, r]
          }
          ))
      }
      ))
  }
  function me() {
      var t = de.shift();
      t && (fe = t,
      t.task().then((function() {
          t.id === mi() && (t.resolve(),
          fe = null,
          me())
      }
      )).catch((function(e) {
          t.id === mi() && (e && Cr(0, 1, e.name, e.message, e.stack),
          fe = null,
          me())
      }
      )))
  }
  function ye(t) {
      var e = Se(t);
      return e in le ? performance.now() - le[e].start > le[e].yield ? 0 : 1 : 2
  }
  function be(t) {
      le[Se(t)] = {
          start: performance.now(),
          calls: 0,
          yield: o.longTask
      }
  }
  function we(t) {
      var e = performance.now()
        , n = Se(t)
        , a = e - le[n].start;
      H(t.cost, a),
      z(5),
      le[n].calls > 0 && H(4, a)
  }
  function ke(t) {
      return at(this, void 0, void 0, (function() {
          var e, n;
          return rt(this, (function(a) {
              switch (a.label) {
              case 0:
                  return (e = Se(t))in le ? (we(t),
                  n = le[e],
                  [4, Ee()]) : [3, 2];
              case 1:
                  n.yield = a.sent().timeRemaining(),
                  function(t) {
                      var e = Se(t);
                      if (le && le[e]) {
                          var n = le[e].calls
                            , a = le[e].yield;
                          be(t),
                          le[e].calls = n + 1,
                          le[e].yield = a
                      }
                  }(t),
                  a.label = 2;
              case 2:
                  return [2, e in le ? 1 : 2]
              }
          }
          ))
      }
      ))
  }
  function Se(t) {
      return "".concat(t.id, ".").concat(t.cost)
  }
  function Ee() {
      return at(this, void 0, void 0, (function() {
          return rt(this, (function(t) {
              switch (t.label) {
              case 0:
                  return he ? [4, he] : [3, 2];
              case 1:
                  t.sent(),
                  t.label = 2;
              case 2:
                  return [2, new Promise((function(t) {
                      Te(t, {
                          timeout: se
                      })
                  }
                  ))]
              }
          }
          ))
      }
      ))
  }
  var Oe, Te = window.requestIdleCallback || function(t, e) {
      var n = performance.now()
        , a = new MessageChannel
        , r = a.port1
        , i = a.port2;
      r.onmessage = function(a) {
          var r = performance.now()
            , u = r - n
            , c = r - a.data;
          if (c > o.longTask && u < e.timeout)
              requestAnimationFrame((function() {
                  i.postMessage(r)
              }
              ));
          else {
              var s = u > e.timeout;
              t({
                  didTimeout: s,
                  timeRemaining: function() {
                      return s ? o.longTask : Math.max(0, o.longTask - c)
                  }
              })
          }
      }
      ,
      requestAnimationFrame((function() {
          i.postMessage(performance.now())
      }
      ))
  }
  ;
  function Ne() {
      Oe = null
  }
  function Me() {
      var t = document.body
        , e = document.documentElement
        , n = t ? t.clientWidth : null
        , a = t ? t.scrollWidth : null
        , r = t ? t.offsetWidth : null
        , i = e ? e.clientWidth : null
        , o = e ? e.scrollWidth : null
        , u = e ? e.offsetWidth : null
        , c = Math.max(n, a, r, i, o, u)
        , s = t ? t.clientHeight : null
        , l = t ? t.scrollHeight : null
        , d = t ? t.offsetHeight : null
        , f = e ? e.clientHeight : null
        , h = e ? e.scrollHeight : null
        , p = e ? e.offsetHeight : null
        , v = Math.max(s, l, d, f, h, p);
      null !== Oe && c === Oe.width && v === Oe.height || null === c || null === v || (Oe = {
          width: c,
          height: v
      },
      Ha(8))
  }
  Me.dn = 19;
  var xe = [];
  function _e(t) {
      var e = nr(t);
      if (e) {
          var n = e.value
            , a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 28) : "";
          xe.push({
              time: s(t),
              event: 42,
              data: {
                  target: nr(t),
                  type: e.type,
                  value: n,
                  checksum: a
              }
          }),
          ge(rr.bind(this, 42))
      }
  }
  function Ie() {
      xe = []
  }
  function Ce(t) {
      var e = {
          x: 0,
          y: 0
      };
      if (t && t.offsetParent)
          do {
              var n = t.offsetParent
                , a = null === n ? Kt(t.ownerDocument) : null;
              e.x += t.offsetLeft,
              e.y += t.offsetTop,
              t = a || n
          } while (t);
      return e
  }
  _e.dn = 5;
  var De = ["input", "textarea", "radio", "button", "canvas"]
    , je = [];
  function Ae(t, e, n) {
      var a = Kt(e)
        , r = a ? a.contentDocument.documentElement : document.documentElement
        , i = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + r.scrollLeft) : null
        , o = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + r.scrollTop) : null;
      if (a) {
          var u = Ce(a);
          i = i ? i + Math.round(u.x) : i,
          o = o ? o + Math.round(u.y) : o
      }
      var c = nr(n)
        , l = function(t) {
          for (; t && t !== document; ) {
              if (t.nodeType === Node.ELEMENT_NODE) {
                  var e = t;
                  if ("A" === e.tagName)
                      return e
              }
              t = t.parentNode
          }
          return null
      }(c)
        , d = function(t) {
          var e = null
            , n = document.documentElement;
          if ("function" == typeof t.getBoundingClientRect) {
              var a = t.getBoundingClientRect();
              a && a.width > 0 && a.height > 0 && (e = {
                  x: Math.floor(a.left + ("pageXOffset"in window ? window.pageXOffset : n.scrollLeft)),
                  y: Math.floor(a.top + ("pageYOffset"in window ? window.pageYOffset : n.scrollTop)),
                  w: Math.floor(a.width),
                  h: Math.floor(a.height)
              })
          }
          return e
      }(c);
      0 === n.detail && d && (i = Math.round(d.x + d.w / 2),
      o = Math.round(d.y + d.h / 2));
      var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0
        , h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
      null !== i && null !== o && (je.push({
          time: s(n),
          event: t,
          data: {
              target: c,
              x: i,
              y: o,
              eX: f,
              eY: h,
              button: n.button,
              reaction: Le(c),
              context: Pe(l),
              text: Re(c),
              link: l ? l.href : null,
              hash: null,
              trust: n.isTrusted ? 1 : 0
          }
      }),
      ge(rr.bind(this, t)))
  }
  function Re(t) {
      var e = null;
      if (t) {
          var n = t.textContent || String(t.value || "") || t.alt;
          n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
      }
      return e
  }
  function Le(t) {
      if (t.nodeType === Node.ELEMENT_NODE) {
          var e = t.tagName.toLowerCase();
          if (De.indexOf(e) >= 0)
              return 0
      }
      return 1
  }
  function Pe(t) {
      if (t && t.hasAttribute("target"))
          switch (t.getAttribute("target")) {
          case "_blank":
              return 1;
          case "_parent":
              return 2;
          case "_top":
              return 3
          }
      return 0
  }
  function ze() {
      je = []
  }
  Ae.dn = 6;
  var He = [];
  function We(t, e) {
      He.push({
          time: s(e),
          event: 38,
          data: {
              target: nr(e),
              action: t
          }
      }),
      ge(rr.bind(this, 38))
  }
  function Xe() {
      He = []
  }
  We.dn = 7;
  var Ye = null
    , qe = [];
  function Ue(t) {
      var e = nr(t)
        , n = ee(e);
      if (e && e.type && n) {
          var a = e.value
            , r = e.type;
          switch (e.type) {
          case "radio":
          case "checkbox":
              a = e.checked ? "true" : "false"
          }
          var i = {
              target: e,
              value: a,
              type: r
          };
          qe.length > 0 && qe[qe.length - 1].data.target === i.target && qe.pop(),
          qe.push({
              time: s(t),
              event: 27,
              data: i
          }),
          Y(Ye),
          Ye = X(Fe, 1e3, 27)
      }
  }
  function Fe(t) {
      ge(rr.bind(this, t))
  }
  function Ve() {
      qe = []
  }
  Ue.dn = 9;
  var Be, Je = [], Ge = null, Ke = !1, Ze = 0, Qe = new Set;
  function $e(t, e, n) {
      var a = Kt(e)
        , r = a ? a.contentDocument.documentElement : document.documentElement
        , i = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + r.scrollLeft) : null
        , o = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + r.scrollTop) : null;
      if (a) {
          var u = Ce(a);
          i = i ? i + Math.round(u.x) : i,
          o = o ? o + Math.round(u.y) : o
      }
      null !== i && null !== o && en({
          time: s(n),
          event: t,
          data: {
              target: nr(n),
              x: i,
              y: o
          }
      })
  }
  function tn(t, e, n) {
      var a = Kt(e)
        , r = a ? a.contentDocument.documentElement : document.documentElement
        , i = n.changedTouches
        , o = s(n);
      if (i)
          for (var u = 0; u < i.length; u++) {
              var c = i[u]
                , l = "clientX"in c ? Math.round(c.clientX + r.scrollLeft) : null
                , d = "clientY"in c ? Math.round(c.clientY + r.scrollTop) : null;
              l = l && a ? l + Math.round(a.offsetLeft) : l,
              d = d && a ? d + Math.round(a.offsetTop) : d;
              var f = "identifier"in c ? c.identifier : void 0;
              switch (t) {
              case 17:
                  0 === Qe.size && (Ke = !0,
                  Ze = f),
                  Qe.add(f);
                  break;
              case 18:
              case 20:
                  Qe.delete(f)
              }
              var h = Ke && Ze === f;
              null !== l && null !== d && en({
                  time: o,
                  event: t,
                  data: {
                      target: nr(n),
                      x: l,
                      y: d,
                      id: f,
                      isPrimary: h
                  }
              }),
              20 !== t && 18 !== t || Ze === f && (Ke = !1)
          }
  }
  function en(t) {
      switch (t.event) {
      case 12:
      case 15:
      case 19:
          var e = Je.length
            , n = e > 1 ? Je[e - 2] : null;
          n && function(t, e) {
              var n = t.data.x - e.data.x
                , a = t.data.y - e.data.y
                , r = Math.sqrt(n * n + a * a)
                , i = e.time - t.time
                , o = e.data.target === t.data.target;
              return e.event === t.event && o && r < 20 && i < 25
          }(n, t) && Je.pop(),
          Je.push(t),
          Y(Ge),
          Ge = X(nn, 500, t.event);
          break;
      default:
          Je.push(t),
          nn(t.event)
      }
  }
  function nn(t) {
      ge(rr.bind(this, t))
  }
  function an() {
      Je = []
  }
  $e.dn = 10,
  tn.dn = 11;
  var rn = null
    , on = !1;
  function un() {
      var t = document.documentElement;
      Be = {
          width: t && "clientWidth"in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
          height: t && "clientHeight"in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
      },
      on ? (Y(rn),
      rn = X(cn, 500, 11)) : (rr(11),
      on = !0)
  }
  function cn(t) {
      ge(rr.bind(this, t))
  }
  function sn() {
      Be = null,
      Y(rn)
  }
  un.dn = 12;
  var ln = []
    , dn = null
    , fn = null
    , hn = null;
  function pn(t) {
      void 0 === t && (t = null);
      var e = window
        , n = document.documentElement
        , a = t ? nr(t) : n;
      if (a && a.nodeType === Node.DOCUMENT_NODE) {
          var r = Kt(a);
          e = r ? r.contentWindow : e,
          a = n = a.documentElement
      }
      var i = a === n && "pageXOffset"in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft)
        , o = a === n && "pageYOffset"in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop)
        , u = window.innerWidth
        , c = window.innerHeight
        , l = u / 3
        , d = u > c ? .15 * c : .2 * c
        , f = c - d
        , h = vn(l, d)
        , p = vn(l, f)
        , v = {
          time: s(t),
          event: 10,
          data: {
              target: a,
              x: i,
              y: o,
              top: h,
              bottom: p
          }
      };
      if (null === t && 0 === i && 0 === o || null === i || null === o)
          return dn = h,
          void (fn = p);
      var g = ln.length
        , m = g > 1 ? ln[g - 2] : null;
      m && function(t, e) {
          var n = t.data.x - e.data.x
            , a = t.data.y - e.data.y;
          return n * n + a * a < 400 && e.time - t.time < 25
      }(m, v) && ln.pop(),
      ln.push(v),
      Y(hn),
      hn = X(gn, 500, 10)
  }
  function vn(t, e) {
      var n, a, r;
      return "caretPositionFromPoint"in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint"in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer),
      r || (r = document.elementFromPoint(t, e)),
      r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode),
      r
  }
  function gn(t) {
      ge(rr.bind(this, t))
  }
  function mn() {
      var t, e;
      if (dn) {
          var n = ar(dn, null);
          oi(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
      }
      if (fn) {
          var a = ar(fn, null);
          oi(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
      }
  }
  pn.dn = 13,
  mn.dn = 14;
  var yn = null
    , bn = null
    , wn = null;
  function kn(t) {
      var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
      if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
          var n = yn.start ? yn.start : null;
          null !== bn && null !== yn.start && n !== e.anchorNode && (Y(wn),
          Sn(21)),
          yn = {
              start: e.anchorNode,
              startOffset: e.anchorOffset,
              end: e.focusNode,
              endOffset: e.focusOffset
          },
          bn = e,
          Y(wn),
          wn = X(Sn, 500, 21)
      }
  }
  function Sn(t) {
      ge(rr.bind(this, t))
  }
  function En() {
      bn = null,
      yn = {
          start: 0,
          startOffset: 0,
          end: 0,
          endOffset: 0
      }
  }
  kn.dn = 15;
  var On, Tn, Nn = [];
  function Mn(t) {
      Nn.push({
          time: s(t),
          event: 39,
          data: {
              target: nr(t)
          }
      }),
      ge(rr.bind(this, 39))
  }
  function xn() {
      Nn = []
  }
  function _n(t) {
      On = {
          name: t.type
      },
      rr(26, s(t)),
      Mo()
  }
  function In() {
      On = null
  }
  function Cn(t) {
      void 0 === t && (t = null),
      Tn = {
          visible: "visibilityState"in document ? document.visibilityState : "default"
      },
      rr(28, s(t))
  }
  
  
