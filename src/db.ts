import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();
const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_SCHEMA, } = process.env;
 console.log(vai comçar!!!!####);
async function connect():mysql.Connection{

    if (global.connetion && global.connetion.state !== 'disconnected')
        return global.connection;
    const connection = await mysql.createConnection(
    `"${DB_TYPE}//${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}"`
    );
    console.log(`Connection successfulLy made to ${DB_SCHEMA}!!! `);
    global.connection = connection;
    return connection;
}
connect();




module.exports = {}