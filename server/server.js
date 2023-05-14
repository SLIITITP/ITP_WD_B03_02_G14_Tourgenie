//ashen4 //12luMK5q4
const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const prouter = require("./routes/package-route");
const brouter = require("./routes/pckgBooking-route");
const cors = require('cors');
const app = express(); //invoke express

//app middlewares
app.use(express.json());
app.use(cors());
app.use("/packages",prouter);//localhost:5000/packages
app.use("/pbookings",brouter);//localhost:5000/pbookings


mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.euyskm1.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database!"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));