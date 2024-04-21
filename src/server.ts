import app from "./app";
import * as db from "./db";
import * as ip from "ip";
const ipAddress = ip.address();
import * as dotenv from "dotenv";
dotenv.config();
let env_vars = process.env;
const PORT = process.env.API_PORT || 3000;

console.log(env_vars); // ok
console.log("conectou no Mysql!!");

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://${ipAddress}:${PORT}/api/v1/ or http://localhost:${PORT}/api/v1/`
  );
});
