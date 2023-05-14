<<<<<<< HEAD
=======

>>>>>>> f46d21320db39d5c1b711e338a150f88d40fe2e6
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    room : {
        type: String,
        required: true
    },
    roomid : {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    fromdate:{
        type: String,
        required: true
    },
    todate:{
        type: String,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    totaldays:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        required: true

    },
    status:{
        type: String,
        required: true,
        default :'booked'
    }
},{
    timestamps : true,
})

<<<<<<< HEAD
const bookingModel = mongoose.model('bookings', bookingSchema);
module.exports = bookingModel
=======
module.exports = mongoose.model('bookings', bookingSchema);
>>>>>>> f46d21320db39d5c1b711e338a150f88d40fe2e6
