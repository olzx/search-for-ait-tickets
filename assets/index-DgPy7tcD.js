;(function () {
    const k = document.createElement("link").relList
    if (k && k.supports && k.supports("modulepreload")) return
    for (const T of document.querySelectorAll('link[rel="modulepreload"]')) M(T)
    new MutationObserver((T) => {
        for (const B of T)
            if (B.type === "childList")
                for (const V of B.addedNodes)
                    V.tagName === "LINK" && V.rel === "modulepreload" && M(V)
    }).observe(document, { childList: !0, subtree: !0 })
    function d(T) {
        const B = {}
        return (
            T.integrity && (B.integrity = T.integrity),
            T.referrerPolicy && (B.referrerPolicy = T.referrerPolicy),
            T.crossOrigin === "use-credentials"
                ? (B.credentials = "include")
                : T.crossOrigin === "anonymous"
                ? (B.credentials = "omit")
                : (B.credentials = "same-origin"),
            B
        )
    }
    function M(T) {
        if (T.ep) return
        T.ep = !0
        const B = d(T)
        fetch(T.href, B)
    }
})()
var Co = { exports: {} },
    gr = {},
    No = { exports: {} },
    U = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na
function Ff() {
    if (Na) return U
    Na = 1
    var h = Symbol.for("react.element"),
        k = Symbol.for("react.portal"),
        d = Symbol.for("react.fragment"),
        M = Symbol.for("react.strict_mode"),
        T = Symbol.for("react.profiler"),
        B = Symbol.for("react.provider"),
        V = Symbol.for("react.context"),
        $ = Symbol.for("react.forward_ref"),
        W = Symbol.for("react.suspense"),
        pe = Symbol.for("react.memo"),
        fe = Symbol.for("react.lazy"),
        J = Symbol.iterator
    function Z(c) {
        return c === null || typeof c != "object"
            ? null
            : ((c = (J && c[J]) || c["@@iterator"]),
              typeof c == "function" ? c : null)
    }
    var Te = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        Le = Object.assign,
        q = {}
    function D(c, g, F) {
        ;(this.props = c),
            (this.context = g),
            (this.refs = q),
            (this.updater = F || Te)
    }
    ;(D.prototype.isReactComponent = {}),
        (D.prototype.setState = function (c, g) {
            if (typeof c != "object" && typeof c != "function" && c != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                )
            this.updater.enqueueSetState(this, c, g, "setState")
        }),
        (D.prototype.forceUpdate = function (c) {
            this.updater.enqueueForceUpdate(this, c, "forceUpdate")
        })
    function be() {}
    be.prototype = D.prototype
    function fn(c, g, F) {
        ;(this.props = c),
            (this.context = g),
            (this.refs = q),
            (this.updater = F || Te)
    }
    var en = (fn.prototype = new be())
    ;(en.constructor = fn), Le(en, D.prototype), (en.isPureReactComponent = !0)
    var _e = Array.isArray,
        nn = Object.prototype.hasOwnProperty,
        Pe = { current: null },
        Ie = { key: !0, ref: !0, __self: !0, __source: !0 }
    function Ke(c, g, F) {
        var A,
            Q = {},
            K = null,
            b = null
        if (g != null)
            for (A in (g.ref !== void 0 && (b = g.ref),
            g.key !== void 0 && (K = "" + g.key),
            g))
                nn.call(g, A) && !Ie.hasOwnProperty(A) && (Q[A] = g[A])
        var X = arguments.length - 2
        if (X === 1) Q.children = F
        else if (1 < X) {
            for (var re = Array(X), Ve = 0; Ve < X; Ve++)
                re[Ve] = arguments[Ve + 2]
            Q.children = re
        }
        if (c && c.defaultProps)
            for (A in ((X = c.defaultProps), X))
                Q[A] === void 0 && (Q[A] = X[A])
        return {
            $$typeof: h,
            type: c,
            key: K,
            ref: b,
            props: Q,
            _owner: Pe.current,
        }
    }
    function jn(c, g) {
        return {
            $$typeof: h,
            type: c.type,
            key: g,
            ref: c.ref,
            props: c.props,
            _owner: c._owner,
        }
    }
    function wn(c) {
        return typeof c == "object" && c !== null && c.$$typeof === h
    }
    function Xn(c) {
        var g = { "=": "=0", ":": "=2" }
        return (
            "$" +
            c.replace(/[=:]/g, function (F) {
                return g[F]
            })
        )
    }
    var dn = /\/+/g
    function Be(c, g) {
        return typeof c == "object" && c !== null && c.key != null
            ? Xn("" + c.key)
            : g.toString(36)
    }
    function tn(c, g, F, A, Q) {
        var K = typeof c
        ;(K === "undefined" || K === "boolean") && (c = null)
        var b = !1
        if (c === null) b = !0
        else
            switch (K) {
                case "string":
                case "number":
                    b = !0
                    break
                case "object":
                    switch (c.$$typeof) {
                        case h:
                        case k:
                            b = !0
                    }
            }
        if (b)
            return (
                (b = c),
                (Q = Q(b)),
                (c = A === "" ? "." + Be(b, 0) : A),
                _e(Q)
                    ? ((F = ""),
                      c != null && (F = c.replace(dn, "$&/") + "/"),
                      tn(Q, g, F, "", function (Ve) {
                          return Ve
                      }))
                    : Q != null &&
                      (wn(Q) &&
                          (Q = jn(
                              Q,
                              F +
                                  (!Q.key || (b && b.key === Q.key)
                                      ? ""
                                      : ("" + Q.key).replace(dn, "$&/") + "/") +
                                  c
                          )),
                      g.push(Q)),
                1
            )
        if (((b = 0), (A = A === "" ? "." : A + ":"), _e(c)))
            for (var X = 0; X < c.length; X++) {
                K = c[X]
                var re = A + Be(K, X)
                b += tn(K, g, F, re, Q)
            }
        else if (((re = Z(c)), typeof re == "function"))
            for (c = re.call(c), X = 0; !(K = c.next()).done; )
                (K = K.value), (re = A + Be(K, X++)), (b += tn(K, g, F, re, Q))
        else if (K === "object")
            throw (
                ((g = String(c)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (g === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(c).join(", ") +
                              "}"
                            : g) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            )
        return b
    }
    function pn(c, g, F) {
        if (c == null) return c
        var A = [],
            Q = 0
        return (
            tn(c, A, "", "", function (K) {
                return g.call(F, K, Q++)
            }),
            A
        )
    }
    function Re(c) {
        if (c._status === -1) {
            var g = c._result
            ;(g = g()),
                g.then(
                    function (F) {
                        ;(c._status === 0 || c._status === -1) &&
                            ((c._status = 1), (c._result = F))
                    },
                    function (F) {
                        ;(c._status === 0 || c._status === -1) &&
                            ((c._status = 2), (c._result = F))
                    }
                ),
                c._status === -1 && ((c._status = 0), (c._result = g))
        }
        if (c._status === 1) return c._result.default
        throw c._result
    }
    var ue = { current: null },
        x = { transition: null },
        R = {
            ReactCurrentDispatcher: ue,
            ReactCurrentBatchConfig: x,
            ReactCurrentOwner: Pe,
        }
    function N() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return (
        (U.Children = {
            map: pn,
            forEach: function (c, g, F) {
                pn(
                    c,
                    function () {
                        g.apply(this, arguments)
                    },
                    F
                )
            },
            count: function (c) {
                var g = 0
                return (
                    pn(c, function () {
                        g++
                    }),
                    g
                )
            },
            toArray: function (c) {
                return (
                    pn(c, function (g) {
                        return g
                    }) || []
                )
            },
            only: function (c) {
                if (!wn(c))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    )
                return c
            },
        }),
        (U.Component = D),
        (U.Fragment = d),
        (U.Profiler = T),
        (U.PureComponent = fn),
        (U.StrictMode = M),
        (U.Suspense = W),
        (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
        (U.act = N),
        (U.cloneElement = function (c, g, F) {
            if (c == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        c +
                        "."
                )
            var A = Le({}, c.props),
                Q = c.key,
                K = c.ref,
                b = c._owner
            if (g != null) {
                if (
                    (g.ref !== void 0 && ((K = g.ref), (b = Pe.current)),
                    g.key !== void 0 && (Q = "" + g.key),
                    c.type && c.type.defaultProps)
                )
                    var X = c.type.defaultProps
                for (re in g)
                    nn.call(g, re) &&
                        !Ie.hasOwnProperty(re) &&
                        (A[re] =
                            g[re] === void 0 && X !== void 0 ? X[re] : g[re])
            }
            var re = arguments.length - 2
            if (re === 1) A.children = F
            else if (1 < re) {
                X = Array(re)
                for (var Ve = 0; Ve < re; Ve++) X[Ve] = arguments[Ve + 2]
                A.children = X
            }
            return {
                $$typeof: h,
                type: c.type,
                key: Q,
                ref: K,
                props: A,
                _owner: b,
            }
        }),
        (U.createContext = function (c) {
            return (
                (c = {
                    $$typeof: V,
                    _currentValue: c,
                    _currentValue2: c,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (c.Provider = { $$typeof: B, _context: c }),
                (c.Consumer = c)
            )
        }),
        (U.createElement = Ke),
        (U.createFactory = function (c) {
            var g = Ke.bind(null, c)
            return (g.type = c), g
        }),
        (U.createRef = function () {
            return { current: null }
        }),
        (U.forwardRef = function (c) {
            return { $$typeof: $, render: c }
        }),
        (U.isValidElement = wn),
        (U.lazy = function (c) {
            return {
                $$typeof: fe,
                _payload: { _status: -1, _result: c },
                _init: Re,
            }
        }),
        (U.memo = function (c, g) {
            return { $$typeof: pe, type: c, compare: g === void 0 ? null : g }
        }),
        (U.startTransition = function (c) {
            var g = x.transition
            x.transition = {}
            try {
                c()
            } finally {
                x.transition = g
            }
        }),
        (U.unstable_act = N),
        (U.useCallback = function (c, g) {
            return ue.current.useCallback(c, g)
        }),
        (U.useContext = function (c) {
            return ue.current.useContext(c)
        }),
        (U.useDebugValue = function () {}),
        (U.useDeferredValue = function (c) {
            return ue.current.useDeferredValue(c)
        }),
        (U.useEffect = function (c, g) {
            return ue.current.useEffect(c, g)
        }),
        (U.useId = function () {
            return ue.current.useId()
        }),
        (U.useImperativeHandle = function (c, g, F) {
            return ue.current.useImperativeHandle(c, g, F)
        }),
        (U.useInsertionEffect = function (c, g) {
            return ue.current.useInsertionEffect(c, g)
        }),
        (U.useLayoutEffect = function (c, g) {
            return ue.current.useLayoutEffect(c, g)
        }),
        (U.useMemo = function (c, g) {
            return ue.current.useMemo(c, g)
        }),
        (U.useReducer = function (c, g, F) {
            return ue.current.useReducer(c, g, F)
        }),
        (U.useRef = function (c) {
            return ue.current.useRef(c)
        }),
        (U.useState = function (c) {
            return ue.current.useState(c)
        }),
        (U.useSyncExternalStore = function (c, g, F) {
            return ue.current.useSyncExternalStore(c, g, F)
        }),
        (U.useTransition = function () {
            return ue.current.useTransition()
        }),
        (U.version = "18.3.1"),
        U
    )
}
var Pa
function Lo() {
    return Pa || ((Pa = 1), (No.exports = Ff())), No.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja
function Df() {
    if (ja) return gr
    ja = 1
    var h = Lo(),
        k = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        M = Object.prototype.hasOwnProperty,
        T =
            h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        B = { key: !0, ref: !0, __self: !0, __source: !0 }
    function V($, W, pe) {
        var fe,
            J = {},
            Z = null,
            Te = null
        pe !== void 0 && (Z = "" + pe),
            W.key !== void 0 && (Z = "" + W.key),
            W.ref !== void 0 && (Te = W.ref)
        for (fe in W) M.call(W, fe) && !B.hasOwnProperty(fe) && (J[fe] = W[fe])
        if ($ && $.defaultProps)
            for (fe in ((W = $.defaultProps), W))
                J[fe] === void 0 && (J[fe] = W[fe])
        return {
            $$typeof: k,
            type: $,
            key: Z,
            ref: Te,
            props: J,
            _owner: T.current,
        }
    }
    return (gr.Fragment = d), (gr.jsx = V), (gr.jsxs = V), gr
}
var za
function Uf() {
    return za || ((za = 1), (Co.exports = Df())), Co.exports
}
var v = Uf(),
    ke = Lo(),
    zl = {},
    Po = { exports: {} },
    Ae = {},
    jo = { exports: {} },
    zo = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta
function Af() {
    return (
        Ta ||
            ((Ta = 1),
            (function (h) {
                function k(x, R) {
                    var N = x.length
                    x.push(R)
                    e: for (; 0 < N; ) {
                        var c = (N - 1) >>> 1,
                            g = x[c]
                        if (0 < T(g, R)) (x[c] = R), (x[N] = g), (N = c)
                        else break e
                    }
                }
                function d(x) {
                    return x.length === 0 ? null : x[0]
                }
                function M(x) {
                    if (x.length === 0) return null
                    var R = x[0],
                        N = x.pop()
                    if (N !== R) {
                        x[0] = N
                        e: for (var c = 0, g = x.length, F = g >>> 1; c < F; ) {
                            var A = 2 * (c + 1) - 1,
                                Q = x[A],
                                K = A + 1,
                                b = x[K]
                            if (0 > T(Q, N))
                                K < g && 0 > T(b, Q)
                                    ? ((x[c] = b), (x[K] = N), (c = K))
                                    : ((x[c] = Q), (x[A] = N), (c = A))
                            else if (K < g && 0 > T(b, N))
                                (x[c] = b), (x[K] = N), (c = K)
                            else break e
                        }
                    }
                    return R
                }
                function T(x, R) {
                    var N = x.sortIndex - R.sortIndex
                    return N !== 0 ? N : x.id - R.id
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var B = performance
                    h.unstable_now = function () {
                        return B.now()
                    }
                } else {
                    var V = Date,
                        $ = V.now()
                    h.unstable_now = function () {
                        return V.now() - $
                    }
                }
                var W = [],
                    pe = [],
                    fe = 1,
                    J = null,
                    Z = 3,
                    Te = !1,
                    Le = !1,
                    q = !1,
                    D = typeof setTimeout == "function" ? setTimeout : null,
                    be =
                        typeof clearTimeout == "function" ? clearTimeout : null,
                    fn = typeof setImmediate < "u" ? setImmediate : null
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling
                    )
                function en(x) {
                    for (var R = d(pe); R !== null; ) {
                        if (R.callback === null) M(pe)
                        else if (R.startTime <= x)
                            M(pe), (R.sortIndex = R.expirationTime), k(W, R)
                        else break
                        R = d(pe)
                    }
                }
                function _e(x) {
                    if (((q = !1), en(x), !Le))
                        if (d(W) !== null) (Le = !0), Re(nn)
                        else {
                            var R = d(pe)
                            R !== null && ue(_e, R.startTime - x)
                        }
                }
                function nn(x, R) {
                    ;(Le = !1), q && ((q = !1), be(Ke), (Ke = -1)), (Te = !0)
                    var N = Z
                    try {
                        for (
                            en(R), J = d(W);
                            J !== null &&
                            (!(J.expirationTime > R) || (x && !Xn()));

                        ) {
                            var c = J.callback
                            if (typeof c == "function") {
                                ;(J.callback = null), (Z = J.priorityLevel)
                                var g = c(J.expirationTime <= R)
                                ;(R = h.unstable_now()),
                                    typeof g == "function"
                                        ? (J.callback = g)
                                        : J === d(W) && M(W),
                                    en(R)
                            } else M(W)
                            J = d(W)
                        }
                        if (J !== null) var F = !0
                        else {
                            var A = d(pe)
                            A !== null && ue(_e, A.startTime - R), (F = !1)
                        }
                        return F
                    } finally {
                        ;(J = null), (Z = N), (Te = !1)
                    }
                }
                var Pe = !1,
                    Ie = null,
                    Ke = -1,
                    jn = 5,
                    wn = -1
                function Xn() {
                    return !(h.unstable_now() - wn < jn)
                }
                function dn() {
                    if (Ie !== null) {
                        var x = h.unstable_now()
                        wn = x
                        var R = !0
                        try {
                            R = Ie(!0, x)
                        } finally {
                            R ? Be() : ((Pe = !1), (Ie = null))
                        }
                    } else Pe = !1
                }
                var Be
                if (typeof fn == "function")
                    Be = function () {
                        fn(dn)
                    }
                else if (typeof MessageChannel < "u") {
                    var tn = new MessageChannel(),
                        pn = tn.port2
                    ;(tn.port1.onmessage = dn),
                        (Be = function () {
                            pn.postMessage(null)
                        })
                } else
                    Be = function () {
                        D(dn, 0)
                    }
                function Re(x) {
                    ;(Ie = x), Pe || ((Pe = !0), Be())
                }
                function ue(x, R) {
                    Ke = D(function () {
                        x(h.unstable_now())
                    }, R)
                }
                ;(h.unstable_IdlePriority = 5),
                    (h.unstable_ImmediatePriority = 1),
                    (h.unstable_LowPriority = 4),
                    (h.unstable_NormalPriority = 3),
                    (h.unstable_Profiling = null),
                    (h.unstable_UserBlockingPriority = 2),
                    (h.unstable_cancelCallback = function (x) {
                        x.callback = null
                    }),
                    (h.unstable_continueExecution = function () {
                        Le || Te || ((Le = !0), Re(nn))
                    }),
                    (h.unstable_forceFrameRate = function (x) {
                        0 > x || 125 < x
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (jn = 0 < x ? Math.floor(1e3 / x) : 5)
                    }),
                    (h.unstable_getCurrentPriorityLevel = function () {
                        return Z
                    }),
                    (h.unstable_getFirstCallbackNode = function () {
                        return d(W)
                    }),
                    (h.unstable_next = function (x) {
                        switch (Z) {
                            case 1:
                            case 2:
                            case 3:
                                var R = 3
                                break
                            default:
                                R = Z
                        }
                        var N = Z
                        Z = R
                        try {
                            return x()
                        } finally {
                            Z = N
                        }
                    }),
                    (h.unstable_pauseExecution = function () {}),
                    (h.unstable_requestPaint = function () {}),
                    (h.unstable_runWithPriority = function (x, R) {
                        switch (x) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break
                            default:
                                x = 3
                        }
                        var N = Z
                        Z = x
                        try {
                            return R()
                        } finally {
                            Z = N
                        }
                    }),
                    (h.unstable_scheduleCallback = function (x, R, N) {
                        var c = h.unstable_now()
                        switch (
                            (typeof N == "object" && N !== null
                                ? ((N = N.delay),
                                  (N =
                                      typeof N == "number" && 0 < N
                                          ? c + N
                                          : c))
                                : (N = c),
                            x)
                        ) {
                            case 1:
                                var g = -1
                                break
                            case 2:
                                g = 250
                                break
                            case 5:
                                g = 1073741823
                                break
                            case 4:
                                g = 1e4
                                break
                            default:
                                g = 5e3
                        }
                        return (
                            (g = N + g),
                            (x = {
                                id: fe++,
                                callback: R,
                                priorityLevel: x,
                                startTime: N,
                                expirationTime: g,
                                sortIndex: -1,
                            }),
                            N > c
                                ? ((x.sortIndex = N),
                                  k(pe, x),
                                  d(W) === null &&
                                      x === d(pe) &&
                                      (q ? (be(Ke), (Ke = -1)) : (q = !0),
                                      ue(_e, N - c)))
                                : ((x.sortIndex = g),
                                  k(W, x),
                                  Le || Te || ((Le = !0), Re(nn))),
                            x
                        )
                    }),
                    (h.unstable_shouldYield = Xn),
                    (h.unstable_wrapCallback = function (x) {
                        var R = Z
                        return function () {
                            var N = Z
                            Z = R
                            try {
                                return x.apply(this, arguments)
                            } finally {
                                Z = N
                            }
                        }
                    })
            })(zo)),
        zo
    )
}
var La
function Bf() {
    return La || ((La = 1), (jo.exports = Af())), jo.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ia
function Vf() {
    if (Ia) return Ae
    Ia = 1
    var h = Lo(),
        k = Bf()
    function d(e) {
        for (
            var n =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                t = 1;
            t < arguments.length;
            t++
        )
            n += "&args[]=" + encodeURIComponent(arguments[t])
        return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        )
    }
    var M = new Set(),
        T = {}
    function B(e, n) {
        V(e, n), V(e + "Capture", n)
    }
    function V(e, n) {
        for (T[e] = n, e = 0; e < n.length; e++) M.add(n[e])
    }
    var $ = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        W = Object.prototype.hasOwnProperty,
        pe =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        fe = {},
        J = {}
    function Z(e) {
        return W.call(J, e)
            ? !0
            : W.call(fe, e)
            ? !1
            : pe.test(e)
            ? (J[e] = !0)
            : ((fe[e] = !0), !1)
    }
    function Te(e, n, t, r) {
        if (t !== null && t.type === 0) return !1
        switch (typeof n) {
            case "function":
            case "symbol":
                return !0
            case "boolean":
                return r
                    ? !1
                    : t !== null
                    ? !t.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-")
            default:
                return !1
        }
    }
    function Le(e, n, t, r) {
        if (n === null || typeof n > "u" || Te(e, n, t, r)) return !0
        if (r) return !1
        if (t !== null)
            switch (t.type) {
                case 3:
                    return !n
                case 4:
                    return n === !1
                case 5:
                    return isNaN(n)
                case 6:
                    return isNaN(n) || 1 > n
            }
        return !1
    }
    function q(e, n, t, r, l, i, o) {
        ;(this.acceptsBooleans = n === 2 || n === 3 || n === 4),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o)
    }
    var D = {}
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            D[e] = new q(e, 0, !1, e, null, !1, !1)
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var n = e[0]
            D[n] = new q(n, 1, !1, e[1], null, !1, !1)
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                D[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1)
            }
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            D[e] = new q(e, 2, !1, e, null, !1, !1)
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                D[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            D[e] = new q(e, 3, !0, e, null, !1, !1)
        }),
        ["capture", "download"].forEach(function (e) {
            D[e] = new q(e, 4, !1, e, null, !1, !1)
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            D[e] = new q(e, 6, !1, e, null, !1, !1)
        }),
        ["rowSpan", "start"].forEach(function (e) {
            D[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1)
        })
    var be = /[\-:]([a-z])/g
    function fn(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var n = e.replace(be, fn)
            D[n] = new q(n, 1, !1, e, null, !1, !1)
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var n = e.replace(be, fn)
                D[n] = new q(
                    n,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1
                )
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(be, fn)
            D[n] = new q(
                n,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1
            )
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            D[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1)
        }),
        (D.xlinkHref = new q(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            D[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0)
        })
    function en(e, n, t, r) {
        var l = D.hasOwnProperty(n) ? D[n] : null
        ;(l !== null
            ? l.type !== 0
            : r ||
              !(2 < n.length) ||
              (n[0] !== "o" && n[0] !== "O") ||
              (n[1] !== "n" && n[1] !== "N")) &&
            (Le(n, t, l, r) && (t = null),
            r || l === null
                ? Z(n) &&
                  (t === null
                      ? e.removeAttribute(n)
                      : e.setAttribute(n, "" + t))
                : l.mustUseProperty
                ? (e[l.propertyName] =
                      t === null ? (l.type === 3 ? !1 : "") : t)
                : ((n = l.attributeName),
                  (r = l.attributeNamespace),
                  t === null
                      ? e.removeAttribute(n)
                      : ((l = l.type),
                        (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                        r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
    }
    var _e = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        nn = Symbol.for("react.element"),
        Pe = Symbol.for("react.portal"),
        Ie = Symbol.for("react.fragment"),
        Ke = Symbol.for("react.strict_mode"),
        jn = Symbol.for("react.profiler"),
        wn = Symbol.for("react.provider"),
        Xn = Symbol.for("react.context"),
        dn = Symbol.for("react.forward_ref"),
        Be = Symbol.for("react.suspense"),
        tn = Symbol.for("react.suspense_list"),
        pn = Symbol.for("react.memo"),
        Re = Symbol.for("react.lazy"),
        ue = Symbol.for("react.offscreen"),
        x = Symbol.iterator
    function R(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (x && e[x]) || e["@@iterator"]),
              typeof e == "function" ? e : null)
    }
    var N = Object.assign,
        c
    function g(e) {
        if (c === void 0)
            try {
                throw Error()
            } catch (t) {
                var n = t.stack.trim().match(/\n( *(at )?)/)
                c = (n && n[1]) || ""
            }
        return (
            `
` +
            c +
            e
        )
    }
    var F = !1
    function A(e, n) {
        if (!e || F) return ""
        F = !0
        var t = Error.prepareStackTrace
        Error.prepareStackTrace = void 0
        try {
            if (n)
                if (
                    ((n = function () {
                        throw Error()
                    }),
                    Object.defineProperty(n.prototype, "props", {
                        set: function () {
                            throw Error()
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(n, [])
                    } catch (m) {
                        var r = m
                    }
                    Reflect.construct(e, [], n)
                } else {
                    try {
                        n.call()
                    } catch (m) {
                        r = m
                    }
                    e.call(n.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (m) {
                    r = m
                }
                e()
            }
        } catch (m) {
            if (m && r && typeof m.stack == "string") {
                for (
                    var l = m.stack.split(`
`),
                        i = r.stack.split(`
`),
                        o = l.length - 1,
                        u = i.length - 1;
                    1 <= o && 0 <= u && l[o] !== i[u];

                )
                    u--
                for (; 1 <= o && 0 <= u; o--, u--)
                    if (l[o] !== i[u]) {
                        if (o !== 1 || u !== 1)
                            do
                                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                                    var s =
                                        `
` + l[o].replace(" at new ", " at ")
                                    return (
                                        e.displayName &&
                                            s.includes("<anonymous>") &&
                                            (s = s.replace(
                                                "<anonymous>",
                                                e.displayName
                                            )),
                                        s
                                    )
                                }
                            while (1 <= o && 0 <= u)
                        break
                    }
            }
        } finally {
            ;(F = !1), (Error.prepareStackTrace = t)
        }
        return (e = e ? e.displayName || e.name : "") ? g(e) : ""
    }
    function Q(e) {
        switch (e.tag) {
            case 5:
                return g(e.type)
            case 16:
                return g("Lazy")
            case 13:
                return g("Suspense")
            case 19:
                return g("SuspenseList")
            case 0:
            case 2:
            case 15:
                return (e = A(e.type, !1)), e
            case 11:
                return (e = A(e.type.render, !1)), e
            case 1:
                return (e = A(e.type, !0)), e
            default:
                return ""
        }
    }
    function K(e) {
        if (e == null) return null
        if (typeof e == "function") return e.displayName || e.name || null
        if (typeof e == "string") return e
        switch (e) {
            case Ie:
                return "Fragment"
            case Pe:
                return "Portal"
            case jn:
                return "Profiler"
            case Ke:
                return "StrictMode"
            case Be:
                return "Suspense"
            case tn:
                return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Xn:
                    return (e.displayName || "Context") + ".Consumer"
                case wn:
                    return (e._context.displayName || "Context") + ".Provider"
                case dn:
                    var n = e.render
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = n.displayName || n.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    )
                case pn:
                    return (
                        (n = e.displayName || null),
                        n !== null ? n : K(e.type) || "Memo"
                    )
                case Re:
                    ;(n = e._payload), (e = e._init)
                    try {
                        return K(e(n))
                    } catch {}
            }
        return null
    }
    function b(e) {
        var n = e.type
        switch (e.tag) {
            case 24:
                return "Cache"
            case 9:
                return (n.displayName || "Context") + ".Consumer"
            case 10:
                return (n._context.displayName || "Context") + ".Provider"
            case 18:
                return "DehydratedFragment"
            case 11:
                return (
                    (e = n.render),
                    (e = e.displayName || e.name || ""),
                    n.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                )
            case 7:
                return "Fragment"
            case 5:
                return n
            case 4:
                return "Portal"
            case 3:
                return "Root"
            case 6:
                return "Text"
            case 16:
                return K(n)
            case 8:
                return n === Ke ? "StrictMode" : "Mode"
            case 22:
                return "Offscreen"
            case 12:
                return "Profiler"
            case 21:
                return "Scope"
            case 13:
                return "Suspense"
            case 19:
                return "SuspenseList"
            case 25:
                return "TracingMarker"
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof n == "function")
                    return n.displayName || n.name || null
                if (typeof n == "string") return n
        }
        return null
    }
    function X(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e
            case "object":
                return e
            default:
                return ""
        }
    }
    function re(e) {
        var n = e.type
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (n === "checkbox" || n === "radio")
        )
    }
    function Ve(e) {
        var n = re(e) ? "checked" : "value",
            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            r = "" + e[n]
        if (
            !e.hasOwnProperty(n) &&
            typeof t < "u" &&
            typeof t.get == "function" &&
            typeof t.set == "function"
        ) {
            var l = t.get,
                i = t.set
            return (
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                        return l.call(this)
                    },
                    set: function (o) {
                        ;(r = "" + o), i.call(this, o)
                    },
                }),
                Object.defineProperty(e, n, { enumerable: t.enumerable }),
                {
                    getValue: function () {
                        return r
                    },
                    setValue: function (o) {
                        r = "" + o
                    },
                    stopTracking: function () {
                        ;(e._valueTracker = null), delete e[n]
                    },
                }
            )
        }
    }
    function wr(e) {
        e._valueTracker || (e._valueTracker = Ve(e))
    }
    function Io(e) {
        if (!e) return !1
        var n = e._valueTracker
        if (!n) return !0
        var t = n.getValue(),
            r = ""
        return (
            e && (r = re(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== t ? (n.setValue(e), !0) : !1
        )
    }
    function Sr(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Ll(e, n) {
        var t = n.checked
        return N({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked,
        })
    }
    function Ro(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue,
            r = n.checked != null ? n.checked : n.defaultChecked
        ;(t = X(n.value != null ? n.value : t)),
            (e._wrapperState = {
                initialChecked: r,
                initialValue: t,
                controlled:
                    n.type === "checkbox" || n.type === "radio"
                        ? n.checked != null
                        : n.value != null,
            })
    }
    function Mo(e, n) {
        ;(n = n.checked), n != null && en(e, "checked", n, !1)
    }
    function Il(e, n) {
        Mo(e, n)
        var t = X(n.value),
            r = n.type
        if (t != null)
            r === "number"
                ? ((t === 0 && e.value === "") || e.value != t) &&
                  (e.value = "" + t)
                : e.value !== "" + t && (e.value = "" + t)
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value")
            return
        }
        n.hasOwnProperty("value")
            ? Rl(e, n.type, t)
            : n.hasOwnProperty("defaultValue") &&
              Rl(e, n.type, X(n.defaultValue)),
            n.checked == null &&
                n.defaultChecked != null &&
                (e.defaultChecked = !!n.defaultChecked)
    }
    function Oo(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type
            if (
                !(
                    (r !== "submit" && r !== "reset") ||
                    (n.value !== void 0 && n.value !== null)
                )
            )
                return
            ;(n = "" + e._wrapperState.initialValue),
                t || n === e.value || (e.value = n),
                (e.defaultValue = n)
        }
        ;(t = e.name),
            t !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            t !== "" && (e.name = t)
    }
    function Rl(e, n, t) {
        ;(n !== "number" || Sr(e.ownerDocument) !== e) &&
            (t == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
    }
    var Rt = Array.isArray
    function st(e, n, t, r) {
        if (((e = e.options), n)) {
            n = {}
            for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0
            for (t = 0; t < e.length; t++)
                (l = n.hasOwnProperty("$" + e[t].value)),
                    e[t].selected !== l && (e[t].selected = l),
                    l && r && (e[t].defaultSelected = !0)
        } else {
            for (t = "" + X(t), n = null, l = 0; l < e.length; l++) {
                if (e[l].value === t) {
                    ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
                    return
                }
                n !== null || e[l].disabled || (n = e[l])
            }
            n !== null && (n.selected = !0)
        }
    }
    function Ml(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(d(91))
        return N({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        })
    }
    function Fo(e, n) {
        var t = n.value
        if (t == null) {
            if (((t = n.children), (n = n.defaultValue), t != null)) {
                if (n != null) throw Error(d(92))
                if (Rt(t)) {
                    if (1 < t.length) throw Error(d(93))
                    t = t[0]
                }
                n = t
            }
            n == null && (n = ""), (t = n)
        }
        e._wrapperState = { initialValue: X(t) }
    }
    function Do(e, n) {
        var t = X(n.value),
            r = X(n.defaultValue)
        t != null &&
            ((t = "" + t),
            t !== e.value && (e.value = t),
            n.defaultValue == null &&
                e.defaultValue !== t &&
                (e.defaultValue = t)),
            r != null && (e.defaultValue = "" + r)
    }
    function Uo(e) {
        var n = e.textContent
        n === e._wrapperState.initialValue &&
            n !== "" &&
            n !== null &&
            (e.value = n)
    }
    function Ao(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg"
            case "math":
                return "http://www.w3.org/1998/Math/MathML"
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }
    function Ol(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? Ao(n)
            : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e
    }
    var kr,
        Bo = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (n, t, r, l) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(n, t, r, l)
                      })
                  }
                : e
        })(function (e, n) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = n
            else {
                for (
                    kr = kr || document.createElement("div"),
                        kr.innerHTML =
                            "<svg>" + n.valueOf().toString() + "</svg>",
                        n = kr.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild)
                for (; n.firstChild; ) e.appendChild(n.firstChild)
            }
        })
    function Mt(e, n) {
        if (n) {
            var t = e.firstChild
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n
                return
            }
        }
        e.textContent = n
    }
    var Ot = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        Aa = ["Webkit", "ms", "Moz", "O"]
    Object.keys(Ot).forEach(function (e) {
        Aa.forEach(function (n) {
            ;(n = n + e.charAt(0).toUpperCase() + e.substring(1)),
                (Ot[n] = Ot[e])
        })
    })
    function Vo(e, n, t) {
        return n == null || typeof n == "boolean" || n === ""
            ? ""
            : t ||
              typeof n != "number" ||
              n === 0 ||
              (Ot.hasOwnProperty(e) && Ot[e])
            ? ("" + n).trim()
            : n + "px"
    }
    function $o(e, n) {
        e = e.style
        for (var t in n)
            if (n.hasOwnProperty(t)) {
                var r = t.indexOf("--") === 0,
                    l = Vo(t, n[t], r)
                t === "float" && (t = "cssFloat"),
                    r ? e.setProperty(t, l) : (e[t] = l)
            }
    }
    var Ba = N(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        }
    )
    function Fl(e, n) {
        if (n) {
            if (
                Ba[e] &&
                (n.children != null || n.dangerouslySetInnerHTML != null)
            )
                throw Error(d(137, e))
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(d(60))
                if (
                    typeof n.dangerouslySetInnerHTML != "object" ||
                    !("__html" in n.dangerouslySetInnerHTML)
                )
                    throw Error(d(61))
            }
            if (n.style != null && typeof n.style != "object")
                throw Error(d(62))
        }
    }
    function Dl(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string"
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1
            default:
                return !0
        }
    }
    var Ul = null
    function Al(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        )
    }
    var Bl = null,
        at = null,
        ct = null
    function Ho(e) {
        if ((e = rr(e))) {
            if (typeof Bl != "function") throw Error(d(280))
            var n = e.stateNode
            n && ((n = Wr(n)), Bl(e.stateNode, e.type, n))
        }
    }
    function Wo(e) {
        at ? (ct ? ct.push(e) : (ct = [e])) : (at = e)
    }
    function Qo() {
        if (at) {
            var e = at,
                n = ct
            if (((ct = at = null), Ho(e), n))
                for (e = 0; e < n.length; e++) Ho(n[e])
        }
    }
    function Ko(e, n) {
        return e(n)
    }
    function Yo() {}
    var Vl = !1
    function Xo(e, n, t) {
        if (Vl) return e(n, t)
        Vl = !0
        try {
            return Ko(e, n, t)
        } finally {
            ;(Vl = !1), (at !== null || ct !== null) && (Yo(), Qo())
        }
    }
    function Ft(e, n) {
        var t = e.stateNode
        if (t === null) return null
        var r = Wr(t)
        if (r === null) return null
        t = r[n]
        e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                ;(r = !r.disabled) ||
                    ((e = e.type),
                    (r = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !r)
                break e
            default:
                e = !1
        }
        if (e) return null
        if (t && typeof t != "function") throw Error(d(231, n, typeof t))
        return t
    }
    var $l = !1
    if ($)
        try {
            var Dt = {}
            Object.defineProperty(Dt, "passive", {
                get: function () {
                    $l = !0
                },
            }),
                window.addEventListener("test", Dt, Dt),
                window.removeEventListener("test", Dt, Dt)
        } catch {
            $l = !1
        }
    function Va(e, n, t, r, l, i, o, u, s) {
        var m = Array.prototype.slice.call(arguments, 3)
        try {
            n.apply(t, m)
        } catch (w) {
            this.onError(w)
        }
    }
    var Ut = !1,
        _r = null,
        xr = !1,
        Hl = null,
        $a = {
            onError: function (e) {
                ;(Ut = !0), (_r = e)
            },
        }
    function Ha(e, n, t, r, l, i, o, u, s) {
        ;(Ut = !1), (_r = null), Va.apply($a, arguments)
    }
    function Wa(e, n, t, r, l, i, o, u, s) {
        if ((Ha.apply(this, arguments), Ut)) {
            if (Ut) {
                var m = _r
                ;(Ut = !1), (_r = null)
            } else throw Error(d(198))
            xr || ((xr = !0), (Hl = m))
        }
    }
    function Gn(e) {
        var n = e,
            t = e
        if (e.alternate) for (; n.return; ) n = n.return
        else {
            e = n
            do (n = e), n.flags & 4098 && (t = n.return), (e = n.return)
            while (e)
        }
        return n.tag === 3 ? t : null
    }
    function Go(e) {
        if (e.tag === 13) {
            var n = e.memoizedState
            if (
                (n === null &&
                    ((e = e.alternate), e !== null && (n = e.memoizedState)),
                n !== null)
            )
                return n.dehydrated
        }
        return null
    }
    function Zo(e) {
        if (Gn(e) !== e) throw Error(d(188))
    }
    function Qa(e) {
        var n = e.alternate
        if (!n) {
            if (((n = Gn(e)), n === null)) throw Error(d(188))
            return n !== e ? null : e
        }
        for (var t = e, r = n; ; ) {
            var l = t.return
            if (l === null) break
            var i = l.alternate
            if (i === null) {
                if (((r = l.return), r !== null)) {
                    t = r
                    continue
                }
                break
            }
            if (l.child === i.child) {
                for (i = l.child; i; ) {
                    if (i === t) return Zo(l), e
                    if (i === r) return Zo(l), n
                    i = i.sibling
                }
                throw Error(d(188))
            }
            if (t.return !== r.return) (t = l), (r = i)
            else {
                for (var o = !1, u = l.child; u; ) {
                    if (u === t) {
                        ;(o = !0), (t = l), (r = i)
                        break
                    }
                    if (u === r) {
                        ;(o = !0), (r = l), (t = i)
                        break
                    }
                    u = u.sibling
                }
                if (!o) {
                    for (u = i.child; u; ) {
                        if (u === t) {
                            ;(o = !0), (t = i), (r = l)
                            break
                        }
                        if (u === r) {
                            ;(o = !0), (r = i), (t = l)
                            break
                        }
                        u = u.sibling
                    }
                    if (!o) throw Error(d(189))
                }
            }
            if (t.alternate !== r) throw Error(d(190))
        }
        if (t.tag !== 3) throw Error(d(188))
        return t.stateNode.current === t ? e : n
    }
    function Jo(e) {
        return (e = Qa(e)), e !== null ? qo(e) : null
    }
    function qo(e) {
        if (e.tag === 5 || e.tag === 6) return e
        for (e = e.child; e !== null; ) {
            var n = qo(e)
            if (n !== null) return n
            e = e.sibling
        }
        return null
    }
    var bo = k.unstable_scheduleCallback,
        eu = k.unstable_cancelCallback,
        Ka = k.unstable_shouldYield,
        Ya = k.unstable_requestPaint,
        ae = k.unstable_now,
        Xa = k.unstable_getCurrentPriorityLevel,
        Wl = k.unstable_ImmediatePriority,
        nu = k.unstable_UserBlockingPriority,
        Er = k.unstable_NormalPriority,
        Ga = k.unstable_LowPriority,
        tu = k.unstable_IdlePriority,
        Cr = null,
        mn = null
    function Za(e) {
        if (mn && typeof mn.onCommitFiberRoot == "function")
            try {
                mn.onCommitFiberRoot(
                    Cr,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128
                )
            } catch {}
    }
    var rn = Math.clz32 ? Math.clz32 : ba,
        Ja = Math.log,
        qa = Math.LN2
    function ba(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((Ja(e) / qa) | 0)) | 0
    }
    var Nr = 64,
        Pr = 4194304
    function At(e) {
        switch (e & -e) {
            case 1:
                return 1
            case 2:
                return 2
            case 4:
                return 4
            case 8:
                return 8
            case 16:
                return 16
            case 32:
                return 32
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424
            case 134217728:
                return 134217728
            case 268435456:
                return 268435456
            case 536870912:
                return 536870912
            case 1073741824:
                return 1073741824
            default:
                return e
        }
    }
    function jr(e, n) {
        var t = e.pendingLanes
        if (t === 0) return 0
        var r = 0,
            l = e.suspendedLanes,
            i = e.pingedLanes,
            o = t & 268435455
        if (o !== 0) {
            var u = o & ~l
            u !== 0 ? (r = At(u)) : ((i &= o), i !== 0 && (r = At(i)))
        } else (o = t & ~l), o !== 0 ? (r = At(o)) : i !== 0 && (r = At(i))
        if (r === 0) return 0
        if (
            n !== 0 &&
            n !== r &&
            !(n & l) &&
            ((l = r & -r),
            (i = n & -n),
            l >= i || (l === 16 && (i & 4194240) !== 0))
        )
            return n
        if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
            for (e = e.entanglements, n &= r; 0 < n; )
                (t = 31 - rn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l)
        return r
    }
    function ec(e, n) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return n + 250
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1
            default:
                return -1
        }
    }
    function nc(e, n) {
        for (
            var t = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                i = e.pendingLanes;
            0 < i;

        ) {
            var o = 31 - rn(i),
                u = 1 << o,
                s = l[o]
            s === -1
                ? (!(u & t) || u & r) && (l[o] = ec(u, n))
                : s <= n && (e.expiredLanes |= u),
                (i &= ~u)
        }
    }
    function Ql(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        )
    }
    function ru() {
        var e = Nr
        return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e
    }
    function Kl(e) {
        for (var n = [], t = 0; 31 > t; t++) n.push(e)
        return n
    }
    function Bt(e, n, t) {
        ;(e.pendingLanes |= n),
            n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (n = 31 - rn(n)),
            (e[n] = t)
    }
    function tc(e, n) {
        var t = e.pendingLanes & ~n
        ;(e.pendingLanes = n),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= n),
            (e.mutableReadLanes &= n),
            (e.entangledLanes &= n),
            (n = e.entanglements)
        var r = e.eventTimes
        for (e = e.expirationTimes; 0 < t; ) {
            var l = 31 - rn(t),
                i = 1 << l
            ;(n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i)
        }
    }
    function Yl(e, n) {
        var t = (e.entangledLanes |= n)
        for (e = e.entanglements; t; ) {
            var r = 31 - rn(t),
                l = 1 << r
            ;(l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l)
        }
    }
    var G = 0
    function lu(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
        )
    }
    var iu,
        Xl,
        ou,
        uu,
        su,
        Gl = !1,
        zr = [],
        zn = null,
        Tn = null,
        Ln = null,
        Vt = new Map(),
        $t = new Map(),
        In = [],
        rc =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " "
            )
    function au(e, n) {
        switch (e) {
            case "focusin":
            case "focusout":
                zn = null
                break
            case "dragenter":
            case "dragleave":
                Tn = null
                break
            case "mouseover":
            case "mouseout":
                Ln = null
                break
            case "pointerover":
            case "pointerout":
                Vt.delete(n.pointerId)
                break
            case "gotpointercapture":
            case "lostpointercapture":
                $t.delete(n.pointerId)
        }
    }
    function Ht(e, n, t, r, l, i) {
        return e === null || e.nativeEvent !== i
            ? ((e = {
                  blockedOn: n,
                  domEventName: t,
                  eventSystemFlags: r,
                  nativeEvent: i,
                  targetContainers: [l],
              }),
              n !== null && ((n = rr(n)), n !== null && Xl(n)),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              l !== null && n.indexOf(l) === -1 && n.push(l),
              e)
    }
    function lc(e, n, t, r, l) {
        switch (n) {
            case "focusin":
                return (zn = Ht(zn, e, n, t, r, l)), !0
            case "dragenter":
                return (Tn = Ht(Tn, e, n, t, r, l)), !0
            case "mouseover":
                return (Ln = Ht(Ln, e, n, t, r, l)), !0
            case "pointerover":
                var i = l.pointerId
                return Vt.set(i, Ht(Vt.get(i) || null, e, n, t, r, l)), !0
            case "gotpointercapture":
                return (
                    (i = l.pointerId),
                    $t.set(i, Ht($t.get(i) || null, e, n, t, r, l)),
                    !0
                )
        }
        return !1
    }
    function cu(e) {
        var n = Zn(e.target)
        if (n !== null) {
            var t = Gn(n)
            if (t !== null) {
                if (((n = t.tag), n === 13)) {
                    if (((n = Go(t)), n !== null)) {
                        ;(e.blockedOn = n),
                            su(e.priority, function () {
                                ou(t)
                            })
                        return
                    }
                } else if (
                    n === 3 &&
                    t.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Tr(e) {
        if (e.blockedOn !== null) return !1
        for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Jl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent)
            if (t === null) {
                t = e.nativeEvent
                var r = new t.constructor(t.type, t)
                ;(Ul = r), t.target.dispatchEvent(r), (Ul = null)
            } else
                return (n = rr(t)), n !== null && Xl(n), (e.blockedOn = t), !1
            n.shift()
        }
        return !0
    }
    function fu(e, n, t) {
        Tr(e) && t.delete(n)
    }
    function ic() {
        ;(Gl = !1),
            zn !== null && Tr(zn) && (zn = null),
            Tn !== null && Tr(Tn) && (Tn = null),
            Ln !== null && Tr(Ln) && (Ln = null),
            Vt.forEach(fu),
            $t.forEach(fu)
    }
    function Wt(e, n) {
        e.blockedOn === n &&
            ((e.blockedOn = null),
            Gl ||
                ((Gl = !0),
                k.unstable_scheduleCallback(k.unstable_NormalPriority, ic)))
    }
    function Qt(e) {
        function n(l) {
            return Wt(l, e)
        }
        if (0 < zr.length) {
            Wt(zr[0], e)
            for (var t = 1; t < zr.length; t++) {
                var r = zr[t]
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (
            zn !== null && Wt(zn, e),
                Tn !== null && Wt(Tn, e),
                Ln !== null && Wt(Ln, e),
                Vt.forEach(n),
                $t.forEach(n),
                t = 0;
            t < In.length;
            t++
        )
            (r = In[t]), r.blockedOn === e && (r.blockedOn = null)
        for (; 0 < In.length && ((t = In[0]), t.blockedOn === null); )
            cu(t), t.blockedOn === null && In.shift()
    }
    var ft = _e.ReactCurrentBatchConfig,
        Lr = !0
    function oc(e, n, t, r) {
        var l = G,
            i = ft.transition
        ft.transition = null
        try {
            ;(G = 1), Zl(e, n, t, r)
        } finally {
            ;(G = l), (ft.transition = i)
        }
    }
    function uc(e, n, t, r) {
        var l = G,
            i = ft.transition
        ft.transition = null
        try {
            ;(G = 4), Zl(e, n, t, r)
        } finally {
            ;(G = l), (ft.transition = i)
        }
    }
    function Zl(e, n, t, r) {
        if (Lr) {
            var l = Jl(e, n, t, r)
            if (l === null) mi(e, n, r, Ir, t), au(e, r)
            else if (lc(l, e, n, t, r)) r.stopPropagation()
            else if ((au(e, r), n & 4 && -1 < rc.indexOf(e))) {
                for (; l !== null; ) {
                    var i = rr(l)
                    if (
                        (i !== null && iu(i),
                        (i = Jl(e, n, t, r)),
                        i === null && mi(e, n, r, Ir, t),
                        i === l)
                    )
                        break
                    l = i
                }
                l !== null && r.stopPropagation()
            } else mi(e, n, r, null, t)
        }
    }
    var Ir = null
    function Jl(e, n, t, r) {
        if (((Ir = null), (e = Al(r)), (e = Zn(e)), e !== null))
            if (((n = Gn(e)), n === null)) e = null
            else if (((t = n.tag), t === 13)) {
                if (((e = Go(n)), e !== null)) return e
                e = null
            } else if (t === 3) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                    return n.tag === 3 ? n.stateNode.containerInfo : null
                e = null
            } else n !== e && (e = null)
        return (Ir = e), null
    }
    function du(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4
            case "message":
                switch (Xa()) {
                    case Wl:
                        return 1
                    case nu:
                        return 4
                    case Er:
                    case Ga:
                        return 16
                    case tu:
                        return 536870912
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Rn = null,
        ql = null,
        Rr = null
    function pu() {
        if (Rr) return Rr
        var e,
            n = ql,
            t = n.length,
            r,
            l = "value" in Rn ? Rn.value : Rn.textContent,
            i = l.length
        for (e = 0; e < t && n[e] === l[e]; e++);
        var o = t - e
        for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
        return (Rr = l.slice(e, 1 < r ? 1 - r : void 0))
    }
    function Mr(e) {
        var n = e.keyCode
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
                : (e = n),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        )
    }
    function Or() {
        return !0
    }
    function mu() {
        return !1
    }
    function $e(e) {
        function n(t, r, l, i, o) {
            ;(this._reactName = t),
                (this._targetInst = l),
                (this.type = r),
                (this.nativeEvent = i),
                (this.target = o),
                (this.currentTarget = null)
            for (var u in e)
                e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]))
            return (
                (this.isDefaultPrevented = (
                    i.defaultPrevented != null
                        ? i.defaultPrevented
                        : i.returnValue === !1
                )
                    ? Or
                    : mu),
                (this.isPropagationStopped = mu),
                this
            )
        }
        return (
            N(n.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0
                    var t = this.nativeEvent
                    t &&
                        (t.preventDefault
                            ? t.preventDefault()
                            : typeof t.returnValue != "unknown" &&
                              (t.returnValue = !1),
                        (this.isDefaultPrevented = Or))
                },
                stopPropagation: function () {
                    var t = this.nativeEvent
                    t &&
                        (t.stopPropagation
                            ? t.stopPropagation()
                            : typeof t.cancelBubble != "unknown" &&
                              (t.cancelBubble = !0),
                        (this.isPropagationStopped = Or))
                },
                persist: function () {},
                isPersistent: Or,
            }),
            n
        )
    }
    var dt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        bl = $e(dt),
        Kt = N({}, dt, { view: 0, detail: 0 }),
        sc = $e(Kt),
        ei,
        ni,
        Yt,
        Fr = N({}, Kt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ri,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== Yt &&
                          (Yt && e.type === "mousemove"
                              ? ((ei = e.screenX - Yt.screenX),
                                (ni = e.screenY - Yt.screenY))
                              : (ni = ei = 0),
                          (Yt = e)),
                      ei)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : ni
            },
        }),
        hu = $e(Fr),
        ac = N({}, Fr, { dataTransfer: 0 }),
        cc = $e(ac),
        fc = N({}, Kt, { relatedTarget: 0 }),
        ti = $e(fc),
        dc = N({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        pc = $e(dc),
        mc = N({}, dt, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData
            },
        }),
        hc = $e(mc),
        vc = N({}, dt, { data: 0 }),
        vu = $e(vc),
        yc = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        gc = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        wc = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        }
    function Sc(e) {
        var n = this.nativeEvent
        return n.getModifierState
            ? n.getModifierState(e)
            : (e = wc[e])
            ? !!n[e]
            : !1
    }
    function ri() {
        return Sc
    }
    var kc = N({}, Kt, {
            key: function (e) {
                if (e.key) {
                    var n = yc[e.key] || e.key
                    if (n !== "Unidentified") return n
                }
                return e.type === "keypress"
                    ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? gc[e.keyCode] || "Unidentified"
                    : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ri,
            charCode: function (e) {
                return e.type === "keypress" ? Mr(e) : 0
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0
            },
            which: function (e) {
                return e.type === "keypress"
                    ? Mr(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0
            },
        }),
        _c = $e(kc),
        xc = N({}, Fr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        yu = $e(xc),
        Ec = N({}, Kt, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ri,
        }),
        Cc = $e(Ec),
        Nc = N({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Pc = $e(Nc),
        jc = N({}, Fr, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        zc = $e(jc),
        Tc = [9, 13, 27, 32],
        li = $ && "CompositionEvent" in window,
        Xt = null
    $ && "documentMode" in document && (Xt = document.documentMode)
    var Lc = $ && "TextEvent" in window && !Xt,
        gu = $ && (!li || (Xt && 8 < Xt && 11 >= Xt)),
        wu = " ",
        Su = !1
    function ku(e, n) {
        switch (e) {
            case "keyup":
                return Tc.indexOf(n.keyCode) !== -1
            case "keydown":
                return n.keyCode !== 229
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0
            default:
                return !1
        }
    }
    function _u(e) {
        return (
            (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        )
    }
    var pt = !1
    function Ic(e, n) {
        switch (e) {
            case "compositionend":
                return _u(n)
            case "keypress":
                return n.which !== 32 ? null : ((Su = !0), wu)
            case "textInput":
                return (e = n.data), e === wu && Su ? null : e
            default:
                return null
        }
    }
    function Rc(e, n) {
        if (pt)
            return e === "compositionend" || (!li && ku(e, n))
                ? ((e = pu()), (Rr = ql = Rn = null), (pt = !1), e)
                : null
        switch (e) {
            case "paste":
                return null
            case "keypress":
                if (
                    !(n.ctrlKey || n.altKey || n.metaKey) ||
                    (n.ctrlKey && n.altKey)
                ) {
                    if (n.char && 1 < n.char.length) return n.char
                    if (n.which) return String.fromCharCode(n.which)
                }
                return null
            case "compositionend":
                return gu && n.locale !== "ko" ? null : n.data
            default:
                return null
        }
    }
    var Mc = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    }
    function xu(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase()
        return n === "input" ? !!Mc[e.type] : n === "textarea"
    }
    function Eu(e, n, t, r) {
        Wo(r),
            (n = Vr(n, "onChange")),
            0 < n.length &&
                ((t = new bl("onChange", "change", null, t, r)),
                e.push({ event: t, listeners: n }))
    }
    var Gt = null,
        Zt = null
    function Oc(e) {
        $u(e, 0)
    }
    function Dr(e) {
        var n = gt(e)
        if (Io(n)) return e
    }
    function Fc(e, n) {
        if (e === "change") return n
    }
    var Cu = !1
    if ($) {
        var ii
        if ($) {
            var oi = "oninput" in document
            if (!oi) {
                var Nu = document.createElement("div")
                Nu.setAttribute("oninput", "return;"),
                    (oi = typeof Nu.oninput == "function")
            }
            ii = oi
        } else ii = !1
        Cu = ii && (!document.documentMode || 9 < document.documentMode)
    }
    function Pu() {
        Gt && (Gt.detachEvent("onpropertychange", ju), (Zt = Gt = null))
    }
    function ju(e) {
        if (e.propertyName === "value" && Dr(Zt)) {
            var n = []
            Eu(n, Zt, e, Al(e)), Xo(Oc, n)
        }
    }
    function Dc(e, n, t) {
        e === "focusin"
            ? (Pu(), (Gt = n), (Zt = t), Gt.attachEvent("onpropertychange", ju))
            : e === "focusout" && Pu()
    }
    function Uc(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Dr(Zt)
    }
    function Ac(e, n) {
        if (e === "click") return Dr(n)
    }
    function Bc(e, n) {
        if (e === "input" || e === "change") return Dr(n)
    }
    function Vc(e, n) {
        return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n)
    }
    var ln = typeof Object.is == "function" ? Object.is : Vc
    function Jt(e, n) {
        if (ln(e, n)) return !0
        if (
            typeof e != "object" ||
            e === null ||
            typeof n != "object" ||
            n === null
        )
            return !1
        var t = Object.keys(e),
            r = Object.keys(n)
        if (t.length !== r.length) return !1
        for (r = 0; r < t.length; r++) {
            var l = t[r]
            if (!W.call(n, l) || !ln(e[l], n[l])) return !1
        }
        return !0
    }
    function zu(e) {
        for (; e && e.firstChild; ) e = e.firstChild
        return e
    }
    function Tu(e, n) {
        var t = zu(e)
        e = 0
        for (var r; t; ) {
            if (t.nodeType === 3) {
                if (((r = e + t.textContent.length), e <= n && r >= n))
                    return { node: t, offset: n - e }
                e = r
            }
            e: {
                for (; t; ) {
                    if (t.nextSibling) {
                        t = t.nextSibling
                        break e
                    }
                    t = t.parentNode
                }
                t = void 0
            }
            t = zu(t)
        }
    }
    function Lu(e, n) {
        return e && n
            ? e === n
                ? !0
                : e && e.nodeType === 3
                ? !1
                : n && n.nodeType === 3
                ? Lu(e, n.parentNode)
                : "contains" in e
                ? e.contains(n)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
            : !1
    }
    function Iu() {
        for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
            try {
                var t = typeof n.contentWindow.location.href == "string"
            } catch {
                t = !1
            }
            if (t) e = n.contentWindow
            else break
            n = Sr(e.document)
        }
        return n
    }
    function ui(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase()
        return (
            n &&
            ((n === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                n === "textarea" ||
                e.contentEditable === "true")
        )
    }
    function $c(e) {
        var n = Iu(),
            t = e.focusedElem,
            r = e.selectionRange
        if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Lu(t.ownerDocument.documentElement, t)
        ) {
            if (r !== null && ui(t)) {
                if (
                    ((n = r.start),
                    (e = r.end),
                    e === void 0 && (e = n),
                    "selectionStart" in t)
                )
                    (t.selectionStart = n),
                        (t.selectionEnd = Math.min(e, t.value.length))
                else if (
                    ((e =
                        ((n = t.ownerDocument || document) && n.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection()
                    var l = t.textContent.length,
                        i = Math.min(r.start, l)
                    ;(r = r.end === void 0 ? i : Math.min(r.end, l)),
                        !e.extend && i > r && ((l = r), (r = i), (i = l)),
                        (l = Tu(t, i))
                    var o = Tu(t, r)
                    l &&
                        o &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== l.node ||
                            e.anchorOffset !== l.offset ||
                            e.focusNode !== o.node ||
                            e.focusOffset !== o.offset) &&
                        ((n = n.createRange()),
                        n.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        i > r
                            ? (e.addRange(n), e.extend(o.node, o.offset))
                            : (n.setEnd(o.node, o.offset), e.addRange(n)))
                }
            }
            for (n = [], e = t; (e = e.parentNode); )
                e.nodeType === 1 &&
                    n.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
                typeof t.focus == "function" && t.focus(), t = 0;
                t < n.length;
                t++
            )
                (e = n[t]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top)
        }
    }
    var Hc = $ && "documentMode" in document && 11 >= document.documentMode,
        mt = null,
        si = null,
        qt = null,
        ai = !1
    function Ru(e, n, t) {
        var r =
            t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument
        ai ||
            mt == null ||
            mt !== Sr(r) ||
            ((r = mt),
            "selectionStart" in r && ui(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : ((r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (r = {
                      anchorNode: r.anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  })),
            (qt && Jt(qt, r)) ||
                ((qt = r),
                (r = Vr(si, "onSelect")),
                0 < r.length &&
                    ((n = new bl("onSelect", "select", null, n, t)),
                    e.push({ event: n, listeners: r }),
                    (n.target = mt))))
    }
    function Ur(e, n) {
        var t = {}
        return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
        )
    }
    var ht = {
            animationend: Ur("Animation", "AnimationEnd"),
            animationiteration: Ur("Animation", "AnimationIteration"),
            animationstart: Ur("Animation", "AnimationStart"),
            transitionend: Ur("Transition", "TransitionEnd"),
        },
        ci = {},
        Mu = {}
    $ &&
        ((Mu = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete ht.animationend.animation,
            delete ht.animationiteration.animation,
            delete ht.animationstart.animation),
        "TransitionEvent" in window || delete ht.transitionend.transition)
    function Ar(e) {
        if (ci[e]) return ci[e]
        if (!ht[e]) return e
        var n = ht[e],
            t
        for (t in n) if (n.hasOwnProperty(t) && t in Mu) return (ci[e] = n[t])
        return e
    }
    var Ou = Ar("animationend"),
        Fu = Ar("animationiteration"),
        Du = Ar("animationstart"),
        Uu = Ar("transitionend"),
        Au = new Map(),
        Bu =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            )
    function Mn(e, n) {
        Au.set(e, n), B(n, [e])
    }
    for (var fi = 0; fi < Bu.length; fi++) {
        var di = Bu[fi],
            Wc = di.toLowerCase(),
            Qc = di[0].toUpperCase() + di.slice(1)
        Mn(Wc, "on" + Qc)
    }
    Mn(Ou, "onAnimationEnd"),
        Mn(Fu, "onAnimationIteration"),
        Mn(Du, "onAnimationStart"),
        Mn("dblclick", "onDoubleClick"),
        Mn("focusin", "onFocus"),
        Mn("focusout", "onBlur"),
        Mn(Uu, "onTransitionEnd"),
        V("onMouseEnter", ["mouseout", "mouseover"]),
        V("onMouseLeave", ["mouseout", "mouseover"]),
        V("onPointerEnter", ["pointerout", "pointerover"]),
        V("onPointerLeave", ["pointerout", "pointerover"]),
        B(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        B(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        B("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        B(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        B(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        B(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        )
    var bt =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        Kc = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(bt)
        )
    function Vu(e, n, t) {
        var r = e.type || "unknown-event"
        ;(e.currentTarget = t), Wa(r, n, void 0, e), (e.currentTarget = null)
    }
    function $u(e, n) {
        n = (n & 4) !== 0
        for (var t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.event
            r = r.listeners
            e: {
                var i = void 0
                if (n)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var u = r[o],
                            s = u.instance,
                            m = u.currentTarget
                        if (
                            ((u = u.listener),
                            s !== i && l.isPropagationStopped())
                        )
                            break e
                        Vu(l, u, m), (i = s)
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (
                            ((u = r[o]),
                            (s = u.instance),
                            (m = u.currentTarget),
                            (u = u.listener),
                            s !== i && l.isPropagationStopped())
                        )
                            break e
                        Vu(l, u, m), (i = s)
                    }
            }
        }
        if (xr) throw ((e = Hl), (xr = !1), (Hl = null), e)
    }
    function ne(e, n) {
        var t = n[Si]
        t === void 0 && (t = n[Si] = new Set())
        var r = e + "__bubble"
        t.has(r) || (Hu(n, e, 2, !1), t.add(r))
    }
    function pi(e, n, t) {
        var r = 0
        n && (r |= 4), Hu(t, e, r, n)
    }
    var Br = "_reactListening" + Math.random().toString(36).slice(2)
    function er(e) {
        if (!e[Br]) {
            ;(e[Br] = !0),
                M.forEach(function (t) {
                    t !== "selectionchange" &&
                        (Kc.has(t) || pi(t, !1, e), pi(t, !0, e))
                })
            var n = e.nodeType === 9 ? e : e.ownerDocument
            n === null || n[Br] || ((n[Br] = !0), pi("selectionchange", !1, n))
        }
    }
    function Hu(e, n, t, r) {
        switch (du(n)) {
            case 1:
                var l = oc
                break
            case 4:
                l = uc
                break
            default:
                l = Zl
        }
        ;(t = l.bind(null, n, t, e)),
            (l = void 0),
            !$l ||
                (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
                (l = !0),
            r
                ? l !== void 0
                    ? e.addEventListener(n, t, { capture: !0, passive: l })
                    : e.addEventListener(n, t, !0)
                : l !== void 0
                ? e.addEventListener(n, t, { passive: l })
                : e.addEventListener(n, t, !1)
    }
    function mi(e, n, t, r, l) {
        var i = r
        if (!(n & 1) && !(n & 2) && r !== null)
            e: for (;;) {
                if (r === null) return
                var o = r.tag
                if (o === 3 || o === 4) {
                    var u = r.stateNode.containerInfo
                    if (u === l || (u.nodeType === 8 && u.parentNode === l))
                        break
                    if (o === 4)
                        for (o = r.return; o !== null; ) {
                            var s = o.tag
                            if (
                                (s === 3 || s === 4) &&
                                ((s = o.stateNode.containerInfo),
                                s === l ||
                                    (s.nodeType === 8 && s.parentNode === l))
                            )
                                return
                            o = o.return
                        }
                    for (; u !== null; ) {
                        if (((o = Zn(u)), o === null)) return
                        if (((s = o.tag), s === 5 || s === 6)) {
                            r = i = o
                            continue e
                        }
                        u = u.parentNode
                    }
                }
                r = r.return
            }
        Xo(function () {
            var m = i,
                w = Al(t),
                S = []
            e: {
                var y = Au.get(e)
                if (y !== void 0) {
                    var E = bl,
                        P = e
                    switch (e) {
                        case "keypress":
                            if (Mr(t) === 0) break e
                        case "keydown":
                        case "keyup":
                            E = _c
                            break
                        case "focusin":
                            ;(P = "focus"), (E = ti)
                            break
                        case "focusout":
                            ;(P = "blur"), (E = ti)
                            break
                        case "beforeblur":
                        case "afterblur":
                            E = ti
                            break
                        case "click":
                            if (t.button === 2) break e
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            E = hu
                            break
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            E = cc
                            break
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            E = Cc
                            break
                        case Ou:
                        case Fu:
                        case Du:
                            E = pc
                            break
                        case Uu:
                            E = Pc
                            break
                        case "scroll":
                            E = sc
                            break
                        case "wheel":
                            E = zc
                            break
                        case "copy":
                        case "cut":
                        case "paste":
                            E = hc
                            break
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            E = yu
                    }
                    var j = (n & 4) !== 0,
                        ce = !j && e === "scroll",
                        f = j ? (y !== null ? y + "Capture" : null) : y
                    j = []
                    for (var a = m, p; a !== null; ) {
                        p = a
                        var _ = p.stateNode
                        if (
                            (p.tag === 5 &&
                                _ !== null &&
                                ((p = _),
                                f !== null &&
                                    ((_ = Ft(a, f)),
                                    _ != null && j.push(nr(a, _, p)))),
                            ce)
                        )
                            break
                        a = a.return
                    }
                    0 < j.length &&
                        ((y = new E(y, P, null, t, w)),
                        S.push({ event: y, listeners: j }))
                }
            }
            if (!(n & 7)) {
                e: {
                    if (
                        ((y = e === "mouseover" || e === "pointerover"),
                        (E = e === "mouseout" || e === "pointerout"),
                        y &&
                            t !== Ul &&
                            (P = t.relatedTarget || t.fromElement) &&
                            (Zn(P) || P[Sn]))
                    )
                        break e
                    if (
                        (E || y) &&
                        ((y =
                            w.window === w
                                ? w
                                : (y = w.ownerDocument)
                                ? y.defaultView || y.parentWindow
                                : window),
                        E
                            ? ((P = t.relatedTarget || t.toElement),
                              (E = m),
                              (P = P ? Zn(P) : null),
                              P !== null &&
                                  ((ce = Gn(P)),
                                  P !== ce || (P.tag !== 5 && P.tag !== 6)) &&
                                  (P = null))
                            : ((E = null), (P = m)),
                        E !== P)
                    ) {
                        if (
                            ((j = hu),
                            (_ = "onMouseLeave"),
                            (f = "onMouseEnter"),
                            (a = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((j = yu),
                                (_ = "onPointerLeave"),
                                (f = "onPointerEnter"),
                                (a = "pointer")),
                            (ce = E == null ? y : gt(E)),
                            (p = P == null ? y : gt(P)),
                            (y = new j(_, a + "leave", E, t, w)),
                            (y.target = ce),
                            (y.relatedTarget = p),
                            (_ = null),
                            Zn(w) === m &&
                                ((j = new j(f, a + "enter", P, t, w)),
                                (j.target = p),
                                (j.relatedTarget = ce),
                                (_ = j)),
                            (ce = _),
                            E && P)
                        )
                            n: {
                                for (j = E, f = P, a = 0, p = j; p; p = vt(p))
                                    a++
                                for (p = 0, _ = f; _; _ = vt(_)) p++
                                for (; 0 < a - p; ) (j = vt(j)), a--
                                for (; 0 < p - a; ) (f = vt(f)), p--
                                for (; a--; ) {
                                    if (
                                        j === f ||
                                        (f !== null && j === f.alternate)
                                    )
                                        break n
                                    ;(j = vt(j)), (f = vt(f))
                                }
                                j = null
                            }
                        else j = null
                        E !== null && Wu(S, y, E, j, !1),
                            P !== null && ce !== null && Wu(S, ce, P, j, !0)
                    }
                }
                e: {
                    if (
                        ((y = m ? gt(m) : window),
                        (E = y.nodeName && y.nodeName.toLowerCase()),
                        E === "select" || (E === "input" && y.type === "file"))
                    )
                        var z = Fc
                    else if (xu(y))
                        if (Cu) z = Bc
                        else {
                            z = Uc
                            var L = Dc
                        }
                    else
                        (E = y.nodeName) &&
                            E.toLowerCase() === "input" &&
                            (y.type === "checkbox" || y.type === "radio") &&
                            (z = Ac)
                    if (z && (z = z(e, m))) {
                        Eu(S, z, t, w)
                        break e
                    }
                    L && L(e, y, m),
                        e === "focusout" &&
                            (L = y._wrapperState) &&
                            L.controlled &&
                            y.type === "number" &&
                            Rl(y, "number", y.value)
                }
                switch (((L = m ? gt(m) : window), e)) {
                    case "focusin":
                        ;(xu(L) || L.contentEditable === "true") &&
                            ((mt = L), (si = m), (qt = null))
                        break
                    case "focusout":
                        qt = si = mt = null
                        break
                    case "mousedown":
                        ai = !0
                        break
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ;(ai = !1), Ru(S, t, w)
                        break
                    case "selectionchange":
                        if (Hc) break
                    case "keydown":
                    case "keyup":
                        Ru(S, t, w)
                }
                var I
                if (li)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var O = "onCompositionStart"
                                break e
                            case "compositionend":
                                O = "onCompositionEnd"
                                break e
                            case "compositionupdate":
                                O = "onCompositionUpdate"
                                break e
                        }
                        O = void 0
                    }
                else
                    pt
                        ? ku(e, t) && (O = "onCompositionEnd")
                        : e === "keydown" &&
                          t.keyCode === 229 &&
                          (O = "onCompositionStart")
                O &&
                    (gu &&
                        t.locale !== "ko" &&
                        (pt || O !== "onCompositionStart"
                            ? O === "onCompositionEnd" && pt && (I = pu())
                            : ((Rn = w),
                              (ql = "value" in Rn ? Rn.value : Rn.textContent),
                              (pt = !0))),
                    (L = Vr(m, O)),
                    0 < L.length &&
                        ((O = new vu(O, e, null, t, w)),
                        S.push({ event: O, listeners: L }),
                        I
                            ? (O.data = I)
                            : ((I = _u(t)), I !== null && (O.data = I)))),
                    (I = Lc ? Ic(e, t) : Rc(e, t)) &&
                        ((m = Vr(m, "onBeforeInput")),
                        0 < m.length &&
                            ((w = new vu(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                t,
                                w
                            )),
                            S.push({ event: w, listeners: m }),
                            (w.data = I)))
            }
            $u(S, n)
        })
    }
    function nr(e, n, t) {
        return { instance: e, listener: n, currentTarget: t }
    }
    function Vr(e, n) {
        for (var t = n + "Capture", r = []; e !== null; ) {
            var l = e,
                i = l.stateNode
            l.tag === 5 &&
                i !== null &&
                ((l = i),
                (i = Ft(e, t)),
                i != null && r.unshift(nr(e, i, l)),
                (i = Ft(e, n)),
                i != null && r.push(nr(e, i, l))),
                (e = e.return)
        }
        return r
    }
    function vt(e) {
        if (e === null) return null
        do e = e.return
        while (e && e.tag !== 5)
        return e || null
    }
    function Wu(e, n, t, r, l) {
        for (var i = n._reactName, o = []; t !== null && t !== r; ) {
            var u = t,
                s = u.alternate,
                m = u.stateNode
            if (s !== null && s === r) break
            u.tag === 5 &&
                m !== null &&
                ((u = m),
                l
                    ? ((s = Ft(t, i)), s != null && o.unshift(nr(t, s, u)))
                    : l || ((s = Ft(t, i)), s != null && o.push(nr(t, s, u)))),
                (t = t.return)
        }
        o.length !== 0 && e.push({ event: n, listeners: o })
    }
    var Yc = /\r\n?/g,
        Xc = /\u0000|\uFFFD/g
    function Qu(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                Yc,
                `
`
            )
            .replace(Xc, "")
    }
    function $r(e, n, t) {
        if (((n = Qu(n)), Qu(e) !== n && t)) throw Error(d(425))
    }
    function Hr() {}
    var hi = null,
        vi = null
    function yi(e, n) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof n.children == "string" ||
            typeof n.children == "number" ||
            (typeof n.dangerouslySetInnerHTML == "object" &&
                n.dangerouslySetInnerHTML !== null &&
                n.dangerouslySetInnerHTML.__html != null)
        )
    }
    var gi = typeof setTimeout == "function" ? setTimeout : void 0,
        Gc = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ku = typeof Promise == "function" ? Promise : void 0,
        Zc =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Ku < "u"
                ? function (e) {
                      return Ku.resolve(null).then(e).catch(Jc)
                  }
                : gi
    function Jc(e) {
        setTimeout(function () {
            throw e
        })
    }
    function wi(e, n) {
        var t = n,
            r = 0
        do {
            var l = t.nextSibling
            if ((e.removeChild(t), l && l.nodeType === 8))
                if (((t = l.data), t === "/$")) {
                    if (r === 0) {
                        e.removeChild(l), Qt(n)
                        return
                    }
                    r--
                } else (t !== "$" && t !== "$?" && t !== "$!") || r++
            t = l
        } while (t)
        Qt(n)
    }
    function On(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType
            if (n === 1 || n === 3) break
            if (n === 8) {
                if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break
                if (n === "/$") return null
            }
        }
        return e
    }
    function Yu(e) {
        e = e.previousSibling
        for (var n = 0; e; ) {
            if (e.nodeType === 8) {
                var t = e.data
                if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e
                    n--
                } else t === "/$" && n++
            }
            e = e.previousSibling
        }
        return null
    }
    var yt = Math.random().toString(36).slice(2),
        hn = "__reactFiber$" + yt,
        tr = "__reactProps$" + yt,
        Sn = "__reactContainer$" + yt,
        Si = "__reactEvents$" + yt,
        qc = "__reactListeners$" + yt,
        bc = "__reactHandles$" + yt
    function Zn(e) {
        var n = e[hn]
        if (n) return n
        for (var t = e.parentNode; t; ) {
            if ((n = t[Sn] || t[hn])) {
                if (
                    ((t = n.alternate),
                    n.child !== null || (t !== null && t.child !== null))
                )
                    for (e = Yu(e); e !== null; ) {
                        if ((t = e[hn])) return t
                        e = Yu(e)
                    }
                return n
            }
            ;(e = t), (t = e.parentNode)
        }
        return null
    }
    function rr(e) {
        return (
            (e = e[hn] || e[Sn]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        )
    }
    function gt(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode
        throw Error(d(33))
    }
    function Wr(e) {
        return e[tr] || null
    }
    var ki = [],
        wt = -1
    function Fn(e) {
        return { current: e }
    }
    function te(e) {
        0 > wt || ((e.current = ki[wt]), (ki[wt] = null), wt--)
    }
    function ee(e, n) {
        wt++, (ki[wt] = e.current), (e.current = n)
    }
    var Dn = {},
        xe = Fn(Dn),
        Me = Fn(!1),
        Jn = Dn
    function St(e, n) {
        var t = e.type.contextTypes
        if (!t) return Dn
        var r = e.stateNode
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext
        var l = {},
            i
        for (i in t) l[i] = n[i]
        return (
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = n),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
        )
    }
    function Oe(e) {
        return (e = e.childContextTypes), e != null
    }
    function Qr() {
        te(Me), te(xe)
    }
    function Xu(e, n, t) {
        if (xe.current !== Dn) throw Error(d(168))
        ee(xe, n), ee(Me, t)
    }
    function Gu(e, n, t) {
        var r = e.stateNode
        if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
            return t
        r = r.getChildContext()
        for (var l in r)
            if (!(l in n)) throw Error(d(108, b(e) || "Unknown", l))
        return N({}, t, r)
    }
    function Kr(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                Dn),
            (Jn = xe.current),
            ee(xe, e),
            ee(Me, Me.current),
            !0
        )
    }
    function Zu(e, n, t) {
        var r = e.stateNode
        if (!r) throw Error(d(169))
        t
            ? ((e = Gu(e, n, Jn)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              te(Me),
              te(xe),
              ee(xe, e))
            : te(Me),
            ee(Me, t)
    }
    var kn = null,
        Yr = !1,
        _i = !1
    function Ju(e) {
        kn === null ? (kn = [e]) : kn.push(e)
    }
    function ef(e) {
        ;(Yr = !0), Ju(e)
    }
    function Un() {
        if (!_i && kn !== null) {
            _i = !0
            var e = 0,
                n = G
            try {
                var t = kn
                for (G = 1; e < t.length; e++) {
                    var r = t[e]
                    do r = r(!0)
                    while (r !== null)
                }
                ;(kn = null), (Yr = !1)
            } catch (l) {
                throw (kn !== null && (kn = kn.slice(e + 1)), bo(Wl, Un), l)
            } finally {
                ;(G = n), (_i = !1)
            }
        }
        return null
    }
    var kt = [],
        _t = 0,
        Xr = null,
        Gr = 0,
        Ye = [],
        Xe = 0,
        qn = null,
        _n = 1,
        xn = ""
    function bn(e, n) {
        ;(kt[_t++] = Gr), (kt[_t++] = Xr), (Xr = e), (Gr = n)
    }
    function qu(e, n, t) {
        ;(Ye[Xe++] = _n), (Ye[Xe++] = xn), (Ye[Xe++] = qn), (qn = e)
        var r = _n
        e = xn
        var l = 32 - rn(r) - 1
        ;(r &= ~(1 << l)), (t += 1)
        var i = 32 - rn(n) + l
        if (30 < i) {
            var o = l - (l % 5)
            ;(i = (r & ((1 << o) - 1)).toString(32)),
                (r >>= o),
                (l -= o),
                (_n = (1 << (32 - rn(n) + l)) | (t << l) | r),
                (xn = i + e)
        } else (_n = (1 << i) | (t << l) | r), (xn = e)
    }
    function xi(e) {
        e.return !== null && (bn(e, 1), qu(e, 1, 0))
    }
    function Ei(e) {
        for (; e === Xr; )
            (Xr = kt[--_t]), (kt[_t] = null), (Gr = kt[--_t]), (kt[_t] = null)
        for (; e === qn; )
            (qn = Ye[--Xe]),
                (Ye[Xe] = null),
                (xn = Ye[--Xe]),
                (Ye[Xe] = null),
                (_n = Ye[--Xe]),
                (Ye[Xe] = null)
    }
    var He = null,
        We = null,
        le = !1,
        on = null
    function bu(e, n) {
        var t = qe(5, null, null, 0)
        ;(t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            (n = e.deletions),
            n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)
    }
    function es(e, n) {
        switch (e.tag) {
            case 5:
                var t = e.type
                return (
                    (n =
                        n.nodeType !== 1 ||
                        t.toLowerCase() !== n.nodeName.toLowerCase()
                            ? null
                            : n),
                    n !== null
                        ? ((e.stateNode = n),
                          (He = e),
                          (We = On(n.firstChild)),
                          !0)
                        : !1
                )
            case 6:
                return (
                    (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                    n !== null
                        ? ((e.stateNode = n), (He = e), (We = null), !0)
                        : !1
                )
            case 13:
                return (
                    (n = n.nodeType !== 8 ? null : n),
                    n !== null
                        ? ((t = qn !== null ? { id: _n, overflow: xn } : null),
                          (e.memoizedState = {
                              dehydrated: n,
                              treeContext: t,
                              retryLane: 1073741824,
                          }),
                          (t = qe(18, null, null, 0)),
                          (t.stateNode = n),
                          (t.return = e),
                          (e.child = t),
                          (He = e),
                          (We = null),
                          !0)
                        : !1
                )
            default:
                return !1
        }
    }
    function Ci(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function Ni(e) {
        if (le) {
            var n = We
            if (n) {
                var t = n
                if (!es(e, n)) {
                    if (Ci(e)) throw Error(d(418))
                    n = On(t.nextSibling)
                    var r = He
                    n && es(e, n)
                        ? bu(r, t)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (le = !1),
                          (He = e))
                }
            } else {
                if (Ci(e)) throw Error(d(418))
                ;(e.flags = (e.flags & -4097) | 2), (le = !1), (He = e)
            }
        }
    }
    function ns(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
            e = e.return
        He = e
    }
    function Zr(e) {
        if (e !== He) return !1
        if (!le) return ns(e), (le = !0), !1
        var n
        if (
            ((n = e.tag !== 3) &&
                !(n = e.tag !== 5) &&
                ((n = e.type),
                (n =
                    n !== "head" &&
                    n !== "body" &&
                    !yi(e.type, e.memoizedProps))),
            n && (n = We))
        ) {
            if (Ci(e)) throw (ts(), Error(d(418)))
            for (; n; ) bu(e, n), (n = On(n.nextSibling))
        }
        if ((ns(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(d(317))
            e: {
                for (e = e.nextSibling, n = 0; e; ) {
                    if (e.nodeType === 8) {
                        var t = e.data
                        if (t === "/$") {
                            if (n === 0) {
                                We = On(e.nextSibling)
                                break e
                            }
                            n--
                        } else (t !== "$" && t !== "$!" && t !== "$?") || n++
                    }
                    e = e.nextSibling
                }
                We = null
            }
        } else We = He ? On(e.stateNode.nextSibling) : null
        return !0
    }
    function ts() {
        for (var e = We; e; ) e = On(e.nextSibling)
    }
    function xt() {
        ;(We = He = null), (le = !1)
    }
    function Pi(e) {
        on === null ? (on = [e]) : on.push(e)
    }
    var nf = _e.ReactCurrentBatchConfig
    function lr(e, n, t) {
        if (
            ((e = t.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (t._owner) {
                if (((t = t._owner), t)) {
                    if (t.tag !== 1) throw Error(d(309))
                    var r = t.stateNode
                }
                if (!r) throw Error(d(147, e))
                var l = r,
                    i = "" + e
                return n !== null &&
                    n.ref !== null &&
                    typeof n.ref == "function" &&
                    n.ref._stringRef === i
                    ? n.ref
                    : ((n = function (o) {
                          var u = l.refs
                          o === null ? delete u[i] : (u[i] = o)
                      }),
                      (n._stringRef = i),
                      n)
            }
            if (typeof e != "string") throw Error(d(284))
            if (!t._owner) throw Error(d(290, e))
        }
        return e
    }
    function Jr(e, n) {
        throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
                d(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(n).join(", ") + "}"
                        : e
                )
            ))
        )
    }
    function rs(e) {
        var n = e._init
        return n(e._payload)
    }
    function ls(e) {
        function n(f, a) {
            if (e) {
                var p = f.deletions
                p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a)
            }
        }
        function t(f, a) {
            if (!e) return null
            for (; a !== null; ) n(f, a), (a = a.sibling)
            return null
        }
        function r(f, a) {
            for (f = new Map(); a !== null; )
                a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                    (a = a.sibling)
            return f
        }
        function l(f, a) {
            return (f = Kn(f, a)), (f.index = 0), (f.sibling = null), f
        }
        function i(f, a, p) {
            return (
                (f.index = p),
                e
                    ? ((p = f.alternate),
                      p !== null
                          ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p)
                          : ((f.flags |= 2), a))
                    : ((f.flags |= 1048576), a)
            )
        }
        function o(f) {
            return e && f.alternate === null && (f.flags |= 2), f
        }
        function u(f, a, p, _) {
            return a === null || a.tag !== 6
                ? ((a = wo(p, f.mode, _)), (a.return = f), a)
                : ((a = l(a, p)), (a.return = f), a)
        }
        function s(f, a, p, _) {
            var z = p.type
            return z === Ie
                ? w(f, a, p.props.children, _, p.key)
                : a !== null &&
                  (a.elementType === z ||
                      (typeof z == "object" &&
                          z !== null &&
                          z.$$typeof === Re &&
                          rs(z) === a.type))
                ? ((_ = l(a, p.props)),
                  (_.ref = lr(f, a, p)),
                  (_.return = f),
                  _)
                : ((_ = kl(p.type, p.key, p.props, null, f.mode, _)),
                  (_.ref = lr(f, a, p)),
                  (_.return = f),
                  _)
        }
        function m(f, a, p, _) {
            return a === null ||
                a.tag !== 4 ||
                a.stateNode.containerInfo !== p.containerInfo ||
                a.stateNode.implementation !== p.implementation
                ? ((a = So(p, f.mode, _)), (a.return = f), a)
                : ((a = l(a, p.children || [])), (a.return = f), a)
        }
        function w(f, a, p, _, z) {
            return a === null || a.tag !== 7
                ? ((a = ut(p, f.mode, _, z)), (a.return = f), a)
                : ((a = l(a, p)), (a.return = f), a)
        }
        function S(f, a, p) {
            if ((typeof a == "string" && a !== "") || typeof a == "number")
                return (a = wo("" + a, f.mode, p)), (a.return = f), a
            if (typeof a == "object" && a !== null) {
                switch (a.$$typeof) {
                    case nn:
                        return (
                            (p = kl(a.type, a.key, a.props, null, f.mode, p)),
                            (p.ref = lr(f, null, a)),
                            (p.return = f),
                            p
                        )
                    case Pe:
                        return (a = So(a, f.mode, p)), (a.return = f), a
                    case Re:
                        var _ = a._init
                        return S(f, _(a._payload), p)
                }
                if (Rt(a) || R(a))
                    return (a = ut(a, f.mode, p, null)), (a.return = f), a
                Jr(f, a)
            }
            return null
        }
        function y(f, a, p, _) {
            var z = a !== null ? a.key : null
            if ((typeof p == "string" && p !== "") || typeof p == "number")
                return z !== null ? null : u(f, a, "" + p, _)
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                    case nn:
                        return p.key === z ? s(f, a, p, _) : null
                    case Pe:
                        return p.key === z ? m(f, a, p, _) : null
                    case Re:
                        return (z = p._init), y(f, a, z(p._payload), _)
                }
                if (Rt(p) || R(p))
                    return z !== null ? null : w(f, a, p, _, null)
                Jr(f, p)
            }
            return null
        }
        function E(f, a, p, _, z) {
            if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
                return (f = f.get(p) || null), u(a, f, "" + _, z)
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case nn:
                        return (
                            (f = f.get(_.key === null ? p : _.key) || null),
                            s(a, f, _, z)
                        )
                    case Pe:
                        return (
                            (f = f.get(_.key === null ? p : _.key) || null),
                            m(a, f, _, z)
                        )
                    case Re:
                        var L = _._init
                        return E(f, a, p, L(_._payload), z)
                }
                if (Rt(_) || R(_))
                    return (f = f.get(p) || null), w(a, f, _, z, null)
                Jr(a, _)
            }
            return null
        }
        function P(f, a, p, _) {
            for (
                var z = null, L = null, I = a, O = (a = 0), ge = null;
                I !== null && O < p.length;
                O++
            ) {
                I.index > O ? ((ge = I), (I = null)) : (ge = I.sibling)
                var Y = y(f, I, p[O], _)
                if (Y === null) {
                    I === null && (I = ge)
                    break
                }
                e && I && Y.alternate === null && n(f, I),
                    (a = i(Y, a, O)),
                    L === null ? (z = Y) : (L.sibling = Y),
                    (L = Y),
                    (I = ge)
            }
            if (O === p.length) return t(f, I), le && bn(f, O), z
            if (I === null) {
                for (; O < p.length; O++)
                    (I = S(f, p[O], _)),
                        I !== null &&
                            ((a = i(I, a, O)),
                            L === null ? (z = I) : (L.sibling = I),
                            (L = I))
                return le && bn(f, O), z
            }
            for (I = r(f, I); O < p.length; O++)
                (ge = E(I, f, O, p[O], _)),
                    ge !== null &&
                        (e &&
                            ge.alternate !== null &&
                            I.delete(ge.key === null ? O : ge.key),
                        (a = i(ge, a, O)),
                        L === null ? (z = ge) : (L.sibling = ge),
                        (L = ge))
            return (
                e &&
                    I.forEach(function (Yn) {
                        return n(f, Yn)
                    }),
                le && bn(f, O),
                z
            )
        }
        function j(f, a, p, _) {
            var z = R(p)
            if (typeof z != "function") throw Error(d(150))
            if (((p = z.call(p)), p == null)) throw Error(d(151))
            for (
                var L = (z = null), I = a, O = (a = 0), ge = null, Y = p.next();
                I !== null && !Y.done;
                O++, Y = p.next()
            ) {
                I.index > O ? ((ge = I), (I = null)) : (ge = I.sibling)
                var Yn = y(f, I, Y.value, _)
                if (Yn === null) {
                    I === null && (I = ge)
                    break
                }
                e && I && Yn.alternate === null && n(f, I),
                    (a = i(Yn, a, O)),
                    L === null ? (z = Yn) : (L.sibling = Yn),
                    (L = Yn),
                    (I = ge)
            }
            if (Y.done) return t(f, I), le && bn(f, O), z
            if (I === null) {
                for (; !Y.done; O++, Y = p.next())
                    (Y = S(f, Y.value, _)),
                        Y !== null &&
                            ((a = i(Y, a, O)),
                            L === null ? (z = Y) : (L.sibling = Y),
                            (L = Y))
                return le && bn(f, O), z
            }
            for (I = r(f, I); !Y.done; O++, Y = p.next())
                (Y = E(I, f, O, Y.value, _)),
                    Y !== null &&
                        (e &&
                            Y.alternate !== null &&
                            I.delete(Y.key === null ? O : Y.key),
                        (a = i(Y, a, O)),
                        L === null ? (z = Y) : (L.sibling = Y),
                        (L = Y))
            return (
                e &&
                    I.forEach(function (Of) {
                        return n(f, Of)
                    }),
                le && bn(f, O),
                z
            )
        }
        function ce(f, a, p, _) {
            if (
                (typeof p == "object" &&
                    p !== null &&
                    p.type === Ie &&
                    p.key === null &&
                    (p = p.props.children),
                typeof p == "object" && p !== null)
            ) {
                switch (p.$$typeof) {
                    case nn:
                        e: {
                            for (var z = p.key, L = a; L !== null; ) {
                                if (L.key === z) {
                                    if (((z = p.type), z === Ie)) {
                                        if (L.tag === 7) {
                                            t(f, L.sibling),
                                                (a = l(L, p.props.children)),
                                                (a.return = f),
                                                (f = a)
                                            break e
                                        }
                                    } else if (
                                        L.elementType === z ||
                                        (typeof z == "object" &&
                                            z !== null &&
                                            z.$$typeof === Re &&
                                            rs(z) === L.type)
                                    ) {
                                        t(f, L.sibling),
                                            (a = l(L, p.props)),
                                            (a.ref = lr(f, L, p)),
                                            (a.return = f),
                                            (f = a)
                                        break e
                                    }
                                    t(f, L)
                                    break
                                } else n(f, L)
                                L = L.sibling
                            }
                            p.type === Ie
                                ? ((a = ut(p.props.children, f.mode, _, p.key)),
                                  (a.return = f),
                                  (f = a))
                                : ((_ = kl(
                                      p.type,
                                      p.key,
                                      p.props,
                                      null,
                                      f.mode,
                                      _
                                  )),
                                  (_.ref = lr(f, a, p)),
                                  (_.return = f),
                                  (f = _))
                        }
                        return o(f)
                    case Pe:
                        e: {
                            for (L = p.key; a !== null; ) {
                                if (a.key === L)
                                    if (
                                        a.tag === 4 &&
                                        a.stateNode.containerInfo ===
                                            p.containerInfo &&
                                        a.stateNode.implementation ===
                                            p.implementation
                                    ) {
                                        t(f, a.sibling),
                                            (a = l(a, p.children || [])),
                                            (a.return = f),
                                            (f = a)
                                        break e
                                    } else {
                                        t(f, a)
                                        break
                                    }
                                else n(f, a)
                                a = a.sibling
                            }
                            ;(a = So(p, f.mode, _)), (a.return = f), (f = a)
                        }
                        return o(f)
                    case Re:
                        return (L = p._init), ce(f, a, L(p._payload), _)
                }
                if (Rt(p)) return P(f, a, p, _)
                if (R(p)) return j(f, a, p, _)
                Jr(f, p)
            }
            return (typeof p == "string" && p !== "") || typeof p == "number"
                ? ((p = "" + p),
                  a !== null && a.tag === 6
                      ? (t(f, a.sibling),
                        (a = l(a, p)),
                        (a.return = f),
                        (f = a))
                      : (t(f, a),
                        (a = wo(p, f.mode, _)),
                        (a.return = f),
                        (f = a)),
                  o(f))
                : t(f, a)
        }
        return ce
    }
    var Et = ls(!0),
        is = ls(!1),
        qr = Fn(null),
        br = null,
        Ct = null,
        ji = null
    function zi() {
        ji = Ct = br = null
    }
    function Ti(e) {
        var n = qr.current
        te(qr), (e._currentValue = n)
    }
    function Li(e, n, t) {
        for (; e !== null; ) {
            var r = e.alternate
            if (
                ((e.childLanes & n) !== n
                    ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                    : r !== null &&
                      (r.childLanes & n) !== n &&
                      (r.childLanes |= n),
                e === t)
            )
                break
            e = e.return
        }
    }
    function Nt(e, n) {
        ;(br = e),
            (ji = Ct = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & n && (Fe = !0), (e.firstContext = null))
    }
    function Ge(e) {
        var n = e._currentValue
        if (ji !== e)
            if (
                ((e = { context: e, memoizedValue: n, next: null }),
                Ct === null)
            ) {
                if (br === null) throw Error(d(308))
                ;(Ct = e), (br.dependencies = { lanes: 0, firstContext: e })
            } else Ct = Ct.next = e
        return n
    }
    var et = null
    function Ii(e) {
        et === null ? (et = [e]) : et.push(e)
    }
    function os(e, n, t, r) {
        var l = n.interleaved
        return (
            l === null
                ? ((t.next = t), Ii(n))
                : ((t.next = l.next), (l.next = t)),
            (n.interleaved = t),
            En(e, r)
        )
    }
    function En(e, n) {
        e.lanes |= n
        var t = e.alternate
        for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
            (e.childLanes |= n),
                (t = e.alternate),
                t !== null && (t.childLanes |= n),
                (t = e),
                (e = e.return)
        return t.tag === 3 ? t.stateNode : null
    }
    var An = !1
    function Ri(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        }
    }
    function us(e, n) {
        ;(e = e.updateQueue),
            n.updateQueue === e &&
                (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                })
    }
    function Cn(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        }
    }
    function Bn(e, n, t) {
        var r = e.updateQueue
        if (r === null) return null
        if (((r = r.shared), H & 2)) {
            var l = r.pending
            return (
                l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
                (r.pending = n),
                En(e, t)
            )
        }
        return (
            (l = r.interleaved),
            l === null
                ? ((n.next = n), Ii(r))
                : ((n.next = l.next), (l.next = n)),
            (r.interleaved = n),
            En(e, t)
        )
    }
    function el(e, n, t) {
        if (
            ((n = n.updateQueue),
            n !== null && ((n = n.shared), (t & 4194240) !== 0))
        ) {
            var r = n.lanes
            ;(r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t)
        }
    }
    function ss(e, n) {
        var t = e.updateQueue,
            r = e.alternate
        if (r !== null && ((r = r.updateQueue), t === r)) {
            var l = null,
                i = null
            if (((t = t.firstBaseUpdate), t !== null)) {
                do {
                    var o = {
                        eventTime: t.eventTime,
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: t.callback,
                        next: null,
                    }
                    i === null ? (l = i = o) : (i = i.next = o), (t = t.next)
                } while (t !== null)
                i === null ? (l = i = n) : (i = i.next = n)
            } else l = i = n
            ;(t = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
            }),
                (e.updateQueue = t)
            return
        }
        ;(e = t.lastBaseUpdate),
            e === null ? (t.firstBaseUpdate = n) : (e.next = n),
            (t.lastBaseUpdate = n)
    }
    function nl(e, n, t, r) {
        var l = e.updateQueue
        An = !1
        var i = l.firstBaseUpdate,
            o = l.lastBaseUpdate,
            u = l.shared.pending
        if (u !== null) {
            l.shared.pending = null
            var s = u,
                m = s.next
            ;(s.next = null), o === null ? (i = m) : (o.next = m), (o = s)
            var w = e.alternate
            w !== null &&
                ((w = w.updateQueue),
                (u = w.lastBaseUpdate),
                u !== o &&
                    (u === null ? (w.firstBaseUpdate = m) : (u.next = m),
                    (w.lastBaseUpdate = s)))
        }
        if (i !== null) {
            var S = l.baseState
            ;(o = 0), (w = m = s = null), (u = i)
            do {
                var y = u.lane,
                    E = u.eventTime
                if ((r & y) === y) {
                    w !== null &&
                        (w = w.next =
                            {
                                eventTime: E,
                                lane: 0,
                                tag: u.tag,
                                payload: u.payload,
                                callback: u.callback,
                                next: null,
                            })
                    e: {
                        var P = e,
                            j = u
                        switch (((y = n), (E = t), j.tag)) {
                            case 1:
                                if (((P = j.payload), typeof P == "function")) {
                                    S = P.call(E, S, y)
                                    break e
                                }
                                S = P
                                break e
                            case 3:
                                P.flags = (P.flags & -65537) | 128
                            case 0:
                                if (
                                    ((P = j.payload),
                                    (y =
                                        typeof P == "function"
                                            ? P.call(E, S, y)
                                            : P),
                                    y == null)
                                )
                                    break e
                                S = N({}, S, y)
                                break e
                            case 2:
                                An = !0
                        }
                    }
                    u.callback !== null &&
                        u.lane !== 0 &&
                        ((e.flags |= 64),
                        (y = l.effects),
                        y === null ? (l.effects = [u]) : y.push(u))
                } else
                    (E = {
                        eventTime: E,
                        lane: y,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null,
                    }),
                        w === null ? ((m = w = E), (s = S)) : (w = w.next = E),
                        (o |= y)
                if (((u = u.next), u === null)) {
                    if (((u = l.shared.pending), u === null)) break
                    ;(y = u),
                        (u = y.next),
                        (y.next = null),
                        (l.lastBaseUpdate = y),
                        (l.shared.pending = null)
                }
            } while (!0)
            if (
                (w === null && (s = S),
                (l.baseState = s),
                (l.firstBaseUpdate = m),
                (l.lastBaseUpdate = w),
                (n = l.shared.interleaved),
                n !== null)
            ) {
                l = n
                do (o |= l.lane), (l = l.next)
                while (l !== n)
            } else i === null && (l.shared.lanes = 0)
            ;(rt |= o), (e.lanes = o), (e.memoizedState = S)
        }
    }
    function as(e, n, t) {
        if (((e = n.effects), (n.effects = null), e !== null))
            for (n = 0; n < e.length; n++) {
                var r = e[n],
                    l = r.callback
                if (l !== null) {
                    if (((r.callback = null), (r = t), typeof l != "function"))
                        throw Error(d(191, l))
                    l.call(r)
                }
            }
    }
    var ir = {},
        vn = Fn(ir),
        or = Fn(ir),
        ur = Fn(ir)
    function nt(e) {
        if (e === ir) throw Error(d(174))
        return e
    }
    function Mi(e, n) {
        switch ((ee(ur, n), ee(or, e), ee(vn, ir), (e = n.nodeType), e)) {
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "")
                break
            default:
                ;(e = e === 8 ? n.parentNode : n),
                    (n = e.namespaceURI || null),
                    (e = e.tagName),
                    (n = Ol(n, e))
        }
        te(vn), ee(vn, n)
    }
    function Pt() {
        te(vn), te(or), te(ur)
    }
    function cs(e) {
        nt(ur.current)
        var n = nt(vn.current),
            t = Ol(n, e.type)
        n !== t && (ee(or, e), ee(vn, t))
    }
    function Oi(e) {
        or.current === e && (te(vn), te(or))
    }
    var ie = Fn(0)
    function tl(e) {
        for (var n = e; n !== null; ) {
            if (n.tag === 13) {
                var t = n.memoizedState
                if (
                    t !== null &&
                    ((t = t.dehydrated),
                    t === null || t.data === "$?" || t.data === "$!")
                )
                    return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if (n.flags & 128) return n
            } else if (n.child !== null) {
                ;(n.child.return = n), (n = n.child)
                continue
            }
            if (n === e) break
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) return null
                n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
        }
        return null
    }
    var Fi = []
    function Di() {
        for (var e = 0; e < Fi.length; e++)
            Fi[e]._workInProgressVersionPrimary = null
        Fi.length = 0
    }
    var rl = _e.ReactCurrentDispatcher,
        Ui = _e.ReactCurrentBatchConfig,
        tt = 0,
        oe = null,
        me = null,
        ve = null,
        ll = !1,
        sr = !1,
        ar = 0,
        tf = 0
    function Ee() {
        throw Error(d(321))
    }
    function Ai(e, n) {
        if (n === null) return !1
        for (var t = 0; t < n.length && t < e.length; t++)
            if (!ln(e[t], n[t])) return !1
        return !0
    }
    function Bi(e, n, t, r, l, i) {
        if (
            ((tt = i),
            (oe = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (rl.current = e === null || e.memoizedState === null ? uf : sf),
            (e = t(r, l)),
            sr)
        ) {
            i = 0
            do {
                if (((sr = !1), (ar = 0), 25 <= i)) throw Error(d(301))
                ;(i += 1),
                    (ve = me = null),
                    (n.updateQueue = null),
                    (rl.current = af),
                    (e = t(r, l))
            } while (sr)
        }
        if (
            ((rl.current = ul),
            (n = me !== null && me.next !== null),
            (tt = 0),
            (ve = me = oe = null),
            (ll = !1),
            n)
        )
            throw Error(d(300))
        return e
    }
    function Vi() {
        var e = ar !== 0
        return (ar = 0), e
    }
    function yn() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        }
        return (
            ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e), ve
        )
    }
    function Ze() {
        if (me === null) {
            var e = oe.alternate
            e = e !== null ? e.memoizedState : null
        } else e = me.next
        var n = ve === null ? oe.memoizedState : ve.next
        if (n !== null) (ve = n), (me = e)
        else {
            if (e === null) throw Error(d(310))
            ;(me = e),
                (e = {
                    memoizedState: me.memoizedState,
                    baseState: me.baseState,
                    baseQueue: me.baseQueue,
                    queue: me.queue,
                    next: null,
                }),
                ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e)
        }
        return ve
    }
    function cr(e, n) {
        return typeof n == "function" ? n(e) : n
    }
    function $i(e) {
        var n = Ze(),
            t = n.queue
        if (t === null) throw Error(d(311))
        t.lastRenderedReducer = e
        var r = me,
            l = r.baseQueue,
            i = t.pending
        if (i !== null) {
            if (l !== null) {
                var o = l.next
                ;(l.next = i.next), (i.next = o)
            }
            ;(r.baseQueue = l = i), (t.pending = null)
        }
        if (l !== null) {
            ;(i = l.next), (r = r.baseState)
            var u = (o = null),
                s = null,
                m = i
            do {
                var w = m.lane
                if ((tt & w) === w)
                    s !== null &&
                        (s = s.next =
                            {
                                lane: 0,
                                action: m.action,
                                hasEagerState: m.hasEagerState,
                                eagerState: m.eagerState,
                                next: null,
                            }),
                        (r = m.hasEagerState ? m.eagerState : e(r, m.action))
                else {
                    var S = {
                        lane: w,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null,
                    }
                    s === null ? ((u = s = S), (o = r)) : (s = s.next = S),
                        (oe.lanes |= w),
                        (rt |= w)
                }
                m = m.next
            } while (m !== null && m !== i)
            s === null ? (o = r) : (s.next = u),
                ln(r, n.memoizedState) || (Fe = !0),
                (n.memoizedState = r),
                (n.baseState = o),
                (n.baseQueue = s),
                (t.lastRenderedState = r)
        }
        if (((e = t.interleaved), e !== null)) {
            l = e
            do (i = l.lane), (oe.lanes |= i), (rt |= i), (l = l.next)
            while (l !== e)
        } else l === null && (t.lanes = 0)
        return [n.memoizedState, t.dispatch]
    }
    function Hi(e) {
        var n = Ze(),
            t = n.queue
        if (t === null) throw Error(d(311))
        t.lastRenderedReducer = e
        var r = t.dispatch,
            l = t.pending,
            i = n.memoizedState
        if (l !== null) {
            t.pending = null
            var o = (l = l.next)
            do (i = e(i, o.action)), (o = o.next)
            while (o !== l)
            ln(i, n.memoizedState) || (Fe = !0),
                (n.memoizedState = i),
                n.baseQueue === null && (n.baseState = i),
                (t.lastRenderedState = i)
        }
        return [i, r]
    }
    function fs() {}
    function ds(e, n) {
        var t = oe,
            r = Ze(),
            l = n(),
            i = !ln(r.memoizedState, l)
        if (
            (i && ((r.memoizedState = l), (Fe = !0)),
            (r = r.queue),
            Wi(hs.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
                i ||
                (ve !== null && ve.memoizedState.tag & 1))
        ) {
            if (
                ((t.flags |= 2048),
                fr(9, ms.bind(null, t, r, l, n), void 0, null),
                ye === null)
            )
                throw Error(d(349))
            tt & 30 || ps(t, n, l)
        }
        return l
    }
    function ps(e, n, t) {
        ;(e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            (n = oe.updateQueue),
            n === null
                ? ((n = { lastEffect: null, stores: null }),
                  (oe.updateQueue = n),
                  (n.stores = [e]))
                : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e))
    }
    function ms(e, n, t, r) {
        ;(n.value = t), (n.getSnapshot = r), vs(n) && ys(e)
    }
    function hs(e, n, t) {
        return t(function () {
            vs(n) && ys(e)
        })
    }
    function vs(e) {
        var n = e.getSnapshot
        e = e.value
        try {
            var t = n()
            return !ln(e, t)
        } catch {
            return !0
        }
    }
    function ys(e) {
        var n = En(e, 1)
        n !== null && cn(n, e, 1, -1)
    }
    function gs(e) {
        var n = yn()
        return (
            typeof e == "function" && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cr,
                lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = of.bind(null, oe, e)),
            [n.memoizedState, e]
        )
    }
    function fr(e, n, t, r) {
        return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            (n = oe.updateQueue),
            n === null
                ? ((n = { lastEffect: null, stores: null }),
                  (oe.updateQueue = n),
                  (n.lastEffect = e.next = e))
                : ((t = n.lastEffect),
                  t === null
                      ? (n.lastEffect = e.next = e)
                      : ((r = t.next),
                        (t.next = e),
                        (e.next = r),
                        (n.lastEffect = e))),
            e
        )
    }
    function ws() {
        return Ze().memoizedState
    }
    function il(e, n, t, r) {
        var l = yn()
        ;(oe.flags |= e),
            (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r))
    }
    function ol(e, n, t, r) {
        var l = Ze()
        r = r === void 0 ? null : r
        var i = void 0
        if (me !== null) {
            var o = me.memoizedState
            if (((i = o.destroy), r !== null && Ai(r, o.deps))) {
                l.memoizedState = fr(n, t, i, r)
                return
            }
        }
        ;(oe.flags |= e), (l.memoizedState = fr(1 | n, t, i, r))
    }
    function Ss(e, n) {
        return il(8390656, 8, e, n)
    }
    function Wi(e, n) {
        return ol(2048, 8, e, n)
    }
    function ks(e, n) {
        return ol(4, 2, e, n)
    }
    function _s(e, n) {
        return ol(4, 4, e, n)
    }
    function xs(e, n) {
        if (typeof n == "function")
            return (
                (e = e()),
                n(e),
                function () {
                    n(null)
                }
            )
        if (n != null)
            return (
                (e = e()),
                (n.current = e),
                function () {
                    n.current = null
                }
            )
    }
    function Es(e, n, t) {
        return (
            (t = t != null ? t.concat([e]) : null),
            ol(4, 4, xs.bind(null, n, e), t)
        )
    }
    function Qi() {}
    function Cs(e, n) {
        var t = Ze()
        n = n === void 0 ? null : n
        var r = t.memoizedState
        return r !== null && n !== null && Ai(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e)
    }
    function Ns(e, n) {
        var t = Ze()
        n = n === void 0 ? null : n
        var r = t.memoizedState
        return r !== null && n !== null && Ai(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e)
    }
    function Ps(e, n, t) {
        return tt & 21
            ? (ln(t, n) ||
                  ((t = ru()), (oe.lanes |= t), (rt |= t), (e.baseState = !0)),
              n)
            : (e.baseState && ((e.baseState = !1), (Fe = !0)),
              (e.memoizedState = t))
    }
    function rf(e, n) {
        var t = G
        ;(G = t !== 0 && 4 > t ? t : 4), e(!0)
        var r = Ui.transition
        Ui.transition = {}
        try {
            e(!1), n()
        } finally {
            ;(G = t), (Ui.transition = r)
        }
    }
    function js() {
        return Ze().memoizedState
    }
    function lf(e, n, t) {
        var r = Wn(e)
        if (
            ((t = {
                lane: r,
                action: t,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            zs(e))
        )
            Ts(n, t)
        else if (((t = os(e, n, t, r)), t !== null)) {
            var l = ze()
            cn(t, e, r, l), Ls(t, n, r)
        }
    }
    function of(e, n, t) {
        var r = Wn(e),
            l = {
                lane: r,
                action: t,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }
        if (zs(e)) Ts(n, l)
        else {
            var i = e.alternate
            if (
                e.lanes === 0 &&
                (i === null || i.lanes === 0) &&
                ((i = n.lastRenderedReducer), i !== null)
            )
                try {
                    var o = n.lastRenderedState,
                        u = i(o, t)
                    if (
                        ((l.hasEagerState = !0), (l.eagerState = u), ln(u, o))
                    ) {
                        var s = n.interleaved
                        s === null
                            ? ((l.next = l), Ii(n))
                            : ((l.next = s.next), (s.next = l)),
                            (n.interleaved = l)
                        return
                    }
                } catch {
                } finally {
                }
            ;(t = os(e, n, l, r)),
                t !== null && ((l = ze()), cn(t, e, r, l), Ls(t, n, r))
        }
    }
    function zs(e) {
        var n = e.alternate
        return e === oe || (n !== null && n === oe)
    }
    function Ts(e, n) {
        sr = ll = !0
        var t = e.pending
        t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n)
    }
    function Ls(e, n, t) {
        if (t & 4194240) {
            var r = n.lanes
            ;(r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t)
        }
    }
    var ul = {
            readContext: Ge,
            useCallback: Ee,
            useContext: Ee,
            useEffect: Ee,
            useImperativeHandle: Ee,
            useInsertionEffect: Ee,
            useLayoutEffect: Ee,
            useMemo: Ee,
            useReducer: Ee,
            useRef: Ee,
            useState: Ee,
            useDebugValue: Ee,
            useDeferredValue: Ee,
            useTransition: Ee,
            useMutableSource: Ee,
            useSyncExternalStore: Ee,
            useId: Ee,
            unstable_isNewReconciler: !1,
        },
        uf = {
            readContext: Ge,
            useCallback: function (e, n) {
                return (yn().memoizedState = [e, n === void 0 ? null : n]), e
            },
            useContext: Ge,
            useEffect: Ss,
            useImperativeHandle: function (e, n, t) {
                return (
                    (t = t != null ? t.concat([e]) : null),
                    il(4194308, 4, xs.bind(null, n, e), t)
                )
            },
            useLayoutEffect: function (e, n) {
                return il(4194308, 4, e, n)
            },
            useInsertionEffect: function (e, n) {
                return il(4, 2, e, n)
            },
            useMemo: function (e, n) {
                var t = yn()
                return (
                    (n = n === void 0 ? null : n),
                    (e = e()),
                    (t.memoizedState = [e, n]),
                    e
                )
            },
            useReducer: function (e, n, t) {
                var r = yn()
                return (
                    (n = t !== void 0 ? t(n) : n),
                    (r.memoizedState = r.baseState = n),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: n,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = lf.bind(null, oe, e)),
                    [r.memoizedState, e]
                )
            },
            useRef: function (e) {
                var n = yn()
                return (e = { current: e }), (n.memoizedState = e)
            },
            useState: gs,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
                return (yn().memoizedState = e)
            },
            useTransition: function () {
                var e = gs(!1),
                    n = e[0]
                return (
                    (e = rf.bind(null, e[1])), (yn().memoizedState = e), [n, e]
                )
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
                var r = oe,
                    l = yn()
                if (le) {
                    if (t === void 0) throw Error(d(407))
                    t = t()
                } else {
                    if (((t = n()), ye === null)) throw Error(d(349))
                    tt & 30 || ps(r, n, t)
                }
                l.memoizedState = t
                var i = { value: t, getSnapshot: n }
                return (
                    (l.queue = i),
                    Ss(hs.bind(null, r, i, e), [e]),
                    (r.flags |= 2048),
                    fr(9, ms.bind(null, r, i, t, n), void 0, null),
                    t
                )
            },
            useId: function () {
                var e = yn(),
                    n = ye.identifierPrefix
                if (le) {
                    var t = xn,
                        r = _n
                    ;(t = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + t),
                        (n = ":" + n + "R" + t),
                        (t = ar++),
                        0 < t && (n += "H" + t.toString(32)),
                        (n += ":")
                } else (t = tf++), (n = ":" + n + "r" + t.toString(32) + ":")
                return (e.memoizedState = n)
            },
            unstable_isNewReconciler: !1,
        },
        sf = {
            readContext: Ge,
            useCallback: Cs,
            useContext: Ge,
            useEffect: Wi,
            useImperativeHandle: Es,
            useInsertionEffect: ks,
            useLayoutEffect: _s,
            useMemo: Ns,
            useReducer: $i,
            useRef: ws,
            useState: function () {
                return $i(cr)
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
                var n = Ze()
                return Ps(n, me.memoizedState, e)
            },
            useTransition: function () {
                var e = $i(cr)[0],
                    n = Ze().memoizedState
                return [e, n]
            },
            useMutableSource: fs,
            useSyncExternalStore: ds,
            useId: js,
            unstable_isNewReconciler: !1,
        },
        af = {
            readContext: Ge,
            useCallback: Cs,
            useContext: Ge,
            useEffect: Wi,
            useImperativeHandle: Es,
            useInsertionEffect: ks,
            useLayoutEffect: _s,
            useMemo: Ns,
            useReducer: Hi,
            useRef: ws,
            useState: function () {
                return Hi(cr)
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
                var n = Ze()
                return me === null
                    ? (n.memoizedState = e)
                    : Ps(n, me.memoizedState, e)
            },
            useTransition: function () {
                var e = Hi(cr)[0],
                    n = Ze().memoizedState
                return [e, n]
            },
            useMutableSource: fs,
            useSyncExternalStore: ds,
            useId: js,
            unstable_isNewReconciler: !1,
        }
    function un(e, n) {
        if (e && e.defaultProps) {
            ;(n = N({}, n)), (e = e.defaultProps)
            for (var t in e) n[t] === void 0 && (n[t] = e[t])
            return n
        }
        return n
    }
    function Ki(e, n, t, r) {
        ;(n = e.memoizedState),
            (t = t(r, n)),
            (t = t == null ? n : N({}, n, t)),
            (e.memoizedState = t),
            e.lanes === 0 && (e.updateQueue.baseState = t)
    }
    var sl = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Gn(e) === e : !1
        },
        enqueueSetState: function (e, n, t) {
            e = e._reactInternals
            var r = ze(),
                l = Wn(e),
                i = Cn(r, l)
            ;(i.payload = n),
                t != null && (i.callback = t),
                (n = Bn(e, i, l)),
                n !== null && (cn(n, e, l, r), el(n, e, l))
        },
        enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals
            var r = ze(),
                l = Wn(e),
                i = Cn(r, l)
            ;(i.tag = 1),
                (i.payload = n),
                t != null && (i.callback = t),
                (n = Bn(e, i, l)),
                n !== null && (cn(n, e, l, r), el(n, e, l))
        },
        enqueueForceUpdate: function (e, n) {
            e = e._reactInternals
            var t = ze(),
                r = Wn(e),
                l = Cn(t, r)
            ;(l.tag = 2),
                n != null && (l.callback = n),
                (n = Bn(e, l, r)),
                n !== null && (cn(n, e, r, t), el(n, e, r))
        },
    }
    function Is(e, n, t, r, l, i, o) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, i, o)
                : n.prototype && n.prototype.isPureReactComponent
                ? !Jt(t, r) || !Jt(l, i)
                : !0
        )
    }
    function Rs(e, n, t) {
        var r = !1,
            l = Dn,
            i = n.contextType
        return (
            typeof i == "object" && i !== null
                ? (i = Ge(i))
                : ((l = Oe(n) ? Jn : xe.current),
                  (r = n.contextTypes),
                  (i = (r = r != null) ? St(e, l) : Dn)),
            (n = new n(t, i)),
            (e.memoizedState =
                n.state !== null && n.state !== void 0 ? n.state : null),
            (n.updater = sl),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = l),
                (e.__reactInternalMemoizedMaskedChildContext = i)),
            n
        )
    }
    function Ms(e, n, t, r) {
        ;(e = n.state),
            typeof n.componentWillReceiveProps == "function" &&
                n.componentWillReceiveProps(t, r),
            typeof n.UNSAFE_componentWillReceiveProps == "function" &&
                n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && sl.enqueueReplaceState(n, n.state, null)
    }
    function Yi(e, n, t, r) {
        var l = e.stateNode
        ;(l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ri(e)
        var i = n.contextType
        typeof i == "object" && i !== null
            ? (l.context = Ge(i))
            : ((i = Oe(n) ? Jn : xe.current), (l.context = St(e, i))),
            (l.state = e.memoizedState),
            (i = n.getDerivedStateFromProps),
            typeof i == "function" &&
                (Ki(e, n, i, t), (l.state = e.memoizedState)),
            typeof n.getDerivedStateFromProps == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function" ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                ((n = l.state),
                typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount(),
                n !== l.state && sl.enqueueReplaceState(l, l.state, null),
                nl(e, t, l, r),
                (l.state = e.memoizedState)),
            typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function jt(e, n) {
        try {
            var t = "",
                r = n
            do (t += Q(r)), (r = r.return)
            while (r)
            var l = t
        } catch (i) {
            l =
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
        }
        return { value: e, source: n, stack: l, digest: null }
    }
    function Xi(e, n, t) {
        return { value: e, source: null, stack: t ?? null, digest: n ?? null }
    }
    function Gi(e, n) {
        try {
            console.error(n.value)
        } catch (t) {
            setTimeout(function () {
                throw t
            })
        }
    }
    var cf = typeof WeakMap == "function" ? WeakMap : Map
    function Os(e, n, t) {
        ;(t = Cn(-1, t)), (t.tag = 3), (t.payload = { element: null })
        var r = n.value
        return (
            (t.callback = function () {
                hl || ((hl = !0), (co = r)), Gi(e, n)
            }),
            t
        )
    }
    function Fs(e, n, t) {
        ;(t = Cn(-1, t)), (t.tag = 3)
        var r = e.type.getDerivedStateFromError
        if (typeof r == "function") {
            var l = n.value
            ;(t.payload = function () {
                return r(l)
            }),
                (t.callback = function () {
                    Gi(e, n)
                })
        }
        var i = e.stateNode
        return (
            i !== null &&
                typeof i.componentDidCatch == "function" &&
                (t.callback = function () {
                    Gi(e, n),
                        typeof r != "function" &&
                            ($n === null
                                ? ($n = new Set([this]))
                                : $n.add(this))
                    var o = n.stack
                    this.componentDidCatch(n.value, {
                        componentStack: o !== null ? o : "",
                    })
                }),
            t
        )
    }
    function Ds(e, n, t) {
        var r = e.pingCache
        if (r === null) {
            r = e.pingCache = new cf()
            var l = new Set()
            r.set(n, l)
        } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l))
        l.has(t) || (l.add(t), (e = Ef.bind(null, e, n, t)), n.then(e, e))
    }
    function Us(e) {
        do {
            var n
            if (
                ((n = e.tag === 13) &&
                    ((n = e.memoizedState),
                    (n = n !== null ? n.dehydrated !== null : !0)),
                n)
            )
                return e
            e = e.return
        } while (e !== null)
        return null
    }
    function As(e, n, t, r, l) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = l), e)
            : (e === n
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (t.flags |= 131072),
                    (t.flags &= -52805),
                    t.tag === 1 &&
                        (t.alternate === null
                            ? (t.tag = 17)
                            : ((n = Cn(-1, 1)), (n.tag = 2), Bn(t, n, 1))),
                    (t.lanes |= 1)),
              e)
    }
    var ff = _e.ReactCurrentOwner,
        Fe = !1
    function je(e, n, t, r) {
        n.child = e === null ? is(n, null, t, r) : Et(n, e.child, t, r)
    }
    function Bs(e, n, t, r, l) {
        t = t.render
        var i = n.ref
        return (
            Nt(n, l),
            (r = Bi(e, n, t, r, i, l)),
            (t = Vi()),
            e !== null && !Fe
                ? ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~l),
                  Nn(e, n, l))
                : (le && t && xi(n), (n.flags |= 1), je(e, n, r, l), n.child)
        )
    }
    function Vs(e, n, t, r, l) {
        if (e === null) {
            var i = t.type
            return typeof i == "function" &&
                !go(i) &&
                i.defaultProps === void 0 &&
                t.compare === null &&
                t.defaultProps === void 0
                ? ((n.tag = 15), (n.type = i), $s(e, n, i, r, l))
                : ((e = kl(t.type, null, r, n, n.mode, l)),
                  (e.ref = n.ref),
                  (e.return = n),
                  (n.child = e))
        }
        if (((i = e.child), !(e.lanes & l))) {
            var o = i.memoizedProps
            if (
                ((t = t.compare),
                (t = t !== null ? t : Jt),
                t(o, r) && e.ref === n.ref)
            )
                return Nn(e, n, l)
        }
        return (
            (n.flags |= 1),
            (e = Kn(i, r)),
            (e.ref = n.ref),
            (e.return = n),
            (n.child = e)
        )
    }
    function $s(e, n, t, r, l) {
        if (e !== null) {
            var i = e.memoizedProps
            if (Jt(i, r) && e.ref === n.ref)
                if (((Fe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
                    e.flags & 131072 && (Fe = !0)
                else return (n.lanes = e.lanes), Nn(e, n, l)
        }
        return Zi(e, n, t, r, l)
    }
    function Hs(e, n, t) {
        var r = n.pendingProps,
            l = r.children,
            i = e !== null ? e.memoizedState : null
        if (r.mode === "hidden")
            if (!(n.mode & 1))
                (n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    ee(Tt, Qe),
                    (Qe |= t)
            else {
                if (!(t & 1073741824))
                    return (
                        (e = i !== null ? i.baseLanes | t : t),
                        (n.lanes = n.childLanes = 1073741824),
                        (n.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (n.updateQueue = null),
                        ee(Tt, Qe),
                        (Qe |= e),
                        null
                    )
                ;(n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (r = i !== null ? i.baseLanes : t),
                    ee(Tt, Qe),
                    (Qe |= r)
            }
        else
            i !== null
                ? ((r = i.baseLanes | t), (n.memoizedState = null))
                : (r = t),
                ee(Tt, Qe),
                (Qe |= r)
        return je(e, n, l, t), n.child
    }
    function Ws(e, n) {
        var t = n.ref
        ;((e === null && t !== null) || (e !== null && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152))
    }
    function Zi(e, n, t, r, l) {
        var i = Oe(t) ? Jn : xe.current
        return (
            (i = St(n, i)),
            Nt(n, l),
            (t = Bi(e, n, t, r, i, l)),
            (r = Vi()),
            e !== null && !Fe
                ? ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~l),
                  Nn(e, n, l))
                : (le && r && xi(n), (n.flags |= 1), je(e, n, t, l), n.child)
        )
    }
    function Qs(e, n, t, r, l) {
        if (Oe(t)) {
            var i = !0
            Kr(n)
        } else i = !1
        if ((Nt(n, l), n.stateNode === null))
            cl(e, n), Rs(n, t, r), Yi(n, t, r, l), (r = !0)
        else if (e === null) {
            var o = n.stateNode,
                u = n.memoizedProps
            o.props = u
            var s = o.context,
                m = t.contextType
            typeof m == "object" && m !== null
                ? (m = Ge(m))
                : ((m = Oe(t) ? Jn : xe.current), (m = St(n, m)))
            var w = t.getDerivedStateFromProps,
                S =
                    typeof w == "function" ||
                    typeof o.getSnapshotBeforeUpdate == "function"
            S ||
                (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof o.componentWillReceiveProps != "function") ||
                ((u !== r || s !== m) && Ms(n, o, r, m)),
                (An = !1)
            var y = n.memoizedState
            ;(o.state = y),
                nl(n, r, o, l),
                (s = n.memoizedState),
                u !== r || y !== s || Me.current || An
                    ? (typeof w == "function" &&
                          (Ki(n, t, w, r), (s = n.memoizedState)),
                      (u = An || Is(n, t, u, r, y, s, m))
                          ? (S ||
                                (typeof o.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof o.componentWillMount !=
                                        "function") ||
                                (typeof o.componentWillMount == "function" &&
                                    o.componentWillMount(),
                                typeof o.UNSAFE_componentWillMount ==
                                    "function" &&
                                    o.UNSAFE_componentWillMount()),
                            typeof o.componentDidMount == "function" &&
                                (n.flags |= 4194308))
                          : (typeof o.componentDidMount == "function" &&
                                (n.flags |= 4194308),
                            (n.memoizedProps = r),
                            (n.memoizedState = s)),
                      (o.props = r),
                      (o.state = s),
                      (o.context = m),
                      (r = u))
                    : (typeof o.componentDidMount == "function" &&
                          (n.flags |= 4194308),
                      (r = !1))
        } else {
            ;(o = n.stateNode),
                us(e, n),
                (u = n.memoizedProps),
                (m = n.type === n.elementType ? u : un(n.type, u)),
                (o.props = m),
                (S = n.pendingProps),
                (y = o.context),
                (s = t.contextType),
                typeof s == "object" && s !== null
                    ? (s = Ge(s))
                    : ((s = Oe(t) ? Jn : xe.current), (s = St(n, s)))
            var E = t.getDerivedStateFromProps
            ;(w =
                typeof E == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function") ||
                (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof o.componentWillReceiveProps != "function") ||
                ((u !== S || y !== s) && Ms(n, o, r, s)),
                (An = !1),
                (y = n.memoizedState),
                (o.state = y),
                nl(n, r, o, l)
            var P = n.memoizedState
            u !== S || y !== P || Me.current || An
                ? (typeof E == "function" &&
                      (Ki(n, t, E, r), (P = n.memoizedState)),
                  (m = An || Is(n, t, m, r, y, P, s) || !1)
                      ? (w ||
                            (typeof o.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof o.componentWillUpdate != "function") ||
                            (typeof o.componentWillUpdate == "function" &&
                                o.componentWillUpdate(r, P, s),
                            typeof o.UNSAFE_componentWillUpdate == "function" &&
                                o.UNSAFE_componentWillUpdate(r, P, s)),
                        typeof o.componentDidUpdate == "function" &&
                            (n.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate == "function" &&
                            (n.flags |= 1024))
                      : (typeof o.componentDidUpdate != "function" ||
                            (u === e.memoizedProps && y === e.memoizedState) ||
                            (n.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate != "function" ||
                            (u === e.memoizedProps && y === e.memoizedState) ||
                            (n.flags |= 1024),
                        (n.memoizedProps = r),
                        (n.memoizedState = P)),
                  (o.props = r),
                  (o.state = P),
                  (o.context = s),
                  (r = m))
                : (typeof o.componentDidUpdate != "function" ||
                      (u === e.memoizedProps && y === e.memoizedState) ||
                      (n.flags |= 4),
                  typeof o.getSnapshotBeforeUpdate != "function" ||
                      (u === e.memoizedProps && y === e.memoizedState) ||
                      (n.flags |= 1024),
                  (r = !1))
        }
        return Ji(e, n, t, r, i, l)
    }
    function Ji(e, n, t, r, l, i) {
        Ws(e, n)
        var o = (n.flags & 128) !== 0
        if (!r && !o) return l && Zu(n, t, !1), Nn(e, n, i)
        ;(r = n.stateNode), (ff.current = n)
        var u =
            o && typeof t.getDerivedStateFromError != "function"
                ? null
                : r.render()
        return (
            (n.flags |= 1),
            e !== null && o
                ? ((n.child = Et(n, e.child, null, i)),
                  (n.child = Et(n, null, u, i)))
                : je(e, n, u, i),
            (n.memoizedState = r.state),
            l && Zu(n, t, !0),
            n.child
        )
    }
    function Ks(e) {
        var n = e.stateNode
        n.pendingContext
            ? Xu(e, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Xu(e, n.context, !1),
            Mi(e, n.containerInfo)
    }
    function Ys(e, n, t, r, l) {
        return xt(), Pi(l), (n.flags |= 256), je(e, n, t, r), n.child
    }
    var qi = { dehydrated: null, treeContext: null, retryLane: 0 }
    function bi(e) {
        return { baseLanes: e, cachePool: null, transitions: null }
    }
    function Xs(e, n, t) {
        var r = n.pendingProps,
            l = ie.current,
            i = !1,
            o = (n.flags & 128) !== 0,
            u
        if (
            ((u = o) ||
                (u =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (l & 2) !== 0),
            u
                ? ((i = !0), (n.flags &= -129))
                : (e === null || e.memoizedState !== null) && (l |= 1),
            ee(ie, l & 1),
            e === null)
        )
            return (
                Ni(n),
                (e = n.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (n.mode & 1
                          ? e.data === "$!"
                              ? (n.lanes = 8)
                              : (n.lanes = 1073741824)
                          : (n.lanes = 1),
                      null)
                    : ((o = r.children),
                      (e = r.fallback),
                      i
                          ? ((r = n.mode),
                            (i = n.child),
                            (o = { mode: "hidden", children: o }),
                            !(r & 1) && i !== null
                                ? ((i.childLanes = 0), (i.pendingProps = o))
                                : (i = _l(o, r, 0, null)),
                            (e = ut(e, r, t, null)),
                            (i.return = n),
                            (e.return = n),
                            (i.sibling = e),
                            (n.child = i),
                            (n.child.memoizedState = bi(t)),
                            (n.memoizedState = qi),
                            e)
                          : eo(n, o))
            )
        if (
            ((l = e.memoizedState),
            l !== null && ((u = l.dehydrated), u !== null))
        )
            return df(e, n, o, r, u, l, t)
        if (i) {
            ;(i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling)
            var s = { mode: "hidden", children: r.children }
            return (
                !(o & 1) && n.child !== l
                    ? ((r = n.child),
                      (r.childLanes = 0),
                      (r.pendingProps = s),
                      (n.deletions = null))
                    : ((r = Kn(l, s)),
                      (r.subtreeFlags = l.subtreeFlags & 14680064)),
                u !== null
                    ? (i = Kn(u, i))
                    : ((i = ut(i, o, t, null)), (i.flags |= 2)),
                (i.return = n),
                (r.return = n),
                (r.sibling = i),
                (n.child = r),
                (r = i),
                (i = n.child),
                (o = e.child.memoizedState),
                (o =
                    o === null
                        ? bi(t)
                        : {
                              baseLanes: o.baseLanes | t,
                              cachePool: null,
                              transitions: o.transitions,
                          }),
                (i.memoizedState = o),
                (i.childLanes = e.childLanes & ~t),
                (n.memoizedState = qi),
                r
            )
        }
        return (
            (i = e.child),
            (e = i.sibling),
            (r = Kn(i, { mode: "visible", children: r.children })),
            !(n.mode & 1) && (r.lanes = t),
            (r.return = n),
            (r.sibling = null),
            e !== null &&
                ((t = n.deletions),
                t === null
                    ? ((n.deletions = [e]), (n.flags |= 16))
                    : t.push(e)),
            (n.child = r),
            (n.memoizedState = null),
            r
        )
    }
    function eo(e, n) {
        return (
            (n = _l({ mode: "visible", children: n }, e.mode, 0, null)),
            (n.return = e),
            (e.child = n)
        )
    }
    function al(e, n, t, r) {
        return (
            r !== null && Pi(r),
            Et(n, e.child, null, t),
            (e = eo(n, n.pendingProps.children)),
            (e.flags |= 2),
            (n.memoizedState = null),
            e
        )
    }
    function df(e, n, t, r, l, i, o) {
        if (t)
            return n.flags & 256
                ? ((n.flags &= -257), (r = Xi(Error(d(422)))), al(e, n, o, r))
                : n.memoizedState !== null
                ? ((n.child = e.child), (n.flags |= 128), null)
                : ((i = r.fallback),
                  (l = n.mode),
                  (r = _l(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null
                  )),
                  (i = ut(i, l, o, null)),
                  (i.flags |= 2),
                  (r.return = n),
                  (i.return = n),
                  (r.sibling = i),
                  (n.child = r),
                  n.mode & 1 && Et(n, e.child, null, o),
                  (n.child.memoizedState = bi(o)),
                  (n.memoizedState = qi),
                  i)
        if (!(n.mode & 1)) return al(e, n, o, null)
        if (l.data === "$!") {
            if (((r = l.nextSibling && l.nextSibling.dataset), r))
                var u = r.dgst
            return (
                (r = u),
                (i = Error(d(419))),
                (r = Xi(i, r, void 0)),
                al(e, n, o, r)
            )
        }
        if (((u = (o & e.childLanes) !== 0), Fe || u)) {
            if (((r = ye), r !== null)) {
                switch (o & -o) {
                    case 4:
                        l = 2
                        break
                    case 16:
                        l = 8
                        break
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32
                        break
                    case 536870912:
                        l = 268435456
                        break
                    default:
                        l = 0
                }
                ;(l = l & (r.suspendedLanes | o) ? 0 : l),
                    l !== 0 &&
                        l !== i.retryLane &&
                        ((i.retryLane = l), En(e, l), cn(r, e, l, -1))
            }
            return yo(), (r = Xi(Error(d(421)))), al(e, n, o, r)
        }
        return l.data === "$?"
            ? ((n.flags |= 128),
              (n.child = e.child),
              (n = Cf.bind(null, e)),
              (l._reactRetry = n),
              null)
            : ((e = i.treeContext),
              (We = On(l.nextSibling)),
              (He = n),
              (le = !0),
              (on = null),
              e !== null &&
                  ((Ye[Xe++] = _n),
                  (Ye[Xe++] = xn),
                  (Ye[Xe++] = qn),
                  (_n = e.id),
                  (xn = e.overflow),
                  (qn = n)),
              (n = eo(n, r.children)),
              (n.flags |= 4096),
              n)
    }
    function Gs(e, n, t) {
        e.lanes |= n
        var r = e.alternate
        r !== null && (r.lanes |= n), Li(e.return, n, t)
    }
    function no(e, n, t, r, l) {
        var i = e.memoizedState
        i === null
            ? (e.memoizedState = {
                  isBackwards: n,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: t,
                  tailMode: l,
              })
            : ((i.isBackwards = n),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = t),
              (i.tailMode = l))
    }
    function Zs(e, n, t) {
        var r = n.pendingProps,
            l = r.revealOrder,
            i = r.tail
        if ((je(e, n, r.children, t), (r = ie.current), r & 2))
            (r = (r & 1) | 2), (n.flags |= 128)
        else {
            if (e !== null && e.flags & 128)
                e: for (e = n.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && Gs(e, t, n)
                    else if (e.tag === 19) Gs(e, t, n)
                    else if (e.child !== null) {
                        ;(e.child.return = e), (e = e.child)
                        continue
                    }
                    if (e === n) break e
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === n) break e
                        e = e.return
                    }
                    ;(e.sibling.return = e.return), (e = e.sibling)
                }
            r &= 1
        }
        if ((ee(ie, r), !(n.mode & 1))) n.memoizedState = null
        else
            switch (l) {
                case "forwards":
                    for (t = n.child, l = null; t !== null; )
                        (e = t.alternate),
                            e !== null && tl(e) === null && (l = t),
                            (t = t.sibling)
                    ;(t = l),
                        t === null
                            ? ((l = n.child), (n.child = null))
                            : ((l = t.sibling), (t.sibling = null)),
                        no(n, !1, l, t, i)
                    break
                case "backwards":
                    for (t = null, l = n.child, n.child = null; l !== null; ) {
                        if (((e = l.alternate), e !== null && tl(e) === null)) {
                            n.child = l
                            break
                        }
                        ;(e = l.sibling), (l.sibling = t), (t = l), (l = e)
                    }
                    no(n, !0, t, null, i)
                    break
                case "together":
                    no(n, !1, null, null, void 0)
                    break
                default:
                    n.memoizedState = null
            }
        return n.child
    }
    function cl(e, n) {
        !(n.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2))
    }
    function Nn(e, n, t) {
        if (
            (e !== null && (n.dependencies = e.dependencies),
            (rt |= n.lanes),
            !(t & n.childLanes))
        )
            return null
        if (e !== null && n.child !== e.child) throw Error(d(153))
        if (n.child !== null) {
            for (
                e = n.child,
                    t = Kn(e, e.pendingProps),
                    n.child = t,
                    t.return = n;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (t = t.sibling = Kn(e, e.pendingProps)),
                    (t.return = n)
            t.sibling = null
        }
        return n.child
    }
    function pf(e, n, t) {
        switch (n.tag) {
            case 3:
                Ks(n), xt()
                break
            case 5:
                cs(n)
                break
            case 1:
                Oe(n.type) && Kr(n)
                break
            case 4:
                Mi(n, n.stateNode.containerInfo)
                break
            case 10:
                var r = n.type._context,
                    l = n.memoizedProps.value
                ee(qr, r._currentValue), (r._currentValue = l)
                break
            case 13:
                if (((r = n.memoizedState), r !== null))
                    return r.dehydrated !== null
                        ? (ee(ie, ie.current & 1), (n.flags |= 128), null)
                        : t & n.child.childLanes
                        ? Xs(e, n, t)
                        : (ee(ie, ie.current & 1),
                          (e = Nn(e, n, t)),
                          e !== null ? e.sibling : null)
                ee(ie, ie.current & 1)
                break
            case 19:
                if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                    if (r) return Zs(e, n, t)
                    n.flags |= 128
                }
                if (
                    ((l = n.memoizedState),
                    l !== null &&
                        ((l.rendering = null),
                        (l.tail = null),
                        (l.lastEffect = null)),
                    ee(ie, ie.current),
                    r)
                )
                    break
                return null
            case 22:
            case 23:
                return (n.lanes = 0), Hs(e, n, t)
        }
        return Nn(e, n, t)
    }
    var Js, to, qs, bs
    ;(Js = function (e, n) {
        for (var t = n.child; t !== null; ) {
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode)
            else if (t.tag !== 4 && t.child !== null) {
                ;(t.child.return = t), (t = t.child)
                continue
            }
            if (t === n) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === n) return
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }),
        (to = function () {}),
        (qs = function (e, n, t, r) {
            var l = e.memoizedProps
            if (l !== r) {
                ;(e = n.stateNode), nt(vn.current)
                var i = null
                switch (t) {
                    case "input":
                        ;(l = Ll(e, l)), (r = Ll(e, r)), (i = [])
                        break
                    case "select":
                        ;(l = N({}, l, { value: void 0 })),
                            (r = N({}, r, { value: void 0 })),
                            (i = [])
                        break
                    case "textarea":
                        ;(l = Ml(e, l)), (r = Ml(e, r)), (i = [])
                        break
                    default:
                        typeof l.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = Hr)
                }
                Fl(t, r)
                var o
                t = null
                for (m in l)
                    if (
                        !r.hasOwnProperty(m) &&
                        l.hasOwnProperty(m) &&
                        l[m] != null
                    )
                        if (m === "style") {
                            var u = l[m]
                            for (o in u)
                                u.hasOwnProperty(o) &&
                                    (t || (t = {}), (t[o] = ""))
                        } else
                            m !== "dangerouslySetInnerHTML" &&
                                m !== "children" &&
                                m !== "suppressContentEditableWarning" &&
                                m !== "suppressHydrationWarning" &&
                                m !== "autoFocus" &&
                                (T.hasOwnProperty(m)
                                    ? i || (i = [])
                                    : (i = i || []).push(m, null))
                for (m in r) {
                    var s = r[m]
                    if (
                        ((u = l != null ? l[m] : void 0),
                        r.hasOwnProperty(m) &&
                            s !== u &&
                            (s != null || u != null))
                    )
                        if (m === "style")
                            if (u) {
                                for (o in u)
                                    !u.hasOwnProperty(o) ||
                                        (s && s.hasOwnProperty(o)) ||
                                        (t || (t = {}), (t[o] = ""))
                                for (o in s)
                                    s.hasOwnProperty(o) &&
                                        u[o] !== s[o] &&
                                        (t || (t = {}), (t[o] = s[o]))
                            } else t || (i || (i = []), i.push(m, t)), (t = s)
                        else
                            m === "dangerouslySetInnerHTML"
                                ? ((s = s ? s.__html : void 0),
                                  (u = u ? u.__html : void 0),
                                  s != null &&
                                      u !== s &&
                                      (i = i || []).push(m, s))
                                : m === "children"
                                ? (typeof s != "string" &&
                                      typeof s != "number") ||
                                  (i = i || []).push(m, "" + s)
                                : m !== "suppressContentEditableWarning" &&
                                  m !== "suppressHydrationWarning" &&
                                  (T.hasOwnProperty(m)
                                      ? (s != null &&
                                            m === "onScroll" &&
                                            ne("scroll", e),
                                        i || u === s || (i = []))
                                      : (i = i || []).push(m, s))
                }
                t && (i = i || []).push("style", t)
                var m = i
                ;(n.updateQueue = m) && (n.flags |= 4)
            }
        }),
        (bs = function (e, n, t, r) {
            t !== r && (n.flags |= 4)
        })
    function dr(e, n) {
        if (!le)
            switch (e.tailMode) {
                case "hidden":
                    n = e.tail
                    for (var t = null; n !== null; )
                        n.alternate !== null && (t = n), (n = n.sibling)
                    t === null ? (e.tail = null) : (t.sibling = null)
                    break
                case "collapsed":
                    t = e.tail
                    for (var r = null; t !== null; )
                        t.alternate !== null && (r = t), (t = t.sibling)
                    r === null
                        ? n || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (r.sibling = null)
            }
    }
    function Ce(e) {
        var n = e.alternate !== null && e.alternate.child === e.child,
            t = 0,
            r = 0
        if (n)
            for (var l = e.child; l !== null; )
                (t |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags & 14680064),
                    (r |= l.flags & 14680064),
                    (l.return = e),
                    (l = l.sibling)
        else
            for (l = e.child; l !== null; )
                (t |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags),
                    (r |= l.flags),
                    (l.return = e),
                    (l = l.sibling)
        return (e.subtreeFlags |= r), (e.childLanes = t), n
    }
    function mf(e, n, t) {
        var r = n.pendingProps
        switch ((Ei(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ce(n), null
            case 1:
                return Oe(n.type) && Qr(), Ce(n), null
            case 3:
                return (
                    (r = n.stateNode),
                    Pt(),
                    te(Me),
                    te(xe),
                    Di(),
                    r.pendingContext &&
                        ((r.context = r.pendingContext),
                        (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (Zr(n)
                            ? (n.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  !(n.flags & 256)) ||
                              ((n.flags |= 1024),
                              on !== null && (mo(on), (on = null)))),
                    to(e, n),
                    Ce(n),
                    null
                )
            case 5:
                Oi(n)
                var l = nt(ur.current)
                if (((t = n.type), e !== null && n.stateNode != null))
                    qs(e, n, t, r, l),
                        e.ref !== n.ref &&
                            ((n.flags |= 512), (n.flags |= 2097152))
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(d(166))
                        return Ce(n), null
                    }
                    if (((e = nt(vn.current)), Zr(n))) {
                        ;(r = n.stateNode), (t = n.type)
                        var i = n.memoizedProps
                        switch (
                            ((r[hn] = n),
                            (r[tr] = i),
                            (e = (n.mode & 1) !== 0),
                            t)
                        ) {
                            case "dialog":
                                ne("cancel", r), ne("close", r)
                                break
                            case "iframe":
                            case "object":
                            case "embed":
                                ne("load", r)
                                break
                            case "video":
                            case "audio":
                                for (l = 0; l < bt.length; l++) ne(bt[l], r)
                                break
                            case "source":
                                ne("error", r)
                                break
                            case "img":
                            case "image":
                            case "link":
                                ne("error", r), ne("load", r)
                                break
                            case "details":
                                ne("toggle", r)
                                break
                            case "input":
                                Ro(r, i), ne("invalid", r)
                                break
                            case "select":
                                ;(r._wrapperState = {
                                    wasMultiple: !!i.multiple,
                                }),
                                    ne("invalid", r)
                                break
                            case "textarea":
                                Fo(r, i), ne("invalid", r)
                        }
                        Fl(t, i), (l = null)
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                var u = i[o]
                                o === "children"
                                    ? typeof u == "string"
                                        ? r.textContent !== u &&
                                          (i.suppressHydrationWarning !== !0 &&
                                              $r(r.textContent, u, e),
                                          (l = ["children", u]))
                                        : typeof u == "number" &&
                                          r.textContent !== "" + u &&
                                          (i.suppressHydrationWarning !== !0 &&
                                              $r(r.textContent, u, e),
                                          (l = ["children", "" + u]))
                                    : T.hasOwnProperty(o) &&
                                      u != null &&
                                      o === "onScroll" &&
                                      ne("scroll", r)
                            }
                        switch (t) {
                            case "input":
                                wr(r), Oo(r, i, !0)
                                break
                            case "textarea":
                                wr(r), Uo(r)
                                break
                            case "select":
                            case "option":
                                break
                            default:
                                typeof i.onClick == "function" &&
                                    (r.onclick = Hr)
                        }
                        ;(r = l),
                            (n.updateQueue = r),
                            r !== null && (n.flags |= 4)
                    } else {
                        ;(o = l.nodeType === 9 ? l : l.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = Ao(t)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? t === "script"
                                    ? ((e = o.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof r.is == "string"
                                    ? (e = o.createElement(t, { is: r.is }))
                                    : ((e = o.createElement(t)),
                                      t === "select" &&
                                          ((o = e),
                                          r.multiple
                                              ? (o.multiple = !0)
                                              : r.size && (o.size = r.size)))
                                : (e = o.createElementNS(e, t)),
                            (e[hn] = n),
                            (e[tr] = r),
                            Js(e, n, !1, !1),
                            (n.stateNode = e)
                        e: {
                            switch (((o = Dl(t, r)), t)) {
                                case "dialog":
                                    ne("cancel", e), ne("close", e), (l = r)
                                    break
                                case "iframe":
                                case "object":
                                case "embed":
                                    ne("load", e), (l = r)
                                    break
                                case "video":
                                case "audio":
                                    for (l = 0; l < bt.length; l++) ne(bt[l], e)
                                    l = r
                                    break
                                case "source":
                                    ne("error", e), (l = r)
                                    break
                                case "img":
                                case "image":
                                case "link":
                                    ne("error", e), ne("load", e), (l = r)
                                    break
                                case "details":
                                    ne("toggle", e), (l = r)
                                    break
                                case "input":
                                    Ro(e, r), (l = Ll(e, r)), ne("invalid", e)
                                    break
                                case "option":
                                    l = r
                                    break
                                case "select":
                                    ;(e._wrapperState = {
                                        wasMultiple: !!r.multiple,
                                    }),
                                        (l = N({}, r, { value: void 0 })),
                                        ne("invalid", e)
                                    break
                                case "textarea":
                                    Fo(e, r), (l = Ml(e, r)), ne("invalid", e)
                                    break
                                default:
                                    l = r
                            }
                            Fl(t, l), (u = l)
                            for (i in u)
                                if (u.hasOwnProperty(i)) {
                                    var s = u[i]
                                    i === "style"
                                        ? $o(e, s)
                                        : i === "dangerouslySetInnerHTML"
                                        ? ((s = s ? s.__html : void 0),
                                          s != null && Bo(e, s))
                                        : i === "children"
                                        ? typeof s == "string"
                                            ? (t !== "textarea" || s !== "") &&
                                              Mt(e, s)
                                            : typeof s == "number" &&
                                              Mt(e, "" + s)
                                        : i !==
                                              "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (T.hasOwnProperty(i)
                                              ? s != null &&
                                                i === "onScroll" &&
                                                ne("scroll", e)
                                              : s != null && en(e, i, s, o))
                                }
                            switch (t) {
                                case "input":
                                    wr(e), Oo(e, r, !1)
                                    break
                                case "textarea":
                                    wr(e), Uo(e)
                                    break
                                case "option":
                                    r.value != null &&
                                        e.setAttribute("value", "" + X(r.value))
                                    break
                                case "select":
                                    ;(e.multiple = !!r.multiple),
                                        (i = r.value),
                                        i != null
                                            ? st(e, !!r.multiple, i, !1)
                                            : r.defaultValue != null &&
                                              st(
                                                  e,
                                                  !!r.multiple,
                                                  r.defaultValue,
                                                  !0
                                              )
                                    break
                                default:
                                    typeof l.onClick == "function" &&
                                        (e.onclick = Hr)
                            }
                            switch (t) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus
                                    break e
                                case "img":
                                    r = !0
                                    break e
                                default:
                                    r = !1
                            }
                        }
                        r && (n.flags |= 4)
                    }
                    n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152))
                }
                return Ce(n), null
            case 6:
                if (e && n.stateNode != null) bs(e, n, e.memoizedProps, r)
                else {
                    if (typeof r != "string" && n.stateNode === null)
                        throw Error(d(166))
                    if (((t = nt(ur.current)), nt(vn.current), Zr(n))) {
                        if (
                            ((r = n.stateNode),
                            (t = n.memoizedProps),
                            (r[hn] = n),
                            (i = r.nodeValue !== t) && ((e = He), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    $r(r.nodeValue, t, (e.mode & 1) !== 0)
                                    break
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        $r(r.nodeValue, t, (e.mode & 1) !== 0)
                            }
                        i && (n.flags |= 4)
                    } else
                        (r = (
                            t.nodeType === 9 ? t : t.ownerDocument
                        ).createTextNode(r)),
                            (r[hn] = n),
                            (n.stateNode = r)
                }
                return Ce(n), null
            case 13:
                if (
                    (te(ie),
                    (r = n.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (le && We !== null && n.mode & 1 && !(n.flags & 128))
                        ts(), xt(), (n.flags |= 98560), (i = !1)
                    else if (
                        ((i = Zr(n)), r !== null && r.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!i) throw Error(d(318))
                            if (
                                ((i = n.memoizedState),
                                (i = i !== null ? i.dehydrated : null),
                                !i)
                            )
                                throw Error(d(317))
                            i[hn] = n
                        } else
                            xt(),
                                !(n.flags & 128) && (n.memoizedState = null),
                                (n.flags |= 4)
                        Ce(n), (i = !1)
                    } else on !== null && (mo(on), (on = null)), (i = !0)
                    if (!i) return n.flags & 65536 ? n : null
                }
                return n.flags & 128
                    ? ((n.lanes = t), n)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                          r &&
                          ((n.child.flags |= 8192),
                          n.mode & 1 &&
                              (e === null || ie.current & 1
                                  ? he === 0 && (he = 3)
                                  : yo())),
                      n.updateQueue !== null && (n.flags |= 4),
                      Ce(n),
                      null)
            case 4:
                return (
                    Pt(),
                    to(e, n),
                    e === null && er(n.stateNode.containerInfo),
                    Ce(n),
                    null
                )
            case 10:
                return Ti(n.type._context), Ce(n), null
            case 17:
                return Oe(n.type) && Qr(), Ce(n), null
            case 19:
                if ((te(ie), (i = n.memoizedState), i === null))
                    return Ce(n), null
                if (
                    ((r = (n.flags & 128) !== 0), (o = i.rendering), o === null)
                )
                    if (r) dr(i, !1)
                    else {
                        if (he !== 0 || (e !== null && e.flags & 128))
                            for (e = n.child; e !== null; ) {
                                if (((o = tl(e)), o !== null)) {
                                    for (
                                        n.flags |= 128,
                                            dr(i, !1),
                                            r = o.updateQueue,
                                            r !== null &&
                                                ((n.updateQueue = r),
                                                (n.flags |= 4)),
                                            n.subtreeFlags = 0,
                                            r = t,
                                            t = n.child;
                                        t !== null;

                                    )
                                        (i = t),
                                            (e = r),
                                            (i.flags &= 14680066),
                                            (o = i.alternate),
                                            o === null
                                                ? ((i.childLanes = 0),
                                                  (i.lanes = e),
                                                  (i.child = null),
                                                  (i.subtreeFlags = 0),
                                                  (i.memoizedProps = null),
                                                  (i.memoizedState = null),
                                                  (i.updateQueue = null),
                                                  (i.dependencies = null),
                                                  (i.stateNode = null))
                                                : ((i.childLanes =
                                                      o.childLanes),
                                                  (i.lanes = o.lanes),
                                                  (i.child = o.child),
                                                  (i.subtreeFlags = 0),
                                                  (i.deletions = null),
                                                  (i.memoizedProps =
                                                      o.memoizedProps),
                                                  (i.memoizedState =
                                                      o.memoizedState),
                                                  (i.updateQueue =
                                                      o.updateQueue),
                                                  (i.type = o.type),
                                                  (e = o.dependencies),
                                                  (i.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (t = t.sibling)
                                    return ee(ie, (ie.current & 1) | 2), n.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null &&
                            ae() > Lt &&
                            ((n.flags |= 128),
                            (r = !0),
                            dr(i, !1),
                            (n.lanes = 4194304))
                    }
                else {
                    if (!r)
                        if (((e = tl(o)), e !== null)) {
                            if (
                                ((n.flags |= 128),
                                (r = !0),
                                (t = e.updateQueue),
                                t !== null &&
                                    ((n.updateQueue = t), (n.flags |= 4)),
                                dr(i, !0),
                                i.tail === null &&
                                    i.tailMode === "hidden" &&
                                    !o.alternate &&
                                    !le)
                            )
                                return Ce(n), null
                        } else
                            2 * ae() - i.renderingStartTime > Lt &&
                                t !== 1073741824 &&
                                ((n.flags |= 128),
                                (r = !0),
                                dr(i, !1),
                                (n.lanes = 4194304))
                    i.isBackwards
                        ? ((o.sibling = n.child), (n.child = o))
                        : ((t = i.last),
                          t !== null ? (t.sibling = o) : (n.child = o),
                          (i.last = o))
                }
                return i.tail !== null
                    ? ((n = i.tail),
                      (i.rendering = n),
                      (i.tail = n.sibling),
                      (i.renderingStartTime = ae()),
                      (n.sibling = null),
                      (t = ie.current),
                      ee(ie, r ? (t & 1) | 2 : t & 1),
                      n)
                    : (Ce(n), null)
            case 22:
            case 23:
                return (
                    vo(),
                    (r = n.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== r &&
                        (n.flags |= 8192),
                    r && n.mode & 1
                        ? Qe & 1073741824 &&
                          (Ce(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                        : Ce(n),
                    null
                )
            case 24:
                return null
            case 25:
                return null
        }
        throw Error(d(156, n.tag))
    }
    function hf(e, n) {
        switch ((Ei(n), n.tag)) {
            case 1:
                return (
                    Oe(n.type) && Qr(),
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
                )
            case 3:
                return (
                    Pt(),
                    te(Me),
                    te(xe),
                    Di(),
                    (e = n.flags),
                    e & 65536 && !(e & 128)
                        ? ((n.flags = (e & -65537) | 128), n)
                        : null
                )
            case 5:
                return Oi(n), null
            case 13:
                if (
                    (te(ie),
                    (e = n.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (n.alternate === null) throw Error(d(340))
                    xt()
                }
                return (
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
                )
            case 19:
                return te(ie), null
            case 4:
                return Pt(), null
            case 10:
                return Ti(n.type._context), null
            case 22:
            case 23:
                return vo(), null
            case 24:
                return null
            default:
                return null
        }
    }
    var fl = !1,
        Ne = !1,
        vf = typeof WeakSet == "function" ? WeakSet : Set,
        C = null
    function zt(e, n) {
        var t = e.ref
        if (t !== null)
            if (typeof t == "function")
                try {
                    t(null)
                } catch (r) {
                    se(e, n, r)
                }
            else t.current = null
    }
    function ro(e, n, t) {
        try {
            t()
        } catch (r) {
            se(e, n, r)
        }
    }
    var ea = !1
    function yf(e, n) {
        if (((hi = Lr), (e = Iu()), ui(e))) {
            if ("selectionStart" in e)
                var t = { start: e.selectionStart, end: e.selectionEnd }
            else
                e: {
                    t = ((t = e.ownerDocument) && t.defaultView) || window
                    var r = t.getSelection && t.getSelection()
                    if (r && r.rangeCount !== 0) {
                        t = r.anchorNode
                        var l = r.anchorOffset,
                            i = r.focusNode
                        r = r.focusOffset
                        try {
                            t.nodeType, i.nodeType
                        } catch {
                            t = null
                            break e
                        }
                        var o = 0,
                            u = -1,
                            s = -1,
                            m = 0,
                            w = 0,
                            S = e,
                            y = null
                        n: for (;;) {
                            for (
                                var E;
                                S !== t ||
                                    (l !== 0 && S.nodeType !== 3) ||
                                    (u = o + l),
                                    S !== i ||
                                        (r !== 0 && S.nodeType !== 3) ||
                                        (s = o + r),
                                    S.nodeType === 3 &&
                                        (o += S.nodeValue.length),
                                    (E = S.firstChild) !== null;

                            )
                                (y = S), (S = E)
                            for (;;) {
                                if (S === e) break n
                                if (
                                    (y === t && ++m === l && (u = o),
                                    y === i && ++w === r && (s = o),
                                    (E = S.nextSibling) !== null)
                                )
                                    break
                                ;(S = y), (y = S.parentNode)
                            }
                            S = E
                        }
                        t = u === -1 || s === -1 ? null : { start: u, end: s }
                    } else t = null
                }
            t = t || { start: 0, end: 0 }
        } else t = null
        for (
            vi = { focusedElem: e, selectionRange: t }, Lr = !1, C = n;
            C !== null;

        )
            if (
                ((n = C),
                (e = n.child),
                (n.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = n), (C = e)
            else
                for (; C !== null; ) {
                    n = C
                    try {
                        var P = n.alternate
                        if (n.flags & 1024)
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break
                                case 1:
                                    if (P !== null) {
                                        var j = P.memoizedProps,
                                            ce = P.memoizedState,
                                            f = n.stateNode,
                                            a = f.getSnapshotBeforeUpdate(
                                                n.elementType === n.type
                                                    ? j
                                                    : un(n.type, j),
                                                ce
                                            )
                                        f.__reactInternalSnapshotBeforeUpdate =
                                            a
                                    }
                                    break
                                case 3:
                                    var p = n.stateNode.containerInfo
                                    p.nodeType === 1
                                        ? (p.textContent = "")
                                        : p.nodeType === 9 &&
                                          p.documentElement &&
                                          p.removeChild(p.documentElement)
                                    break
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break
                                default:
                                    throw Error(d(163))
                            }
                    } catch (_) {
                        se(n, n.return, _)
                    }
                    if (((e = n.sibling), e !== null)) {
                        ;(e.return = n.return), (C = e)
                        break
                    }
                    C = n.return
                }
        return (P = ea), (ea = !1), P
    }
    function pr(e, n, t) {
        var r = n.updateQueue
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var l = (r = r.next)
            do {
                if ((l.tag & e) === e) {
                    var i = l.destroy
                    ;(l.destroy = void 0), i !== void 0 && ro(n, t, i)
                }
                l = l.next
            } while (l !== r)
        }
    }
    function dl(e, n) {
        if (
            ((n = n.updateQueue),
            (n = n !== null ? n.lastEffect : null),
            n !== null)
        ) {
            var t = (n = n.next)
            do {
                if ((t.tag & e) === e) {
                    var r = t.create
                    t.destroy = r()
                }
                t = t.next
            } while (t !== n)
        }
    }
    function lo(e) {
        var n = e.ref
        if (n !== null) {
            var t = e.stateNode
            switch (e.tag) {
                case 5:
                    e = t
                    break
                default:
                    e = t
            }
            typeof n == "function" ? n(e) : (n.current = e)
        }
    }
    function na(e) {
        var n = e.alternate
        n !== null && ((e.alternate = null), na(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((n = e.stateNode),
                n !== null &&
                    (delete n[hn],
                    delete n[tr],
                    delete n[Si],
                    delete n[qc],
                    delete n[bc])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
    }
    function ta(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function ra(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || ta(e.return)) return null
                e = e.return
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e
                ;(e.child.return = e), (e = e.child)
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }
    function io(e, n, t) {
        var r = e.tag
        if (r === 5 || r === 6)
            (e = e.stateNode),
                n
                    ? t.nodeType === 8
                        ? t.parentNode.insertBefore(e, n)
                        : t.insertBefore(e, n)
                    : (t.nodeType === 8
                          ? ((n = t.parentNode), n.insertBefore(e, t))
                          : ((n = t), n.appendChild(e)),
                      (t = t._reactRootContainer),
                      t != null || n.onclick !== null || (n.onclick = Hr))
        else if (r !== 4 && ((e = e.child), e !== null))
            for (io(e, n, t), e = e.sibling; e !== null; )
                io(e, n, t), (e = e.sibling)
    }
    function oo(e, n, t) {
        var r = e.tag
        if (r === 5 || r === 6)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e)
        else if (r !== 4 && ((e = e.child), e !== null))
            for (oo(e, n, t), e = e.sibling; e !== null; )
                oo(e, n, t), (e = e.sibling)
    }
    var we = null,
        sn = !1
    function Vn(e, n, t) {
        for (t = t.child; t !== null; ) la(e, n, t), (t = t.sibling)
    }
    function la(e, n, t) {
        if (mn && typeof mn.onCommitFiberUnmount == "function")
            try {
                mn.onCommitFiberUnmount(Cr, t)
            } catch {}
        switch (t.tag) {
            case 5:
                Ne || zt(t, n)
            case 6:
                var r = we,
                    l = sn
                ;(we = null),
                    Vn(e, n, t),
                    (we = r),
                    (sn = l),
                    we !== null &&
                        (sn
                            ? ((e = we),
                              (t = t.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(t)
                                  : e.removeChild(t))
                            : we.removeChild(t.stateNode))
                break
            case 18:
                we !== null &&
                    (sn
                        ? ((e = we),
                          (t = t.stateNode),
                          e.nodeType === 8
                              ? wi(e.parentNode, t)
                              : e.nodeType === 1 && wi(e, t),
                          Qt(e))
                        : wi(we, t.stateNode))
                break
            case 4:
                ;(r = we),
                    (l = sn),
                    (we = t.stateNode.containerInfo),
                    (sn = !0),
                    Vn(e, n, t),
                    (we = r),
                    (sn = l)
                break
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !Ne &&
                    ((r = t.updateQueue),
                    r !== null && ((r = r.lastEffect), r !== null))
                ) {
                    l = r = r.next
                    do {
                        var i = l,
                            o = i.destroy
                        ;(i = i.tag),
                            o !== void 0 && (i & 2 || i & 4) && ro(t, n, o),
                            (l = l.next)
                    } while (l !== r)
                }
                Vn(e, n, t)
                break
            case 1:
                if (
                    !Ne &&
                    (zt(t, n),
                    (r = t.stateNode),
                    typeof r.componentWillUnmount == "function")
                )
                    try {
                        ;(r.props = t.memoizedProps),
                            (r.state = t.memoizedState),
                            r.componentWillUnmount()
                    } catch (u) {
                        se(t, n, u)
                    }
                Vn(e, n, t)
                break
            case 21:
                Vn(e, n, t)
                break
            case 22:
                t.mode & 1
                    ? ((Ne = (r = Ne) || t.memoizedState !== null),
                      Vn(e, n, t),
                      (Ne = r))
                    : Vn(e, n, t)
                break
            default:
                Vn(e, n, t)
        }
    }
    function ia(e) {
        var n = e.updateQueue
        if (n !== null) {
            e.updateQueue = null
            var t = e.stateNode
            t === null && (t = e.stateNode = new vf()),
                n.forEach(function (r) {
                    var l = Nf.bind(null, e, r)
                    t.has(r) || (t.add(r), r.then(l, l))
                })
        }
    }
    function an(e, n) {
        var t = n.deletions
        if (t !== null)
            for (var r = 0; r < t.length; r++) {
                var l = t[r]
                try {
                    var i = e,
                        o = n,
                        u = o
                    e: for (; u !== null; ) {
                        switch (u.tag) {
                            case 5:
                                ;(we = u.stateNode), (sn = !1)
                                break e
                            case 3:
                                ;(we = u.stateNode.containerInfo), (sn = !0)
                                break e
                            case 4:
                                ;(we = u.stateNode.containerInfo), (sn = !0)
                                break e
                        }
                        u = u.return
                    }
                    if (we === null) throw Error(d(160))
                    la(i, o, l), (we = null), (sn = !1)
                    var s = l.alternate
                    s !== null && (s.return = null), (l.return = null)
                } catch (m) {
                    se(l, n, m)
                }
            }
        if (n.subtreeFlags & 12854)
            for (n = n.child; n !== null; ) oa(n, e), (n = n.sibling)
    }
    function oa(e, n) {
        var t = e.alternate,
            r = e.flags
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((an(n, e), gn(e), r & 4)) {
                    try {
                        pr(3, e, e.return), dl(3, e)
                    } catch (j) {
                        se(e, e.return, j)
                    }
                    try {
                        pr(5, e, e.return)
                    } catch (j) {
                        se(e, e.return, j)
                    }
                }
                break
            case 1:
                an(n, e), gn(e), r & 512 && t !== null && zt(t, t.return)
                break
            case 5:
                if (
                    (an(n, e),
                    gn(e),
                    r & 512 && t !== null && zt(t, t.return),
                    e.flags & 32)
                ) {
                    var l = e.stateNode
                    try {
                        Mt(l, "")
                    } catch (j) {
                        se(e, e.return, j)
                    }
                }
                if (r & 4 && ((l = e.stateNode), l != null)) {
                    var i = e.memoizedProps,
                        o = t !== null ? t.memoizedProps : i,
                        u = e.type,
                        s = e.updateQueue
                    if (((e.updateQueue = null), s !== null))
                        try {
                            u === "input" &&
                                i.type === "radio" &&
                                i.name != null &&
                                Mo(l, i),
                                Dl(u, o)
                            var m = Dl(u, i)
                            for (o = 0; o < s.length; o += 2) {
                                var w = s[o],
                                    S = s[o + 1]
                                w === "style"
                                    ? $o(l, S)
                                    : w === "dangerouslySetInnerHTML"
                                    ? Bo(l, S)
                                    : w === "children"
                                    ? Mt(l, S)
                                    : en(l, w, S, m)
                            }
                            switch (u) {
                                case "input":
                                    Il(l, i)
                                    break
                                case "textarea":
                                    Do(l, i)
                                    break
                                case "select":
                                    var y = l._wrapperState.wasMultiple
                                    l._wrapperState.wasMultiple = !!i.multiple
                                    var E = i.value
                                    E != null
                                        ? st(l, !!i.multiple, E, !1)
                                        : y !== !!i.multiple &&
                                          (i.defaultValue != null
                                              ? st(
                                                    l,
                                                    !!i.multiple,
                                                    i.defaultValue,
                                                    !0
                                                )
                                              : st(
                                                    l,
                                                    !!i.multiple,
                                                    i.multiple ? [] : "",
                                                    !1
                                                ))
                            }
                            l[tr] = i
                        } catch (j) {
                            se(e, e.return, j)
                        }
                }
                break
            case 6:
                if ((an(n, e), gn(e), r & 4)) {
                    if (e.stateNode === null) throw Error(d(162))
                    ;(l = e.stateNode), (i = e.memoizedProps)
                    try {
                        l.nodeValue = i
                    } catch (j) {
                        se(e, e.return, j)
                    }
                }
                break
            case 3:
                if (
                    (an(n, e),
                    gn(e),
                    r & 4 && t !== null && t.memoizedState.isDehydrated)
                )
                    try {
                        Qt(n.containerInfo)
                    } catch (j) {
                        se(e, e.return, j)
                    }
                break
            case 4:
                an(n, e), gn(e)
                break
            case 13:
                an(n, e),
                    gn(e),
                    (l = e.child),
                    l.flags & 8192 &&
                        ((i = l.memoizedState !== null),
                        (l.stateNode.isHidden = i),
                        !i ||
                            (l.alternate !== null &&
                                l.alternate.memoizedState !== null) ||
                            (ao = ae())),
                    r & 4 && ia(e)
                break
            case 22:
                if (
                    ((w = t !== null && t.memoizedState !== null),
                    e.mode & 1
                        ? ((Ne = (m = Ne) || w), an(n, e), (Ne = m))
                        : an(n, e),
                    gn(e),
                    r & 8192)
                ) {
                    if (
                        ((m = e.memoizedState !== null),
                        (e.stateNode.isHidden = m) && !w && e.mode & 1)
                    )
                        for (C = e, w = e.child; w !== null; ) {
                            for (S = C = w; C !== null; ) {
                                switch (((y = C), (E = y.child), y.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        pr(4, y, y.return)
                                        break
                                    case 1:
                                        zt(y, y.return)
                                        var P = y.stateNode
                                        if (
                                            typeof P.componentWillUnmount ==
                                            "function"
                                        ) {
                                            ;(r = y), (t = y.return)
                                            try {
                                                ;(n = r),
                                                    (P.props = n.memoizedProps),
                                                    (P.state = n.memoizedState),
                                                    P.componentWillUnmount()
                                            } catch (j) {
                                                se(r, t, j)
                                            }
                                        }
                                        break
                                    case 5:
                                        zt(y, y.return)
                                        break
                                    case 22:
                                        if (y.memoizedState !== null) {
                                            aa(S)
                                            continue
                                        }
                                }
                                E !== null ? ((E.return = y), (C = E)) : aa(S)
                            }
                            w = w.sibling
                        }
                    e: for (w = null, S = e; ; ) {
                        if (S.tag === 5) {
                            if (w === null) {
                                w = S
                                try {
                                    ;(l = S.stateNode),
                                        m
                                            ? ((i = l.style),
                                              typeof i.setProperty == "function"
                                                  ? i.setProperty(
                                                        "display",
                                                        "none",
                                                        "important"
                                                    )
                                                  : (i.display = "none"))
                                            : ((u = S.stateNode),
                                              (s = S.memoizedProps.style),
                                              (o =
                                                  s != null &&
                                                  s.hasOwnProperty("display")
                                                      ? s.display
                                                      : null),
                                              (u.style.display = Vo(
                                                  "display",
                                                  o
                                              )))
                                } catch (j) {
                                    se(e, e.return, j)
                                }
                            }
                        } else if (S.tag === 6) {
                            if (w === null)
                                try {
                                    S.stateNode.nodeValue = m
                                        ? ""
                                        : S.memoizedProps
                                } catch (j) {
                                    se(e, e.return, j)
                                }
                        } else if (
                            ((S.tag !== 22 && S.tag !== 23) ||
                                S.memoizedState === null ||
                                S === e) &&
                            S.child !== null
                        ) {
                            ;(S.child.return = S), (S = S.child)
                            continue
                        }
                        if (S === e) break e
                        for (; S.sibling === null; ) {
                            if (S.return === null || S.return === e) break e
                            w === S && (w = null), (S = S.return)
                        }
                        w === S && (w = null),
                            (S.sibling.return = S.return),
                            (S = S.sibling)
                    }
                }
                break
            case 19:
                an(n, e), gn(e), r & 4 && ia(e)
                break
            case 21:
                break
            default:
                an(n, e), gn(e)
        }
    }
    function gn(e) {
        var n = e.flags
        if (n & 2) {
            try {
                e: {
                    for (var t = e.return; t !== null; ) {
                        if (ta(t)) {
                            var r = t
                            break e
                        }
                        t = t.return
                    }
                    throw Error(d(160))
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode
                        r.flags & 32 && (Mt(l, ""), (r.flags &= -33))
                        var i = ra(e)
                        oo(e, i, l)
                        break
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo,
                            u = ra(e)
                        io(e, u, o)
                        break
                    default:
                        throw Error(d(161))
                }
            } catch (s) {
                se(e, e.return, s)
            }
            e.flags &= -3
        }
        n & 4096 && (e.flags &= -4097)
    }
    function gf(e, n, t) {
        ;(C = e), ua(e)
    }
    function ua(e, n, t) {
        for (var r = (e.mode & 1) !== 0; C !== null; ) {
            var l = C,
                i = l.child
            if (l.tag === 22 && r) {
                var o = l.memoizedState !== null || fl
                if (!o) {
                    var u = l.alternate,
                        s = (u !== null && u.memoizedState !== null) || Ne
                    u = fl
                    var m = Ne
                    if (((fl = o), (Ne = s) && !m))
                        for (C = l; C !== null; )
                            (o = C),
                                (s = o.child),
                                o.tag === 22 && o.memoizedState !== null
                                    ? ca(l)
                                    : s !== null
                                    ? ((s.return = o), (C = s))
                                    : ca(l)
                    for (; i !== null; ) (C = i), ua(i), (i = i.sibling)
                    ;(C = l), (fl = u), (Ne = m)
                }
                sa(e)
            } else
                l.subtreeFlags & 8772 && i !== null
                    ? ((i.return = l), (C = i))
                    : sa(e)
        }
    }
    function sa(e) {
        for (; C !== null; ) {
            var n = C
            if (n.flags & 8772) {
                var t = n.alternate
                try {
                    if (n.flags & 8772)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ne || dl(5, n)
                                break
                            case 1:
                                var r = n.stateNode
                                if (n.flags & 4 && !Ne)
                                    if (t === null) r.componentDidMount()
                                    else {
                                        var l =
                                            n.elementType === n.type
                                                ? t.memoizedProps
                                                : un(n.type, t.memoizedProps)
                                        r.componentDidUpdate(
                                            l,
                                            t.memoizedState,
                                            r.__reactInternalSnapshotBeforeUpdate
                                        )
                                    }
                                var i = n.updateQueue
                                i !== null && as(n, i, r)
                                break
                            case 3:
                                var o = n.updateQueue
                                if (o !== null) {
                                    if (((t = null), n.child !== null))
                                        switch (n.child.tag) {
                                            case 5:
                                                t = n.child.stateNode
                                                break
                                            case 1:
                                                t = n.child.stateNode
                                        }
                                    as(n, o, t)
                                }
                                break
                            case 5:
                                var u = n.stateNode
                                if (t === null && n.flags & 4) {
                                    t = u
                                    var s = n.memoizedProps
                                    switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && t.focus()
                                            break
                                        case "img":
                                            s.src && (t.src = s.src)
                                    }
                                }
                                break
                            case 6:
                                break
                            case 4:
                                break
                            case 12:
                                break
                            case 13:
                                if (n.memoizedState === null) {
                                    var m = n.alternate
                                    if (m !== null) {
                                        var w = m.memoizedState
                                        if (w !== null) {
                                            var S = w.dehydrated
                                            S !== null && Qt(S)
                                        }
                                    }
                                }
                                break
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break
                            default:
                                throw Error(d(163))
                        }
                    Ne || (n.flags & 512 && lo(n))
                } catch (y) {
                    se(n, n.return, y)
                }
            }
            if (n === e) {
                C = null
                break
            }
            if (((t = n.sibling), t !== null)) {
                ;(t.return = n.return), (C = t)
                break
            }
            C = n.return
        }
    }
    function aa(e) {
        for (; C !== null; ) {
            var n = C
            if (n === e) {
                C = null
                break
            }
            var t = n.sibling
            if (t !== null) {
                ;(t.return = n.return), (C = t)
                break
            }
            C = n.return
        }
    }
    function ca(e) {
        for (; C !== null; ) {
            var n = C
            try {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var t = n.return
                        try {
                            dl(4, n)
                        } catch (s) {
                            se(n, t, s)
                        }
                        break
                    case 1:
                        var r = n.stateNode
                        if (typeof r.componentDidMount == "function") {
                            var l = n.return
                            try {
                                r.componentDidMount()
                            } catch (s) {
                                se(n, l, s)
                            }
                        }
                        var i = n.return
                        try {
                            lo(n)
                        } catch (s) {
                            se(n, i, s)
                        }
                        break
                    case 5:
                        var o = n.return
                        try {
                            lo(n)
                        } catch (s) {
                            se(n, o, s)
                        }
                }
            } catch (s) {
                se(n, n.return, s)
            }
            if (n === e) {
                C = null
                break
            }
            var u = n.sibling
            if (u !== null) {
                ;(u.return = n.return), (C = u)
                break
            }
            C = n.return
        }
    }
    var wf = Math.ceil,
        pl = _e.ReactCurrentDispatcher,
        uo = _e.ReactCurrentOwner,
        Je = _e.ReactCurrentBatchConfig,
        H = 0,
        ye = null,
        de = null,
        Se = 0,
        Qe = 0,
        Tt = Fn(0),
        he = 0,
        mr = null,
        rt = 0,
        ml = 0,
        so = 0,
        hr = null,
        De = null,
        ao = 0,
        Lt = 1 / 0,
        Pn = null,
        hl = !1,
        co = null,
        $n = null,
        vl = !1,
        Hn = null,
        yl = 0,
        vr = 0,
        fo = null,
        gl = -1,
        wl = 0
    function ze() {
        return H & 6 ? ae() : gl !== -1 ? gl : (gl = ae())
    }
    function Wn(e) {
        return e.mode & 1
            ? H & 2 && Se !== 0
                ? Se & -Se
                : nf.transition !== null
                ? (wl === 0 && (wl = ru()), wl)
                : ((e = G),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : du(e.type))),
                  e)
            : 1
    }
    function cn(e, n, t, r) {
        if (50 < vr) throw ((vr = 0), (fo = null), Error(d(185)))
        Bt(e, t, r),
            (!(H & 2) || e !== ye) &&
                (e === ye && (!(H & 2) && (ml |= t), he === 4 && Qn(e, Se)),
                Ue(e, r),
                t === 1 &&
                    H === 0 &&
                    !(n.mode & 1) &&
                    ((Lt = ae() + 500), Yr && Un()))
    }
    function Ue(e, n) {
        var t = e.callbackNode
        nc(e, n)
        var r = jr(e, e === ye ? Se : 0)
        if (r === 0)
            t !== null && eu(t),
                (e.callbackNode = null),
                (e.callbackPriority = 0)
        else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((t != null && eu(t), n === 1))
                e.tag === 0 ? ef(da.bind(null, e)) : Ju(da.bind(null, e)),
                    Zc(function () {
                        !(H & 6) && Un()
                    }),
                    (t = null)
            else {
                switch (lu(r)) {
                    case 1:
                        t = Wl
                        break
                    case 4:
                        t = nu
                        break
                    case 16:
                        t = Er
                        break
                    case 536870912:
                        t = tu
                        break
                    default:
                        t = Er
                }
                t = Sa(t, fa.bind(null, e))
            }
            ;(e.callbackPriority = n), (e.callbackNode = t)
        }
    }
    function fa(e, n) {
        if (((gl = -1), (wl = 0), H & 6)) throw Error(d(327))
        var t = e.callbackNode
        if (It() && e.callbackNode !== t) return null
        var r = jr(e, e === ye ? Se : 0)
        if (r === 0) return null
        if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r)
        else {
            n = r
            var l = H
            H |= 2
            var i = ma()
            ;(ye !== e || Se !== n) &&
                ((Pn = null), (Lt = ae() + 500), it(e, n))
            do
                try {
                    _f()
                    break
                } catch (u) {
                    pa(e, u)
                }
            while (!0)
            zi(),
                (pl.current = i),
                (H = l),
                de !== null ? (n = 0) : ((ye = null), (Se = 0), (n = he))
        }
        if (n !== 0) {
            if (
                (n === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (n = po(e, l)))),
                n === 1)
            )
                throw ((t = mr), it(e, 0), Qn(e, r), Ue(e, ae()), t)
            if (n === 6) Qn(e, r)
            else {
                if (
                    ((l = e.current.alternate),
                    !(r & 30) &&
                        !Sf(l) &&
                        ((n = Sl(e, r)),
                        n === 2 &&
                            ((i = Ql(e)), i !== 0 && ((r = i), (n = po(e, i)))),
                        n === 1))
                )
                    throw ((t = mr), it(e, 0), Qn(e, r), Ue(e, ae()), t)
                switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                    case 0:
                    case 1:
                        throw Error(d(345))
                    case 2:
                        ot(e, De, Pn)
                        break
                    case 3:
                        if (
                            (Qn(e, r),
                            (r & 130023424) === r &&
                                ((n = ao + 500 - ae()), 10 < n))
                        ) {
                            if (jr(e, 0) !== 0) break
                            if (((l = e.suspendedLanes), (l & r) !== r)) {
                                ze(), (e.pingedLanes |= e.suspendedLanes & l)
                                break
                            }
                            e.timeoutHandle = gi(ot.bind(null, e, De, Pn), n)
                            break
                        }
                        ot(e, De, Pn)
                        break
                    case 4:
                        if ((Qn(e, r), (r & 4194240) === r)) break
                        for (n = e.eventTimes, l = -1; 0 < r; ) {
                            var o = 31 - rn(r)
                            ;(i = 1 << o),
                                (o = n[o]),
                                o > l && (l = o),
                                (r &= ~i)
                        }
                        if (
                            ((r = l),
                            (r = ae() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                    ? 480
                                    : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                    ? 1920
                                    : 3e3 > r
                                    ? 3e3
                                    : 4320 > r
                                    ? 4320
                                    : 1960 * wf(r / 1960)) - r),
                            10 < r)
                        ) {
                            e.timeoutHandle = gi(ot.bind(null, e, De, Pn), r)
                            break
                        }
                        ot(e, De, Pn)
                        break
                    case 5:
                        ot(e, De, Pn)
                        break
                    default:
                        throw Error(d(329))
                }
            }
        }
        return Ue(e, ae()), e.callbackNode === t ? fa.bind(null, e) : null
    }
    function po(e, n) {
        var t = hr
        return (
            e.current.memoizedState.isDehydrated && (it(e, n).flags |= 256),
            (e = Sl(e, n)),
            e !== 2 && ((n = De), (De = t), n !== null && mo(n)),
            e
        )
    }
    function mo(e) {
        De === null ? (De = e) : De.push.apply(De, e)
    }
    function Sf(e) {
        for (var n = e; ; ) {
            if (n.flags & 16384) {
                var t = n.updateQueue
                if (t !== null && ((t = t.stores), t !== null))
                    for (var r = 0; r < t.length; r++) {
                        var l = t[r],
                            i = l.getSnapshot
                        l = l.value
                        try {
                            if (!ln(i(), l)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
                (t.return = n), (n = t)
            else {
                if (n === e) break
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === e) return !0
                    n = n.return
                }
                ;(n.sibling.return = n.return), (n = n.sibling)
            }
        }
        return !0
    }
    function Qn(e, n) {
        for (
            n &= ~so,
                n &= ~ml,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes;
            0 < n;

        ) {
            var t = 31 - rn(n),
                r = 1 << t
            ;(e[t] = -1), (n &= ~r)
        }
    }
    function da(e) {
        if (H & 6) throw Error(d(327))
        It()
        var n = jr(e, 0)
        if (!(n & 1)) return Ue(e, ae()), null
        var t = Sl(e, n)
        if (e.tag !== 0 && t === 2) {
            var r = Ql(e)
            r !== 0 && ((n = r), (t = po(e, r)))
        }
        if (t === 1) throw ((t = mr), it(e, 0), Qn(e, n), Ue(e, ae()), t)
        if (t === 6) throw Error(d(345))
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            ot(e, De, Pn),
            Ue(e, ae()),
            null
        )
    }
    function ho(e, n) {
        var t = H
        H |= 1
        try {
            return e(n)
        } finally {
            ;(H = t), H === 0 && ((Lt = ae() + 500), Yr && Un())
        }
    }
    function lt(e) {
        Hn !== null && Hn.tag === 0 && !(H & 6) && It()
        var n = H
        H |= 1
        var t = Je.transition,
            r = G
        try {
            if (((Je.transition = null), (G = 1), e)) return e()
        } finally {
            ;(G = r), (Je.transition = t), (H = n), !(H & 6) && Un()
        }
    }
    function vo() {
        ;(Qe = Tt.current), te(Tt)
    }
    function it(e, n) {
        ;(e.finishedWork = null), (e.finishedLanes = 0)
        var t = e.timeoutHandle
        if ((t !== -1 && ((e.timeoutHandle = -1), Gc(t)), de !== null))
            for (t = de.return; t !== null; ) {
                var r = t
                switch ((Ei(r), r.tag)) {
                    case 1:
                        ;(r = r.type.childContextTypes), r != null && Qr()
                        break
                    case 3:
                        Pt(), te(Me), te(xe), Di()
                        break
                    case 5:
                        Oi(r)
                        break
                    case 4:
                        Pt()
                        break
                    case 13:
                        te(ie)
                        break
                    case 19:
                        te(ie)
                        break
                    case 10:
                        Ti(r.type._context)
                        break
                    case 22:
                    case 23:
                        vo()
                }
                t = t.return
            }
        if (
            ((ye = e),
            (de = e = Kn(e.current, null)),
            (Se = Qe = n),
            (he = 0),
            (mr = null),
            (so = ml = rt = 0),
            (De = hr = null),
            et !== null)
        ) {
            for (n = 0; n < et.length; n++)
                if (((t = et[n]), (r = t.interleaved), r !== null)) {
                    t.interleaved = null
                    var l = r.next,
                        i = t.pending
                    if (i !== null) {
                        var o = i.next
                        ;(i.next = l), (r.next = o)
                    }
                    t.pending = r
                }
            et = null
        }
        return e
    }
    function pa(e, n) {
        do {
            var t = de
            try {
                if ((zi(), (rl.current = ul), ll)) {
                    for (var r = oe.memoizedState; r !== null; ) {
                        var l = r.queue
                        l !== null && (l.pending = null), (r = r.next)
                    }
                    ll = !1
                }
                if (
                    ((tt = 0),
                    (ve = me = oe = null),
                    (sr = !1),
                    (ar = 0),
                    (uo.current = null),
                    t === null || t.return === null)
                ) {
                    ;(he = 1), (mr = n), (de = null)
                    break
                }
                e: {
                    var i = e,
                        o = t.return,
                        u = t,
                        s = n
                    if (
                        ((n = Se),
                        (u.flags |= 32768),
                        s !== null &&
                            typeof s == "object" &&
                            typeof s.then == "function")
                    ) {
                        var m = s,
                            w = u,
                            S = w.tag
                        if (
                            !(w.mode & 1) &&
                            (S === 0 || S === 11 || S === 15)
                        ) {
                            var y = w.alternate
                            y
                                ? ((w.updateQueue = y.updateQueue),
                                  (w.memoizedState = y.memoizedState),
                                  (w.lanes = y.lanes))
                                : ((w.updateQueue = null),
                                  (w.memoizedState = null))
                        }
                        var E = Us(o)
                        if (E !== null) {
                            ;(E.flags &= -257),
                                As(E, o, u, i, n),
                                E.mode & 1 && Ds(i, m, n),
                                (n = E),
                                (s = m)
                            var P = n.updateQueue
                            if (P === null) {
                                var j = new Set()
                                j.add(s), (n.updateQueue = j)
                            } else P.add(s)
                            break e
                        } else {
                            if (!(n & 1)) {
                                Ds(i, m, n), yo()
                                break e
                            }
                            s = Error(d(426))
                        }
                    } else if (le && u.mode & 1) {
                        var ce = Us(o)
                        if (ce !== null) {
                            !(ce.flags & 65536) && (ce.flags |= 256),
                                As(ce, o, u, i, n),
                                Pi(jt(s, u))
                            break e
                        }
                    }
                    ;(i = s = jt(s, u)),
                        he !== 4 && (he = 2),
                        hr === null ? (hr = [i]) : hr.push(i),
                        (i = o)
                    do {
                        switch (i.tag) {
                            case 3:
                                ;(i.flags |= 65536), (n &= -n), (i.lanes |= n)
                                var f = Os(i, s, n)
                                ss(i, f)
                                break e
                            case 1:
                                u = s
                                var a = i.type,
                                    p = i.stateNode
                                if (
                                    !(i.flags & 128) &&
                                    (typeof a.getDerivedStateFromError ==
                                        "function" ||
                                        (p !== null &&
                                            typeof p.componentDidCatch ==
                                                "function" &&
                                            ($n === null || !$n.has(p))))
                                ) {
                                    ;(i.flags |= 65536),
                                        (n &= -n),
                                        (i.lanes |= n)
                                    var _ = Fs(i, u, n)
                                    ss(i, _)
                                    break e
                                }
                        }
                        i = i.return
                    } while (i !== null)
                }
                va(t)
            } catch (z) {
                ;(n = z), de === t && t !== null && (de = t = t.return)
                continue
            }
            break
        } while (!0)
    }
    function ma() {
        var e = pl.current
        return (pl.current = ul), e === null ? ul : e
    }
    function yo() {
        ;(he === 0 || he === 3 || he === 2) && (he = 4),
            ye === null ||
                (!(rt & 268435455) && !(ml & 268435455)) ||
                Qn(ye, Se)
    }
    function Sl(e, n) {
        var t = H
        H |= 2
        var r = ma()
        ;(ye !== e || Se !== n) && ((Pn = null), it(e, n))
        do
            try {
                kf()
                break
            } catch (l) {
                pa(e, l)
            }
        while (!0)
        if ((zi(), (H = t), (pl.current = r), de !== null)) throw Error(d(261))
        return (ye = null), (Se = 0), he
    }
    function kf() {
        for (; de !== null; ) ha(de)
    }
    function _f() {
        for (; de !== null && !Ka(); ) ha(de)
    }
    function ha(e) {
        var n = wa(e.alternate, e, Qe)
        ;(e.memoizedProps = e.pendingProps),
            n === null ? va(e) : (de = n),
            (uo.current = null)
    }
    function va(e) {
        var n = e
        do {
            var t = n.alternate
            if (((e = n.return), n.flags & 32768)) {
                if (((t = hf(t, n)), t !== null)) {
                    ;(t.flags &= 32767), (de = t)
                    return
                }
                if (e !== null)
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null)
                else {
                    ;(he = 6), (de = null)
                    return
                }
            } else if (((t = mf(t, n, Qe)), t !== null)) {
                de = t
                return
            }
            if (((n = n.sibling), n !== null)) {
                de = n
                return
            }
            de = n = e
        } while (n !== null)
        he === 0 && (he = 5)
    }
    function ot(e, n, t) {
        var r = G,
            l = Je.transition
        try {
            ;(Je.transition = null), (G = 1), xf(e, n, t, r)
        } finally {
            ;(Je.transition = l), (G = r)
        }
        return null
    }
    function xf(e, n, t, r) {
        do It()
        while (Hn !== null)
        if (H & 6) throw Error(d(327))
        t = e.finishedWork
        var l = e.finishedLanes
        if (t === null) return null
        if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
            throw Error(d(177))
        ;(e.callbackNode = null), (e.callbackPriority = 0)
        var i = t.lanes | t.childLanes
        if (
            (tc(e, i),
            e === ye && ((de = ye = null), (Se = 0)),
            (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
                vl ||
                ((vl = !0),
                Sa(Er, function () {
                    return It(), null
                })),
            (i = (t.flags & 15990) !== 0),
            t.subtreeFlags & 15990 || i)
        ) {
            ;(i = Je.transition), (Je.transition = null)
            var o = G
            G = 1
            var u = H
            ;(H |= 4),
                (uo.current = null),
                yf(e, t),
                oa(t, e),
                $c(vi),
                (Lr = !!hi),
                (vi = hi = null),
                (e.current = t),
                gf(t),
                Ya(),
                (H = u),
                (G = o),
                (Je.transition = i)
        } else e.current = t
        if (
            (vl && ((vl = !1), (Hn = e), (yl = l)),
            (i = e.pendingLanes),
            i === 0 && ($n = null),
            Za(t.stateNode),
            Ue(e, ae()),
            n !== null)
        )
            for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                (l = n[t]),
                    r(l.value, { componentStack: l.stack, digest: l.digest })
        if (hl) throw ((hl = !1), (e = co), (co = null), e)
        return (
            yl & 1 && e.tag !== 0 && It(),
            (i = e.pendingLanes),
            i & 1 ? (e === fo ? vr++ : ((vr = 0), (fo = e))) : (vr = 0),
            Un(),
            null
        )
    }
    function It() {
        if (Hn !== null) {
            var e = lu(yl),
                n = Je.transition,
                t = G
            try {
                if (
                    ((Je.transition = null), (G = 16 > e ? 16 : e), Hn === null)
                )
                    var r = !1
                else {
                    if (((e = Hn), (Hn = null), (yl = 0), H & 6))
                        throw Error(d(331))
                    var l = H
                    for (H |= 4, C = e.current; C !== null; ) {
                        var i = C,
                            o = i.child
                        if (C.flags & 16) {
                            var u = i.deletions
                            if (u !== null) {
                                for (var s = 0; s < u.length; s++) {
                                    var m = u[s]
                                    for (C = m; C !== null; ) {
                                        var w = C
                                        switch (w.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                pr(8, w, i)
                                        }
                                        var S = w.child
                                        if (S !== null) (S.return = w), (C = S)
                                        else
                                            for (; C !== null; ) {
                                                w = C
                                                var y = w.sibling,
                                                    E = w.return
                                                if ((na(w), w === m)) {
                                                    C = null
                                                    break
                                                }
                                                if (y !== null) {
                                                    ;(y.return = E), (C = y)
                                                    break
                                                }
                                                C = E
                                            }
                                    }
                                }
                                var P = i.alternate
                                if (P !== null) {
                                    var j = P.child
                                    if (j !== null) {
                                        P.child = null
                                        do {
                                            var ce = j.sibling
                                            ;(j.sibling = null), (j = ce)
                                        } while (j !== null)
                                    }
                                }
                                C = i
                            }
                        }
                        if (i.subtreeFlags & 2064 && o !== null)
                            (o.return = i), (C = o)
                        else
                            e: for (; C !== null; ) {
                                if (((i = C), i.flags & 2048))
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            pr(9, i, i.return)
                                    }
                                var f = i.sibling
                                if (f !== null) {
                                    ;(f.return = i.return), (C = f)
                                    break e
                                }
                                C = i.return
                            }
                    }
                    var a = e.current
                    for (C = a; C !== null; ) {
                        o = C
                        var p = o.child
                        if (o.subtreeFlags & 2064 && p !== null)
                            (p.return = o), (C = p)
                        else
                            e: for (o = a; C !== null; ) {
                                if (((u = C), u.flags & 2048))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                dl(9, u)
                                        }
                                    } catch (z) {
                                        se(u, u.return, z)
                                    }
                                if (u === o) {
                                    C = null
                                    break e
                                }
                                var _ = u.sibling
                                if (_ !== null) {
                                    ;(_.return = u.return), (C = _)
                                    break e
                                }
                                C = u.return
                            }
                    }
                    if (
                        ((H = l),
                        Un(),
                        mn && typeof mn.onPostCommitFiberRoot == "function")
                    )
                        try {
                            mn.onPostCommitFiberRoot(Cr, e)
                        } catch {}
                    r = !0
                }
                return r
            } finally {
                ;(G = t), (Je.transition = n)
            }
        }
        return !1
    }
    function ya(e, n, t) {
        ;(n = jt(t, n)),
            (n = Os(e, n, 1)),
            (e = Bn(e, n, 1)),
            (n = ze()),
            e !== null && (Bt(e, 1, n), Ue(e, n))
    }
    function se(e, n, t) {
        if (e.tag === 3) ya(e, e, t)
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    ya(n, e, t)
                    break
                } else if (n.tag === 1) {
                    var r = n.stateNode
                    if (
                        typeof n.type.getDerivedStateFromError == "function" ||
                        (typeof r.componentDidCatch == "function" &&
                            ($n === null || !$n.has(r)))
                    ) {
                        ;(e = jt(t, e)),
                            (e = Fs(n, e, 1)),
                            (n = Bn(n, e, 1)),
                            (e = ze()),
                            n !== null && (Bt(n, 1, e), Ue(n, e))
                        break
                    }
                }
                n = n.return
            }
    }
    function Ef(e, n, t) {
        var r = e.pingCache
        r !== null && r.delete(n),
            (n = ze()),
            (e.pingedLanes |= e.suspendedLanes & t),
            ye === e &&
                (Se & t) === t &&
                (he === 4 ||
                (he === 3 && (Se & 130023424) === Se && 500 > ae() - ao)
                    ? it(e, 0)
                    : (so |= t)),
            Ue(e, n)
    }
    function ga(e, n) {
        n === 0 &&
            (e.mode & 1
                ? ((n = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
                : (n = 1))
        var t = ze()
        ;(e = En(e, n)), e !== null && (Bt(e, n, t), Ue(e, t))
    }
    function Cf(e) {
        var n = e.memoizedState,
            t = 0
        n !== null && (t = n.retryLane), ga(e, t)
    }
    function Nf(e, n) {
        var t = 0
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState
                l !== null && (t = l.retryLane)
                break
            case 19:
                r = e.stateNode
                break
            default:
                throw Error(d(314))
        }
        r !== null && r.delete(n), ga(e, t)
    }
    var wa
    wa = function (e, n, t) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps || Me.current) Fe = !0
            else {
                if (!(e.lanes & t) && !(n.flags & 128))
                    return (Fe = !1), pf(e, n, t)
                Fe = !!(e.flags & 131072)
            }
        else (Fe = !1), le && n.flags & 1048576 && qu(n, Gr, n.index)
        switch (((n.lanes = 0), n.tag)) {
            case 2:
                var r = n.type
                cl(e, n), (e = n.pendingProps)
                var l = St(n, xe.current)
                Nt(n, t), (l = Bi(null, n, r, e, l, t))
                var i = Vi()
                return (
                    (n.flags |= 1),
                    typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                        ? ((n.tag = 1),
                          (n.memoizedState = null),
                          (n.updateQueue = null),
                          Oe(r) ? ((i = !0), Kr(n)) : (i = !1),
                          (n.memoizedState =
                              l.state !== null && l.state !== void 0
                                  ? l.state
                                  : null),
                          Ri(n),
                          (l.updater = sl),
                          (n.stateNode = l),
                          (l._reactInternals = n),
                          Yi(n, r, e, t),
                          (n = Ji(null, n, r, !0, i, t)))
                        : ((n.tag = 0),
                          le && i && xi(n),
                          je(null, n, l, t),
                          (n = n.child)),
                    n
                )
            case 16:
                r = n.elementType
                e: {
                    switch (
                        (cl(e, n),
                        (e = n.pendingProps),
                        (l = r._init),
                        (r = l(r._payload)),
                        (n.type = r),
                        (l = n.tag = jf(r)),
                        (e = un(r, e)),
                        l)
                    ) {
                        case 0:
                            n = Zi(null, n, r, e, t)
                            break e
                        case 1:
                            n = Qs(null, n, r, e, t)
                            break e
                        case 11:
                            n = Bs(null, n, r, e, t)
                            break e
                        case 14:
                            n = Vs(null, n, r, un(r.type, e), t)
                            break e
                    }
                    throw Error(d(306, r, ""))
                }
                return n
            case 0:
                return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : un(r, l)),
                    Zi(e, n, r, l, t)
                )
            case 1:
                return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : un(r, l)),
                    Qs(e, n, r, l, t)
                )
            case 3:
                e: {
                    if ((Ks(n), e === null)) throw Error(d(387))
                    ;(r = n.pendingProps),
                        (i = n.memoizedState),
                        (l = i.element),
                        us(e, n),
                        nl(n, r, null, t)
                    var o = n.memoizedState
                    if (((r = o.element), i.isDehydrated))
                        if (
                            ((i = {
                                element: r,
                                isDehydrated: !1,
                                cache: o.cache,
                                pendingSuspenseBoundaries:
                                    o.pendingSuspenseBoundaries,
                                transitions: o.transitions,
                            }),
                            (n.updateQueue.baseState = i),
                            (n.memoizedState = i),
                            n.flags & 256)
                        ) {
                            ;(l = jt(Error(d(423)), n)), (n = Ys(e, n, r, t, l))
                            break e
                        } else if (r !== l) {
                            ;(l = jt(Error(d(424)), n)), (n = Ys(e, n, r, t, l))
                            break e
                        } else
                            for (
                                We = On(n.stateNode.containerInfo.firstChild),
                                    He = n,
                                    le = !0,
                                    on = null,
                                    t = is(n, null, r, t),
                                    n.child = t;
                                t;

                            )
                                (t.flags = (t.flags & -3) | 4096),
                                    (t = t.sibling)
                    else {
                        if ((xt(), r === l)) {
                            n = Nn(e, n, t)
                            break e
                        }
                        je(e, n, r, t)
                    }
                    n = n.child
                }
                return n
            case 5:
                return (
                    cs(n),
                    e === null && Ni(n),
                    (r = n.type),
                    (l = n.pendingProps),
                    (i = e !== null ? e.memoizedProps : null),
                    (o = l.children),
                    yi(r, l)
                        ? (o = null)
                        : i !== null && yi(r, i) && (n.flags |= 32),
                    Ws(e, n),
                    je(e, n, o, t),
                    n.child
                )
            case 6:
                return e === null && Ni(n), null
            case 13:
                return Xs(e, n, t)
            case 4:
                return (
                    Mi(n, n.stateNode.containerInfo),
                    (r = n.pendingProps),
                    e === null ? (n.child = Et(n, null, r, t)) : je(e, n, r, t),
                    n.child
                )
            case 11:
                return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : un(r, l)),
                    Bs(e, n, r, l, t)
                )
            case 7:
                return je(e, n, n.pendingProps, t), n.child
            case 8:
                return je(e, n, n.pendingProps.children, t), n.child
            case 12:
                return je(e, n, n.pendingProps.children, t), n.child
            case 10:
                e: {
                    if (
                        ((r = n.type._context),
                        (l = n.pendingProps),
                        (i = n.memoizedProps),
                        (o = l.value),
                        ee(qr, r._currentValue),
                        (r._currentValue = o),
                        i !== null)
                    )
                        if (ln(i.value, o)) {
                            if (i.children === l.children && !Me.current) {
                                n = Nn(e, n, t)
                                break e
                            }
                        } else
                            for (
                                i = n.child, i !== null && (i.return = n);
                                i !== null;

                            ) {
                                var u = i.dependencies
                                if (u !== null) {
                                    o = i.child
                                    for (var s = u.firstContext; s !== null; ) {
                                        if (s.context === r) {
                                            if (i.tag === 1) {
                                                ;(s = Cn(-1, t & -t)),
                                                    (s.tag = 2)
                                                var m = i.updateQueue
                                                if (m !== null) {
                                                    m = m.shared
                                                    var w = m.pending
                                                    w === null
                                                        ? (s.next = s)
                                                        : ((s.next = w.next),
                                                          (w.next = s)),
                                                        (m.pending = s)
                                                }
                                            }
                                            ;(i.lanes |= t),
                                                (s = i.alternate),
                                                s !== null && (s.lanes |= t),
                                                Li(i.return, t, n),
                                                (u.lanes |= t)
                                            break
                                        }
                                        s = s.next
                                    }
                                } else if (i.tag === 10)
                                    o = i.type === n.type ? null : i.child
                                else if (i.tag === 18) {
                                    if (((o = i.return), o === null))
                                        throw Error(d(341))
                                    ;(o.lanes |= t),
                                        (u = o.alternate),
                                        u !== null && (u.lanes |= t),
                                        Li(o, t, n),
                                        (o = i.sibling)
                                } else o = i.child
                                if (o !== null) o.return = i
                                else
                                    for (o = i; o !== null; ) {
                                        if (o === n) {
                                            o = null
                                            break
                                        }
                                        if (((i = o.sibling), i !== null)) {
                                            ;(i.return = o.return), (o = i)
                                            break
                                        }
                                        o = o.return
                                    }
                                i = o
                            }
                    je(e, n, l.children, t), (n = n.child)
                }
                return n
            case 9:
                return (
                    (l = n.type),
                    (r = n.pendingProps.children),
                    Nt(n, t),
                    (l = Ge(l)),
                    (r = r(l)),
                    (n.flags |= 1),
                    je(e, n, r, t),
                    n.child
                )
            case 14:
                return (
                    (r = n.type),
                    (l = un(r, n.pendingProps)),
                    (l = un(r.type, l)),
                    Vs(e, n, r, l, t)
                )
            case 15:
                return $s(e, n, n.type, n.pendingProps, t)
            case 17:
                return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : un(r, l)),
                    cl(e, n),
                    (n.tag = 1),
                    Oe(r) ? ((e = !0), Kr(n)) : (e = !1),
                    Nt(n, t),
                    Rs(n, r, l),
                    Yi(n, r, l, t),
                    Ji(null, n, r, !0, e, t)
                )
            case 19:
                return Zs(e, n, t)
            case 22:
                return Hs(e, n, t)
        }
        throw Error(d(156, n.tag))
    }
    function Sa(e, n) {
        return bo(e, n)
    }
    function Pf(e, n, t, r) {
        ;(this.tag = e),
            (this.key = t),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
    }
    function qe(e, n, t, r) {
        return new Pf(e, n, t, r)
    }
    function go(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent)
    }
    function jf(e) {
        if (typeof e == "function") return go(e) ? 1 : 0
        if (e != null) {
            if (((e = e.$$typeof), e === dn)) return 11
            if (e === pn) return 14
        }
        return 2
    }
    function Kn(e, n) {
        var t = e.alternate
        return (
            t === null
                ? ((t = qe(e.tag, n, e.key, e.mode)),
                  (t.elementType = e.elementType),
                  (t.type = e.type),
                  (t.stateNode = e.stateNode),
                  (t.alternate = e),
                  (e.alternate = t))
                : ((t.pendingProps = n),
                  (t.type = e.type),
                  (t.flags = 0),
                  (t.subtreeFlags = 0),
                  (t.deletions = null)),
            (t.flags = e.flags & 14680064),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
                n === null
                    ? null
                    : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
        )
    }
    function kl(e, n, t, r, l, i) {
        var o = 2
        if (((r = e), typeof e == "function")) go(e) && (o = 1)
        else if (typeof e == "string") o = 5
        else
            e: switch (e) {
                case Ie:
                    return ut(t.children, l, i, n)
                case Ke:
                    ;(o = 8), (l |= 8)
                    break
                case jn:
                    return (
                        (e = qe(12, t, n, l | 2)),
                        (e.elementType = jn),
                        (e.lanes = i),
                        e
                    )
                case Be:
                    return (
                        (e = qe(13, t, n, l)),
                        (e.elementType = Be),
                        (e.lanes = i),
                        e
                    )
                case tn:
                    return (
                        (e = qe(19, t, n, l)),
                        (e.elementType = tn),
                        (e.lanes = i),
                        e
                    )
                case ue:
                    return _l(t, l, i, n)
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case wn:
                                o = 10
                                break e
                            case Xn:
                                o = 9
                                break e
                            case dn:
                                o = 11
                                break e
                            case pn:
                                o = 14
                                break e
                            case Re:
                                ;(o = 16), (r = null)
                                break e
                        }
                    throw Error(d(130, e == null ? e : typeof e, ""))
            }
        return (
            (n = qe(o, t, n, l)),
            (n.elementType = e),
            (n.type = r),
            (n.lanes = i),
            n
        )
    }
    function ut(e, n, t, r) {
        return (e = qe(7, e, r, n)), (e.lanes = t), e
    }
    function _l(e, n, t, r) {
        return (
            (e = qe(22, e, r, n)),
            (e.elementType = ue),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
        )
    }
    function wo(e, n, t) {
        return (e = qe(6, e, null, n)), (e.lanes = t), e
    }
    function So(e, n, t) {
        return (
            (n = qe(4, e.children !== null ? e.children : [], e.key, n)),
            (n.lanes = t),
            (n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            n
        )
    }
    function zf(e, n, t, r, l) {
        ;(this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Kl(0)),
            (this.expirationTimes = Kl(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Kl(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null)
    }
    function ko(e, n, t, r, l, i, o, u, s) {
        return (
            (e = new zf(e, n, t, u, s)),
            n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
            (i = qe(3, null, null, n)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
                element: r,
                isDehydrated: t,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Ri(i),
            e
        )
    }
    function Tf(e, n, t) {
        var r =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null
        return {
            $$typeof: Pe,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t,
        }
    }
    function ka(e) {
        if (!e) return Dn
        e = e._reactInternals
        e: {
            if (Gn(e) !== e || e.tag !== 1) throw Error(d(170))
            var n = e
            do {
                switch (n.tag) {
                    case 3:
                        n = n.stateNode.context
                        break e
                    case 1:
                        if (Oe(n.type)) {
                            n =
                                n.stateNode
                                    .__reactInternalMemoizedMergedChildContext
                            break e
                        }
                }
                n = n.return
            } while (n !== null)
            throw Error(d(171))
        }
        if (e.tag === 1) {
            var t = e.type
            if (Oe(t)) return Gu(e, t, n)
        }
        return n
    }
    function _a(e, n, t, r, l, i, o, u, s) {
        return (
            (e = ko(t, r, !0, e, l, i, o, u, s)),
            (e.context = ka(null)),
            (t = e.current),
            (r = ze()),
            (l = Wn(t)),
            (i = Cn(r, l)),
            (i.callback = n ?? null),
            Bn(t, i, l),
            (e.current.lanes = l),
            Bt(e, l, r),
            Ue(e, r),
            e
        )
    }
    function xl(e, n, t, r) {
        var l = n.current,
            i = ze(),
            o = Wn(l)
        return (
            (t = ka(t)),
            n.context === null ? (n.context = t) : (n.pendingContext = t),
            (n = Cn(i, o)),
            (n.payload = { element: e }),
            (r = r === void 0 ? null : r),
            r !== null && (n.callback = r),
            (e = Bn(l, n, o)),
            e !== null && (cn(e, l, o, i), el(e, l, o)),
            o
        )
    }
    function El(e) {
        if (((e = e.current), !e.child)) return null
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode
            default:
                return e.child.stateNode
        }
    }
    function xa(e, n) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var t = e.retryLane
            e.retryLane = t !== 0 && t < n ? t : n
        }
    }
    function _o(e, n) {
        xa(e, n), (e = e.alternate) && xa(e, n)
    }
    function Lf() {
        return null
    }
    var Ea =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e)
              }
    function xo(e) {
        this._internalRoot = e
    }
    ;(Cl.prototype.render = xo.prototype.render =
        function (e) {
            var n = this._internalRoot
            if (n === null) throw Error(d(409))
            xl(e, n, null, null)
        }),
        (Cl.prototype.unmount = xo.prototype.unmount =
            function () {
                var e = this._internalRoot
                if (e !== null) {
                    this._internalRoot = null
                    var n = e.containerInfo
                    lt(function () {
                        xl(null, e, null, null)
                    }),
                        (n[Sn] = null)
                }
            })
    function Cl(e) {
        this._internalRoot = e
    }
    Cl.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var n = uu()
            e = { blockedOn: null, target: e, priority: n }
            for (
                var t = 0;
                t < In.length && n !== 0 && n < In[t].priority;
                t++
            );
            In.splice(t, 0, e), t === 0 && cu(e)
        }
    }
    function Eo(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        )
    }
    function Nl(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        )
    }
    function Ca() {}
    function If(e, n, t, r, l) {
        if (l) {
            if (typeof r == "function") {
                var i = r
                r = function () {
                    var m = El(o)
                    i.call(m)
                }
            }
            var o = _a(n, r, e, 0, null, !1, !1, "", Ca)
            return (
                (e._reactRootContainer = o),
                (e[Sn] = o.current),
                er(e.nodeType === 8 ? e.parentNode : e),
                lt(),
                o
            )
        }
        for (; (l = e.lastChild); ) e.removeChild(l)
        if (typeof r == "function") {
            var u = r
            r = function () {
                var m = El(s)
                u.call(m)
            }
        }
        var s = ko(e, 0, !1, null, null, !1, !1, "", Ca)
        return (
            (e._reactRootContainer = s),
            (e[Sn] = s.current),
            er(e.nodeType === 8 ? e.parentNode : e),
            lt(function () {
                xl(n, s, t, r)
            }),
            s
        )
    }
    function Pl(e, n, t, r, l) {
        var i = t._reactRootContainer
        if (i) {
            var o = i
            if (typeof l == "function") {
                var u = l
                l = function () {
                    var s = El(o)
                    u.call(s)
                }
            }
            xl(n, o, e, l)
        } else o = If(t, n, e, l, r)
        return El(o)
    }
    ;(iu = function (e) {
        switch (e.tag) {
            case 3:
                var n = e.stateNode
                if (n.current.memoizedState.isDehydrated) {
                    var t = At(n.pendingLanes)
                    t !== 0 &&
                        (Yl(n, t | 1),
                        Ue(n, ae()),
                        !(H & 6) && ((Lt = ae() + 500), Un()))
                }
                break
            case 13:
                lt(function () {
                    var r = En(e, 1)
                    if (r !== null) {
                        var l = ze()
                        cn(r, e, 1, l)
                    }
                }),
                    _o(e, 1)
        }
    }),
        (Xl = function (e) {
            if (e.tag === 13) {
                var n = En(e, 134217728)
                if (n !== null) {
                    var t = ze()
                    cn(n, e, 134217728, t)
                }
                _o(e, 134217728)
            }
        }),
        (ou = function (e) {
            if (e.tag === 13) {
                var n = Wn(e),
                    t = En(e, n)
                if (t !== null) {
                    var r = ze()
                    cn(t, e, n, r)
                }
                _o(e, n)
            }
        }),
        (uu = function () {
            return G
        }),
        (su = function (e, n) {
            var t = G
            try {
                return (G = e), n()
            } finally {
                G = t
            }
        }),
        (Bl = function (e, n, t) {
            switch (n) {
                case "input":
                    if (
                        (Il(e, t),
                        (n = t.name),
                        t.type === "radio" && n != null)
                    ) {
                        for (t = e; t.parentNode; ) t = t.parentNode
                        for (
                            t = t.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + n) +
                                    '][type="radio"]'
                            ),
                                n = 0;
                            n < t.length;
                            n++
                        ) {
                            var r = t[n]
                            if (r !== e && r.form === e.form) {
                                var l = Wr(r)
                                if (!l) throw Error(d(90))
                                Io(r), Il(r, l)
                            }
                        }
                    }
                    break
                case "textarea":
                    Do(e, t)
                    break
                case "select":
                    ;(n = t.value), n != null && st(e, !!t.multiple, n, !1)
            }
        }),
        (Ko = ho),
        (Yo = lt)
    var Rf = { usingClientEntryPoint: !1, Events: [rr, gt, Wr, Wo, Qo, ho] },
        yr = {
            findFiberByHostInstance: Zn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        Mf = {
            bundleType: yr.bundleType,
            version: yr.version,
            rendererPackageName: yr.rendererPackageName,
            rendererConfig: yr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _e.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = Jo(e)), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: yr.findFiberByHostInstance || Lf,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (!jl.isDisabled && jl.supportsFiber)
            try {
                ;(Cr = jl.inject(Mf)), (mn = jl)
            } catch {}
    }
    return (
        (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
        (Ae.createPortal = function (e, n) {
            var t =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null
            if (!Eo(n)) throw Error(d(200))
            return Tf(e, n, null, t)
        }),
        (Ae.createRoot = function (e, n) {
            if (!Eo(e)) throw Error(d(299))
            var t = !1,
                r = "",
                l = Ea
            return (
                n != null &&
                    (n.unstable_strictMode === !0 && (t = !0),
                    n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
                    n.onRecoverableError !== void 0 &&
                        (l = n.onRecoverableError)),
                (n = ko(e, 1, !1, null, null, t, !1, r, l)),
                (e[Sn] = n.current),
                er(e.nodeType === 8 ? e.parentNode : e),
                new xo(n)
            )
        }),
        (Ae.findDOMNode = function (e) {
            if (e == null) return null
            if (e.nodeType === 1) return e
            var n = e._reactInternals
            if (n === void 0)
                throw typeof e.render == "function"
                    ? Error(d(188))
                    : ((e = Object.keys(e).join(",")), Error(d(268, e)))
            return (e = Jo(n)), (e = e === null ? null : e.stateNode), e
        }),
        (Ae.flushSync = function (e) {
            return lt(e)
        }),
        (Ae.hydrate = function (e, n, t) {
            if (!Nl(n)) throw Error(d(200))
            return Pl(null, e, n, !0, t)
        }),
        (Ae.hydrateRoot = function (e, n, t) {
            if (!Eo(e)) throw Error(d(405))
            var r = (t != null && t.hydratedSources) || null,
                l = !1,
                i = "",
                o = Ea
            if (
                (t != null &&
                    (t.unstable_strictMode === !0 && (l = !0),
                    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
                    t.onRecoverableError !== void 0 &&
                        (o = t.onRecoverableError)),
                (n = _a(n, null, e, 1, t ?? null, l, !1, i, o)),
                (e[Sn] = n.current),
                er(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (t = r[e]),
                        (l = t._getVersion),
                        (l = l(t._source)),
                        n.mutableSourceEagerHydrationData == null
                            ? (n.mutableSourceEagerHydrationData = [t, l])
                            : n.mutableSourceEagerHydrationData.push(t, l)
            return new Cl(n)
        }),
        (Ae.render = function (e, n, t) {
            if (!Nl(n)) throw Error(d(200))
            return Pl(null, e, n, !1, t)
        }),
        (Ae.unmountComponentAtNode = function (e) {
            if (!Nl(e)) throw Error(d(40))
            return e._reactRootContainer
                ? (lt(function () {
                      Pl(null, null, e, !1, function () {
                          ;(e._reactRootContainer = null), (e[Sn] = null)
                      })
                  }),
                  !0)
                : !1
        }),
        (Ae.unstable_batchedUpdates = ho),
        (Ae.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Nl(t)) throw Error(d(200))
            if (e == null || e._reactInternals === void 0) throw Error(d(38))
            return Pl(e, n, t, !1, r)
        }),
        (Ae.version = "18.3.1-next-f1338f8080-20240426"),
        Ae
    )
}
var Ra
function Da() {
    if (Ra) return Po.exports
    Ra = 1
    function h() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)
            } catch (k) {
                console.error(k)
            }
    }
    return h(), (Po.exports = Vf()), Po.exports
}
var Ma
function $f() {
    if (Ma) return zl
    Ma = 1
    var h = Da()
    return (zl.createRoot = h.createRoot), (zl.hydrateRoot = h.hydrateRoot), zl
}
var Hf = $f()
const Wf = "/assets/airPlane-DbVVehsw.jpg"
function Oa({ children: h, isActive: k, ...d }) {
    const M = k ? "sorting__button sorting__button_active" : "sorting__button"
    return v.jsx("div", { className: M, ...d, children: h })
}
function Qf({ onClick: h }) {
    const [k, d] = ke.useState("lowPrice")
    function M(T) {
        d(T), h && h(T)
    }
    return v.jsxs("div", {
        className: "sorting",
        children: [
            v.jsx(Oa, {
                isActive: k == "lowPrice",
                onClick: () => M("lowPrice"),
                children: "Самый дешевый",
            }),
            v.jsx(Oa, {
                isActive: k == "fast",
                onClick: () => M("fast"),
                children: "Самый быстрый",
            }),
        ],
    })
}
function Kf({ ticketData: h, ...k }) {
    return v.jsxs("div", {
        className: "ticketCard",
        ...k,
        children: [
            v.jsxs("div", {
                className: "ticketCard__leftPanel",
                children: [
                    v.jsx("div", {
                        className: "ticketCard__price",
                        children: h.price,
                    }),
                    v.jsx("div", {
                        className: "selectButton",
                        children: "Выбрать билет",
                    }),
                ],
            }),
            v.jsxs("div", {
                className: "ticketCard__rightPanel",
                children: [
                    v.jsx("div", {
                        className: "ticketCard__upPanel",
                        children: v.jsx("div", {
                            className: "airline",
                            children: v.jsx("div", {
                                className: "airline__name",
                                children: h.airline,
                            }),
                        }),
                    }),
                    v.jsx("div", {
                        className: "ticketCard__middlePanel",
                        children: v.jsxs("div", {
                            className: "flightInfo",
                            children: [
                                v.jsxs("div", {
                                    className: "flightInfo__left",
                                    children: [
                                        v.jsx("div", {
                                            className: "flightInfo__time",
                                            children:
                                                h.flightInfo.departureTime[0],
                                        }),
                                        v.jsx("div", {
                                            className: "flightInfo__city",
                                            children: h.flightInfo.origin,
                                        }),
                                        v.jsx("div", {
                                            className: "flightInfo__date",
                                            children:
                                                h.flightInfo.departureTime[1],
                                        }),
                                    ],
                                }),
                                v.jsx("div", {
                                    className: "flightInfo__middle",
                                    children: v.jsxs("div", {
                                        className: "flightInfo__duration",
                                        children: [
                                            "В пути: ",
                                            h.flightInfo.duration,
                                        ],
                                    }),
                                }),
                                v.jsxs("div", {
                                    className: "flightInfo__right",
                                    children: [
                                        v.jsx("div", {
                                            className: "flightInfo__time",
                                            children:
                                                h.flightInfo.arrivalTime[0],
                                        }),
                                        v.jsx("div", {
                                            className: "flightInfo__city",
                                            children: h.flightInfo.destination,
                                        }),
                                        v.jsx("div", {
                                            className: "flightInfo__date",
                                            children:
                                                h.flightInfo.arrivalTime[1],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    v.jsx("div", {
                        className: "ticketCard__downPanel",
                        children: v.jsxs("div", {
                            className: "transfers",
                            children: [
                                v.jsxs("div", {
                                    className: "transfers__amount",
                                    children: [
                                        "Пересадки -",
                                        " ",
                                        h.transfers !== 0 ? h.transfers : "нет",
                                    ],
                                }),
                                v.jsx("div", {
                                    className: "transfers__locations",
                                    children: h.transfers
                                        ? h.transferLocations.join(", ")
                                        : v.jsx("span", {}),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    })
}
function To({ children: h, isActive: k, ...d }) {
    const M = k && v.jsx("span", { children: "✓" })
    return v.jsxs("div", {
        className: "checkbox-button",
        ...d,
        children: [
            v.jsx("div", {
                className: "checkbox-button__square",
                children: v.jsx("div", {
                    className: "checkbox-button__checkmark",
                    children: M,
                }),
            }),
            v.jsx("div", { className: "checkbox-button__label", children: h }),
        ],
    })
}
function Yf(h) {
    const k = h.map((M) => M.transfers)
    return [...new Set(k)].sort((M, T) => M - T)
}
function Xf(h) {
    return h === 1
        ? `${h} пересадка`
        : h >= 2 && h <= 4
        ? `${h} пересадки`
        : `${h} пересадок`
}
function Gf({ onClick: h, ticketsData: k }) {
    const [d, M] = ke.useState("all")
    function T(V) {
        M(V), h && h(V)
    }
    const B = Yf(k)
    return v.jsxs("div", {
        className: "transfer",
        children: [
            v.jsx("p", {
                className: "transfer__title",
                children: "Количество пересадок",
            }),
            v.jsx(To, {
                onClick: () => T("all"),
                isActive: d == "all",
                children: "Все",
            }),
            v.jsx(To, {
                onClick: () => T("without"),
                isActive: d == "without",
                children: "Без пересадки",
            }),
            B.map((V) =>
                V !== 0
                    ? v.jsx(
                          To,
                          {
                              onClick: () => T(V.toString()),
                              isActive: d == V.toString(),
                              children: Xf(V),
                          },
                          V
                      )
                    : null
            ),
        ],
    })
}
async function Zf(h) {
    return new Promise((k, d) => {
        setTimeout(async () => {
            try {
                const T = await (await fetch("./dataBase.json")).json()
                h.includes("/tickets")
                    ? k(T.tickets)
                    : d(new Error("Invalid URL"))
            } catch (M) {
                d(M)
            }
        }, 3e3)
    })
}
function Jf(h) {
    return `${h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Руб`
}
function Fa(h) {
    const k = new Date(h),
        d = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июня",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря",
        ],
        M = k.getDate(),
        T = d[k.getMonth()],
        B = `${M} ${T}`,
        V = k.getHours().toString().padStart(2, "0"),
        $ = k.getMinutes().toString().padStart(2, "0")
    return [`${V}:${$}`, B]
}
function qf(h) {
    if (typeof h != "number" || h < 0)
        throw new Error("Входное значение должно быть неотрицательным числом")
    const k = Math.floor(h / (24 * 60)),
        d = Math.floor((h % (24 * 60)) / 60),
        M = h % 60
    let T = ""
    return (
        k > 0 && (T += `${k}д `),
        d > 0 && (T += `${d}ч `),
        M > 0 && (T += `${M}м`),
        T.trim()
    )
}
function bf(h) {
    return h.map((k) => ({
        id: k.id,
        price: Jf(k.price),
        priceInt: k.price,
        airline: k.airline,
        baggage: k.baggage,
        class: k.class,
        flightInfo: {
            arrivalTime: Fa(k.flightInfo.arrivalTime),
            departureTime: Fa(k.flightInfo.departureTime),
            destination: k.flightInfo.destination,
            duration: qf(k.flightInfo.duration),
            durationInt: k.flightInfo.duration,
            origin: k.flightInfo.origin,
        },
        transfers: k.transfers,
        transferLocations: k == null ? void 0 : k.transferLocations,
    }))
}
function ed() {
    const [h, k] = ke.useState([]),
        [d, M] = ke.useState(!0),
        [T, B] = ke.useState(null)
    return (
        ke.useEffect(() => {
            async function V() {
                try {
                    const $ = await Zf("/tickets")
                    k(bf($))
                } catch ($) {
                    B($)
                } finally {
                    M(!1)
                }
            }
            V()
        }, []),
        { tickets: h, loading: d, error: T }
    )
}
function nd(h, k) {
    return ke.useMemo(
        () =>
            [...h].filter((d) => {
                switch (k) {
                    case "all":
                        return !0
                    case "without":
                        return d.transfers == 0
                    default:
                        return d.transfers == Number(k)
                }
            }),
        [h, k]
    )
}
function td(h, k) {
    return ke.useMemo(
        () =>
            [...h].sort((d, M) => {
                switch (k) {
                    case "lowPrice":
                        return d.priceInt - M.priceInt
                    case "fast":
                        return (
                            d.flightInfo.durationInt - M.flightInfo.durationInt
                        )
                }
            }),
        [h, k]
    )
}
function rd() {
    return v.jsx("div", {
        id: "preloader",
        children: v.jsx("div", { id: "loader" }),
    })
}
var ld = Da()
function Ua({ children: h, isOpen: k }) {
    return (
        ke.useEffect(
            () => (
                k && document.body.classList.add("no-scroll"),
                () => document.body.classList.remove("no-scroll")
            ),
            [k]
        ),
        k
            ? ld.createPortal(
                  v.jsx(v.Fragment, {
                      children: v.jsx("div", {
                          className: "modal",
                          children: v.jsx("dialog", { open: k, children: h }),
                      }),
                  }),
                  document.getElementById("modal")
              )
            : null
    )
}
function Tl({ children: h, isActive: k, ...d }) {
    const M = k ? "button active" : "button"
    return v.jsx("button", { className: M, ...d, children: h })
}
function id({
    isOpenModal: h,
    onCloseModal: k,
    selectTicketCard: d,
    onOpenBookModal: M,
}) {
    return v.jsxs(Ua, {
        isOpen: h,
        children: [
            v.jsx("h3", { children: "Информация о перелете" }),
            v.jsx("hr", {}),
            v.jsxs("div", {
                className: "flightInfo",
                children: [
                    v.jsxs("div", {
                        className: "flightInfo__left",
                        children: [
                            v.jsx("div", {
                                className: "flightInfo__time",
                                children: d.flightInfo.departureTime[0],
                            }),
                            v.jsx("div", {
                                className: "flightInfo__city",
                                children: d.flightInfo.origin,
                            }),
                            v.jsx("div", {
                                className: "flightInfo__date",
                                children: d.flightInfo.departureTime[1],
                            }),
                        ],
                    }),
                    v.jsx("div", {
                        className: "flightInfo__middle",
                        children: v.jsxs("div", {
                            className: "flightInfo__duration",
                            children: ["В пути: ", d.flightInfo.duration],
                        }),
                    }),
                    v.jsxs("div", {
                        className: "flightInfo__right",
                        children: [
                            v.jsx("div", {
                                className: "flightInfo__time",
                                children: d.flightInfo.arrivalTime[0],
                            }),
                            v.jsx("div", {
                                className: "flightInfo__city",
                                children: d.flightInfo.destination,
                            }),
                            v.jsx("div", {
                                className: "flightInfo__date",
                                children: d.flightInfo.arrivalTime[1],
                            }),
                        ],
                    }),
                ],
            }),
            v.jsxs("ul", {
                children: [
                    v.jsxs("li", {
                        children: [
                            "Авиакомпания: ",
                            v.jsx("b", { children: d.airline }),
                        ],
                    }),
                    v.jsxs("li", {
                        children: [
                            "Стоимость: ",
                            v.jsx("b", { children: d.price }),
                        ],
                    }),
                    v.jsxs("li", {
                        children: [
                            "Класс перелета: ",
                            v.jsx("b", { children: d.class }),
                        ],
                    }),
                    v.jsxs("li", {
                        children: [
                            "Наличие багажа:",
                            " ",
                            v.jsx("b", { children: d.baggage ? "Да" : "Нет" }),
                        ],
                    }),
                    v.jsxs("li", {
                        children: [
                            "Города для пересадки:",
                            " ",
                            d.transfers
                                ? v.jsx("ul", {
                                      children: d.transferLocations.map((T) =>
                                          v.jsx("li", { children: T }, T)
                                      ),
                                  })
                                : v.jsx("span", { children: "Нет" }),
                        ],
                    }),
                ],
            }),
            v.jsx("hr", {}),
            v.jsxs("footer", {
                className: "showInfoTickedCard__bottom",
                children: [
                    v.jsx(Tl, { onClick: () => k(), children: "Закрыть" }),
                    v.jsx(Tl, {
                        isActive: !0,
                        onClick: () => M(d),
                        children: "Забронировать",
                    }),
                ],
            }),
        ],
    })
}
function od({ isOpenModal: h, onCloseModal: k }) {
    const [d, M] = ke.useState(""),
        [T, B] = ke.useState("")
    function V($) {
        $.preventDefault()
        const W =
                `
Номер телефона: ` + T,
            pe =
                `
Имя: ` + d
        alert(
            `Данные отправлены...
` +
                pe +
                W
        ),
            k()
    }
    return v.jsxs(Ua, {
        isOpen: h,
        children: [
            v.jsx("p", {
                children: v.jsx("b", {
                    children:
                        "Вы хотите забронировать билет, введите пожалуйста ваши контактные данные:",
                }),
            }),
            v.jsxs("form", {
                className: "bookModal",
                onSubmit: V,
                children: [
                    v.jsx("label", { htmlFor: "name", children: "Ваше имя" }),
                    v.jsx("input", {
                        type: "text",
                        id: "name",
                        className: "bookModal__control",
                        onChange: ($) => M($.target.value),
                    }),
                    v.jsx("label", {
                        htmlFor: "phoneNumber",
                        children: "Номер телефона",
                    }),
                    v.jsx("input", {
                        type: "number",
                        id: "phoneNumber",
                        className: "bookModal__control",
                        onChange: ($) => B($.target.value),
                    }),
                    v.jsx(Tl, { isActive: !0, children: "Отправить" }),
                ],
            }),
            v.jsx("hr", {}),
            v.jsx(Tl, { onClick: () => k(), children: "Закрыть" }),
        ],
    })
}
function ud() {
    const { tickets: h, loading: k, error: d } = ed(),
        [M, T] = ke.useState("lowPrice"),
        [B, V] = ke.useState("all"),
        [$, W] = ke.useState(!1),
        [pe, fe] = ke.useState(!1),
        [J, Z] = ke.useState(!1),
        Te = nd(h, B),
        Le = td(Te, M)
    function q(D) {
        W(D), fe((be) => !be)
    }
    return v.jsxs(v.Fragment, {
        children: [
            k && v.jsx(rd, {}),
            !k &&
                v.jsxs(v.Fragment, {
                    children: [
                        v.jsx("div", {
                            className: "image",
                            children: v.jsx("img", {
                                className: "image__content",
                                src: Wf,
                                alt: "",
                            }),
                        }),
                        v.jsxs("div", {
                            className: "content",
                            children: [
                                v.jsx("div", {
                                    className: "content__leftPanel",
                                    children: v.jsx(Gf, {
                                        onClick: (D) => V(D),
                                        ticketsData: h,
                                    }),
                                }),
                                v.jsxs("div", {
                                    className: "content__rightPanel",
                                    children: [
                                        v.jsx(Qf, { onClick: (D) => T(D) }),
                                        Le.map((D) =>
                                            v.jsx(
                                                Kf,
                                                {
                                                    ticketData: D,
                                                    onClick: () => q(D),
                                                },
                                                D.id
                                            )
                                        ),
                                    ],
                                }),
                            ],
                        }),
                        $ &&
                            v.jsx(id, {
                                isOpenModal: pe,
                                onCloseModal: () => fe(!1),
                                selectTicketCard: $,
                                onOpenBookModal: (D) => {
                                    fe(!1), Z(!0)
                                },
                            }),
                        J &&
                            v.jsx(od, {
                                isOpenModal: J,
                                onCloseModal: () => Z(!1),
                            }),
                    ],
                }),
        ],
    })
}
Hf.createRoot(document.getElementById("root")).render(
    v.jsx(ke.StrictMode, { children: v.jsx(ud, {}) })
)
