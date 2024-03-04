import { f4 as W, f_ as C, f$ as h, g0 as Vr, f5 as ce, f6 as Se } from "./pages_catch-all.js"

const _t = W({
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
})
const Dn = W({
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
})
const Nn = W({
    logType: ce("add").or(ce("remove")),
    blockNumber: C(),
    blockTimestamp: C(),
    txnHash: h(),
    maker: h().optional(),
    makerScreener: _t.optional(),
    logIndex: C(),
    amount0: h(),
    amount1: h()
})
const Hn = Dn.or(Nn)
const jn = W({
    schemaVersion: h(),
    baseTokenSymbol: h().optional(),
    quoteTokenSymbol: h().optional(),
    logs: Se(Hn).nullable()
})
export {jn as jnn}