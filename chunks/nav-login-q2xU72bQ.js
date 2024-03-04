import {
    cH as V,
    cI as X,
    cJ as Y,
    cK as Z,
    a6 as q,
    cL as D,
    aW as P,
    cM as E,
    n as f,
    p as e,
    x as v,
    cN as J,
    cO as K,
    q as m,
    cz as A,
    b3 as _,
    af as Q,
    aP as ee,
    ag as te,
    cF as O,
    ah as ne,
    ai as se,
    al as ae,
    ak as oe,
    B as S,
    Z as re,
    V as ie,
    I as w,
    cP as F,
    cQ as ce,
    bA as le,
    O as H,
    cR as de,
    cS as W,
    a2 as B,
    cT as ue,
    cU as he,
    br as ge,
    bu as be,
    a0 as fe,
    cV as xe,
    cW as pe,
    cX as me,
    cY as L,
    cZ as T,
    c_ as ve
} from "../entries/pages_catch-all.__d1Yby5.js";
import {
    _ as we
} from "./preload-helper-hlDPvxQM.js";
import {
    B as ye
} from "./index.esm-nO9vj3HY.js";
import {
    S as R
} from "./span-tpC7Sv0b.js";

function Ce(n) {
    return function(s) {
        s = V(s);
        var a = X(s) ? Y(s) : void 0,
            d = a ? a[0] : s.charAt(0),
            r = a ? Z(a, 1).join("") : s.slice(1);
        return d[n]() + r
    }
}
var Se = Ce("toUpperCase");

function I(n) {
    return Se(V(n).toLowerCase())
}
const je = q.injectable(D, P, (n, s) => ({
        actions: {
            create: async a => {
                const d = await E(s.ensuredCurrentUser);
                n.create(d.id, {
                    schemaVersion: a.schemaVersion,
                    provider: a.provider,
                    token: a.token
                })
            },
            delete: async a => n.delete(a)
        }
    })),
    ke = ({
        onClick: n,
        message: s
    }) => {
        const [a, d] = f.useState(!1), r = f.useCallback(() => {
            const b = document.createElement("link");
            b.href = "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&display=swap", b.rel = "stylesheet", b.onload = () => d(!0), document.head.appendChild(b), d(!0)
        }, []);
        return f.useEffect(() => {
            a || r()
        }, [a, r]), e.jsx(v, {
            onClick: n,
            display: "flex",
            alignItems: "center",
            color: "white",
            justifyContent: "center",
            fontFamily: a ? "Roboto" : "sans-serif",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            backgroundColor: "#4285F4",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.2)",
            height: "38px",
            width: "240px",
            leftIcon: e.jsx(J, {
                size: 14
            }),
            _hover: {
                opacity: "0.8"
            },
            children: s
        })
    },
    Ie = n => {
        let s = {
            title: "",
            header: ""
        };
        return n && n.isAuthenticated ? s = {
            title: "My account",
            header: ""
        } : s = {
            title: "Sign-in",
            header: "Sign-in to DEX Screener to sync your settings, lists and alerts accross unlimited devices."
        }, {
            texts: s
        }
    },
    Ae = K(() => we(() =>
        import ("./connect-rainbowkit-button-5okGBbE0.js").then(n => n.a_), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))),
    Pe = ({
        onClose: n,
        handleProviderLogout: s,
        handleProviderLogin: a
    }) => {
        const d = m.useInjectable(P),
            r = A(() => d.authData, [d.authData]),
            b = _("black", "white"),
            y = _("white", "black");
        return e.jsxs(Q, {
            size: "lg",
            onClose: n,
            motionPreset: "none",
            blockScrollOnMount: !1,
            isOpen: !0,
            isCentered: ee({
                base: !1,
                md: !0
            }),
            children: [e.jsx(te, {
                sx: {
                    zIndex: 50
                }
            }), O({
                value: r,
                onPending: () => null,
                onFailure: () => null,
                onSuccess: l => {
                    const {
                        texts: o
                    } = Ie(l);
                    return e.jsxs(ne, {
                        sx: {
                            zIndex: 50,
                            minHeight: l.isAuthenticated ? 320 : 370
                        },
                        children: [e.jsx(se, {}), e.jsxs(ae, {
                            py: 5,
                            px: 0,
                            textAlign: "center",
                            children: [e.jsx(oe, {
                                children: o.title
                            }), e.jsxs(S, {
                                mt: 2,
                                p: 5,
                                children: [!!o.header && e.jsx(re, {
                                    mb: 10,
                                    fontSize: "md",
                                    children: o.header
                                }), e.jsxs(ie, {
                                    mt: 5,
                                    spacing: l.isAuthenticated ? 5 : 3,
                                    display: "flex",
                                    justifyContent: "center",
                                    children: [!l.allProvidersConnected && !l.googleProvider ? e.jsx(ke, {
                                        onClick: () => a("google"),
                                        message: "Sign in with Google"
                                    }) : e.jsx(v, {
                                        height: "38px",
                                        width: "240px",
                                        leftIcon: e.jsx(w, {
                                            as: F,
                                            color: "green.300"
                                        }),
                                        borderColor: "green.300",
                                        borderWidth: 1,
                                        onClick: s,
                                        fontWeight: "normal",
                                        children: "Signed in with Google"
                                    }), !l.allProvidersConnected && !l.appleProvider ? e.jsx(v, {
                                        height: "38px",
                                        width: "240px",
                                        leftIcon: e.jsx(w, {
                                            as: ce,
                                            color: y,
                                            height: "18px",
                                            marginBottom: "2px"
                                        }),
                                        backgroundColor: b,
                                        color: y,
                                        onClick: () => a("apple"),
                                        fontFamily: "system-ui",
                                        fontWeight: "bold",
                                        _hover: {
                                            opacity: .8
                                        },
                                        children: "Sign in with Apple"
                                    }) : e.jsx(v, {
                                        height: "38px",
                                        width: "240px",
                                        leftIcon: e.jsx(w, {
                                            as: F,
                                            color: "green.300"
                                        }),
                                        borderColor: "green.300",
                                        borderWidth: 1,
                                        onClick: s,
                                        _hover: {
                                            opacity: .8
                                        },
                                        fontWeight: "normal",
                                        children: "Signed in with Apple"
                                    }), !l.allProvidersConnected && !l.web3walletProvider ? e.jsx(f.Suspense, {
                                        fallback: e.jsx(v, {
                                            width: "240px",
                                            height: "38px",
                                            isDisabled: !0,
                                            children: e.jsx(le, {})
                                        }),
                                        children: e.jsx(Ae, {})
                                    }) : e.jsx(v, {
                                        height: "38px",
                                        width: "240px",
                                        leftIcon: e.jsx(w, {
                                            as: F,
                                            color: "green.300"
                                        }),
                                        borderColor: "green.300",
                                        borderWidth: 1,
                                        onClick: s,
                                        fontWeight: "normal",
                                        children: "Wallet Connected"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
            })]
        })
    };

function Ue(n) {
    return H({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1128.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 00360.17 129a22 22 0 1128-33.92A207.88 207.88 0 01464 255.65C464 370.53 370.69 464 256 464z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M256 272a22 22 0 01-22-22V70a22 22 0 0144 0v180a22 22 0 01-22 22z"
            }
        }]
    })(n)
}

function Fe(n) {
    return H({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"
            }
        }]
    })(n)
}
const Oe = f.memo(n => {
        const {
            loading: s,
            onSignIn: a,
            onSignOut: d
        } = n, r = m.useInjectable(P), b = A(() => r.authData, [r.authData]), y = A(() => r.currentUser, [r.currentUser]);
        return O({
            value: de(y, b, (l, o) => ({
                currentUser: l,
                authData: o
            })),
            onPending: () => null,
            onFailure: () => null,
            onSuccess: ({
                currentUser: l,
                authData: o
            }) => {
                const j = o.allProvidersConnected ? d : a,
                    x = o.isAnonymous ? v : S;
                return e.jsxs(x, {
                    fontWeight: "normal",
                    bg: "blue.1000",
                    fontSize: {
                        base: "lg",
                        lg: "inherit"
                    },
                    _focus: {
                        boxShadow: "none",
                        bg: "blue.950"
                    },
                    paddingLeft: {
                        base: 2,
                        lg: 3
                    },
                    variant: "unstyled",
                    display: "flex",
                    width: "100%",
                    borderRadius: 0,
                    color: "white",
                    onClick: o.isAnonymous ? j : () => null,
                    sx: o.isAnonymous ? {
                        "@media(hover: hover)": {
                            _hover: {
                                bg: "blue.950"
                            }
                        }
                    } : void 0,
                    height: "auto",
                    justifyContent: "space-between",
                    borderTopWidth: {
                        base: 0,
                        lg: "1px"
                    },
                    borderBottomWidth: {
                        base: "1px",
                        lg: 0
                    },
                    borderColor: "blue.950",
                    children: [e.jsx(W, {
                        isDisabled: !l,
                        label: o.username,
                        children: e.jsxs(B, {
                            spacing: 1,
                            marginEnd: l ? 0 : 1,
                            overflow: "hidden",
                            px: {
                                base: 1,
                                lg: 0
                            },
                            py: {
                                base: 3,
                                lg: "10px"
                            },
                            children: [e.jsx(w, {
                                as: ue,
                                boxSize: "18px"
                            }), e.jsx(R, {
                                fontSize: "md",
                                noOfLines: 1,
                                cursor: "default",
                                children: o.username
                            })]
                        })
                    }), e.jsxs(S, {
                        display: "flex",
                        fontWeight: "semibold",
                        _focus: {
                            boxShadow: "none"
                        },
                        children: [!o.isAnonymous && !s && e.jsx(S, {
                            children: e.jsx(W, {
                                isDisabled: !o.allProvidersConnected,
                                label: "Sign out",
                                children: e.jsx(v, {
                                    onClick: j,
                                    variant: "ghost",
                                    height: "100%",
                                    borderRadius: 0,
                                    width: "auto",
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    iconSpacing: 1,
                                    lineHeight: "1",
                                    fontSize: "xs",
                                    color: "blue.600",
                                    _focus: {
                                        bg: "blue.950",
                                        color: "white",
                                        boxShadow: "none"
                                    },
                                    sx: {
                                        "@media(hover: hover)": {
                                            _hover: {
                                                bg: "blue.950",
                                                color: "white"
                                            }
                                        }
                                    },
                                    children: o.allProvidersConnected ? e.jsx(w, {
                                        as: Ue,
                                        boxSize: "16px"
                                    }) : e.jsx(w, {
                                        as: Fe,
                                        boxSize: "16px"
                                    })
                                })
                            })
                        }), o.isAnonymous && !s && e.jsxs(B, {
                            marginX: 2,
                            spacing: 1,
                            children: [e.jsx(w, {
                                as: ye,
                                boxSize: "16px"
                            }), e.jsx(R, {
                                fontSize: "xs",
                                children: "Sign-in"
                            })]
                        })]
                    })]
                })
            }
        })
    }),
    Be = f.memo(() => {
        const n = m.useInjectable(je),
            s = m.useInjectable(he),
            a = m.useInjectable(P),
            d = m.useInjectable(ge),
            r = m.useInjectable(be),
            b = fe(),
            y = m.useInjectable(xe),
            [l, o] = f.useState(!1),
            j = A(() => a.authData, [a.authData]),
            x = O({
                value: j,
                onFailure: () => L,
                onPending: () => L,
                onSuccess: t => t
            });
        f.useEffect(() => {
            x.isAuthenticated && o(!1)
        }, [x]);
        const g = f.useCallback((t, c, p) => {
                if (!c) return;
                const U = {
                    signIn: {
                        success: `You were successfully signed in with ${I(p)}.`,
                        error: `Failed to sign in with ${I(p)}, try again.`
                    },
                    signOut: {
                        success: "You were successfully signed out.",
                        error: "Failed to sign out, try again."
                    },
                    link: {
                        success: "Account linked successfully!",
                        error: `Failed to link to your ${I(p)} account, try again.`
                    },
                    inUse: {
                        success: "",
                        error: `There's an account already linked to this ${I(p)} email.`
                    }
                };
                b({
                    status: c,
                    title: U[t][c],
                    isClosable: !0
                })
            }, [b]),
            G = f.useCallback(() => {
                o(!0), d.track({
                    event: "user:login-initiated"
                })
            }, [d]),
            z = f.useCallback(async () => {
                g("signOut", "success"), await E(a.signOut()), o(!1), d.track({
                    event: "user:logout"
                })
            }, [a, d, g]),
            M = new pe,
            C = new me("apple.com");
        C.addScope("email"), C.addScope("name"), C.setCustomParameters({
            locale: "en"
        });
        const N = async t => {
                const c = await y();
                if (!c.currentUser) return;
                const p = t === "google" ? M : C;
                switch (t) {
                    case "google":
                        {
                            const u = c.currentUser.providerData.find(i => i.providerId === "google.com");
                            if (!(x != null && x.googleProvider) && u) {
                                await n.actions.create({
                                    schemaVersion: "1.0.0",
                                    provider: t,
                                    token: u.uid
                                }).catch(i => {
                                    r.error({
                                        id: "failedCreatingAuthProviderOnFallbackMethod",
                                        data: {
                                            provider: t,
                                            error: i
                                        }
                                    }), g("link", "error", t)
                                });
                                return
                            }
                            break
                        }
                    case "apple":
                        {
                            const u = c.currentUser.providerData.find(i => i.providerId === "apple.com");!(x != null && x.appleProvider) && u && await n.actions.create({
                                schemaVersion: "1.0.0",
                                provider: t,
                                token: u.uid
                            }).catch(i => {
                                r.error({
                                    id: "failedCreatingAuthProviderOnFallbackMethod",
                                    data: {
                                        provider: t,
                                        error: i
                                    }
                                }), g("link", "error", t)
                            })
                        }
                        break
                }
                const k = await (await s()).httpsCallable("authenticateAuthProvider");
                ve(c.currentUser, p).then(async u => {
                    var h;
                    if (!u.providerId) {
                        r.error({
                            event: {
                                id: "emptyProviderId",
                                data: {
                                    userId: (h = c.currentUser) == null ? void 0 : h.uid,
                                    result: u
                                }
                            }
                        }), g("link", "error", t);
                        return
                    }
                    const i = await k({
                        provider: t,
                        token: u.user.providerData[0].uid
                    });
                    i.data.success || (r.error({
                        event: {
                            id: "failedOnCallingAuthenticateUserFunction",
                            data: {
                                error: i.data.error
                            }
                        }
                    }), g("link", "error", t)), g("link", "success", t), o(!1)
                }).catch(u => {
                    var i;
                    u.code === "auth/credential-already-in-use" && g("inUse", "error", t), r.error({
                        event: {
                            id: "failedAddingProviderToUser",
                            data: {
                                provider: t,
                                error: u,
                                userId: (i = c.currentUser) == null ? void 0 : i.uid
                            }
                        }
                    })
                })
            },
            $ = async t => {
                var u;
                const c = await y();
                if (c.currentUser && !c.currentUser.isAnonymous) return N(t);
                const p = (u = c.currentUser) != null && u.isAnonymous ? c.currentUser.uid : void 0,
                    k = await (await s()).httpsCallable("authenticateAuthProvider");
                switch (t) {
                    case "google":
                        {
                            await T(c, M).then(async i => {
                                const h = await k({
                                    anonymousUserId: p,
                                    provider: t,
                                    token: i.user.providerData[0].uid
                                });
                                h.data.success || r.error({
                                    event: {
                                        id: "failedOnCallingAuthenticateUserFunction",
                                        data: {
                                            error: h.data.error
                                        }
                                    }
                                }), g("signIn", "success", t), o(!1)
                            }).catch(i => {
                                var h;
                                r.error({
                                    event: {
                                        id: "failedHandlingProviderLogin",
                                        data: {
                                            provider: t,
                                            error: i,
                                            userId: (h = c.currentUser) == null ? void 0 : h.uid
                                        }
                                    }
                                }), g("signIn", "error", t)
                            });
                            break
                        }
                    case "apple":
                        {
                            await T(c, C).then(async i => {
                                const h = await k({
                                    anonymousUserId: p,
                                    provider: t,
                                    token: i.user.providerData[0].uid
                                });
                                h.data.success || r.error({
                                    event: {
                                        id: "failedOnCallingAuthenticateUserFunction",
                                        data: {
                                            error: h.data.error
                                        }
                                    }
                                }), g("signIn", "success", t), o(!1)
                            }).catch(i => {
                                var h;
                                r.error({
                                    event: {
                                        id: "failedHandlingProviderLogin",
                                        data: {
                                            provider: t,
                                            error: i,
                                            userId: (h = c.currentUser) == null ? void 0 : h.uid
                                        }
                                    }
                                }), g("signIn", "error", t)
                            });
                            break
                        }
                }
            };
        return e.jsxs(S, {
            textAlign: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [e.jsx(Oe, {
                loading: l,
                onSignIn: G,
                onSignOut: z
            }), l && e.jsx(Pe, {
                onClose: () => o(!1),
                handleProviderLogout: z,
                handleProviderLogin: $
            })]
        })
    });
export {
    Be as
    default
};

function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/chunks/connect-rainbowkit-button-5okGBbE0.js", "assets/entries/pages_catch-all.__d1Yby5.js", "assets/chunks/preload-helper-hlDPvxQM.js", "assets/static/catch-all.f0y8IcqD.css", "assets/chunks/bn-glWiwwWf.js", "assets/chunks/delayed-JPP63qSh.js", "assets/static/connect-rainbowkit-button.39BX3rkw.css"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}