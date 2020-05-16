const express = require("express");
const router = express.Router();

router.get("/googlebooks", (req, res) => {
  res.send("google books is alive!");
});

module.exports = router;
