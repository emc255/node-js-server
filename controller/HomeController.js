const Blog = require("../models/blog");

const index = (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      response.render("./home/index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { index };
