const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    images: [String]
})

const offerModel = mongoose.model('offer', schema);

module.exports = offerModel;