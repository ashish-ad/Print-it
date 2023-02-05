"use strict";
import express from "express";
import bodyParser from "body-parser";
import bodyParserErrorHandler from 'express-body-parser-error-handler';
import cors from "cors";

import router from "./router.js";
import globalConfig from "./src/Config/global.config.js";

const Port = globalConfig.port;
const app = express();


// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParserErrorHandler({
  errorMessage: (err) => {
    return `Body Parser failed to parse request --> ${err.message}`;
  }
}));

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Issue handler
const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));

// Handling route not found
app.use(function (req, res) {
    res.status(404);
    const response = { statusCode: 404, error: `The Route: ${req.protocol}://${req.hostname}${req.originalUrl} is not found.` }
    // respond with html page
    if (req.accepts('html')) {
        res.send(response);
        return;
    }
    // respond with json
    if (req.accepts('json')) {
        res.json(response);
        return;
    }
    // default to plain-text. send()
    res.type('txt').send(`The Route: ${req.protocol}://${req.hostname}${req.originalUrl} is not found.`);
});

app.use("/", router);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${Port}`);
});