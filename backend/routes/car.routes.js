import Car from '../models/car.model.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    const {minPrice, maxPrice, startYear, endYear, startMileage, endMileage, ...remaining} = req.query;
    const query = {...remaining};
    query.price = {};
    query.year = {};
    query.km = {};
    minPrice != undefined ? query.price.$gte = Number(minPrice) : null;
    maxPrice != undefined ? query.price.$lte = Number(maxPrice) : null;
    startYear != undefined ? query.year.$gte = Number(startYear) : null;
    endYear != undefined ? query.year.$lte = Number(endYear) : null;
    startMileage != undefined ? query.km.$gte = Number(startMileage) : null;
    endMileage != undefined ? query.km.$lte = Number(endMileage) : null;
    if (Object.keys(query.price).length === 0) {
        delete query.price;
    }
    if (Object.keys(query.year).length === 0) {
        delete query.year;
    }
    if (Object.keys(query.km).length === 0) {
        delete query.km;
    }

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
            image: data.image,
            km: data.km,
            fuel: data.fuel,
            transmission: data.transmission,
            ownerCount: data.ownerCount,
            price: data.price,    
        });
        res.status(201).json({success : true, new_car: result});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({success: false, error: 'Server error' });
    }
});

export default router;