const express = require("express");
const router = express.Router();
const Package = require("../models/package");
const packagesController = require("../controllers/package-controller");

router.get("/", packagesController.getAllPckgs);
router.post("/", packagesController.addPckg);
router.get("/:id", packagesController.getByPId);
router.put("/:id", packagesController.updatePckg);
router.delete("/:id", packagesController.deletePckg);

module.exports = router;