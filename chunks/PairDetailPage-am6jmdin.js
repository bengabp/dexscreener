import {
    L as p,
    p as i,
    B as e
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    D as s,
    a
} from "./dex-pair-details-R9pLR_Yx.js";
import "./preload-helper-hlDPvxQM.js";
import "./delayed-JPP63qSh.js";
import "./date-2BvDWMFk.js";
import "./span-tpC7Sv0b.js";
import "./price-alerts-button-Vc_Zv5ZX.js";
import "./embed-feature-disabled-modal-CFsC1n7P.js";
import "./util-mk6Cl76j.js";
import "./conditional-wrap-0FyHpKg_.js";
import "./index-IegrxUAU.js";
import "./dex-search.service-mcSyVurQ.js";
import "./display-a-ads-ad-fohsOcm1.js";
import "./ads-provider-Ceqm-9IU.js";
import "./time-ago-vrqMsdqe.js";
import "./live-time-ago-_QOfOluw.js";
const B = ({
    platformId: r,
    pairAddress: o,
    initialData: t
}) => {
    const {
        navWidth: m
    } = p();
    return i.jsx(e, {
        display: "flex",
        flex: "1",
        height: "100%",
        overflow: "hidden",
        w: {
            lg: `calc(100vw - ${m}px)`
        },
        children: i.jsx(s, {
            initialData: t,
            chainId: r,
            pairAddress: o,
            children: i.jsx(a, {})
        }, `${r}/${o}`)
    })
};
export {
    B as PairDetailPage
};