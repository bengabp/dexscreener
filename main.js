import { logsSchema, searchSchema } from "./schema.js";
import * as fs from 'fs';


fs.readFile('output_4mar.json', (_, d) => {
    const f = logsSchema.safeFromBuffer(d)
    // console.log(JSON.stringify(f))
})

fs.readFile('search.json', (_, d) => {
    const f = searchSchema.safeFromBuffer(d)
    console.log(JSON.stringify(f))
})

