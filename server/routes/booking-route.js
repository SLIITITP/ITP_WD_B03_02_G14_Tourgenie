const express = require("express");
const router = express.Router();
//const Booking = require("../models/booking");
const bookingsController = require("../controllers/booking-controller");
const HotelBookCount = require("../controllers/dashboard-controller");

router.get("/", bookingsController.getAllBookings);
router.get("/count", HotelBookCount.getHotelBookCount);
router.post("/", bookingsController.addBooking);
router.get("/:id", bookingsController.getBookingById);
router.put("/:id", bookingsController.updateBooking);
router.delete("/:id", bookingsController.deleteBooking);

module.exports = router;
