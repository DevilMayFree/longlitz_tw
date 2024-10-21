(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[569], {
    68493: function (t) {
        var e;
        e = () => (() => {
            var t = {
                704: t => {
                    t.exports = function (t, s) {
                        for (var a = t.split(e), l = a.length, c = new Array(l), u = 0; u < l; u++) {
                            var d = a[u];
                            if ("" !== d) {
                                var h = i.test(d) && !r.test(d);
                                h && (d = d.replace(n, (function (t, e, i) {
                                    return o(t, d.length - i - t.length == 0)
                                })));
                                var p = d[0];
                                p = u > 0 ? p.toUpperCase() : p.toLowerCase(), c[u] = p + (h ? d.slice(1) : d.slice(1).toLowerCase())
                            }
                        }
                        return c.join("")
                    };
                    var e = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/,
                        i = /^[a-z\u00E0-\u00FCA-Z\u00C0-\u00DC][\d|a-z\u00E0-\u00FCA-Z\u00C0-\u00DC]*$/,
                        n = /([A-Z\u00C0-\u00DC]{4,})/g, r = /^[A-Z\u00C0-\u00DC]+$/;

                    function o(t, e) {
                        var i = t.split(""), n = i.shift().toUpperCase(), r = e ? i.pop().toLowerCase() : i.pop();
                        return n + i.join("").toLowerCase() + r
                    }
                }, 279: (t, e, i) => {
                    "use strict";
                    i.r(e)
                }, 492: (t, e, i) => {
                    "use strict";
                    var n;
                    i.r(e), i.d(e, {default: () => h});
                    var r = "undefined" == typeof document ? void 0 : document,
                        o = !!r && "content" in r.createElement("template"),
                        s = !!r && r.createRange && "createContextualFragment" in r.createRange();

                    function a(t, e) {
                        var i, n, r = t.nodeName, o = e.nodeName;
                        return r === o || (i = r.charCodeAt(0), n = o.charCodeAt(0), i <= 90 && n >= 97 ? r === o.toUpperCase() : n <= 90 && i >= 97 && o === r.toUpperCase())
                    }

                    function l(t, e, i) {
                        t[i] !== e[i] && (t[i] = e[i], t[i] ? t.setAttribute(i, "") : t.removeAttribute(i))
                    }

                    var c = {
                        OPTION: function (t, e) {
                            var i = t.parentNode;
                            if (i) {
                                var n = i.nodeName.toUpperCase();
                                "OPTGROUP" === n && (n = (i = i.parentNode) && i.nodeName.toUpperCase()), "SELECT" !== n || i.hasAttribute("multiple") || (t.hasAttribute("selected") && !e.selected && (t.setAttribute("selected", "selected"), t.removeAttribute("selected")), i.selectedIndex = -1)
                            }
                            l(t, e, "selected")
                        }, INPUT: function (t, e) {
                            l(t, e, "checked"), l(t, e, "disabled"), t.value !== e.value && (t.value = e.value), e.hasAttribute("value") || t.removeAttribute("value")
                        }, TEXTAREA: function (t, e) {
                            var i = e.value;
                            t.value !== i && (t.value = i);
                            var n = t.firstChild;
                            if (n) {
                                var r = n.nodeValue;
                                if (r == i || !i && r == t.placeholder) return;
                                n.nodeValue = i
                            }
                        }, SELECT: function (t, e) {
                            if (!e.hasAttribute("multiple")) {
                                for (var i, n, r = -1, o = 0, s = t.firstChild; s;) if ("OPTGROUP" === (n = s.nodeName && s.nodeName.toUpperCase())) s = (i = s).firstChild; else {
                                    if ("OPTION" === n) {
                                        if (s.hasAttribute("selected")) {
                                            r = o;
                                            break
                                        }
                                        o++
                                    }
                                    !(s = s.nextSibling) && i && (s = i.nextSibling, i = null)
                                }
                                t.selectedIndex = r
                            }
                        }
                    };

                    function u() {
                    }

                    function d(t) {
                        if (t) return t.getAttribute && t.getAttribute("id") || t.id
                    }

                    const h = function (t, e, i) {
                        if (i || (i = {}), "string" == typeof e) if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
                            var l = e;
                            (e = r.createElement("html")).innerHTML = l
                        } else h = (h = e).trim(), e = o ? function (t) {
                            var e = r.createElement("template");
                            return e.innerHTML = t, e.content.childNodes[0]
                        }(h) : s ? function (t) {
                            return n || (n = r.createRange()).selectNode(r.body), n.createContextualFragment(t).childNodes[0]
                        }(h) : function (t) {
                            var e = r.createElement("body");
                            return e.innerHTML = t, e.childNodes[0]
                        }(h);
                        var h, p = i.getNodeKey || d, f = i.onBeforeNodeAdded || u, v = i.onNodeAdded || u,
                            g = i.onBeforeElUpdated || u, m = i.onElUpdated || u, y = i.onBeforeNodeDiscarded || u,
                            w = i.onNodeDiscarded || u, b = i.onBeforeElChildrenUpdated || u, C = !0 === i.childrenOnly,
                            k = Object.create(null), S = [];

                        function L(t) {
                            S.push(t)
                        }

                        function P(t, e) {
                            if (1 === t.nodeType) for (var i = t.firstChild; i;) {
                                var n = void 0;
                                e && (n = p(i)) ? L(n) : (w(i), i.firstChild && P(i, e)), i = i.nextSibling
                            }
                        }

                        function _(t, e, i) {
                            !1 !== y(t) && (e && e.removeChild(t), w(t), P(t, i))
                        }

                        function T(t) {
                            v(t);
                            for (var e = t.firstChild; e;) {
                                var i = e.nextSibling, n = p(e);
                                if (n) {
                                    var r = k[n];
                                    r && a(e, r) ? (e.parentNode.replaceChild(r, e), x(r, e)) : T(e)
                                } else T(e);
                                e = i
                            }
                        }

                        function x(t, e, i) {
                            var n = p(e);
                            if (n && delete k[n], !i) {
                                if (!1 === g(t, e)) return;
                                if (function (t, e) {
                                    var i, n, r, o, s = e.attributes;
                                    if (11 !== e.nodeType && 11 !== t.nodeType) {
                                        for (var a = s.length - 1; a >= 0; a--) n = (i = s[a]).name, r = i.namespaceURI, o = i.value, r ? (n = i.localName || n, t.getAttributeNS(r, n) !== o && ("xmlns" === i.prefix && (n = i.name), t.setAttributeNS(r, n, o))) : t.getAttribute(n) !== o && t.setAttribute(n, o);
                                        for (var l = t.attributes, c = l.length - 1; c >= 0; c--) n = (i = l[c]).name, (r = i.namespaceURI) ? (n = i.localName || n, e.hasAttributeNS(r, n) || t.removeAttributeNS(r, n)) : e.hasAttribute(n) || t.removeAttribute(n)
                                    }
                                }(t, e), m(t), !1 === b(t, e)) return
                            }
                            "TEXTAREA" !== t.nodeName ? function (t, e) {
                                var i, n, o, s, l, u = e.firstChild, d = t.firstChild;
                                t:for (; u;) {
                                    for (s = u.nextSibling, i = p(u); d;) {
                                        if (o = d.nextSibling, u.isSameNode && u.isSameNode(d)) {
                                            u = s, d = o;
                                            continue t
                                        }
                                        n = p(d);
                                        var h = d.nodeType, v = void 0;
                                        if (h === u.nodeType && (1 === h ? (i ? i !== n && ((l = k[i]) ? o === l ? v = !1 : (t.insertBefore(l, d), n ? L(n) : _(d, t, !0), d = l) : v = !1) : n && (v = !1), (v = !1 !== v && a(d, u)) && x(d, u)) : 3 !== h && 8 != h || (v = !0, d.nodeValue !== u.nodeValue && (d.nodeValue = u.nodeValue))), v) {
                                            u = s, d = o;
                                            continue t
                                        }
                                        n ? L(n) : _(d, t, !0), d = o
                                    }
                                    if (i && (l = k[i]) && a(l, u)) t.appendChild(l), x(l, u); else {
                                        var g = f(u);
                                        !1 !== g && (g && (u = g), u.actualize && (u = u.actualize(t.ownerDocument || r)), t.appendChild(u), T(u))
                                    }
                                    u = s, d = o
                                }
                                !function (t, e, i) {
                                    for (; e;) {
                                        var n = e.nextSibling;
                                        (i = p(e)) ? L(i) : _(e, t, !0), e = n
                                    }
                                }(t, d, n);
                                var m = c[t.nodeName];
                                m && m(t, e)
                            }(t, e) : c.TEXTAREA(t, e)
                        }

                        !function t(e) {
                            if (1 === e.nodeType || 11 === e.nodeType) for (var i = e.firstChild; i;) {
                                var n = p(i);
                                n && (k[n] = i), t(i), i = i.nextSibling
                            }
                        }(t);
                        var A, O, E = t, B = E.nodeType, D = e.nodeType;
                        if (!C) if (1 === B) 1 === D ? a(t, e) || (w(t), E = function (t, e) {
                            for (var i = t.firstChild; i;) {
                                var n = i.nextSibling;
                                e.appendChild(i), i = n
                            }
                            return e
                        }(t, (A = e.nodeName, (O = e.namespaceURI) && "http://www.w3.org/1999/xhtml" !== O ? r.createElementNS(O, A) : r.createElement(A)))) : E = e; else if (3 === B || 8 === B) {
                            if (D === B) return E.nodeValue !== e.nodeValue && (E.nodeValue = e.nodeValue), E;
                            E = e
                        }
                        if (E === e) w(t); else {
                            if (e.isSameNode && e.isSameNode(E)) return;
                            if (x(E, e, C), S) for (var U = 0, z = S.length; U < z; U++) {
                                var M = k[S[U]];
                                M && _(M, M.parentNode, !1)
                            }
                        }
                        return !C && E !== t && t.parentNode && (E.actualize && (E = E.actualize(t.ownerDocument || r)), t.parentNode.replaceChild(E, t)), E
                    }
                }, 135: function (t, e, i) {
                    "use strict";
                    var n = this && this.__awaiter || function (t, e, i, n) {
                        return new (i || (i = Promise))((function (r, o) {
                            function s(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                    t(e)
                                }))).then(s, a)
                            }

                            l((n = n.apply(t, e || [])).next())
                        }))
                    }, r = this && this.__generator || function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(a) {
                            return function (l) {
                                return function (a) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                        if (i = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                                        switch (n = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return s.label++, {value: a[1], done: !1};
                                            case 5:
                                                s.label++, n = a[1], a = [0];
                                                continue;
                                            case 7:
                                                a = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    s.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && s.label < r[1]) {
                                                    s.label = r[1], r = a;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(a);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        a = e.call(t, s)
                                    } catch (t) {
                                        a = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & a[0]) throw a[1];
                                    return {value: a[0] ? a[1] : void 0, done: !0}
                                }([a, l])
                            }
                        }
                    }, o = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {default: t}
                    };
                    Object.defineProperty(e, "__esModule", {value: !0}), e.ContentstackLivePreview = void 0;
                    var s = i(614), a = o(i(704)), l = o(i(147)), c = o(i(922)), u = i(334), d = i(895),
                        h = function () {
                            function t() {
                            }

                            return t.init = function (e) {
                                if (void 0 === e && (e = u.userInitData), "undefined" != typeof window) return t.livePreview ? (d.PublicLogger.warn("You have already initialized the Live Preview SDK. So, any subsequent initialization returns the existing SDK instance."), Promise.resolve(t.livePreview)) : (t.livePreview = new c.default(e), t.livePreview.setOnChangeCallback(t.publish), t.livePreview.setConfigFromParams(this.configs.params), this.configs.params = {}, Promise.resolve(t.livePreview));
                                t.userConfig = e
                            }, Object.defineProperty(t, "hash", {
                                get: function () {
                                    var t;
                                    return this.livePreview ? this.livePreview.hash : null !== (t = new URLSearchParams(this.configs.params).get("live_preview")) && void 0 !== t ? t : ""
                                }, enumerable: !1, configurable: !0
                            }), t.setConfigFromParams = function (t) {
                                void 0 === t && (t = {}), this.livePreview ? this.livePreview.setConfigFromParams(t) : this.configs.params = t
                            }, t.publish = function () {
                                Object.values(t.subscribers).forEach((function (t) {
                                    t()
                                }))
                            }, t.subscribe = function (e) {
                                var i = (0, s.v4)();
                                return t.subscribers[i] = e, i
                            }, t.onEntryChange = function (e, i) {
                                var n = (i || {}).skipInitialRender, r = void 0 !== n && n;
                                t.userConfig && (t.livePreview = new c.default(t.userConfig), t.livePreview.setOnChangeCallback(t.publish), t.livePreview.setConfigFromParams(this.configs.params), this.configs.params = {}, t.userConfig = null);
                                var o = t.subscribe(e);
                                return r || e(), o
                            }, t.onLiveEdit = function (e) {
                                return t.onEntryChange(e, {skipInitialRender: !0})
                            }, t.unsubscribeOnEntryChange = function (e) {
                                "string" == typeof e ? (t.subscribers[e] || d.PublicLogger.warn("No subscriber found with the given id."), delete t.subscribers[e]) : "function" == typeof e && (Object.entries(t.subscribers).some((function (i) {
                                    var n = i[0];
                                    return i[1] === e && (delete t.subscribers[n], !0)
                                })) || d.PublicLogger.warn("No subscriber found with the given callback."))
                            }, t.getGatsbyDataFormat = function (t, e) {
                                return n(this, void 0, void 0, (function () {
                                    return r(this, (function (i) {
                                        return "function" == typeof t.find ? [2, t.toJSON().find().then((function (i) {
                                            return i.map((function (i) {
                                                return i.map((function (i) {
                                                    var n;
                                                    return (n = {})[(0, a.default)("".concat(e, "_").concat(t.content_type_uid))] = i, n
                                                }))
                                            }))
                                        })).catch((function (t) {
                                            console.error(t)
                                        }))] : "function" == typeof t.fetch ? [2, t.toJSON().fetch().then((function (i) {
                                            var n;
                                            return (n = {})[(0, a.default)("".concat(e, "_").concat(t.content_type_uid))] = i, n
                                        })).catch((function (t) {
                                            console.error(t)
                                        }))] : [2]
                                    }))
                                }))
                            }, t.getSdkVersion = function () {
                                return l.default.version
                            }, t.livePreview = null, t.userConfig = null, t.subscribers = {}, t.configs = {params: {}}, t
                        }();
                    e.ContentstackLivePreview = h, e.default = h, t.exports = h
                }, 607: function (t, e, i) {
                    "use strict";
                    var n = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {default: t}
                    };
                    Object.defineProperty(e, "__esModule", {value: !0}), e.ContentstackLivePreview = void 0;
                    var r = n(i(135));
                    i(279), e.ContentstackLivePreview = r.default, e.default = e.ContentstackLivePreview, t.exports = e.ContentstackLivePreview
                }, 922: function (t, e, i) {
                    "use strict";
                    var n = this && this.__assign || function () {
                        return n = Object.assign || function (t) {
                            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t
                        }, n.apply(this, arguments)
                    }, r = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {default: t}
                    };
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = i(928), s = i(895), a = i(383), l = i(334), c = r(i(147)), u = i(63), d = function () {
                        function t(t) {
                            void 0 === t && (t = l.userInitData);
                            var e = this;
                            this.config = {
                                ssr: !0,
                                enable: !0,
                                runScriptsOnUpdate: !1,
                                cleanCslpOnProduction: !0,
                                hash: "",
                                editButton: {enable: !0, exclude: [], position: "top", includeByQueryParameter: !0},
                                stackDetails: {apiKey: "", environment: "", contentTypeUid: "", entryUid: ""},
                                clientUrlParams: {
                                    protocol: "https",
                                    host: "app.contentstack.com",
                                    port: 443,
                                    url: "https://app.contentstack.com:443"
                                },
                                stackSdk: {live_preview: {}, headers: {api_key: ""}, environment: ""},
                                onChange: function () {
                                }
                            }, this.tooltip = null, this.currentElementBesideTooltip = null, this.tooltipChild = {
                                singular: null,
                                multiple: null
                            }, this.tooltipCurrentChild = "singular", this.createCslpTooltip = function () {
                                if (!document.getElementById("cslp-tooltip") && e.config.editButton.enable) {
                                    var t = document.createElement("button");
                                    t.classList.add("cslp-tooltip"), t.setAttribute("data-test-id", "cs-cslp-tooltip"), t.id = "cslp-tooltip", window.document.body.insertAdjacentElement("beforeend", t), e.tooltipChild.singular = (0, o.createSingularEditButton)(e.scrollHandler), e.tooltipChild.multiple = (0, o.createMultipleEditButton)(e.scrollHandler, e.linkClickHandler), t.innerHTML = "", t.appendChild(e.tooltipChild.singular), e.tooltip = t
                                }
                                e.updateTooltipPosition()
                            }, (0, a.handleInitData)(t, this.config), this.addEditStyleOnHover = this.addEditStyleOnHover.bind(this), this.generateRedirectUrl = this.generateRedirectUrl.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.linkClickHandler = this.linkClickHandler.bind(this), this.handleUserChange = this.handleUserChange.bind(this), this.setOnChangeCallback = this.setOnChangeCallback.bind(this), this.resolveIncomingMessage = this.resolveIncomingMessage.bind(this), this.createCslpTooltip = this.createCslpTooltip.bind(this), this.requestDataSync = this.requestDataSync.bind(this), this.updateTooltipPosition = this.updateTooltipPosition.bind(this), this.removeDataCslp = this.removeDataCslp.bind(this), t.debug && s.PublicLogger.debug("Contentstack Live Preview Debugging mode: config --", this.config), this.config.enable ? (void 0 !== typeof document && "complete" === document.readyState ? this.requestDataSync() : window.addEventListener("load", this.requestDataSync), window.addEventListener("message", this.resolveIncomingMessage), window.addEventListener("scroll", this.updateTooltipPosition), this.config.editButton.enable && window.addEventListener("mouseover", this.addEditStyleOnHover), this.config.ssr && (window.addEventListener("load", (function (t) {
                                document.querySelectorAll("a").forEach((function (t) {
                                    var e = document.location.origin;
                                    if (t.href && t.href.includes(e)) {
                                        var i = (0, o.addLivePreviewQueryTags)(t.href);
                                        t.href = i
                                    }
                                }))
                            })), window.addEventListener("click", (function (t) {
                                var e = t.target, i = e.href, n = document.location.origin;
                                if (i && i.includes(n) && !i.includes("live_preview")) {
                                    var r = (0, o.addLivePreviewQueryTags)(e.href);
                                    t.target.href = r || e.href
                                }
                            })))) : this.config.cleanCslpOnProduction && this.removeDataCslp()
                        }

                        return t.prototype.addEditStyleOnHover = function (t) {
                            for (var e, i, n, r = !0, o = 0, s = t.composedPath(); o < s.length; o++) {
                                var a = s[o];
                                if ("BODY" === a.nodeName) break;
                                if ("function" == typeof (null == a ? void 0 : a.getAttribute)) {
                                    var l = a.getAttribute("data-cslp");
                                    r && l ? (this.currentElementBesideTooltip && this.currentElementBesideTooltip.classList.remove("cslp-edit-mode"), a.classList.add("cslp-edit-mode"), this.currentElementBesideTooltip = a, this.updateTooltipPosition() && (null === (e = this.tooltip) || void 0 === e || e.setAttribute("current-data-cslp", l), null === (i = this.tooltip) || void 0 === i || i.setAttribute("current-href", null !== (n = a.getAttribute("href")) && void 0 !== n ? n : "")), r = !1) : r || a.classList.remove("cslp-edit-mode")
                                }
                            }
                        }, t.prototype.generateRedirectUrl = function (t, e, i, n) {
                            if (void 0 === e && (e = "en-us"), !this.config.stackDetails.apiKey) throw "To use edit tags, you must provide the stack API key. Specify the API key while initializing the Live Preview SDK.\n\n                ContentstackLivePreview.init({\n                    ...,\n                    stackDetails: {\n                        apiKey: 'your-api-key'\n                    },\n                    ...\n                })";
                            if (!this.config.stackDetails.environment) throw "To use edit tags, you must provide the preview environment. Specify the preview environment while initializing the Live Preview SDK.\n\n                ContentstackLivePreview.init({\n                    ...,\n                    stackDetails: {\n                        environment: 'Your-environment'\n                    },\n                    ...\n                })";
                            var r = String(this.config.clientUrlParams.protocol),
                                o = String(this.config.clientUrlParams.host),
                                s = String(this.config.clientUrlParams.port),
                                a = String(this.config.stackDetails.environment),
                                l = "!/stack/".concat(this.config.stackDetails.apiKey, "/content-type/").concat(t, "/").concat(null != e ? e : "en-us", "/entry/").concat(i, "/edit"),
                                c = new URL("".concat(r, "://").concat(o));
                            return c.port = s, c.hash = l, c.searchParams.append("preview-field", n), c.searchParams.append("preview-locale", null != e ? e : "en-us"), c.searchParams.append("preview-environment", a), "".concat(c.origin, "/").concat(c.hash).concat(c.search)
                        }, t.prototype.scrollHandler = function () {
                            if (this.tooltip) {
                                var t = this.tooltip.getAttribute("current-data-cslp");
                                if (t) {
                                    var e = t.split("."), i = e[0], n = e[1], r = e[2], o = e.slice(3);
                                    if (window.location !== window.parent.location) window.parent.postMessage({
                                        from: "live-preview",
                                        type: "scroll",
                                        data: {field: o.join("."), content_type_uid: i, entry_uid: n, locale: r}
                                    }, "*"); else try {
                                        var a = this.generateRedirectUrl(i, r, n, o.join("."));
                                        window.open(a, "_blank")
                                    } catch (t) {
                                        s.PublicLogger.error(t)
                                    }
                                }
                            }
                        }, t.prototype.linkClickHandler = function () {
                            if (this.tooltip) {
                                var t = this.tooltip.getAttribute("current-href");
                                t && window.location.assign(t)
                            }
                        }, t.prototype.handleUserChange = function (t) {
                            this.config.stackSdk.live_preview = n(n(n({}, this.config.stackSdk.live_preview), t), {live_preview: t.hash}), this.config.onChange()
                        }, t.prototype.setOnChangeCallback = function (t) {
                            this.config.onChange = t
                        }, Object.defineProperty(t.prototype, "hash", {
                            get: function () {
                                return this.config.hash
                            }, enumerable: !1, configurable: !0
                        }), t.prototype.setConfigFromParams = function (t) {
                            if (void 0 === t && (t = {}), "object" != typeof t) throw new TypeError("Live preview SDK: query param must be an object");
                            var e = new URLSearchParams(t).get("live_preview");
                            e && (this.config.hash = e)
                        }, t.prototype.resolveIncomingMessage = function (t) {
                            var e = this;
                            if ("object" == typeof t.data && "live-preview" === t.data.from) switch (t.data.type) {
                                case"client-data-send":
                                    var i = this.config.stackDetails, n = i.contentTypeUid, r = i.entryUid,
                                        o = t.data.data.hash;
                                    if (this.setConfigFromParams({live_preview: o}), this.config.ssr) {
                                        var s = new URL(window.location.href);
                                        s.searchParams.append("live_preview", o), s.searchParams.append("content_type_uid", n), s.searchParams.append("entry_uid", r), fetch(s.toString(), {method: "GET"}).then((function (t) {
                                            return t.text()
                                        })).then((function (t) {
                                            (0, u.updateDocumentBody)(document, t, {
                                                onPostOperation: e.createCslpTooltip,
                                                shouldReRunScripts: e.config.runScriptsOnUpdate
                                            })
                                        }))
                                    } else this.handleUserChange({content_type_uid: n, entry_uid: r, hash: o});
                                    break;
                                case"init-ack":
                                    var a = t.data.data;
                                    n = a.contentTypeUid, r = a.entryUid, this.config.stackDetails.contentTypeUid = n, this.config.stackDetails.entryUid = r;
                                    break;
                                case"history":
                                    switch (t.data.data.type) {
                                        case"forward":
                                            window.history.forward();
                                            break;
                                        case"backward":
                                            window.history.back();
                                            break;
                                        case"reload":
                                            window.history.go()
                                    }
                                    break;
                                case"document-body-post-scripts-loaded":
                                    var l = t.data.data.body;
                                    (0, u.replaceDocumentBody)(l, this.createCslpTooltip)
                            }
                        }, t.prototype.requestDataSync = function () {
                            this.handleUserChange({live_preview: "init"}), this.createCslpTooltip(), window.parent.postMessage({
                                from: "live-preview",
                                type: "init",
                                data: {
                                    config: {
                                        shouldReload: this.config.ssr,
                                        href: window.location.href,
                                        sdkVersion: c.default.version
                                    }
                                }
                            }, "*"), this.config.ssr || setInterval((function () {
                                window.parent.postMessage({
                                    from: "live-preview",
                                    type: "check-entry-page",
                                    data: {href: window.location.href}
                                }, "*")
                            }), 1500)
                        }, t.prototype.updateTooltipPosition = function () {
                            var t;
                            if (!this.currentElementBesideTooltip || !this.tooltip) return !1;
                            var e = this.currentElementBesideTooltip.getBoundingClientRect(),
                                i = null === (t = this.tooltip.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect();
                            if (e && i) {
                                var n = (0, o.getEditButtonPosition)(this.currentElementBesideTooltip, this.config.editButton.position),
                                    r = n.upperBoundOfTooltip, s = n.leftBoundOfTooltip;
                                return r < 0 && (r = e.top < 0 ? e.top : 0), this.tooltip.style.top = r + "px", this.tooltip.style.zIndex = this.currentElementBesideTooltip.style.zIndex || "200", this.tooltip.style.left = s + "px", this.tooltipChild.singular && this.tooltipChild.multiple && (this.currentElementBesideTooltip.hasAttribute("href") ? "multiple" !== this.tooltipCurrentChild && (this.tooltip.innerHTML = "", this.tooltip.appendChild(this.tooltipChild.multiple), this.tooltipCurrentChild = "multiple") : "singular" !== this.tooltipCurrentChild && (this.tooltip.innerHTML = "", this.tooltip.appendChild(this.tooltipChild.singular), this.tooltipCurrentChild = "singular")), !0
                            }
                            return !1
                        }, t.prototype.removeDataCslp = function () {
                            document.querySelectorAll("[data-cslp]").forEach((function (t) {
                                t.removeAttribute("data-cslp"), t.removeAttribute("data-cslp-button-position")
                            }))
                        }, t
                    }();
                    e.default = d
                }, 334: (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.userInitData = void 0, e.userInitData = {
                        ssr: !0,
                        enable: !0,
                        cleanCslpOnProduction: !0,
                        editButton: {enable: !0, exclude: [], position: "top", includeByQueryParameter: !0},
                        stackDetails: {apiKey: "", environment: ""},
                        clientUrlParams: {protocol: "https", host: "app.contentstack.com", port: 443},
                        stackSdk: {live_preview: {}, headers: {api_key: ""}, environment: ""},
                        runScriptsOnUpdate: !1
                    }
                }, 383: (t, e, i) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.handleUserConfig = e.handleInitData = void 0;
                    var n = i(928), r = i(895), o = function (t, e) {
                        var i, n, r;
                        if (t.clientUrlParams.host = null !== (i = e.host) && void 0 !== i ? i : t.clientUrlParams.host, t.clientUrlParams.protocol = null !== (n = e.protocol) && void 0 !== n ? n : t.clientUrlParams.protocol, t.clientUrlParams.port = null !== (r = e.port) && void 0 !== r ? r : t.clientUrlParams.port, void 0 !== e.protocol && void 0 === e.port) switch (e.protocol) {
                            case"http":
                                t.clientUrlParams.port = 80;
                                break;
                            case"https":
                                t.clientUrlParams.port = 443
                        }
                        var o = t.clientUrlParams.host;
                        o.endsWith("/") && (o = o.slice(0, -1), t.clientUrlParams.host = o), t.clientUrlParams.url = "".concat(t.clientUrlParams.protocol, "://").concat(t.clientUrlParams.host, ":").concat(t.clientUrlParams.port)
                    };

                    function s(t) {
                        return Object.prototype.hasOwnProperty.call(t, "cachePolicy")
                    }

                    e.handleInitData = function (t, e) {
                        var i, a, l, c, u, d, h, p, f, v, g, m, y, w, b, C, k, S, L, P, _, T, x, A, O, E, B, D, U, z, M,
                            I, R, j, N, H, F, V, G, W, K, q, Z, $, Q, Y, X, J, tt, et, it, nt, rt, ot, st, at, lt, ct;
                        if (s(t)) {
                            r.PublicLogger.warn("Deprecated: Do not pass the Stack object directly to the Live Preview SDK. Pass it using the config.stackSDK config object.");
                            var ut = (null == t ? void 0 : t.live_preview) || {};
                            e.ssr = !1, e.runScriptsOnUpdate = null !== (i = ut.runScriptsOnUpdate) && void 0 !== i ? i : e.runScriptsOnUpdate, e.enable = null !== (a = ut.enable) && void 0 !== a ? a : e.enable, e.cleanCslpOnProduction = null !== (l = ut.cleanCslpOnProduction) && void 0 !== l ? l : e.cleanCslpOnProduction, e.editButton = {
                                enable: (0, n.shouldRenderEditButton)(null !== (c = ut.editButton) && void 0 !== c ? c : e.editButton),
                                exclude: Array.isArray(null === (u = ut.editButton) || void 0 === u ? void 0 : u.exclude) && (null === (d = ut.editButton) || void 0 === d ? void 0 : d.exclude) ? null === (h = ut.editButton) || void 0 === h ? void 0 : h.exclude : null !== (p = e.editButton.exclude) && void 0 !== p ? p : [],
                                position: null !== (g = null !== (v = null === (f = ut.editButton) || void 0 === f ? void 0 : f.position) && void 0 !== v ? v : e.editButton.position) && void 0 !== g ? g : "top",
                                includeByQueryParameter: null === (w = null !== (y = null === (m = ut.editButton) || void 0 === m ? void 0 : m.includeByQueryParameter) && void 0 !== y ? y : e.editButton.includeByQueryParameter) || void 0 === w || w
                            }, e.stackSdk = t, Object.prototype.hasOwnProperty.call(t.headers, "api_key") && t.headers.api_key && (e.stackDetails.apiKey = t.headers.api_key), Object.prototype.hasOwnProperty.call(t, "environment") && (e.stackDetails.environment = t.environment), o(e, null !== (b = ut.clientUrlParams) && void 0 !== b ? b : e.clientUrlParams)
                        } else if (!s(t)) {
                            var dt = t.stackSdk || e.stackSdk;
                            e.enable = null !== (S = null !== (C = t.enable) && void 0 !== C ? C : null === (k = dt.live_preview) || void 0 === k ? void 0 : k.enable) && void 0 !== S ? S : e.enable, e.ssr = null === (T = null !== (_ = null !== (L = t.ssr) && void 0 !== L ? L : null === (P = dt.live_preview) || void 0 === P ? void 0 : P.ssr) && void 0 !== _ ? _ : "object" != typeof t.stackSdk) || void 0 === T || T, e.runScriptsOnUpdate = null !== (O = null !== (x = t.runScriptsOnUpdate) && void 0 !== x ? x : null === (A = dt.live_preview) || void 0 === A ? void 0 : A.runScriptsOnUpdate) && void 0 !== O ? O : e.runScriptsOnUpdate, e.stackSdk = dt, e.cleanCslpOnProduction = null !== (D = null !== (E = t.cleanCslpOnProduction) && void 0 !== E ? E : null === (B = dt.live_preview) || void 0 === B ? void 0 : B.cleanCslpOnProduction) && void 0 !== D ? D : e.cleanCslpOnProduction, e.editButton = {
                                enable: (0, n.shouldRenderEditButton)(null !== (M = null !== (U = t.editButton) && void 0 !== U ? U : null === (z = dt.live_preview) || void 0 === z ? void 0 : z.editButton) && void 0 !== M ? M : e.editButton),
                                exclude: Array.isArray(null === (I = t.editButton) || void 0 === I ? void 0 : I.exclude) && (null === (R = t.editButton) || void 0 === R ? void 0 : R.exclude) ? null === (j = t.editButton) || void 0 === j ? void 0 : j.exclude : Array.isArray(null === (N = dt.live_preview) || void 0 === N ? void 0 : N.exclude) && (null === (H = dt.live_preview) || void 0 === H ? void 0 : H.exclude) ? null === (F = dt.live_preview) || void 0 === F ? void 0 : F.exclude : null !== (V = e.editButton.exclude) && void 0 !== V ? V : [],
                                position: null !== (Z = null !== (q = null !== (W = null === (G = t.editButton) || void 0 === G ? void 0 : G.position) && void 0 !== W ? W : null === (K = dt.live_preview) || void 0 === K ? void 0 : K.position) && void 0 !== q ? q : e.editButton.position) && void 0 !== Z ? Z : "top",
                                includeByQueryParameter: null === (J = null !== (X = null !== (Q = null === ($ = t.editButton) || void 0 === $ ? void 0 : $.includeByQueryParameter) && void 0 !== Q ? Q : null === (Y = dt.live_preview) || void 0 === Y ? void 0 : Y.includeByQueryParameter) && void 0 !== X ? X : e.editButton.includeByQueryParameter) || void 0 === J || J
                            }, e.stackDetails.apiKey = null !== (nt = null !== (et = null === (tt = t.stackDetails) || void 0 === tt ? void 0 : tt.apiKey) && void 0 !== et ? et : null === (it = dt.headers) || void 0 === it ? void 0 : it.api_key) && void 0 !== nt ? nt : e.stackDetails.apiKey, e.stackDetails.environment = null !== (st = null !== (ot = null === (rt = t.stackDetails) || void 0 === rt ? void 0 : rt.environment) && void 0 !== ot ? ot : dt.environment) && void 0 !== st ? st : e.stackDetails.environment, o(e, null !== (ct = null !== (at = t.clientUrlParams) && void 0 !== at ? at : null === (lt = dt.live_preview) || void 0 === lt ? void 0 : lt.clientUrlParams) && void 0 !== ct ? ct : e.clientUrlParams)
                        }
                    }, e.handleUserConfig = {clientUrlParams: o}
                }, 928: (t, e, i) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.getEditButtonPosition = e.shouldRenderEditButton = e.addLivePreviewQueryTags = e.createMultipleEditButton = e.createSingularEditButton = e.tooltipMultipleInnerHtml = e.tooltipSingularInnerHtml = e.hasWindow = void 0;
                    var n = i(895);

                    function r() {
                        return window.location !== window.parent.location
                    }

                    e.hasWindow = function () {
                        return "undefined" != typeof window
                    }, e.tooltipSingularInnerHtml = '<div class="singular edit-button">\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>\n      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>\n    </svg>Edit\n  </div>', e.tooltipMultipleInnerHtml = '<div class="edit-button" title="edit">\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>\n      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>\n    </svg>\n  </div>\n  <div title="click element" class="external-link-button">\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.66654 2.66758H13.3332V13.3342H6.66654V16.0009H13.3332C14.0405 16.0009 14.7187 15.72 15.2188 15.2199C15.7189 14.7198 15.9999 14.0415 15.9999 13.3342V2.66758C15.9999 1.96034 15.7189 1.28206 15.2188 0.781964C14.7187 0.281867 14.0405 0.000915527 13.3332 0.000915527H2.66654C1.9593 0.000915527 1.28102 0.281867 0.780927 0.781964C0.280829 1.28206 -0.00012207 1.96034 -0.00012207 2.66758V9.33425H2.66654V2.66758Z" fill="#718096" />\n      <path d="M6.94263 7.05734L0.999958 13L2.88529 14.8853L8.82796 8.94267L10.8853 11V5.00001H4.88529L6.94263 7.05734Z" fill="#718096" />\n    </svg>\n  </div>', e.createSingularEditButton = function (t) {
                        var e = document.createElement("div");
                        return e.classList.add("cslp-tooltip-child", "singular"), e.setAttribute("data-test-id", "cslp-singular-edit-button"), e.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>\n      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>\n    </svg>Edit', e.addEventListener("click", t), e
                    }, e.createMultipleEditButton = function (t, e) {
                        var i = document.createElement("div");
                        i.classList.add("cslp-tooltip-child"), i.setAttribute("data-title", "Edit"), i.setAttribute("data-test-id", "cslp-multiple-edit-button"), i.innerHTML = ' <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>\n      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>\n    </svg>', i.addEventListener("click", t);
                        var n = document.createElement("div");
                        n.classList.add("cslp-tooltip-child"), n.setAttribute("data-title", "Go to link"), n.setAttribute("data-test-id", "cslp-multiple-external-link-button"), n.innerHTML = ' <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.66654 2.66758H13.3332V13.3342H6.66654V16.0009H13.3332C14.0405 16.0009 14.7187 15.72 15.2188 15.2199C15.7189 14.7198 15.9999 14.0415 15.9999 13.3342V2.66758C15.9999 1.96034 15.7189 1.28206 15.2188 0.781964C14.7187 0.281867 14.0405 0.000915527 13.3332 0.000915527H2.66654C1.9593 0.000915527 1.28102 0.281867 0.780927 0.781964C0.280829 1.28206 -0.00012207 1.96034 -0.00012207 2.66758V9.33425H2.66654V2.66758Z" fill="#718096" />\n      <path d="M6.94263 7.05734L0.999958 13L2.88529 14.8853L8.82796 8.94267L10.8853 11V5.00001H4.88529L6.94263 7.05734Z" fill="#718096" />\n    </svg>', n.addEventListener("click", e);
                        var r = document.createDocumentFragment();
                        r.appendChild(i), r.appendChild(n);
                        var o = document.createElement("div");
                        return o.appendChild(r), o.classList.add("multiple"), o
                    }, e.addLivePreviewQueryTags = function (t) {
                        try {
                            var e = new URL(document.location.href), i = new URL(t),
                                r = e.searchParams.get("live_preview"), o = e.searchParams.get("content_type_uid"),
                                s = e.searchParams.get("entry_uid");
                            return r && o && s && (i.searchParams.set("live_preview", r), i.searchParams.set("content_type_uid", o), i.searchParams.set("entry_uid", s)), i.href
                        } catch (e) {
                            return n.PublicLogger.error("Error while adding live preview to URL"), t
                        }
                    }, e.shouldRenderEditButton = function (t) {
                        var e, i;
                        if (!t.enable) return void 0 === t.enable && n.PublicLogger.error("enable key is required inside editButton object"), !1;
                        try {
                            var o = new URL(window.location.href).searchParams.get("cslp-buttons");
                            if (null !== o && !1 !== t.includeByQueryParameter) return "false" !== o
                        } catch (t) {
                            n.PublicLogger.error(t)
                        }
                        return !(r() && (null === (e = t.exclude) || void 0 === e ? void 0 : e.find((function (t) {
                            return "insideLivePreviewPortal" === t
                        }))) || !r() && (null === (i = t.exclude) || void 0 === i ? void 0 : i.find((function (t) {
                            return "outsideLivePreviewPortal" === t
                        }))))
                    }, e.getEditButtonPosition = function (t, e) {
                        if (!t) return {upperBoundOfTooltip: 0, leftBoundOfTooltip: 0};
                        var i = t.getAttribute("data-cslp-button-position");
                        return function (t, e) {
                            var i = {upperBoundOfTooltip: 0, leftBoundOfTooltip: 0}, r = t.getBoundingClientRect();
                            try {
                                var o = {width: 72, halfWidth: 36, height: 40, basicMargin: 5, widthWithMargin: 77};
                                switch (e) {
                                    case"top-center":
                                        i.upperBoundOfTooltip = r.top - o.height, i.leftBoundOfTooltip = r.width / 2 - o.halfWidth + r.left;
                                        break;
                                    case"top-right":
                                        i.upperBoundOfTooltip = r.top - o.height, i.leftBoundOfTooltip = r.right - o.width;
                                        break;
                                    case"right":
                                        i.upperBoundOfTooltip = r.top - o.basicMargin, i.leftBoundOfTooltip = r.right + o.basicMargin;
                                        break;
                                    case"bottom":
                                    case"bottom-left":
                                        i.upperBoundOfTooltip = r.bottom + o.basicMargin, i.leftBoundOfTooltip = r.left - o.basicMargin;
                                        break;
                                    case"bottom-center":
                                        i.upperBoundOfTooltip = r.bottom + o.basicMargin, i.leftBoundOfTooltip = r.width / 2 - o.halfWidth + r.left;
                                        break;
                                    case"bottom-right":
                                        i.upperBoundOfTooltip = r.bottom + o.basicMargin, i.leftBoundOfTooltip = r.right - o.width;
                                        break;
                                    case"left":
                                        i.upperBoundOfTooltip = r.top - o.basicMargin, i.leftBoundOfTooltip = r.left - o.widthWithMargin;
                                        break;
                                    default:
                                        i.upperBoundOfTooltip = r.top - o.height, i.leftBoundOfTooltip = r.left - o.basicMargin
                                }
                                return i
                            } catch (t) {
                                return n.PublicLogger.error(t), i
                            }
                        }(t, i || e || "top")
                    }
                }, 895: function (t, e) {
                    "use strict";
                    var i = this && this.__spreadArray || function (t, e, i) {
                        if (i || 2 === arguments.length) for (var n, r = 0, o = e.length; r < o; r++) !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    };
                    Object.defineProperty(e, "__esModule", {value: !0}), e.PublicLogger = void 0;
                    var n = function () {
                        function t() {
                        }

                        return t.logEvent = function (t, e) {
                            t.apply(void 0, i(["Live_Preview_SDK:"], e, !1))
                        }, t.error = function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.logEvent(console.error, t)
                        }, t.warn = function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.logEvent(console.warn, t)
                        }, t.debug = function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.logEvent(console.debug, t)
                        }, t
                    }();
                    e.PublicLogger = n
                }, 63: function (t, e, i) {
                    "use strict";
                    var n = this && this.__awaiter || function (t, e, i, n) {
                        return new (i || (i = Promise))((function (r, o) {
                            function s(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                    t(e)
                                }))).then(s, a)
                            }

                            l((n = n.apply(t, e || [])).next())
                        }))
                    }, r = this && this.__generator || function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(a) {
                            return function (l) {
                                return function (a) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                        if (i = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                                        switch (n = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return s.label++, {value: a[1], done: !1};
                                            case 5:
                                                s.label++, n = a[1], a = [0];
                                                continue;
                                            case 7:
                                                a = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    s.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && s.label < r[1]) {
                                                    s.label = r[1], r = a;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(a);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        a = e.call(t, s)
                                    } catch (t) {
                                        a = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & a[0]) throw a[1];
                                    return {value: a[0] ? a[1] : void 0, done: !0}
                                }([a, l])
                            }
                        }
                    }, o = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {default: t}
                    };
                    Object.defineProperty(e, "__esModule", {value: !0}), e.replaceDocumentBody = e.updateDocumentBody = e.rerunScriptsInDocument = void 0;
                    var s = o(i(492));

                    function a() {
                        var t = document.querySelectorAll("script"), e = t.length, i = 0;

                        function n() {
                            i++, 0 == --e && window.parent.postMessage({
                                from: "live-preview",
                                type: "document-body-post-scripts-loaded",
                                data: {body: document.body.outerHTML}
                            }, "*"), r()
                        }

                        function r() {
                            if (i < t.length) {
                                var e = t[i], r = e.parentNode, o = document.createElement("script");
                                e.src ? (o.onerror = n, o.onload = n, o.src = e.src) : (o.text = e.text, n()), null == r || r.replaceChild(o, e)
                            }
                        }

                        t.length && r()
                    }

                    function l(t, e) {
                        var i = (new DOMParser).parseFromString(t, "text/html");
                        (0, s.default)(document.body, i.body), e && e()
                    }

                    e.rerunScriptsInDocument = a, e.updateDocumentBody = function (t, e, i) {
                        return n(this, void 0, void 0, (function () {
                            var n, o, s, c, u;
                            return r(this, (function (r) {
                                return n = i.shouldReRunScripts, o = i.onPostOperation, n ? (t.querySelectorAll("iframe#contentstack-live-preview-iframe").forEach((function (t) {
                                    t.remove()
                                })), (s = t.createElement("iframe")).style.display = "none", s.id = "contentstack-live-preview-iframe", c = /(<\s*\/\s*script\s*>)|(`)/gm, u = e.replace(c, (function (t, e, i) {
                                    return i ? "\\`" : "<\\/script>"
                                })), s.srcdoc = "\n        <head>\n        <script>\n            function prepareIframeForScriptRerun() {\n                const responseHTML = `".concat(u, '`;\n\n                const html = document.getElementsByTagName("html").item(0);\n\n                const rerunScriptsInDocument = ').concat(a, "\n\n                if (html) {\n                    html.innerHTML = responseHTML;\n                    rerunScriptsInDocument();\n                }\n            }\n            prepareIframeForScriptRerun()\n        <\/script>\n        </head>"), t.body.appendChild(s)) : l(e, o), [2]
                            }))
                        }))
                    }, e.replaceDocumentBody = l
                }, 614: (t, e, i) => {
                    "use strict";
                    var n;
                    i.r(e), i.d(e, {
                        NIL: () => O,
                        parse: () => g,
                        stringify: () => u,
                        v1: () => v,
                        v3: () => P,
                        v4: () => _,
                        v5: () => A,
                        validate: () => a,
                        version: () => E
                    });
                    var r = new Uint8Array(16);

                    function o() {
                        if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return n(r)
                    }

                    const s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                        a = function (t) {
                            return "string" == typeof t && s.test(t)
                        };
                    for (var l = [], c = 0; c < 256; ++c) l.push((c + 256).toString(16).substr(1));
                    const u = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = (l[t[e + 0]] + l[t[e + 1]] + l[t[e + 2]] + l[t[e + 3]] + "-" + l[t[e + 4]] + l[t[e + 5]] + "-" + l[t[e + 6]] + l[t[e + 7]] + "-" + l[t[e + 8]] + l[t[e + 9]] + "-" + l[t[e + 10]] + l[t[e + 11]] + l[t[e + 12]] + l[t[e + 13]] + l[t[e + 14]] + l[t[e + 15]]).toLowerCase();
                        if (!a(i)) throw TypeError("Stringified UUID is invalid");
                        return i
                    };
                    var d, h, p = 0, f = 0;
                    const v = function (t, e, i) {
                        var n = e && i || 0, r = e || new Array(16), s = (t = t || {}).node || d,
                            a = void 0 !== t.clockseq ? t.clockseq : h;
                        if (null == s || null == a) {
                            var l = t.random || (t.rng || o)();
                            null == s && (s = d = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]), null == a && (a = h = 16383 & (l[6] << 8 | l[7]))
                        }
                        var c = void 0 !== t.msecs ? t.msecs : Date.now(), v = void 0 !== t.nsecs ? t.nsecs : f + 1,
                            g = c - p + (v - f) / 1e4;
                        if (g < 0 && void 0 === t.clockseq && (a = a + 1 & 16383), (g < 0 || c > p) && void 0 === t.nsecs && (v = 0), v >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        p = c, f = v, h = a;
                        var m = (1e4 * (268435455 & (c += 122192928e5)) + v) % 4294967296;
                        r[n++] = m >>> 24 & 255, r[n++] = m >>> 16 & 255, r[n++] = m >>> 8 & 255, r[n++] = 255 & m;
                        var y = c / 4294967296 * 1e4 & 268435455;
                        r[n++] = y >>> 8 & 255, r[n++] = 255 & y, r[n++] = y >>> 24 & 15 | 16, r[n++] = y >>> 16 & 255, r[n++] = a >>> 8 | 128, r[n++] = 255 & a;
                        for (var w = 0; w < 6; ++w) r[n + w] = s[w];
                        return e || u(r)
                    }, g = function (t) {
                        if (!a(t)) throw TypeError("Invalid UUID");
                        var e, i = new Uint8Array(16);
                        return i[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, i[1] = e >>> 16 & 255, i[2] = e >>> 8 & 255, i[3] = 255 & e, i[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, i[5] = 255 & e, i[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, i[7] = 255 & e, i[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, i[9] = 255 & e, i[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, i[11] = e / 4294967296 & 255, i[12] = e >>> 24 & 255, i[13] = e >>> 16 & 255, i[14] = e >>> 8 & 255, i[15] = 255 & e, i
                    };

                    function m(t, e, i) {
                        function n(t, n, r, o) {
                            if ("string" == typeof t && (t = function (t) {
                                t = unescape(encodeURIComponent(t));
                                for (var e = [], i = 0; i < t.length; ++i) e.push(t.charCodeAt(i));
                                return e
                            }(t)), "string" == typeof n && (n = g(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                            var s = new Uint8Array(16 + t.length);
                            if (s.set(n), s.set(t, n.length), (s = i(s))[6] = 15 & s[6] | e, s[8] = 63 & s[8] | 128, r) {
                                o = o || 0;
                                for (var a = 0; a < 16; ++a) r[o + a] = s[a];
                                return r
                            }
                            return u(s)
                        }

                        try {
                            n.name = t
                        } catch (t) {
                        }
                        return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
                    }

                    function y(t) {
                        return 14 + (t + 64 >>> 9 << 4) + 1
                    }

                    function w(t, e) {
                        var i = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
                    }

                    function b(t, e, i, n, r, o) {
                        return w((s = w(w(e, t), w(n, o))) << (a = r) | s >>> 32 - a, i);
                        var s, a
                    }

                    function C(t, e, i, n, r, o, s) {
                        return b(e & i | ~e & n, t, e, r, o, s)
                    }

                    function k(t, e, i, n, r, o, s) {
                        return b(e & n | i & ~n, t, e, r, o, s)
                    }

                    function S(t, e, i, n, r, o, s) {
                        return b(e ^ i ^ n, t, e, r, o, s)
                    }

                    function L(t, e, i, n, r, o, s) {
                        return b(i ^ (e | ~n), t, e, r, o, s)
                    }

                    const P = m("v3", 48, (function (t) {
                        if ("string" == typeof t) {
                            var e = unescape(encodeURIComponent(t));
                            t = new Uint8Array(e.length);
                            for (var i = 0; i < e.length; ++i) t[i] = e.charCodeAt(i)
                        }
                        return function (t) {
                            for (var e = [], i = 32 * t.length, n = "0123456789abcdef", r = 0; r < i; r += 8) {
                                var o = t[r >> 5] >>> r % 32 & 255,
                                    s = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(15 & o), 16);
                                e.push(s)
                            }
                            return e
                        }(function (t, e) {
                            t[e >> 5] |= 128 << e % 32, t[y(e) - 1] = e;
                            for (var i = 1732584193, n = -271733879, r = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
                                var a = i, l = n, c = r, u = o;
                                i = C(i, n, r, o, t[s], 7, -680876936), o = C(o, i, n, r, t[s + 1], 12, -389564586), r = C(r, o, i, n, t[s + 2], 17, 606105819), n = C(n, r, o, i, t[s + 3], 22, -1044525330), i = C(i, n, r, o, t[s + 4], 7, -176418897), o = C(o, i, n, r, t[s + 5], 12, 1200080426), r = C(r, o, i, n, t[s + 6], 17, -1473231341), n = C(n, r, o, i, t[s + 7], 22, -45705983), i = C(i, n, r, o, t[s + 8], 7, 1770035416), o = C(o, i, n, r, t[s + 9], 12, -1958414417), r = C(r, o, i, n, t[s + 10], 17, -42063), n = C(n, r, o, i, t[s + 11], 22, -1990404162), i = C(i, n, r, o, t[s + 12], 7, 1804603682), o = C(o, i, n, r, t[s + 13], 12, -40341101), r = C(r, o, i, n, t[s + 14], 17, -1502002290), i = k(i, n = C(n, r, o, i, t[s + 15], 22, 1236535329), r, o, t[s + 1], 5, -165796510), o = k(o, i, n, r, t[s + 6], 9, -1069501632), r = k(r, o, i, n, t[s + 11], 14, 643717713), n = k(n, r, o, i, t[s], 20, -373897302), i = k(i, n, r, o, t[s + 5], 5, -701558691), o = k(o, i, n, r, t[s + 10], 9, 38016083), r = k(r, o, i, n, t[s + 15], 14, -660478335), n = k(n, r, o, i, t[s + 4], 20, -405537848), i = k(i, n, r, o, t[s + 9], 5, 568446438), o = k(o, i, n, r, t[s + 14], 9, -1019803690), r = k(r, o, i, n, t[s + 3], 14, -187363961), n = k(n, r, o, i, t[s + 8], 20, 1163531501), i = k(i, n, r, o, t[s + 13], 5, -1444681467), o = k(o, i, n, r, t[s + 2], 9, -51403784), r = k(r, o, i, n, t[s + 7], 14, 1735328473), i = S(i, n = k(n, r, o, i, t[s + 12], 20, -1926607734), r, o, t[s + 5], 4, -378558), o = S(o, i, n, r, t[s + 8], 11, -2022574463), r = S(r, o, i, n, t[s + 11], 16, 1839030562), n = S(n, r, o, i, t[s + 14], 23, -35309556), i = S(i, n, r, o, t[s + 1], 4, -1530992060), o = S(o, i, n, r, t[s + 4], 11, 1272893353), r = S(r, o, i, n, t[s + 7], 16, -155497632), n = S(n, r, o, i, t[s + 10], 23, -1094730640), i = S(i, n, r, o, t[s + 13], 4, 681279174), o = S(o, i, n, r, t[s], 11, -358537222), r = S(r, o, i, n, t[s + 3], 16, -722521979), n = S(n, r, o, i, t[s + 6], 23, 76029189), i = S(i, n, r, o, t[s + 9], 4, -640364487), o = S(o, i, n, r, t[s + 12], 11, -421815835), r = S(r, o, i, n, t[s + 15], 16, 530742520), i = L(i, n = S(n, r, o, i, t[s + 2], 23, -995338651), r, o, t[s], 6, -198630844), o = L(o, i, n, r, t[s + 7], 10, 1126891415), r = L(r, o, i, n, t[s + 14], 15, -1416354905), n = L(n, r, o, i, t[s + 5], 21, -57434055), i = L(i, n, r, o, t[s + 12], 6, 1700485571), o = L(o, i, n, r, t[s + 3], 10, -1894986606), r = L(r, o, i, n, t[s + 10], 15, -1051523), n = L(n, r, o, i, t[s + 1], 21, -2054922799), i = L(i, n, r, o, t[s + 8], 6, 1873313359), o = L(o, i, n, r, t[s + 15], 10, -30611744), r = L(r, o, i, n, t[s + 6], 15, -1560198380), n = L(n, r, o, i, t[s + 13], 21, 1309151649), i = L(i, n, r, o, t[s + 4], 6, -145523070), o = L(o, i, n, r, t[s + 11], 10, -1120210379), r = L(r, o, i, n, t[s + 2], 15, 718787259), n = L(n, r, o, i, t[s + 9], 21, -343485551), i = w(i, a), n = w(n, l), r = w(r, c), o = w(o, u)
                            }
                            return [i, n, r, o]
                        }(function (t) {
                            if (0 === t.length) return [];
                            for (var e = 8 * t.length, i = new Uint32Array(y(e)), n = 0; n < e; n += 8) i[n >> 5] |= (255 & t[n / 8]) << n % 32;
                            return i
                        }(t), 8 * t.length))
                    })), _ = function (t, e, i) {
                        var n = (t = t || {}).random || (t.rng || o)();
                        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                            i = i || 0;
                            for (var r = 0; r < 16; ++r) e[i + r] = n[r];
                            return e
                        }
                        return u(n)
                    };

                    function T(t, e, i, n) {
                        switch (t) {
                            case 0:
                                return e & i ^ ~e & n;
                            case 1:
                            case 3:
                                return e ^ i ^ n;
                            case 2:
                                return e & i ^ e & n ^ i & n
                        }
                    }

                    function x(t, e) {
                        return t << e | t >>> 32 - e
                    }

                    const A = m("v5", 80, (function (t) {
                        var e = [1518500249, 1859775393, 2400959708, 3395469782],
                            i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                        if ("string" == typeof t) {
                            var n = unescape(encodeURIComponent(t));
                            t = [];
                            for (var r = 0; r < n.length; ++r) t.push(n.charCodeAt(r))
                        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
                        t.push(128);
                        for (var o = t.length / 4 + 2, s = Math.ceil(o / 16), a = new Array(s), l = 0; l < s; ++l) {
                            for (var c = new Uint32Array(16), u = 0; u < 16; ++u) c[u] = t[64 * l + 4 * u] << 24 | t[64 * l + 4 * u + 1] << 16 | t[64 * l + 4 * u + 2] << 8 | t[64 * l + 4 * u + 3];
                            a[l] = c
                        }
                        a[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (t.length - 1) & 4294967295;
                        for (var d = 0; d < s; ++d) {
                            for (var h = new Uint32Array(80), p = 0; p < 16; ++p) h[p] = a[d][p];
                            for (var f = 16; f < 80; ++f) h[f] = x(h[f - 3] ^ h[f - 8] ^ h[f - 14] ^ h[f - 16], 1);
                            for (var v = i[0], g = i[1], m = i[2], y = i[3], w = i[4], b = 0; b < 80; ++b) {
                                var C = Math.floor(b / 20), k = x(v, 5) + T(C, g, m, y) + w + e[C] + h[b] >>> 0;
                                w = y, y = m, m = x(g, 30) >>> 0, g = v, v = k
                            }
                            i[0] = i[0] + v >>> 0, i[1] = i[1] + g >>> 0, i[2] = i[2] + m >>> 0, i[3] = i[3] + y >>> 0, i[4] = i[4] + w >>> 0
                        }
                        return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, 255 & i[0], i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, 255 & i[1], i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, 255 & i[2], i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, 255 & i[3], i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, 255 & i[4]]
                    })), O = "00000000-0000-0000-0000-000000000000", E = function (t) {
                        if (!a(t)) throw TypeError("Invalid UUID");
                        return parseInt(t.substr(14, 1), 16)
                    }
                }, 147: t => {
                    "use strict";
                    t.exports = JSON.parse('{"name":"@contentstack/live-preview-utils","version":"1.4.0","types":"dist/src/index.d.ts","description":"Contentstack provides the Live Preview SDK to establish a communication channel between the various Contentstack SDKs and your website, transmitting  live changes to the preview pane.","main":"dist/index.js","files":["dist"],"scripts":{"build":"webpack --config webpack.prod.js","test":"jest","test:coverage":"jest src --coverage --watchAll --coverageDirectory=\\"coverage\\"","dev":"webpack --config webpack.dev.js","prepare":"npm run build && husky install","lint":"eslint src","lint:fix":"eslint --fix","prettier":"prettier src --check","prettier:fix":"prettier src --write","format":"npm run prettier:fix && npm run lint:fix","docs":"typedoc --out docs --entryPointStrategy expand ./src"},"keywords":["live-preview"],"author":"Contentstack","license":"MIT","devDependencies":{"@babel/core":"^7.2.2","@babel/preset-env":"^7.3.1","@testing-library/jest-dom":"^5.14.1","@types/jest":"^27.0.1","@types/mustache":"^4.2.2","@types/uuid":"^8.3.1","@typescript-eslint/eslint-plugin":"^4.31.1","@typescript-eslint/parser":"^4.31.1","babel-loader":"^8.0.5","css-loader":"^5.2.2","eslint":"^7.32.0","eslint-config-prettier":"^8.6.0","husky":"^8.0.0","jest":"^27.2.0","jest-fetch-mock":"^3.0.3","mini-css-extract-plugin":"^2.3.0","prettier":"^2.8.4","prettier-eslint":"^15.0.1","style-loader":"^2.0.0","ts-jest":"^27.0.5","ts-loader":"^9.4.2","typedoc":"^0.23.25","typescript":"^4.4.3","webpack":"^5.53.0","webpack-cli":"^4.8.0","webpack-dev-server":"^4.7.4","webpack-merge":"^5.8.0"},"repository":{"type":"git","url":"https://github.com/contentstack/live-preview-sdk.git"},"dependencies":{"just-camel-case":"^4.0.2","morphdom":"^2.6.1","mustache":"^4.2.0","uuid":"^8.3.2"},"lint-staged":{"src/**/*.{ts,css,md}":["npm run prettier:fix"]}}')
                }
            }, e = {};

            function i(n) {
                var r = e[n];
                if (void 0 !== r) return r.exports;
                var o = e[n] = {exports: {}};
                return t[n].call(o.exports, o, o.exports, i), o.exports
            }

            return i.d = (t, e) => {
                for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
            }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            }, i(607)
        })(), t.exports = e()
    }, 39593: function (t, e, i) {
        var n = i(83454);
        const r = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
            o = "function" === typeof AbortController ? AbortController : class {
                constructor() {
                    this.signal = new l
                }

                abort() {
                    this.signal.dispatchEvent("abort")
                }
            }, s = "function" === typeof AbortSignal, a = "function" === typeof o.AbortSignal,
            l = s ? AbortSignal : a ? o.AbortController : class {
                constructor() {
                    this.aborted = !1, this._listeners = []
                }

                dispatchEvent(t) {
                    if ("abort" === t) {
                        this.aborted = !0;
                        const e = {type: t, target: this};
                        this.onabort(e), this._listeners.forEach((t => t(e)), this)
                    }
                }

                onabort() {
                }

                addEventListener(t, e) {
                    "abort" === t && this._listeners.push(e)
                }

                removeEventListener(t, e) {
                    "abort" === t && (this._listeners = this._listeners.filter((t => t !== e)))
                }
            }, c = new Set, u = (t, e) => {
                const i = `LRU_CACHE_OPTION_${t}`;
                p(i) && f(i, `${t} option`, `options.${e}`, w)
            }, d = (t, e) => {
                const i = `LRU_CACHE_METHOD_${t}`;
                if (p(i)) {
                    const {prototype: n} = w, {get: r} = Object.getOwnPropertyDescriptor(n, t);
                    f(i, `${t} method`, `cache.${e}()`, r)
                }
            }, h = (...t) => {
                "object" === typeof n && n && "function" === typeof n.emitWarning ? n.emitWarning(...t) : console.error(...t)
            }, p = t => !c.has(t), f = (t, e, i, n) => {
                c.add(t);
                h(`The ${e} is deprecated. Please use ${i} instead.`, "DeprecationWarning", t, n)
            }, v = t => t && t === Math.floor(t) && t > 0 && isFinite(t),
            g = t => v(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? m : null : null;

        class m extends Array {
            constructor(t) {
                super(t), this.fill(0)
            }
        }

        class y {
            constructor(t) {
                if (0 === t) return [];
                const e = g(t);
                this.heap = new e(t), this.length = 0
            }

            push(t) {
                this.heap[this.length++] = t
            }

            pop() {
                return this.heap[--this.length]
            }
        }

        class w {
            constructor(t = {}) {
                const {
                    max: e = 0,
                    ttl: i,
                    ttlResolution: n = 1,
                    ttlAutopurge: r,
                    updateAgeOnGet: o,
                    updateAgeOnHas: s,
                    allowStale: a,
                    dispose: l,
                    disposeAfter: d,
                    noDisposeOnSet: f,
                    noUpdateTTL: m,
                    maxSize: b = 0,
                    maxEntrySize: C = 0,
                    sizeCalculation: k,
                    fetchMethod: S,
                    fetchContext: L,
                    noDeleteOnFetchRejection: P,
                    noDeleteOnStaleGet: _
                } = t, {length: T, maxAge: x, stale: A} = t instanceof w ? {} : t;
                if (0 !== e && !v(e)) throw new TypeError("max option must be a nonnegative integer");
                const O = e ? g(e) : Array;
                if (!O) throw new Error("invalid max value: " + e);
                if (this.max = e, this.maxSize = b, this.maxEntrySize = C || this.maxSize, this.sizeCalculation = k || T, this.sizeCalculation) {
                    if (!this.maxSize && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                    if ("function" !== typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
                }
                if (this.fetchMethod = S || null, this.fetchMethod && "function" !== typeof this.fetchMethod) throw new TypeError("fetchMethod must be a function if specified");
                if (this.fetchContext = L, !this.fetchMethod && void 0 !== L) throw new TypeError("cannot set fetchContext without fetchMethod");
                if (this.keyMap = new Map, this.keyList = new Array(e).fill(null), this.valList = new Array(e).fill(null), this.next = new O(e), this.prev = new O(e), this.head = 0, this.tail = 0, this.free = new y(e), this.initialFill = 1, this.size = 0, "function" === typeof l && (this.dispose = l), "function" === typeof d ? (this.disposeAfter = d, this.disposed = []) : (this.disposeAfter = null, this.disposed = null), this.noDisposeOnSet = !!f, this.noUpdateTTL = !!m, this.noDeleteOnFetchRejection = !!P, 0 !== this.maxEntrySize) {
                    if (0 !== this.maxSize && !v(this.maxSize)) throw new TypeError("maxSize must be a positive integer if specified");
                    if (!v(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                    this.initializeSizeTracking()
                }
                if (this.allowStale = !!a || !!A, this.noDeleteOnStaleGet = !!_, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = v(n) || 0 === n ? n : 1, this.ttlAutopurge = !!r, this.ttl = i || x || 0, this.ttl) {
                    if (!v(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                    this.initializeTTLTracking()
                }
                if (0 === this.max && 0 === this.ttl && 0 === this.maxSize) throw new TypeError("At least one of max, maxSize, or ttl is required");
                if (!this.ttlAutopurge && !this.max && !this.maxSize) {
                    const t = "LRU_CACHE_UNBOUNDED";
                    if (p(t)) {
                        c.add(t);
                        h("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, w)
                    }
                }
                A && u("stale", "allowStale"), x && u("maxAge", "ttl"), T && u("length", "sizeCalculation")
            }

            getRemainingTTL(t) {
                return this.has(t, {updateAgeOnHas: !1}) ? 1 / 0 : 0
            }

            initializeTTLTracking() {
                this.ttls = new m(this.max), this.starts = new m(this.max), this.setItemTTL = (t, e, i = r.now()) => {
                    if (this.starts[t] = 0 !== e ? i : 0, this.ttls[t] = e, 0 !== e && this.ttlAutopurge) {
                        const i = setTimeout((() => {
                            this.isStale(t) && this.delete(this.keyList[t])
                        }), e + 1);
                        i.unref && i.unref()
                    }
                }, this.updateItemAge = t => {
                    this.starts[t] = 0 !== this.ttls[t] ? r.now() : 0
                };
                let t = 0;
                const e = () => {
                    const e = r.now();
                    if (this.ttlResolution > 0) {
                        t = e;
                        const i = setTimeout((() => t = 0), this.ttlResolution);
                        i.unref && i.unref()
                    }
                    return e
                };
                this.getRemainingTTL = i => {
                    const n = this.keyMap.get(i);
                    return void 0 === n ? 0 : 0 === this.ttls[n] || 0 === this.starts[n] ? 1 / 0 : this.starts[n] + this.ttls[n] - (t || e())
                }, this.isStale = i => 0 !== this.ttls[i] && 0 !== this.starts[i] && (t || e()) - this.starts[i] > this.ttls[i]
            }

            updateItemAge(t) {
            }

            setItemTTL(t, e, i) {
            }

            isStale(t) {
                return !1
            }

            initializeSizeTracking() {
                this.calculatedSize = 0, this.sizes = new m(this.max), this.removeItemSize = t => {
                    this.calculatedSize -= this.sizes[t], this.sizes[t] = 0
                }, this.requireSize = (t, e, i, n) => {
                    if (this.isBackgroundFetch(e)) return 0;
                    if (!v(i)) {
                        if (!n) throw new TypeError("invalid size value (must be positive integer)");
                        if ("function" !== typeof n) throw new TypeError("sizeCalculation must be a function");
                        if (i = n(e, t), !v(i)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
                    }
                    return i
                }, this.addItemSize = (t, e) => {
                    if (this.sizes[t] = e, this.maxSize) {
                        const e = this.maxSize - this.sizes[t];
                        for (; this.calculatedSize > e;) this.evict(!0)
                    }
                    this.calculatedSize += this.sizes[t]
                }
            }

            removeItemSize(t) {
            }

            addItemSize(t, e) {
            }

            requireSize(t, e, i, n) {
                if (i || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache")
            }

            * indexes({allowStale: t = this.allowStale} = {}) {
                if (this.size) for (let e = this.tail; this.isValidIndex(e) && (!t && this.isStale(e) || (yield e), e !== this.head);) e = this.prev[e]
            }

            * rindexes({allowStale: t = this.allowStale} = {}) {
                if (this.size) for (let e = this.head; this.isValidIndex(e) && (!t && this.isStale(e) || (yield e), e !== this.tail);) e = this.next[e]
            }

            isValidIndex(t) {
                return this.keyMap.get(this.keyList[t]) === t
            }

            * entries() {
                for (const t of this.indexes()) yield[this.keyList[t], this.valList[t]]
            }

            * rentries() {
                for (const t of this.rindexes()) yield[this.keyList[t], this.valList[t]]
            }

            * keys() {
                for (const t of this.indexes()) yield this.keyList[t]
            }

            * rkeys() {
                for (const t of this.rindexes()) yield this.keyList[t]
            }

            * values() {
                for (const t of this.indexes()) yield this.valList[t]
            }

            * rvalues() {
                for (const t of this.rindexes()) yield this.valList[t]
            }

            [Symbol.iterator]() {
                return this.entries()
            }

            find(t, e = {}) {
                for (const i of this.indexes()) if (t(this.valList[i], this.keyList[i], this)) return this.get(this.keyList[i], e)
            }

            forEach(t, e = this) {
                for (const i of this.indexes()) t.call(e, this.valList[i], this.keyList[i], this)
            }

            rforEach(t, e = this) {
                for (const i of this.rindexes()) t.call(e, this.valList[i], this.keyList[i], this)
            }

            get prune() {
                return d("prune", "purgeStale"), this.purgeStale
            }

            purgeStale() {
                let t = !1;
                for (const e of this.rindexes({allowStale: !0})) this.isStale(e) && (this.delete(this.keyList[e]), t = !0);
                return t
            }

            dump() {
                const t = [];
                for (const e of this.indexes({allowStale: !0})) {
                    const i = this.keyList[e], n = this.valList[e],
                        o = {value: this.isBackgroundFetch(n) ? n.__staleWhileFetching : n};
                    if (this.ttls) {
                        o.ttl = this.ttls[e];
                        const t = r.now() - this.starts[e];
                        o.start = Math.floor(Date.now() - t)
                    }
                    this.sizes && (o.size = this.sizes[e]), t.unshift([i, o])
                }
                return t
            }

            load(t) {
                this.clear();
                for (const [e, i] of t) {
                    if (i.start) {
                        const t = Date.now() - i.start;
                        i.start = r.now() - t
                    }
                    this.set(e, i.value, i)
                }
            }

            dispose(t, e, i) {
            }

            set(t, e, {
                ttl: i = this.ttl,
                start: n,
                noDisposeOnSet: r = this.noDisposeOnSet,
                size: o = 0,
                sizeCalculation: s = this.sizeCalculation,
                noUpdateTTL: a = this.noUpdateTTL
            } = {}) {
                if (o = this.requireSize(t, e, o, s), this.maxEntrySize && o > this.maxEntrySize) return this.delete(t), this;
                let l = 0 === this.size ? void 0 : this.keyMap.get(t);
                if (void 0 === l) l = this.newIndex(), this.keyList[l] = t, this.valList[l] = e, this.keyMap.set(t, l), this.next[this.tail] = l, this.prev[l] = this.tail, this.tail = l, this.size++, this.addItemSize(l, o), a = !1; else {
                    const i = this.valList[l];
                    e !== i && (this.isBackgroundFetch(i) ? i.__abortController.abort() : r || (this.dispose(i, t, "set"), this.disposeAfter && this.disposed.push([i, t, "set"])), this.removeItemSize(l), this.valList[l] = e, this.addItemSize(l, o)), this.moveToTail(l)
                }
                if (0 === i || 0 !== this.ttl || this.ttls || this.initializeTTLTracking(), a || this.setItemTTL(l, i, n), this.disposeAfter) for (; this.disposed.length;) this.disposeAfter(...this.disposed.shift());
                return this
            }

            newIndex() {
                return 0 === this.size ? this.tail : this.size === this.max && 0 !== this.max ? this.evict(!1) : 0 !== this.free.length ? this.free.pop() : this.initialFill++
            }

            pop() {
                if (this.size) {
                    const t = this.valList[this.head];
                    return this.evict(!0), t
                }
            }

            evict(t) {
                const e = this.head, i = this.keyList[e], n = this.valList[e];
                return this.isBackgroundFetch(n) ? n.__abortController.abort() : (this.dispose(n, i, "evict"), this.disposeAfter && this.disposed.push([n, i, "evict"])), this.removeItemSize(e), t && (this.keyList[e] = null, this.valList[e] = null, this.free.push(e)), this.head = this.next[e], this.keyMap.delete(i), this.size--, e
            }

            has(t, {updateAgeOnHas: e = this.updateAgeOnHas} = {}) {
                const i = this.keyMap.get(t);
                return void 0 !== i && !this.isStale(i) && (e && this.updateItemAge(i), !0)
            }

            peek(t, {allowStale: e = this.allowStale} = {}) {
                const i = this.keyMap.get(t);
                if (void 0 !== i && (e || !this.isStale(i))) {
                    const t = this.valList[i];
                    return this.isBackgroundFetch(t) ? t.__staleWhileFetching : t
                }
            }

            backgroundFetch(t, e, i, n) {
                const r = void 0 === e ? void 0 : this.valList[e];
                if (this.isBackgroundFetch(r)) return r;
                const s = new o, a = {signal: s.signal, options: i, context: n},
                    l = new Promise((e => e(this.fetchMethod(t, r, a)))).then((e => (s.signal.aborted || this.set(t, e, a.options), e)), (n => {
                        if (this.valList[e] === l) {
                            !i.noDeleteOnFetchRejection || void 0 === l.__staleWhileFetching ? this.delete(t) : this.valList[e] = l.__staleWhileFetching
                        }
                        if (l.__returned === l) throw n
                    }));
                return l.__abortController = s, l.__staleWhileFetching = r, l.__returned = null, void 0 === e ? (this.set(t, l, a.options), e = this.keyMap.get(t)) : this.valList[e] = l, l
            }

            isBackgroundFetch(t) {
                return t && "object" === typeof t && "function" === typeof t.then && Object.prototype.hasOwnProperty.call(t, "__staleWhileFetching") && Object.prototype.hasOwnProperty.call(t, "__returned") && (t.__returned === t || null === t.__returned)
            }

            async fetch(t, {
                allowStale: e = this.allowStale,
                updateAgeOnGet: i = this.updateAgeOnGet,
                noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
                ttl: r = this.ttl,
                noDisposeOnSet: o = this.noDisposeOnSet,
                size: s = 0,
                sizeCalculation: a = this.sizeCalculation,
                noUpdateTTL: l = this.noUpdateTTL,
                noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
                fetchContext: u = this.fetchContext,
                forceRefresh: d = !1
            } = {}) {
                if (!this.fetchMethod) return this.get(t, {allowStale: e, updateAgeOnGet: i, noDeleteOnStaleGet: n});
                const h = {
                    allowStale: e,
                    updateAgeOnGet: i,
                    noDeleteOnStaleGet: n,
                    ttl: r,
                    noDisposeOnSet: o,
                    size: s,
                    sizeCalculation: a,
                    noUpdateTTL: l,
                    noDeleteOnFetchRejection: c
                };
                let p = this.keyMap.get(t);
                if (void 0 === p) {
                    const e = this.backgroundFetch(t, p, h, u);
                    return e.__returned = e
                }
                {
                    const n = this.valList[p];
                    if (this.isBackgroundFetch(n)) return e && void 0 !== n.__staleWhileFetching ? n.__staleWhileFetching : n.__returned = n;
                    if (!d && !this.isStale(p)) return this.moveToTail(p), i && this.updateItemAge(p), n;
                    const r = this.backgroundFetch(t, p, h, u);
                    return e && void 0 !== r.__staleWhileFetching ? r.__staleWhileFetching : r.__returned = r
                }
            }

            get(t, {
                allowStale: e = this.allowStale,
                updateAgeOnGet: i = this.updateAgeOnGet,
                noDeleteOnStaleGet: n = this.noDeleteOnStaleGet
            } = {}) {
                const r = this.keyMap.get(t);
                if (void 0 !== r) {
                    const o = this.valList[r], s = this.isBackgroundFetch(o);
                    if (this.isStale(r)) return s ? e ? o.__staleWhileFetching : void 0 : (n || this.delete(t), e ? o : void 0);
                    if (s) return;
                    return this.moveToTail(r), i && this.updateItemAge(r), o
                }
            }

            connect(t, e) {
                this.prev[e] = t, this.next[t] = e
            }

            moveToTail(t) {
                t !== this.tail && (t === this.head ? this.head = this.next[t] : this.connect(this.prev[t], this.next[t]), this.connect(this.tail, t), this.tail = t)
            }

            get del() {
                return d("del", "delete"), this.delete
            }

            delete(t) {
                let e = !1;
                if (0 !== this.size) {
                    const i = this.keyMap.get(t);
                    if (void 0 !== i) if (e = !0, 1 === this.size) this.clear(); else {
                        this.removeItemSize(i);
                        const e = this.valList[i];
                        this.isBackgroundFetch(e) ? e.__abortController.abort() : (this.dispose(e, t, "delete"), this.disposeAfter && this.disposed.push([e, t, "delete"])), this.keyMap.delete(t), this.keyList[i] = null, this.valList[i] = null, i === this.tail ? this.tail = this.prev[i] : i === this.head ? this.head = this.next[i] : (this.next[this.prev[i]] = this.next[i], this.prev[this.next[i]] = this.prev[i]), this.size--, this.free.push(i)
                    }
                }
                if (this.disposed) for (; this.disposed.length;) this.disposeAfter(...this.disposed.shift());
                return e
            }

            clear() {
                for (const t of this.rindexes({allowStale: !0})) {
                    const e = this.valList[t];
                    if (this.isBackgroundFetch(e)) e.__abortController.abort(); else {
                        const i = this.keyList[t];
                        this.dispose(e, i, "delete"), this.disposeAfter && this.disposed.push([e, i, "delete"])
                    }
                }
                if (this.keyMap.clear(), this.valList.fill(null), this.keyList.fill(null), this.ttls && (this.ttls.fill(0), this.starts.fill(0)), this.sizes && this.sizes.fill(0), this.head = 0, this.tail = 0, this.initialFill = 1, this.free.length = 0, this.calculatedSize = 0, this.size = 0, this.disposed) for (; this.disposed.length;) this.disposeAfter(...this.disposed.shift())
            }

            get reset() {
                return d("reset", "clear"), this.clear
            }

            get length() {
                return ((t, e) => {
                    const i = `LRU_CACHE_PROPERTY_${t}`;
                    if (p(i)) {
                        const {prototype: n} = w, {get: r} = Object.getOwnPropertyDescriptor(n, t);
                        f(i, `${t} property`, `cache.${e}`, r)
                    }
                })("length", "size"), this.size
            }

            static get AbortController() {
                return o
            }

            static get AbortSignal() {
                return l
            }
        }

        t.exports = w
    }, 92777: function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        i.d(e, {
            Z: function () {
                return n
            }
        })
    }, 82262: function (t, e, i) {
        "use strict";

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function r(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }

        i.d(e, {
            Z: function () {
                return r
            }
        })
    }
}]);