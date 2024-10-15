const mongoose = require('mongoose');

const gadgetSchema = new mongoose.Schema({
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
})  ;

const Gadget = mongoose.model('Gadget', gadgetSchema);
module.exports = Gadget;
