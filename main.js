import express from 'express';
import multer from 'multer';
import {logsSchema, searchSchema} from "./schema.js";
import * as fs from 'fs';

const app = express();
const upload = multer({ dest: 'uploads/' });

// Define a route to handle file upload
app.post('/pairs', upload.single('file'), (req, res) => {
    // Read the uploaded file
    fs.readFile(req.file.path, (_, data) => {
        const parsedData = searchSchema.safeFromBuffer(data); // assuming this function exists in searchSchema
        res.json(parsedData); // Return the parsed data as JSON response
    });
});

app.post('/logs', upload.single('file'), (req, res) => {
    // Read the uploaded file
    fs.readFile(req.file.path, (_, data) => {
        const parsedData = logsSchema.safeFromBuffer(data); // assuming this function exists in searchSchema
        res.json(parsedData); // Return the parsed data as JSON response
    });
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
