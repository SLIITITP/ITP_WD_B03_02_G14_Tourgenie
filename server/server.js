<<<<<<< HEAD
//ashen4 //12luMK5q4
const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const prouter = require("./routes/package-route");
const brouter = require("./routes/pckgBooking-route");
=======
<<<<<<< HEAD

const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const router = require("./routes/notice-route");
const router2 = require("./routes/booking-route");
const router3 = require("./routes/hotel_booking-route");
const router4 = require("./routes/package-route");

>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61
const cors = require('cors');
const app = express(); //invoke express

//app middlewares
app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use("/packages",prouter);//localhost:5000/packages
app.use("/pbookings",brouter);//localhost:5000/pbookings
=======
app.use("/notices",router);//localhost:5000/notices
app.use("/bookings",router2);//localhost:5000/bookings
app.use("/hotel",router3);//localhost:5000/hotel
app.use("/packagebookings",router4);//localhost:5000/packagebookings

>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61


mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.euyskm1.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database!"))
.then(() => {
    app.listen(5000);
})
<<<<<<< HEAD
.catch((err) => console.log(err));
=======
.catch((err) => console.log(err));
=======
const express  = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Student = require("./module/student");
//dicler the constent verable 
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; //set the port number || <-- this function is logical or opperator eka neththan thiyana ekak denna 


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
});

const Connection = mongoose.connection;
mongoose.connection.once('open', () => {
    console.log("Mongodb Connection success !")
})

const StudentRouter = require ("./routes/student.js");

app.use("/student",StudentRouter);

const EmployeeRouter = require ("./routes/Employee.js");

app.use("/Employee",EmployeeRouter);

const tourRoute = require ("./routes/tour.js");
app.use("/Tour", tourRoute);


const driverRouter = require ("./routes/driver.js");

app.use("/driver",driverRouter);

const packageRouter = require ("./routes/package.js");

app.use("/package",packageRouter);

const roomeRouter = require ("./routes/room.js");

app.use("/hotel",roomeRouter);

const userRouter = require ("./routes/user.js");

app.use("/user",userRouter);












app.listen(PORT , () =>   {
    console.log(`Server is running on port num: ${PORT}`)


})


>>>>>>> test
>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61
