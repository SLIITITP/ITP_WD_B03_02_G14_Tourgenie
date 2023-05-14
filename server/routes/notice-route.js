const express = require("express");
const router = express.Router();
const packagesController = require("../controllers/notice-controller");
const NoticeCounter = require("../controllers/dashboard-controller");

router.get("/", packagesController.getAllPckgs);
router.get("/count", NoticeCounter.getNoticeCount);// count 
router.post("/", packagesController.addPckg);
router.get("/:id", packagesController.getByPId);
router.put("/:id", packagesController.updatePckg);
router.delete("/:id", packagesController.deletePckg);

module.exports = router;