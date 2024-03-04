import {
    aG as s,
    aH as i,
    aI as n,
    n as h,
    p as r,
    aJ as l
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    C as m
} from "./controlled-pair-search-modal-OY12stEW.js";
import "./preload-helper-hlDPvxQM.js";
import "./dex-search.service-mcSyVurQ.js";
import "./display-a-ads-ad-fohsOcm1.js";
import "./span-tpC7Sv0b.js";
import "./date-2BvDWMFk.js";
import "./ads-provider-Ceqm-9IU.js";
import "./embed-feature-disabled-modal-CFsC1n7P.js";
import "./chunk-ZPFGWTBB-x804Qy_y.js";
const u = () => {
        const t = s(),
            e = i(),
            a = n(),
            c = h.useCallback(o => e({
                query: o
            }), [e]);
        return {
            close: t,
            activeSearch: a,
            onChange: c
        }
    },
    q = () => {
        const {
            close: t,
            activeSearch: e,
            onChange: a
        } = u();
        return e ? r.jsxs(r.Fragment, {
            children: [r.jsx(l, {
                children: r.jsx("title", {
                    children: `DEX Screener - Search${e.query===""?"":` "${e.query}"`}`
                })
            }), r.jsx(m, {
                query: e.query,
                onClose: t,
                onQueryChange: a
            })]
        }) : null
    };
export {
    q as ActivePairSearchModal
};