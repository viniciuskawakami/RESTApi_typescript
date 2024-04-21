import { Console } from "console";
import * as dotenv from "dotenv";
dotenv.config();
const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_SCHEMA } =
  process.env;

async function connect(params: type) {}
import mysql from "mysql2/promise";
const connection = await mysql.createConnection(
  `"${DB_TYPE}//${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}"`
);
console.log(`Connection successfulLy made to ${DB_SCHEMA}!!! `);
