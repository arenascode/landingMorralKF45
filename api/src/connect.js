// import mysl from "mysql2-promise";
import mysql2Promise from "mysql2/promise";
import { mySqlHost, mySqlPass } from "./config/hostMysql.config.js";
import { CNX_STR } from "./config/mongo.config.js";
import mongoose from "mongoose";

const environment = process.env.NODE_ENV || "dev";

let db


if (environment == "prod") {
  // Conexión a MongoDB en producción
  console.log({environment});
  mongoose
    .connect(CNX_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
} else {
  db = mysql2Promise.createPool(
  {
    host: mySqlHost,
    user: "root",
    password: mySqlPass,
    database: "morralKF45"
    }
  )
}

export default db
