var b0 = {
    abstractFunction: hve,
    addDeprecatedGetters: pve,
    bufferFrom: vV,
    capitalize: yV,
    copyOwnProperties: cve,
    getHash: rve,
    compare: tve,
    getOption: nve,
    impliedNamespace: dve,
    isValidName: bV,
    jsonEnd: fve,
    newBuffer: kv,
    objectValues: sve,
    qualify: lve,
    toMap: ove,
    singleIndexOf: ive,
    hasDuplicates: ave,
    unqualify: uve,
    BufferPool: C5,
    Lcg: Hf,
    OrderedQueue: A5,
    Tap: Tt
};

var Gte = Object.defineProperty;
var qte = (t,e,n)=>e in t ? Gte(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Dt = (t,e,n)=>(qte(t, typeof e != "symbol" ? e + "" : e, n),
n);

class zo {
    constructor() {
        Dt(this, "_value")
    }
    toBuffer(e) {
        qh.pos = 0,
        this.write(qh, e);
        const n = b0.newBuffer(qh.pos);
        return qh.isValid() ? qh.buf.copy(n, 0, 0, qh.pos) : this.write(new b0.Tap(n), e),
        n
    }
    fromBuffer(e) {
        const n = new b0.Tap(e)
          , r = this.read(n);
        if (n.pos !== e.length)
            throw new Error("Buffer and tap lengths mismatch");
        return r
    }
    safeFromBuffer(e) {
        try {
            return {
                ok: !0,
                value: this.fromBuffer(e)
            }
        } catch (n) {
            return {
                ok: !1,
                error: su(n)
            }
        }
    }
    encode(e, n) {
        return this.toBuffer(e).toString(n)
    }
    decode(e, n) {
        return this.fromBuffer(b0.bufferFrom(e, n))
    }
    transform(e, n, r) {
        return new mve(this,e,n,r)
    }
    optional() {
        return Ave(this)
    }
    nullable() {
        return kve(this)
    }
    or(e) {
        return T2([this, e])
    }
    extend(e) {
        return new Zw({
            ...this.fields,
            ...e
        })
    }
    pick(e) {
        const n = {};
        for (const [r,i] of Object.entries(this.fields))
            e[r] === !0 && (n[r] = i);
        return new Zw(n)
    }
    omit(e) {
        const n = {};
        for (const [r,i] of Object.entries(this.fields))
            e[r] !== !0 && (n[r] = i);
        return new Zw(n)
    }
}
class mve extends zo {
    constructor(e, n, r, i) {
        super(),
        this.source = e,
        this.deserialize = n,
        this.serialize = r,
        this.is = i
    }
    read(e) {
        return this.deserialize(this.source.read(e))
    }
    write(e, n) {
        this.source.write(e, this.serialize(n))
    }
}
class gve extends zo {
    read() {
        return null
    }
    write() {}
    is(e) {
        return e === null
    }
}
const vve = ()=>new gve;
class yve extends zo {
    read() {}
    write() {}
    is(e) {
        return e === void 0
    }
}
function wV() {
    return new yve
}
class bve extends zo {
    read(e) {
        return e.readDouble()
    }
    write(e, n) {
        e.writeDouble(n)
    }
    is(e) {
        return typeof e == "number"
    }
}
const Pt = ()=>new bve;
class wve extends zo {
    read(e) {
        return e.readBoolean()
    }
    write(e, n) {
        e.writeBoolean(n)
    }
    is(e) {
        return typeof e == "boolean"
    }
}
const Fs = ()=>new wve;
class Sve extends zo {
    read(e) {
        return e.readString()
    }
    write(e, n) {
        e.writeString(n)
    }
    is(e) {
        return typeof e == "string"
    }
}
const ze = ()=>new Sve;
class xve extends zo {
    constructor(e) {
        super(),
        this.value = e
    }
    read(e) {
        switch (typeof this.value) {
        case "string":
            {
                const n = e.readString();
                if (this.is(n))
                    return n;
                throw new Error(`Cannot read literal "${this.value}" with value "${n}"`)
            }
        case "number":
            {
                const n = e.readDouble();
                if (this.is(n))
                    return n;
                throw new Error(`Cannot read literal "${this.value}" with value "${n}"`)
            }
        case "boolean":
            {
                const n = e.readBoolean();
                if (this.is(n))
                    return n;
                throw new Error(`Cannot read literal "${this.value}" with value "${n}"`)
            }
        }
    }
    write(e, n) {
        switch (typeof n) {
        case "string":
            return e.writeString(n);
        case "number":
            return e.writeDouble(n);
        case "boolean":
            return e.writeBoolean(n)
        }
    }
    is(e) {
        return e === this.value
    }
}
const Uy = t=>new xve(t);
class _ve extends zo {
    constructor(e) {
        super(),
        this.values = e
    }
    read(e) {
        const n = e.readString();
        if (this.is(n))
            return n;
        throw new Error(`Cannot read enum "${this.values.map(r=>r.toString()).join(" | ")}" for value "${n}"`)
    }
    write(e, n) {
        e.writeString(n)
    }
    is(e) {
        return this.values.includes(e)
    }
}
const SV = t=>new _ve(t);
class Zw extends zo {
    constructor(n) {
        super();
        Dt(this, "keys");
        this.fields = n,
        this.keys = Object.keys(n)
    }
    write(n, r) {
        for (const i of this.keys) {
            const o = r;
            this.fields[i].write(n, o[i])
        }
    }
    read(n) {
        const r = {};
        for (const i of this.keys)
            r[i] = this.fields[i].read(n);
        return r
    }
    is(n) {
        if (U3(n)) {
            for (const r of this.keys)
                if (!this.fields[r].is(n[r]))
                    return !1;
            return !0
        }
        return !1
    }
}
const tn = t=>new Zw(t);
class xV extends zo {
    constructor(e) {
        super(),
        this.schemas = e
    }
    is(e) {
        for (const n of this.schemas)
            if (n.is(e))
                return !0;
        return !1
    }
    read(e) {
        const n = e.readLong()
          , r = this.schemas[n];
        if (!r)
            throw new Error(`Cannot read union "${this.toString()}" - schema with index "${n}" not found`);
        const i = r.read(e);
        if (this.is(i))
            return i;
        throw new Error(`Cannot read union "${this.toString()}" for value "${i}"`)
    }
    write(e, n) {
        const r = this.schemas.findIndex(i=>i.is(n));
        if (r === -1)
            throw new Error(`Cannot write union "${this.toString()}" for value "${n}"`);
        e.writeLong(r),
        this.schemas[r].write(e, n)
    }
}
const Eve = t=>t instanceof xV;
function T2(t) {
    const e = [];
    for (const n of t)
        Eve(n) ? e.push(...n.schemas) : e.push(n);
    return new xV(e)
}
class Tve extends zo {
    constructor(e) {
        super(),
        this.item = e
    }
    write(e, n) {
        e.writeLong(n.length);
        for (const r of n)
            this.item.write(e, r)
    }
    read(e) {
        const n = []
          , r = e.readLong();
        for (let i = 0; i < r; i++)
            n.push(this.item.read(e));
        return n
    }
    is(e) {
        if (!Array.isArray(e))
            return !1;
        for (let n = 0; n < e.length; n++)
            if (!this.item.is(e[n]))
                return !1;
        return !0
    }
}
const Vr = t=>new Tve(t);
class Ive extends zo {
    constructor(e, n) {
        super(),
        this.key = e,
        this.value = n
    }
    write(e, n) {
        const r = Object.keys(n);
        e.writeLong(r.length);
        for (const i of r)
            e.writeString(i),
            this.value.write(e, n[i])
    }
    read(e) {
        const n = {}
          , r = e.readLong();
        for (let i = 0; i < r; i++) {
            const o = e.readString()
              , s = this.value.read(e);
            n[o] = s
        }
        return n
    }
    is(e) {
        if (U3(e)) {
            for (const n of Object.keys(e))
                if (!this.key.is(n) || !this.value.is(e[n]))
                    return !1;
            return !0
        }
        return !1
    }
}
const vN = (t,e)=>new Ive(t,e);
class Cve extends zo {
    write(e, n) {
        e.writeLong(n.getTime())
    }
    read(e) {
        return new Date(e.readLong())
    }
    is(e) {
        return e instanceof Date
    }
}
const tm = ()=>new Cve;
function Ave(t) {
    return T2([wV(), t])
}
function kve(t) {
    return T2([vve(), t])
}

export { tn as f4, Pt as f_, ze as f$, Vr as f6, Uy as f5, Fs as g0 }