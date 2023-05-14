const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
const bookingsRoute = require('./routes/bookingsRoute')

// middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
app.use(cors());


app.use('/api/rooms', roomsRoute)
app.use('/api/users', userRoute)
app.use('/api/bookings' , bookingsRoute)


app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Node server started using nodemon on port ${port}`));
