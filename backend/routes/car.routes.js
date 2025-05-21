import Car from '../models/car.model.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    const query = req.query;
    const result = await Car.find(query);
    res.status(201).json({data : result});
});

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const result = await Car.create({
            brand: data.brand,
            model: data.model,
            year: data.year,
            variant: data.variant,
            image: data.image
        });
        res.status(201).json({success : true, new_car: result});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({success: false, error: 'Server error' });
    }
});

export default router;