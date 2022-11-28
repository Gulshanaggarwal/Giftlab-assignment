const express = require('express');
const router = express.Router();
const offerModel = require('../schema/offer')

router.get('/', async (req, res) => {
    try {
        const data = await offerModel.find();
        console.log(data);

        res.status(200).json({ error: false, message: 'fetched successfully', data: data[0].images })
    } catch (error) {
        res.status({ error: true, message: 'server error' })
    }


})

module.exports = router;