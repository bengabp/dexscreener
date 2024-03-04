import {
    bP as ge,
    Q as nt,
    R as ye,
    T as Ir,
    U as Dr,
    aT as Oe,
    W as at,
    a9 as ot,
    n as M,
    p as n,
    X as pe,
    dI as ct,
    c9 as lt,
    dJ as dt,
    aN as C,
    cD as be,
    bO as ut,
    dK as Cr,
    a0 as Xe,
    q as oe,
    br as Je,
    ac as Be,
    b1 as Ee,
    V as Ue,
    Z as B,
    I as Y,
    dL as Ze,
    x as _e,
    cP as ft,
    J as gt,
    ab as er,
    B as xe,
    an as A,
    v as ht,
    cm as yt,
    am as rr,
    dM as hr,
    a2 as yr,
    H as qe,
    dN as pt,
    dp as mt,
    dg as vt,
    dk as xt,
    dO as Ie,
    dn as bt,
    af as jt,
    ag as St,
    ah as _t,
    ai as wt,
    aj as kt,
    ak as At,
    al as Ft,
    Y as pr,
    aE as mr,
    dP as It,
    dQ as Dt,
    bC as vr,
    ad as Ct,
    cS as Et,
    dR as Ut
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    c as xr,
    a as X,
    W as je,
    B as Vt,
    E as Pt
} from "./embed-feature-disabled-modal-CFsC1n7P.js";
import {
    S as Nt
} from "./span-tpC7Sv0b.js";
import {
    i as Tt
} from "./util-mk6Cl76j.js";
const Rt = ({
        priceUsd: e,
        price: t
    }) => e && new ge(e.replace(/,/g, "")).dividedBy(t.replace(/,/g, "")).toFixed(),
    Ot = ({
        price: e
    }) => new ge(1).dividedBy(e.replace(/,/g, "")).toFixed();
var [Bt, Mt] = nt({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
}), fe = ye(function(t, r) {
    const i = Ir("Input", t),
        {
            children: a,
            className: o,
            ...f
        } = Dr(t),
        u = Oe("chakra-input__group", o),
        x = {},
        S = at(a),
        g = i.field;
    S.forEach(m => {
        var I, w;
        i && (g && m.type.id === "InputLeftElement" && (x.paddingStart = (I = g.height) != null ? I : g.h), g && m.type.id === "InputRightElement" && (x.paddingEnd = (w = g.height) != null ? w : g.h), m.type.id === "InputRightAddon" && (x.borderEndRadius = 0), m.type.id === "InputLeftAddon" && (x.borderStartRadius = 0))
    });
    const b = S.map(m => {
        var I, w;
        const N = ot({
            size: ((I = m.props) == null ? void 0 : I.size) || t.size,
            variant: ((w = m.props) == null ? void 0 : w.variant) || t.variant
        });
        return m.type.id !== "Input" ? M.cloneElement(m, N) : M.cloneElement(m, Object.assign(N, x, m.props))
    });
    return n.jsx(pe.div, {
        className: u,
        ref: r,
        __css: {
            width: "100%",
            display: "flex",
            position: "relative",
            isolation: "isolate",
            ...i.group
        },
        "data-group": !0,
        ...f,
        children: n.jsx(Bt, {
            value: i,
            children: b
        })
    })
});
fe.displayName = "InputGroup";
var Lt = {
        left: {
            marginEnd: "-1px",
            borderEndRadius: 0,
            borderEndColor: "transparent"
        },
        right: {
            marginStart: "-1px",
            borderStartRadius: 0,
            borderStartColor: "transparent"
        }
    },
    Wt = pe("div", {
        baseStyle: {
            flex: "0 0 auto",
            width: "auto",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
        }
    }),
    tr = ye(function(t, r) {
        var i;
        const {
            placement: a = "left",
            ...o
        } = t, f = (i = Lt[a]) != null ? i : {}, u = Mt();
        return n.jsx(Wt, {
            ref: r,
            ...o,
            __css: { ...u.addon,
                ...f
            }
        })
    });
tr.displayName = "InputAddon";
var he = ye(function(t, r) {
    return n.jsx(tr, {
        ref: r,
        placement: "left",
        ...t,
        className: Oe("chakra-input__left-addon", t.className)
    })
});
he.displayName = "InputLeftAddon";
he.id = "InputLeftAddon";
var sr = ye(function(t, r) {
    return n.jsx(tr, {
        ref: r,
        placement: "right",
        ...t,
        className: Oe("chakra-input__right-addon", t.className)
    })
});
sr.displayName = "InputRightAddon";
sr.id = "InputRightAddon";
var Er = e => n.jsx(pe.div, {
    className: "chakra-stack__divider",
    ...e,
    __css: { ...e.__css,
        borderWidth: 0,
        alignSelf: "stretch",
        borderColor: "inherit",
        width: "auto",
        height: "auto"
    }
});
Er.displayName = "StackDivider";
var Ur = ye(function(t, r) {
    const {
        children: i,
        placeholder: a,
        className: o,
        ...f
    } = t;
    return n.jsxs(pe.select, { ...f,
        ref: r,
        className: Oe("chakra-select", o),
        children: [a && n.jsx("option", {
            value: "",
            children: a
        }), i]
    })
});
Ur.displayName = "SelectField";

function qt(e, t) {
    const r = {},
        i = {};
    for (const [a, o] of Object.entries(e)) t.includes(a) ? r[a] = o : i[a] = o;
    return [r, i]
}
var ae = ye((e, t) => {
    var r;
    const i = Ir("Select", e),
        {
            rootProps: a,
            placeholder: o,
            icon: f,
            color: u,
            height: x,
            h: S,
            minH: g,
            minHeight: b,
            iconColor: m,
            iconSize: I,
            ...w
        } = Dr(e),
        [N, H] = qt(w, dt),
        j = ct(H),
        F = {
            width: "100%",
            height: "fit-content",
            position: "relative",
            color: u
        },
        T = {
            paddingEnd: "2rem",
            ...i.field,
            _focus: {
                zIndex: "unset",
                ...(r = i.field) == null ? void 0 : r._focus
            }
        };
    return n.jsxs(pe.div, {
        className: "chakra-select__wrapper",
        __css: F,
        ...N,
        ...a,
        children: [n.jsx(Ur, {
            ref: t,
            height: S ? ? x,
            minH: g ? ? b,
            placeholder: o,
            ...j,
            __css: T,
            children: e.children
        }), n.jsx(Vr, {
            "data-disabled": lt(j.disabled),
            ...(m || u) && {
                color: m || u
            },
            __css: i.icon,
            ...I && {
                fontSize: I
            },
            children: f
        })]
    })
});
ae.displayName = "Select";
var zt = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        })
    }),
    $t = pe("div", {
        baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)"
        }
    }),
    Vr = e => {
        const {
            children: t = n.jsx(zt, {}),
            ...r
        } = e, i = M.cloneElement(t, {
            role: "presentation",
            className: "chakra-select__icon",
            focusable: !1,
            "aria-hidden": !0,
            style: {
                width: "1em",
                height: "1em",
                color: "currentColor"
            }
        });
        return n.jsx($t, { ...r,
            className: "chakra-select__icon-wrapper",
            children: M.isValidElement(t) ? i : null
        })
    };
Vr.displayName = "SelectIcon";
var we = e => e.type === "checkbox",
    de = e => e instanceof Date,
    $ = e => e == null;
const Pr = e => typeof e == "object";
var R = e => !$(e) && !Array.isArray(e) && Pr(e) && !de(e),
    Nr = e => R(e) && e.target ? we(e.target) ? e.target.checked : e.target.value : e,
    Ht = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    Tr = (e, t) => e.has(Ht(t)),
    ke = e => Array.isArray(e) ? e.filter(Boolean) : [],
    V = e => e === void 0,
    h = (e, t, r) => {
        if (!t || !R(e)) return r;
        const i = ke(t.split(/[,[\].]+?/)).reduce((a, o) => $(a) ? a : a[o], e);
        return V(i) || i === e ? V(e[t]) ? r : e[t] : i
    };
const Ve = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    ee = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    se = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    Kt = C.createContext(null),
    ir = () => C.useContext(Kt);
var Rr = (e, t, r, i = !0) => {
        const a = {
            defaultValues: t._defaultValues
        };
        for (const o in e) Object.defineProperty(a, o, {
            get: () => {
                const f = o;
                return t._proxyFormState[f] !== ee.all && (t._proxyFormState[f] = !i || ee.all), r && (r[f] = !0), e[f]
            }
        });
        return a
    },
    Z = e => R(e) && !Object.keys(e).length,
    Or = (e, t, r) => {
        const {
            name: i,
            ...a
        } = e;
        return Z(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find(o => t[o] === (!r || ee.all))
    },
    De = e => Array.isArray(e) ? e : [e],
    Br = (e, t, r) => r && t ? e === t : !e || !t || e === t || De(e).some(i => i && (i.startsWith(t) || t.startsWith(i)));

function nr(e) {
    const t = C.useRef(e);
    t.current = e, C.useEffect(() => {
        const r = !e.disabled && t.current.subject.subscribe({
            next: t.current.callback
        });
        return () => {
            r && r.unsubscribe()
        }
    }, [e.disabled])
}

function Gt(e) {
    const t = ir(),
        {
            control: r = t.control,
            disabled: i,
            name: a,
            exact: o
        } = e || {},
        [f, u] = C.useState(r._formState),
        x = C.useRef(!0),
        S = C.useRef({
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        }),
        g = C.useRef(a);
    return g.current = a, nr({
        disabled: i,
        callback: C.useCallback(b => x.current && Br(g.current, b.name, o) && Or(b, S.current) && u({ ...r._formState,
            ...b
        }), [r, o]),
        subject: r._subjects.state
    }), C.useEffect(() => (x.current = !0, () => {
        x.current = !1
    }), []), Rr(f, r, S.current, !1)
}
var re = e => typeof e == "string",
    Mr = (e, t, r, i) => {
        const a = Array.isArray(e);
        return re(e) ? (i && t.watch.add(e), h(r, e)) : a ? e.map(o => (i && t.watch.add(o), h(r, o))) : (i && (t.watchAll = !0), r)
    },
    Pe = e => typeof e == "function",
    ar = e => {
        for (const t in e)
            if (Pe(e[t])) return !0;
        return !1
    };

function Qt(e) {
    const t = ir(),
        {
            control: r = t.control,
            name: i,
            defaultValue: a,
            disabled: o,
            exact: f
        } = e || {},
        u = C.useRef(i);
    u.current = i, nr({
        disabled: o,
        subject: r._subjects.watch,
        callback: C.useCallback(g => {
            if (Br(u.current, g.name, f)) {
                const b = Mr(u.current, r._names, g.values || r._formValues);
                S(V(u.current) || R(b) && !ar(b) ? { ...b
                } : Array.isArray(b) ? [...b] : V(b) ? a : b)
            }
        }, [r, f, a])
    });
    const [x, S] = C.useState(V(a) ? r._getWatch(i) : a);
    return C.useEffect(() => r._removeUnmounted()), x
}

function Yt(e) {
    const t = ir(),
        {
            name: r,
            control: i = t.control,
            shouldUnregister: a
        } = e,
        o = Tr(i._names.array, r),
        f = Qt({
            control: i,
            name: r,
            defaultValue: h(i._formValues, r, h(i._defaultValues, r, e.defaultValue)),
            exact: !0
        }),
        u = Gt({
            control: i,
            name: r
        }),
        x = C.useRef(i.register(r, { ...e.rules,
            value: f
        })),
        S = h(i._fields, r);
    return S && (S._f._c = !0), C.useEffect(() => {
        const g = (b, m) => {
            const I = h(i._fields, b);
            I && (I._f.mount = m)
        };
        return g(r, !0), () => {
            const b = i._options.shouldUnregister || a;
            (o ? b && !i._stateFlags.action : b) ? i.unregister(r): g(r, !1)
        }
    }, [r, i, o, a]), {
        field: {
            name: r,
            value: f,
            onChange: C.useCallback(g => x.current.onChange({
                target: {
                    value: Nr(g),
                    name: r
                },
                type: Ve.CHANGE
            }), [r]),
            onBlur: C.useCallback(() => x.current.onBlur({
                target: {
                    value: h(i._formValues, r),
                    name: r
                },
                type: Ve.BLUR
            }), [r, i]),
            ref: g => {
                S && g && (S._f.ref = g)
            }
        },
        formState: u,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!h(u.errors, r)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!h(u.dirtyFields, r)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!h(u.touchedFields, r)
            },
            error: {
                enumerable: !0,
                get: () => h(u.errors, r)
            }
        })
    }
}
const _s = e => e.render(Yt(e));
var Xt = (e, t, r, i, a) => t ? { ...r[e],
        types: { ...r[e] && r[e].types ? r[e].types : {},
            [i]: a || !0
        }
    } : {},
    or = e => /^\w*$/.test(e),
    Lr = e => ke(e.replace(/["|']|\]/g, "").split(/\.|\[/));

function D(e, t, r) {
    let i = -1;
    const a = or(t) ? [t] : Lr(t),
        o = a.length,
        f = o - 1;
    for (; ++i < o;) {
        const u = a[i];
        let x = r;
        if (i !== f) {
            const S = e[u];
            x = R(S) || Array.isArray(S) ? S : isNaN(+a[i + 1]) ? {} : []
        }
        e[u] = x, e = e[u]
    }
    return e
}
const Ge = (e, t, r) => {
    for (const i of r || Object.keys(e)) {
        const a = h(e, i);
        if (a) {
            const {
                _f: o,
                ...f
            } = a;
            if (o && t(o.name)) {
                if (o.ref.focus) {
                    o.ref.focus();
                    break
                } else if (o.refs && o.refs[0].focus) {
                    o.refs[0].focus();
                    break
                }
            } else R(f) && Ge(f, t)
        }
    }
};
var br = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(i => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length)))),
    Jt = (e, t, r) => {
        const i = ke(h(e, r));
        return D(i, "root", t[r]), D(e, r, i), e
    },
    Se = e => typeof e == "boolean",
    cr = e => e.type === "file",
    Ce = e => re(e) || C.isValidElement(e),
    lr = e => e.type === "radio",
    Ne = e => e instanceof RegExp;
const jr = {
        value: !1,
        isValid: !1
    },
    Sr = {
        value: !0,
        isValid: !0
    };
var Wr = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const t = e.filter(r => r && r.checked && !r.disabled).map(r => r.value);
            return {
                value: t,
                isValid: !!t.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !V(e[0].attributes.value) ? V(e[0].value) || e[0].value === "" ? Sr : {
            value: e[0].value,
            isValid: !0
        } : Sr : jr
    }
    return jr
};
const _r = {
    isValid: !1,
    value: null
};
var qr = e => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
} : t, _r) : _r;

function wr(e, t, r = "validate") {
    if (Ce(e) || Array.isArray(e) && e.every(Ce) || Se(e) && !e) return {
        type: r,
        message: Ce(e) ? e : "",
        ref: t
    }
}
var le = e => R(e) && !Ne(e) ? e : {
        value: e,
        message: ""
    },
    kr = async (e, t, r, i, a) => {
        const {
            ref: o,
            refs: f,
            required: u,
            maxLength: x,
            minLength: S,
            min: g,
            max: b,
            pattern: m,
            validate: I,
            name: w,
            valueAsNumber: N,
            mount: H,
            disabled: j
        } = e._f;
        if (!H || j) return {};
        const F = f ? f[0] : o,
            T = _ => {
                i && re(_) && (F.setCustomValidity(_), F.reportValidity())
            },
            E = {},
            te = lr(o),
            Q = we(o),
            L = te || Q,
            J = (N || cr(o)) && !o.value || t === "" || Array.isArray(t) && !t.length,
            W = Xt.bind(null, w, r, E),
            ie = (_, k, U, O = se.maxLength, K = se.minLength) => {
                const G = _ ? k : U;
                E[w] = {
                    type: _ ? O : K,
                    message: G,
                    ref: o,
                    ...W(_ ? O : K, G)
                }
            };
        if (a ? !Array.isArray(t) || !t.length : u && (!L && (J || $(t)) || Se(t) && !t || Q && !Wr(f).isValid || te && !qr(f).isValid)) {
            const {
                value: _,
                message: k
            } = Ce(u) ? {
                value: !!u,
                message: u
            } : le(u);
            if (_ && (E[w] = {
                    type: se.required,
                    message: k,
                    ref: F,
                    ...W(se.required, k)
                }, !r)) return T(k), E
        }
        if (!J && (!$(g) || !$(b))) {
            let _, k;
            const U = le(b),
                O = le(g);
            if (!$(t) && !isNaN(t)) {
                const K = o.valueAsNumber || t && +t;
                $(U.value) || (_ = K > U.value), $(O.value) || (k = K < O.value)
            } else {
                const K = o.valueAsDate || new Date(t),
                    G = Ae => new Date(new Date().toDateString() + " " + Ae),
                    me = o.type == "time",
                    ce = o.type == "week";
                re(U.value) && t && (_ = me ? G(t) > G(U.value) : ce ? t > U.value : K > new Date(U.value)), re(O.value) && t && (k = me ? G(t) < G(O.value) : ce ? t < O.value : K < new Date(O.value))
            }
            if ((_ || k) && (ie(!!_, U.message, O.message, se.max, se.min), !r)) return T(E[w].message), E
        }
        if ((x || S) && !J && (re(t) || a && Array.isArray(t))) {
            const _ = le(x),
                k = le(S),
                U = !$(_.value) && t.length > _.value,
                O = !$(k.value) && t.length < k.value;
            if ((U || O) && (ie(U, _.message, k.message), !r)) return T(E[w].message), E
        }
        if (m && !J && re(t)) {
            const {
                value: _,
                message: k
            } = le(m);
            if (Ne(_) && !t.match(_) && (E[w] = {
                    type: se.pattern,
                    message: k,
                    ref: o,
                    ...W(se.pattern, k)
                }, !r)) return T(k), E
        }
        if (I) {
            if (Pe(I)) {
                const _ = await I(t),
                    k = wr(_, F);
                if (k && (E[w] = { ...k,
                        ...W(se.validate, k.message)
                    }, !r)) return T(k.message), E
            } else if (R(I)) {
                let _ = {};
                for (const k in I) {
                    if (!Z(_) && !r) break;
                    const U = wr(await I[k](t), F, k);
                    U && (_ = { ...U,
                        ...W(k, U.message)
                    }, T(U.message), r && (E[w] = _))
                }
                if (!Z(_) && (E[w] = {
                        ref: F,
                        ..._
                    }, !r)) return E
            }
        }
        return T(!0), E
    },
    Zt = e => {
        const t = e.constructor && e.constructor.prototype;
        return R(t) && t.hasOwnProperty("isPrototypeOf")
    },
    Qe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function ne(e) {
    let t;
    const r = Array.isArray(e);
    if (e instanceof Date) t = new Date(e);
    else if (e instanceof Set) t = new Set(e);
    else if (!(Qe && (e instanceof Blob || e instanceof FileList)) && (r || R(e)))
        if (t = r ? [] : {}, !Array.isArray(e) && !Zt(e)) t = e;
        else
            for (const i in e) t[i] = ne(e[i]);
    else return e;
    return t
}
var Ar = e => ({
    isOnSubmit: !e || e === ee.onSubmit,
    isOnBlur: e === ee.onBlur,
    isOnChange: e === ee.onChange,
    isOnAll: e === ee.all,
    isOnTouch: e === ee.onTouched
});

function es(e, t) {
    const r = t.slice(0, -1).length;
    let i = 0;
    for (; i < r;) e = V(e) ? i++ : e[t[i++]];
    return e
}

function rs(e) {
    for (const t in e)
        if (!V(e[t])) return !1;
    return !0
}

function z(e, t) {
    const r = or(t) ? [t] : Lr(t),
        i = r.length == 1 ? e : es(e, r),
        a = r[r.length - 1];
    let o;
    i && delete i[a];
    for (let f = 0; f < r.slice(0, -1).length; f++) {
        let u = -1,
            x;
        const S = r.slice(0, -(f + 1)),
            g = S.length - 1;
        for (f > 0 && (o = e); ++u < S.length;) {
            const b = S[u];
            x = x ? x[b] : e[b], g === u && (R(x) && Z(x) || Array.isArray(x) && rs(x)) && (o ? delete o[b] : delete e[b]), o = x
        }
    }
    return e
}

function ze() {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: a => {
            for (const o of e) o.next(a)
        },
        subscribe: a => (e.push(a), {
            unsubscribe: () => {
                e = e.filter(o => o !== a)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
var Te = e => $(e) || !Pr(e);

function ue(e, t) {
    if (Te(e) || Te(t)) return e === t;
    if (de(e) && de(t)) return e.getTime() === t.getTime();
    const r = Object.keys(e),
        i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (const a of r) {
        const o = e[a];
        if (!i.includes(a)) return !1;
        if (a !== "ref") {
            const f = t[a];
            if (de(o) && de(f) || R(o) && R(f) || Array.isArray(o) && Array.isArray(f) ? !ue(o, f) : o !== f) return !1
        }
    }
    return !0
}
var Ye = e => {
        const t = e ? e.ownerDocument : 0,
            r = t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement;
        return e instanceof r
    },
    zr = e => e.type === "select-multiple",
    ts = e => lr(e) || we(e),
    $e = e => Ye(e) && e.isConnected;

function Re(e, t = {}) {
    const r = Array.isArray(e);
    if (R(e) || r)
        for (const i in e) Array.isArray(e[i]) || R(e[i]) && !ar(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {}, Re(e[i], t[i])) : $(e[i]) || (t[i] = !0);
    return t
}

function $r(e, t, r) {
    const i = Array.isArray(e);
    if (R(e) || i)
        for (const a in e) Array.isArray(e[a]) || R(e[a]) && !ar(e[a]) ? V(t) || Te(r[a]) ? r[a] = Array.isArray(e[a]) ? Re(e[a], []) : { ...Re(e[a])
        } : $r(e[a], $(t) ? {} : t[a], r[a]) : ue(e[a], t[a]) ? delete r[a] : r[a] = !0;
    return r
}
var He = (e, t) => $r(e, t, Re(t)),
    Hr = (e, {
        valueAsNumber: t,
        valueAsDate: r,
        setValueAs: i
    }) => V(e) ? e : t ? e === "" ? NaN : e && +e : r && re(e) ? new Date(e) : i ? i(e) : e;

function Ke(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every(r => r.disabled) : t.disabled)) return cr(t) ? t.files : lr(t) ? qr(e.refs).value : zr(t) ? [...t.selectedOptions].map(({
        value: r
    }) => r) : we(t) ? Wr(e.refs).value : Hr(V(t.value) ? e.ref.value : t.value, e)
}
var ss = (e, t, r, i) => {
        const a = {};
        for (const o of e) {
            const f = h(t, o);
            f && D(a, o, f._f)
        }
        return {
            criteriaMode: r,
            names: [...e],
            fields: a,
            shouldUseNativeValidation: i
        }
    },
    ve = e => V(e) ? void 0 : Ne(e) ? e.source : R(e) ? Ne(e.value) ? e.value.source : e.value : e,
    is = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function Fr(e, t, r) {
    const i = h(e, r);
    if (i || or(r)) return {
        error: i,
        name: r
    };
    const a = r.split(".");
    for (; a.length;) {
        const o = a.join("."),
            f = h(t, o),
            u = h(e, o);
        if (f && !Array.isArray(f) && r !== o) return {
            name: r
        };
        if (u && u.type) return {
            name: o,
            error: u
        };
        a.pop()
    }
    return {
        name: r
    }
}
var ns = (e, t, r, i, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(t || e) : (r ? i.isOnBlur : a.isOnBlur) ? !e : (r ? i.isOnChange : a.isOnChange) ? e : !0,
    as = (e, t) => !ke(h(e, t)).length && z(e, t);
const os = {
    mode: ee.onSubmit,
    reValidateMode: ee.onChange,
    shouldFocusError: !0
};

function cs(e = {}) {
    let t = { ...os,
            ...e
        },
        r = {
            submitCount: 0,
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {}
        },
        i = {},
        a = ne(t.defaultValues) || {},
        o = t.shouldUnregister ? {} : ne(a),
        f = {
            action: !1,
            mount: !1,
            watch: !1
        },
        u = {
            mount: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        x, S = 0,
        g = {};
    const b = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        m = {
            watch: ze(),
            array: ze(),
            state: ze()
        },
        I = Ar(t.mode),
        w = Ar(t.reValidateMode),
        N = t.criteriaMode === ee.all,
        H = s => c => {
            clearTimeout(S), S = window.setTimeout(s, c)
        },
        j = async () => {
            let s = !1;
            return b.isValid && (s = t.resolver ? Z((await L()).errors) : await W(i, !0), s !== r.isValid && (r.isValid = s, m.state.next({
                isValid: s
            }))), s
        },
        F = (s, c = [], l, y, p = !0, d = !0) => {
            if (y && l) {
                if (f.action = !0, d && Array.isArray(h(i, s))) {
                    const v = l(h(i, s), y.argA, y.argB);
                    p && D(i, s, v)
                }
                if (b.errors && d && Array.isArray(h(r.errors, s))) {
                    const v = l(h(r.errors, s), y.argA, y.argB);
                    p && D(r.errors, s, v), as(r.errors, s)
                }
                if (b.touchedFields && d && Array.isArray(h(r.touchedFields, s))) {
                    const v = l(h(r.touchedFields, s), y.argA, y.argB);
                    p && D(r.touchedFields, s, v)
                }
                b.dirtyFields && (r.dirtyFields = He(a, o)), m.state.next({
                    isDirty: _(s, c),
                    dirtyFields: r.dirtyFields,
                    errors: r.errors,
                    isValid: r.isValid
                })
            } else D(o, s, c)
        },
        T = (s, c) => {
            D(r.errors, s, c), m.state.next({
                errors: r.errors
            })
        },
        E = (s, c, l, y) => {
            const p = h(i, s);
            if (p) {
                const d = h(o, s, V(l) ? h(a, s) : l);
                V(d) || y && y.defaultChecked || c ? D(o, s, c ? d : Ke(p._f)) : O(s, d), f.mount && j()
            }
        },
        te = (s, c, l, y, p) => {
            let d = !1;
            const v = {
                    name: s
                },
                P = h(r.touchedFields, s);
            if (b.isDirty) {
                const q = r.isDirty;
                r.isDirty = v.isDirty = _(), d = q !== v.isDirty
            }
            if (b.dirtyFields && (!l || y)) {
                const q = h(r.dirtyFields, s);
                ue(h(a, s), c) ? z(r.dirtyFields, s) : D(r.dirtyFields, s, !0), v.dirtyFields = r.dirtyFields, d = d || q !== h(r.dirtyFields, s)
            }
            return l && !P && (D(r.touchedFields, s, l), v.touchedFields = r.touchedFields, d = d || b.touchedFields && P !== l), d && p && m.state.next(v), d ? v : {}
        },
        Q = (s, c, l, y) => {
            const p = h(r.errors, s),
                d = b.isValid && Se(c) && r.isValid !== c;
            if (e.delayError && l ? (x = H(() => T(s, l)), x(e.delayError)) : (clearTimeout(S), x = null, l ? D(r.errors, s, l) : z(r.errors, s)), (l ? !ue(p, l) : p) || !Z(y) || d) {
                const v = { ...y,
                    ...d && Se(c) ? {
                        isValid: c
                    } : {},
                    errors: r.errors,
                    name: s
                };
                r = { ...r,
                    ...v
                }, m.state.next(v)
            }
            g[s]--, b.isValidating && !Object.values(g).some(v => v) && (m.state.next({
                isValidating: !1
            }), g = {})
        },
        L = async s => t.resolver ? await t.resolver({ ...o
        }, t.context, ss(s || u.mount, i, t.criteriaMode, t.shouldUseNativeValidation)) : {},
        J = async s => {
            const {
                errors: c
            } = await L();
            if (s)
                for (const l of s) {
                    const y = h(c, l);
                    y ? D(r.errors, l, y) : z(r.errors, l)
                } else r.errors = c;
            return c
        },
        W = async (s, c, l = {
            valid: !0
        }) => {
            for (const y in s) {
                const p = s[y];
                if (p) {
                    const {
                        _f: d,
                        ...v
                    } = p;
                    if (d) {
                        const P = u.array.has(d.name),
                            q = await kr(p, h(o, d.name), N, t.shouldUseNativeValidation, P);
                        if (q[d.name] && (l.valid = !1, c)) break;
                        !c && (h(q, d.name) ? P ? Jt(r.errors, q, d.name) : D(r.errors, d.name, q[d.name]) : z(r.errors, d.name))
                    }
                    v && await W(v, c, l)
                }
            }
            return l.valid
        },
        ie = () => {
            for (const s of u.unMount) {
                const c = h(i, s);
                c && (c._f.refs ? c._f.refs.every(l => !$e(l)) : !$e(c._f.ref)) && Me(s)
            }
            u.unMount = new Set
        },
        _ = (s, c) => (s && c && D(o, s, c), !ue(Ae(), a)),
        k = (s, c, l) => {
            const y = { ...f.mount ? o : V(c) ? a : re(s) ? {
                    [s]: c
                } : c
            };
            return Mr(s, u, y, l)
        },
        U = s => ke(h(f.mount ? o : a, s, e.shouldUnregister ? h(a, s, []) : [])),
        O = (s, c, l = {}) => {
            const y = h(i, s);
            let p = c;
            if (y) {
                const d = y._f;
                d && (!d.disabled && D(o, s, Hr(c, d)), p = Qe && Ye(d.ref) && $(c) ? "" : c, zr(d.ref) ? [...d.ref.options].forEach(v => v.selected = p.includes(v.value)) : d.refs ? we(d.ref) ? d.refs.length > 1 ? d.refs.forEach(v => (!v.defaultChecked || !v.disabled) && (v.checked = Array.isArray(p) ? !!p.find(P => P === v.value) : p === v.value)) : d.refs[0] && (d.refs[0].checked = !!p) : d.refs.forEach(v => v.checked = v.value === p) : cr(d.ref) ? d.ref.value = "" : (d.ref.value = p, d._c && m.watch.next({
                    name: s
                })))
            }(l.shouldDirty || l.shouldTouch) && te(s, p, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && ce(s)
        },
        K = (s, c, l) => {
            for (const y in c) {
                const p = c[y],
                    d = `${s}.${y}`,
                    v = h(i, d);
                (u.array.has(s) || !Te(p) || v && !v._f) && !de(p) ? K(d, p, l) : O(d, p, l)
            }
        },
        G = (s, c, l = {}) => {
            const y = h(i, s),
                p = u.array.has(s),
                d = ne(c);
            D(o, s, d), p ? (m.array.next({
                name: s,
                values: o
            }), (b.isDirty || b.dirtyFields) && l.shouldDirty && (r.dirtyFields = He(a, o), m.state.next({
                name: s,
                dirtyFields: r.dirtyFields,
                isDirty: _(s, d)
            }))) : y && !y._f && !$(d) ? K(s, d, l) : O(s, d, l), br(s, u) && m.state.next({}), m.watch.next({
                name: s
            })
        },
        me = async s => {
            const c = s.target;
            let l = c.name;
            const y = h(i, l);
            if (y) {
                let p, d;
                const v = c.type ? Ke(y._f) : Nr(s),
                    P = s.type === Ve.BLUR || s.type === Ve.FOCUS_OUT,
                    q = !is(y._f) && !t.resolver && !h(r.errors, l) && !y._f.deps || ns(P, h(r.touchedFields, l), r.isSubmitted, w, I),
                    Fe = br(l, u, P);
                D(o, l, v), P ? (y._f.onBlur && y._f.onBlur(s), x && x(0)) : y._f.onChange && y._f.onChange(s);
                const We = te(l, v, P, !1),
                    st = !Z(We) || Fe;
                if (!P && m.watch.next({
                        name: l,
                        type: s.type
                    }), q) return b.isValid && j(), st && m.state.next({
                    name: l,
                    ...Fe ? {} : We
                });
                if (!P && Fe && m.state.next({}), g[l] = g[l] ? g[l] + 1 : 1, m.state.next({
                        isValidating: !0
                    }), t.resolver) {
                    const {
                        errors: fr
                    } = await L([l]), it = Fr(r.errors, i, l), gr = Fr(fr, i, it.name || l);
                    p = gr.error, l = gr.name, d = Z(fr)
                } else p = (await kr(y, h(o, l), N, t.shouldUseNativeValidation))[l], j();
                y._f.deps && ce(y._f.deps), Q(l, d, p, We)
            }
        },
        ce = async (s, c = {}) => {
            let l, y;
            const p = De(s);
            if (m.state.next({
                    isValidating: !0
                }), t.resolver) {
                const d = await J(V(s) ? s : p);
                l = Z(d), y = s ? !p.some(v => h(d, v)) : l
            } else s ? (y = (await Promise.all(p.map(async d => {
                const v = h(i, d);
                return await W(v && v._f ? {
                    [d]: v
                } : v)
            }))).every(Boolean), !(!y && !r.isValid) && j()) : y = l = await W(i);
            return m.state.next({ ...!re(s) || b.isValid && l !== r.isValid ? {} : {
                    name: s
                },
                ...t.resolver || !s ? {
                    isValid: l
                } : {},
                errors: r.errors,
                isValidating: !1
            }), c.shouldFocus && !y && Ge(i, d => d && h(r.errors, d), s ? p : u.mount), y
        },
        Ae = s => {
            const c = { ...a,
                ...f.mount ? o : {}
            };
            return V(s) ? c : re(s) ? h(c, s) : s.map(l => h(c, l))
        },
        dr = (s, c) => ({
            invalid: !!h((c || r).errors, s),
            isDirty: !!h((c || r).dirtyFields, s),
            isTouched: !!h((c || r).touchedFields, s),
            error: h((c || r).errors, s)
        }),
        Xr = s => {
            s ? De(s).forEach(c => z(r.errors, c)) : r.errors = {}, m.state.next({
                errors: r.errors
            })
        },
        Jr = (s, c, l) => {
            const y = (h(i, s, {
                _f: {}
            })._f || {}).ref;
            D(r.errors, s, { ...c,
                ref: y
            }), m.state.next({
                name: s,
                errors: r.errors,
                isValid: !1
            }), l && l.shouldFocus && y && y.focus && y.focus()
        },
        Zr = (s, c) => Pe(s) ? m.watch.subscribe({
            next: l => s(k(void 0, c), l)
        }) : k(s, c, !0),
        Me = (s, c = {}) => {
            for (const l of s ? De(s) : u.mount) u.mount.delete(l), u.array.delete(l), h(i, l) && (c.keepValue || (z(i, l), z(o, l)), !c.keepError && z(r.errors, l), !c.keepDirty && z(r.dirtyFields, l), !c.keepTouched && z(r.touchedFields, l), !t.shouldUnregister && !c.keepDefaultValue && z(a, l));
            m.watch.next({}), m.state.next({ ...r,
                ...c.keepDirty ? {
                    isDirty: _()
                } : {}
            }), !c.keepIsValid && j()
        },
        Le = (s, c = {}) => {
            let l = h(i, s);
            const y = Se(c.disabled);
            return D(i, s, { ...l || {},
                _f: { ...l && l._f ? l._f : {
                        ref: {
                            name: s
                        }
                    },
                    name: s,
                    mount: !0,
                    ...c
                }
            }), u.mount.add(s), l ? y && D(o, s, c.disabled ? void 0 : h(o, s, Ke(l._f))) : E(s, !0, c.value), { ...y ? {
                    disabled: c.disabled
                } : {},
                ...t.shouldUseNativeValidation ? {
                    required: !!c.required,
                    min: ve(c.min),
                    max: ve(c.max),
                    minLength: ve(c.minLength),
                    maxLength: ve(c.maxLength),
                    pattern: ve(c.pattern)
                } : {},
                name: s,
                onChange: me,
                onBlur: me,
                ref: p => {
                    if (p) {
                        Le(s, c), l = h(i, s);
                        const d = V(p.value) && p.querySelectorAll && p.querySelectorAll("input,select,textarea")[0] || p,
                            v = ts(d),
                            P = l._f.refs || [];
                        if (v ? P.find(q => q === d) : d === l._f.ref) return;
                        D(i, s, {
                            _f: { ...l._f,
                                ...v ? {
                                    refs: [...P.filter($e), d, ...Array.isArray(h(a, s)) ? [{}] : []],
                                    ref: {
                                        type: d.type,
                                        name: s
                                    }
                                } : {
                                    ref: d
                                }
                            }
                        }), E(s, !1, void 0, d)
                    } else l = h(i, s, {}), l._f && (l._f.mount = !1), (t.shouldUnregister || c.shouldUnregister) && !(Tr(u.array, s) && f.action) && u.unMount.add(s)
                }
            }
        },
        ur = () => t.shouldFocusError && Ge(i, s => s && h(r.errors, s), u.mount),
        et = (s, c) => async l => {
            l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
            let y = !0,
                p = ne(o);
            m.state.next({
                isSubmitting: !0
            });
            try {
                if (t.resolver) {
                    const {
                        errors: d,
                        values: v
                    } = await L();
                    r.errors = d, p = v
                } else await W(i);
                Z(r.errors) ? (m.state.next({
                    errors: {},
                    isSubmitting: !0
                }), await s(p, l)) : (c && await c({ ...r.errors
                }, l), ur())
            } catch (d) {
                throw y = !1, d
            } finally {
                r.isSubmitted = !0, m.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: Z(r.errors) && y,
                    submitCount: r.submitCount + 1,
                    errors: r.errors
                })
            }
        },
        rt = (s, c = {}) => {
            h(i, s) && (V(c.defaultValue) ? G(s, h(a, s)) : (G(s, c.defaultValue), D(a, s, c.defaultValue)), c.keepTouched || z(r.touchedFields, s), c.keepDirty || (z(r.dirtyFields, s), r.isDirty = c.defaultValue ? _(s, h(a, s)) : _()), c.keepError || (z(r.errors, s), b.isValid && j()), m.state.next({ ...r
            }))
        },
        tt = (s, c = {}) => {
            const l = s || a,
                y = ne(l),
                p = s && !Z(s) ? y : a;
            if (c.keepDefaultValues || (a = l), !c.keepValues) {
                if (c.keepDirtyValues)
                    for (const d of u.mount) h(r.dirtyFields, d) ? D(p, d, h(o, d)) : G(d, h(p, d));
                else {
                    if (Qe && V(s))
                        for (const d of u.mount) {
                            const v = h(i, d);
                            if (v && v._f) {
                                const P = Array.isArray(v._f.refs) ? v._f.refs[0] : v._f.ref;
                                if (Ye(P)) {
                                    const q = P.closest("form");
                                    if (q) {
                                        q.reset();
                                        break
                                    }
                                }
                            }
                        }
                    i = {}
                }
                o = e.shouldUnregister ? c.keepDefaultValues ? ne(a) : {} : y, m.array.next({
                    values: p
                }), m.watch.next({
                    values: p
                })
            }
            u = {
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, f.mount = !b.isValid || !!c.keepIsValid, f.watch = !!e.shouldUnregister, m.state.next({
                submitCount: c.keepSubmitCount ? r.submitCount : 0,
                isDirty: c.keepDirty || c.keepDirtyValues ? r.isDirty : !!(c.keepDefaultValues && !ue(s, a)),
                isSubmitted: c.keepIsSubmitted ? r.isSubmitted : !1,
                dirtyFields: c.keepDirty || c.keepDirtyValues ? r.dirtyFields : c.keepDefaultValues && s ? He(a, s) : {},
                touchedFields: c.keepTouched ? r.touchedFields : {},
                errors: c.keepErrors ? r.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1
            })
        };
    return {
        control: {
            register: Le,
            unregister: Me,
            getFieldState: dr,
            _executeSchema: L,
            _focusError: ur,
            _getWatch: k,
            _getDirty: _,
            _updateValid: j,
            _removeUnmounted: ie,
            _updateFieldArray: F,
            _getFieldArray: U,
            _subjects: m,
            _proxyFormState: b,
            get _fields() {
                return i
            },
            get _formValues() {
                return o
            },
            get _stateFlags() {
                return f
            },
            set _stateFlags(s) {
                f = s
            },
            get _defaultValues() {
                return a
            },
            get _names() {
                return u
            },
            set _names(s) {
                u = s
            },
            get _formState() {
                return r
            },
            set _formState(s) {
                r = s
            },
            get _options() {
                return t
            },
            set _options(s) {
                t = { ...t,
                    ...s
                }
            }
        },
        trigger: ce,
        register: Le,
        handleSubmit: et,
        watch: Zr,
        setValue: G,
        getValues: Ae,
        reset: (s, c) => tt(Pe(s) ? s(o) : s, c),
        resetField: rt,
        clearErrors: Xr,
        unregister: Me,
        setError: Jr,
        setFocus: (s, c = {}) => {
            const l = h(i, s),
                y = l && l._f;
            if (y) {
                const p = y.refs ? y.refs[0] : y.ref;
                p.focus && (p.focus(), c.shouldSelect && p.select())
            }
        },
        getFieldState: dr
    }
}

function Kr(e = {}) {
    const t = C.useRef(),
        [r, i] = C.useState({
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: e.defaultValues
        });
    t.current || (t.current = { ...cs(e),
        formState: r
    });
    const a = t.current.control;
    return a._options = e, nr({
        subject: a._subjects.state,
        callback: C.useCallback(o => {
            Or(o, a._proxyFormState, !0) && (a._formState = { ...a._formState,
                ...o
            }, i({ ...a._formState
            }))
        }, [a])
    }), C.useEffect(() => {
        a._stateFlags.mount || (a._proxyFormState.isValid && a._updateValid(), a._stateFlags.mount = !0), a._stateFlags.watch && (a._stateFlags.watch = !1, a._subjects.state.next({})), a._removeUnmounted()
    }), C.useEffect(() => {
        r.submitCount && a._focusError()
    }, [a, r.submitCount]), t.current.formState = Rr(r, a), t.current
}
var ls = Tt ? M.useLayoutEffect : M.useEffect;

function ds(e, t) {
    var r = M.useState(t),
        i = r[0],
        a = r[1];
    return ls(function() {
        var o = e.subscribe(a);
        return function() {
            return o.unsubscribe()
        }
    }, [e]), i
}
const Gr = e => {
        const {
            pair: t,
            formValues: r,
            isInverted: i
        } = e;
        switch (r.triggerAndDirection) {
            case "priceUsdValueOver":
                if (r.priceUsd) return {
                    type: i ? "priceUsdInverted" : "priceUsd",
                    subject: t,
                    direction: "over",
                    priceUsd: r.priceUsd.replace(/,/g, "")
                };
                break;
            case "priceUsdValueUnder":
                if (r.priceUsd) return {
                    type: i ? "priceUsdInverted" : "priceUsd",
                    subject: t,
                    direction: "under",
                    priceUsd: r.priceUsd.replace(/,/g, "")
                };
                break;
            case "priceNativeValueOver":
                if (r.priceNative) return {
                    type: i ? "priceNativeInverted" : "priceNative",
                    subject: t,
                    direction: "over",
                    price: r.priceNative.replace(/,/g, "")
                };
                break;
            case "priceNativeValueUnder":
                if (r.priceNative) return {
                    type: i ? "priceNativeInverted" : "priceNative",
                    subject: t,
                    direction: "under",
                    price: r.priceNative.replace(/,/g, "")
                };
                break;
            case "priceUsdPercentageOver":
                if (r.percentage && r.timeframeKey) return {
                    type: "priceUsdPercentage",
                    subject: t,
                    direction: "over",
                    percentage: new ge(r.percentage).decimalPlaces(2).toNumber(),
                    timeframeKey: r.timeframeKey
                };
                break;
            case "priceUsdPercentageUnder":
                if (r.percentage && r.timeframeKey) return {
                    type: "priceUsdPercentage",
                    subject: t,
                    direction: "under",
                    percentage: new ge(r.percentage).decimalPlaces(2).toNumber(),
                    timeframeKey: r.timeframeKey
                };
                break
        }
    },
    us = e => {
        const {
            alert: t,
            dexScreenerPair: r
        } = e, i = () => t.trigger.type === "priceUsdCross" || t.trigger.type === "priceNativeInverted" || t.trigger.type === "priceUsdInvertedCross" || t.trigger.type === "newScreenerPair" || t.trigger.type === "watchlistPriceUsdPercentage" ? t.trigger.type : t.trigger.type === "priceUsd" || t.trigger.type === "priceNative" ? `${t.trigger.type}Value${xr(t.trigger.direction)}` : `${t.trigger.type}${xr(t.trigger.direction)}`, a = t.trigger.type === "priceUsdInverted" || t.trigger.type === "priceNativeInverted", o = t.trigger.type === "priceUsdInverted" || t.trigger.type === "priceUsd" ? t.trigger.priceUsd : r == null ? void 0 : r.priceUsd, f = t.trigger.type === "priceNative" || t.trigger.type === "priceNativeInverted" ? t.trigger.price : r == null ? void 0 : r.price, u = t.trigger.type.indexOf("priceUsd") !== -1 ? "priceUsd" : "priceNative", x = t.trigger.type === "priceUsdPercentage" ? t.trigger.percentage : void 0, S = t.trigger.type === "priceUsdPercentage" ? t.trigger.timeframeKey : void 0;
        return {
            isInverted: a,
            priceUsd: o,
            priceNative: f,
            triggerAndDirection: i(),
            triggerBase: u,
            percentage: x,
            timeframeKey: S
        }
    },
    Qr = ({
        form: e,
        quoteTokenSymbol: t
    }) => {
        switch (e.watch("triggerBase")) {
            case "priceNative":
                return n.jsx(X, {
                    as: "div",
                    flex: 1,
                    children: n.jsxs(fe, {
                        children: [n.jsx(he, {
                            children: t
                        }), n.jsx(be, {
                            isInvalid: !!e.formState.errors.priceNative,
                            ...e.register("priceNative", {
                                validate: r => r ? new ge(r.replace(/,/g, "")).gt(0) : !1
                            })
                        }, "TriggerAndDirectionFormPriceNative")]
                    })
                });
            default:
                switch (e.watch("triggerAndDirection")) {
                    case "priceUsdPercentageOver":
                    case "priceUsdPercentageUnder":
                        return n.jsxs(n.Fragment, {
                            children: [n.jsx(X, {
                                as: "div",
                                flex: 1,
                                children: n.jsxs(fe, {
                                    children: [n.jsx(be, {
                                        placeholder: "0",
                                        type: "number",
                                        step: ".01",
                                        isInvalid: !!e.formState.errors.percentage,
                                        ...e.register("percentage", {
                                            valueAsNumber: !0,
                                            validate: r => !(!r || r < 0 || e.getValues("triggerAndDirection") === "priceUsdPercentageUnder" && r > 99.99)
                                        })
                                    }), n.jsx(sr, {
                                        children: "%"
                                    })]
                                })
                            }), n.jsx(X, {
                                as: "div",
                                children: "within the"
                            }), n.jsx(X, {
                                as: "div",
                                children: n.jsx(ae, { ...e.register("timeframeKey"),
                                    children: ut.map(r => n.jsx("option", {
                                        value: r,
                                        children: Cr[r].label
                                    }, r))
                                })
                            })]
                        });
                    default:
                        return n.jsx(X, {
                            as: "div",
                            flex: 1,
                            children: n.jsxs(fe, {
                                children: [n.jsx(he, {
                                    children: "$"
                                }), n.jsx(be, {
                                    isInvalid: !!e.formState.errors.priceUsd,
                                    ...e.register("priceUsd", {
                                        validate: r => r ? new ge(r.replace(/,/g, "")).gt(0) : !1
                                    })
                                }, "TriggerAndDirectionFormPriceUsd")]
                            })
                        })
                }
        }
    },
    Yr = ({
        form: e,
        isInverted: t
    }) => {
        switch (e.watch("triggerBase")) {
            case "priceUsd":
                return t ? n.jsxs(ae, { ...e.register("triggerAndDirection"),
                    children: [n.jsx("option", {
                        value: "priceUsdValueOver",
                        children: "goes over"
                    }), n.jsx("option", {
                        value: "priceUsdValueUnder",
                        children: "goes under"
                    })]
                }) : n.jsxs(ae, { ...e.register("triggerAndDirection"),
                    children: [n.jsx("option", {
                        value: "priceUsdValueOver",
                        children: "goes over"
                    }), n.jsx("option", {
                        value: "priceUsdValueUnder",
                        children: "goes under"
                    }), n.jsx("option", {
                        value: "priceUsdPercentageOver",
                        children: "goes up more than"
                    }), n.jsx("option", {
                        value: "priceUsdPercentageUnder",
                        children: "goes down more than"
                    })]
                });
            case "priceNative":
                return n.jsxs(ae, { ...e.register("triggerAndDirection"),
                    children: [n.jsx("option", {
                        value: "priceNativeValueOver",
                        children: "goes over"
                    }), n.jsx("option", {
                        value: "priceNativeValueUnder",
                        children: "goes under"
                    })]
                });
            default:
                return null
        }
    },
    fs = ({
        alert: e,
        pair: t,
        onSubmit: r,
        onCancel: i,
        dexScreenerPair: a
    }) => {
        const o = M.useRef(!1),
            f = us({
                alert: e,
                dexScreenerPair: a
            }),
            {
                isInverted: u,
                priceUsd: x,
                priceNative: S,
                triggerBase: g,
                percentage: b,
                timeframeKey: m,
                triggerAndDirection: I
            } = f,
            w = Kr({
                defaultValues: {
                    triggerBase: g,
                    triggerAndDirection: I,
                    priceUsd: x,
                    priceNative: S,
                    percentage: b,
                    note: e.note,
                    timeframeKey: m
                }
            }),
            N = Xe(),
            H = oe.useInjectable(Je),
            [j, F] = M.useState(!1),
            T = oe.useInjectable(Be),
            {
                chainId: E,
                pairId: te,
                dexId: Q,
                quoteTokenSymbol: L,
                baseTokenSymbol: J,
                baseTokenName: W
            } = t,
            ie = w.watch("triggerBase");
        M.useEffect(() => {
            if (o.current) return w.setValue("triggerAndDirection", `${ie}ValueOver`);
            o.current = !0
        }, [w, ie]);
        const _ = w.handleSubmit(async U => {
                if (j) return;
                const K = Gr({
                    pair: {
                        type: "dexPair",
                        chainId: E,
                        dexId: Q,
                        pairId: te,
                        baseTokenName: W,
                        baseTokenSymbol: J,
                        quoteTokenSymbol: L
                    },
                    formValues: U,
                    isInverted: u
                });
                if (!K) {
                    N({
                        status: "error",
                        description: "Invalid price alert"
                    });
                    return
                }
                F(!0);
                try {
                    await T.actions.updateAlert(e.id, {
                        schemaVersion: "1.0.0",
                        trigger: K,
                        channels: [{
                            type: "browser"
                        }],
                        enabled: !0,
                        note: U.note
                    }), H.track({
                        event: "updatePriceAlert",
                        data: {
                            id: e.id
                        }
                    }), N({
                        status: "success",
                        description: "Price alert updated!"
                    }), r()
                } catch (G) {
                    N({
                        status: "error",
                        description: `Failed updating price alert: ${Ee(G).message}`
                    })
                }
                F(!1)
            }),
            k = u ? J : L;
        return n.jsx(n.Fragment, {
            children: n.jsxs(Ue, {
                spacing: 4,
                alignItems: "flex-start",
                as: "form",
                onSubmit: _,
                children: [n.jsxs(je, {
                    style: {
                        height: "inherit"
                    },
                    children: [n.jsx(X, {
                        as: "span",
                        alignItems: "center",
                        children: n.jsx(B, {
                            children: "Alert me when "
                        })
                    }), n.jsx(X, {
                        as: "span",
                        children: n.jsxs(ae, { ...w.register("triggerBase"),
                            children: [n.jsx("option", {
                                value: "priceUsd",
                                children: "price in USD"
                            }), n.jsxs("option", {
                                value: "priceNative",
                                children: ["price in ", k]
                            })]
                        })
                    })]
                }), n.jsxs(je, {
                    align: "center",
                    width: "100%",
                    children: [n.jsx(X, {
                        as: "span",
                        w: "210px",
                        children: n.jsx(Yr, {
                            form: w,
                            isInverted: u
                        })
                    }), k && n.jsx(Qr, {
                        form: w,
                        quoteTokenSymbol: k
                    })]
                }), n.jsxs(fe, {
                    children: [n.jsx(he, {
                        children: n.jsx(Y, {
                            as: Ze
                        })
                    }), n.jsx(be, {
                        isInvalid: !!w.formState.errors.note,
                        ...w.register("note"),
                        placeholder: "Add a note to your alert (optional)"
                    })]
                }), n.jsx(je, {
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    children: n.jsxs(X, {
                        as: "div",
                        children: [n.jsx(_e, {
                            isLoading: j,
                            type: "submit",
                            mr: 2,
                            leftIcon: n.jsx(Y, {
                                as: ft
                            }),
                            colorScheme: "green",
                            children: "Save"
                        }), n.jsx(_e, {
                            onClick: i,
                            leftIcon: n.jsx(Y, {
                                as: gt
                            }),
                            colorScheme: "red",
                            variant: "ghost",
                            children: "Cancel"
                        })]
                    })
                })]
            })
        })
    },
    gs = ({
        priceAlert: e
    }) => {
        var r;
        const {
            colorMode: t
        } = er();
        switch (e.trigger.type) {
            case "priceUsd":
                return n.jsxs(n.Fragment, {
                    children: ["Alert me when price", " ", n.jsxs(B, {
                        as: "span",
                        fontWeight: "semibold",
                        color: e.trigger.direction === "over" ? A("green.500", "green.400", t) : A("red.500", "red.400", t),
                        children: [e.trigger.direction === "over" ? "goes over" : "goes under", " $", Ie(e.trigger.priceUsd)]
                    })]
                });
            case "priceUsdInverted":
                return n.jsxs(n.Fragment, {
                    children: ["Alert me when ", e.trigger.subject.quoteTokenSymbol, " price", " ", n.jsxs(B, {
                        as: "span",
                        fontWeight: "semibold",
                        color: e.trigger.direction === "over" ? A("green.500", "green.400", t) : A("red.500", "red.400", t),
                        children: [e.trigger.direction === "over" ? "goes over" : "goes under", " $", Ie(e.trigger.priceUsd)]
                    })]
                });
            case "priceNative":
            case "priceNativeInverted":
                return n.jsxs(n.Fragment, {
                    children: ["Alert me when ", e.trigger.subject.baseTokenSymbol, " price", " ", n.jsxs(B, {
                        as: "span",
                        fontWeight: "semibold",
                        color: e.trigger.direction === "over" ? A("green.500", "green.400", t) : A("red.500", "red.400", t),
                        children: [e.trigger.direction === "over" ? "goes over" : "goes under", " ", Ie(e.trigger.price), " ", e.trigger.subject.quoteTokenSymbol]
                    })]
                });
            case "priceUsdPercentage":
                return n.jsxs(B, {
                    as: "span",
                    children: ["Alert me when price is", " ", n.jsxs(B, {
                        as: "span",
                        fontWeight: "semibold",
                        color: e.trigger.direction === "over" ? A("green.500", "green.400", t) : A("red.500", "red.400", t),
                        children: [e.trigger.direction === "over" ? "goes up more than" : "goes down more than", " ", Ie(e.trigger.percentage), "%"]
                    }), " ", "within the", " ", n.jsx(xe, {
                        as: "span",
                        fontWeight: "semibold",
                        children: (r = Cr[e.trigger.timeframeKey]) == null ? void 0 : r.label.toLowerCase()
                    })]
                });
            default:
                return null
        }
    },
    hs = ({
        priceAlerts: e,
        containerProps: t,
        showPair: r,
        dexScreenerPair: i,
        onPairClick: a
    }) => {
        const o = oe.useInjectable(Be),
            {
                actions: f
            } = o,
            [u, x] = M.useState(void 0),
            S = Xe(),
            {
                colorMode: g
            } = er(),
            b = j => {
                try {
                    f.resetAlert(j), S({
                        status: "success",
                        description: "Price alert reset"
                    })
                } catch (F) {
                    S({
                        status: "error",
                        description: `Failed resetting price alert: ${Ee(F).message}`
                    })
                }
            },
            m = j => {
                try {
                    f.deleteAlert(j)
                } catch (F) {
                    S({
                        status: "error",
                        description: `Failed deleting price alert: ${Ee(F).message}`
                    })
                }
            },
            I = j => {
                x({
                    type: "edit",
                    id: j.id
                })
            },
            w = () => {
                x(void 0)
            },
            N = () => {
                x(void 0)
            },
            H = () => {
                x(void 0)
            };
        return n.jsx(Ue, {
            spacing: 3,
            alignItems: "stretch",
            ...t,
            children: e.map(j => {
                if (j.trigger.subject.type !== "dexPair") return;
                const F = u && u.type === "edit" && u.id === j.id,
                    T = u && u.type === "delete" && u.id === j.id;
                return n.jsxs(xe, {
                    borderWidth: 1,
                    borderColor: F ? A("gray.100", "gray.800", g) : A("gray.50", "gray.925", g),
                    p: 3,
                    bg: F ? A("gray.0", "blue.950", g) : A("gray.50", "gray.925", g),
                    borderRadius: "md",
                    children: [r && n.jsx(ht, {
                        display: "block",
                        w: "100%",
                        to: yt({
                            platformId: j.trigger.subject.chainId,
                            pairAddress: j.trigger.subject.pairId
                        }),
                        onClick: a ? () => a() : void 0,
                        mb: 3,
                        pb: 2,
                        borderBottomWidth: 1,
                        borderBottomColor: A("gray.100", "gray.800", g),
                        _hover: {
                            textDecoration: "none",
                            borderBottomColor: A("gray.150", "gray.750", g)
                        },
                        children: n.jsxs(B, {
                            as: "span",
                            fontSize: {
                                base: "sm",
                                md: "md"
                            },
                            children: [n.jsx(B, {
                                as: "span",
                                fontWeight: "semibold",
                                children: j.trigger.subject.baseTokenSymbol
                            }), n.jsx(B, {
                                as: "span",
                                mx: "2px",
                                color: A("gray.400", "gray.500", g),
                                children: "/"
                            }), n.jsx(B, {
                                as: "span",
                                color: A("gray.400", "gray.500", g),
                                children: j.trigger.subject.quoteTokenSymbol
                            }), n.jsx(B, {
                                as: "span",
                                display: {
                                    base: "none",
                                    md: "initial"
                                },
                                ml: 3,
                                children: j.trigger.subject.baseTokenName
                            })]
                        })
                    }), n.jsxs(xe, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        ...j.note && {
                            pb: 2
                        },
                        children: [n.jsxs(xe, {
                            width: "100%",
                            children: [n.jsxs(xe, {
                                wordBreak: "break-all",
                                children: [n.jsxs(B, {
                                    as: "span",
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1,
                                    fontWeight: "semibold",
                                    textTransform: "uppercase",
                                    fontSize: "xs",
                                    color: j.enabled ? A("green.500", "green.400", g) : A("red.500", "red.400", g),
                                    children: [n.jsx(Y, {
                                        as: rr,
                                        mr: "3px"
                                    }), j.enabled ? "Active" : "Disabled"]
                                }), F && n.jsx(fs, {
                                    alert: j,
                                    pair: j.trigger.subject,
                                    dexScreenerPair: i,
                                    onSubmit: w,
                                    onCancel: N
                                }), !F && n.jsx(gs, {
                                    priceAlert: j
                                })]
                            }), !F && n.jsxs(B, {
                                as: "span",
                                fontSize: "sm",
                                color: A("gray.400", "gray.600", g),
                                children: ["Created ", hr(j.createdAt), " ago", j.triggeredAt && `, last triggered ${hr(j.triggeredAt)} ago`]
                            })]
                        }), !F && n.jsxs(yr, {
                            children: [!j.enabled && n.jsx(qe, {
                                onClick: () => b(j.id),
                                "aria-label": "Reset alert",
                                title: "Reset alert",
                                icon: n.jsx(Y, {
                                    as: pt
                                }),
                                flexShrink: 0,
                                variant: "unstyled",
                                colorScheme: "red",
                                size: "sm",
                                ml: 3,
                                color: A("gray.500", "gray.600", g),
                                _hover: {
                                    color: A("green.600", "green.300", g)
                                }
                            }), n.jsx(qe, {
                                onClick: () => I(j),
                                variant: "unstyled",
                                flexShrink: 0,
                                size: "sm",
                                ml: 3,
                                title: "Edit alert",
                                "aria-label": "Edit alert",
                                icon: n.jsx(Y, {
                                    as: mt
                                }),
                                color: A("gray.500", "gray.600", g),
                                _hover: {
                                    color: A("accent.500", "accent.400", g)
                                }
                            }), n.jsx(qe, {
                                onClick: () => x({
                                    type: "delete",
                                    id: j.id
                                }),
                                "aria-label": "Delete alert",
                                title: "Delete alert",
                                icon: n.jsx(Y, {
                                    as: vt
                                }),
                                flexShrink: 0,
                                variant: "unstyled",
                                colorScheme: "red",
                                size: "sm",
                                ml: 3,
                                color: A("gray.500", "gray.600", g),
                                _hover: {
                                    color: A("red.500", "red.400", g)
                                }
                            })]
                        })]
                    }), !F && j.note && n.jsx(n.Fragment, {
                        children: n.jsxs(Ue, {
                            alignItems: "flex-start",
                            children: [n.jsx(Er, {
                                borderTopWidth: 1,
                                borderColor: A("gray.100", "blue.900", g)
                            }), n.jsxs(yr, {
                                spacing: 2,
                                justifyContent: "flex-start",
                                alignItems: "center",
                                children: [n.jsx(Y, {
                                    as: Ze,
                                    color: A("gray.400", "gray.600", g)
                                }), n.jsx(B, {
                                    as: "span",
                                    fontSize: "sm",
                                    color: A("gray.500", "gray.300", g),
                                    children: j.note
                                })]
                            })]
                        })
                    }), T && n.jsx(xt, {
                        modalProps: {
                            onClose: () => H()
                        },
                        message: "Are you sure you want to delete this alert?",
                        onConfirm: () => m(j.id),
                        onCancel: () => H()
                    })]
                }, j.id)
            })
        })
    },
    ys = ({
        pair: e,
        isInverted: t
    }) => {
        const r = M.useRef(!0),
            {
                price: i,
                priceUsd: a,
                chainId: o,
                pairAddress: f,
                dexId: u,
                quoteToken: x,
                baseToken: S
            } = e,
            g = Kr({
                defaultValues: {
                    triggerBase: "priceUsd",
                    triggerAndDirection: "priceUsdValueOver",
                    priceUsd: t ? Rt({
                        price: i,
                        priceUsd: a
                    }) : a,
                    priceNative: t ? Ot({
                        price: i
                    }) : i,
                    note: void 0
                }
            }),
            b = Xe(),
            m = oe.useInjectable(Je),
            [I, w] = M.useState(!1),
            N = oe.useInjectable(Be),
            H = ds(N.all, []).filter(({
                trigger: Q
            }) => {
                var L;
                return Q.subject.type === "dexPair" && ((L = Q.subject) == null ? void 0 : L.chainId) === o && Q.subject.pairId === f
            }),
            {
                getValues: j,
                setValue: F
            } = g,
            {
                triggerBase: T
            } = j();
        M.useEffect(() => () => {
            r.current = !1
        }, [r]), M.useEffect(() => {
            F("triggerAndDirection", `${T}ValueOver`)
        }, [T, F]);
        const E = g.handleSubmit(async Q => {
                if (I) return;
                const L = {
                        type: "dexPair",
                        chainId: o,
                        dexId: u,
                        pairId: f,
                        baseTokenName: S.name,
                        baseTokenSymbol: S.symbol,
                        quoteTokenSymbol: x.symbol
                    },
                    J = Gr({
                        pair: L,
                        formValues: Q,
                        isInverted: t
                    });
                if (!J) {
                    b({
                        status: "error",
                        description: "Invalid price alert"
                    });
                    return
                }
                w(!0);
                try {
                    await N.actions.createAlert({
                        schemaVersion: "1.0.0",
                        trigger: J,
                        channels: [{
                            type: "browser"
                        }],
                        enabled: !0,
                        note: Q.note
                    }), m.track({
                        event: "addPriceAlert"
                    }), b({
                        status: "success",
                        description: "Price alert created!"
                    }), r.current && (g.setValue("priceUsd", void 0), g.setValue("priceNative", void 0), g.setValue("percentage", void 0), g.setValue("note", null))
                } catch (W) {
                    b({
                        status: "error",
                        description: `Failed creating price alert: ${Ee(W).message}`
                    })
                }
                w(!1)
            }),
            te = t ? S.symbol : x.symbol;
        return n.jsxs(n.Fragment, {
            children: [n.jsxs(Ue, {
                spacing: 4,
                alignItems: "flex-start",
                as: "form",
                onSubmit: E,
                children: [n.jsxs(je, {
                    style: {
                        height: "inherit"
                    },
                    children: [n.jsx(X, {
                        as: "span",
                        alignItems: "center",
                        children: n.jsx(B, {
                            children: "Alert me when "
                        })
                    }), n.jsx(X, {
                        as: "span",
                        children: n.jsxs(ae, { ...g.register("triggerBase"),
                            children: [n.jsx("option", {
                                value: "priceUsd",
                                children: "price in USD"
                            }), n.jsxs("option", {
                                value: "priceNative",
                                children: ["price in ", te]
                            })]
                        })
                    })]
                }), n.jsxs(je, {
                    align: "center",
                    width: "100%",
                    children: [n.jsx(X, {
                        as: "span",
                        w: "210px",
                        children: n.jsx(Yr, {
                            form: g,
                            isInverted: t
                        })
                    }), n.jsx(Qr, {
                        form: g,
                        quoteTokenSymbol: te
                    }), n.jsx(X, {
                        as: "div",
                        children: n.jsx(_e, {
                            isLoading: I,
                            type: "submit",
                            leftIcon: n.jsx(Y, {
                                as: bt
                            }),
                            colorScheme: "green",
                            children: "Create Alert"
                        })
                    })]
                }), n.jsxs(fe, {
                    children: [n.jsx(he, {
                        children: n.jsx(Y, {
                            as: Ze
                        })
                    }), n.jsx(be, {
                        isInvalid: !!g.formState.errors.note,
                        ...g.register("note"),
                        placeholder: "Add a note to your alert (optional)"
                    })]
                })]
            }), H && H.length > 0 && n.jsx(hs, {
                dexScreenerPair: e,
                containerProps: {
                    mt: 5
                },
                priceAlerts: H
            })]
        })
    },
    ps = ({
        pair: e,
        onClose: t,
        isInverted: r
    }) => {
        const [i, a] = M.useState();
        M.useEffect(() => {
            "Notification" in window && a(window.Notification.permission)
        }, []);
        const o = () => {
                "Notification" in window && window.Notification.requestPermission(u => {
                    a(u)
                })
            },
            {
                colorMode: f
            } = er();
        return n.jsxs(jt, {
            size: "3xl",
            onClose: t,
            motionPreset: "none",
            scrollBehavior: "inside",
            blockScrollOnMount: !1,
            isOpen: !0,
            children: [n.jsx(St, {}), n.jsxs(_t, {
                children: [n.jsx(wt, {}), n.jsx(kt, {
                    children: n.jsx(At, {
                        size: "md",
                        children: "Manage Price Alerts"
                    })
                }), n.jsxs(Ft, {
                    p: 5,
                    children: [i === "default" && n.jsxs(pr, {
                        display: "flex",
                        flexDir: "column",
                        py: 6,
                        textAlign: "center",
                        children: [n.jsxs(B, {
                            fontSize: "lg",
                            children: ["To set price alerts please enable", " ", n.jsx(mr, {
                                href: "https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop",
                                target: "_blank",
                                rel: "noreferrer",
                                color: A("accent.600", "accent.200", f),
                                textDecor: "underline",
                                children: "browser notifications"
                            }), " ", "for DEX Screener first:"]
                        }), n.jsx(_e, {
                            mt: 4,
                            onClick: o,
                            colorScheme: "green",
                            leftIcon: n.jsx(Y, {
                                as: rr
                            }),
                            size: "lg",
                            children: "Enable Notifications"
                        })]
                    }), i === "denied" && n.jsxs(pr, {
                        display: "flex",
                        flexDir: "column",
                        py: 6,
                        textAlign: "center",
                        children: [n.jsx(Y, {
                            as: It,
                            color: A("red.500", "red.400", f),
                            boxSize: "80px"
                        }), n.jsxs(B, {
                            mt: 4,
                            fontSize: "lg",
                            children: ["You have blocked notifications for DEX Screener. Please", " ", n.jsx(mr, {
                                href: "https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop",
                                target: "_blank",
                                rel: "noreferrer",
                                color: A("accent.600", "accent.200", f),
                                textDecor: "underline",
                                children: "change your browser settings"
                            }), ", reload this page and try again."]
                        })]
                    }), i === "granted" && n.jsx(ys, {
                        pair: e,
                        isInverted: r
                    })]
                })]
            })]
        })
    },
    ws = ({
        pair: e,
        buttonProps: t,
        isInverted: r
    }) => {
        const i = oe.useInjectable(Je),
            {
                isEmbed: a
            } = Dt(g => g.embedSettings),
            o = vr(),
            f = vr(),
            u = oe.useInjectable(Be),
            x = Ct(u.active, []).filter(({
                trigger: g
            }) => g.subject.type === "dexPair" && g.subject.chainId === (e == null ? void 0 : e.chainId) && g.subject.pairId === e.pairAddress).length,
            S = () => {
                if (a) {
                    o.onOpen();
                    return
                }
                f.onOpen(), i.track({
                    event: "priceAlertsButtonClick"
                })
            };
        return n.jsxs(n.Fragment, {
            children: [n.jsx(Et, {
                isDisabled: t && !t.isDisabled,
                label: "Your device does not support notifications",
                children: n.jsxs(_e, {
                    onClick: S,
                    leftIcon: n.jsx(Y, {
                        as: x === 0 ? Ut : rr,
                        boxSize: "16px"
                    }),
                    fontWeight: "normal",
                    pointerEvents: e ? void 0 : "none",
                    _focus: {
                        boxShadow: "none"
                    },
                    ...t,
                    children: [n.jsx(Nt, {
                        children: "Alerts"
                    }), x > 0 && n.jsx(Vt, {
                        label: x
                    })]
                })
            }), e && f.isOpen && n.jsx(ps, {
                pair: e,
                onClose: f.onClose,
                isInverted: r
            }), o.isOpen && n.jsx(Pt, {
                onClose: o.onClose
            })]
        })
    };
export {
    _s as C, fe as I, ws as P, Er as S, hs as a, he as b, Xt as c, sr as d, Mt as e, Ot as f, h as g, Rt as i, D as s, Kr as u
};