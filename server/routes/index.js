const express = require('express');
const router = express.Router();
const product = require('./product');
const offer = require('./offer');

router.use('/product', product);
router.use('/offer', offer)

module.exports = router;