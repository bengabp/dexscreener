import {
    r as A,
    f as S,
    C,
    e as _,
    ap as Y,
    F as J,
    aq as Ee,
    ar as ke,
    i as _e,
    as as Re,
    at as X,
    au as Q,
    av as Z,
    aw as ee,
    l as b,
    ax as B
} from "../entries/pages_catch-all.__d1Yby5.js";
import "./preload-helper-hlDPvxQM.js";
const te = "@firebase/installations",
    x = "0.6.3";
const ne = 1e4,
    ae = `w:${x}`,
    ie = "FIS_v2",
    De = "https://firebaseinstallations.googleapis.com/v1",
    Pe = 60 * 60 * 1e3,
    Oe = "installations",
    Fe = "Installations";
const $e = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
    },
    I = new Y(Oe, Fe, $e);

function re(e) {
    return e instanceof J && e.code.includes("request-failed")
}

function se({
    projectId: e
}) {
    return `${De}/projects/${e}/installations`
}

function oe(e) {
    return {
        token: e.token,
        requestStatus: 2,
        expiresIn: Ne(e.expiresIn),
        creationTime: Date.now()
    }
}
async function ce(e, t) {
    const a = (await t.json()).error;
    return I.create("request-failed", {
        requestName: e,
        serverCode: a.code,
        serverMessage: a.message,
        serverStatus: a.status
    })
}

function le({
    apiKey: e
}) {
    return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": e
    })
}

function Me(e, {
    refreshToken: t
}) {
    const n = le(e);
    return n.append("Authorization", xe(t)), n
}
async function ue(e) {
    const t = await e();
    return t.status >= 500 && t.status < 600 ? e() : t
}

function Ne(e) {
    return Number(e.replace("s", "000"))
}

function xe(e) {
    return `${ie} ${e}`
}
async function je({
    appConfig: e,
    heartbeatServiceProvider: t
}, {
    fid: n
}) {
    const a = se(e),
        i = le(e),
        r = t.getImmediate({
            optional: !0
        });
    if (r) {
        const l = await r.getHeartbeatsHeader();
        l && i.append("x-firebase-client", l)
    }
    const s = {
            fid: n,
            authVersion: ie,
            appId: e.appId,
            sdkVersion: ae
        },
        o = {
            method: "POST",
            headers: i,
            body: JSON.stringify(s)
        },
        c = await ue(() => fetch(a, o));
    if (c.ok) {
        const l = await c.json();
        return {
            fid: l.fid || n,
            registrationStatus: 2,
            refreshToken: l.refreshToken,
            authToken: oe(l.authToken)
        }
    } else throw await ce("Create Installation", c)
}

function de(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function qe(e) {
    return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_")
}
const Le = /^[cdef][\w-]{21}$/,
    F = "";

function Be() {
    try {
        const e = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
        const n = Ve(e);
        return Le.test(n) ? n : F
    } catch {
        return F
    }
}

function Ve(e) {
    return qe(e).substr(0, 22)
}

function R(e) {
    return `${e.appName}!${e.appId}`
}
const fe = new Map;

function pe(e, t) {
    const n = R(e);
    he(n, t), ze(n, t)
}

function he(e, t) {
    const n = fe.get(e);
    if (n)
        for (const a of n) a(t)
}

function ze(e, t) {
    const n = Ue();
    n && n.postMessage({
        key: e,
        fid: t
    }), Ge()
}
let w = null;

function Ue() {
    return !w && "BroadcastChannel" in self && (w = new BroadcastChannel("[Firebase] FID Change"), w.onmessage = e => {
        he(e.data.key, e.data.fid)
    }), w
}

function Ge() {
    fe.size === 0 && w && (w.close(), w = null)
}
const He = "firebase-installations-database",
    Ke = 1,
    y = "firebase-installations-store";
let P = null;

function j() {
    return P || (P = Ee(He, Ke, {
        upgrade: (e, t) => {
            switch (t) {
                case 0:
                    e.createObjectStore(y)
            }
        }
    })), P
}
async function E(e, t) {
    const n = R(e),
        i = (await j()).transaction(y, "readwrite"),
        r = i.objectStore(y),
        s = await r.get(n);
    return await r.put(t, n), await i.done, (!s || s.fid !== t.fid) && pe(e, t.fid), t
}
async function ge(e) {
    const t = R(e),
        a = (await j()).transaction(y, "readwrite");
    await a.objectStore(y).delete(t), await a.done
}
async function D(e, t) {
    const n = R(e),
        i = (await j()).transaction(y, "readwrite"),
        r = i.objectStore(y),
        s = await r.get(n),
        o = t(s);
    return o === void 0 ? await r.delete(n) : await r.put(o, n), await i.done, o && (!s || s.fid !== o.fid) && pe(e, o.fid), o
}
async function q(e) {
    let t;
    const n = await D(e.appConfig, a => {
        const i = We(a),
            r = Ye(e, i);
        return t = r.registrationPromise, r.installationEntry
    });
    return n.fid === F ? {
        installationEntry: await t
    } : {
        installationEntry: n,
        registrationPromise: t
    }
}

function We(e) {
    const t = e || {
        fid: Be(),
        registrationStatus: 0
    };
    return me(t)
}

function Ye(e, t) {
    if (t.registrationStatus === 0) {
        if (!navigator.onLine) {
            const i = Promise.reject(I.create("app-offline"));
            return {
                installationEntry: t,
                registrationPromise: i
            }
        }
        const n = {
                fid: t.fid,
                registrationStatus: 1,
                registrationTime: Date.now()
            },
            a = Je(e, n);
        return {
            installationEntry: n,
            registrationPromise: a
        }
    } else return t.registrationStatus === 1 ? {
        installationEntry: t,
        registrationPromise: Xe(e)
    } : {
        installationEntry: t
    }
}
async function Je(e, t) {
    try {
        const n = await je(e, t);
        return E(e.appConfig, n)
    } catch (n) {
        throw re(n) && n.customData.serverCode === 409 ? await ge(e.appConfig) : await E(e.appConfig, {
            fid: t.fid,
            registrationStatus: 0
        }), n
    }
}
async function Xe(e) {
    let t = await V(e.appConfig);
    for (; t.registrationStatus === 1;) await de(100), t = await V(e.appConfig);
    if (t.registrationStatus === 0) {
        const {
            installationEntry: n,
            registrationPromise: a
        } = await q(e);
        return a || n
    }
    return t
}

function V(e) {
    return D(e, t => {
        if (!t) throw I.create("installation-not-found");
        return me(t)
    })
}

function me(e) {
    return Qe(e) ? {
        fid: e.fid,
        registrationStatus: 0
    } : e
}

function Qe(e) {
    return e.registrationStatus === 1 && e.registrationTime + ne < Date.now()
}
async function Ze({
    appConfig: e,
    heartbeatServiceProvider: t
}, n) {
    const a = et(e, n),
        i = Me(e, n),
        r = t.getImmediate({
            optional: !0
        });
    if (r) {
        const l = await r.getHeartbeatsHeader();
        l && i.append("x-firebase-client", l)
    }
    const s = {
            installation: {
                sdkVersion: ae,
                appId: e.appId
            }
        },
        o = {
            method: "POST",
            headers: i,
            body: JSON.stringify(s)
        },
        c = await ue(() => fetch(a, o));
    if (c.ok) {
        const l = await c.json();
        return oe(l)
    } else throw await ce("Generate Auth Token", c)
}

function et(e, {
    fid: t
}) {
    return `${se(e)}/${t}/authTokens:generate`
}
async function L(e, t = !1) {
    let n;
    const a = await D(e.appConfig, r => {
        if (!we(r)) throw I.create("not-registered");
        const s = r.authToken;
        if (!t && at(s)) return r;
        if (s.requestStatus === 1) return n = tt(e, t), r; {
            if (!navigator.onLine) throw I.create("app-offline");
            const o = rt(r);
            return n = nt(e, o), o
        }
    });
    return n ? await n : a.authToken
}
async function tt(e, t) {
    let n = await z(e.appConfig);
    for (; n.authToken.requestStatus === 1;) await de(100), n = await z(e.appConfig);
    const a = n.authToken;
    return a.requestStatus === 0 ? L(e, t) : a
}

function z(e) {
    return D(e, t => {
        if (!we(t)) throw I.create("not-registered");
        const n = t.authToken;
        return st(n) ? Object.assign(Object.assign({}, t), {
            authToken: {
                requestStatus: 0
            }
        }) : t
    })
}
async function nt(e, t) {
    try {
        const n = await Ze(e, t),
            a = Object.assign(Object.assign({}, t), {
                authToken: n
            });
        return await E(e.appConfig, a), n
    } catch (n) {
        if (re(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404)) await ge(e.appConfig);
        else {
            const a = Object.assign(Object.assign({}, t), {
                authToken: {
                    requestStatus: 0
                }
            });
            await E(e.appConfig, a)
        }
        throw n
    }
}

function we(e) {
    return e !== void 0 && e.registrationStatus === 2
}

function at(e) {
    return e.requestStatus === 2 && !it(e)
}

function it(e) {
    const t = Date.now();
    return t < e.creationTime || e.creationTime + e.expiresIn < t + Pe
}

function rt(e) {
    const t = {
        requestStatus: 1,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, e), {
        authToken: t
    })
}

function st(e) {
    return e.requestStatus === 1 && e.requestTime + ne < Date.now()
}
async function ot(e) {
    const t = e,
        {
            installationEntry: n,
            registrationPromise: a
        } = await q(t);
    return a ? a.catch(console.error) : L(t).catch(console.error), n.fid
}
async function ct(e, t = !1) {
    const n = e;
    return await lt(n), (await L(n, t)).token
}
async function lt(e) {
    const {
        registrationPromise: t
    } = await q(e);
    t && await t
}

function ut(e) {
    if (!e || !e.options) throw O("App Configuration");
    if (!e.name) throw O("App Name");
    const t = ["projectId", "apiKey", "appId"];
    for (const n of t)
        if (!e.options[n]) throw O(n);
    return {
        appName: e.name,
        projectId: e.options.projectId,
        apiKey: e.options.apiKey,
        appId: e.options.appId
    }
}

function O(e) {
    return I.create("missing-app-config-values", {
        valueName: e
    })
}
const Ie = "installations",
    dt = "installations-internal",
    ft = e => {
        const t = e.getProvider("app").getImmediate(),
            n = ut(t),
            a = _(t, "heartbeat");
        return {
            app: t,
            appConfig: n,
            heartbeatServiceProvider: a,
            _delete: () => Promise.resolve()
        }
    },
    pt = e => {
        const t = e.getProvider("app").getImmediate(),
            n = _(t, Ie).getImmediate();
        return {
            getId: () => ot(n),
            getToken: i => ct(n, i)
        }
    };

function ht() {
    S(new C(Ie, ft, "PUBLIC")), S(new C(dt, pt, "PRIVATE"))
}
ht();
A(te, x);
A(te, x, "esm2017");
const k = "analytics",
    gt = "firebase_id",
    mt = "origin",
    wt = 60 * 1e3,
    It = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
    ye = "https://www.googletagmanager.com/gtag/js";
const u = new ke("@firebase/analytics");

function be(e) {
    return Promise.all(e.map(t => t.catch(n => n)))
}

function yt(e, t) {
    const n = document.createElement("script");
    n.src = `${ye}?l=${e}&id=${t}`, n.async = !0, document.head.appendChild(n)
}

function bt(e) {
    let t = [];
    return Array.isArray(window[e]) ? t = window[e] : window[e] = t, t
}
async function Tt(e, t, n, a, i, r) {
    const s = a[i];
    try {
        if (s) await t[s];
        else {
            const c = (await be(n)).find(l => l.measurementId === i);
            c && await t[c.appId]
        }
    } catch (o) {
        u.error(o)
    }
    e("config", i, r)
}
async function vt(e, t, n, a, i) {
    try {
        let r = [];
        if (i && i.send_to) {
            let s = i.send_to;
            Array.isArray(s) || (s = [s]);
            const o = await be(n);
            for (const c of s) {
                const l = o.find(m => m.measurementId === c),
                    f = l && t[l.appId];
                if (f) r.push(f);
                else {
                    r = [];
                    break
                }
            }
        }
        r.length === 0 && (r = Object.values(t)), await Promise.all(r), e("event", a, i || {})
    } catch (r) {
        u.error(r)
    }
}

function At(e, t, n, a) {
    async function i(r, s, o) {
        try {
            r === "event" ? await vt(e, t, n, s, o) : r === "config" ? await Tt(e, t, n, a, s, o) : r === "consent" ? e("consent", "update", o) : e("set", s)
        } catch (c) {
            u.error(c)
        }
    }
    return i
}

function St(e, t, n, a, i) {
    let r = function(...s) {
        window[a].push(arguments)
    };
    return window[i] && typeof window[i] == "function" && (r = window[i]), window[i] = At(r, e, t, n), {
        gtagCore: r,
        wrappedGtag: window[i]
    }
}

function Ct(e) {
    const t = window.document.getElementsByTagName("script");
    for (const n of Object.values(t))
        if (n.src && n.src.includes(ye) && n.src.includes(e)) return n;
    return null
}
const Et = {
        "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
        "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
    },
    d = new Y("analytics", "Analytics", Et);
const kt = 30,
    _t = 1e3;
class Rt {
    constructor(t = {}, n = _t) {
        this.throttleMetadata = t, this.intervalMillis = n
    }
    getThrottleMetadata(t) {
        return this.throttleMetadata[t]
    }
    setThrottleMetadata(t, n) {
        this.throttleMetadata[t] = n
    }
    deleteThrottleMetadata(t) {
        delete this.throttleMetadata[t]
    }
}
const Te = new Rt;

function Dt(e) {
    return new Headers({
        Accept: "application/json",
        "x-goog-api-key": e
    })
}
async function Pt(e) {
    var t;
    const {
        appId: n,
        apiKey: a
    } = e, i = {
        method: "GET",
        headers: Dt(a)
    }, r = It.replace("{app-id}", n), s = await fetch(r, i);
    if (s.status !== 200 && s.status !== 304) {
        let o = "";
        try {
            const c = await s.json();
            !((t = c.error) === null || t === void 0) && t.message && (o = c.error.message)
        } catch {}
        throw d.create("config-fetch-failed", {
            httpStatus: s.status,
            responseMessage: o
        })
    }
    return s.json()
}
async function Ot(e, t = Te, n) {
    const {
        appId: a,
        apiKey: i,
        measurementId: r
    } = e.options;
    if (!a) throw d.create("no-app-id");
    if (!i) {
        if (r) return {
            measurementId: r,
            appId: a
        };
        throw d.create("no-api-key")
    }
    const s = t.getThrottleMetadata(a) || {
            backoffCount: 0,
            throttleEndTimeMillis: Date.now()
        },
        o = new Mt;
    return setTimeout(async () => {
        o.abort()
    }, n !== void 0 ? n : wt), ve({
        appId: a,
        apiKey: i,
        measurementId: r
    }, s, o, t)
}
async function ve(e, {
    throttleEndTimeMillis: t,
    backoffCount: n
}, a, i = Te) {
    var r;
    const {
        appId: s,
        measurementId: o
    } = e;
    try {
        await Ft(a, t)
    } catch (c) {
        if (o) return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`), {
            appId: s,
            measurementId: o
        };
        throw c
    }
    try {
        const c = await Pt(e);
        return i.deleteThrottleMetadata(s), c
    } catch (c) {
        const l = c;
        if (!$t(l)) {
            if (i.deleteThrottleMetadata(s), o) return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`), {
                appId: s,
                measurementId: o
            };
            throw c
        }
        const f = Number((r = l == null ? void 0 : l.customData) === null || r === void 0 ? void 0 : r.httpStatus) === 503 ? B(n, i.intervalMillis, kt) : B(n, i.intervalMillis),
            m = {
                throttleEndTimeMillis: Date.now() + f,
                backoffCount: n + 1
            };
        return i.setThrottleMetadata(s, m), u.debug(`Calling attemptFetch again in ${f} millis`), ve(e, m, a, i)
    }
}

function Ft(e, t) {
    return new Promise((n, a) => {
        const i = Math.max(t - Date.now(), 0),
            r = setTimeout(n, i);
        e.addEventListener(() => {
            clearTimeout(r), a(d.create("fetch-throttle", {
                throttleEndTimeMillis: t
            }))
        })
    })
}

function $t(e) {
    if (!(e instanceof J) || !e.customData) return !1;
    const t = Number(e.customData.httpStatus);
    return t === 429 || t === 500 || t === 503 || t === 504
}
class Mt {
    constructor() {
        this.listeners = []
    }
    addEventListener(t) {
        this.listeners.push(t)
    }
    abort() {
        this.listeners.forEach(t => t())
    }
}
let $;
async function Nt(e, t, n, a, i) {
    if (i && i.global) {
        e("event", n, a);
        return
    } else {
        const r = await t,
            s = Object.assign(Object.assign({}, a), {
                send_to: r
            });
        e("event", n, s)
    }
}
async function xt(e, t, n, a) {
    if (a && a.global) return e("set", {
        screen_name: n
    }), Promise.resolve(); {
        const i = await t;
        e("config", i, {
            update: !0,
            screen_name: n
        })
    }
}
async function jt(e, t, n, a) {
    if (a && a.global) return e("set", {
        user_id: n
    }), Promise.resolve(); {
        const i = await t;
        e("config", i, {
            update: !0,
            user_id: n
        })
    }
}
async function qt(e, t, n, a) {
    if (a && a.global) {
        const i = {};
        for (const r of Object.keys(n)) i[`user_properties.${r}`] = n[r];
        return e("set", i), Promise.resolve()
    } else {
        const i = await t;
        e("config", i, {
            update: !0,
            user_properties: n
        })
    }
}
async function Lt(e, t) {
    const n = await e;
    window[`ga-disable-${n}`] = !t
}
let M;

function Ae(e) {
    M = e
}

function Se(e) {
    $ = e
}
async function Bt() {
    if (Z()) try {
        await ee()
    } catch (e) {
        return u.warn(d.create("indexeddb-unavailable", {
            errorInfo: e == null ? void 0 : e.toString()
        }).message), !1
    } else return u.warn(d.create("indexeddb-unavailable", {
        errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
    return !0
}
async function Vt(e, t, n, a, i, r, s) {
    var o;
    const c = Ot(e);
    c.then(g => {
        n[g.measurementId] = g.appId, e.options.measurementId && g.measurementId !== e.options.measurementId && u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
    }).catch(g => u.error(g)), t.push(c);
    const l = Bt().then(g => {
            if (g) return a.getId()
        }),
        [f, m] = await Promise.all([c, l]);
    Ct(r) || yt(r, f.measurementId), M && (i("consent", "default", M), Ae(void 0)), i("js", new Date);
    const T = (o = s == null ? void 0 : s.config) !== null && o !== void 0 ? o : {};
    return T[mt] = "firebase", T.update = !0, m != null && (T[gt] = m), i("config", f.measurementId, T), $ && (i("set", $), Se(void 0)), f.measurementId
}
class zt {
    constructor(t) {
        this.app = t
    }
    _delete() {
        return delete p[this.app.options.appId], Promise.resolve()
    }
}
let p = {},
    U = [];
const G = {};
let v = "dataLayer",
    Ce = "gtag",
    H, h, N = !1;

function Xt(e) {
    if (N) throw d.create("already-initialized");
    e.dataLayerName && (v = e.dataLayerName), e.gtagName && (Ce = e.gtagName)
}

function Ut() {
    const e = [];
    if (X() && e.push("This is a browser extension environment."), Q() || e.push("Cookies are not available."), e.length > 0) {
        const t = e.map((a, i) => `(${i+1}) ${a}`).join(" "),
            n = d.create("invalid-analytics-context", {
                errorInfo: t
            });
        u.warn(n.message)
    }
}

function Gt(e, t, n) {
    Ut();
    const a = e.options.appId;
    if (!a) throw d.create("no-app-id");
    if (!e.options.apiKey)
        if (e.options.measurementId) u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
        else throw d.create("no-api-key");
    if (p[a] != null) throw d.create("already-exists", {
        id: a
    });
    if (!N) {
        bt(v);
        const {
            wrappedGtag: r,
            gtagCore: s
        } = St(p, U, G, v, Ce);
        h = r, H = s, N = !0
    }
    return p[a] = Vt(e, U, G, t, H, v, n), new zt(e)
}

function Qt(e = _e()) {
    e = b(e);
    const t = _(e, k);
    return t.isInitialized() ? t.getImmediate() : Ht(e)
}

function Ht(e, t = {}) {
    const n = _(e, k);
    if (n.isInitialized()) {
        const i = n.getImmediate();
        if (Re(t, n.getOptions())) return i;
        throw d.create("already-initialized")
    }
    return n.initialize({
        options: t
    })
}
async function Zt() {
    if (X() || !Q() || !Z()) return !1;
    try {
        return await ee()
    } catch {
        return !1
    }
}

function en(e, t, n) {
    e = b(e), xt(h, p[e.app.options.appId], t, n).catch(a => u.error(a))
}

function tn(e, t, n) {
    e = b(e), jt(h, p[e.app.options.appId], t, n).catch(a => u.error(a))
}

function nn(e, t, n) {
    e = b(e), qt(h, p[e.app.options.appId], t, n).catch(a => u.error(a))
}

function an(e, t) {
    e = b(e), Lt(p[e.app.options.appId], t).catch(n => u.error(n))
}

function rn(e) {
    h ? h("set", e) : Se(e)
}

function Kt(e, t, n, a) {
    e = b(e), Nt(h, p[e.app.options.appId], t, n, a).catch(i => u.error(i))
}

function sn(e) {
    h ? h("consent", "update", e) : Ae(e)
}
const K = "@firebase/analytics",
    W = "0.9.3";

function Wt() {
    S(new C(k, (t, {
        options: n
    }) => {
        const a = t.getProvider("app").getImmediate(),
            i = t.getProvider("installations-internal").getImmediate();
        return Gt(a, i, n)
    }, "PUBLIC")), S(new C("analytics-internal", e, "PRIVATE")), A(K, W), A(K, W, "esm2017");

    function e(t) {
        try {
            const n = t.getProvider(k).getImmediate();
            return {
                logEvent: (a, i, r) => Kt(n, a, i, r)
            }
        } catch (n) {
            throw d.create("interop-component-reg-failed", {
                reason: n
            })
        }
    }
}
Wt();
export {
    Qt as getAnalytics, Ht as initializeAnalytics, Zt as isSupported, Kt as logEvent, an as setAnalyticsCollectionEnabled, sn as setConsent, en as setCurrentScreen, rn as setDefaultEventParameters, tn as setUserId, nn as setUserProperties, Xt as settings
};