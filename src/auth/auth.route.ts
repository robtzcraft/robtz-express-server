import { Router } from 'express';
import { newUserTest } from './auth.controller.js';

const authRouter = Router();

authRouter.get('/', newUserTest);
// authRouter.post( '/register',  )

export default authRouter;
