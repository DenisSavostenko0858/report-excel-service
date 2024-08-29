import express from "express";
import { data } from "../models/fruits";

const router = express();


router.get('/data', (req, res) => {
    res.json({
        data: data,
        totalElements: data.length,
    });
});

export default router;
