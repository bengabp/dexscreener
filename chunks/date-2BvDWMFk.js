import {
    ev as d,
    ew as c,
    ex as w,
    ey as R,
    ez as J,
    eA as Z,
    eB as G,
    ba as P,
    b9 as oe,
    eC as se,
    eD as ue,
    eE as de,
    eF as ce,
    eG as fe
} from "../entries/pages_catch-all.__d1Yby5.js";

function le(n, r) {
    d(2, arguments);
    var e = c(n),
        t = w(r);
    return isNaN(t) ? new Date(NaN) : (t && e.setDate(e.getDate() + t), e)
}

function ve(n, r) {
    d(2, arguments);
    var e = c(n),
        t = w(r);
    if (isNaN(t)) return new Date(NaN);
    if (!t) return e;
    var a = e.getDate(),
        i = new Date(e.getTime());
    i.setMonth(e.getMonth() + t + 1, 0);
    var o = i.getDate();
    return a >= o ? i : (e.setFullYear(i.getFullYear(), i.getMonth(), a), e)
}

function E(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(e) {
        return typeof e
    } : E = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, E(n)
}

function U(n, r) {
    if (d(2, arguments), !r || E(r) !== "object") return new Date(NaN);
    var e = r.years ? w(r.years) : 0,
        t = r.months ? w(r.months) : 0,
        a = r.weeks ? w(r.weeks) : 0,
        i = r.days ? w(r.days) : 0,
        o = r.hours ? w(r.hours) : 0,
        u = r.minutes ? w(r.minutes) : 0,
        f = r.seconds ? w(r.seconds) : 0,
        l = c(n),
        h = t || e ? ve(l, t + e * 12) : l,
        v = i || a ? le(h, i + a * 7) : h,
        g = u + o * 60,
        m = f + g * 60,
        y = m * 1e3,
        O = new Date(v.getTime() + y);
    return O
}

function me(n, r) {
    d(2, arguments);
    var e = c(n).getTime(),
        t = w(r);
    return new Date(e + t)
}

function Q(n) {
    d(1, arguments);
    var r = c(n);
    return r.setHours(0, 0, 0, 0), r
}
var he = 864e5;

function ge(n, r) {
    d(2, arguments);
    var e = Q(n),
        t = Q(r),
        a = e.getTime() - R(e),
        i = t.getTime() - R(t);
    return Math.round((a - i) / he)
}
var we = 6e4,
    ye = 36e5;

function N(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? N = function(e) {
        return typeof e
    } : N = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, N(n)
}

function Te(n) {
    return d(1, arguments), n instanceof Date || N(n) === "object" && Object.prototype.toString.call(n) === "[object Date]"
}

function be(n) {
    if (d(1, arguments), !Te(n) && typeof n != "number") return !1;
    var r = c(n);
    return !isNaN(Number(r))
}

function De(n, r) {
    d(2, arguments);
    var e = c(n),
        t = c(r);
    return e.getFullYear() - t.getFullYear()
}

function B(n, r) {
    var e = n.getFullYear() - r.getFullYear() || n.getMonth() - r.getMonth() || n.getDate() - r.getDate() || n.getHours() - r.getHours() || n.getMinutes() - r.getMinutes() || n.getSeconds() - r.getSeconds() || n.getMilliseconds() - r.getMilliseconds();
    return e < 0 ? -1 : e > 0 ? 1 : e
}

function Oe(n, r) {
    d(2, arguments);
    var e = c(n),
        t = c(r),
        a = B(e, t),
        i = Math.abs(ge(e, t));
    e.setDate(e.getDate() - a * i);
    var o = +(B(e, t) === -a),
        u = a * (i - o);
    return u === 0 ? 0 : u
}

function pe(n, r, e) {
    d(2, arguments);
    var t = J(n, r) / ye;
    return Z(e == null ? void 0 : e.roundingMethod)(t)
}

function Ce(n, r, e) {
    d(2, arguments);
    var t = J(n, r) / we;
    return Z(e == null ? void 0 : e.roundingMethod)(t)
}

function Me(n, r) {
    d(2, arguments);
    var e = c(n),
        t = c(r),
        a = G(e, t),
        i = Math.abs(De(e, t));
    e.setFullYear(1584), t.setFullYear(1584);
    var o = G(e, t) === -a,
        u = a * (i - Number(o));
    return u === 0 ? 0 : u
}

function Ye(n, r) {
    d(2, arguments);
    var e = w(r);
    return me(n, -e)
}
var ke = 864e5;

function Se(n) {
    d(1, arguments);
    var r = c(n),
        e = r.getTime();
    r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
    var t = r.getTime(),
        a = e - t;
    return Math.floor(a / ke) + 1
}

function W(n) {
    d(1, arguments);
    var r = 1,
        e = c(n),
        t = e.getUTCDay(),
        a = (t < r ? 7 : 0) + t - r;
    return e.setUTCDate(e.getUTCDate() - a), e.setUTCHours(0, 0, 0, 0), e
}

function j(n) {
    d(1, arguments);
    var r = c(n),
        e = r.getUTCFullYear(),
        t = new Date(0);
    t.setUTCFullYear(e + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
    var a = W(t),
        i = new Date(0);
    i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var o = W(i);
    return r.getTime() >= a.getTime() ? e + 1 : r.getTime() >= o.getTime() ? e : e - 1
}

function Ue(n) {
    d(1, arguments);
    var r = j(n),
        e = new Date(0);
    e.setUTCFullYear(r, 0, 4), e.setUTCHours(0, 0, 0, 0);
    var t = W(e);
    return t
}
var xe = 6048e5;

function _e(n) {
    d(1, arguments);
    var r = c(n),
        e = W(r).getTime() - Ue(r).getTime();
    return Math.round(e / xe) + 1
}

function $(n, r) {
    var e, t, a, i, o, u, f, l;
    d(1, arguments);
    var h = P(),
        v = w((e = (t = (a = (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0 ? i : r == null || (o = r.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : h.weekStartsOn) !== null && t !== void 0 ? t : (f = h.locale) === null || f === void 0 || (l = f.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(v >= 0 && v <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var g = c(n),
        m = g.getUTCDay(),
        y = (m < v ? 7 : 0) + m - v;
    return g.setUTCDate(g.getUTCDate() - y), g.setUTCHours(0, 0, 0, 0), g
}

function z(n, r) {
    var e, t, a, i, o, u, f, l;
    d(1, arguments);
    var h = c(n),
        v = h.getUTCFullYear(),
        g = P(),
        m = w((e = (t = (a = (i = r == null ? void 0 : r.firstWeekContainsDate) !== null && i !== void 0 ? i : r == null || (o = r.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && t !== void 0 ? t : (f = g.locale) === null || f === void 0 || (l = f.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
    if (!(m >= 1 && m <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var y = new Date(0);
    y.setUTCFullYear(v + 1, 0, m), y.setUTCHours(0, 0, 0, 0);
    var O = $(y, r),
        p = new Date(0);
    p.setUTCFullYear(v, 0, m), p.setUTCHours(0, 0, 0, 0);
    var Y = $(p, r);
    return h.getTime() >= O.getTime() ? v + 1 : h.getTime() >= Y.getTime() ? v : v - 1
}

function Ee(n, r) {
    var e, t, a, i, o, u, f, l;
    d(1, arguments);
    var h = P(),
        v = w((e = (t = (a = (i = r == null ? void 0 : r.firstWeekContainsDate) !== null && i !== void 0 ? i : r == null || (o = r.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : h.firstWeekContainsDate) !== null && t !== void 0 ? t : (f = h.locale) === null || f === void 0 || (l = f.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && e !== void 0 ? e : 1),
        g = z(n, r),
        m = new Date(0);
    m.setUTCFullYear(g, 0, v), m.setUTCHours(0, 0, 0, 0);
    var y = $(m, r);
    return y
}
var Ne = 6048e5;

function We(n, r) {
    d(1, arguments);
    var e = c(n),
        t = $(e, r).getTime() - Ee(e, r).getTime();
    return Math.round(t / Ne) + 1
}

function s(n, r) {
    for (var e = n < 0 ? "-" : "", t = Math.abs(n).toString(); t.length < r;) t = "0" + t;
    return e + t
}
var $e = {
    y: function(r, e) {
        var t = r.getUTCFullYear(),
            a = t > 0 ? t : 1 - t;
        return s(e === "yy" ? a % 100 : a, e.length)
    },
    M: function(r, e) {
        var t = r.getUTCMonth();
        return e === "M" ? String(t + 1) : s(t + 1, 2)
    },
    d: function(r, e) {
        return s(r.getUTCDate(), e.length)
    },
    a: function(r, e) {
        var t = r.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
            case "a":
            case "aa":
                return t.toUpperCase();
            case "aaa":
                return t;
            case "aaaaa":
                return t[0];
            case "aaaa":
            default:
                return t === "am" ? "a.m." : "p.m."
        }
    },
    h: function(r, e) {
        return s(r.getUTCHours() % 12 || 12, e.length)
    },
    H: function(r, e) {
        return s(r.getUTCHours(), e.length)
    },
    m: function(r, e) {
        return s(r.getUTCMinutes(), e.length)
    },
    s: function(r, e) {
        return s(r.getUTCSeconds(), e.length)
    },
    S: function(r, e) {
        var t = e.length,
            a = r.getUTCMilliseconds(),
            i = Math.floor(a * Math.pow(10, t - 3));
        return s(i, e.length)
    }
};
const D = $e;
var M = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    Pe = {
        G: function(r, e, t) {
            var a = r.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return t.era(a, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return t.era(a, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return t.era(a, {
                        width: "wide"
                    })
            }
        },
        y: function(r, e, t) {
            if (e === "yo") {
                var a = r.getUTCFullYear(),
                    i = a > 0 ? a : 1 - a;
                return t.ordinalNumber(i, {
                    unit: "year"
                })
            }
            return D.y(r, e)
        },
        Y: function(r, e, t, a) {
            var i = z(r, a),
                o = i > 0 ? i : 1 - i;
            if (e === "YY") {
                var u = o % 100;
                return s(u, 2)
            }
            return e === "Yo" ? t.ordinalNumber(o, {
                unit: "year"
            }) : s(o, e.length)
        },
        R: function(r, e) {
            var t = j(r);
            return s(t, e.length)
        },
        u: function(r, e) {
            var t = r.getUTCFullYear();
            return s(t, e.length)
        },
        Q: function(r, e, t) {
            var a = Math.ceil((r.getUTCMonth() + 1) / 3);
            switch (e) {
                case "Q":
                    return String(a);
                case "QQ":
                    return s(a, 2);
                case "Qo":
                    return t.ordinalNumber(a, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return t.quarter(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return t.quarter(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return t.quarter(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(r, e, t) {
            var a = Math.ceil((r.getUTCMonth() + 1) / 3);
            switch (e) {
                case "q":
                    return String(a);
                case "qq":
                    return s(a, 2);
                case "qo":
                    return t.ordinalNumber(a, {
                        unit: "quarter"
                    });
                case "qqq":
                    return t.quarter(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return t.quarter(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return t.quarter(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(r, e, t) {
            var a = r.getUTCMonth();
            switch (e) {
                case "M":
                case "MM":
                    return D.M(r, e);
                case "Mo":
                    return t.ordinalNumber(a + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return t.month(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return t.month(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return t.month(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(r, e, t) {
            var a = r.getUTCMonth();
            switch (e) {
                case "L":
                    return String(a + 1);
                case "LL":
                    return s(a + 1, 2);
                case "Lo":
                    return t.ordinalNumber(a + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return t.month(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return t.month(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return t.month(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(r, e, t, a) {
            var i = We(r, a);
            return e === "wo" ? t.ordinalNumber(i, {
                unit: "week"
            }) : s(i, e.length)
        },
        I: function(r, e, t) {
            var a = _e(r);
            return e === "Io" ? t.ordinalNumber(a, {
                unit: "week"
            }) : s(a, e.length)
        },
        d: function(r, e, t) {
            return e === "do" ? t.ordinalNumber(r.getUTCDate(), {
                unit: "date"
            }) : D.d(r, e)
        },
        D: function(r, e, t) {
            var a = Se(r);
            return e === "Do" ? t.ordinalNumber(a, {
                unit: "dayOfYear"
            }) : s(a, e.length)
        },
        E: function(r, e, t) {
            var a = r.getUTCDay();
            switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return t.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return t.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return t.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(r, e, t, a) {
            var i = r.getUTCDay(),
                o = (i - a.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "e":
                    return String(o);
                case "ee":
                    return s(o, 2);
                case "eo":
                    return t.ordinalNumber(o, {
                        unit: "day"
                    });
                case "eee":
                    return t.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return t.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return t.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return t.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(r, e, t, a) {
            var i = r.getUTCDay(),
                o = (i - a.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "c":
                    return String(o);
                case "cc":
                    return s(o, e.length);
                case "co":
                    return t.ordinalNumber(o, {
                        unit: "day"
                    });
                case "ccc":
                    return t.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return t.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return t.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return t.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(r, e, t) {
            var a = r.getUTCDay(),
                i = a === 0 ? 7 : a;
            switch (e) {
                case "i":
                    return String(i);
                case "ii":
                    return s(i, e.length);
                case "io":
                    return t.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return t.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return t.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return t.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(r, e, t) {
            var a = r.getUTCHours(),
                i = a / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return t.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return t.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return t.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return t.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(r, e, t) {
            var a = r.getUTCHours(),
                i;
            switch (a === 12 ? i = M.noon : a === 0 ? i = M.midnight : i = a / 12 >= 1 ? "pm" : "am", e) {
                case "b":
                case "bb":
                    return t.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return t.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return t.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return t.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(r, e, t) {
            var a = r.getUTCHours(),
                i;
            switch (a >= 17 ? i = M.evening : a >= 12 ? i = M.afternoon : a >= 4 ? i = M.morning : i = M.night, e) {
                case "B":
                case "BB":
                case "BBB":
                    return t.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return t.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return t.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(r, e, t) {
            if (e === "ho") {
                var a = r.getUTCHours() % 12;
                return a === 0 && (a = 12), t.ordinalNumber(a, {
                    unit: "hour"
                })
            }
            return D.h(r, e)
        },
        H: function(r, e, t) {
            return e === "Ho" ? t.ordinalNumber(r.getUTCHours(), {
                unit: "hour"
            }) : D.H(r, e)
        },
        K: function(r, e, t) {
            var a = r.getUTCHours() % 12;
            return e === "Ko" ? t.ordinalNumber(a, {
                unit: "hour"
            }) : s(a, e.length)
        },
        k: function(r, e, t) {
            var a = r.getUTCHours();
            return a === 0 && (a = 24), e === "ko" ? t.ordinalNumber(a, {
                unit: "hour"
            }) : s(a, e.length)
        },
        m: function(r, e, t) {
            return e === "mo" ? t.ordinalNumber(r.getUTCMinutes(), {
                unit: "minute"
            }) : D.m(r, e)
        },
        s: function(r, e, t) {
            return e === "so" ? t.ordinalNumber(r.getUTCSeconds(), {
                unit: "second"
            }) : D.s(r, e)
        },
        S: function(r, e) {
            return D.S(r, e)
        },
        X: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = i.getTimezoneOffset();
            if (o === 0) return "Z";
            switch (e) {
                case "X":
                    return A(o);
                case "XXXX":
                case "XX":
                    return C(o);
                case "XXXXX":
                case "XXX":
                default:
                    return C(o, ":")
            }
        },
        x: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = i.getTimezoneOffset();
            switch (e) {
                case "x":
                    return A(o);
                case "xxxx":
                case "xx":
                    return C(o);
                case "xxxxx":
                case "xxx":
                default:
                    return C(o, ":")
            }
        },
        O: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = i.getTimezoneOffset();
            switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + X(o, ":");
                case "OOOO":
                default:
                    return "GMT" + C(o, ":")
            }
        },
        z: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = i.getTimezoneOffset();
            switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + X(o, ":");
                case "zzzz":
                default:
                    return "GMT" + C(o, ":")
            }
        },
        t: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = Math.floor(i.getTime() / 1e3);
            return s(o, e.length)
        },
        T: function(r, e, t, a) {
            var i = a._originalDate || r,
                o = i.getTime();
            return s(o, e.length)
        }
    };

function X(n, r) {
    var e = n > 0 ? "-" : "+",
        t = Math.abs(n),
        a = Math.floor(t / 60),
        i = t % 60;
    if (i === 0) return e + String(a);
    var o = r || "";
    return e + String(a) + o + s(i, 2)
}

function A(n, r) {
    if (n % 60 === 0) {
        var e = n > 0 ? "-" : "+";
        return e + s(Math.abs(n) / 60, 2)
    }
    return C(n, r)
}

function C(n, r) {
    var e = r || "",
        t = n > 0 ? "-" : "+",
        a = Math.abs(n),
        i = s(Math.floor(a / 60), 2),
        o = s(a % 60, 2);
    return t + i + e + o
}
var K = function(r, e) {
        switch (r) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
        }
    },
    ee = function(r, e) {
        switch (r) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
        }
    },
    Ie = function(r, e) {
        var t = r.match(/(P+)(p+)?/) || [],
            a = t[1],
            i = t[2];
        if (!i) return K(r, e);
        var o;
        switch (a) {
            case "P":
                o = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = e.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                o = e.dateTime({
                    width: "full"
                });
                break
        }
        return o.replace("{{date}}", K(a, e)).replace("{{time}}", ee(i, e))
    },
    Fe = {
        p: ee,
        P: Ie
    };
const He = Fe;
var qe = ["D", "DD"],
    Le = ["YY", "YYYY"];

function Re(n) {
    return qe.indexOf(n) !== -1
}

function Ge(n) {
    return Le.indexOf(n) !== -1
}

function V(n, r, e) {
    if (n === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (n === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (n === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (n === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var Qe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Be = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Xe = /^'([^]*?)'?$/,
    Ae = /''/g,
    Ke = /[a-zA-Z]/;

function Ve(n, r, e) {
    var t, a, i, o, u, f, l, h, v, g, m, y, O, p, Y, I, F, H;
    d(2, arguments);
    var te = String(r),
        k = P(),
        S = (t = (a = e == null ? void 0 : e.locale) !== null && a !== void 0 ? a : k.locale) !== null && t !== void 0 ? t : oe,
        q = w((i = (o = (u = (f = e == null ? void 0 : e.firstWeekContainsDate) !== null && f !== void 0 ? f : e == null || (l = e.locale) === null || l === void 0 || (h = l.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && u !== void 0 ? u : k.firstWeekContainsDate) !== null && o !== void 0 ? o : (v = k.locale) === null || v === void 0 || (g = v.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(q >= 1 && q <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var L = w((m = (y = (O = (p = e == null ? void 0 : e.weekStartsOn) !== null && p !== void 0 ? p : e == null || (Y = e.locale) === null || Y === void 0 || (I = Y.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && O !== void 0 ? O : k.weekStartsOn) !== null && y !== void 0 ? y : (F = k.locale) === null || F === void 0 || (H = F.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && m !== void 0 ? m : 0);
    if (!(L >= 0 && L <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!S.localize) throw new RangeError("locale must contain localize property");
    if (!S.formatLong) throw new RangeError("locale must contain formatLong property");
    var x = c(n);
    if (!be(x)) throw new RangeError("Invalid time value");
    var re = R(x),
        ae = Ye(x, re),
        ne = {
            firstWeekContainsDate: q,
            weekStartsOn: L,
            locale: S,
            _originalDate: x
        },
        ie = te.match(Be).map(function(T) {
            var b = T[0];
            if (b === "p" || b === "P") {
                var _ = He[b];
                return _(T, S.formatLong)
            }
            return T
        }).join("").match(Qe).map(function(T) {
            if (T === "''") return "'";
            var b = T[0];
            if (b === "'") return Je(T);
            var _ = Pe[b];
            if (_) return !(e != null && e.useAdditionalWeekYearTokens) && Ge(T) && V(T, r, String(n)), !(e != null && e.useAdditionalDayOfYearTokens) && Re(T) && V(T, r, String(n)), _(ae, T, S.localize, ne);
            if (b.match(Ke)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + b + "`");
            return T
        }).join("");
    return ie
}

function Je(n) {
    var r = n.match(Xe);
    return r ? r[1].replace(Ae, "'") : n
}

function Ze(n) {
    d(1, arguments);
    var r = c(n.start),
        e = c(n.end);
    if (isNaN(r.getTime())) throw new RangeError("Start Date is invalid");
    if (isNaN(e.getTime())) throw new RangeError("End Date is invalid");
    var t = {};
    t.years = Math.abs(Me(e, r));
    var a = G(e, r),
        i = U(r, {
            years: a * t.years
        });
    t.months = Math.abs(se(e, i));
    var o = U(i, {
        months: a * t.months
    });
    t.days = Math.abs(Oe(e, o));
    var u = U(o, {
        days: a * t.days
    });
    t.hours = Math.abs(pe(e, u));
    var f = U(u, {
        hours: a * t.hours
    });
    t.minutes = Math.abs(Ce(e, f));
    var l = U(f, {
        minutes: a * t.minutes
    });
    return t.seconds = Math.abs(ue(e, l)), t
}

function je(n, r) {
    d(2, arguments);
    var e = c(n),
        t = c(r);
    return e.getTime() > t.getTime()
}

function ze(n) {
    return de(function(r, e) {
        var t = null,
            a = !1,
            i;
        t = r.subscribe(ce(e, void 0, void 0, function(o) {
            i = fe(n(o, ze(n)(r))), t ? (t.unsubscribe(), t = null, i.subscribe(e)) : a = !0
        })), a && (t.unsubscribe(), t = null, i.subscribe(e))
    })
}
const tt = (n, r = "MMM do kk:mm") => Ve(n, r),
    rt = (n, r = {}) => {
        const e = r.now ? ? Date.now();
        if (je(n, e)) return null;
        const t = Ze({
                start: n,
                end: e
            }),
            a = [];
        return t.days && t.days >= 1 || t.months && t.months > 0 || t.years && t.years > 0 ? (t.years && t.years > 0 && a.push(`${t.years}y`), t.months && t.months > 0 && a.push(`${t.months}mo`), t.days && t.days > 0 && a.push(`${t.days}d`), !t.years && !t.months && t.hours && t.hours > 0 && a.push(`${t.hours}h`)) : (t.hours && t.hours > 0 && a.push(`${t.hours}h`), t.minutes && t.minutes > 0 && a.push(`${t.minutes}m`), (t.hours === void 0 || t.hours === 0) && (t.minutes === void 0 || t.minutes === 0) && t.seconds !== void 0 && a.push(`${t.seconds}s`)), a.length === 0 ? "" : r.singleUnit ? a[0] : a.join(" ")
    };
export {
    ze as c, pe as d, tt as f, rt as g, je as i
};