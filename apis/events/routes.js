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
router.put("/", fetchOneEvent);
router.post("/", createEvent);

router.delete("/:id", deleteEvent);

router.put("/:id", updateEvent);

module.exports = router;
