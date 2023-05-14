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


