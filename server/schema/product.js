const mongoose = require('mongoose');

const typeStringReq = {
    type: String,
    required: true
}

const schema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: typeStringReq,
    description: typeStringReq,
    quantity: {
        type: Number,
        required: true
    },
    rating: Number,
    brandName: typeStringReq,
    images: [String],
    options: [String]

})

const productModel = mongoose.model('product', schema);

module.exports = productModel