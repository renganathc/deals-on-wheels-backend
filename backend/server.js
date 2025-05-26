import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import carRoute from "./routes/car.routes.js";
import visitRoute from "./routes/visit.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/api/cars", carRoute);
app.use("/api/visit", visitRoute);

app.listen(process.env.PORT || 5004, () => {
    connectDB();
    console.log(`Server started at http://localhost:${process.env.PORT}`);
});