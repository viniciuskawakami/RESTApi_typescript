import express from "express";
import * as bodyParser from "body-parser";
import Cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Cors());

// app.use("/api/v2");
export default app;
