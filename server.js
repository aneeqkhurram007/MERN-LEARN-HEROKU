import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

const __dirname = path.resolve();
const app = express();
// if (process.env.NODE_ENV !== "production") {
dotenv.config({
  path: "./.env",
});
// }

const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
// Mongo DB Connection
import DB from "./db/connection.js";
DB();

// Routes
import routes from "./routes.js";
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Server Listening
app.listen(port, () => {
  console.log("Server is running at", port);
});
