
const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const router = require("./routes/notice-route");
const router2 = require("./routes/booking-route");
const router3 = require("./routes/hotel_booking-route");
const router4 = require("./routes/package-route");

const cors = require('cors');
const app = express(); //invoke express

//app middlewares
app.use(express.json());
app.use(cors());
app.use("/notices",router);//localhost:5000/notices
app.use("/bookings",router2);//localhost:5000/bookings
app.use("/hotel",router3);//localhost:5000/hotel
app.use("/packagebookings",router4);//localhost:5000/packagebookings



mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.euyskm1.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database!"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));