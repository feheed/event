const express = require("express");
const router = express.Router();
const {
  createEvent,
  fetchEvent,
  deleteEvent,
  updateEvent,
  fetchOneEvent,
} = require("./controllers");

router.get("/", fetchEvent);
router.get("/:id", fetchOneEvent);
router.post("/", createEvent);

router.delete("/:id", deleteEvent);

router.put("/:id", updateEvent);

module.exports = router;
