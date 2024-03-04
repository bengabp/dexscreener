import {
    ev as cn,
    ew as st,
    c$ as ln,
    eI as pn,
    eJ as un,
    eK as hn,
    eL as mn,
    bp as F,
    a6 as H,
    eM as fn,
    aV as Mt,
    eN as gn,
    aZ as Ue,
    bz as Se,
    eO as vn,
    cf as xn,
    eP as Me,
    b0 as X,
    c0 as ie,
    eQ as at,
    eR as yn,
    eS as bn,
    bu as Be,
    br as Ht,
    eT as wn,
    eU as kn,
    n as f,
    R as Dn,
    aS as Cn,
    U as _n,
    p as l,
    X as An,
    aT as En,
    eV as Ln,
    q as ae,
    ay as Y,
    ce as Ne,
    aE as ke,
    bg as Ie,
    B as M,
    aM as Sn,
    a2 as Ve,
    I as se,
    aF as jn,
    Z as K,
    H as Rn,
    J as In,
    b3 as Pt,
    ab as Ke,
    an as q,
    V as He,
    b2 as zn,
    aU as Oe,
    aL as Tn,
    b_ as ot,
    c2 as Un,
    c5 as dt,
    eW as Mn,
    c1 as Hn,
    E as Pn,
    dQ as Fn,
    bC as Ft,
    x as Pe,
    dH as je,
    a0 as Wn,
    dz as Bn,
    cF as ct,
    dl as Nn,
    eX as Vn,
    M as Kn,
    w as On,
    eY as lt,
    z as qn,
    eZ as $n,
    di as Gn,
    e_ as Zn,
    cP as Xn,
    ej as Yn,
    e$ as Jn,
    dy as Qn,
    b1 as pt,
    O as qe,
    f0 as er,
    f1 as tr,
    f2 as nr,
    f3 as rr,
    f4 as Wt,
    f5 as Bt,
    f6 as Nt,
    f7 as ir,
    f8 as sr,
    f9 as ar,
    fa as or,
    fb as dr,
    fc as cr,
    fd as lr
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    a as pr,
    c as ze,
    d as $e,
    A as Ge,
    e as ut,
    D as ht
} from "./display-a-ads-ad-fohsOcm1.js";
import {
    S as be
} from "./span-tpC7Sv0b.js";
import {
    i as mt,
    c as ve
} from "./date-2BvDWMFk.js";
import {
    u as ur
} from "./ads-provider-Ceqm-9IU.js";
import {
    E as hr,
    B as mr
} from "./embed-feature-disabled-modal-CFsC1n7P.js";

function ft(e, t) {
    cn(2, arguments);
    var r = st(e),
        n = st(t);
    return r.getTime() < n.getTime()
}

function gt(e) {
    return new ln(t => {
        try {
            t.next(e())
        } catch (r) {
            t.error(r)
        }
    })
}
class fr extends pn {
    constructor(t, r) {
        super(r(t.getValue())), this.property = t, this.f = r
    }
    subscribe(t) {
        return t ? typeof t == "function" ? this.property.subscribe(r => t(this.f(r))) : this.property.subscribe({
            next: r => {
                var n;
                return (n = t.next) == null ? void 0 : n.call(t, this.f(r))
            },
            error: r => {
                var n;
                return (n = t.error) == null ? void 0 : n.call(t, r)
            },
            complete: () => {
                var r;
                return (r = t.complete) == null ? void 0 : r.call(t)
            }
        }) : un.EMPTY
    }
    get value() {
        return this.getValue()
    }
    getValue() {
        return this.f(this.property.getValue())
    }
}

function gr(e, t) {
    return new fr(e, t)
}

function Fi(e, t) {
    return e && e.length ? hn(e, mn(t)) : []
}
const vr = F.union([F.object({
        kind: F.literal("ready")
    }), F.object({
        kind: F.literal("error"),
        error: F.string()
    })]),
    Vt = "https://request-global.czilladx.com",
    xr = H.injectable("@dexscreener/feature-ads//CoinzillaAdsDataSource", fn, Mt, (e, t) => ({
        findNativeAdUnit: r => e.nativeUnits.find(n => n.screen === r.screen),
        getDefaultNativeAdUnit: r => ({ ...e.defaultNativeUnit,
            screen: r.screen
        }),
        getNativeAd: r => {
            const n = br(r);
            return t.get(n, gn).pipe(Ue(vn))
        },
        findDisplayAdUnit: r => {
            const n = e.displayUnits.filter(s => s.screen === r.screen && Se(s.size, r.size));
            return r.chainId === void 0 ? n.find(s => s.chainId === void 0) : n.find(s => s.chainId === r.chainId) ? ? n.find(s => s.chainId === void 0)
        },
        getDefaultDisplayAdUnit: r => ({ ...e.defaultDisplayUnit,
            screen: r.screen
        }),
        getDisplayAd: r => {
            const n = wr(r);
            return t.text(n).pipe(Ue(s => {
                const c = new URL(s);
                if (c.searchParams.get("c") === "DEFAULT") throw new Error("Non-monetizable ad");
                return {
                    kind: "display",
                    provider: "coinzilla",
                    iframeURL: c.toString(),
                    adUnit: r
                }
            }))
        }
    }));

function yr() {
    return `${Math.floor(Math.random()*1e12)+new Date().getTime()}`
}

function br(e) {
    const t = new URL(Vt);
    return t.pathname = "/serve/native.php", t.searchParams.append("z", e.id), t.toString()
}

function wr(e) {
    const t = new URL(Vt);
    return e.size === "responsive" ? t.pathname = "/serve/header.php" : (t.pathname = "/serve/get.php", t.searchParams.append("w", vt(e.size.width)), t.searchParams.append("h", vt(e.size.height))), t.searchParams.append("withoutAdCode", "1"), t.searchParams.append("z", e.id), t.searchParams.append("n", yr()), t.toString()
}

function vt(e) {
    return e.toString()
}
const ge = H.injectable("@dexscreener/feature-ads//DirectAdUnitsDataSource", () => {
        const e = {
            native: {
                home: {
                    adKind: "native",
                    provider: "direct",
                    screen: "home",
                    id: "native-ad-home"
                },
                search: {
                    adKind: "native",
                    provider: "direct",
                    screen: "search",
                    id: "native-ad-search"
                },
                multicharts: {
                    adKind: "native",
                    provider: "direct",
                    screen: "multicharts",
                    id: "native-ad-multicharts"
                },
                gainersLosers: {
                    adKind: "native",
                    provider: "direct",
                    screen: "gainers-losers",
                    id: "native-ad-gainers-losers"
                },
                newPairs: {
                    adKind: "native",
                    provider: "direct",
                    screen: "new-pairs",
                    id: "native-ad-new-pairs"
                },
                watchlist: {
                    adKind: "native",
                    provider: "direct",
                    screen: "watchlist",
                    id: "native-ad-watchlist"
                },
                screener: {
                    adKind: "native",
                    provider: "direct",
                    screen: "screener",
                    id: "native-ad-screener"
                }
            },
            display: {
                pair: {
                    all: {
                        "300x250": {
                            adKind: "display",
                            provider: "direct",
                            screen: "pair",
                            id: "direct-ad-300x250",
                            size: {
                                width: 300,
                                height: 250
                            }
                        },
                        "320x100": {
                            adKind: "display",
                            provider: "direct",
                            screen: "pair",
                            id: "direct-ad-320x100",
                            size: {
                                width: 320,
                                height: 100
                            }
                        }
                    },
                    metamask: {
                        "300x250": {
                            adKind: "display",
                            provider: "direct",
                            screen: "pair",
                            id: "metamask-direct-ad-300x250",
                            size: {
                                width: 300,
                                height: 250
                            },
                            chainIds: ["optimism", "bsc", "arbitrum", "avalanche", "linea"]
                        }
                    },
                    ethereumAndPolygon: {
                        "300x250": {
                            adKind: "display",
                            provider: "direct",
                            screen: "pair",
                            id: "flush-direct-ad-300x250",
                            size: {
                                width: 300,
                                height: 250
                            },
                            chainIds: ["ethereum", "polygon"]
                        },
                        "320x100": {
                            adKind: "display",
                            provider: "direct",
                            screen: "pair",
                            id: "flush-direct-ad-320x100",
                            size: {
                                width: 320,
                                height: 100
                            },
                            chainIds: ["ethereum", "polygon"]
                        }
                    }
                }
            }
        };
        return {
            map: e,
            nativeAdUnits: [e.native.home, e.native.search, e.native.multicharts, e.native.gainersLosers, e.native.newPairs, e.native.watchlist, e.native.screener],
            displayAdUnits: [e.display.pair.all["300x250"], e.display.pair.metamask["300x250"], e.display.pair.ethereumAndPolygon["300x250"], e.display.pair.all["320x100"], e.display.pair.ethereumAndPolygon["320x100"]]
        }
    }),
    kr = H.injectable(ge, e => [{
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-bridge-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-bridge-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_bridge",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-bridge-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-bridge-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-bridge-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_bridge",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-bridge-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-buy-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-buy-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_buy",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-buy-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-buy-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-buy-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_buy",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-buy-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-sell-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-sell-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_sell",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-sell-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-sell-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-sell-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_sell",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-sell-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-dashboard-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-dashboard-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_dashboard",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-dashboard-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-dashboard-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-dashboard-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_dashboard",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-dashboard-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-portfolio-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-portfolio-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_portfolio",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-portfolio-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-portfolio-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-portfolio-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_portfolio",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-portfolio-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_swap",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pDapp_300x250_dexscreener_swap",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-pink-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-pink-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pdapp_Swaps_dexscreener_300x250_pink",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-pink-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-pink-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-pink-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pdapp_Swaps_dexscreener_300x250_pink",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-pink-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-waldo-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-waldo-600x500.png",
        url: "https://metamask.io/portfolio/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pdapp_Swaps_dexscreener_300x250_waldo",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-waldo-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.metamask["300x250"], e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "consensys-swap-waldo-600x500",
        source: "image",
        src: "https://dexscreener.com/a/direct/consensys-swap-waldo-600x500.png",
        url: "https://portfolio.metamask.io/?utm_source=dexscreener&utm_medium=display&utm_campaign=MM_pDapp_dexscreener_native&utm_content=pdapp_Swaps_dexscreener_300x250_waldo",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/consensys-swap-waldo-600x500"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-03-31"),
        weight: 12
    }]),
    Dr = H.injectable(ge, e => [{
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "tg-casino-300x250-FI-UK-0095",
        src: "https://static.dexscreen.com/finixio/tg-casino-300x250-v2/300x250.html",
        url: "https://a1.adform.net/C/?bn=69415140",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415140;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/tg-casino-300x250"],
        startDate: new Date("2023-11-07T00:00:00.00Z"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "tg-casino-320x100-FI-UK-0095",
        src: "https://static.dexscreen.com/finixio/tg-casino-320x100-v2/320x100.html",
        url: "https://a1.adform.net/C/?bn=69415139",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415139;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/tg-casino-320x100"],
        startDate: new Date("2023-11-07T00:00:00.00Z"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "tg-casino-300x250-FI-UK-0095",
        src: "https://static.dexscreen.com/finixio/tg-casino-300x250-variant2/300x250.html",
        url: "https://a1.adform.net/C/?bn=71817363",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71817363;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/tg-casino-300x250"],
        startDate: new Date("2024-02-21"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "tg-casino-320x100-FI-UK-0095",
        src: "https://static.dexscreen.com/finixio/tg-casino-320x100-variant2/320x100.html",
        url: "https://a1.adform.net/C/?bn=71817364",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71817364;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/tg-casino-320x100"],
        startDate: new Date("2024-02-21"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "lucky-block-300x250-FI-UK-0078",
        src: "https://static.dexscreen.com/finixio/lucky-block-300x250-v4/300x250.html",
        url: "https://a1.adform.net/C/?bn=67643782",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643782;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/lucky-block-300x250"],
        startDate: new Date("2023-12-07"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "lucky-block-320x100-FI-UK-0078",
        src: "https://static.dexscreen.com/finixio/lucky-block-320x100-v4/320x100.html",
        url: "https://a1.adform.net/C/?bn=67643783",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643783;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/lucky-block-320x100"],
        startDate: new Date("2023-12-07"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "sponge-v2-300x250-FI-UK-0102",
        src: "https://static.dexscreen.com/finixio/sponge-300x250/300x250.html",
        url: "https://a1.adform.net/C/?bn=70370378",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70370378;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/sponge-v2-300x250"],
        startDate: new Date("2023-12-19"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "sponge-v2-320x100-FI-UK-0102",
        src: "https://static.dexscreen.com/finixio/sponge-320x100/320x100.html",
        url: "https://a1.adform.net/C/?bn=70370377",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70370377;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/sponge-v2-320x100"],
        startDate: new Date("2023-12-19"),
        endDate: new Date("2024-03-28"),
        weight: 10
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "smog-300x250-FI-UK-0113",
        src: "https://static.dexscreen.com/finixio/smog-300x250/300x250.html",
        url: "https://a1.adform.net/C/?bn=71446644",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446644;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/smog-300x250"],
        startDate: new Date("2023-02-07"),
        endDate: new Date("2024-03-28"),
        weight: 20
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "smog-320x100-FI-UK-0113",
        src: "https://static.dexscreen.com/finixio/smog-320x100/320x100.html",
        url: "https://a1.adform.net/C/?bn=71446641",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446641;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/smog-320x100"],
        startDate: new Date("2023-02-07"),
        endDate: new Date("2024-03-28"),
        weight: 20
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["300x250"], e.map.display.pair.metamask["300x250"]],
        source: "iframe",
        id: "green-bitcoin-300x250-FI-UK-0120",
        src: "https://static.dexscreen.com/finixio/green-bitcoin-300x250/300x250.html",
        url: "https://a1.adform.net/C/?bn=71961957",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961957;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/green-bitcoin-300x250"],
        startDate: new Date("2023-02-29"),
        endDate: new Date("2024-03-28"),
        weight: 20
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.all["320x100"]],
        source: "iframe",
        id: "green-bitcoin-320x100-FI-UK-0120",
        src: "https://static.dexscreen.com/finixio/green-bitcoin-320x100/320x100.html",
        url: "https://a1.adform.net/C/?bn=71977632",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71977632;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/pair/display/green-bitcoin-320x100"],
        startDate: new Date("2023-02-29"),
        endDate: new Date("2024-03-28"),
        weight: 20
    }]),
    pe = {
        kind: "native",
        provider: "direct",
        title: "TG.Casino",
        description: "World's first licensed telegram casino. Fully anonymous - 10 ETH Bonus + 25% Cashback ",
        callToAction: "Play Now!",
        thumbnail: "https://dexscreener.com/a/direct/tg-casino-logo.svg",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-11-07T00:00:00.00Z"),
        endDate: new Date("2024-03-14T00:00:00.00Z"),
        weight: 30
    },
    ue = {
        kind: "native",
        provider: "direct",
        title: "Lucky Block Casino",
        description: "200% up to $10k Crypto VIP Bonus. High Bet Limits, Instant Withdrawals!",
        callToAction: "Play Now!",
        thumbnail: "https://dexscreener.com/a/direct/lucky-block-40x40.svg",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-12-07T00:00:00Z"),
        endDate: new Date("2024-03-14T00:00:00.00Z"),
        weight: 10
    },
    he = {
        kind: "native",
        provider: "direct",
        title: "Sponge V2",
        description: "Sponge V1 meme coin did 100x, buy Sponge V2 before listing!",
        callToAction: "Buy Now!",
        thumbnail: "https://dexscreener.com/a/direct/sponge-v2-logo.svg",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-12-19T00:00:00Z"),
        endDate: new Date("2024-03-14T00:00:00.00Z"),
        weight: 10
    },
    me = {
        kind: "native",
        provider: "direct",
        title: "Smog Token",
        description: "Next 100x SOL Meme Coin?",
        callToAction: "Claim the FREE Airdrop!",
        thumbnail: "https://static.dexscreen.com/finixio/smog-logo.webp",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-12-19T00:00:00Z"),
        endDate: new Date("2024-03-14T00:00:00.00Z"),
        weight: 20
    },
    fe = {
        kind: "native",
        provider: "direct",
        title: "Green Bitcoin",
        description: "Traders buy this predict to earn coin before BTC Halving!",
        callToAction: "Buy $GBTC Now",
        thumbnail: "https://static.dexscreen.com/finixio/green-bitcoin-logo.png",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-12-29T00:00:00Z"),
        endDate: new Date("2024-03-14T00:00:00.00Z"),
        weight: 20
    },
    Cr = H.injectable(ge, e => [{ ...pe,
        adUnit: e.map.native.home,
        url: "https://a1.adform.net/C/?bn=69415138",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415138;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/home/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.home,
        url: "https://a1.adform.net/C/?bn=67643780",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643780;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/home/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.home,
        url: "https://a1.adform.net/C/?bn=70375481",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375481;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/home/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.home,
        url: "https://a1.adform.net/C/?bn=71446639",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446639;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/home/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.home,
        url: "https://a1.adform.net/C/?bn=71961959",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961959;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/home/native/green-bitcoin"]
    }, { ...pe,
        adUnit: e.map.native.multicharts,
        url: "https://a1.adform.net/C/?bn=69415136",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415136;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/multicharts/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.multicharts,
        url: "https://a1.adform.net/C/?bn=67643781",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643781;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/multicharts/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.multicharts,
        url: "https://a1.adform.net/C/?bn=70375480",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375480;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/multicharts/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.multicharts,
        url: "https://a1.adform.net/C/?bn=71446642",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446642;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/multicharts/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.multicharts,
        url: "https://a1.adform.net/C/?bn=71961955",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961955;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/multicharts/native/green-bitcoin"]
    }, { ...pe,
        adUnit: e.map.native.gainersLosers,
        url: "https://a1.adform.net/C/?bn=69415136",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415136;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/gainers-losers/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.gainersLosers,
        url: "https://a1.adform.net/C/?bn=67643781",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643781;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/gainers-losers/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.gainersLosers,
        url: "https://a1.adform.net/C/?bn=70375480",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375480;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/gainers-losers/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.gainersLosers,
        url: "https://a1.adform.net/C/?bn=71446642",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446642;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/gainers-losers/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.gainersLosers,
        url: "https://a1.adform.net/C/?bn=71961955",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961955;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/gainers-losers/native/green-bitcoin"]
    }, { ...pe,
        adUnit: e.map.native.newPairs,
        url: "https://a1.adform.net/C/?bn=69415136",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415136;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/new-pairs/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.newPairs,
        url: "https://a1.adform.net/C/?bn=67643781",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643781;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/new-pairs/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.newPairs,
        url: "https://a1.adform.net/C/?bn=70375480",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375480;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/new-pairs/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.newPairs,
        url: "https://a1.adform.net/C/?bn=71446642",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446642;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/new-pairs/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.newPairs,
        url: "https://a1.adform.net/C/?bn=71961955",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961955;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/new-pairs/native/green-bitcoin"]
    }, { ...pe,
        adUnit: e.map.native.watchlist,
        url: "https://a1.adform.net/C/?bn=69415136",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415136;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/watchlist/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.watchlist,
        url: "https://a1.adform.net/C/?bn=67643781",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643781;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/watchlist/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.watchlist,
        url: "https://a1.adform.net/C/?bn=70375480",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375480;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/watchlist/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.watchlist,
        url: "https://a1.adform.net/C/?bn=71446642",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446642;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/watchlist/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.watchlist,
        url: "https://a1.adform.net/C/?bn=71961955",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961955;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/watchlist/native/green-bitcoin"]
    }, { ...pe,
        adUnit: e.map.native.search,
        url: "https://a1.adform.net/C/?bn=69415137",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=69415137;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/search/native/tg-casino"]
    }, { ...ue,
        adUnit: e.map.native.search,
        url: "https://a1.adform.net/C/?bn=67643779",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=67643779;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/search/native/lucky-block"]
    }, { ...he,
        adUnit: e.map.native.search,
        url: "https://a1.adform.net/C/?bn=70375482",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=70375482;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/search/native/sponge-v2"]
    }, { ...me,
        adUnit: e.map.native.search,
        url: "https://a1.adform.net/C/?bn=71446643",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71446643;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/search/native/smog"]
    }, { ...fe,
        adUnit: e.map.native.search,
        url: "https://a1.adform.net/C/?bn=71961956",
        impressionURLs: ["https://a1.adform.net/adfserve/?CC=1&bn=71961956;1x1inv=1;srctype=3", "https://cfw.dexscreener.com/a/direct/search/native/green-bitcoin"]
    }]),
    _r = H.injectable(ge, e => [{
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.ethereumAndPolygon["300x250"]],
        id: "flush-300x250",
        source: "iframe",
        src: "https://static.dexscreen.com/flush/300x250-v13.html",
        url: "https://flushlinks.com/d7db2d206",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/flush-300x250"],
        startDate: new Date("2024-02-19"),
        endDate: new Date("2024-03-31"),
        weight: 30
    }, {
        kind: "display",
        provider: "direct",
        adUnits: [e.map.display.pair.ethereumAndPolygon["320x100"]],
        id: "flush-320x100",
        source: "iframe",
        src: "https://static.dexscreen.com/flush/320x100-v13.html",
        url: "https://flushlinks.com/d5683e287",
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/pair/display/flush-320x100"],
        startDate: new Date("2024-02-19"),
        endDate: new Date("2024-03-31"),
        weight: 30
    }]),
    Ar = H.injectable(ge, e => [{
        kind: "native",
        provider: "direct",
        title: "MetaWin",
        description: "Experience the World's first Web3 casino. Instant payments, no friction",
        callToAction: "Play Now",
        thumbnail: "https://dexscreener.com/a/direct/meta-win-logo.svg",
        url: "http://metawin.com/t/dexscreener-1?utm_source=dexscreener&utm_medium=display&utm_campaign=Native-Direct",
        advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
        startDate: new Date("2023-10-30T13:00:00.00Z"),
        endDate: new Date("2024-03-31T13:00:00.00Z"),
        weight: 1,
        adUnit: e.map.native.screener,
        impressionURLs: ["https://cfw.dexscreener.com/a/direct/screener/native/metawin"]
    }]),
    Er = H.injectable("@dexscreener/feature-ads//DirectAdsDataSource", xn, ge, Cr, Dr, Ar, kr, _r, (e, t, r, n, s, c, u) => {
        const d = [...r, ...s],
            g = [...n, ...c, ...u];
        return {
            findNativeAdUnit: o => t.nativeAdUnits.find(p => p.screen === o.screen),
            findDisplayAdUnit: o => {
                const p = o.chainId;
                if (p) {
                    const m = t.displayAdUnits.find(x => o.screen === x.screen && Se(o.size, x.size) && x.chainIds !== void 0 && x.chainIds.includes(p));
                    if (m) return m
                }
                return t.displayAdUnits.find(m => o.screen === m.screen && Se(o.size, m.size) && m.chainIds === void 0)
            },
            getNativeAd: o => {
                const p = new Date,
                    x = d.filter(h => mt(p, h.startDate) && ft(p, h.endDate) && h.adUnit.id === o.id).flatMap(h => Array(h.weight).fill(h)),
                    y = x.at(Me(x.length - 1, !1));
                return X(y)
            },
            getDisplayAd: o => {
                const p = new Date,
                    x = g.filter(h => mt(p, h.startDate) && ft(p, h.endDate) && h.adUnits.includes(o)).flatMap(h => Array(h.weight).fill({ ...h,
                        adUnit: o
                    })),
                    y = x[Me(x.length - 1, !1)];
                return y ? X(y).pipe(ie(h => at(async ({
                    signal: C
                }) => {
                    for (const A of h.impressionURLs) await e.head(A, {
                        mode: "no-cors",
                        signal: C
                    });
                    return h
                }))) : X(void 0)
            },
            notifyViewed: o => at(async ({
                signal: p
            }) => {
                for (const m of o.impressionURLs) await e.text(m, {
                    mode: "no-cors",
                    signal: p
                })
            })
        }
    }),
    Lr = [{
        adKind: "display",
        provider: "cointraffic",
        screen: "pair",
        size: {
            width: 300,
            height: 250
        },
        id: "ct_ct5dIzkNSN8"
    }, {
        adKind: "display",
        provider: "cointraffic",
        screen: "pair",
        size: {
            width: 320,
            height: 100
        },
        id: "ct_cy5LKkF4i9i"
    }],
    Sr = H.injectable(() => ({
        findDisplayAdUnit: e => Lr.find(t => t.screen !== e.screen ? !1 : yn(t.size, e.size)),
        getDisplayAd: e => X({
            kind: "display",
            provider: "cointraffic",
            adUnit: e
        })
    })),
    jr = H.injectable("@dexscreener/feature-ads//fallbackAds", () => [{
        kind: "native",
        provider: "fallback",
        description: "Advertise on DEX Screener and reach millions of crypto enthusiasts!",
        callToAction: "More info",
        url: "https://docs.dexscreener.com/contact-us/advertise"
    }, {
        kind: "native",
        provider: "fallback",
        description: "Have you tried the DEX Screener app for iOS/Android yet?",
        callToAction: "Download now!",
        url: "https://docs.dexscreener.com/mobile-app"
    }, {
        kind: "native",
        provider: "fallback",
        description: "Did you know DEX Screener has a free API?",
        callToAction: "More info",
        url: "https://docs.dexscreener.com/api/reference"
    }]),
    Rr = {
        adKind: "native",
        provider: "fallback"
    },
    Ir = H.injectable("@dexcreener/feature-ads//fallbackAdsDataSource", jr, e => ({
        getAd: () => X(e[Me(0, e.length - 1, !1)]),
        findAdUnit: () => Rr
    })),
    zr = H.injectable("@dexscreener/feature-ads//GoogleAdsAdUnitsDataSource", () => ({
        displayUnits: [{
            adKind: "display",
            provider: "google",
            id: "/22881105882/pair-details-300x250",
            screen: "pair",
            size: {
                width: 300,
                height: 250
            }
        }],
        defaultDisplayUnit: {
            adKind: "display",
            provider: "google",
            id: "/22881105882/pair-details-300x250",
            size: {
                width: 300,
                height: 250
            }
        }
    })),
    Tr = H.injectable("@dexscreener/feature-ads//GoogleAdsDataSource", zr, e => ({
        findDisplayAdUnit: t => e.displayUnits.find(r => r.screen === t.screen && Se(r.size, t.size)),
        getDefaultDisplayAdUnit: t => ({ ...e.defaultDisplayUnit,
            ...t
        }),
        getDisplayAd: t => {
            const r = {
                kind: "display",
                provider: "google",
                id: t.id,
                adUnit: t
            };
            return X(r)
        }
    })),
    Ur = H.injectable(bn, Ir, xr, pr, Tr, Be, Ht, Er, wn, Sr, (e, t, r, n, s, c, u, d, g, o) => {
        const p = c.getChildLogger({
                name: c.settings.name + "/AdsService"
            }),
            m = new kn([]),
            x = i => {
                switch (i.preferredAdKind) {
                    case "native":
                        {
                            switch (i.provider) {
                                case "coinzilla":
                                    return r.findNativeAdUnit(i) ? ? r.getDefaultNativeAdUnit(i);
                                case "direct":
                                    return d.findNativeAdUnit(i) ? ? t.findAdUnit()
                            }
                            break
                        }
                    case "display":
                        switch (i.provider) {
                            case "coinzilla":
                                return r.findDisplayAdUnit(i) ? ? r.getDefaultDisplayAdUnit(i);
                            case "a-ads":
                                return n.findDisplayAdUnit(i) ? ? n.getDefaultDisplayAdUnit(i);
                            case "google":
                                return s.findDisplayAdUnit(i) ? ? s.getDefaultDisplayAdUnit(i);
                            case "direct":
                                {
                                    const a = d.findDisplayAdUnit(i);
                                    if (a) return a;
                                    const _ = {
                                        preferredAdKind: "display",
                                        provider: "coinzilla",
                                        screen: i.screen,
                                        size: i.size
                                    };
                                    return r.findDisplayAdUnit(_) ? ? r.getDefaultDisplayAdUnit(_)
                                }
                            case "persona":
                                {
                                    const a = g.findDisplayAdUnit(i);
                                    if (a) return a;
                                    const _ = {
                                        preferredAdKind: "display",
                                        provider: "coinzilla",
                                        screen: i.screen,
                                        size: i.size
                                    };
                                    return r.findDisplayAdUnit(_) ? ? r.getDefaultDisplayAdUnit(_)
                                }
                            case "cointraffic":
                                {
                                    const a = o.findDisplayAdUnit(i);
                                    if (a) return a;
                                    const _ = {
                                        preferredAdKind: "display",
                                        provider: "coinzilla",
                                        screen: i.screen,
                                        size: i.size
                                    };
                                    return r.findDisplayAdUnit(_) ? ? r.getDefaultDisplayAdUnit(_)
                                }
                        }
                }
            },
            y = i => {
                switch (p.silly("getAdDirectly", i), i.adKind) {
                    case "native":
                        {
                            switch (i.provider) {
                                case "fallback":
                                    return t.getAd();
                                case "coinzilla":
                                    return r.getNativeAd(i);
                                case "direct":
                                    return d.getNativeAd(i)
                            }
                            break
                        }
                    case "display":
                        switch (i.provider) {
                            case "coinzilla":
                                return r.getDisplayAd(i);
                            case "a-ads":
                                return n.getDisplayAd(i);
                            case "google":
                                return s.getDisplayAd(i);
                            case "direct":
                                return d.getDisplayAd(i);
                            case "persona":
                                return g.getDisplayAd(i);
                            case "cointraffic":
                                return o.getDisplayAd(i)
                        }
                }
            },
            h = () => (p.silly("getNativeFallbackAdFromFallbacks"), t.getAd()),
            C = i => (p.silly("getNativeFallbackAdFromAdsWorker", i), e.getAd(i)),
            A = i => (p.silly("getDisplayFallbackAdFromAAds", i), gt(() => n.findDisplayAdUnit(i) ? ? n.getDefaultDisplayAdUnit(i)).pipe(ie(a => n.getDisplayAd(a)))),
            k = i => (p.silly("getDisplayFallbackAdFromCoinzilla", i), gt(() => r.findDisplayAdUnit(i) ? ? r.getDefaultDisplayAdUnit(i)).pipe(ie(r.getDisplayAd))),
            w = i => {
                switch (p.silly("getFallbackAd", i), u.track(Mr(i)), i.adKind) {
                    case "native":
                        {
                            switch (i.provider) {
                                case "fallback":
                                case "direct":
                                    return h();
                                case "coinzilla":
                                    return C({
                                        preferredAdKind: "native",
                                        screen: i.screen,
                                        provider: "coinzilla"
                                    }).pipe(ve(() => h()))
                            }
                            break
                        }
                    case "display":
                        return i.provider === "coinzilla" ? i.size === "responsive" ? A({
                            preferredAdKind: "display",
                            provider: "a-ads",
                            screen: i.screen,
                            size: {
                                width: 320,
                                height: 100
                            }
                        }).pipe(ve(() => h())) : A({
                            preferredAdKind: "display",
                            provider: "a-ads",
                            screen: i.screen,
                            size: i.size
                        }).pipe(ve(() => h())) : i.provider === "direct" || i.provider === "persona" || i.provider === "cointraffic" ? k({
                            preferredAdKind: "display",
                            provider: "coinzilla",
                            screen: i.screen,
                            size: i.size
                        }).pipe(ve(() => h())) : h()
                }
            },
            D = i => (p.silly("getAdByAdUnit", i), y(i).pipe(ve(() => w(i)), ie(a => a ? X(a) : w(i))));
        return {
            getAd: i => {
                p.silly("getAd", i);
                const a = x(i);
                return D(a)
            },
            getAdByAdUnit: D,
            getFallbackAd: w,
            hideAd: i => {
                const a = m.getValue();
                xt(a, i) || (m.next([...a, i]), u.track(Pr(i)))
            },
            notifyViewed: i => {
                switch (u.track(Hr(i)), i.kind) {
                    case "native":
                        {
                            switch (i.provider) {
                                case "direct":
                                    return d.notifyViewed(i);
                                case "fallback":
                                case "coinzilla":
                                    return e.notifyViewed(i)
                            }
                            break
                        }
                    case "display":
                        switch (i.provider) {
                            case "direct":
                                return d.notifyViewed(i);
                            case "coinzilla":
                            case "google":
                            case "a-ads":
                            case "persona":
                            case "cointraffic":
                                return X(void 0)
                        }
                }
            },
            notifyHidden: i => (u.track(Fr(i)), X(void 0)),
            findAdUnit: x,
            isAdLocationHidden: i => gr(m, a => xt(a, i))
        }
    });

function xt(e, t) {
    return e.some(r => r.screen === t.screen)
}

function Kt(e) {
    return e.size === "responsive" ? e.size : `${e.size.width}x${e.size.height}`
}

function Mr(e) {
    switch (e.adKind) {
        case "native":
            {
                switch (e.provider) {
                    case "direct":
                    case "coinzilla":
                        return {
                            event: "adFallback",
                            data: {
                                adUnitKind: e.adKind,
                                adUnitScreen: e.screen,
                                adUnitID: e.id
                            }
                        };
                    case "fallback":
                        return {
                            event: "adFallback",
                            data: {
                                adUnitKind: e.adKind
                            }
                        }
                }
                break
            }
        case "display":
            return {
                event: "adFallback",
                data: {
                    adUnitKind: e.adKind,
                    adUnitScreen: e.screen,
                    adUnitID: e.id.toString(),
                    adUnitProvider: e.provider,
                    adUnitSize: Kt(e)
                }
            }
    }
}

function Hr(e) {
    switch (e.kind) {
        case "native":
            return {
                event: "adImpression",
                data: {
                    adKind: e.kind
                }
            };
        case "display":
            return {
                event: "adImpression",
                data: {
                    adKind: e.kind,
                    adUnitKind: e.adUnit.adKind,
                    adUnitScreen: e.adUnit.screen,
                    adUnitID: e.adUnit.id.toString(),
                    adUnitProvider: e.adUnit.provider,
                    adUnitSize: Kt(e.adUnit)
                }
            }
    }
}

function Pr(e) {
    switch (e.preferredAdKind) {
        case "native":
            return {
                event: "hideAd",
                data: {
                    kind: e.preferredAdKind,
                    screen: e.screen
                }
            };
        case "display":
            return {
                event: "hideAd",
                data: {
                    kind: e.preferredAdKind,
                    screen: e.screen,
                    provider: e.provider
                }
            }
    }
}

function Fr(e) {
    switch (e.preferredAdKind) {
        case "native":
            return {
                event: "adHidden",
                data: {
                    kind: e.preferredAdKind,
                    screen: e.screen
                }
            };
        case "display":
            return {
                event: "adHidden",
                data: {
                    kind: e.preferredAdKind,
                    screen: e.screen,
                    provider: e.provider
                }
            }
    }
}
const Wr = e => {
        const [t, r] = f.useState(() => e.getValue());
        return f.useEffect(() => {
            r(() => e.getValue());
            const n = e.subscribe(s => r(() => s));
            return () => n.unsubscribe()
        }, [e]), t
    },
    Br = e => {
        const [t, r] = f.useState(e), n = f.useCallback(() => r(!0), []), s = f.useCallback(() => r(!1), []), c = f.useCallback(() => r(u => !u), []);
        return {
            value: t,
            enable: n,
            disable: s,
            toggle: c
        }
    },
    Nr = F.enum(["idle", "loading", "ready", "error"]),
    Vr = e => {
        const [t, r] = f.useState(e ? "loading" : "idle");
        return f.useEffect(() => {
            if (!e) {
                r("idle");
                return
            }
            let n = document.querySelector(`script[src='${e}']`);
            if (n) {
                const c = Nr.safeParse(n.getAttribute("data-status"));
                c.success && r(c.data)
            } else {
                n = document.createElement("script"), n.src = e, n.async = !0, n.setAttribute("data-status", "loading"), document.body.appendChild(n);
                const c = u => {
                    n == null || n.setAttribute("data-status", u.type === "load" ? "ready" : "error")
                };
                n.addEventListener("load", c), n.addEventListener("error", c)
            }
            const s = c => {
                r(c.type === "load" ? "ready" : "error")
            };
            return n.addEventListener("load", s), n.addEventListener("error", s), () => {
                n && (n.removeEventListener("load", s), n.removeEventListener("error", s))
            }
        }, [e]), t
    };
var Kr = Dn(function(t, r) {
    const n = Cn("Badge", t),
        {
            className: s,
            ...c
        } = _n(t);
    return l.jsx(An.span, {
        ref: r,
        className: En("chakra-badge", t.className),
        ...c,
        __css: {
            display: "inline-block",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            ...n
        }
    })
});
Kr.displayName = "Badge";
const Fe = "@dexscreener/postmessage-bus/user-message",
    Or = F.object({
        data: F.unknown(),
        origin: F.string(),
        source: F.unknown()
    }),
    Le = "@dexscreener/postmessage-bus/handshake",
    yt = "@dexscreener/postmessage-bus/acknowledge",
    qr = F.object({
        [Fe]: F.unknown()
    }),
    $r = e => {
        function t(w) {
            return w.receiver.postMessage(w.message, "*")
        }
        const {
            receiver: r,
            incomingSchema: n,
            outgoingSchema: s,
            sender: c
        } = e, u = e.logger.getChildLogger({
            name: e.name ? ? "PostMessageBus"
        }), d = [], g = new Ln;
        let o = r,
            p = !1,
            m = !1;

        function x() {
            m = !0, c.removeEventListener("message", k), d.length = 0, o = void 0, g.complete()
        }

        function y() {
            o = void 0, p = !1
        }

        function h(w) {
            return p = !1, m || (o = w, o && t({
                receiver: o,
                message: Le
            })), {
                dispose: y
            }
        }

        function C(w) {
            const D = {
                [Fe]: s.parse(w)
            };
            if (o)
                if (p) {
                    t({
                        receiver: o,
                        message: D
                    });
                    return
                } else {
                    d.push(D), t({
                        receiver: o,
                        message: Le
                    });
                    return
                }
            else {
                d.push(D);
                return
            }
        }

        function A(w) {
            for (const D of d) t({
                receiver: w,
                message: D
            });
            d.length = 0
        }

        function k(w) {
            if (!o) return;
            const D = Or.safeParse(w);
            if (!D.success || o !== D.data.source) return;
            const {
                data: {
                    data: i
                }
            } = D;
            if (i === Le) {
                p = !0, t({
                    receiver: o,
                    message: yt
                }), A(o);
                return
            } else if (i === yt) {
                p = !0, A(o);
                return
            }
            const a = qr.safeParse(i);
            if (a.success) {
                const {
                    [Fe]: _
                } = a.data;
                if (n !== void 0) {
                    const v = n.safeParse(_);
                    v.success ? g.next(v.data) : u.warn("Cannot parse incoming message", v.error, _)
                }
            }
        }
        return c.addEventListener("message", k), o && t({
            receiver: o,
            message: Le
        }), {
            emit: C,
            message: g,
            setReceiver: h,
            dispose: x
        }
    },
    Ot = f.memo(e => {
        const {
            onHide: t,
            width: r,
            contentWidth: n,
            height: s,
            src: c,
            isShown: u
        } = e, d = ae.useInjectable(Be), [g, o] = f.useState(!0), p = f.useMemo(() => $r({
            logger: d,
            sender: window,
            incomingSchema: vr,
            outgoingSchema: F.never()
        }), [d]);
        f.useEffect(() => () => p == null ? void 0 : p.dispose(), [p]);
        const m = f.useRef(null);
        f.useEffect(() => {
            var y;
            !u || !((y = m.current) != null && y.contentWindow) || !p || p.setReceiver(m.current.contentWindow)
        }, [p, u]);
        const x = Y(e);
        return f.useEffect(() => {
            if (!u) return;
            let y;
            const h = p == null ? void 0 : p.message.subscribe({
                next: C => {
                    switch (clearTimeout(y), C.kind) {
                        case "ready":
                            {
                                o(!1);
                                break
                            }
                        case "error":
                            {
                                x.current.onFallbackRequest();
                                break
                            }
                    }
                },
                error: () => {
                    clearTimeout(y), x.current.onFallbackRequest()
                }
            });
            return y = setTimeout(() => {
                h == null || h.unsubscribe(), x.current.onFallbackRequest()
            }, 5e3), () => {
                h == null || h.unsubscribe(), clearTimeout(y)
            }
        }, [p == null ? void 0 : p.message, u, x]), l.jsx(ze, {
            contentWidth: n,
            width: r,
            height: s,
            onHide: t,
            isLoaded: !g,
            children: u && l.jsx($e, {
                ref: m,
                src: c,
                width: "100%",
                height: "100%"
            })
        })
    }),
    Gr = Ne(),
    bt = f.memo(function(t) {
        const {
            onHide: r,
            width: n,
            adUnit: s,
            height: c,
            isShown: u
        } = t, d = ae.useInjectable(Gr), g = f.useMemo(() => {
            const m = new URL(d.DS_WEB_ADS_PAGES_PUBLIC_ORIGIN);
            return m.pathname = "/cointraffic", m.searchParams.set("id", s.id), m
        }, [s.id, d.DS_WEB_ADS_PAGES_PUBLIC_ORIGIN]), o = Y(t), p = f.useCallback(() => o.current.onFallbackRequest(o.current.adUnit), [o]);
        return l.jsx(Ot, {
            isShown: u,
            contentWidth: `${s.size.width}px`,
            width: n,
            height: c,
            onHide: r,
            src: g.toString(),
            onFallbackRequest: p
        })
    }),
    wt = f.memo(e => {
        const {
            height: t,
            width: r,
            onHide: n,
            ad: s,
            onView: c
        } = e, u = Y(s), d = f.useCallback(() => {
            u.current && c(u.current)
        }, [u, c]);
        return l.jsx(ze, {
            contentWidth: s ? s.adUnit.size === "responsive" ? "100%" : `${s.adUnit.size.width}px` : void 0,
            width: r,
            height: t,
            onHide: n,
            isLoaded: !!s,
            advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
            children: s && l.jsx($e, {
                onLoad: d,
                id: `zone-${s.adUnit.id}`,
                width: "100%",
                height: "100%",
                src: s.iframeURL
            })
        })
    }),
    kt = f.memo(e => {
        const {
            height: t,
            onHide: r,
            ad: n,
            width: s,
            onView: c,
            onFallbackRequest: u,
            adUnit: d
        } = e, g = Y(n), [o, p] = f.useState(!1), m = f.useCallback(() => {
            g.current && (p(!0), c(g.current))
        }, [g, c]), x = f.useCallback(() => {
            u(d)
        }, [d, u]);
        return l.jsx(ze, {
            contentWidth: n ? Zr(n.adUnit) : void 0,
            width: s,
            height: t,
            onHide: r,
            isLoaded: o,
            children: n && l.jsxs(ke, {
                href: n.url,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                children: [n.source === "image" && l.jsx(Ie, {
                    src: n.src,
                    onLoad: m,
                    onError: x
                }), n.source === "iframe" && l.jsx($e, {
                    style: {
                        pointerEvents: "none"
                    },
                    onLoad: m,
                    onError: x,
                    width: "100%",
                    height: "100%",
                    src: n.src
                })]
            })
        })
    });

function Zr(e) {
    return e.size === "responsive" ? "100%" : `${e.size.width}px`
}
window.googletag = window.googletag || {
    cmd: []
};
const Dt = f.memo(e => {
        const {
            height: t,
            width: r,
            adUnit: n,
            onFallbackRequest: s,
            onHide: c,
            isShown: u,
            ad: d,
            onView: g
        } = e, o = ae.useInjectable(Be), p = Y(d), m = Vr(u ? "https://securepubads.g.doubleclick.net/tag/js/gpt.js" : void 0);
        f.useEffect(() => {
            m === "error" && (o.error({
                event: {
                    id: "failedToLoadGPTScript"
                }
            }), s(n))
        }, [n, o, s, m]);
        const x = f.useId(),
            y = f.useRef(!1),
            [h, C] = f.useState(!1),
            A = f.useRef(),
            k = f.useRef(),
            w = f.useRef(u);
        return f.useEffect(() => {
            if (clearTimeout(k.current), !u) return;
            w.current = !0, k.current = setTimeout(() => {
                googletag.cmd.push(() => {
                    googletag.pubads().removeEventListener("slotRenderEnded", D)
                }), y.current || (y.current = !0, s(n))
            }, 5e3);

            function D(i) {
                if (i.slot === A.current) {
                    if (clearTimeout(k.current), y.current) return;
                    i.isEmpty ? s(n) : (C(!0), p.current && g(p.current))
                }
            }
            return C(!1), googletag.cmd.push(() => {
                var i;
                try {
                    if (y.current) return;
                    A.current && (googletag.destroySlots([A.current]), A.current = void 0);
                    const a = googletag.pubads();
                    a.addEventListener("slotRenderEnded", D), A.current = (i = googletag.defineSlot(n.id, n.size === "responsive" ? "fluid" : [n.size.width, n.size.height], x)) == null ? void 0 : i.addService(a), googletag.enableServices(), googletag.display(x)
                } catch (a) {
                    o.error({
                        event: {
                            id: "failedToRenderGoogleAd",
                            data: {
                                error: a
                            }
                        }
                    }), s(n)
                }
            }), () => {
                clearTimeout(k.current), w.current && googletag.cmd.push(() => {
                    try {
                        googletag.pubads().removeEventListener("slotRenderEnded", D), A.current && (googletag.destroySlots([A.current]), A.current = void 0)
                    } catch (i) {
                        o.error({
                            event: {
                                id: "failedToDestroyGoogleAd",
                                data: {
                                    error: i
                                }
                            }
                        })
                    }
                })
            }
        }, [u, n, x, o, s, A, p, g]), f.useEffect(() => () => {
            y.current = !0
        }, []), l.jsx(ze, {
            contentWidth: "100%",
            width: r,
            height: t,
            onHide: c,
            isLoaded: h,
            children: l.jsx(M, {
                width: "100%",
                height: "100%",
                id: x
            })
        })
    }),
    Xr = Ne(),
    Ct = f.memo(function(t) {
        const {
            onHide: r,
            width: n,
            adUnit: s,
            height: c,
            isShown: u
        } = t, d = ae.useInjectable(Xr), g = f.useMemo(() => {
            const m = new URL(d.DS_WEB_ADS_PAGES_PUBLIC_ORIGIN);
            return m.pathname = "/persona", m.searchParams.set("ad-unit-id", s.id), m
        }, [s.id, d.DS_WEB_ADS_PAGES_PUBLIC_ORIGIN]), o = Y(t), p = f.useCallback(() => o.current.onFallbackRequest(o.current.adUnit), [o]);
        return l.jsx(Ot, {
            isShown: u,
            contentWidth: `${s.size.width}px`,
            width: n,
            height: c,
            onHide: r,
            src: g.toString(),
            onFallbackRequest: p
        })
    });
var qt = {
        exports: {}
    },
    Yr = qt.exports = {};
Yr.forEach = function(e, t) {
    for (var r = 0; r < e.length; r++) {
        var n = t(e[r]);
        if (n) return n
    }
};
var $t = qt.exports,
    Jr = function(e) {
        var t = e.stateHandler.getState;

        function r(u) {
            var d = t(u);
            return d && !!d.isDetectable
        }

        function n(u) {
            t(u).isDetectable = !0
        }

        function s(u) {
            return !!t(u).busy
        }

        function c(u, d) {
            t(u).busy = !!d
        }
        return {
            isDetectable: r,
            markAsDetectable: n,
            isBusy: s,
            markBusy: c
        }
    },
    Qr = function(e) {
        var t = {};

        function r(u) {
            var d = e.get(u);
            return d === void 0 ? [] : t[d] || []
        }

        function n(u, d) {
            var g = e.get(u);
            t[g] || (t[g] = []), t[g].push(d)
        }

        function s(u, d) {
            for (var g = r(u), o = 0, p = g.length; o < p; ++o)
                if (g[o] === d) {
                    g.splice(o, 1);
                    break
                }
        }

        function c(u) {
            var d = r(u);
            d && (d.length = 0)
        }
        return {
            get: r,
            add: n,
            removeListener: s,
            removeAllListeners: c
        }
    },
    ei = function() {
        var e = 1;

        function t() {
            return e++
        }
        return {
            generate: t
        }
    },
    ti = function(e) {
        var t = e.idGenerator,
            r = e.stateHandler.getState;

        function n(c) {
            var u = r(c);
            return u && u.id !== void 0 ? u.id : null
        }

        function s(c) {
            var u = r(c);
            if (!u) throw new Error("setId required the element to have a resize detection state.");
            var d = t.generate();
            return u.id = d, d
        }
        return {
            get: n,
            set: s
        }
    },
    ni = function(e) {
        function t() {}
        var r = {
            log: t,
            warn: t,
            error: t
        };
        if (!e && window.console) {
            var n = function(s, c) {
                s[c] = function() {
                    var d = console[c];
                    if (d.apply) d.apply(console, arguments);
                    else
                        for (var g = 0; g < arguments.length; g++) d(arguments[g])
                }
            };
            n(r, "log"), n(r, "warn"), n(r, "error")
        }
        return r
    },
    Gt = {
        exports: {}
    },
    Zt = Gt.exports = {};
Zt.isIE = function(e) {
    function t() {
        var n = navigator.userAgent.toLowerCase();
        return n.indexOf("msie") !== -1 || n.indexOf("trident") !== -1 || n.indexOf(" edge/") !== -1
    }
    if (!t()) return !1;
    if (!e) return !0;
    var r = function() {
        var n, s = 3,
            c = document.createElement("div"),
            u = c.getElementsByTagName("i");
        do c.innerHTML = "<!--[if gt IE " + ++s + "]><i></i><![endif]-->"; while (u[0]);
        return s > 4 ? s : n
    }();
    return e === r
};
Zt.isLegacyOpera = function() {
    return !!window.opera
};
var Xt = Gt.exports,
    Yt = {
        exports: {}
    },
    ri = Yt.exports = {};
ri.getOption = ii;

function ii(e, t, r) {
    var n = e[t];
    return n == null && r !== void 0 ? r : n
}
var si = Yt.exports,
    _t = si,
    ai = function(t) {
        t = t || {};
        var r = t.reporter,
            n = _t.getOption(t, "async", !0),
            s = _t.getOption(t, "auto", !0);
        s && !n && (r && r.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
        var c = At(),
            u, d = !1;

        function g(h, C) {
            !d && s && n && c.size() === 0 && m(), c.add(h, C)
        }

        function o() {
            for (d = !0; c.size();) {
                var h = c;
                c = At(), h.process()
            }
            d = !1
        }

        function p(h) {
            d || (h === void 0 && (h = n), u && (x(u), u = null), h ? m() : o())
        }

        function m() {
            u = y(o)
        }

        function x(h) {
            var C = clearTimeout;
            return C(h)
        }

        function y(h) {
            var C = function(A) {
                return setTimeout(A, 0)
            };
            return C(h)
        }
        return {
            add: g,
            force: p
        }
    };

function At() {
    var e = {},
        t = 0,
        r = 0,
        n = 0;

    function s(d, g) {
        g || (g = d, d = 0), d > r ? r = d : d < n && (n = d), e[d] || (e[d] = []), e[d].push(g), t++
    }

    function c() {
        for (var d = n; d <= r; d++)
            for (var g = e[d], o = 0; o < g.length; o++) {
                var p = g[o];
                p()
            }
    }

    function u() {
        return t
    }
    return {
        add: s,
        process: c,
        size: u
    }
}
var Ze = "_erd";

function oi(e) {
    return e[Ze] = {}, Jt(e)
}

function Jt(e) {
    return e[Ze]
}

function di(e) {
    delete e[Ze]
}
var ci = {
        initState: oi,
        getState: Jt,
        cleanState: di
    },
    xe = Xt,
    li = function(e) {
        e = e || {};
        var t = e.reporter,
            r = e.batchProcessor,
            n = e.stateHandler.getState;
        if (!t) throw new Error("Missing required dependency: reporter.");

        function s(o, p) {
            function m() {
                p(o)
            }
            if (xe.isIE(8)) n(o).object = {
                proxy: m
            }, o.attachEvent("onresize", m);
            else {
                var x = d(o);
                if (!x) throw new Error("Element is not detectable by this strategy.");
                x.contentDocument.defaultView.addEventListener("resize", m)
            }
        }

        function c(o) {
            var p = e.important ? " !important; " : "; ";
            return (o.join(p) + p).trim()
        }

        function u(o, p, m) {
            m || (m = p, p = o, o = null), o = o || {};

            function x(y, h) {
                var C = c(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]),
                    A = !1,
                    k = window.getComputedStyle(y),
                    w = y.offsetWidth,
                    D = y.offsetHeight;
                n(y).startSize = {
                    width: w,
                    height: D
                };

                function i() {
                    function a() {
                        if (k.position === "static") {
                            y.style.setProperty("position", "relative", o.important ? "important" : "");
                            var z = function(P, R, U, E) {
                                function j(W) {
                                    return W.replace(/[^-\d\.]/g, "")
                                }
                                var N = U[E];
                                N !== "auto" && j(N) !== "0" && (P.warn("An element that is positioned static has style." + E + "=" + N + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + E + " will be set to 0. Element: ", R), R.style.setProperty(E, "0", o.important ? "important" : ""))
                            };
                            z(t, y, k, "top"), z(t, y, k, "right"), z(t, y, k, "bottom"), z(t, y, k, "left")
                        }
                    }

                    function _() {
                        A || a();

                        function z(R, U) {
                            if (!R.contentDocument) {
                                var E = n(R);
                                E.checkForObjectDocumentTimeoutId && window.clearTimeout(E.checkForObjectDocumentTimeoutId), E.checkForObjectDocumentTimeoutId = setTimeout(function() {
                                    E.checkForObjectDocumentTimeoutId = 0, z(R, U)
                                }, 100);
                                return
                            }
                            U(R.contentDocument)
                        }
                        var P = this;
                        z(P, function(U) {
                            h(y)
                        })
                    }
                    k.position !== "" && (a(), A = !0);
                    var v = document.createElement("object");
                    v.style.cssText = C, v.tabIndex = -1, v.type = "text/html", v.setAttribute("aria-hidden", "true"), v.onload = _, xe.isIE() || (v.data = "about:blank"), n(y) && (y.appendChild(v), n(y).object = v, xe.isIE() && (v.data = "about:blank"))
                }
                r ? r.add(i) : i()
            }
            xe.isIE(8) ? m(p) : x(p, m)
        }

        function d(o) {
            return n(o).object
        }

        function g(o) {
            if (n(o)) {
                var p = d(o);
                p && (xe.isIE(8) ? o.detachEvent("onresize", p.proxy) : o.removeChild(p), n(o).checkForObjectDocumentTimeoutId && window.clearTimeout(n(o).checkForObjectDocumentTimeoutId), delete n(o).object)
            }
        }
        return {
            makeDetectable: u,
            addListener: s,
            uninstall: g
        }
    },
    pi = $t.forEach,
    ui = function(e) {
        e = e || {};
        var t = e.reporter,
            r = e.batchProcessor,
            n = e.stateHandler.getState,
            s = e.idHandler;
        if (!r) throw new Error("Missing required dependency: batchProcessor");
        if (!t) throw new Error("Missing required dependency: reporter.");
        var c = p(),
            u = "erd_scroll_detection_scrollbar_style",
            d = "erd_scroll_detection_container";

        function g(i) {
            m(i, u, d)
        }
        g(window.document);

        function o(i) {
            var a = e.important ? " !important; " : "; ";
            return (i.join(a) + a).trim()
        }

        function p() {
            var i = 500,
                a = 500,
                _ = document.createElement("div");
            _.style.cssText = o(["position: absolute", "width: " + i * 2 + "px", "height: " + a * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
            var v = document.createElement("div");
            v.style.cssText = o(["position: absolute", "width: " + i + "px", "height: " + a + "px", "overflow: scroll", "visibility: none", "top: " + -i * 3 + "px", "left: " + -a * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), v.appendChild(_), document.body.insertBefore(v, document.body.firstChild);
            var z = i - v.clientWidth,
                P = a - v.clientHeight;
            return document.body.removeChild(v), {
                width: z,
                height: P
            }
        }

        function m(i, a, _) {
            function v(U, E) {
                E = E || function(N) {
                    i.head.appendChild(N)
                };
                var j = i.createElement("style");
                return j.innerHTML = U, j.id = a, E(j), j
            }
            if (!i.getElementById(a)) {
                var z = _ + "_animation",
                    P = _ + "_animation_active",
                    R = `/* Created by the element-resize-detector library. */
`;
                R += "." + _ + " > div::-webkit-scrollbar { " + o(["display: none"]) + ` }

`, R += "." + P + " { " + o(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + z, "animation-name: " + z]) + ` }
`, R += "@-webkit-keyframes " + z + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, R += "@keyframes " + z + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", v(R)
            }
        }

        function x(i) {
            i.className += " " + d + "_animation_active"
        }

        function y(i, a, _) {
            if (i.addEventListener) i.addEventListener(a, _);
            else if (i.attachEvent) i.attachEvent("on" + a, _);
            else return t.error("[scroll] Don't know how to add event listeners.")
        }

        function h(i, a, _) {
            if (i.removeEventListener) i.removeEventListener(a, _);
            else if (i.detachEvent) i.detachEvent("on" + a, _);
            else return t.error("[scroll] Don't know how to remove event listeners.")
        }

        function C(i) {
            return n(i).container.childNodes[0].childNodes[0].childNodes[0]
        }

        function A(i) {
            return n(i).container.childNodes[0].childNodes[0].childNodes[1]
        }

        function k(i, a) {
            var _ = n(i).listeners;
            if (!_.push) throw new Error("Cannot add listener to an element that is not detectable.");
            n(i).listeners.push(a)
        }

        function w(i, a, _) {
            _ || (_ = a, a = i, i = null), i = i || {};

            function v() {
                if (i.debug) {
                    var b = Array.prototype.slice.call(arguments);
                    if (b.unshift(s.get(a), "Scroll: "), t.log.apply) t.log.apply(null, b);
                    else
                        for (var L = 0; L < b.length; L++) t.log(b[L])
                }
            }

            function z(b) {
                function L(I) {
                    var O = I.getRootNode && I.getRootNode().contains(I);
                    return I === I.ownerDocument.body || I.ownerDocument.body.contains(I) || O
                }
                return !L(b) || window.getComputedStyle(b) === null
            }

            function P(b) {
                var L = n(b).container.childNodes[0],
                    I = window.getComputedStyle(L);
                return !I.width || I.width.indexOf("px") === -1
            }

            function R() {
                var b = window.getComputedStyle(a),
                    L = {};
                return L.position = b.position, L.width = a.offsetWidth, L.height = a.offsetHeight, L.top = b.top, L.right = b.right, L.bottom = b.bottom, L.left = b.left, L.widthCSS = b.width, L.heightCSS = b.height, L
            }

            function U() {
                var b = R();
                n(a).startSize = {
                    width: b.width,
                    height: b.height
                }, v("Element start size", n(a).startSize)
            }

            function E() {
                n(a).listeners = []
            }

            function j() {
                if (v("storeStyle invoked."), !n(a)) {
                    v("Aborting because element has been uninstalled");
                    return
                }
                var b = R();
                n(a).style = b
            }

            function N(b, L, I) {
                n(b).lastWidth = L, n(b).lastHeight = I
            }

            function W(b) {
                return C(b).childNodes[0]
            }

            function ee() {
                return 2 * c.width + 1
            }

            function De() {
                return 2 * c.height + 1
            }

            function Ce(b) {
                return b + 10 + ee()
            }

            function _e(b) {
                return b + 10 + De()
            }

            function Qt(b) {
                return b * 2 + ee()
            }

            function en(b) {
                return b * 2 + De()
            }

            function Je(b, L, I) {
                var O = C(b),
                    te = A(b),
                    oe = Ce(L),
                    de = _e(I),
                    B = Qt(L),
                    S = en(I);
                O.scrollLeft = oe, O.scrollTop = de, te.scrollLeft = B, te.scrollTop = S
            }

            function Qe() {
                var b = n(a).container;
                if (!b) {
                    b = document.createElement("div"), b.className = d, b.style.cssText = o(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), n(a).container = b, x(b), a.appendChild(b);
                    var L = function() {
                        n(a).onRendered && n(a).onRendered()
                    };
                    y(b, "animationstart", L), n(a).onAnimationStart = L
                }
                return b
            }

            function tn() {
                function b() {
                    var T = n(a).style;
                    if (T.position === "static") {
                        a.style.setProperty("position", "relative", i.important ? "important" : "");
                        var Z = function(le, re, an, Ee) {
                            function on(dn) {
                                return dn.replace(/[^-\d\.]/g, "")
                            }
                            var Te = an[Ee];
                            Te !== "auto" && on(Te) !== "0" && (le.warn("An element that is positioned static has style." + Ee + "=" + Te + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + Ee + " will be set to 0. Element: ", re), re.style[Ee] = 0)
                        };
                        Z(t, a, T, "top"), Z(t, a, T, "right"), Z(t, a, T, "bottom"), Z(t, a, T, "left")
                    }
                }

                function L(T, Z, le, re) {
                    return T = T ? T + "px" : "0", Z = Z ? Z + "px" : "0", le = le ? le + "px" : "0", re = re ? re + "px" : "0", ["left: " + T, "top: " + Z, "right: " + re, "bottom: " + le]
                }
                if (v("Injecting elements"), !n(a)) {
                    v("Aborting because element has been uninstalled");
                    return
                }
                b();
                var I = n(a).container;
                I || (I = Qe());
                var O = c.width,
                    te = c.height,
                    oe = o(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]),
                    de = o(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(L(-(1 + O), -(1 + te), -te, -O))),
                    B = o(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                    S = o(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                    V = o(["position: absolute", "left: 0", "top: 0"]),
                    ne = o(["position: absolute", "width: 200%", "height: 200%"]),
                    $ = document.createElement("div"),
                    G = document.createElement("div"),
                    ce = document.createElement("div"),
                    tt = document.createElement("div"),
                    Ae = document.createElement("div"),
                    nt = document.createElement("div");
                $.dir = "ltr", $.style.cssText = oe, $.className = d, G.className = d, G.style.cssText = de, ce.style.cssText = B, tt.style.cssText = V, Ae.style.cssText = S, nt.style.cssText = ne, ce.appendChild(tt), Ae.appendChild(nt), G.appendChild(ce), G.appendChild(Ae), $.appendChild(G), I.appendChild($);

                function rt() {
                    var T = n(a);
                    T && T.onExpand ? T.onExpand() : v("Aborting expand scroll handler: element has been uninstalled")
                }

                function it() {
                    var T = n(a);
                    T && T.onShrink ? T.onShrink() : v("Aborting shrink scroll handler: element has been uninstalled")
                }
                y(ce, "scroll", rt), y(Ae, "scroll", it), n(a).onExpandScroll = rt, n(a).onShrinkScroll = it
            }

            function nn() {
                function b(B, S, V) {
                    var ne = W(B),
                        $ = Ce(S),
                        G = _e(V);
                    ne.style.setProperty("width", $ + "px", i.important ? "important" : ""), ne.style.setProperty("height", G + "px", i.important ? "important" : "")
                }

                function L(B) {
                    var S = a.offsetWidth,
                        V = a.offsetHeight,
                        ne = S !== n(a).lastWidth || V !== n(a).lastHeight;
                    v("Storing current size", S, V), N(a, S, V), r.add(0, function() {
                        if (ne) {
                            if (!n(a)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            if (!I()) {
                                v("Aborting because element container has not been initialized");
                                return
                            }
                            if (i.debug) {
                                var G = a.offsetWidth,
                                    ce = a.offsetHeight;
                                (G !== S || ce !== V) && t.warn(s.get(a), "Scroll: Size changed before updating detector elements.")
                            }
                            b(a, S, V)
                        }
                    }), r.add(1, function() {
                        if (!n(a)) {
                            v("Aborting because element has been uninstalled");
                            return
                        }
                        if (!I()) {
                            v("Aborting because element container has not been initialized");
                            return
                        }
                        Je(a, S, V)
                    }), ne && B && r.add(2, function() {
                        if (!n(a)) {
                            v("Aborting because element has been uninstalled");
                            return
                        }
                        if (!I()) {
                            v("Aborting because element container has not been initialized");
                            return
                        }
                        B()
                    })
                }

                function I() {
                    return !!n(a).container
                }

                function O() {
                    function B() {
                        return n(a).lastNotifiedWidth === void 0
                    }
                    v("notifyListenersIfNeeded invoked");
                    var S = n(a);
                    if (B() && S.lastWidth === S.startSize.width && S.lastHeight === S.startSize.height) return v("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                    if (S.lastWidth === S.lastNotifiedWidth && S.lastHeight === S.lastNotifiedHeight) return v("Not notifying: Size already notified");
                    v("Current size not notified, notifying..."), S.lastNotifiedWidth = S.lastWidth, S.lastNotifiedHeight = S.lastHeight, pi(n(a).listeners, function(V) {
                        V(a)
                    })
                }

                function te() {
                    if (v("startanimation triggered."), P(a)) {
                        v("Ignoring since element is still unrendered...");
                        return
                    }
                    v("Element rendered.");
                    var B = C(a),
                        S = A(a);
                    (B.scrollLeft === 0 || B.scrollTop === 0 || S.scrollLeft === 0 || S.scrollTop === 0) && (v("Scrollbars out of sync. Updating detector elements..."), L(O))
                }

                function oe() {
                    if (v("Scroll detected."), P(a)) {
                        v("Scroll event fired while unrendered. Ignoring...");
                        return
                    }
                    L(O)
                }
                if (v("registerListenersAndPositionElements invoked."), !n(a)) {
                    v("Aborting because element has been uninstalled");
                    return
                }
                n(a).onRendered = te, n(a).onExpand = oe, n(a).onShrink = oe;
                var de = n(a).style;
                b(a, de.width, de.height)
            }

            function rn() {
                if (v("finalizeDomMutation invoked."), !n(a)) {
                    v("Aborting because element has been uninstalled");
                    return
                }
                var b = n(a).style;
                N(a, b.width, b.height), Je(a, b.width, b.height)
            }

            function sn() {
                _(a)
            }

            function et() {
                v("Installing..."), E(), U(), r.add(0, j), r.add(1, tn), r.add(2, nn), r.add(3, rn), r.add(4, sn)
            }
            v("Making detectable..."), z(a) ? (v("Element is detached"), Qe(), v("Waiting until element is attached..."), n(a).onRendered = function() {
                v("Element is now attached"), et()
            }) : et()
        }

        function D(i) {
            var a = n(i);
            a && (a.onExpandScroll && h(C(i), "scroll", a.onExpandScroll), a.onShrinkScroll && h(A(i), "scroll", a.onShrinkScroll), a.onAnimationStart && h(a.container, "animationstart", a.onAnimationStart), a.container && i.removeChild(a.container))
        }
        return {
            makeDetectable: w,
            addListener: k,
            uninstall: D,
            initDocument: g
        }
    },
    we = $t.forEach,
    hi = Jr,
    mi = Qr,
    fi = ei,
    gi = ti,
    vi = ni,
    Et = Xt,
    xi = ai,
    J = ci,
    yi = li,
    bi = ui;

function Lt(e) {
    return Array.isArray(e) || e.length !== void 0
}

function St(e) {
    if (Array.isArray(e)) return e;
    var t = [];
    return we(e, function(r) {
        t.push(r)
    }), t
}

function jt(e) {
    return e && e.nodeType === 1
}
var wi = function(e) {
    e = e || {};
    var t;
    if (e.idHandler) t = {
        get: function(w) {
            return e.idHandler.get(w, !0)
        },
        set: e.idHandler.set
    };
    else {
        var r = fi(),
            n = gi({
                idGenerator: r,
                stateHandler: J
            });
        t = n
    }
    var s = e.reporter;
    if (!s) {
        var c = s === !1;
        s = vi(c)
    }
    var u = Q(e, "batchProcessor", xi({
            reporter: s
        })),
        d = {};
    d.callOnAdd = !!Q(e, "callOnAdd", !0), d.debug = !!Q(e, "debug", !1);
    var g = mi(t),
        o = hi({
            stateHandler: J
        }),
        p, m = Q(e, "strategy", "object"),
        x = Q(e, "important", !1),
        y = {
            reporter: s,
            batchProcessor: u,
            stateHandler: J,
            idHandler: t,
            important: x
        };
    if (m === "scroll" && (Et.isLegacyOpera() ? (s.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), m = "object") : Et.isIE(9) && (s.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), m = "object")), m === "scroll") p = bi(y);
    else if (m === "object") p = yi(y);
    else throw new Error("Invalid strategy name: " + m);
    var h = {};

    function C(w, D, i) {
        function a(U) {
            var E = g.get(U);
            we(E, function(N) {
                N(U)
            })
        }

        function _(U, E, j) {
            g.add(E, j), U && j(E)
        }
        if (i || (i = D, D = w, w = {}), !D) throw new Error("At least one element required.");
        if (!i) throw new Error("Listener required.");
        if (jt(D)) D = [D];
        else if (Lt(D)) D = St(D);
        else return s.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        var v = 0,
            z = Q(w, "callOnAdd", d.callOnAdd),
            P = Q(w, "onReady", function() {}),
            R = Q(w, "debug", d.debug);
        we(D, function(E) {
            J.getState(E) || (J.initState(E), t.set(E));
            var j = t.get(E);
            if (R && s.log("Attaching listener to element", j, E), !o.isDetectable(E)) {
                if (R && s.log(j, "Not detectable."), o.isBusy(E)) {
                    R && s.log(j, "System busy making it detectable"), _(z, E, i), h[j] = h[j] || [], h[j].push(function() {
                        v++, v === D.length && P()
                    });
                    return
                }
                return R && s.log(j, "Making detectable..."), o.markBusy(E, !0), p.makeDetectable({
                    debug: R,
                    important: x
                }, E, function(W) {
                    if (R && s.log(j, "onElementDetectable"), J.getState(W)) {
                        o.markAsDetectable(W), o.markBusy(W, !1), p.addListener(W, a), _(z, W, i);
                        var ee = J.getState(W);
                        if (ee && ee.startSize) {
                            var De = W.offsetWidth,
                                Ce = W.offsetHeight;
                            (ee.startSize.width !== De || ee.startSize.height !== Ce) && a(W)
                        }
                        h[j] && we(h[j], function(_e) {
                            _e()
                        })
                    } else R && s.log(j, "Element uninstalled before being detectable.");
                    delete h[j], v++, v === D.length && P()
                })
            }
            R && s.log(j, "Already detecable, adding listener."), _(z, E, i), v++
        }), v === D.length && P()
    }

    function A(w) {
        if (!w) return s.error("At least one element is required.");
        if (jt(w)) w = [w];
        else if (Lt(w)) w = St(w);
        else return s.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        we(w, function(D) {
            g.removeAllListeners(D), p.uninstall(D), J.cleanState(D)
        })
    }

    function k(w) {
        p.initDocument && p.initDocument(w)
    }
    return {
        listenTo: C,
        removeListener: g.removeListener,
        removeAllListeners: g.removeAllListeners,
        uninstall: A,
        initDocument: k
    }
};

function Q(e, t, r) {
    var n = e[t];
    return n == null && r !== void 0 ? r : n
}
const ki = Sn(wi),
    Xe = e => {
        const {
            containerProps: t,
            closeButtonProps: r,
            onClose: n,
            advertiseLink: s
        } = e, c = f.useCallback(u => {
            u.preventDefault(), n == null || n()
        }, [n]);
        return l.jsxs(M, {
            display: "flex",
            alignItems: "center",
            ...t,
            children: [s !== void 0 && l.jsx(ke, {
                pointerEvents: "auto",
                href: s,
                variant: "link",
                size: "sm",
                fontSize: "11px",
                fontWeight: "normal",
                opacity: .5,
                target: "_blank",
                rel: "noreferrer noopener",
                _hover: {
                    opacity: .8
                },
                _focus: {
                    outline: "none"
                },
                children: l.jsxs(Ve, {
                    spacing: "3px",
                    children: [l.jsx(se, {
                        as: jn
                    }), l.jsx(K, {
                        children: "Ad"
                    })]
                })
            }), l.jsx(Rn, {
                pointerEvents: "auto",
                onClick: c,
                size: "sm",
                icon: l.jsx(se, {
                    as: In
                }),
                "aria-label": "Hide",
                variant: "link",
                minW: "23px",
                py: "7px",
                opacity: .5,
                _hover: {
                    opacity: .8
                },
                _focus: {},
                ...r
            })]
        })
    },
    Ye = f.memo(e => {
        const {
            title: t
        } = e, r = Pt("accent.600", "accent.150");
        return l.jsx(K, {
            as: "span",
            fontWeight: "semibold",
            fontSize: {
                base: "sm",
                lg: "md"
            },
            noOfLines: 1,
            color: r,
            children: t
        })
    }),
    Di = f.memo(e => {
        const {
            onHide: t,
            ad: r,
            height: n
        } = e, {
            colorMode: s
        } = Ke(), c = r && r.url, u = c ? ke : M, d = f.useRef(null), [g, o] = f.useState();
        f.useEffect(() => {
            const x = d.current;
            let y;
            return x && (y = ki({
                strategy: "scroll"
            }), y.listenTo(x, h => {
                o(h.getBoundingClientRect().height)
            })), () => {
                x && y && y.uninstall(x)
            }
        }, []);
        const p = g !== void 0 && g > 150,
            m = Pt("accent.600", "accent.150");
        return l.jsxs(M, {
            position: "relative",
            children: [l.jsxs(u, {
                _focus: {
                    outline: "none"
                },
                display: "flex",
                alignItems: "center",
                position: "relative",
                href: r == null ? void 0 : r.url,
                target: "_blank",
                rel: "sponsored noreferrer noopener",
                width: "100%",
                height: n,
                pt: "7px",
                pb: "8px",
                px: 2,
                pl: "10px",
                borderWidth: 1,
                borderRadius: "md",
                borderColor: q("gray.100", "blue.850", s),
                transition: "background-color 0.25s",
                cursor: c ? "pointer" : "default",
                _hover: {
                    textDecoration: "none",
                    bg: c ? q("gray.50", "blue.875", s) : "initial"
                },
                ref: d,
                children: [!(r && g !== void 0) && l.jsx(Ge, {}), r && g !== void 0 && l.jsxs(He, {
                    alignItems: "stretch",
                    flex: 1,
                    spacing: p ? "10px" : "3px",
                    children: [(r.thumbnail || r.title) && l.jsxs(zn, {
                        direction: p ? "column" : "row",
                        spacing: p ? 2 : 1,
                        alignItems: "center",
                        children: [r.thumbnail && l.jsx(Ie, {
                            src: r.thumbnail,
                            w: "20px",
                            h: "20px"
                        }), r.title && l.jsx(Ye, {
                            title: r.title
                        })]
                    }), !p && (r.description || r.callToAction) && l.jsxs(K, {
                        fontSize: "sm",
                        lineHeight: "15px",
                        noOfLines: 2,
                        children: [r.description && l.jsx(be, {
                            children: r.description
                        }), r.callToAction && l.jsx(be, {
                            paddingLeft: r.description ? 1 : 0,
                            color: m,
                            fontWeight: "semibold",
                            children: r.callToAction
                        })]
                    }), p && (r.description || r.callToAction) && l.jsxs(He, {
                        spacing: 3,
                        lineHeight: "20px",
                        fontSize: "sm",
                        alignItems: "center",
                        children: [r.description && l.jsx(be, {
                            noOfLines: 4,
                            textAlign: "center",
                            children: r.description
                        }), r.callToAction && l.jsx(be, {
                            color: m,
                            fontWeight: "semibold",
                            children: r.callToAction
                        })]
                    })]
                })]
            }), r && l.jsx(Xe, {
                advertiseLink: r.advertiseLink,
                containerProps: {
                    pos: "absolute",
                    top: 0,
                    right: "3px"
                },
                onClose: t
            })]
        })
    }),
    Rt = 66,
    It = 25,
    Ci = f.memo(e => {
        const {
            ad: t,
            onHide: r,
            height: n
        } = e, {
            colorMode: s
        } = Ke(), c = t && t.url, u = c ? ke : M, d = q("white", "blue.950", s);
        return l.jsxs(M, {
            position: "relative",
            children: [l.jsxs(u, {
                _focus: {
                    outline: "none"
                },
                href: t == null ? void 0 : t.url,
                target: "_blank",
                rel: "sponsored noreferrer noopener",
                height: n,
                pos: "relative",
                display: "flex",
                alignItems: "center",
                padding: 2,
                borderColor: q("gray.100", "blue.900", s),
                bg: d,
                px: {
                    base: "10px",
                    md: 3
                },
                pt: {
                    base: "6px",
                    md: 3
                },
                pb: {
                    base: "6px",
                    md: 3
                },
                cursor: c ? "pointer" : "default",
                _hover: {
                    textDecoration: "none",
                    bg: c ? q("gray.50", "blue.900", s) : d
                },
                borderWidth: 1,
                borderRadius: "md",
                children: [!t && l.jsx(Ge, {}), t && l.jsxs(M, {
                    display: "flex",
                    flexDir: {
                        base: "column",
                        md: "row"
                    },
                    fontSize: {
                        base: "sm",
                        md: "md"
                    },
                    w: "100%",
                    alignItems: {
                        base: "flex-start",
                        md: "center"
                    },
                    paddingRight: {
                        md: t.advertiseLink === void 0 ? `${It}px` : `${Rt}px`
                    },
                    children: [l.jsxs(Ve, {
                        align: {
                            base: "flex-start",
                            md: "center"
                        },
                        spacing: 1,
                        flexShrink: 0,
                        children: [t.thumbnail && l.jsx(Ie, {
                            alt: "thumbnail",
                            src: t.thumbnail,
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            alignSelf: "center"
                        }), t.title && l.jsx(Ye, {
                            title: t.title
                        })]
                    }), l.jsx(M, {
                        lineHeight: "15px",
                        fontSize: "sm",
                        display: "flex",
                        flexDirection: "row",
                        width: {
                            base: "100%",
                            md: "initial"
                        },
                        children: l.jsxs(K, {
                            as: "span",
                            noOfLines: 2,
                            ml: {
                                base: 0,
                                md: t.thumbnail || t.title ? 2 : 0
                            },
                            children: [t.description && l.jsx(K, {
                                as: "span",
                                children: t.description
                            }), t.callToAction && l.jsx(K, {
                                as: "span",
                                ml: {
                                    base: 1,
                                    lg: 2
                                },
                                color: q("accent.600", "accent.150", s),
                                fontWeight: "semibold",
                                children: t.callToAction
                            })]
                        })
                    })]
                })]
            }), t && l.jsx(Xe, {
                advertiseLink: t.advertiseLink,
                containerProps: {
                    pointerEvents: "none",
                    justifyContent: "flex-end",
                    width: t.advertiseLink === void 0 ? `${It}px` : `${Rt}px`,
                    pos: "absolute",
                    top: 0,
                    bottom: {
                        md: 0
                    },
                    right: {
                        base: 0,
                        md: 2
                    }
                },
                closeButtonProps: {
                    ml: {
                        md: 2
                    }
                },
                onClose: r
            })]
        })
    }),
    zt = 66,
    Tt = 25,
    _i = f.memo(e => {
        const {
            ad: t,
            onHide: r,
            height: n
        } = e, {
            colorMode: s
        } = Ke(), c = t && t.url, u = c ? ke : M, d = q("white", "gray.925", s);
        return l.jsxs(M, {
            position: "relative",
            children: [l.jsxs(u, {
                _focus: {
                    outline: "none"
                },
                href: t == null ? void 0 : t.url,
                target: "_blank",
                rel: "sponsored noreferrer noopener",
                height: n,
                pos: "relative",
                display: "flex",
                alignItems: "center",
                padding: 2,
                borderColor: q("gray.100", "gray.875", s),
                bg: d,
                px: {
                    base: "10px",
                    md: 3
                },
                pt: {
                    base: "6px",
                    md: 3
                },
                pb: {
                    base: "6px",
                    md: 3
                },
                cursor: c ? "pointer" : "default",
                _hover: {
                    textDecoration: "none",
                    bg: c ? q("gray.50", "gray.875", s) : d
                },
                borderWidth: 1,
                borderRadius: "md",
                children: [!t && l.jsx(Ge, {}), t && l.jsx(M, {
                    display: "flex",
                    flexDir: {
                        base: "column",
                        md: "row"
                    },
                    fontSize: {
                        base: "sm",
                        md: "md"
                    },
                    w: "100%",
                    alignItems: {
                        base: "flex-start",
                        md: "center"
                    },
                    paddingRight: {
                        md: t.advertiseLink === void 0 ? `${Tt}px` : `${zt}px`
                    },
                    children: l.jsxs(Ve, {
                        spacing: "2",
                        flexShrink: 0,
                        children: [t.thumbnail && l.jsx(Ie, {
                            src: t.thumbnail,
                            width: "48px",
                            minWidth: "48px",
                            height: "48px",
                            display: "flex",
                            alignSelf: "center"
                        }), l.jsxs(He, {
                            alignItems: "stretch",
                            spacing: "0",
                            children: [t.title && l.jsx(Ye, {
                                title: t.title
                            }), l.jsx(M, {
                                lineHeight: "15px",
                                fontSize: "sm",
                                display: "flex",
                                flexDirection: "row",
                                width: {
                                    base: "100%",
                                    md: "initial"
                                },
                                children: l.jsxs(K, {
                                    as: "span",
                                    noOfLines: 2,
                                    children: [t.description && l.jsx(K, {
                                        as: "span",
                                        children: t.description
                                    }), t.callToAction && l.jsx(K, {
                                        as: "span",
                                        ml: {
                                            base: 1,
                                            md: 2
                                        },
                                        color: q("accent.600", "accent.150", s),
                                        fontWeight: "semibold",
                                        children: t.callToAction
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            }), t && l.jsx(Xe, {
                advertiseLink: t.advertiseLink,
                containerProps: {
                    pointerEvents: "none",
                    justifyContent: "flex-end",
                    width: t.advertiseLink === void 0 ? `${Tt}px` : `${zt}px`,
                    pos: "absolute",
                    top: 0,
                    right: 0
                },
                onClose: r
            })]
        })
    }),
    Ut = f.memo(e => {
        const {
            location: t,
            ad: r,
            onHide: n,
            height: s
        } = e;
        switch (t) {
            case "screener":
                return l.jsx(Ci, {
                    ad: r,
                    onHide: n,
                    height: s
                });
            case "pair":
                return l.jsx(Di, {
                    ad: r,
                    onHide: n,
                    height: s
                });
            case "search":
                return l.jsx(_i, {
                    ad: r,
                    onHide: n,
                    height: s
                })
        }
    }),
    Ai = () => {
        const e = ur(),
            t = ae.useInjectable(Ur),
            r = Oe(),
            n = Wr(f.useMemo(() => t.isAdLocationHidden(e.adLocation), [e.adLocation, t])),
            s = f.useMemo(() => e.enabled ? r ? n : !1 : !0, [e.enabled, n, r]),
            [c, u] = f.useState(s ? void 0 : e.ad),
            d = f.useMemo(() => t.findAdUnit(e.adLocation), [e.adLocation, t]),
            [g, o] = f.useMemo(() => Tn(), []),
            {
                value: p,
                enable: m
            } = Br(!1);
        ot(() => {
            if (s || !p) return;
            const k = e.ad ? dt : t.getAdByAdUnit(d),
                w = o.pipe(ie(() => t.getFallbackAd(d))),
                D = e.ad ? dt : e.refreshRequest.pipe(ie(() => t.getAdByAdUnit(d)));
            return Mn(k, D, w).pipe(Hn(u))
        }, [d, e.ad, e.refresh, e.refreshRequest, t, o, s, p]);
        const x = f.useCallback(() => {
                t.hideAd(e.adLocation)
            }, [e.adLocation, t]),
            y = Un(k => k.pipe(ie(t.notifyViewed)), [t.notifyViewed]),
            h = Y(e.adLocation),
            C = Y(e.enabled),
            A = Y(n);
        return ot(() => {
            if (C.current && A.current && r) return t.notifyHidden(h.current)
        }, [h, t, A, C, r]), {
            isHidden: s,
            ad: c,
            hide: x,
            adUnit: d,
            requestFallback: g,
            show: m,
            isShown: p,
            notifyViewed: y
        }
    },
    Wi = f.memo(e => {
        const {
            variant: t,
            containerProps: r
        } = e, {
            show: n,
            hide: s,
            ad: c,
            isHidden: u,
            adUnit: d,
            requestFallback: g,
            isShown: o,
            notifyViewed: p
        } = Ai(), m = f.useMemo(() => Ei(t, d), [t, d]), x = f.useMemo(() => Li(d), [d]), y = f.useRef(null);
        if (f.useEffect(() => {
                let C;
                return y.current && (C = new IntersectionObserver(A => {
                    for (const k of A)
                        if (k.isIntersecting) return n()
                }), C.observe(y.current)), () => {
                    C && C.disconnect()
                }
            }, [n]), f.useEffect(() => {
                c && c.kind === "native" && p(c)
            }, [c, p]), u) return null;
        const h = () => {
            if (c) switch (c.kind) {
                case "native":
                    return l.jsx(M, {
                        width: "100%",
                        children: l.jsx(Ut, {
                            height: m,
                            location: t,
                            ad: c,
                            onHide: s
                        })
                    });
                case "display":
                    switch (c.provider) {
                        case "coinzilla":
                            return l.jsx(wt, {
                                width: x,
                                height: m,
                                ad: c,
                                onHide: s,
                                onView: p
                            });
                        case "a-ads":
                            return l.jsx(ht, {
                                width: x,
                                height: m,
                                ad: c,
                                onHide: s,
                                onView: p
                            });
                        case "google":
                            return l.jsx(Dt, {
                                ad: c,
                                width: x,
                                height: m,
                                adUnit: c.adUnit,
                                onFallbackRequest: g,
                                onHide: s,
                                isShown: o,
                                onView: p
                            });
                        case "direct":
                            return l.jsx(kt, {
                                onView: p,
                                ad: c,
                                width: x,
                                height: m,
                                adUnit: c.adUnit,
                                onFallbackRequest: g,
                                onHide: s
                            });
                        case "persona":
                            return l.jsx(Ct, {
                                isShown: o,
                                width: x,
                                height: m,
                                adUnit: c.adUnit,
                                onHide: s,
                                onFallbackRequest: g
                            });
                        case "cointraffic":
                            return l.jsx(bt, {
                                isShown: o,
                                width: x,
                                height: m,
                                adUnit: c.adUnit,
                                onHide: s,
                                onFallbackRequest: g
                            })
                    }
            } else switch (d.adKind) {
                case "native":
                    return l.jsx(M, {
                        width: "100%",
                        children: l.jsx(Ut, {
                            height: m,
                            location: t,
                            ad: c,
                            onHide: s
                        })
                    });
                case "display":
                    switch (d.provider) {
                        case "coinzilla":
                            return l.jsx(wt, {
                                width: x,
                                height: m,
                                onHide: s,
                                onView: p
                            });
                        case "a-ads":
                            return l.jsx(ht, {
                                width: x,
                                height: m,
                                onHide: s,
                                onView: p
                            });
                        case "google":
                            return l.jsx(Dt, {
                                width: x,
                                height: m,
                                adUnit: d,
                                onFallbackRequest: g,
                                onHide: s,
                                isShown: o,
                                onView: p
                            });
                        case "direct":
                            return l.jsx(kt, {
                                onView: p,
                                width: x,
                                height: m,
                                adUnit: d,
                                onFallbackRequest: g,
                                onHide: s
                            });
                        case "persona":
                            return l.jsx(Ct, {
                                isShown: o,
                                width: x,
                                height: m,
                                adUnit: d,
                                onHide: s,
                                onFallbackRequest: g
                            });
                        case "cointraffic":
                            return l.jsx(bt, {
                                isShown: o,
                                width: x,
                                height: m,
                                adUnit: d,
                                onHide: s,
                                onFallbackRequest: g
                            })
                    }
            }
        };
        return l.jsx(M, {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            ...r,
            ref: y,
            children: h()
        })
    });

function Ei(e, t) {
    switch (t.adKind) {
        case "native":
            {
                switch (e) {
                    case "search":
                        return {
                            base: "64px",
                            md: "74px"
                        };
                    case "screener":
                        return {
                            base: "64px",
                            md: "47px"
                        };
                    case "pair":
                        return {
                            base: "58px",
                            lg: "71px"
                        }
                }
                break
            }
        case "display":
            return t.size === "responsive" ? `calc(90px + ${ut}px)` : `calc(${t.size.height}px + ${ut}px)`
    }
}

function Li(e) {
    switch (e.adKind) {
        case "native":
            return "100%";
        case "display":
            return e.size === "responsive" ? "100%" : `${e.size.width}px`
    }
}
const Bi = e => f.createElement("svg", {
        id: "eyes",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 128 128",
        style: {
            enableBackground: "new 0 0 128 128"
        },
        xmlSpace: "preserve",
        ...e
    }, f.createElement("g", null, f.createElement("g", null, f.createElement("g", null, f.createElement("g", null, f.createElement("path", {
        style: {
            fill: "#FAFAFA"
        },
        d: "M34.16,106.51C18.73,106.51,6.19,87.44,6.19,64c0-23.44,12.55-42.51,27.97-42.51 c15.42,0,27.97,19.07,27.97,42.51C62.13,87.44,49.58,106.51,34.16,106.51z"
    }), f.createElement("path", {
        style: {
            fill: "#B0BEC5"
        },
        d: "M34.16,23.49c6.63,0,12.98,4,17.87,11.27c5.22,7.75,8.1,18.14,8.1,29.24s-2.88,21.49-8.1,29.24 c-4.89,7.27-11.24,11.27-17.87,11.27s-12.98-4-17.87-11.27C11.06,85.49,8.19,75.1,8.19,64s2.88-21.49,8.1-29.24 C21.18,27.49,27.52,23.49,34.16,23.49 M34.16,19.49C17.61,19.49,4.19,39.42,4.19,64s13.42,44.51,29.97,44.51 S64.13,88.58,64.13,64S50.71,19.49,34.16,19.49L34.16,19.49z"
    })), f.createElement("linearGradient", {
        id: "emoji-u1f440-g1",
        gradientUnits: "userSpaceOnUse",
        x1: 22.5233,
        y1: 46.6759,
        x2: 22.5233,
        y2: 82.0828
    }, f.createElement("stop", {
        offset: 0,
        style: {
            stopColor: "#424242"
        }
    }), f.createElement("stop", {
        offset: 1,
        style: {
            stopColor: "#212121"
        }
    })), f.createElement("path", {
        style: {
            fill: "url(#emoji-u1f440-g1)"
        },
        d: "M25.63,59.84c-2.7-2.54-2.1-7.58,1.36-11.26c0.18-0.19,0.36-0.37,0.55-0.54 c-1.54-0.87-3.23-1.36-5.01-1.36c-7.19,0-13.02,7.93-13.02,17.7s5.83,17.7,13.02,17.7s13.02-7.93,13.02-17.7 c0-1.75-0.19-3.45-0.54-5.05C31.77,61.66,27.9,61.97,25.63,59.84z"
    }))), f.createElement("g", null, f.createElement("g", null, f.createElement("ellipse", {
        style: {
            fill: "#EEEEEE"
        },
        cx: 93.84,
        cy: 64,
        rx: 29.97,
        ry: 44.51
    }), f.createElement("g", null, f.createElement("path", {
        style: {
            fill: "#FAFAFA"
        },
        d: "M93.84,106.51c-15.42,0-27.97-19.07-27.97-42.51c0-23.44,12.55-42.51,27.97-42.51 c15.42,0,27.97,19.07,27.97,42.51C121.81,87.44,109.27,106.51,93.84,106.51z"
    }), f.createElement("path", {
        style: {
            fill: "#B0BEC5"
        },
        d: "M93.84,23.49c6.63,0,12.98,4,17.87,11.27c5.22,7.75,8.1,18.14,8.1,29.24s-2.88,21.49-8.1,29.24 c-4.89,7.27-11.24,11.27-17.87,11.27s-12.98-4-17.87-11.27c-5.22-7.75-8.1-18.14-8.1-29.24s2.88-21.49,8.1-29.24 C80.86,27.49,87.21,23.49,93.84,23.49 M93.84,19.49c-16.55,0-29.97,19.93-29.97,44.51s13.42,44.51,29.97,44.51 S123.81,88.58,123.81,64S110.39,19.49,93.84,19.49L93.84,19.49z"
    })), f.createElement("linearGradient", {
        id: "emoji-u1f440-g2",
        gradientUnits: "userSpaceOnUse",
        x1: 82.2093,
        y1: 46.6759,
        x2: 82.2093,
        y2: 82.0828
    }, f.createElement("stop", {
        offset: 0,
        style: {
            stopColor: "#424242"
        }
    }), f.createElement("stop", {
        offset: 1,
        style: {
            stopColor: "#212121"
        }
    })), f.createElement("path", {
        style: {
            fill: "url(#emoji-u1f440-g2)"
        },
        d: "M85.31,59.84c-2.7-2.54-2.1-7.58,1.36-11.26c0.18-0.19,0.36-0.37,0.55-0.54 c-1.54-0.87-3.23-1.36-5.01-1.36c-7.19,0-13.02,7.93-13.02,17.7s5.83,17.7,13.02,17.7c7.19,0,13.02-7.93,13.02-17.7 c0-1.75-0.19-3.45-0.54-5.05C91.46,61.66,87.58,61.97,85.31,59.84z"
    }))))),
    Ni = ({
        children: e,
        ...t
    }) => l.jsxs(Pn, { ...t,
        emoji: "😢",
        title: "Failed connecting to server",
        children: [l.jsx(K, {
            children: "Please wait a few seconds or refresh this page to try again."
        }), e]
    }),
    Si = {
        strategy: "fixed",
        isLazy: !0,
        matchWidth: !0
    },
    We = {
        fontWeight: "normal",
        iconSpacing: "4px",
        _focus: {
            boxShadow: "none"
        }
    },
    Re = {
        boxSize: "20px"
    },
    ji = ({
        watchlistPair: e,
        containerProps: t,
        buttonProps: r,
        menuProps: n
    }) => {
        const s = ae.useInjectable(Ht),
            c = Wn(),
            u = Oe(),
            g = ae.useInjectable(Bn).actions,
            [o, p] = f.useState(!1),
            m = ct({
                value: Nn(),
                onPending: () => [],
                onFailure: () => [],
                onSuccess: k => k
            }),
            x = Vn(),
            y = ct({
                value: x,
                onPending: () => [],
                onFailure: () => [],
                onSuccess: k => k
            }),
            h = [];
        m.forEach(k => {
            k.pairs.find(w => w.chainId === e.chainId && w.pairId === e.pairId) && h.push(k.id)
        });
        const C = Ft(),
            A = async k => {
                if (!e) return;
                const w = h.length === 0 || !h.includes(k) ? "add" : "remove";
                e.dexId && s.track({
                    event: "toggleWatchlist",
                    data: {
                        action: w,
                        chainId: e.chainId,
                        dexId: e.dexId,
                        pairId: e.pairId,
                        pair: `${e.baseTokenSymbol}/${e.quoteTokenSymbol}`
                    }
                }), p(!0);
                const D = y.find(i => i.id === k);
                if (w === "add") try {
                    if (D) await g.addPairToWatchlist(k, e);
                    else {
                        const i = m.find(a => a.id === k && a.default);
                        if (!i) throw new Error(`The list '${k}' does not exist!`);
                        await g.createWatchlist({
                            visibility: "private",
                            schemaVersion: "1.0.0",
                            name: i.name,
                            default: i.default,
                            pairs: [e]
                        })
                    }
                } catch (i) {
                    c({
                        status: "error",
                        title: `Failed adding pair to watchlist: ${pt(i).message}`
                    })
                } else try {
                    const i = D == null ? void 0 : D.pairs.find(a => a.pairId === e.pairId && a.chainId === e.chainId);
                    if (!i) {
                        c({
                            status: "error",
                            title: "Failed removing pair from watchlist"
                        });
                        return
                    }
                    await g.removePairFromWatchlist(k, i)
                } catch (i) {
                    c({
                        status: "error",
                        title: `Failed removing pair from watchlist: ${pt(i).message}`
                    })
                }
                p(!1)
            };
        return l.jsxs(l.Fragment, {
            children: [l.jsx(M, { ...t,
                children: l.jsxs(Kn, { ...Si,
                    ...n,
                    children: [l.jsxs(On, {
                        as: Pe,
                        isDisabled: !u || o,
                        w: "100%",
                        leftIcon: l.jsx(se, {
                            as: h.length === 0 ? je : lt,
                            ...Re
                        }),
                        sx: {
                            span: {
                                flex: "initial"
                            }
                        },
                        ...We,
                        ...r,
                        children: [l.jsx(be, {
                            children: "Watchlist"
                        }), h.length > 0 && l.jsx(mr, {
                            label: h.length
                        })]
                    }), l.jsxs(qn, {
                        overflowX: "hidden",
                        overflowY: "auto",
                        maxH: {
                            base: "max(20vh, 150px)",
                            lg: "250px"
                        },
                        children: [l.jsx($n, {
                            children: m.map(k => l.jsx(Gn, {
                                onClick: () => A(k.id),
                                closeOnSelect: !0,
                                children: l.jsxs(K, {
                                    as: "span",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: h != null && h.includes(k.id) ? "semibold" : void 0,
                                    w: "100%",
                                    children: [l.jsx(se, {
                                        as: h.length === 0 || !h.includes(k.id) ? je : lt,
                                        mr: 2,
                                        ...Re
                                    }), l.jsx(K, {
                                        as: "span",
                                        children: Zn(k.name, 30)
                                    }), (h == null ? void 0 : h.includes(k.id)) && l.jsx(se, {
                                        ml: "auto",
                                        as: Xn
                                    })]
                                })
                            }, k.id))
                        }), l.jsx(Yn, {}), l.jsx(Jn, {
                            onOpenManager: C.onOpen
                        })]
                    })]
                })
            }), C.isOpen && l.jsx(Qn, {
                onClose: C.onClose
            })]
        })
    },
    Vi = ({
        watchlistPair: e,
        menuContainerProps: t,
        buttonProps: r,
        menuProps: n
    }) => {
        const {
            isEmbed: s
        } = Fn(d => d.embedSettings), c = Ft(), u = Oe();
        return !u || !e ? l.jsx(Pe, {
            isDisabled: !u,
            leftIcon: l.jsx(se, {
                as: je,
                ...Re
            }),
            ...We,
            ...r,
            children: "Watchlist"
        }) : s ? l.jsxs(l.Fragment, {
            children: [l.jsx(Pe, {
                isDisabled: !u,
                onClick: c.onOpen,
                leftIcon: l.jsx(se, {
                    as: je,
                    ...Re
                }),
                ...We,
                ...r,
                children: "Watchlist"
            }), c.isOpen && l.jsx(hr, {
                onClose: c.onClose
            })]
        }) : l.jsx(ji, {
            watchlistPair: e,
            containerProps: t,
            buttonProps: r,
            menuProps: n
        })
    };

function Ri(e) {
    return qe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            }
        }]
    })(e)
}

function Ki(e) {
    return qe({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
            }
        }]
    })(e)
}

function Oi(e) {
    return qe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            }
        }]
    })(e)
}
const qi = {
        telegram: er,
        twitter: Ri,
        discord: tr,
        tiktok: nr,
        facebook: rr
    },
    ye = {
        chainId: !0,
        dexId: !0,
        labels: !0,
        pairAddress: !0,
        baseToken: !0,
        quoteToken: !0,
        quoteTokenSymbol: !0,
        price: !0,
        priceUsd: !0,
        txns: !0,
        buyers: !0,
        sellers: !0,
        makers: !0,
        volume: !0,
        volumeBuy: !0,
        volumeSell: !0,
        priceChange: !0,
        liquidity: !0,
        marketCap: !0,
        pairCreatedAt: !0,
        eti: !0,
        boosts: !0,
        c: !0
    };
Wt({
    schemaVersion: Bt("3.0"),
    pairs: Nt(ir([sr.pick({ ...ye,
        a: !0,
        cgi: !0
    }), ar.pick(ye), or.pick(ye), dr.pick({ ...ye,
        pn: !0
    }), cr.pick({ ...ye,
        cgi: !0
    })]))
});
const Ii = Wt({
        schemaVersion: Bt("4.0"),
        pairs: Nt(lr)
    }),
    $i = H.injectable({
        env: Ne(),
        httpClient: Mt
    }, ({
        env: e,
        httpClient: t
    }) => ({
        searchPairs: r => {
            const n = new URL(e.DS_DEX_SCREENER_SEARCH_PUBLIC_ORIGIN);
            return n.pathname = "/dex/search/v4/pairs", n.searchParams.append("q", r), t.avro(n.toString(), Ii, {
                credentials: "include"
            }).pipe(Ue(s => s.pairs))
        }
    }));
export {
    Wi as A, Kr as B, Ni as E, Ki as F, Bi as S, Vi as W, Br as a, Vr as b, Oi as c, $i as d, Ri as e, ki as n, qi as t, Fi as u
};