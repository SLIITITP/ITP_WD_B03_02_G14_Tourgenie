const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pbookingSchema = new Schema({
    bId: {
        type: String,
        required: true
    },
    pId: {
        type: String,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    uId : {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    nOp: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("PckgBooking", pbookingSchema);