
import { add_new_user_to_db } from "./auth.service.js";

const newUserTest = async ( req: any, res: any, next: any ) => {
    try {
        console.log( `Incoming GET request: register a new user` );
        const db_response = await add_new_user_to_db( "Sandra", "Azuara", "jorgeluisah41@gmail.com" );
        if( db_response.message == 'created' ) {
            res.status( db_response.status ).json( { status: 'sucess', message: 'New user added' } );
        } else {
            res.status( db_response.status ).json( { status: 'error', message: `${ db_response.message }` } );
        }
    } catch( err ) {
        console.log( 'Controlador falla' );
        next( err );
    }
}

export { newUserTest };
