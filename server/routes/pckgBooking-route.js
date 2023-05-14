const express = require("express");
const router = express.Router();
const PckgBooking = require("../models/pckgBooking");
const pbookingsController = require("../controllers/pckgBooking-controller");

router.get("/", pbookingsController.getAllPBookings);
router.post("/", pbookingsController.addPBooking);
router.get("/:id", pbookingsController.getByBId);
router.put("/:id", pbookingsController.updatePBooking);
router.delete("/:id", pbookingsController.deletePBooking);

module.exports = router;