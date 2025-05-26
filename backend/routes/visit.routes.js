import Visit from "../models/visit.model.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const query = req.query;
    await Visit.create(query);
});

export default router;