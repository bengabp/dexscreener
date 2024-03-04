import {
    R as g,
    a9 as w,
    p as R,
    X as l,
    aa as S
} from "../entries/pages_catch-all.__d1Yby5.js";

function t(a) {
    return S(a, r => r === "auto" ? "auto" : `span ${r}/span ${r}`)
}
var f = g(function(r, o) {
    const {
        area: n,
        colSpan: s,
        colStart: d,
        colEnd: i,
        rowEnd: e,
        rowSpan: p,
        rowStart: m,
        ...c
    } = r, u = w({
        gridArea: n,
        gridColumn: t(s),
        gridRow: t(p),
        gridColumnStart: d,
        gridColumnEnd: i,
        gridRowStart: m,
        gridRowEnd: e
    });
    return R.jsx(l.div, {
        ref: o,
        __css: u,
        ...c
    })
});
f.displayName = "GridItem";
export {
    f as G
};