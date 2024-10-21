"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[172], {
    29172: function (e, t, r) {
        r.r(t), r.d(t, {
            default: function () {
                return M
            }
        });
        var n, c, a = r(59499), o = r(4730), i = r(67294), u = r(50029), s = r(87794), p = r.n(s), l = r(68493),
            f = r.n(l);

        function v(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        !function (e) {
            e.CONTENT_TYPE = "content_type_uid", e.HASH = "live_preview", e.ENTRY_UID = "entry_uid"
        }(n || (n = {})), function (e) {
            e.DEV = "dev", e.MAIN = "main"
        }(c || (c = {}));
        var O, E, d, R, g = function () {
                var e, t, r = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function (t) {
                            (0, a.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({}, f().livePreview);
                return null === (e = r.config) || void 0 === e || null === (t = e.stackSdk) || void 0 === t ? void 0 : t.live_preview
            }, b = function () {
                var e, t = g() || {}, r = t[n.CONTENT_TYPE], c = t[n.HASH], o = t[n.ENTRY_UID];
                return r && c && o ? (e = {}, (0, a.Z)(e, n.CONTENT_TYPE, r), (0, a.Z)(e, n.HASH, c), (0, a.Z)(e, n.ENTRY_UID, o), e) : void 0
            }, y = r(17674), h = r(92777), _ = r(82262), w = r(78428), P = r.n(w), N = r(39593), T = r.n(N), j = r(9669),
            D = r.n(j), A = r(25892), C = r(33764);
        !function (e) {
            e.ROOT = "/", e.GLOBAL_ROOT = "/en/global/individual/"
        }(O || (O = {})), function (e) {
            e.NOT_FOUND_SLUG = "/404", e.GENERIC_ERROR_SLUG = "/error"
        }(E || (E = {})), function (e) {
            e[e.OK = 200] = "OK", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.PERMANENT_REDIRECT = 301] = "PERMANENT_REDIRECT", e[e.TEMPORARY_REDIRECT = 302] = "TEMPORARY_REDIRECT"
        }(d || (d = {})), function (e) {
            e.INTERNAL_SERVER_ERROR = "Internal Server Error", e.API_ERROR = "API Server Error"
        }(R || (R = {}));
        var S = r(83454);

        function k(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(r), !0).forEach((function (t) {
                    (0, a.Z)(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        var I = 6e4 * Number(A.Z.cacheTTL) || void 0, U = new (T())({ttl: I, max: 250}), m = function () {
            function e(t, r) {
                (0, h.Z)(this, e), this.apiAddress = t, this.config = r
            }

            return (0, _.Z)(e, [{
                key: "getPageContent", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = Z(Z({}, t), {}, {url: encodeURIComponent(e)}), n = Object.keys(r).map((function (e) {
                            return "".concat(e, "=").concat(r[e])
                        })).join("&");
                    return this.get("/articleapi/page/?".concat(n))
                }
            }, {
                key: "getRedirect", value: function (e) {
                    return this.get("/articleapi/redirects/?url=".concat(e))
                }
            }, {
                key: "getErrorPageData", value: function (e, t) {
                    var r = (0, y.Z)(e, 3), n = r[0], c = r[1], a = r[2],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = t === d.NOT_FOUND ? E.NOT_FOUND_SLUG : E.GENERIC_ERROR_SLUG,
                        u = Z(Z({}, o), {}, {url: encodeURIComponent("/".concat([n, c, a, i].join("/").replace(/(\/\/+)/g, "/")))}),
                        s = Object.keys(u).map((function (e) {
                            return "".concat(e, "=").concat(u[e])
                        })).join("&");
                    return this.get("/articleapi/page/?".concat(s))
                }
            }, {
                key: "getPageUrls", value: function () {
                    return this.get("/articleapi/urls")
                }
            }, {
                key: "getDictionary", value: function (e) {
                    return this.getCached("/articleapi/dictionary?locale=".concat(e), "dictionary-".concat(e))
                }
            }, {
                key: "getCentralConfig", value: function () {
                    return this.getCached("/articleapi/central-config/", "central-config-storage")
                }
            }, {
                key: "getCached", value: function () {
                    var e = (0, u.Z)(p().mark((function e(t, r) {
                        var n, c, a;
                        return p().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, n = U.get(r), c = function () {
                                        return C.Z.info("Response to GET request: ".concat(t, " is served from ").concat(n ? "cache" : "network"))
                                    }, !n) {
                                        e.next = 6;
                                        break
                                    }
                                    return c(), e.abrupt("return", n);
                                case 6:
                                    return e.next = 8, this.get(t);
                                case 8:
                                    return a = e.sent, I && U.set(r, a), c(), e.abrupt("return", a);
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(0), C.Z.error("".concat(String(e.t0)).concat(Object.prototype.hasOwnProperty.call(e.t0, "cause") ? ". Cause: ".concat(e.t0.cause) : "")), e.abrupt("return", {statusCode: d.INTERNAL_SERVER_ERROR});
                                case 18:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 14]])
                    })));
                    return function (t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "get", value: function () {
                    var e = (0, u.Z)(p().mark((function e(t) {
                        var r, n, c, a;
                        return p().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return r = "".concat(this.apiAddress).concat(t), e.prev = 1, n = {
                                        headers: Z({}, this.config.headers),
                                        httpsAgent: A.Z.sslCertificate && "true" !== S.env.IS_ASE_V3 ? new (P().Agent)({ca: A.Z.sslCertificate}) : void 0
                                    }, e.next = 5, D().get(r, n);
                                case 5:
                                    return c = e.sent, e.abrupt("return", {
                                        statusCode: 200,
                                        data: null === c || void 0 === c ? void 0 : c.data
                                    });
                                case 9:
                                    if (e.prev = 9, e.t0 = e.catch(1), !D().isAxiosError(e.t0) || null === e.t0 || void 0 === e.t0 || !e.t0.response) {
                                        e.next = 15;
                                        break
                                    }
                                    return a = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.response, C.Z.error("failed to GET ".concat(r, ": ").concat(null === a || void 0 === a ? void 0 : a.status, " ").concat(null === a || void 0 === a ? void 0 : a.statusText)), e.abrupt("return", {statusCode: (null === a || void 0 === a ? void 0 : a.status) || d.INTERNAL_SERVER_ERROR});
                                case 15:
                                    return o = e.t0, C.Z.error("".concat(String(o)).concat(Object.prototype.hasOwnProperty.call(o, "cause") ? ". Cause: ".concat(o.cause) : "")), e.abrupt("return", {statusCode: d.INTERNAL_SERVER_ERROR});
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                            var o
                        }), e, this, [[1, 9]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }();
        A.Z.contentApiUrl || C.Z.error("NEXT_PUBLIC_CONTENT_API_URL environment variable is missing");
        var L = A.Z.contentApiUrl ? new m(A.Z.contentApiUrl, {
            headers: {
                clientApplicationId: A.Z.clientApplicationId || "sch-com-frontend-ssg",
                correlationId: A.Z.correlationId || " "
            }
        }) : null, x = function () {
            var e = (0, i.useState)(!1), t = e[0], r = e[1];
            return (0, i.useEffect)((function () {
                var e = function () {
                    var e = (0, u.Z)(p().mark((function e() {
                        return p().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, f().init({
                                        enable: "true" === A.Z.enableLivePreview,
                                        ssr: !1,
                                        editButton: {enable: !1},
                                        stackDetails: {apiKey: A.Z.contentStackApiKey}
                                    });
                                case 3:
                                    r(!0), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), console.error("Unable to setup ContentStack Live Preview");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 6]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
                !t && "true" === A.Z.enableLivePreview && window && window.top !== window.self && e()
            }), []), {isLivePreviewEnabled: t}
        }, G = r(73603), V = r(85893), Y = ["pageData", "pageUrl"];

        function F(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(r), !0).forEach((function (t) {
                    (0, a.Z)(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        var B, M = (B = G.default, function (e) {
            var t = e.pageData, r = e.pageUrl, n = (0, o.Z)(e, Y), c = function (e, t, r) {
                var n = (0, i.useState)(), c = n[0], a = n[1];
                return (0, i.useEffect)((function () {
                    var t = function () {
                        var e = (0, u.Z)(p().mark((function e() {
                            var t, n, c;
                            return p().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (L) {
                                            e.next = 3;
                                            break
                                        }
                                        return console.error("Preview Data Fetching: ContentApiService is not defined"), e.abrupt("return");
                                    case 3:
                                        if (!(t = b())) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 7, L.getPageContent(r, t);
                                    case 7:
                                        n = e.sent, c = n.data, a(c);
                                    case 10:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                    e && f().onEntryChange(t)
                }), [e]), {pageData: c || t}
            }(x().isLivePreviewEnabled, t, r), a = c.pageData;
            return (0, V.jsx)(B, H(H({}, n), {}, {pageData: a, pageUrl: r}))
        })
    }
}]);