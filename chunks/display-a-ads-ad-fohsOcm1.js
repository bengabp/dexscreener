import {
    a6 as b,
    t as v,
    aV as L,
    bz as _,
    aZ as k,
    n as c,
    p as r,
    bA as j,
    b3 as f,
    B as u,
    a2 as z,
    x as g,
    aE as C,
    bB as A,
    ay as P
} from "../entries/pages_catch-all.__d1Yby5.js";
const T = b.injectable("@dexscreener/feature-ads/AAdsDataSource", v, L, (s, a) => {
    const i = t => ({
        kind: "display",
        provider: "a-ads",
        aAdsID: t.id,
        iframeURL: R(t),
        adUnit: t
    });
    return {
        findDisplayAdUnit: t => s.displayUnits.find(e => e.screen === t.screen && _(e.size, t.size)),
        getDefaultDisplayAdUnit: t => ({ ...s.defaultDisplayUnit,
            screen: t.screen
        }),
        getDisplayAd: t => {
            const e = i(t);
            return a.head(e.iframeURL, {
                mode: "no-cors"
            }).pipe(k(() => e))
        },
        buildDisplayAd: i
    }
});

function R(s) {
    if (s.size === "responsive") {
        const a = new URL("https://acceptable.a-ads.com");
        return a.pathname = `/${s.id}`, a.toString()
    } else {
        const a = new URL("https://ad.a-ads.com");
        return a.pathname = `/${s.id}`, a.searchParams.append("size", `${s.size.width}x${s.size.height}`), a.toString()
    }
}
const S = c.memo(() => r.jsx(j, {
        size: "xs",
        spinnerContainerProps: {
            display: "flex"
        },
        width: "100%",
        justifyContent: "center"
    })),
    x = 18,
    H = c.memo(s => {
        const {
            contentWidth: a,
            width: i,
            children: t,
            height: e,
            onHide: o,
            isLoaded: d,
            advertiseLink: l
        } = s, p = f("white", "blue.975");
        return r.jsxs(u, {
            display: "flex",
            flexDirection: "column",
            width: i,
            height: e,
            position: "relative",
            overflow: "hidden",
            alignItems: "center",
            children: [r.jsxs(u, {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                width: a,
                height: e,
                children: [r.jsx(u, {
                    overflow: "hidden",
                    flex: 1,
                    children: t
                }), r.jsxs(z, {
                    pt: "2px",
                    flexShrink: 0,
                    justifyContent: "space-between",
                    height: `${x}px`,
                    opacity: .7,
                    children: [l && r.jsx(g, {
                        as: C,
                        variant: "link",
                        target: "_blank",
                        href: l,
                        height: "100%",
                        size: "xs",
                        fontWeight: "normal",
                        children: "Advertise here"
                    }), r.jsx(g, {
                        marginLeft: "auto",
                        height: "100%",
                        size: "xs",
                        variant: "link",
                        fontWeight: "normal",
                        onClick: o,
                        children: "Hide ad"
                    })]
                })]
            }), r.jsx(u, {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                backgroundColor: p,
                pointerEvents: d ? "none" : "all",
                opacity: d ? 0 : 1,
                transitionDuration: "fast",
                transitionProperty: "opacity",
                children: r.jsx(S, {})
            })]
        })
    }),
    I = c.forwardRef((s, a) => {
        const {
            src: i,
            width: t,
            height: e,
            ...o
        } = s;
        return r.jsx("iframe", { ...o,
            ref: a,
            style: {
                backgroundColor: "transparent",
                colorScheme: "auto",
                ...o.style
            },
            src: i,
            width: t ? ? "100%",
            height: e ? ? "100%",
            allowtransparency: "true"
        })
    }),
    B = c.memo(s => {
        const {
            height: a,
            width: i,
            onHide: t,
            ad: e,
            onView: o
        } = s, d = A("colors", f("gray.750", "white")), l = A("colors", f("accent.600", "accent.150")), p = P(e), D = c.useCallback(() => {
            p.current && o(p.current)
        }, [p, o]), m = c.useMemo(() => {
            if (!e) return;
            const n = new URL(e.iframeURL),
                h = y(l);
            return n.searchParams.append("background_color", "00000000"), n.searchParams.append("text_color", y(d)), n.searchParams.append("title_color", h), n.searchParams.append("title_hover_color", h), n.searchParams.append("link_color", h), n.searchParams.append("link_hover_color", h), n.toString()
        }, [l, e, d]), w = c.useMemo(() => {
            if (e) {
                const n = new URL("https://a-ads.com/campaigns/new?selected_site_id=637147&selected_source_type=site");
                return n.searchParams.append("partner", e.aAdsID), n.toString()
            }
        }, [e]);
        return r.jsx(H, {
            contentWidth: e ? $(e.adUnit) : void 0,
            width: i,
            height: a,
            isLoaded: !!e && !!m,
            onHide: t,
            advertiseLink: w,
            children: e && m && r.jsx(I, {
                onLoad: D,
                "data-aa": e.aAdsID,
                width: "100%",
                height: "100%",
                src: m
            })
        })
    });

function y(s) {
    return s.replace(/^#*/, "")
}

function $(s) {
    return s.size === "responsive" ? "100%" : `${s.size.width}px`
}

function U(s) {
    return s.size === "responsive" ? `calc(90px + ${x}px)` : `calc(${s.size.height}px + ${x}px)`
}
export {
    S as A, B as D, T as a, U as b, H as c, I as d, x as e, $ as g
};