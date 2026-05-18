
import express from "express";
import authRouter from "./auth/auth.route.js";
import { healthRouter } from "./health/health.route.js";

export const app = express( );

app.use( "/health", healthRouter );
app.use( "/api/auth", authRouter );
