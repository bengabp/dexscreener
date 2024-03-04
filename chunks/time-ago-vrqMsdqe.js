import {
    R as S,
    aS as I,
    U as T,
    p as u,
    X as A,
    aT as M,
    a8 as N,
    n as d
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    g as m
} from "./date-2BvDWMFk.js";
var W = S(function(e, r) {
    const {
        borderLeftWidth: s,
        borderBottomWidth: o,
        borderTopWidth: i,
        borderRightWidth: n,
        borderWidth: a,
        borderStyle: l,
        borderColor: v,
        ...g
    } = I("Divider", e), {
        className: b,
        orientation: c = "horizontal",
        __css: D,
        ..._
    } = T(e), x = {
        vertical: {
            borderLeftWidth: s || n || a || "1px",
            height: "100%"
        },
        horizontal: {
            borderBottomWidth: o || i || a || "1px",
            width: "100%"
        }
    };
    return u.jsx(A.hr, {
        ref: r,
        "aria-orientation": c,
        ..._,
        __css: { ...g,
            border: "0",
            borderColor: v,
            borderStyle: l,
            ...x[c],
            ...D
        },
        className: M("chakra-divider", b)
    })
});
W.displayName = "Divider";
const f = 6e4,
    h = 60 * f,
    w = 24 * h,
    p = (t, e) => {
        if (t > e) return;
        const r = e - t;
        if (!(r > w)) return r > h ? 6e4 : r > f ? 5e3 : 200
    },
    y = t => t instanceof Date ? t.getTime() : t,
    R = t => {
        var i;
        const e = (i = N().current) == null ? void 0 : i.time,
            [r, s] = d.useState(m(t.timestamp, {
                now: e
            })),
            o = p(y(t.timestamp), Date.now());
        return d.useEffect(() => {
            const n = o ? setInterval(() => {
                s(m(t.timestamp, {
                    now: Date.now()
                }))
            }, o) : -1;
            return () => clearInterval(n)
        }, [t.timestamp, o]), {
            timeAgo: r ? ? "0s"
        }
    },
    k = ({
        timestamp: t
    }) => {
        const {
            timeAgo: e
        } = R({
            timestamp: t
        });
        return u.jsx("span", {
            children: e ? ? "0s"
        })
    };
export {
    W as D, k as T
};