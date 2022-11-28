const express = require('express');
const router = express.Router();
const productModel = require('../schema/product')

router.get('/', async (req, res) => {
    try {
        const query = req.query.search;
        const data = await productModel.find({ $or: [{ name: query }, { description: query }, { brandName: query }] }).limit(10);
        if (data.length !== 0) {
            return res.status(200).json({ error: false, message: 'fetch successfully', data })
        }
        res.status(404).json({ error: true, message: 'No Data found' })
    } catch (error) {
        res.status(500).json({ error: true, message: 'server error' })
    }


})

module.exports = router;