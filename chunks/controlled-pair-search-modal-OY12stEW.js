import {
    a6 as Ue,
    ce as ze,
    cf as Be,
    cg as Se,
    ch as ye,
    ci as Oe,
    bp as Ve,
    cj as qe,
    aN as Fe,
    ab as ge,
    n as i,
    b3 as _,
    a8 as Ge,
    q as U,
    bf as Re,
    bG as Ke,
    ck as _e,
    bJ as We,
    bK as Ye,
    bE as Qe,
    p as s,
    B as M,
    cl as Pe,
    cm as pe,
    b2 as ce,
    bg as ee,
    a2 as q,
    Z as R,
    an as V,
    cn as Xe,
    co as $e,
    cp as Je,
    cq as Ze,
    cr as es,
    cs as je,
    ct as ss,
    cu as ts,
    cv as re,
    H as Ie,
    I as F,
    cw as ns,
    br as as,
    ay as se,
    c2 as os,
    c1 as Te,
    c0 as Ne,
    cx as He,
    b1 as rs,
    cy as ls,
    cz as is,
    b$ as cs,
    c3 as ds,
    aP as us,
    cA as hs,
    aA as gs,
    af as ps,
    ag as ms,
    ah as bs,
    aj as fs,
    cB as xs,
    cC as Ss,
    cD as ys,
    x as J,
    cE as js,
    J as Is,
    al as Ts,
    V as ue,
    cF as ks,
    Y as ws,
    aE as vs,
    cG as Cs
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    B as Es,
    W as Ms,
    u as Ds,
    t as As,
    d as Rs,
    A as _s,
    E as Ws,
    S as Ps
} from "./dex-search.service-mcSyVurQ.js";
import {
    n as Ns,
    A as Hs,
    G as Ls
} from "./ads-provider-Ceqm-9IU.js";
import {
    g as Us,
    c as zs
} from "./date-2BvDWMFk.js";
import {
    W as ke,
    a as O,
    c as le
} from "./embed-feature-disabled-modal-CFsC1n7P.js";
import {
    S as L
} from "./span-tpC7Sv0b.js";
import {
    G as Bs
} from "./chunk-ZPFGWTBB-x804Qy_y.js";
const Os = Ve.object({
        data: qe.optional()
    }),
    Vs = Ue.injectable("@dexscreener/data-access-ds-data//dsDataServerDsDataTokensDataSource", ze(), Be, (e, n) => ({
        findToken: Se(async ({
            chainId: a,
            tokenAddress: u,
            signal: o
        }) => ye({
            callback: async () => {
                const t = new URL(e.DS_DATA_SERVER_PUBLIC_ORIGIN);
                return t.pathname = `/ds-data/tokens/${a}/${encodeURIComponent(u)}`, (await n.get(t.toString(), Os, {
                    signal: o
                })).data
            },
            retrySettings: {
                tries: e.DS_DATA_RETRY_MAX_ATTEMPTS,
                timeoutInMs: e.DS_DATA_RETRY_TIMEOUT_IN_MS,
                delayInMs: e.DS_DATA_RETRY_DELAY_IN_MS
            }
        })),
        getLatestTokens: Se(async () => ye({
            callback: async () => {
                const a = new URL(e.DS_DATA_SERVER_PUBLIC_ORIGIN);
                return a.pathname = "/ds-data/v3/tokens/latest", (await n.avro(a.toString(), Oe)).tokens
            },
            retrySettings: {
                tries: e.DS_DATA_RETRY_MAX_ATTEMPTS,
                timeoutInMs: e.DS_DATA_RETRY_TIMEOUT_IN_MS,
                delayInMs: e.DS_DATA_RETRY_DELAY_IN_MS
            }
        }))
    }));
let we = e => typeof e == "object" && e != null && e.nodeType === 1,
    ve = (e, n) => (!n || e !== "hidden") && e !== "visible" && e !== "clip",
    de = (e, n) => {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            let a = getComputedStyle(e, null);
            return ve(a.overflowY, n) || ve(a.overflowX, n) || (u => {
                let o = (t => {
                    if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                    try {
                        return t.ownerDocument.defaultView.frameElement
                    } catch {
                        return null
                    }
                })(u);
                return !!o && (o.clientHeight < u.scrollHeight || o.clientWidth < u.scrollWidth)
            })(e)
        }
        return !1
    },
    ie = (e, n, a, u, o, t, l, c) => t < e && l > n || t > e && l < n ? 0 : t <= e && c <= a || l >= n && c >= a ? t - e - u : l > n && c < a || t < e && c > a ? l - n + o : 0,
    qs = e => {
        let n = e.parentElement;
        return n ? ? (e.getRootNode().host || null)
    },
    Ce = (e, n) => {
        var a, u, o, t;
        if (typeof document > "u") return [];
        let {
            scrollMode: l,
            block: c,
            inline: x,
            boundary: C,
            skipOverflowHiddenElements: m
        } = n, j = typeof C == "function" ? C : P => P !== C;
        if (!we(e)) throw new TypeError("Invalid target");
        let g = document.scrollingElement || document.documentElement,
            p = [],
            b = e;
        for (; we(b) && j(b);) {
            if (b = qs(b), b === g) {
                p.push(b);
                break
            }
            b != null && b === document.body && de(b) && !de(document.documentElement) || b != null && de(b, m) && p.push(b)
        }
        let d = (u = (a = window.visualViewport) == null ? void 0 : a.width) != null ? u : innerWidth,
            T = (t = (o = window.visualViewport) == null ? void 0 : o.height) != null ? t : innerHeight,
            {
                scrollX: y,
                scrollY: k
            } = window,
            {
                height: D,
                width: w,
                top: v,
                right: A,
                bottom: G,
                left: W
            } = e.getBoundingClientRect(),
            f = c === "start" || c === "nearest" ? v : c === "end" ? G : v + D / 2,
            I = x === "center" ? W + w / 2 : x === "end" ? A : W,
            K = [];
        for (let P = 0; P < p.length; P++) {
            let S = p[P],
                {
                    height: Y,
                    width: z,
                    top: Q,
                    right: X,
                    bottom: $,
                    left: r
                } = S.getBoundingClientRect();
            if (l === "if-needed" && v >= 0 && W >= 0 && G <= T && A <= d && v >= Q && G <= $ && W >= r && A <= X) return K;
            let h = getComputedStyle(S),
                E = parseInt(h.borderLeftWidth, 10),
                B = parseInt(h.borderTopWidth, 10),
                te = parseInt(h.borderRightWidth, 10),
                ne = parseInt(h.borderBottomWidth, 10),
                N = 0,
                H = 0,
                ae = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - E - te : 0,
                oe = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - B - ne : 0,
                me = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : z / S.offsetWidth : 0,
                be = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : Y / S.offsetHeight : 0;
            if (g === S) N = c === "start" ? f : c === "end" ? f - T : c === "nearest" ? ie(k, k + T, T, B, ne, k + f, k + f + D, D) : f - T / 2, H = x === "start" ? I : x === "center" ? I - d / 2 : x === "end" ? I - d : ie(y, y + d, d, E, te, y + I, y + I + w, w), N = Math.max(0, N + k), H = Math.max(0, H + y);
            else {
                N = c === "start" ? f - Q - B : c === "end" ? f - $ + ne + oe : c === "nearest" ? ie(Q, $, Y, B, ne + oe, f, f + D, D) : f - (Q + Y / 2) + oe / 2, H = x === "start" ? I - r - E : x === "center" ? I - (r + z / 2) + ae / 2 : x === "end" ? I - X + te + ae : ie(r, X, z, E, te + ae, I, I + w, w);
                let {
                    scrollLeft: fe,
                    scrollTop: xe
                } = S;
                N = Math.max(0, Math.min(xe + N / be, S.scrollHeight - Y / be + oe)), H = Math.max(0, Math.min(fe + H / me, S.scrollWidth - z / me + ae)), f += xe - N, I += fe - H
            }
            K.push({
                el: S,
                top: N,
                left: H
            })
        }
        return K
    };
const Fs = e => e === !1 ? {
    block: "end",
    inline: "nearest"
} : (n => n === Object(n) && Object.keys(n).length !== 0)(e) ? e : {
    block: "start",
    inline: "nearest"
};

function Gs(e, n) {
    if (!e.isConnected || !(o => {
            let t = o;
            for (; t && t.parentNode;) {
                if (t.parentNode === document) return !0;
                t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode
            }
            return !1
        })(e)) return;
    const a = (o => {
        const t = window.getComputedStyle(o);
        return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0
        }
    })(e);
    if ((o => typeof o == "object" && typeof o.behavior == "function")(n)) return n.behavior(Ce(e, n));
    const u = typeof n == "boolean" || n == null ? void 0 : n.behavior;
    for (const {
            el: o,
            top: t,
            left: l
        } of Ce(e, Fs(n))) {
        const c = t - a.top + a.bottom,
            x = l - a.left + a.right;
        o.scroll({
            top: c,
            left: x,
            behavior: u
        })
    }
}
const Ks = Fe.memo(({
        pair: e,
        onClick: n,
        selected: a,
        isHoverable: u,
        ...o
    }) => {
        var d, T, y;
        const {
            colorMode: t
        } = ge(), l = i.useCallback(k => {
            n == null || n(k)
        }, [n]), c = _("gray.800", "white"), x = (d = Ge().current) == null ? void 0 : d.time, C = U.useInjectable(Re), m = U.useInjectable(Ke), j = U.useInjectable(_e), g = We(e.chainId), p = Ye(e.dexId), b = Qe(e.chainId);
        return s.jsxs(M, {
            pos: "relative",
            children: [s.jsxs(Pe, {
                pr: {
                    base: 0,
                    lg: "55px"
                },
                onClick: l,
                to: pe({
                    platformId: e.chainId,
                    pairAddress: e.pairAddress
                }),
                display: "flex",
                p: 3,
                transition: "none",
                borderWidth: "3px",
                borderColor: a ? "accent.300" : "transparent",
                borderRadius: "md",
                isHoverable: u,
                textDecoration: "none",
                _focus: {
                    boxShadow: "none"
                },
                _hover: {
                    borderColor: "accent.300",
                    textDecoration: "none"
                },
                ...o,
                children: [s.jsxs(ce, {
                    flexShrink: 0,
                    spacing: 4,
                    direction: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [s.jsx(ee, {
                        src: C(e.chainId),
                        w: "24px",
                        h: "24px",
                        title: g
                    }), !(b != null && b.isChainAndDEX) && s.jsx(ee, {
                        pos: "relative",
                        src: m(e.dexId),
                        w: "24px",
                        h: "24px",
                        title: p
                    })]
                }), s.jsxs(M, {
                    ml: {
                        base: 4,
                        lg: 5
                    },
                    overflow: "hidden",
                    children: [s.jsxs(ce, {
                        spacing: 2,
                        lineHeight: "1",
                        direction: {
                            base: "column",
                            md: "row"
                        },
                        children: [e.labels && e.labels.length > 0 && s.jsx(q, {
                            display: "inline-flex",
                            spacing: 1,
                            children: e.labels && e.labels.length > 0 && ((T = e.labels) == null ? void 0 : T.map(k => s.jsx(Es, {
                                fontSize: "2xs",
                                children: k
                            }, k)))
                        }), s.jsx(q, {
                            children: s.jsxs(R, {
                                as: "span",
                                fontSize: {
                                    base: "sm",
                                    md: "md"
                                },
                                noOfLines: 1,
                                children: [s.jsx(R, {
                                    as: "span",
                                    fontWeight: "semibold",
                                    children: e.baseToken.symbol
                                }), s.jsx(R, {
                                    as: "span",
                                    mx: "2px",
                                    color: V("gray.400", "gray.600", t),
                                    children: "/"
                                }), s.jsx(R, {
                                    as: "span",
                                    color: V("gray.400", "gray.600", t),
                                    children: e.quoteTokenSymbol
                                })]
                            })
                        }), s.jsxs(q, {
                            spacing: "1",
                            minWidth: "100px",
                            children: [e.eti && s.jsx(ee, {
                                src: j({
                                    chainId: e.chainId,
                                    tokenAddress: e.baseToken.address,
                                    cacheKey: (y = e.profile) == null ? void 0 : y.imgKey
                                }),
                                width: "16px",
                                height: "16px",
                                alt: e.baseToken.name
                            }), s.jsx(R, {
                                as: "span",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                children: e.baseToken.name
                            })]
                        })]
                    }), s.jsxs(ke, {
                        mt: {
                            base: 2,
                            lg: 2
                        },
                        spacing: {
                            base: 2,
                            lg: 3
                        },
                        align: "stretch",
                        fontSize: "sm",
                        color: _("gray.550", "gray.250"),
                        children: [e.price && s.jsxs(O, {
                            w: {
                                base: "100%",
                                lg: "auto"
                            },
                            fontWeight: "semibold",
                            fontSize: {
                                base: "sm",
                                lg: "md"
                            },
                            color: c,
                            children: [e.priceUsd && Xe(e.priceUsd), !e.priceUsd && $e(e.price, e.quoteTokenSymbol)]
                        }), e.priceChange.h24 && s.jsxs(O, {
                            w: {
                                base: "100%",
                                lg: "auto"
                            },
                            children: ["24H Price Change:", " ", s.jsx(R, {
                                as: "span",
                                fontWeight: "semibold",
                                ml: 1,
                                children: s.jsx(Je, {
                                    value: e.priceChange.h24
                                })
                            })]
                        }), e.liquidity && s.jsxs(O, {
                            w: {
                                base: "100%",
                                lg: "auto"
                            },
                            fontSize: "sm",
                            children: ["Liquidity:", " ", s.jsx(R, {
                                as: "span",
                                fontWeight: "semibold",
                                ml: 1,
                                children: e.liquidity.usd > 0 ? Ze(e.liquidity.usd) : "N/A"
                            })]
                        }), e.volume.h24 && s.jsxs(O, {
                            w: {
                                base: "100%",
                                lg: "auto"
                            },
                            fontSize: "sm",
                            children: ["24H Volume:", " ", s.jsx(R, {
                                as: "span",
                                fontWeight: "semibold",
                                ml: 1,
                                children: es(e.volume.h24)
                            })]
                        }), e.pairCreatedAt && s.jsxs(O, {
                            w: {
                                base: "100%",
                                lg: "auto"
                            },
                            fontSize: "sm",
                            children: ["Age:", " ", s.jsx(R, {
                                as: "span",
                                fontWeight: "semibold",
                                ml: 1,
                                children: Us(e.pairCreatedAt, {
                                    now: x
                                })
                            })]
                        })]
                    }), s.jsxs(ke, {
                        fontSize: "sm",
                        color: _("gray.300", "gray.600"),
                        mt: {
                            base: 1,
                            lg: 0
                        },
                        mr: {
                            base: "40px",
                            lg: 0
                        },
                        spacing: {
                            base: 2,
                            lg: 3
                        },
                        children: [s.jsxs(O, {
                            w: {
                                base: "100%",
                                md: "auto"
                            },
                            children: ["Pair: ", je(e.pairAddress)]
                        }), s.jsxs(O, {
                            noOfLines: 1,
                            children: [e.baseToken.symbol, ": ", je(e.baseToken.address)]
                        })]
                    })]
                })]
            }), s.jsx(M, {
                pos: "absolute",
                top: {
                    lg: 3
                },
                right: 3,
                bottom: {
                    base: 3,
                    lg: "initial"
                },
                children: s.jsx(Ms, {
                    watchlistPair: {
                        type: "dexPair",
                        chainId: e.chainId,
                        dexId: e.dexId,
                        pairId: e.pairAddress,
                        baseTokenName: e.baseToken.name,
                        baseTokenSymbol: e.baseToken.symbol,
                        quoteTokenSymbol: e.quoteTokenSymbol
                    },
                    buttonProps: {
                        size: "sm",
                        minW: "auto",
                        px: 2,
                        iconSpacing: 0,
                        sx: {
                            "> span:last-of-type": {
                                display: "none"
                            }
                        }
                    },
                    menuContainerProps: {
                        ml: "auto",
                        display: "flex",
                        minH: "100%"
                    },
                    menuProps: {
                        strategy: "fixed",
                        placement: "bottom-end",
                        matchWidth: !1
                    }
                })
            })]
        })
    }),
    Ee = ["twitter", "telegram", "discord", "facebook", "tiktok"],
    Ys = ({
        token: e
    }) => {
        const n = We(e.chain.id),
            a = Ds(e.socials ? ? [], "type").sort((t, l) => Ee.indexOf(t.type) - Ee.indexOf(l.type)),
            u = e.websites ? ? [],
            o = u.find(ss) ? ? u[0];
        return {
            socials: a ? ? [],
            website: o,
            chainName: n
        }
    },
    Le = {
        base: "114px",
        lg: "92px"
    },
    Z = {
        base: "40px",
        lg: "60px"
    },
    Qs = ({ ...e
    }) => s.jsx(ts, {
        userSelect: "none",
        borderRadius: "md",
        h: Le,
        py: "0",
        ...e,
        children: s.jsxs(ce, {
            align: "center",
            pos: "relative",
            direction: {
                base: "column",
                lg: "row"
            },
            spacing: {
                base: 3,
                lg: 4
            },
            padding: {
                base: 1,
                lg: 3
            },
            pt: {
                base: "35px",
                lg: 3
            },
            pb: {
                base: "10px",
                lg: 3
            },
            children: [s.jsx(re, {
                pos: {
                    base: "absolute",
                    lg: "initial"
                },
                top: "-10px",
                size: Z,
                bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)")
            }), s.jsxs(M, {
                display: "flex",
                flexDir: "column",
                alignItems: {
                    base: "center",
                    lg: "flex-start"
                },
                overflow: "hidden",
                w: "100%",
                maxW: "100%",
                gap: "2",
                py: "1",
                children: [s.jsx(M, {
                    bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)"),
                    w: "70%",
                    h: "16px"
                }), s.jsx(M, {
                    bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)"),
                    w: "50%",
                    h: "16px"
                }), s.jsxs(q, {
                    spacing: "1",
                    children: [s.jsx(re, {
                        bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)"),
                        size: "16px"
                    }), s.jsx(re, {
                        bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)"),
                        size: "16px"
                    }), s.jsx(re, {
                        bg: _("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)"),
                        size: "16px"
                    })]
                })]
            })]
        })
    }),
    Me = {
        padding: "0.5",
        minWidth: "0",
        minHeight: "0",
        height: "auto",
        variant: "ghost",
        size: "sm"
    },
    Xs = ({
        onClose: e,
        token: n,
        ...a
    }) => {
        var j;
        const u = U.useInjectable(_e),
            o = U.useInjectable(Re),
            {
                chainName: t,
                website: l,
                socials: c
            } = Ys({
                token: n
            }),
            {
                colorMode: x
            } = ge(),
            C = i.useCallback(g => {
                g.metaKey || g.ctrlKey || g.button === 1 || e()
            }, [e]),
            m = i.useCallback(g => p => {
                p.preventDefault(), p.stopPropagation(), window.open(g, void 0, "noopener,noreferrer")
            }, []);
        return s.jsx(Pe, {
            to: pe({
                platformId: n.chain.id,
                pairAddress: n.address
            }),
            isHoverable: !0,
            onClick: C,
            userSelect: "none",
            borderRadius: "md",
            h: Le,
            py: "0",
            ...a,
            children: s.jsxs(ce, {
                align: "center",
                pos: "relative",
                direction: {
                    base: "column",
                    lg: "row"
                },
                spacing: {
                    base: 3,
                    lg: 4
                },
                padding: {
                    base: 1,
                    lg: 3
                },
                pt: {
                    base: "35px",
                    lg: 3
                },
                pb: {
                    base: "10px",
                    lg: 3
                },
                children: [s.jsx(ee, {
                    pos: {
                        base: "absolute",
                        lg: "initial"
                    },
                    top: "-10px",
                    src: u({
                        chainId: n.chain.id,
                        tokenAddress: n.address,
                        cacheKey: (j = n.profile) == null ? void 0 : j.imgKey,
                        size: "lg"
                    }),
                    minW: Z,
                    width: Z,
                    height: Z,
                    minWidth: Z
                }), s.jsxs(M, {
                    display: "flex",
                    flexDir: "column",
                    alignItems: {
                        base: "center",
                        lg: "flex-start"
                    },
                    overflow: "hidden",
                    w: "100%",
                    maxW: "100%",
                    children: [s.jsx(L, {
                        fontWeight: "semibold",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxW: {
                            base: "90%",
                            lg: "100%"
                        },
                        children: n.name
                    }), s.jsxs(q, {
                        pt: {
                            base: .5,
                            lg: 1
                        },
                        pb: {
                            base: 1,
                            lg: 1.5
                        },
                        spacing: "1",
                        color: V("gray.500", "blue.600", x),
                        children: [s.jsx(ee, {
                            src: o(n.chain.id),
                            w: "16px",
                            h: "16px"
                        }), s.jsx(L, {
                            children: t
                        })]
                    }), s.jsxs(q, {
                        spacing: "1",
                        children: [l && s.jsx(Ie, { ...Me,
                            icon: s.jsx(F, {
                                as: ns
                            }),
                            "aria-label": le(l.label),
                            title: le(l.label),
                            onClick: m(l.url)
                        }), c == null ? void 0 : c.map(g => s.jsx(Ie, { ...Me,
                            icon: s.jsx(F, {
                                as: As[g.type]
                            }),
                            "aria-label": le(g.type),
                            title: le(g.type),
                            onClick: m(g.url)
                        }, g.type))]
                    })]
                })]
            })
        })
    },
    $s = 2,
    Js = e => {
        const n = U.useInjectable(as),
            a = U.useInjectable(Rs),
            {
                debounceTime: u,
                onError: o,
                clearError: t,
                onSearch: l
            } = e,
            [c, x] = i.useState(e.initialQuery ? ? ""),
            [C, m] = i.useState(),
            [j, g] = i.useState(!1),
            p = se(c),
            b = c !== "",
            d = os(w => w.pipe(Te(v => {
                n.track({
                    event: "search",
                    data: {
                        query: v
                    }
                }), l == null || l(v)
            }), Ne(v => a.searchPairs(v).pipe(zs(A => (g(!1), o == null || o(rs(A)), ls)))), Te(v => {
                t == null || t(), g(!1), m(v)
            })), [n, l, a, o, t]),
            T = i.useCallback(w => {
                g(!0), d(w)
            }, [d]),
            y = i.useMemo(() => He(T, u ? ? 500), [T, u]);
        i.useEffect(() => () => y.cancel(), [y]);
        const k = i.useCallback(w => {
                g(!1), x(w), w.trim().length >= $s ? y(w) : (y.cancel(), m(void 0), t == null || t())
            }, [t, y]),
            D = i.useCallback(() => {
                y.cancel(), g(!1), d(p.current)
            }, [p, d, y]);
        return {
            query: c,
            setQuery: k,
            showClearButton: b,
            isLoading: j,
            refresh: D,
            pairs: C
        }
    },
    Zs = {
        adLocation: {
            preferredAdKind: "native",
            screen: "search",
            provider: "direct"
        },
        enabled: !0
    },
    De = 500,
    et = 6e4,
    st = ({
        isExtraLargeScreen: e,
        queryOverride: n,
        onQueryChange: a
    }) => {
        const u = U.useInjectable(Vs),
            [o, t] = i.useState(),
            [l, c] = i.useState(),
            x = i.useCallback(() => c(void 0), []),
            C = e ? void 0 : De,
            {
                query: m,
                setQuery: j,
                isLoading: g,
                pairs: p,
                showClearButton: b
            } = Js({
                debounceTime: C,
                onError: c,
                clearError: x
            }),
            d = i.useMemo(() => He(a, De), [a]);
        i.useEffect(() => () => d.cancel(), [d]), i.useEffect(() => {
            d(m)
        }, [d, m]);
        const T = se(m);
        i.useEffect(() => {
            T.current !== n && j(n)
        }, [j, n, T]);
        const y = i.useMemo(() => Ns(Zs), []),
            k = is(() => cs(0, et).pipe(Ne(() => ds(u.getLatestTokens()))), [u]);
        return i.useEffect(() => {
            p && p.length > 0 && t(0)
        }, [p, t]), {
            selectedPairIndex: o,
            setSelectedPairIndex: t,
            error: l,
            query: m,
            setQuery: j,
            isLoading: g,
            pairs: p,
            showClearButton: b,
            adsProviderValue: y,
            latestTokens: k,
            clearError: x
        }
    },
    he = 18,
    tt = [...Array(he)],
    Ae = ({
        children: e
    }) => s.jsxs(ue, {
        alignItems: "stretch",
        children: [s.jsxs(q, {
            justifyContent: "space-between",
            children: [s.jsxs(L, {
                fontWeight: "semibold",
                fontSize: {
                    md: "xl"
                },
                fontFamily: "heading",
                children: ["Recently Updated ", s.jsx(L, {
                    display: {
                        base: "none",
                        md: "initial"
                    },
                    children: "Token Info"
                })]
            }), s.jsxs(vs, {
                href: "https://marketplace.dexscreener.com/product/token-info",
                target: "_blank",
                display: "flex",
                alignItems: "center",
                gap: "1",
                fontSize: "sm",
                children: [s.jsx(F, {
                    as: Ps
                }), s.jsxs(L, {
                    children: ["Claim your spot ", s.jsx(L, {
                        display: {
                            base: "none",
                            md: "initial"
                        },
                        children: "here"
                    })]
                }), s.jsx(F, {
                    as: Cs,
                    boxSize: "10px"
                })]
            })]
        }), s.jsx(Ls, {
            templateColumns: {
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)"
            },
            columnGap: "3",
            rowGap: {
                base: 5,
                lg: 3
            },
            mt: {
                base: 2.5,
                lg: 0
            },
            children: e
        })]
    }),
    dt = e => {
        const {
            children: n,
            onSelect: a,
            onClose: u
        } = e, o = us({
            lg: !0
        }, {
            ssr: !1
        }), t = o, {
            colorMode: l
        } = ge(), c = hs(), x = gs(), {
            selectedPairIndex: C,
            setSelectedPairIndex: m,
            error: j,
            query: g,
            setQuery: p,
            isLoading: b,
            pairs: d,
            showClearButton: T,
            adsProviderValue: y,
            latestTokens: k,
            clearError: D
        } = st({
            isExtraLargeScreen: o ? ? !1,
            queryOverride: e.query,
            onQueryChange: e.onQueryChange
        }), [w, v] = i.useState(), A = i.useRef(null), G = i.useRef(null), W = i.useRef(null), f = se(C), I = se(d), K = se(t), P = i.useCallback(r => {
            a ? a(r) : x(pe({
                platformId: r.chainId,
                pairAddress: r.pairAddress
            }))
        }, [x, a]), S = i.useCallback(r => {
            var B;
            const h = r.currentTarget.dataset.index ? parseInt(r.currentTarget.dataset.index) : void 0;
            if (h === void 0) return;
            const E = (B = I.current) == null ? void 0 : B[h];
            if (E && a) {
                r.preventDefault(), a(E);
                return
            }
        }, [a, I]), Y = i.useCallback(r => {
            if (!K.current) return;
            const h = r.currentTarget.dataset.index ? parseInt(r.currentTarget.dataset.index) : void 0;
            h !== void 0 && (v("mouse"), m(h))
        }, [K, m]), z = i.useCallback(() => {
            var h;
            if (!t || !W.current || f.current === void 0) return;
            const r = W.current.querySelector(`div:nth-of-type(${f.current+1}) a`);
            r && (f.current === 0 ? (h = A.current) == null || h.scroll({
                top: 0,
                behavior: "smooth"
            }) : Gs(r, {
                scrollMode: "if-needed",
                block: "center"
            }))
        }, [f, t]), Q = i.useCallback(r => {
            if (t && !(j || f.current === void 0)) {
                switch (v("keyboard"), r.key) {
                    case "ArrowDown":
                        {
                            I.current && f.current < I.current.length - 1 && (r.preventDefault(), m(f.current + 1));
                            break
                        }
                    case "ArrowUp":
                        {
                            f.current > 0 && (r.preventDefault(), m(f.current - 1));
                            break
                        }
                    case "Enter":
                        {
                            if (I.current) {
                                const h = I.current[f.current];
                                h && (r.preventDefault(), P(h))
                            }
                            break
                        }
                }
                z()
            }
        }, [t, j, f, z, I, m, P]), X = i.useCallback(() => {
            var r;
            p(""), D(), (r = G.current) == null || r.focus(), m(void 0)
        }, [D, p, m]), $ = i.useCallback(r => {
            var h, E;
            p(r.target.value), ((h = A.current) == null ? void 0 : h.scrollTop) !== 0 && ((E = A.current) == null || E.scroll({
                top: 0,
                behavior: "smooth"
            }))
        }, [p]);
        return i.useEffect(() => {
            d && d.length > 0 && m(0)
        }, [d, m]), s.jsx(ps, {
            onClose: u,
            scrollBehavior: "inside",
            closeOnEsc: !c,
            motionPreset: "none",
            blockScrollOnMount: !1,
            isOpen: !0,
            children: s.jsx(ms, {
                children: s.jsx(Hs, {
                    value: y,
                    children: s.jsxs(bs, {
                        mt: {
                            base: 0,
                            lg: "16"
                        },
                        maxW: {
                            base: "100vw",
                            lg: "4xl"
                        },
                        h: {
                            base: "100vh",
                            lg: "auto"
                        },
                        maxH: {
                            base: "100dvh",
                            lg: "calc(100% - 7.5rem)"
                        },
                        children: [s.jsx(fs, {
                            bg: V("white", "blue.875", l),
                            p: 0,
                            children: s.jsxs(M, {
                                display: "flex",
                                alignItems: "center",
                                h: "50px",
                                gap: {
                                    base: 2.5,
                                    lg: 4
                                },
                                px: {
                                    base: 2.5,
                                    lg: 4
                                },
                                children: [s.jsxs(M, {
                                    display: "flex",
                                    alignItems: "center",
                                    color: V("gray.600", "white", l),
                                    children: [!b && s.jsx(F, {
                                        as: xs,
                                        boxSize: "18px"
                                    }), b && s.jsx(Ss, {
                                        boxSize: "18px",
                                        thickness: "3px"
                                    })]
                                }), s.jsx(ys, {
                                    ref: G,
                                    value: g,
                                    onChange: $,
                                    onKeyDown: Q,
                                    variant: "unstyled",
                                    flex: 1,
                                    fontSize: "xl",
                                    placeholder: "Search"
                                }), T && s.jsx(J, {
                                    onClick: X,
                                    variant: "outline",
                                    fontWeight: "normal",
                                    size: "xs",
                                    leftIcon: s.jsx(F, {
                                        as: js
                                    }),
                                    iconSpacing: "1",
                                    children: "Clear"
                                }), s.jsx(J, {
                                    onClick: u,
                                    display: {
                                        base: "flex",
                                        lg: "none"
                                    },
                                    variant: "solid",
                                    fontWeight: "normal",
                                    size: "xs",
                                    leftIcon: s.jsx(F, {
                                        as: Is
                                    }),
                                    iconSpacing: "1",
                                    children: "Close"
                                })]
                            })
                        }), s.jsx(Ts, {
                            ref: A,
                            p: 0,
                            bg: V("gray.25", "blue.975", l),
                            children: (!g || !d) && n || s.jsxs(ue, {
                                p: 3,
                                alignItems: "stretch",
                                width: "100%",
                                spacing: "5",
                                children: [s.jsx(_s, {
                                    variant: "search"
                                }), d === void 0 && !j && ks({
                                    value: k,
                                    onPending: () => s.jsx(Ae, {
                                        children: tt.map((r, h) => s.jsx(Qs, {
                                            display: {
                                                base: h < he ? void 0 : "none",
                                                md: "block"
                                            }
                                        }, h))
                                    }),
                                    onFailure: () => s.jsx(M, {
                                        width: "100%",
                                        maxWidth: "500px",
                                        padding: "3",
                                        textAlign: "center",
                                        alignSelf: "center",
                                        children: s.jsxs(R, {
                                            color: V("gray.400", "gray.200", l),
                                            children: ["Try:", " ", s.jsx(J, {
                                                onClick: () => p("Wrapped BTC"),
                                                variant: "link",
                                                colorScheme: "accent",
                                                children: "Wrapped BTC"
                                            }), ", ", s.jsx(J, {
                                                onClick: () => p("WETH"),
                                                variant: "link",
                                                colorScheme: "accent",
                                                minW: "auto",
                                                children: "WETH"
                                            }), " or ", s.jsx(J, {
                                                onClick: () => p("ETH USD"),
                                                variant: "link",
                                                colorScheme: "accent",
                                                children: "ETH USD"
                                            })]
                                        })
                                    }),
                                    onSuccess: r => s.jsx(Ae, {
                                        children: r.map((h, E) => s.jsx(Bs, {
                                            as: Xs,
                                            token: h,
                                            onClose: u,
                                            minWidth: "0",
                                            display: {
                                                base: E < he ? void 0 : "none",
                                                md: "block"
                                            }
                                        }, h.id))
                                    })
                                }), j && s.jsx(Ws, {
                                    size: "sm"
                                }), !j && (d == null ? void 0 : d.length) === 0 && s.jsx(M, {
                                    p: 3,
                                    children: s.jsxs(ws, {
                                        as: "p",
                                        flexDir: "column",
                                        gap: "3",
                                        opacity: .5,
                                        children: [s.jsx(L, {
                                            fontWeight: "semibold",
                                            fontFamily: "mono",
                                            fontSize: "32px",
                                            children: "¯\\_(ツ)_/¯"
                                        }), s.jsx(L, {
                                            children: "No results found"
                                        })]
                                    })
                                }), !j && d && d.length > 0 && s.jsx(ue, {
                                    ref: W,
                                    spacing: 3,
                                    alignItems: "stretch",
                                    children: d.map((r, h) => s.jsx(Ks, {
                                        "data-index": h,
                                        pair: r,
                                        onClick: S,
                                        onMouseMove: Y,
                                        selected: t && h === C,
                                        isHoverable: w === "mouse"
                                    }, `${r.chainId}:${r.pairAddress}`))
                                })]
                            })
                        })]
                    })
                })
            })
        })
    };
export {
    dt as C
};