import {
    n as e,
    p as s
} from "../entries/pages_catch-all.__d1Yby5.js";
const a = ({
    delay: t = 300,
    children: r
}) => {
    const [i, o] = e.useState(!1);
    return e.useEffect(() => {
        const u = setTimeout(() => o(!0), t);
        return () => clearTimeout(u)
    }, [t]), i ? s.jsx(s.Fragment, {
        children: r
    }) : null
};
export {
    a as D
};