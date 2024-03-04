import { jnn } from "./schema.js";
import * as fs from 'fs';


fs.readFile('output_4mar.json', (_, d) => {
    const f = jnn.safeFromBuffer(d)
    console.log(JSON.stringify(f))
    throw new Error('')
})
