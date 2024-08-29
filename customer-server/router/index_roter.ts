import express from "express";
import { data } from "../models/fruits";

const router = express();


// router.get('/data', (req, res) => {
//     res.json({
//         data: data,
//         totalElements: data.length,
        
//     });
// });

router.get('/data', (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultData = data.slice(startIndex, endIndex);
    res.json({
        total: data.length,
        page,
        limit,
        data: resultData,
    });
});

export default router;
