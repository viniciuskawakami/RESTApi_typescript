import app from "./app";
import * as ip from "ip";
const ipAddress = ip.address();
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.API_PORT || 3000;
console.log("process.env");

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://${ipAddress}:${PORT}/api/v1/ or http://localhost:${PORT}/api/v1/`
  );
});
