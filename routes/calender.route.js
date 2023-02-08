const express = require("express");
const calenderServer = require("../server/calender");

const router = express.Router();

router.get("/calender", async (req, res) => {
  setTimeout(() => {
    res.status(201).json(calenderServer);
  }, 1000);
});

module.exports = router;
