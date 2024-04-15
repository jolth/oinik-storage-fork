"use strict";

import express from "express";
import { getDevices } from "../controller/devices.js";

const router = express.Router();

router.get("/", getDevices);

export default router;

