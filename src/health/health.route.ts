
import { Router } from "express";
const healthRouter = Router( );

healthRouter.get( '/liveness', ( req, res ) => {
    const uptimeData = process.uptime( );
    const response = {
        status: 'OK',
        uptime: { 
            days: Math.floor( uptimeData / ( 3600 * 24 ) ), 
            hours: Math.floor( uptimeData / 3600 ), 
            minutes: Math.floor( uptimeData / 60 ) 
        }
    };
    res.status( 200 ).json( response );
} );
healthRouter.get( '/readiness', async ( req, res ) => {
    res.status( 200 ).json( { status: 'Server ready' } );
} );

export { healthRouter };
