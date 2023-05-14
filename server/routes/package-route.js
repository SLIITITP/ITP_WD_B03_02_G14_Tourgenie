const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/package_booking-controller");
const packCountController = require("../controllers/dashboard-controller");

router.get("/", bookingsController.getAllBookings);
router.get("/count", packCountController.getPackBookingsCount);
router.put("/:id", bookingsController.updatePckgBooking);


module.exports = router;
