"use strict";
import express from "express";
import healthCheck from "../Services/healthCheck.js"
const router = express.Router();

router.get('/healthCheck', healthCheck.init0);
router.get('/healthCheckOrg', healthCheck.init1);

export default router;