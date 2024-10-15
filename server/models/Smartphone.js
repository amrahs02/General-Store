const mongoose = require('mongoose');

const smartphoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    specs: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

const Smartphone = mongoose.model('Smartphone', smartphoneSchema);
module.exports = Smartphone;
