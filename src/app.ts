import express from 'express';
import authRouter from './routes/register.route.js';
import { healthRouter } from './routes/health.route.js';
export const app = express(  );

app.use( '/health', healthRouter );
app.use( '/auth', authRouter );
