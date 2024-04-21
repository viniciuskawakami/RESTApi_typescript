import { mysql } from 'mysql';
import {*} as dotenv from 'dotenv';
import { error } from 'console';

dotenv.config();
console.log(process.env);
// TODO: verificar se o proccess.env foi parseado corretamente aqui!
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_SCHEMA } = process.env;

console.log(process.env);
const connection = mysql.createConnection({
  host: DB_HOST,
  port: parseInt(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
});

connection.connect((err: MysqlError) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log(`Succesfully connected to database${DB_SCHEMA}`);
});

export default connection;