import { app } from "./app.js";
const PORT = process.env.PORT;

const server = app.listen( PORT, ( ) => {
    console.log( `Server listening at ${ PORT }` );
} );

server.on( 'erro', ( err ) => {
    console.log( `${ err }` )
} );
server.on( 'uncaughtException', ( err ) => {
    console.log( `${ err }` );
} );
server.on( 'unhandledRejection', ( reason ) => {
    console.log( `${ reason }` );
} );

/* Graceful Shutting */
const gracefulShutdownSnippet = ( ) => {
    server.close( ( ) => {
        console.log( `Shutting down server. PORT ${ PORT } deactivating...` );
        process.exit( 0 );
    } );

    setTimeout( ( ) => {
        console.log( 'Forcing shutdown...' );
        process.exit( 1 );
    }, 10000 );
}
process.on( 'SIGTERM', gracefulShutdownSnippet );
process.on( 'SIGINT', gracefulShutdownSnippet );
