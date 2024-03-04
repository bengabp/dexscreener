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
export { tn as f4, Pt as f_, ze as f$, wve as g0, Uy as f5 }