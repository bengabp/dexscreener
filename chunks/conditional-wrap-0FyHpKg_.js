var $t = Object.defineProperty;
var Ft = (e, t, r) => t in e ? $t(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var j = (e, t, r) => (Ft(e, typeof t != "symbol" ? t + "" : t, r), r);
import {
    ff as zt,
    eE as pt,
    eF as ht,
    fg as gt,
    fh as ke,
    eG as Gt,
    fi as qt,
    fj as Xt,
    fk as Jt,
    fl as Kt,
    eJ as Yt,
    fm as q,
    fn as Qt,
    et as ve,
    bP as N,
    ch as Zt,
    bp as l,
    fo as er,
    fp as tr,
    fq as rr,
    a6 as U,
    aW as he,
    fr as sr,
    cM as _,
    fs as nr,
    bu as ge,
    c0 as or,
    b0 as St,
    c$ as ir,
    d4 as qe,
    eV as yt,
    ft as ar,
    fu as lr,
    fv as Le,
    n as f,
    fw as cr,
    fx as ae,
    fy as bt,
    fz as vt,
    fA as Ee,
    fB as se,
    fC as Pe,
    fD as Pt,
    fE as ur,
    fF as wt,
    fG as dr,
    fH as fr,
    fI as mr,
    fJ as pr,
    fK as hr,
    fL as xe,
    fM as gr,
    fN as Sr,
    fO as yr,
    fP as br,
    fQ as vr,
    fR as Pr,
    fS as wr,
    fT as Ct,
    fU as Cr,
    fV as Tr,
    fW as Tt,
    fX as kr,
    R as xr,
    aT as Ar,
    p as R,
    fY as Br,
    X as Ir,
    b3 as Lr,
    B as kt,
    fZ as Er,
    f4 as W,
    f_ as C,
    f$ as h,
    f6 as Se,
    eg as Ve,
    cf as xt,
    ce as At,
    g0 as Vr,
    f5 as ce,
    eI as Ur,
    g1 as Rr,
    q as H,
    b_ as Bt,
    c1 as It,
    g2 as Lt,
    d2 as Dr,
    br as Mr,
    du as Ae,
    g3 as Et,
    g4 as Nr,
    aZ as _r,
    c3 as Hr,
    e_ as le,
    aP as Or,
    a0 as jr,
    ck as Wr,
    ad as $r,
    g5 as Fr,
    dQ as zr,
    a_ as Gr,
    bK as qr,
    Y as Xe,
    E as Xr,
    bA as Jr,
    cy as Kr
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    w as Yr
} from "./index-IegrxUAU.js";
import {
    i as we,
    o as Qr,
    a as Zr
} from "./util-mk6Cl76j.js";
import {
    d as es,
    b as ts
} from "./dex-search.service-mcSyVurQ.js";
import {
    f as rs,
    c as ss
} from "./date-2BvDWMFk.js";
var ns = zt(function(e) {
    return function(r) {
        r === void 0 && (r = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = r
    }
});

function os(e, t) {
    var r = qt(e) ? {
            first: e
        } : typeof e == "number" ? {
            each: e
        } : e,
        s = r.first,
        n = r.each,
        o = r.with,
        i = o === void 0 ? is : o,
        a = r.scheduler,
        u = a === void 0 ? t ? ? gt : a,
        d = r.meta,
        c = d === void 0 ? null : d;
    if (s == null && n == null) throw new TypeError("No timeout provided.");
    return pt(function(g, m) {
        var S, y, p = null,
            b = 0,
            v = function(B) {
                y = ke(m, u, function() {
                    try {
                        S.unsubscribe(), Gt(i({
                            meta: c,
                            lastValue: p,
                            seen: b
                        })).subscribe(m)
                    } catch (A) {
                        m.error(A)
                    }
                }, B)
            };
        S = g.subscribe(ht(m, function(B) {
            y == null || y.unsubscribe(), b++, m.next(p = B), n > 0 && v(n)
        }, void 0, void 0, function() {
            y != null && y.closed || y == null || y.unsubscribe(), p = null
        })), !b && v(s != null ? typeof s == "number" ? s : +s - u.now() : n)
    })
}

function is(e) {
    throw new ns(e)
}

function as(e) {
    for (var t, r, s = [], n = 1; n < arguments.length; n++) s[n - 1] = arguments[n];
    var o = (t = Xt(s)) !== null && t !== void 0 ? t : gt,
        i = (r = s[0]) !== null && r !== void 0 ? r : null,
        a = s[1] || 1 / 0;
    return pt(function(u, d) {
        var c = [],
            g = !1,
            m = function(p) {
                var b = p.buffer,
                    v = p.subs;
                v.unsubscribe(), Kt(c, p), d.next(b), g && S()
            },
            S = function() {
                if (c) {
                    var p = new Yt;
                    d.add(p);
                    var b = [],
                        v = {
                            buffer: b,
                            subs: p
                        };
                    c.push(v), ke(p, o, function() {
                        return m(v)
                    }, e)
                }
            };
        i !== null && i >= 0 ? ke(d, o, S, i, !0) : g = !0, S();
        var y = ht(d, function(p) {
            var b, v, B = c.slice();
            try {
                for (var A = Jt(B), x = A.next(); !x.done; x = A.next()) {
                    var I = x.value,
                        w = I.buffer;
                    w.push(p), a <= w.length && m(I)
                }
            } catch (L) {
                b = {
                    error: L
                }
            } finally {
                try {
                    x && !x.done && (v = A.return) && v.call(A)
                } finally {
                    if (b) throw b.error
                }
            }
        }, function() {
            for (; c != null && c.length;) d.next(c.shift().buffer);
            y == null || y.unsubscribe(), d.complete(), d.unsubscribe()
        }, void 0, function() {
            return c = null
        });
        u.subscribe(y)
    })
}
const Vt = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    ls = e => {
        let t = ["iframe_loading_compatibility_mode", "study_templates", "items_favoriting", "datasource_copypaste", "seconds_resolution"],
            r = ["auto_enable_symbol_labels", "header_symbol_search", "save_shortcut", "header_saveload", "header_fullscreen_button", "symbol_search_hot_key", "popup_hints", "legend_inplace_edit"];
        const n = {
            library_path: "/tv/v27.001/",
            logo: e.hideTradingViewLogo ? {
                image: "/transparent-pixel.png"
            } : void 0,
            theme: "dark",
            locale: "en",
            autosize: !0,
            symbol_search_request_delay: 500,
            container: e.containerId,
            auto_save_delay: 2,
            timezone: Vt(),
            interval: e.defaultInterval ? ? q[15],
            favorites: {
                intervals: e.favoriteIntervals,
                chartTypes: ["Line", "Candles"]
            },
            overrides: { ...e.widgetOverrides,
                "scalesProperties.fontSize": 14,
                "scalesProperties.showStudyLastValue": !1,
                "scalesProperties.showSymbolLabels": !1,
                "mainSeriesProperties.style": e.chartStyle ? ? 1
            },
            datafeed: e.dataFeed.getDataFeed(),
            symbol: e.symbol,
            saved_data: e.savedData,
            save_load_adapter: e.saveLoadAdapter,
            custom_formatters: {
                priceFormatterFactory: () => ({
                    format: o => o === null ? o : Qt({
                        price: o
                    })
                })
            }
        };
        return e.settingsAdapter && (n.settings_adapter = e.settingsAdapter), e.symbolLogo && t.push("show_symbol_logos"), e.enabledFeatures && (t.push(...e.enabledFeatures), r = r.filter(o => {
            var i;
            return !((i = e.enabledFeatures) != null && i.includes(o))
        })), e.disabledFeatures && (r.push(...e.disabledFeatures), t = t.filter(o => {
            var i;
            return !((i = e.disabledFeatures) != null && i.includes(o))
        })), n.enabled_features = t, n.disabled_features = r, n
    },
    re = (e, t, r) => {
        const s = new Date(e);
        switch (t) {
            case "second":
                s.setMilliseconds(0), s.setSeconds(s.getSeconds() - s.getSeconds() % r);
                break;
            case "minute":
                s.setSeconds(0, 0), s.setMinutes(s.getMinutes() - s.getMinutes() % r);
                break;
            case "hour":
                s.setMinutes(0, 0, 0), s.setHours(s.getHours() - s.getHours() % r);
                break;
            case "day":
                s.setHours(0, 0, 0, 0), s.setDate(s.getDate() - s.getDate() % r);
                break;
            case "week":
                {
                    const n = s.getDay(),
                        o = (n === 0 ? 7 : n) - 1;s.setDate(s.getDate() - o),
                    s.setHours(0, 0, 0, 0);
                    break
                }
            case "month":
                if (r !== 1) throw new Error("Month truncation only supports amount of 1");
                s.setHours(0, 0, 0, 0), s.setDate(1);
                break;
            default:
                throw new Error("Unsupported interval")
        }
        return Math.floor(s.getTime() / 1e3)
    },
    cs = (e, t) => {
        if (t.endsWith("S")) {
            const r = ve(t.split("S")[0]);
            return re(e, "second", r)
        } else if (t.endsWith("M")) {
            const r = ve(t.split("M")[0]);
            return re(e, "month", r)
        } else if (t.endsWith("W")) {
            const r = ve(t.split("W")[0]);
            return re(e, "week", r)
        } else {
            const r = Number.parseInt(t);
            if (r < 60) return re(e, "minute", r);
            if (r >= 60 && r <= 720) {
                const s = Math.floor(r / 60);
                return re(e, "hour", s)
            } else return re(e, "day", 1)
        }
    },
    us = () => ({
        buildSearchTicker: (e, t) => {
            var s;
            let r = `${t.chainId}+${t.pairAddress}+${(s=t.quoteToken)==null?void 0:s.address}`;
            return t.c && (r = `${r}+${t.c}`, t.c === "a" && (r = `${r}+${t.a}`)), `${e} (${r})`
        },
        getComparableSymbolDetail: e => {
            const t = /\((.*\+.*)\)/,
                r = e.match(t);
            if (!r || !r[1]) return;
            const [s, n, o, i, a] = r[1].split("+");
            if (!(!s || !n || !o)) return {
                context: i == null ? void 0 : i.toLowerCase(),
                ammId: a == null ? void 0 : a.toLowerCase(),
                chainId: s.toLowerCase(),
                pairId: n.toLowerCase(),
                quoteTokenAddress: o.toLowerCase()
            }
        }
    });
class ds {
    constructor(t) {
        j(this, "params");
        j(this, "barCursor", {});
        j(this, "isTriggeringSubscribers", !1);
        j(this, "symbolManagement", us());
        j(this, "subscribeBarsCallbacks", []);
        j(this, "makerHistory", []);
        j(this, "getResolution", t => t.indexOf("S") != -1 ? t : t === "1D" ? 1440 : t);
        j(this, "getSymbolInfoDescription", t => this.params.chartType === "marketCap" ? `${t} (Market Cap) on ${this.params.dexName}` : `${t} on ${this.params.dexName}`);
        this.params = t, this.makerHistory = []
    }
    async fetchDexChartBars(t) {
        var n;
        const r = await this.params.dexChartAmmService.getBars({
                chartType: this.params.chartType,
                context: t.context,
                ammId: t.ammId,
                chainId: t.chainId,
                pairAddress: t.pairAddress,
                quoteTokenAddress: t.quoteTokenAddress,
                beforeBlockNumber: t.beforeBlockNumber,
                afterBlockNumber: t.afterBlockNumber,
                resolution: this.getResolution(t.resolution).toString(),
                countBack: t.countBack,
                usdOnly: t.usdOnly,
                isInverted: t.isInverted,
                circulatingSupply: this.params.circulatingSupply ? ? void 0
            }),
            s = [];
        return (n = r.bars) == null || n.forEach(o => {
            if (o.closeUsd && t.usdOnly) {
                const i = new N(o.closeUsd).toNumber();
                s.push({
                    time: o.timestamp,
                    open: o.openUsd ? new N(o.openUsd).toNumber() : i,
                    high: o.highUsd ? new N(o.highUsd).toNumber() : i,
                    low: o.lowUsd ? new N(o.lowUsd).toNumber() : i,
                    close: o.closeUsd ? new N(o.closeUsd).toNumber() : i,
                    volume: o.volumeUsd ? new N(o.volumeUsd).toNumber() : void 0,
                    minBlockNumber: o.minBlockNumber,
                    maxBlockNumber: o.maxBlockNumber
                })
            } else t.usdOnly || s.push({
                time: o.timestamp,
                open: new N(o.open).toNumber(),
                high: new N(o.high).toNumber(),
                low: new N(o.low).toNumber(),
                close: new N(o.close).toNumber(),
                volume: o.volumeUsd ? new N(o.volumeUsd).toNumber() : void 0,
                minBlockNumber: o.minBlockNumber,
                maxBlockNumber: o.maxBlockNumber
            })
        }), s
    }
    getFetchBarParameters(t) {
        const r = this.symbolManagement.getComparableSymbolDetail(t);
        return r || {
            context: this.params.context,
            ammId: this.params.ammId,
            chainId: this.params.chainId,
            pairId: this.params.pairAddress,
            quoteTokenAddress: this.params.quoteTokenAddress
        }
    }
    setBarCursor(t) {
        var n, o;
        const r = t.oldest ? { ...t.oldest
            } : (n = this.barCursor[t.resolution]) == null ? void 0 : n.oldest,
            s = t.newest ? { ...t.newest
            } : (o = this.barCursor[t.resolution]) == null ? void 0 : o.newest;
        this.barCursor[t.resolution] = {
            oldest: r,
            newest: s
        }
    }
    setTradingHistoryMarks(t) {
        this.makerHistory = t
    }
    getDataFeed() {
        return {
            onReady: t => {
                setTimeout(() => {
                    t({
                        supported_resolutions: this.params.supportedResolutions,
                        supports_marks: !0
                    })
                }, 0)
            },
            searchSymbols: async (t, r, s, n) => {
                const i = (await this.params.searchPair(t)).map(a => {
                    const u = `${a.baseToken.symbol}/${a.quoteTokenSymbol}`,
                        d = this.symbolManagement.buildSearchTicker(u, a);
                    return {
                        symbol: u,
                        full_name: u,
                        description: `${a.chainId} / ${a.dexId}`,
                        exchange: "dexscreener.com",
                        ticker: d,
                        type: ""
                    }
                });
                n(i)
            },
            resolveSymbol: (t, r) => {
                setTimeout(() => {
                    var o;
                    let s = 100,
                        n = ((o = this.params.latestPrice.split(".")[1]) == null ? void 0 : o.length) ? ? 0;
                    n < 4 && (n = 4), n > 2 && (s = 10 ** Math.min(n, 16)), r({
                        name: t,
                        description: this.getSymbolInfoDescription(t),
                        exchange: "dexscreener.com",
                        minmov: 1,
                        pricescale: s,
                        session: "24x7",
                        timezone: Vt(),
                        supported_resolutions: this.params.supportedResolutions,
                        has_seconds: !0,
                        has_intraday: !0,
                        has_daily: !0,
                        visible_plots_set: "ohlcv",
                        logo_urls: [this.params.symbolLogo]
                    })
                }, 0)
            },
            getBars: async (t, r, s, n, o) => {
                var m, S;
                const {
                    context: i,
                    ammId: a,
                    chainId: u,
                    pairId: d,
                    quoteTokenAddress: c
                } = this.getFetchBarParameters(t.name), g = await Zt({
                    callback: () => {
                        var y, p;
                        return this.fetchDexChartBars({
                            context: i,
                            ammId: a,
                            chainId: u,
                            pairAddress: d,
                            quoteTokenAddress: c,
                            beforeBlockNumber: (p = (y = this.barCursor[r]) == null ? void 0 : y.oldest) == null ? void 0 : p.minBlockNumber,
                            resolution: r,
                            countBack: s.countBack,
                            usdOnly: this.params.useUsdPrice,
                            isInverted: this.params.isInverted
                        })
                    },
                    retrySettings: {
                        tries: 3,
                        delayInMs: 1e3,
                        timeoutInMs: 3e4
                    }
                }).catch(() => {
                    o("Failed fetching bars")
                });
                if (g)
                    if (g.length > 0) {
                        const y = (m = this.barCursor[r]) == null ? void 0 : m.newest,
                            p = g[g.length - 1];
                        (!y || y.maxBlockNumber < p.maxBlockNumber) && (this.setBarCursor({
                            resolution: r,
                            newest: p
                        }), this.params.onLatestPrice && this.params.onLatestPrice({
                            value: p.close,
                            usd: this.params.useUsdPrice
                        }));
                        const b = (S = this.barCursor[r]) == null ? void 0 : S.oldest,
                            v = g[0];
                        (!b || b.minBlockNumber > v.minBlockNumber) && this.setBarCursor({
                            resolution: r,
                            oldest: v
                        }), n(g)
                    } else n([], {
                        noData: !0
                    })
            },
            getMarks: (t, r, s, n, o) => {
                const i = this.makerHistory.map(a => ({
                    id: a.id,
                    time: cs(a.timestamp, o),
                    color: {
                        border: a.color,
                        background: a.color
                    },
                    text: a.text,
                    label: a.label,
                    labelFontColor: "white",
                    minSize: 25
                }));
                n(i)
            },
            subscribeBars: (t, r, s, n) => {
                this.subscribeBarsCallbacks.push({
                    subscriberId: n,
                    symbolName: t.name,
                    resolution: r,
                    callback: s
                })
            },
            unsubscribeBars: t => {
                this.subscribeBarsCallbacks.forEach(r => {
                    r.subscriberId === t && (r.callback = null, delete this.barCursor[r.resolution])
                })
            }
        }
    }
    triggerSubscribers() {
        Object.keys(this.barCursor).length !== 0 && (this.isTriggeringSubscribers || (this.isTriggeringSubscribers = !0, Promise.all(this.subscribeBarsCallbacks.map(async ({
            symbolName: t,
            resolution: r,
            callback: s
        }) => {
            var g;
            if (!s) return;
            const n = (g = this.barCursor[r]) == null ? void 0 : g.newest;
            if (!n) return;
            const {
                context: o,
                ammId: i,
                chainId: a,
                pairId: u,
                quoteTokenAddress: d
            } = this.getFetchBarParameters(t), c = await this.fetchDexChartBars({
                context: o,
                ammId: i,
                chainId: a,
                pairAddress: u,
                quoteTokenAddress: d,
                afterBlockNumber: n.minBlockNumber - 1,
                resolution: r,
                countBack: 2,
                usdOnly: this.params.useUsdPrice,
                isInverted: this.params.isInverted
            }).catch(() => {});
            if (c && c.length !== 0) try {
                c.forEach(m => {
                    var y;
                    const S = (y = this.barCursor[r]) == null ? void 0 : y.newest;
                    if (S) {
                        if (m.minBlockNumber === S.minBlockNumber) {
                            const p = { ...m,
                                open: S.open
                            };
                            this.setBarCursor({
                                resolution: r,
                                newest: p
                            }), s(p)
                        } else if (m.minBlockNumber > S.minBlockNumber) {
                            const p = { ...m,
                                open: S.close
                            };
                            this.setBarCursor({
                                resolution: r,
                                newest: p
                            }), s(p)
                        }
                    }
                }), this.params.onLatestPrice && this.params.onLatestPrice({
                    value: n.close,
                    usd: this.params.useUsdPrice
                })
            } catch {}
        })).then(() => {
            this.isTriggeringSubscribers = !1
        })))
    }
}
const Ce = l.object({
        pairChartSettings: er.optional(),
        globalChartSettings: tr.optional(),
        chartStudyTemplates: l.array(rr).optional()
    }),
    Je = "chart.lastUsedTimeBasedResolution",
    Ke = "chartproperties.mainSeriesProperties",
    fs = U.injectable(he, sr, (e, t) => ({
        actions: {
            async allChartStudyTemplates() {
                const r = await _(e.currentUser);
                return r ? t.findByUserId(r.id) : []
            },
            async persistChartStudyTemplate(r) {
                const s = await _(e.ensuredCurrentUser),
                    o = (await t.findByUserId(s.id)).find(i => i.name === r.name);
                o ? await t.update({
                    id: o.id,
                    userId: s.id,
                    input: r
                }) : await t.create(s.id, r)
            },
            async deleteChartStudyTemplate(r) {
                await t.delete(r)
            }
        }
    })),
    ms = U.injectable(he, nr, ge, (e, t, r) => {
        const s = e.currentUser.pipe(or(i => i ? new ir(a => t.findByUserIdSnapshot({
                userId: i.id,
                onResult: u => {
                    a.next(u)
                },
                onError: u => {
                    r.error({
                        event: {
                            id: "failedOnReadingGlobalChartSettingsStore",
                            data: {
                                error: u,
                                userId: i.id
                            }
                        }
                    }), a.error(u)
                }
            })) : St(void 0)), qe),
            n = new yt,
            o = ar(s, n).pipe(qe);
        return {
            all: o,
            actions: {
                async createGlobalChartSettings(i) {
                    const a = await _(e.ensuredCurrentUser);
                    await t.create(a.id, i)
                },
                async updateGlobalChartSettings(i, a) {
                    const u = await _(e.ensuredCurrentUser);
                    await t.update({
                        id: i,
                        userId: u.id,
                        input: a
                    })
                },
                async persistGlobalChartSettings(i) {
                    const a = await _(o),
                        u = await _(e.ensuredCurrentUser);
                    if (a) {
                        const d = { ...a,
                            settings: { ...a.settings,
                                ...i.settings
                            }
                        };
                        n.next(d), await this.updateGlobalChartSettings(a.id, d).catch(c => {
                            r.error({
                                event: {
                                    id: "failedUpdatingGlobalChartSettings",
                                    data: {
                                        error: c,
                                        userId: u.id
                                    }
                                }
                            })
                        })
                    } else await this.createGlobalChartSettings(i)
                }
            }
        }
    }),
    ps = U.injectable(he, lr, (e, t) => {
        const r = async n => {
                const o = await _(e.ensuredCurrentUser);
                await t.create(o.id, n)
            },
            s = async (n, o) => {
                const i = await _(e.ensuredCurrentUser);
                await t.update({
                    pairChartSettings: n,
                    input: o,
                    userId: i.id
                })
            };
        return {
            actions: {
                async getPairChartSettings(n) {
                    const o = await _(e.currentUser);
                    if (!o) return;
                    const i = await t.findByPairId({
                        userId: o.id,
                        pairId: n.pair.pairId,
                        chainId: n.pair.chainId
                    });
                    if (i) return i
                },
                async persistPairChartSettings(n) {
                    const o = await _(e.ensuredCurrentUser),
                        i = await t.findByPairId({
                            userId: o.id,
                            pairId: n.pair.pairId,
                            chainId: n.pair.chainId
                        });
                    i ? await s(i, n) : await r(n)
                }
            }
        }
    }),
    hs = ["volumePaneSize", "editorFontsList", "priceScaleSelectionStrategyName", "paneProperties.backgroundType", "paneProperties.background", "paneProperties.backgroundGradientStartColor", "paneProperties.backgroundGradientEndColor", "paneProperties.vertGridProperties.color", "paneProperties.vertGridProperties.style", "paneProperties.horzGridProperties.color", "paneProperties.horzGridProperties.style", "paneProperties.crossHairProperties.color", "paneProperties.crossHairProperties.style", "paneProperties.crossHairProperties.transparency", "paneProperties.crossHairProperties.width", "paneProperties.topMargin", "paneProperties.bottomMargin", "paneProperties.axisProperties.autoScale", "paneProperties.axisProperties.percentage", "paneProperties.axisProperties.indexedTo100", "paneProperties.axisProperties.log", "paneProperties.axisProperties.alignLabels", "paneProperties.axisProperties.isInverted", "paneProperties.legendProperties.showStudyArguments", "paneProperties.legendProperties.showStudyTitles", "paneProperties.legendProperties.showStudyValues", "paneProperties.legendProperties.showSeriesTitle", "paneProperties.legendProperties.showSeriesOHLC", "paneProperties.legendProperties.showLegend", "paneProperties.legendProperties.showBarChange", "paneProperties.legendProperties.showBackground", "paneProperties.legendProperties.backgroundTransparency", "scalesProperties.axisHighlightColor", "scalesProperties.axisLineToolLabelBackgroundColorActive", "scalesProperties.axisLineToolLabelBackgroundColorCommon", "scalesProperties.backgroundColor", "scalesProperties.lineColor", "scalesProperties.textColor", "scalesProperties.fontSize", "scalesProperties.scaleSeriesOnly", "scalesProperties.showSeriesLastValue", "scalesProperties.seriesLastValueMode", "scalesProperties.showSeriesPrevCloseValue", "scalesProperties.showStudyLastValue", "scalesProperties.showSymbolLabels", "scalesProperties.showStudyPlotLabels", "scalesProperties.showPriceScaleCrosshairLabel", "scalesProperties.showTimeScaleCrosshairLabel", "timeScale.rightOffset", "sessions.vertlines.sessBreaks.color", "sessions.vertlines.sessBreaks.style", "sessions.vertlines.sessBreaks.visible", "sessions.vertlines.sessBreaks.width", "mainSeriesProperties.style", "mainSeriesProperties.visible", "mainSeriesProperties.showPriceLine", "mainSeriesProperties.priceLineWidth", "mainSeriesProperties.priceLineColor", "mainSeriesProperties.baseLineColor", "mainSeriesProperties.showPrevClosePriceLine", "mainSeriesProperties.prevClosePriceLineWidth", "mainSeriesProperties.prevClosePriceLineColor", "mainSeriesProperties.showCountdown", "mainSeriesProperties.priceAxisProperties.autoScale", "mainSeriesProperties.priceAxisProperties.lockScale", "mainSeriesProperties.priceAxisProperties.percentage", "mainSeriesProperties.priceAxisProperties.indexedTo100", "mainSeriesProperties.priceAxisProperties.log", "mainSeriesProperties.priceAxisProperties.isInverted", "mainSeriesProperties.priceAxisProperties.alignLabels", "mainSeriesProperties.statusViewStyle.showExchange", "mainSeriesProperties.statusViewStyle.showInterval", "mainSeriesProperties.statusViewStyle.symbolTextSource", "symbolWatermarkProperties.color ", "symbolWatermarkProperties.visibility ", "mainSeriesProperties.highLowAvgPrice.highLowPriceLinesVisible", "mainSeriesProperties.highLowAvgPrice.highLowPriceLabelsVisible", "mainSeriesProperties.highLowAvgPrice.averageClosePriceLineVisible", "mainSeriesProperties.highLowAvgPrice.averageClosePriceLabelVisible", "mainSeriesProperties.candleStyle.upColor", "mainSeriesProperties.candleStyle.downColor", "mainSeriesProperties.candleStyle.drawWick", "mainSeriesProperties.candleStyle.drawBorder", "mainSeriesProperties.candleStyle.borderColor", "mainSeriesProperties.candleStyle.borderUpColor", "mainSeriesProperties.candleStyle.borderDownColor", "mainSeriesProperties.candleStyle.wickColor", "mainSeriesProperties.candleStyle.wickUpColor", "mainSeriesProperties.candleStyle.wickDownColor", "mainSeriesProperties.candleStyle.barColorsOnPrevClose", "mainSeriesProperties.candleStyle.drawBody", "mainSeriesProperties.hollowCandleStyle.upColor", "mainSeriesProperties.hollowCandleStyle.downColor", "mainSeriesProperties.hollowCandleStyle.drawWick", "mainSeriesProperties.hollowCandleStyle.drawBorder", "mainSeriesProperties.hollowCandleStyle.borderColor", "mainSeriesProperties.hollowCandleStyle.borderUpColor", "mainSeriesProperties.hollowCandleStyle.borderDownColor", "mainSeriesProperties.hollowCandleStyle.wickColor", "mainSeriesProperties.hollowCandleStyle.wickUpColor", "mainSeriesProperties.hollowCandleStyle.wickDownColor", "mainSeriesProperties.hollowCandleStyle.drawBody", "mainSeriesProperties.haStyle.upColor", "mainSeriesProperties.haStyle.downColor", "mainSeriesProperties.haStyle.drawWick", "mainSeriesProperties.haStyle.drawBorder", "mainSeriesProperties.haStyle.borderColor", "mainSeriesProperties.haStyle.borderUpColor", "mainSeriesProperties.haStyle.borderDownColor", "mainSeriesProperties.haStyle.wickColor", "mainSeriesProperties.haStyle.wickUpColor", "mainSeriesProperties.haStyle.wickDownColor", "mainSeriesProperties.haStyle.barColorsOnPrevClose", "mainSeriesProperties.haStyle.drawBody", "mainSeriesProperties.barStyle.upColor", "mainSeriesProperties.barStyle.downColor", "mainSeriesProperties.barStyle.barColorsOnPrevClose", "mainSeriesProperties.barStyle.dontDrawOpen", "mainSeriesProperties.barStyle.thinBars", "mainSeriesProperties.columnStyle.upColor", "mainSeriesProperties.columnStyle.downColor", "mainSeriesProperties.columnStyle.barColorsOnPrevClose", "mainSeriesProperties.columnStyle.priceSource", "mainSeriesProperties.lineStyle.color", "mainSeriesProperties.lineStyle.linestyle", "mainSeriesProperties.lineStyle.linewidth", "mainSeriesProperties.lineStyle.priceSource", "mainSeriesProperties.areaStyle.color1", "mainSeriesProperties.areaStyle.color2", "mainSeriesProperties.areaStyle.linecolor", "mainSeriesProperties.areaStyle.linestyle", "mainSeriesProperties.areaStyle.linewidth", "mainSeriesProperties.areaStyle.priceSource", "mainSeriesProperties.areaStyle.transparency", "mainSeriesProperties.baselineStyle.baselineColor", "mainSeriesProperties.baselineStyle.topFillColor1", "mainSeriesProperties.baselineStyle.topFillColor2", "mainSeriesProperties.baselineStyle.bottomFillColor1", "mainSeriesProperties.baselineStyle.bottomFillColor2", "mainSeriesProperties.baselineStyle.topLineColor", "mainSeriesProperties.baselineStyle.bottomLineColor", "mainSeriesProperties.baselineStyle.topLineWidth", "mainSeriesProperties.baselineStyle.bottomLineWidth", "mainSeriesProperties.baselineStyle.priceSource", "mainSeriesProperties.baselineStyle.transparency", "mainSeriesProperties.baselineStyle.baseLevelPercentage", "mainSeriesProperties.hiloStyle.color", "mainSeriesProperties.hiloStyle.showBorders", "mainSeriesProperties.hiloStyle.borderColor", "mainSeriesProperties.hiloStyle.showLabels", "mainSeriesProperties.hiloStyle.labelColor", "mainSeriesProperties.pbStyle.upColor", "mainSeriesProperties.pbStyle.downColor", "mainSeriesProperties.pbStyle.borderUpColor", "mainSeriesProperties.pbStyle.borderDownColor", "mainSeriesProperties.pbStyle.upColorProjection", "mainSeriesProperties.pbStyle.downColorProjection", "mainSeriesProperties.pbStyle.borderUpColorProjection", "mainSeriesProperties.pbStyle.borderDownColorProjection", "mainSeriesProperties.renkoStyle.upColor", "mainSeriesProperties.renkoStyle.downColor", "mainSeriesProperties.renkoStyle.borderUpColor", "mainSeriesProperties.renkoStyle.borderDownColor", "mainSeriesProperties.renkoStyle.upColorProjection", "mainSeriesProperties.renkoStyle.downColorProjection", "mainSeriesProperties.renkoStyle.borderUpColorProjection", "mainSeriesProperties.renkoStyle.borderDownColorProjection", "mainSeriesProperties.renkoStyle.wickUpColor", "mainSeriesProperties.renkoStyle.wickDownColor", "mainSeriesProperties.kagiStyle.upColor", "mainSeriesProperties.kagiStyle.downColor", "mainSeriesProperties.kagiStyle.upColorProjection", "mainSeriesProperties.kagiStyle.downColorProjection", "mainSeriesProperties.pnfStyle.upColor", "mainSeriesProperties.pnfStyle.downColor", "mainSeriesProperties.pnfStyle.upColorProjection", "mainSeriesProperties.pnfStyle.downColorProjection", "mainSeriesProperties.rangeStyle.upColor", "mainSeriesProperties.rangeStyle.downColor", "mainSeriesProperties.rangeStyle.thinBars", "mainSeriesProperties.rangeStyle.upColorProjection", "mainSeriesProperties.rangeStyle.downColorProjection"];

function Ut(e) {
    const t = Le(() => ae(e)),
        {
            isStatic: r
        } = f.useContext(cr);
    if (r) {
        const [, s] = f.useState(e);
        f.useEffect(() => t.on("change", s), [])
    }
    return t
}
const gs = e => typeof e == "object" && e.mix,
    Ss = e => gs(e) ? e.mix : void 0;

function ys(...e) {
    const t = !Array.isArray(e[0]),
        r = t ? 0 : -1,
        s = e[0 + r],
        n = e[1 + r],
        o = e[2 + r],
        i = e[3 + r],
        a = bt(n, o, {
            mixer: Ss(o[0]),
            ...i
        });
    return t ? a(s) : a
}

function Rt(e, t) {
    const r = Ut(t()),
        s = () => r.set(t());
    return s(), vt(() => {
        const n = () => se.update(s, !1, !0),
            o = e.map(i => i.on("change", n));
        return () => {
            o.forEach(i => i()), Ee(s)
        }
    }), r
}

function bs(e) {
    Pe.current = [], e();
    const t = Rt(Pe.current, e);
    return Pe.current = void 0, t
}

function vs(e, t, r, s) {
    if (typeof e == "function") return bs(e);
    const n = typeof t == "function" ? t : ys(t, r, s);
    return Array.isArray(e) ? Ye(e, n) : Ye([e], ([o]) => n(o))
}

function Ye(e, t) {
    const r = Le(() => []);
    return Rt(e, () => {
        r.length = 0;
        const s = e.length;
        for (let n = 0; n < s; n++) r[n] = e[n].get();
        return t(r)
    })
}

function Ue(e, t, r) {
    var s;
    if (typeof e == "string") {
        let n = document;
        t && (n = t.current), r ? ((s = r[e]) !== null && s !== void 0 || (r[e] = n.querySelectorAll(e)), e = r[e]) : e = n.querySelectorAll(e)
    } else e instanceof Element && (e = [e]);
    return Array.from(e || [])
}
const me = new WeakMap;
let X;

function Ps(e, t) {
    if (t) {
        const {
            inlineSize: r,
            blockSize: s
        } = t[0];
        return {
            width: r,
            height: s
        }
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function ws({
    target: e,
    contentRect: t,
    borderBoxSize: r
}) {
    var s;
    (s = me.get(e)) === null || s === void 0 || s.forEach(n => {
        n({
            target: e,
            contentSize: t,
            get size() {
                return Ps(e, r)
            }
        })
    })
}

function Cs(e) {
    e.forEach(ws)
}

function Ts() {
    typeof ResizeObserver > "u" || (X = new ResizeObserver(Cs))
}

function ks(e, t) {
    X || Ts();
    const r = Ue(e);
    return r.forEach(s => {
        let n = me.get(s);
        n || (n = new Set, me.set(s, n)), n.add(t), X == null || X.observe(s)
    }), () => {
        r.forEach(s => {
            const n = me.get(s);
            n == null || n.delete(t), n != null && n.size || X == null || X.unobserve(s)
        })
    }
}
const pe = new Set;
let ue;

function xs() {
    ue = () => {
        const e = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            t = {
                target: window,
                size: e,
                contentSize: e
            };
        pe.forEach(r => r(t))
    }, window.addEventListener("resize", ue)
}

function As(e) {
    return pe.add(e), ue || xs(), () => {
        pe.delete(e), !pe.size && ue && (ue = void 0)
    }
}

function Bs(e, t) {
    return typeof e == "function" ? As(e) : ks(e, t)
}
const Is = 50,
    Qe = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    Ls = () => ({
        time: 0,
        x: Qe(),
        y: Qe()
    }),
    Es = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function Ze(e, t, r, s) {
    const n = r[t],
        {
            length: o,
            position: i
        } = Es[t],
        a = n.current,
        u = r.time;
    n.current = e["scroll" + i], n.scrollLength = e["scroll" + o] - e["client" + o], n.offset.length = 0, n.offset[0] = 0, n.offset[1] = n.scrollLength, n.progress = Pt(0, n.scrollLength, n.current);
    const d = s - u;
    n.velocity = d > Is ? 0 : ur(n.current - a, d)
}

function Vs(e, t, r) {
    Ze(e, "x", t, r), Ze(e, "y", t, r), t.time = r
}

function Us(e, t) {
    const r = {
        x: 0,
        y: 0
    };
    let s = e;
    for (; s && s !== t;)
        if (s instanceof HTMLElement) r.x += s.offsetLeft, r.y += s.offsetTop, s = s.offsetParent;
        else if (s.tagName === "svg") {
        const n = s.getBoundingClientRect();
        s = s.parentElement;
        const o = s.getBoundingClientRect();
        r.x += n.left - o.left, r.y += n.top - o.top
    } else if (s instanceof SVGGraphicsElement) {
        const {
            x: n,
            y: o
        } = s.getBBox();
        r.x += n, r.y += o;
        let i = null,
            a = s.parentNode;
        for (; !i;) a.tagName === "svg" && (i = a), a = s.parentNode;
        s = i
    } else break;
    return r
}
const Rs = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    Be = {
        start: 0,
        center: .5,
        end: 1
    };

function et(e, t, r = 0) {
    let s = 0;
    if (Be[e] !== void 0 && (e = Be[e]), typeof e == "string") {
        const n = parseFloat(e);
        e.endsWith("px") ? s = n : e.endsWith("%") ? e = n / 100 : e.endsWith("vw") ? s = n / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? s = n / 100 * document.documentElement.clientHeight : e = n
    }
    return typeof e == "number" && (s = t * e), r + s
}
const Ds = [0, 0];

function Ms(e, t, r, s) {
    let n = Array.isArray(e) ? e : Ds,
        o = 0,
        i = 0;
    return typeof e == "number" ? n = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? n = e.split(" ") : n = [e, Be[e] ? e : "0"]), o = et(n[0], r, s), i = et(n[1], t), o - i
}
const Ns = {
    x: 0,
    y: 0
};

function _s(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}

function Hs(e, t, r) {
    let {
        offset: s = Rs.All
    } = r;
    const {
        target: n = e,
        axis: o = "y"
    } = r, i = o === "y" ? "height" : "width", a = n !== e ? Us(n, e) : Ns, u = n === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : _s(n), d = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[o].offset.length = 0;
    let c = !t[o].interpolate;
    const g = s.length;
    for (let m = 0; m < g; m++) {
        const S = Ms(s[m], d[i], u[i], a[o]);
        !c && S !== t[o].interpolatorOffsets[m] && (c = !0), t[o].offset[m] = S
    }
    c && (t[o].interpolate = bt(t[o].offset, wt(s)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
}

function Os(e, t = e, r) {
    if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
        let s = t;
        for (; s && s !== e;) r.x.targetOffset += s.offsetLeft, r.y.targetOffset += s.offsetTop, s = s.offsetParent
    }
    r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
}

function js(e, t, r, s = {}) {
    return {
        measure: () => Os(e, s.target, r),
        update: n => {
            Vs(e, r, n), (s.offset || s.target) && Hs(e, r, s)
        },
        notify: () => t(r)
    }
}
const ie = new WeakMap,
    tt = new WeakMap,
    Te = new WeakMap,
    rt = e => e === document.documentElement ? window : e;

function Ws(e, {
    container: t = document.documentElement,
    ...r
} = {}) {
    let s = Te.get(t);
    s || (s = new Set, Te.set(t, s));
    const n = Ls(),
        o = js(t, e, n, r);
    if (s.add(o), !ie.has(t)) {
        const a = () => {
                for (const m of s) m.measure()
            },
            u = () => {
                for (const m of s) m.update(dr.timestamp)
            },
            d = () => {
                for (const m of s) m.notify()
            },
            c = () => {
                se.read(a, !1, !0), se.update(u, !1, !0), se.update(d, !1, !0)
            };
        ie.set(t, c);
        const g = rt(t);
        window.addEventListener("resize", c, {
            passive: !0
        }), t !== document.documentElement && tt.set(t, Bs(t, c)), g.addEventListener("scroll", c, {
            passive: !0
        })
    }
    const i = ie.get(t);
    return se.read(i, !1, !0), () => {
        var a;
        Ee(i);
        const u = Te.get(t);
        if (!u || (u.delete(o), u.size)) return;
        const d = ie.get(t);
        ie.delete(t), d && (rt(t).removeEventListener("scroll", d), (a = tt.get(t)) === null || a === void 0 || a(), window.removeEventListener("resize", d))
    }
}
const $s = () => ({
    scrollX: ae(0),
    scrollY: ae(0),
    scrollXProgress: ae(0),
    scrollYProgress: ae(0)
});

function Fs({
    container: e,
    target: t,
    layoutEffect: r = !0,
    ...s
} = {}) {
    const n = Le($s);
    return (r ? vt : f.useEffect)(() => Ws(({
        x: i,
        y: a
    }) => {
        n.scrollX.set(i.current), n.scrollXProgress.set(i.progress), n.scrollY.set(a.current), n.scrollYProgress.set(a.progress)
    }, { ...s,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    }), [e, t, JSON.stringify(s.offset)]), n
}

function zs(e, t) {
    let r;
    const s = () => {
        const {
            currentTime: n
        } = t, i = (n === null ? 0 : n.value) / 100;
        r !== i && e(i), r = i
    };
    return se.update(s, !0), () => Ee(s)
}
const Gs = fr(() => window.ScrollTimeline !== void 0);
class Dt {
    constructor(t) {
        this.animations = t.filter(Boolean)
    }
    then(t, r) {
        return Promise.all(this.animations).then(t).catch(r)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, r) {
        for (let s = 0; s < this.animations.length; s++) this.animations[s][t] = r
    }
    attachTimeline(t) {
        const r = this.animations.map(s => {
            if (Gs() && s.attachTimeline) s.attachTimeline(t);
            else return s.pause(), zs(n => {
                s.time = s.duration * n
            }, t)
        });
        return () => {
            r.forEach((s, n) => {
                s && s(), this.animations[n].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get duration() {
        let t = 0;
        for (let r = 0; r < this.animations.length; r++) t = Math.max(t, this.animations[r].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(r => r[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    stop() {
        this.runAll("stop")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function qs(e) {
    return typeof e == "object" && !Array.isArray(e)
}

function Xs(e) {
    const t = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        r = mr(e) ? new pr(t, {
            enableHardwareAcceleration: !1
        }) : new hr(t, {
            enableHardwareAcceleration: !0
        });
    r.mount(e), xe.set(e, r)
}

function Js(e, t = 100) {
    const r = gr({
            keyframes: [0, t],
            ...e
        }),
        s = Math.min(Sr(r), yr);
    return {
        type: "keyframes",
        ease: n => r.next(s * n).value / t,
        duration: br(s)
    }
}

function st(e, t, r, s) {
    var n;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? r : (n = s.get(t)) !== null && n !== void 0 ? n : e
}
const Ks = (e, t, r) => {
    const s = t - e;
    return ((r - e) % s + s) % s + e
};

function Ys(e, t) {
    return vr(e) ? e[Ks(0, e.length, t)] : e
}

function Qs(e, t, r) {
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        n.at > t && n.at < r && (wr(e, n), s--)
    }
}

function Zs(e, t, r, s, n, o) {
    Qs(e, n, o);
    for (let i = 0; i < t.length; i++) e.push({
        value: t[i],
        at: Pr(n, o, s[i]),
        easing: Ys(r, i)
    })
}

function en(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}
const tn = "easeInOut";

function rn(e, {
    defaultTransition: t = {},
    ...r
} = {}, s) {
    const n = t.duration || .3,
        o = new Map,
        i = new Map,
        a = {},
        u = new Map;
    let d = 0,
        c = 0,
        g = 0;
    for (let m = 0; m < e.length; m++) {
        const S = e[m];
        if (typeof S == "string") {
            u.set(S, c);
            continue
        } else if (!Array.isArray(S)) {
            u.set(S.name, st(c, S.at, d, u));
            continue
        }
        let [y, p, b = {}] = S;
        b.at !== void 0 && (c = st(c, b.at, d, u));
        let v = 0;
        const B = (A, x, I, w = 0, L = 0) => {
            const T = sn(A),
                {
                    delay: $ = 0,
                    times: E = wt(T),
                    type: ye = "keyframes",
                    ...F
                } = x;
            let {
                ease: ne = t.ease || "easeOut",
                duration: V
            } = x;
            const z = typeof $ == "function" ? $(w, L) : $,
                Y = T.length;
            if (Y <= 2 && ye === "spring") {
                let Z = 100;
                if (Y === 2 && an(T)) {
                    const K = T[1] - T[0];
                    Z = Math.abs(K)
                }
                const M = { ...F
                };
                V !== void 0 && (M.duration = Tr(V));
                const J = Js(M, Z);
                ne = J.ease, V = J.duration
            }
            V ? ? (V = n);
            const Q = c + z,
                G = Q + V;
            E.length === 1 && E[0] === 0 && (E[1] = 1);
            const oe = E.length - T.length;
            oe > 0 && Cr(E, oe), T.length === 1 && T.unshift(null), Zs(I, T, ne, E, Q, G), v = Math.max(z + V, v), g = Math.max(G, g)
        };
        if (Ct(y)) {
            const A = nt(y, i);
            B(p, b, ot("default", A))
        } else {
            const A = Ue(y, s, a),
                x = A.length;
            for (let I = 0; I < x; I++) {
                p = p, b = b;
                const w = A[I],
                    L = nt(w, i);
                for (const T in p) B(p[T], nn(b, T), ot(T, L), I, x)
            }
            d = c, c += v
        }
    }
    return i.forEach((m, S) => {
        for (const y in m) {
            const p = m[y];
            p.sort(en);
            const b = [],
                v = [],
                B = [];
            for (let x = 0; x < p.length; x++) {
                const {
                    at: I,
                    value: w,
                    easing: L
                } = p[x];
                b.push(w), v.push(Pt(0, g, I)), B.push(L || "easeOut")
            }
            v[0] !== 0 && (v.unshift(0), b.unshift(b[0]), B.unshift(tn)), v[v.length - 1] !== 1 && (v.push(1), b.push(null)), o.has(S) || o.set(S, {
                keyframes: {},
                transition: {}
            });
            const A = o.get(S);
            A.keyframes[y] = b, A.transition[y] = { ...t,
                duration: g,
                ease: B,
                times: v,
                ...r
            }
        }
    }), o
}

function nt(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function ot(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function sn(e) {
    return Array.isArray(e) ? e : [e]
}

function nn(e, t) {
    return e[t] ? { ...e,
        ...e[t]
    } : { ...e
    }
}
const on = e => typeof e == "number",
    an = e => e.every(on);

function Mt(e, t, r, s) {
    const n = Ue(e, s),
        o = n.length,
        i = [];
    for (let a = 0; a < o; a++) {
        const u = n[a];
        xe.has(u) || Xs(u);
        const d = xe.get(u),
            c = { ...r
            };
        typeof c.delay == "function" && (c.delay = c.delay(a, o)), i.push(...kr(d, { ...t,
            transition: c
        }, {}))
    }
    return new Dt(i)
}
const ln = e => Array.isArray(e) && Array.isArray(e[0]);

function cn(e, t, r) {
    const s = [];
    return rn(e, t, r).forEach(({
        keyframes: o,
        transition: i
    }, a) => {
        let u;
        Ct(a) ? u = Tt(a, o.default, i.default) : u = Mt(a, o, i), s.push(u)
    }), new Dt(s)
}
const un = e => {
        function t(r, s, n) {
            let o;
            return ln(r) ? o = cn(r, s, e) : qs(s) ? o = Mt(r, s, n, e) : o = Tt(r, s, n), e && e.animations.push(o), o
        }
        return t
    },
    dn = un();
var fn = {
        horizontal: {
            "> *:first-of-type:not(:last-of-type)": {
                borderEndRadius: 0
            },
            "> *:not(:first-of-type):not(:last-of-type)": {
                borderRadius: 0
            },
            "> *:not(:first-of-type):last-of-type": {
                borderStartRadius: 0
            }
        },
        vertical: {
            "> *:first-of-type:not(:last-of-type)": {
                borderBottomRadius: 0
            },
            "> *:not(:first-of-type):not(:last-of-type)": {
                borderRadius: 0
            },
            "> *:not(:first-of-type):last-of-type": {
                borderTopRadius: 0
            }
        }
    },
    mn = {
        horizontal: e => ({
            "& > *:not(style) ~ *:not(style)": {
                marginStart: e
            }
        }),
        vertical: e => ({
            "& > *:not(style) ~ *:not(style)": {
                marginTop: e
            }
        })
    },
    pn = xr(function(t, r) {
        const {
            size: s,
            colorScheme: n,
            variant: o,
            className: i,
            spacing: a = "0.5rem",
            isAttached: u,
            isDisabled: d,
            orientation: c = "horizontal",
            ...g
        } = t, m = Ar("chakra-button__group", i), S = f.useMemo(() => ({
            size: s,
            colorScheme: n,
            variant: o,
            isDisabled: d
        }), [s, n, o, d]);
        let y = {
            display: "inline-flex",
            ...u ? fn[c] : mn[c](a)
        };
        const p = c === "vertical";
        return R.jsx(Br, {
            value: S,
            children: R.jsx(Ir.div, {
                ref: r,
                role: "group",
                __css: y,
                className: m,
                "data-attached": u ? "" : void 0,
                "data-orientation": c,
                flexDir: p ? "column" : void 0,
                ...g
            })
        })
    });
pn.displayName = "ButtonGroup";
var fe = (e, t) => {
    const r = f.useRef(!1),
        s = f.useRef(!1);
    f.useEffect(() => {
        if (r.current && s.current) return e();
        s.current = !0
    }, t), f.useEffect(() => (r.current = !0, () => {
        r.current = !1
    }), [])
};

function hn() {
    var e = f.useRef(!0);
    return e.current ? (e.current = !1, !0) : e.current
}
var gn = function(e, t) {
    var r = hn();
    f.useEffect(function() {
        if (!r) return e()
    }, t)
};

function Sn() {
    var e = f.useRef(!1),
        t = f.useCallback(function() {
            return e.current
        }, []);
    return f.useEffect(function() {
        return e.current = !0,
            function() {
                e.current = !1
            }
    }, []), t
}
var yn = function(e) {
        e === void 0 && (e = {});
        var t = f.useState(e),
            r = t[0],
            s = t[1],
            n = f.useCallback(function(o) {
                s(function(i) {
                    return Object.assign({}, i, o instanceof Function ? o(i) : o)
                })
            }, []);
        return [r, n]
    },
    Co = function() {
        var e = Sn(),
            t = yn({
                value: void 0,
                error: void 0,
                noUserInteraction: !0
            }),
            r = t[0],
            s = t[1],
            n = f.useCallback(function(o) {
                if (e()) {
                    var i, a;
                    try {
                        if (typeof o != "string" && typeof o != "number") {
                            var u = new Error("Cannot copy typeof " + typeof o + " to clipboard, must be a string");
                            s({
                                value: o,
                                error: u,
                                noUserInteraction: !0
                            });
                            return
                        } else if (o === "") {
                            var u = new Error("Cannot copy empty string to clipboard.");
                            s({
                                value: o,
                                error: u,
                                noUserInteraction: !0
                            });
                            return
                        }
                        a = o.toString(), i = Yr(a), s({
                            value: a,
                            error: void 0,
                            noUserInteraction: i
                        })
                    } catch (d) {
                        s({
                            value: a,
                            error: d,
                            noUserInteraction: i
                        })
                    }
                }
            }, []);
        return [r, n]
    };

function bn(e, t) {
    t === void 0 && (t = 0);
    var r = f.useRef(!1),
        s = f.useRef(),
        n = f.useRef(e),
        o = f.useCallback(function() {
            return r.current
        }, []),
        i = f.useCallback(function() {
            r.current = !1, s.current && clearTimeout(s.current), s.current = setTimeout(function() {
                r.current = !0, n.current()
            }, t)
        }, [t]),
        a = f.useCallback(function() {
            r.current = null, s.current && clearTimeout(s.current)
        }, []);
    return f.useEffect(function() {
        n.current = e
    }, [e]), f.useEffect(function() {
        return i(), a
    }, [t]), [o, a, i]
}

function vn(e, t, r) {
    t === void 0 && (t = 0), r === void 0 && (r = []);
    var s = bn(e, t),
        n = s[0],
        o = s[1],
        i = s[2];
    return f.useEffect(i, r), [n, o]
}
var Pn = function(e) {
        f.useEffect(e, [])
    },
    wn = function(e, t) {
        var r = f.useRef(function() {});
        f.useEffect(function() {
            r.current = e
        }), f.useEffect(function() {
            if (t !== null) {
                var s = setInterval(function() {
                    return r.current()
                }, t || 0);
                return function() {
                    return clearInterval(s)
                }
            }
        }, [t])
    },
    Cn = function(e) {
        var t = f.useRef(e);
        t.current = e, Pn(function() {
            return function() {
                return t.current()
            }
        })
    },
    Tn = function(e) {
        var t = f.useRef(0),
            r = f.useState(e),
            s = r[0],
            n = r[1],
            o = f.useCallback(function(i) {
                cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function() {
                    n(i)
                })
            }, []);
        return Cn(function() {
            cancelAnimationFrame(t.current)
        }), [s, o]
    },
    To = function(e, t) {
        e === void 0 && (e = 1 / 0), t === void 0 && (t = 1 / 0);
        var r = Tn({
                width: we ? window.innerWidth : e,
                height: we ? window.innerHeight : t
            }),
            s = r[0],
            n = r[1];
        return f.useEffect(function() {
            if (we) {
                var o = function() {
                    n({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                };
                return Qr(window, "resize", o),
                    function() {
                        Zr(window, "resize", o)
                    }
            }
        }, []), s
    };
const ko = ({
        background: e,
        width: t,
        scrollContainerRef: r,
        forceVisibility: s
    }) => {
        const n = Lr("white", "black"),
            [o, i] = f.useState(s === !0),
            {
                scrollXProgress: a
            } = Fs({
                container: r,
                axis: "x"
            }),
            u = Ut(s ? 1 : 0),
            d = vs(a, [0, .9, 1], [1, 1, 0]),
            {
                current: c
            } = r;
        return f.useEffect(() => {
            (async () => {
                if (c) {
                    const {
                        clientWidth: m,
                        scrollWidth: S
                    } = c;
                    S > m && await dn(u, 1), i(!0);
                    return
                }
            })()
        }, [u, c]), R.jsx(kt, {
            as: Er.div,
            pointerEvents: "none",
            position: "absolute",
            width: t ? ? "50px",
            height: "100%",
            bgGradient: `linear(to-r, transparent, ${e??n})`,
            left: "0",
            top: "0",
            transform: "translateX(-100%)",
            style: {
                opacity: o ? d : u
            },
            initial: {
                opacity: s ? 1 : 0
            }
        })
    },
    kn = W({
        timestamp: C(),
        open: h(),
        openUsd: h().nullable(),
        high: h(),
        highUsd: h().nullable(),
        low: h(),
        lowUsd: h().nullable(),
        close: h(),
        closeUsd: h().nullable(),
        volumeUsd: h().nullable()
    }),
    xn = l.object({
        timestamp: l.number(),
        open: l.string(),
        openUsd: l.string().nullable(),
        high: l.string(),
        highUsd: l.string().nullable(),
        low: l.string(),
        lowUsd: l.string().nullable(),
        close: l.string(),
        closeUsd: l.string().nullable(),
        volumeUsd: l.string().nullable(),
        minBlockNumber: l.number(),
        maxBlockNumber: l.number()
    }),
    An = W({
        timestamp: C(),
        open: h(),
        openUsd: h().nullable(),
        high: h(),
        highUsd: h().nullable(),
        low: h(),
        lowUsd: h().nullable(),
        close: h(),
        closeUsd: h().nullable(),
        volumeUsd: h().nullable(),
        minBlockNumber: C(),
        maxBlockNumber: C()
    });
W({
    schemaVersion: h(),
    bars: Se(kn).nullable()
});
const Bn = l.object({
        schemaVersion: l.string(),
        bars: Ve(xn).nullable()
    }),
    In = W({
        schemaVersion: h(),
        bars: Se(An).nullable()
    }),
    Ln = U.injectable(At(), e => {
        const t = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_CHART_UNISWAP_HOST}/dex/chart/uniswap`
                }
            },
            r = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_CHART_BALANCER_HOST}/dex/balancer/chart`
                }
            },
            s = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_CHART_OSMOSIS_HOST}/dex/osmosis/chart`
                }
            },
            n = {
                schemaVersion: "1.0.0",
                endpoints: {
                    root: `${e.DS_DEX_CHART_AMM_HOST}/dex/chart/amm/v3`
                }
            };
        return {
            get(o) {
                var u, d;
                const i = (u = o == null ? void 0 : o.context) == null ? void 0 : u.toLowerCase(),
                    a = (d = o == null ? void 0 : o.ammId) == null ? void 0 : d.toLowerCase();
                return i === "u" ? t : i === "b" ? r : i === "o" ? s : { ...n,
                    endpoints: {
                        root: `${n.endpoints.root}/${a}`
                    }
                }
            }
        }
    }),
    En = U.injectable(Ln, xt, (e, t) => {
        const r = s => {
            const n = e.get(s),
                o = new URL(`${n.endpoints.root}/bars/${s.chainId}/${encodeURIComponent(s.pairAddress)}`);
            return s.chartType === "marketCap" && (o.searchParams.set("mc", "1"), s.circulatingSupply && o.searchParams.set("cs", s.circulatingSupply.toString())), s.beforeBlockNumber && o.searchParams.set("bbn", s.beforeBlockNumber.toString()), s.afterBlockNumber && o.searchParams.set("abn", s.afterBlockNumber.toString()), o.searchParams.set("res", s.resolution), o.searchParams.set("cb", s.countBack.toString()), o.searchParams.set("q", s.quoteTokenAddress), s.usdOnly || o.searchParams.set("uo", "0"), s.isInverted && o.searchParams.set("i", "1"), o
        };
        return {
            getBars: async s => {
                const n = r(s);
                return e.get(s).format === "json" ? t.get(n.toString(), Bn) : t.avro(n.toString(), In)
            }
        }
    }),
    Vn = e => {
        const [t, r] = f.useState("visible"), [s, n] = f.useState(!0);
        return f.useEffect(() => {
            const o = () => {
                document.visibilityState === "hidden" ? (r("hidden"), e != null && e.hiddenDebounceInMs || n(!1)) : document.visibilityState === "visible" && (r("visible"), n(!0))
            };
            return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o)
        }, [e == null ? void 0 : e.hiddenDebounceInMs]), vn(() => {
            e != null && e.hiddenDebounceInMs && t === "hidden" && n(!1)
        }, e == null ? void 0 : e.hiddenDebounceInMs, [e == null ? void 0 : e.hiddenDebounceInMs, t]), s
    },
    it = {
        production: {
            visibleDefault: 4500,
            visibleFast: 3e3,
            invisible: 1e4
        },
        development: {
            visibleDefault: 3e3,
            visibleFast: 1e3,
            invisible: 5e3
        }
    },
    at = e => {
        const t = e.isDev ? it.development : it.production;
        return e.isPageVisible ? e.m5Txns >= 20 ? {
            type: "visibleFast",
            rate: t.visibleFast
        } : {
            type: "visibleDefault",
            rate: t.visibleDefault
        } : {
            type: "invisible",
            rate: t.invisible
        }
    },
    lt = e => {
        console.log(new Date, `${e.source}.polling.type=${e.chartAndTxnsPollingRate.type} ${e.source}.polling.rate=${e.chartAndTxnsPollingRate.rate}`)
    },
    Un = e => {
        const r = f.useMemo(() => !!(typeof window < "u" && window.location.search.includes("debugPolling=1")), []),
            s = Vn({
                hiddenDebounceInMs: 3e4
            }),
            [n, o] = f.useState(() => {
                const i = at({
                    isPageVisible: s,
                    m5Txns: e.pair.txns.m5.buys + e.pair.txns.m5.sells,
                    isDev: !1
                });
                return r && lt({
                    source: e.source,
                    chartAndTxnsPollingRate: i
                }), i
            });
        return gn(() => {
            const i = at({
                isPageVisible: s,
                m5Txns: e.pair.txns.m5.buys + e.pair.txns.m5.sells,
                isDev: !1
            });
            (i.type !== n.type || i.rate !== n.rate) && (r && lt({
                source: e.source,
                chartAndTxnsPollingRate: i
            }), o(i))
        }, [r, n.type, n.rate, s, e.pair.txns.m5.buys, e.pair.txns.m5.sells, !1]), {
            chartAndTxnsPollingRate: n,
            isPageVisible: s,
            debugPolling: r
        }
    },
    Nt = l.object({
        buys: l.number(),
        sells: l.number(),
        volumeUsdBuy: l.number(),
        volumeUsdSell: l.number(),
        amountBuy: l.string(),
        amountSell: l.string(),
        balanceAmount: l.string().nullable(),
        balancePercentage: l.number().nullable(),
        firstSwap: l.number(),
        new: l.boolean()
    }),
    _t = W({
        buys: C(),
        sells: C(),
        volumeUsdBuy: C(),
        volumeUsdSell: C(),
        amountBuy: h(),
        amountSell: h(),
        balanceAmount: h().nullable(),
        balancePercentage: C().nullable(),
        firstSwap: C(),
        new: Vr()
    }),
    Rn = l.object({
        logType: l.literal("swap"),
        blockNumber: l.number(),
        blockTimestamp: l.number(),
        txnHash: l.string(),
        maker: l.string().optional(),
        makerScreener: Nt.optional(),
        logIndex: l.number(),
        txnType: l.literal("buy").or(l.literal("sell")),
        priceUsd: l.string().optional(),
        volumeUsd: l.string().optional(),
        amount0: l.string(),
        amount1: l.string()
    }),
    Dn = W({
        logType: ce("swap"),
        blockNumber: C(),
        blockTimestamp: C(),
        txnHash: h(),
        maker: h().optional(),
        makerScreener: _t.optional(),
        logIndex: C(),
        txnType: ce("buy").or(ce("sell")),
        priceUsd: h().optional(),
        volumeUsd: h().optional(),
        amount0: h(),
        amount1: h()
    }),
    Mn = l.object({
        logType: l.literal("add").or(l.literal("remove")),
        blockNumber: l.number(),
        blockTimestamp: l.number(),
        txnHash: l.string(),
        maker: l.string().optional(),
        makerScreener: Nt.optional(),
        logIndex: l.number(),
        amount0: l.string(),
        amount1: l.string()
    }),
    Nn = W({
        logType: ce("add").or(ce("remove")),
        blockNumber: C(),
        blockTimestamp: C(),
        txnHash: h(),
        maker: h().optional(),
        makerScreener: _t.optional(),
        logIndex: C(),
        amount0: h(),
        amount1: h()
    }),
    _n = Rn.or(Mn),
    Hn = Dn.or(Nn),
    On = l.object({
        schemaVersion: l.string(),
        baseTokenSymbol: l.string().optional(),
        quoteTokenSymbol: l.string().optional(),
        logs: Ve(_n).nullable()
    }),
    jn = W({
        schemaVersion: h(),
        baseTokenSymbol: h().optional(),
        quoteTokenSymbol: h().optional(),
        logs: Se(Hn).nullable()
    }),
    Wn = l.object({
        maker: l.string(),
        buys: l.number(),
        sells: l.number(),
        volumeUsdBuy: l.number(),
        volumeUsdSell: l.number(),
        amountBuy: l.string(),
        amountSell: l.string(),
        balanceAmount: l.string().nullable(),
        balancePercentage: l.number().nullable(),
        firstSwap: l.number(),
        lastSwap: l.number()
    }),
    $n = W({
        maker: h(),
        buys: C(),
        sells: C(),
        volumeUsdBuy: C(),
        volumeUsdSell: C(),
        amountBuy: h(),
        amountSell: h(),
        balanceAmount: h().nullable(),
        balancePercentage: C().nullable(),
        firstSwap: C(),
        lastSwap: C()
    }),
    Fn = Ve(Wn),
    zn = Se($n),
    Gn = U.injectable(At(), e => {
        const t = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_LOG_UNISWAP_HOST}/dex/log/uniswap`
                }
            },
            r = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_LOG_BALANCER_HOST}/dex/balancer/log`
                }
            },
            s = {
                schemaVersion: "1.0.0",
                format: "json",
                endpoints: {
                    root: `${e.DS_DEX_LOG_OSMOSIS_HOST}/dex/osmosis/log`
                }
            },
            n = {
                schemaVersion: "1.0.0",
                endpoints: {
                    root: `${e.DS_DEX_LOG_AMM_HOST}/dex/log/amm/v2`
                }
            };
        return {
            get(o) {
                return o.c === "u" ? { ...t,
                    route: "all"
                } : o.c === "b" ? { ...r,
                    route: "logs"
                } : o.c === "o" ? { ...s,
                    route: "logs"
                } : { ...n,
                    route: "all",
                    endpoints: {
                        root: `${n.endpoints.root}/${o.c==="a"?o.a:""}`
                    }
                }
            }
        }
    }),
    qn = U.injectable(Gn, xt, (e, t) => {
        const r = ({
                pair: n,
                filters: o,
                isInverted: i,
                beforeBlockNumber: a,
                afterBlockNumber: u
            }) => {
                const d = e.get(n),
                    c = new URL(`${d.endpoints.root}/${d.route}/${n.chainId}/${encodeURIComponent(n.pairAddress)}`);
                return a && c.searchParams.set("bbn", a.toString()), u && c.searchParams.set("abn", u.toString()), n.quoteToken.address && c.searchParams.set("q", n.quoteToken.address), i && c.searchParams.set("i", "1"), o.type && c.searchParams.set("ft", o.type), o.amountUsd.min && c.searchParams.set("vumi", o.amountUsd.min.toString()), o.amountUsd.max && c.searchParams.set("vuma", o.amountUsd.max.toString()), o.amount0.min && c.searchParams.set("a0mi", o.amount0.min.toString()), o.amount0.max && c.searchParams.set("a0ma", o.amount0.max.toString()), o.amount1.min && c.searchParams.set("a1mi", o.amount1.min.toString()), o.amount1.max && c.searchParams.set("a1ma", o.amount1.max.toString()), o.maker && c.searchParams.set("m", o.maker), c.searchParams.set("c", "1"), c
            },
            s = ({
                pair: n
            }) => {
                const o = e.get(n),
                    i = new URL(`${o.endpoints.root}/top/${n.chainId}/${encodeURIComponent(n.pairAddress)}`);
                return n.quoteToken.address && i.searchParams.set("q", n.quoteToken.address), i
            };
        return {
            getServer: n => e.get(n),
            getLogs: async n => {
                const o = r(n).toString();
                return e.get(n.pair).format === "json" ? t.get(o.toString(), On) : t.avro(o.toString(), jn)
            },
            getTopMakers: async n => {
                const o = s(n);
                return e.get(n.pair).format === "json" ? t.get(o.toString(), Fn) : t.avro(o.toString(), zn)
            }
        }
    }),
    Xn = U.injectable(qn, ge, (e, t) => {
        const r = new Ur(void 0);
        return {
            tradingHistoryResponse: r,
            fetchHistory: async o => {
                const i = e.getServer(o.pair),
                    a = r.getValue(),
                    u = new Date().getTime();
                try {
                    const d = await e.getLogs(o);
                    if (d.schemaVersion !== i.schemaVersion) return r.next({
                        success: !1,
                        error: "schemaVersion"
                    });
                    const c = d.logs;
                    if (c) {
                        if (o.isFetchingPastTradingHistory && (a != null && a.success)) r.next({ ...a,
                            value: { ...a.value,
                                tradingHistory: [...a.value.tradingHistory, ...c],
                                fetchedAtTimestamp: u
                            }
                        });
                        else {
                            let g = [];
                            !o.isUpdatingFilter && a && a.success && a.value.tradingHistory && g.push(...a.value.tradingHistory), g = [...c, ...g], o.currentListRange && o.currentListRange.endIndex < 50 && (g = g.slice(0, 100)), r.next({
                                success: !0,
                                value: {
                                    schemaVersion: d.schemaVersion,
                                    tradingHistory: g,
                                    latestBlockNumber: g[0].blockNumber,
                                    fetchedAtTimestamp: u,
                                    filteredResult: {
                                        byMaker: o.filters.maker !== null
                                    }
                                }
                            })
                        }
                        return
                    }(!a || !a.success || o.isUpdatingFilter) && r.next({
                        success: !0,
                        value: { ...d,
                            tradingHistory: [],
                            latestBlockNumber: null,
                            fetchedAtTimestamp: u,
                            filteredResult: {
                                byMaker: o.filters.maker !== null
                            }
                        }
                    })
                } catch (d) {
                    t.error({
                        event: {
                            id: "failedFetchingTradingHistory",
                            data: {
                                error: d,
                                chainId: o.pair.chainId,
                                pairId: o.pair.pairAddress,
                                recent: !o.isFetchingPastTradingHistory,
                                beforeBlockNumber: o.beforeBlockNumber,
                                afterBlockNumber: o.afterBlockNumber
                            }
                        }
                    }), a != null && a.success && o.isUpdatingFilter ? r.next({
                        success: !0,
                        value: { ...a.value,
                            tradingHistory: [],
                            fetchedAtTimestamp: u,
                            filteredResult: {
                                byMaker: o.filters.maker !== null
                            }
                        }
                    }) : (!a || !a.success) && r.next({
                        success: !1,
                        error: "failed"
                    })
                }
            },
            clearHistory: () => r.next(void 0)
        }
    }),
    Jn = e => "txnType" in e ? e.txnType : e.logType,
    Kn = e => {
        if ("volumeUsd" in e) return e.volumeUsd
    },
    Yn = {
        buy: "B",
        sell: "S",
        add: "A",
        remove: "R"
    },
    ct = {
        buy: "Bought",
        sell: "Sold",
        add: "Added",
        remove: "Removed"
    },
    Qn = e => {
        const t = Jn(e.tradingHistory),
            r = Kn(e.tradingHistory);
        let s = "";
        if (r) {
            const n = Rr({
                number: r,
                significantDigits: 2,
                addCommas: !0
            });
            s = `${ct[t]} $${n} on ${rs(e.tradingHistory.blockTimestamp,"MMM d yy hh:mm a")}`
        }
        return (t === "add" || t === "remove") && (s = `${ct[t]} ${e.tradingHistory.amount0} ${e.pairBaseTokenSymbol}`), {
            id: `${e.tradingHistory.txnHash}:${e.tradingHistory.logIndex}`,
            text: s,
            color: t === "remove" || t === "sell" ? "#e53e3e" : "#38a169",
            label: Yn[t],
            timestamp: e.tradingHistory.blockTimestamp
        }
    },
    Zn = e => {
        const t = H.useInjectable(Xn),
            [r, s] = f.useState([]);
        return Bt(() => t.tradingHistoryResponse.pipe(It(n => {
            if (!n) {
                s([]);
                return
            }
            if (n.success)
                if (n.value.filteredResult.byMaker) {
                    const o = n.value.tradingHistory.map(i => Qn({
                        tradingHistory: i,
                        pairBaseTokenSymbol: e.pair.baseToken.symbol
                    }));
                    s(o)
                } else r.length > 0 && s([])
        })), [t.tradingHistoryResponse, e.pair.baseToken.symbol, r.length]), {
            tradingHistoryMarks: r
        }
    },
    eo = U.injectable(ge, Lt, (e, t) => ({
        async persistPairChartSettings(r) {
            var n;
            const s = {
                type: "savePairChartSettings",
                input: r
            };
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        },
        async getPairChartSettings(r) {
            const s = Ce.safeParse(t.chartSettingsWebView);
            if (!s.success) {
                e.error({
                    event: {
                        id: "failedParsingChartSettingsWebView",
                        data: {
                            entityType: "pairChartSettings",
                            error: s.error,
                            pair: r.pair
                        }
                    }
                });
                return
            }
            return s.data.pairChartSettings
        },
        getGlobalChartSettings() {
            const r = new Dr,
                s = Ce.safeParse(t.chartSettingsWebView);
            return s.success ? r.next(s.data.globalChartSettings) : (e.error({
                event: {
                    id: "failedParsingChartSettingsWebView",
                    data: {
                        entityType: "globalChartSettings",
                        error: s.error
                    }
                }
            }), r.next(void 0)), r
        },
        async persistGlobalChartSettings(r) {
            var n;
            const s = {
                type: "saveGlobalChartSettings",
                input: r
            };
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        },
        async getStudyTemplates() {
            const r = Ce.safeParse(t.chartSettingsWebView);
            return r.success ? r.data.chartStudyTemplates ? ? [] : (e.error({
                event: {
                    id: "failedParsingChartSettingsWebView",
                    data: {
                        entityType: "chartStudyTemplates",
                        error: r.error
                    }
                }
            }), [])
        },
        async persistStudyTemplate(r) {
            var n;
            const s = {
                type: "saveChartStudyTemplate",
                input: r
            };
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        },
        async deleteStudyTemplate(r) {
            var n;
            const s = {
                type: "deleteChartStudyTemplate",
                id: r
            };
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        }
    })),
    to = U.injectable(ps, ms, fs, (e, t, r) => ({
        async persistPairChartSettings(s) {
            await e.actions.persistPairChartSettings(s)
        },
        async getPairChartSettings(s) {
            return e.actions.getPairChartSettings(s)
        },
        getGlobalChartSettings() {
            return t.all
        },
        async persistGlobalChartSettings(s) {
            await t.actions.persistGlobalChartSettings(s)
        },
        async getStudyTemplates() {
            return r.actions.allChartStudyTemplates()
        },
        async persistStudyTemplate(s) {
            await r.actions.persistChartStudyTemplate(s)
        },
        async deleteStudyTemplate(s) {
            await r.actions.deleteChartStudyTemplate(s)
        }
    })),
    Re = U.injectable(Lt, to, eo, (e, t, r) => e.chartSettingsWebView ? r : t),
    ro = l.object({
        version: l.number(),
        panes: l.array(l.unknown()),
        symbol: l.string().optional(),
        interval: l.string().optional()
    }),
    ut = e => {
        const t = ro.parse(JSON.parse(e));
        return t.symbol && delete t.symbol, JSON.stringify(t)
    },
    so = U.injectable(Re, Mr, (e, t) => ({
        saveLineToolsAndGroups: async () => {},
        loadLineToolsAndGroups: async () => null,
        getAllCharts: async () => [],
        removeChart: async () => {},
        saveChart: async () => "",
        getChartContent: async () => "",
        getChartTemplateContent: async () => ({}),
        getAllChartTemplates: async () => [],
        saveChartTemplate: async () => {},
        removeChartTemplate: async () => {},
        getDrawingTemplates: async () => [],
        loadDrawingTemplate: async () => "",
        removeDrawingTemplate: async () => {},
        saveDrawingTemplate: async () => {},
        getAllStudyTemplates: async () => {
            try {
                return (await e.getStudyTemplates()).map(s => ({
                    name: s.name,
                    content: ""
                }))
            } catch {
                return t.track({
                    event: "chart:studyTemplates:error"
                }), []
            }
        },
        getStudyTemplateContent: async r => {
            t.track({
                event: "chart:studyTemplates:apply"
            });
            try {
                const s = await e.getStudyTemplates();
                if (!s) return "";
                const n = s.find(o => o.name === r.name);
                return n ? ut(n.content) : ""
            } catch {
                return t.track({
                    event: "chart:studyTemplates:error"
                }), ""
            }
        },
        saveStudyTemplate: async r => {
            t.track({
                event: "chart:studyTemplates:save"
            });
            try {
                await e.persistStudyTemplate({
                    schemaVersion: "1.0.0",
                    name: r.name,
                    content: ut(r.content)
                })
            } catch {
                t.track({
                    event: "chart:studyTemplates:error"
                })
            }
        },
        removeStudyTemplate: async r => {
            t.track({
                event: "chart:studyTemplates:delete"
            });
            try {
                const s = await e.getStudyTemplates();
                if (!s) return;
                const n = s.find(o => o.name === r.name);
                if (!n) return;
                await e.deleteStudyTemplate(n.id)
            } catch {
                t.track({
                    event: "chart:studyTemplates:error"
                })
            }
        }
    })),
    dt = [q["1S"], q[1], q[5], q[15], q[60], q[240], q["1D"]],
    no = e => e && e === "a" ? dt : dt.filter(t => t.indexOf("S") === -1),
    oo = e => e && e === "a" ? Ae : Ae.filter(t => t.indexOf("S") === -1),
    io = e => Ae.find(t => t == e),
    ao = e => typeof e == "boolean" || typeof e == "number" || typeof e == "string",
    Ie = (e, t = null, r = {}) => {
        for (const s in e) {
            const n = t ? `${t}.${s}` : s,
                o = e[s];
            Et(o) ? Ie(o, n, r) : ao(o) && (r[n] = o)
        }
        return r
    },
    lo = e => {
        let t = {};
        if (!e) return t;
        const r = e.settings;
        if (r.chartproperties) {
            const s = JSON.parse(r.chartproperties);
            Et(s) && (t = Ie(s))
        }
        if (r[Ke]) {
            const s = Ie({
                mainSeriesProperties: JSON.parse(r[Ke])
            });
            t = { ...t,
                ...s
            }
        }
        for (const s of Object.keys(t)) hs.includes(s) || delete t[s];
        return t
    },
    ft = new yt,
    co = e => {
        if (e && e.settings[Je]) return io(e.settings[Je])
    },
    uo = U.injectable(Re, e => async t => {
        let r = !1;
        const s = setTimeout(() => {
            r = !0, clearTimeout(s)
        }, 2e3);
        return {
            subscription: ft.pipe(as(1e3), Nr(o => o.length > 0), _r(o => o.reduce((i, a) => ({ ...i,
                ...a
            }), {}))).subscribe(async o => {
                await e.persistGlobalChartSettings({
                    schemaVersion: "1.0.0",
                    settings: o
                })
            }),
            widgetOverrides: lo(t),
            widgetLastUsedTime: co(t),
            settingsAdapter: {
                initialSettings: t == null ? void 0 : t.settings,
                setValue: async (o, i) => {
                    r && ft.next({
                        [o]: i
                    })
                },
                removeValue: () => {}
            }
        }
    }),
    fo = U.injectable(es, e => async t => {
        if (t.trim().length < 2) return [];
        const r = Hr(e.searchPairs(t));
        return await _(r)
    }),
    D = {
        default: {
            color: "var(--tv-color-toolbar-button-text,#d1d4dc)",
            fontWeight: "400"
        },
        active: {
            color: "var(--tv-color-toolbar-button-text-active,#2962ff)",
            fontWeight: "600"
        }
    },
    mo = e => {
        var s;
        const t = `color:${D.active.color};font-weight:${D.active.fontWeight}`,
            r = (s = e.tvWidgetRef.current) == null ? void 0 : s.createButton();
        r && (e.chartType === "price" ? (r.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)", r.style.cursor = "pointer", r.addEventListener("click", () => e.onChartTypeChange("marketCap")), r.setAttribute("title", "Switch to market cap chart"), r.innerHTML = `<span style="${t}">Price</span> / MCap`) : (r.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)", r.style.cursor = "pointer", r.addEventListener("click", () => e.onChartTypeChange("price")), r.setAttribute("title", "Switch to price chart"), r.innerHTML = `Price / <span style="${t}">MCap</span>`))
    },
    po = e => {
        var s;
        if (!e.pair.priceUsd) return;
        const t = `color:${D.active.color};font-weight:${D.active.fontWeight}`,
            r = (s = e.tvWidgetRef.current) == null ? void 0 : s.createButton();
        if (r) {
            r.style.color = D.default.color, r.style.fontWeight = D.default.fontWeight, r.style.cursor = "pointer";
            const n = le(e.isInverted ? e.pair.baseToken.symbol : e.pair.quoteTokenSymbol, 24);
            e.quotePricingMode === "usd" ? (r.innerHTML = `<span style="${t}">USD</span> / ${n}`, r.addEventListener("click", () => e.onQuotePricingModeChange("quote")), r.setAttribute("title", `Switch to price in ${n}`)) : (r.innerHTML = `USD / <span style="${t}">${n}</span>`, r.addEventListener("click", () => e.onQuotePricingModeChange("usd")), r.setAttribute("title", "Switch to price in USD"))
        }
    },
    ho = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="100%" height="100%"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg>',
    go = e => {
        var r;
        if (!e.isLargeScreen) return;
        const t = (r = e.tvWidgetRef.current) == null ? void 0 : r.createButton();
        if (t) return t.style.color = D.default.color, t.style.fontWeight = D.default.fontWeight, t.style.cursor = "pointer", t.innerHTML = `<span style="display:block;width:24px;height:24px;margin-right:2px;">${ho}</span><span>Full</span>`, t.style.display = "flex", t.style.alignItems = "center", t.style.padding = "0 6px 0 2px", t.addEventListener("click", e.onToggleExpandCollapse), t
    },
    mt = "tv-chart-container",
    xo = ({
        chainId: e,
        dexId: t,
        pair: r,
        isInverted: s,
        circulatingSupply: n,
        isExpanded: o,
        quotePricingMode: i,
        chartType: a,
        onToggleExpandCollapse: u,
        onQuotePricingModeChange: d,
        onChartTypeChange: c,
        onLatestPrice: g,
        containerId: m,
        containerProps: S,
        widgetConfigOverrides: y,
        chartStyle: p,
        intervalOverride: b
    }) => {
        var ze, Ge;
        const v = Or({
                base: !1,
                lg: !0
            }) ? ? !1,
            B = jr(),
            A = H.useInjectable(Wr),
            x = ts("/tv/v27.001/charting_library.js"),
            I = f.useRef(null),
            w = f.useRef(),
            L = f.useRef(),
            T = f.useRef(),
            $ = f.useRef(),
            E = H.useInjectable(ge),
            ye = H.useInjectable(he),
            F = $r(ye.currentUser, void 0),
            ne = H.useInjectable(Fr),
            [V, z] = f.useState(),
            [Y, Q] = f.useState(),
            G = H.useInjectable(Re),
            oe = H.useInjectable(uo),
            Z = Zn({
                pair: r
            }),
            M = zr(P => P.embedSettings),
            J = f.useMemo(() => {
                var P, k;
                if ((P = r.profile) != null && P.eti) return A({
                    chainId: r.chainId,
                    tokenAddress: r.baseToken.address,
                    cacheKey: (k = r.profile) == null ? void 0 : k.imgKey
                })
            }, [A, r.baseToken.address, r.chainId, (ze = r.profile) == null ? void 0 : ze.eti, (Ge = r.profile) == null ? void 0 : Ge.imgKey]),
            K = f.useMemo(() => ({
                userId: F == null ? void 0 : F.id,
                pairId: r.pairAddress,
                quotePricingMode: i,
                chainId: e,
                embedSettings: M
            }), [e, F == null ? void 0 : F.id, M, r.pairAddress, i]),
            ee = !M.isEmbed || M.chartSaveDrawings;
        Bt(() => ee ? Gr(G.getGlobalChartSettings(), G.getPairChartSettings({
            isInverted: s,
            quotePricingMode: i,
            pair: {
                chainId: e,
                pairId: r.pairAddress,
                quoteTokenAddress: r.quoteToken.address,
                baseTokenAddress: r.baseToken.address
            }
        })).pipe(os({
            first: 1e4
        }), ss(() => (B({
            status: "error",
            description: "Failed loading chart settings."
        }), E.error({
            event: {
                id: "failedLoadingChartSettings",
                data: K
            }
        }), z(null), Q(null), Kr)), It(([P, k]) => {
            if (Q(P ? ? null), !k) return z(null);
            const O = ne.getChartContent({
                chartType: a,
                pairChartSettings: k,
                isInverted: s,
                quotePricingMode: i,
                pair: {
                    chainId: e,
                    pairId: r.pairAddress,
                    quoteTokenAddress: r.quoteToken.address,
                    baseTokenAddress: r.baseToken.address
                }
            });
            if (O) return z(O);
            z(null)
        })) : (z(null), Q(null), St(void 0)), [a, e, G, s, ee, r.baseToken.address, r.pairAddress, r.quoteToken.address, i, ne, B, K, E]);
        const De = H.useInjectable(so),
            Me = qr(t),
            Ne = H.useInjectable(fo),
            _e = H.useInjectable(En),
            te = Y === void 0 || V === void 0 || a === "marketCap" && n === void 0,
            be = x === "ready",
            Ht = x === "error",
            Ot = () => {
                var P, k;
                (P = T.current) == null || P.setTradingHistoryMarks([]), (k = w.current) == null || k.activeChart().clearMarks()
            },
            He = be && !te && w.current !== void 0 && T.current !== void 0;
        fe(() => {
            var P, k;
            try {
                if (!He) return;
                if (Z.tradingHistoryMarks.length === 0) return Ot();
                (P = T.current) == null || P.setTradingHistoryMarks(Z.tradingHistoryMarks), (k = w.current) == null || k.activeChart().refreshMarks()
            } catch (O) {
                E.debug({
                    event: {
                        id: "failedLoadingMarks",
                        data: {
                            error: O
                        }
                    }
                })
            }
        }, [te, E, Z.tradingHistoryMarks, He]);
        const Oe = f.useCallback(() => {
                const P = l.string().safeParse(e);
                if (!P.success) return;
                const k = i === "usd" && r.priceUsd ? r.priceUsd : r.price,
                    O = i === "usd",
                    Wt = r.c === "a" ? r.a : void 0;
                return new ds({
                    chartType: a,
                    context: r.c,
                    ammId: Wt,
                    chainId: P.data,
                    dexName: Me,
                    pairAddress: r.pairAddress,
                    quoteTokenAddress: r.quoteToken.address,
                    latestPrice: k,
                    useUsdPrice: O,
                    supportedResolutions: oo(r.c),
                    isInverted: s,
                    searchPair: Ne,
                    onLatestPrice: g,
                    dexChartAmmService: _e,
                    circulatingSupply: n,
                    symbolLogo: J
                })
            }, [n, a, e, Me, s, g, r, i, Ne, _e, J]),
            je = f.useCallback(async P => {
                L.current = await oe(Y);
                const k = b ? ? L.current.widgetLastUsedTime;
                return new window.TradingView.widget(ls({
                    chartStyle: p,
                    defaultInterval: k,
                    settingsAdapter: L.current.settingsAdapter,
                    saveLoadAdapter: De,
                    containerId: m ? ? mt,
                    hideTradingViewLogo: M.dsApp || !M.isEmbed,
                    dataFeed: P.dataFeed,
                    savedData: ee ? V ? ? void 0 : void 0,
                    favoriteIntervals: no(r.c),
                    widgetOverrides: L.current.widgetOverrides,
                    symbolLogo: J,
                    symbol: s ? `${le(r.quoteTokenSymbol,48)}/${le(r.baseToken.symbol,48)}` : `${le(r.baseToken.symbol,48)}/${le(r.quoteTokenSymbol,48)}`,
                    ...y
                }))
            }, [oe, Y, b, p, De, m, M.dsApp, M.isEmbed, ee, V, r.c, r.baseToken.symbol, r.quoteTokenSymbol, J, s, y]),
            We = f.useCallback(async P => {
                await G.persistPairChartSettings({
                    schemaVersion: "1.0.0",
                    isInverted: s,
                    quotePricingMode: i,
                    chartType: a,
                    pair: {
                        chainId: e,
                        pairId: r.pairAddress,
                        quoteTokenAddress: r.quoteToken.address,
                        baseTokenAddress: r.baseToken.address
                    },
                    chartData: JSON.stringify(P)
                })
            }, [e, G, s, r, i, a]),
            $e = x !== "ready" || I.current === void 0 || w.current !== void 0;
        f.useEffect(() => {
            te || $e || (T.current = Oe(), T.current && je({
                dataFeed: T.current
            }).then(P => {
                w.current = P, w.current.headerReady().then(() => {
                    r.c === "a" && mo({
                        chartType: a,
                        tvWidgetRef: w,
                        onChartTypeChange: c
                    }), po({
                        isInverted: s,
                        quotePricingMode: i,
                        pair: r,
                        tvWidgetRef: w,
                        onQuotePricingModeChange: d
                    });
                    const k = go({
                        isLargeScreen: v,
                        tvWidgetRef: w,
                        onToggleExpandCollapse: u
                    });
                    $.current = k
                }).catch(k => {
                    E.error({
                        event: {
                            id: "failedCreatingTradingViewCustomButtons",
                            data: { ...K,
                                error: k
                            }
                        }
                    })
                }), w.current.onChartReady(() => {
                    var k;
                    ee && ((k = w.current) == null || k.subscribe("onAutoSaveNeeded", () => {
                        var O;
                        (O = w.current) == null || O.save(We)
                    }))
                })
            }).catch(P => {
                E.error({
                    event: {
                        id: "failedInstantiatingTradingView",
                        data: { ...K,
                            error: P
                        }
                    }
                })
            }))
        }, [n, x, V, te, $e, Oe, je, E, K, s, r, i, d, a, c, v, u, ee, We]);
        const {
            chartAndTxnsPollingRate: de,
            debugPolling: jt
        } = Un({
            source: "chart",
            pair: r
        }), Fe = () => {
            T.current && T.current.triggerSubscribers()
        };
        return wn(() => Fe(), de.rate), fe(() => {
            de.type !== "invisible" && (jt && console.log(new Date, `chart.polling.type=${de.type} trigger chart subscribers`), Fe())
        }, [de.type]), fe(() => {
            b && w.current && w.current.activeChart() && w.current.setSymbol(w.current.activeChart().symbol(), b, () => {})
        }, [b]), fe(() => {
            $.current && ($.current.style.color = o ? D.active.color : D.default.color, $.current.style.fontWeight = o ? D.active.fontWeight : D.default.fontWeight)
        }, [o]), f.useEffect(() => () => {
            var P;
            (P = L.current) == null || P.subscription.unsubscribe()
        }, [L]), R.jsxs(R.Fragment, {
            children: [Ht && R.jsx(Xe, {
                flex: 1,
                m: 2,
                ...S,
                children: R.jsx(Xr, {
                    size: "sm",
                    title: "Error loading chart",
                    children: "Please refresh this page to try again!"
                })
            }), (!be || te) && R.jsx(Xe, {
                flex: 1,
                m: 2,
                ...S,
                children: R.jsx(Jr, {
                    size: "sm",
                    color: "trading-view.text-color",
                    label: "Loading chart settings..."
                })
            }), be && !te && R.jsx(kt, {
                ref: I,
                id: m ? ? mt,
                flex: 1,
                ...S
            })]
        })
    },
    Ao = ({
        if: e,
        with: t,
        children: r
    }) => e ? t(r) : R.jsx(R.Fragment, {
        children: r
    });
export {
    xo as A, pn as B, Ao as C, ko as S, Co as a, gn as b, un as c, bn as d, fe as e, Un as f, Xn as g, wn as h, qn as i, To as u
};