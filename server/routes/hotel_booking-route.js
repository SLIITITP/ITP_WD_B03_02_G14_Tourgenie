const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/hotel_booking-controller");

router.get("/", bookingsController.getAllBookings);

module.exports = router;
