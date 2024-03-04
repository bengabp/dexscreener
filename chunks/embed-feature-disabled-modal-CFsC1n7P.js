import {
    bm as W,
    R as x,
    n as c,
    p as e,
    X as t,
    aT as m,
    b3 as d,
    af as _,
    ag as v,
    ah as C,
    ai as E,
    al as I,
    Y as S,
    I as p,
    bn as N,
    ak as z,
    x as B,
    aE as D,
    bo as F
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    S as O
} from "./span-tpC7Sv0b.js";
const G = a => Math.abs(a.value) === 1 ? a.single : a.zeroOrMany,
    L = a => a[0] ? a[0].toLocaleUpperCase() + a.slice(1) : "",
    X = (a, s, n) => a && W(a, {
        length: s,
        omission: "…",
        ...n
    });
var R = x(function(s, n) {
    const {
        spacing: r = "0.5rem",
        spacingX: l,
        spacingY: u,
        children: o,
        justify: f,
        direction: g,
        align: b,
        className: j,
        shouldWrapChildren: i,
        ...y
    } = s, k = c.useMemo(() => i ? c.Children.map(o, (w, M) => e.jsx(h, {
        children: w
    }, M)) : o, [o, i]);
    return e.jsx(t.div, {
        ref: n,
        className: m("chakra-wrap", j),
        ...y,
        children: e.jsx(t.ul, {
            className: "chakra-wrap__list",
            __css: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: f,
                alignItems: b,
                flexDirection: g,
                listStyleType: "none",
                gap: r,
                columnGap: l,
                rowGap: u,
                padding: "0"
            },
            children: k
        })
    })
});
R.displayName = "Wrap";
var h = x(function(s, n) {
    const {
        className: r,
        ...l
    } = s;
    return e.jsx(t.li, {
        ref: n,
        __css: {
            display: "flex",
            alignItems: "flex-start"
        },
        className: m("chakra-wrap__listitem", r),
        ...l
    })
});
h.displayName = "WrapItem";
const Y = ({
        label: a
    }) => e.jsx(O, {
        display: "inline-block",
        position: "relative",
        top: "-1px",
        minW: "20px",
        px: "4px",
        py: "2px",
        ml: "6px",
        textAlign: "center",
        fontSize: "xs",
        fontWeight: "bold",
        fontFamily: "mono",
        borderRadius: "lg",
        bg: d("rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.5)"),
        color: d("rgba(255, 255, 255, 0.9)", "rgba(0, 0, 0, 0.8)"),
        children: a
    }),
    H = ({
        onClose: a
    }) => e.jsxs(_, {
        size: "lg",
        onClose: a,
        motionPreset: "none",
        blockScrollOnMount: !1,
        isOpen: !0,
        children: [e.jsx(v, {}), e.jsxs(C, {
            children: [e.jsx(E, {}), e.jsx(I, {
                p: 5,
                children: e.jsxs(S, {
                    flexDir: "column",
                    textAlign: "center",
                    sx: {
                        "a:hover": {
                            textDecor: "none"
                        }
                    },
                    children: [e.jsx(p, {
                        as: N,
                        color: "yellow.500",
                        boxSize: "60px"
                    }), e.jsx(z, {
                        mt: 4,
                        size: "md",
                        children: "This feature is only available on dexscreener.com"
                    }), e.jsx(B, {
                        as: D,
                        onClick: () => a(),
                        target: "_blank",
                        href: typeof window > "u" ? "#" : window.location.href,
                        mt: 4,
                        colorScheme: "accent",
                        rightIcon: e.jsx(p, {
                            as: F
                        }),
                        children: "Go to DEX Screener"
                    })]
                })
            })]
        })]
    });
export {
    Y as B, H as E, R as W, h as a, L as c, G as d, X as t
};