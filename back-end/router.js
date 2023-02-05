"use strict";
import express from "express";
const router = express.Router();
import printIt from "./src/Routes/router.printIt.js"

router.use("/printIt", printIt);

export default router;