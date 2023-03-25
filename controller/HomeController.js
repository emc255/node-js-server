const Blog = require("../models/blog");

const index = (request, response) => {
  console.log(request.url);
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
