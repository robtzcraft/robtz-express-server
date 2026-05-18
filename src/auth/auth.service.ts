
import postgres from "postgres";
import 'crypto';

const uuid = crypto.randomUUID( );

/* 
*   To create a new user use r_anon role:
*       INSERT to accounts
*/

const sql = postgres( {
    username: `${ process.env.POSTGRES_ANON_ROLE }`,
    password: `${ process.env.POSTGRES_ANON_PASSWORD }`,
    host: `${ process.env.db_host }`,
    port: Number( process.env.db_port ),
    database: `${ process.env.db_database }`
} );

async function add_new_user_to_db( firstName: string, lastName: string, email: string ) {
    try {
        await sql`  INSERT INTO accounts ( id, first_name, last_name, email ) values ( 
                        ${ uuid }, 
                        ${ firstName }, 
                        ${ lastName }, 
                        ${ email } 
                    );`
        return { status: 200, message: 'created' };
    } catch( err ) {
        return { status: 500, message: err }
        // throw new Error( `DB error: ${ err }` );
    }
}

async function validateUser( firstName: string, lastName: string, email: string ) {

}

export { add_new_user_to_db }
