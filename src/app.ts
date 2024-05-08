import cors from "cors";
import express from "express";
import http from "http";
import morgan from "morgan";
import connectDB from "./config/db";
import routes from "./routes";

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectDB();

// Define API routes
app.use("/api", routes);

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
