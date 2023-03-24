const express = require("express");
const router = express.Router();
const BlogController = require("../controller/BlogController");

router.get("/create", BlogController.create_get);
router.post("/create", BlogController.create_post);
router.get("/:id", BlogController.details);
router.delete("/:id", BlogController.destroy);

module.exports = router;
