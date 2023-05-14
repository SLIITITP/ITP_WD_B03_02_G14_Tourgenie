const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Package = require("../models/package");
const packagesController = require("../controllers/package-controller");

router.get("/", packagesController.getAllPckgs);
router.post("/", packagesController.addPckg);
router.get("/:id", packagesController.getByPId);
router.put("/:id", packagesController.updatePckg);
router.delete("/:id", packagesController.deletePckg);

module.exports = router;
=======
const bookingsController = require("../controllers/package_booking-controller");
const packCountController = require("../controllers/dashboard-controller");

router.get("/", bookingsController.getAllBookings);
router.get("/count", packCountController.getPackBookingsCount);
router.put("/:id", bookingsController.updatePckgBooking);


module.exports = router;
>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61
