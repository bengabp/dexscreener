import {
    R as A,
    p as R,
    X as G,
    aK as C,
    aL as f
} from "../entries/pages_catch-all.__d1Yby5.js";
var v = A(function(r, e) {
    const {
        templateAreas: o,
        gap: a,
        rowGap: t,
        columnGap: d,
        column: i,
        row: n,
        autoFlow: u,
        autoRows: l,
        templateRows: m,
        autoColumns: p,
        templateColumns: g,
        ...w
    } = r, c = {
        display: "grid",
        gridTemplateAreas: o,
        gridGap: a,
        gridRowGap: t,
        gridColumnGap: d,
        gridAutoColumns: p,
        gridColumn: i,
        gridRow: n,
        gridAutoFlow: u,
        gridAutoRows: l,
        gridTemplateRows: m,
        gridTemplateColumns: g
    };
    return R.jsx(G.div, {
        ref: e,
        __css: c,
        ...w
    })
});
v.displayName = "Grid";
const h = s => {
        const [r, e] = f();
        return { ...s,
            refreshRequest: e,
            refresh: r
        }
    },
    [P, y] = C("AdsProvider");
export {
    y as A, v as G, h as n, P as u
};