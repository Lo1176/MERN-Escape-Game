import express, { urlencoded, json } from "express";
import cors from "cors";
const app = express();
// if .env is in a parent folder use path:
import dotenv from 'dotenv';
dotenv.config({ path: "./../.env" });
const port = process.env.DB_PORT;
console.log("This is the port : " + port);
import MongoDBClient from "./mongoClient.js";
import { default as userRoutes } from "./routes/users.js";
import { default as roomRoutes } from "./routes/rooms.js";
import { default as bookingRoutes } from "./routes/bookings.js"

// (Enable All CORS Requests)
app.use(cors());

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "ok" });
});

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//Routes rooms
roomRoutes(app)

//Route users
userRoutes(app)

//Route bookings
bookingRoutes(app)

app.listen(port, () => {
  console.log(`Connecté au port ${port} on DB ${process.env.DB_NAME}`);
  MongoDBClient();
});
