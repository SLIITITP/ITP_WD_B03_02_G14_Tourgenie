const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicalSchema = new Schema({
    category: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    available: {
        type: Boolean,       
    },
    image: {
        type: String,
        require: true,
    },
    
});
const vehical = mongoose.model("vehical",vehicalSchema);
module.exports = vehical;