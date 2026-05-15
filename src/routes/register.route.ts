
import { Router } from "express";

const authRouter = Router( );

authRouter.get( '/', ( req, res ) => {
    res.send( '<h2>This is the auth/register endpoint</h2>' );
} );

export default authRouter;
