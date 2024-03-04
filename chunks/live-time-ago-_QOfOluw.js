import {
    n as a,
    a8 as h,
    p as o
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    g as n,
    f as g
} from "./date-2BvDWMFk.js";
import {
    S as i
} from "./span-tpC7Sv0b.js";
const v = ({
    timestamp: e,
    compact: s,
    enableTooltip: p,
    ...l
}) => {
    var t;
    const [r, c] = a.useState(n(e, {
        now: (t = h().current) == null ? void 0 : t.time
    }));
    a.useEffect(() => {
        const x = setInterval(() => {
            c(n(e, {
                now: Date.now()
            }))
        }, 200);
        return () => clearInterval(x)
    }, [e]);
    const d = s ? r == null ? void 0 : r.split(" ").at(0) : r;
    return o.jsx(o.Fragment, {
        children: o.jsxs(i, {
            pos: "relative",
            _hover: {
                "@media (hover: hover)": {
                    span: {
                        display: "block"
                    }
                }
            },
            ...l,
            children: [d ? ? "0s", !s && " ago", p && o.jsx(i, {
                display: "none",
                pos: "absolute",
                top: "-2px",
                left: "110%",
                bg: "gray.950",
                borderWidth: 1,
                borderColor: "gray.975",
                color: "white",
                fontSize: "2xs",
                px: "6px",
                py: "2px",
                whiteSpace: "nowrap",
                borderRadius: "sm",
                userSelect: "none",
                children: g(e, "MMM d hh:mm:ss a")
            })]
        })
    })
};
export {
    v as L
};