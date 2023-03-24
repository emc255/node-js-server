const express = require("express");
const router = express.Router();
const AboutController = require("../controller/AboutController");

router.get("/about", AboutController.index);
router.get("/about-me", AboutController.redirect);

module.exports = router;
