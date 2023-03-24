const express = require("express");
const router = express.Router();
const ErrorController = require("../controller/ErrorController");

router.use(ErrorController.status404);

module.exports = router;
