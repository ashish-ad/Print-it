"use strict";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 8080,
  
}