const Blog = require("../models/blog");

const create_get = (request, response) => {
  response.render("./blog/create", { title: "Create Blog" });
};

const create_post = (request, response) => {
  Blog.create(request.body)
    .then((result) => {
      response.redirect("/");
    })
    .catch((err) => {
      throw err;
    });
};

const details = (request, response) => {
  Blog.findById(request.params.id)
    .then((result) => {
      response.render("./blog/details", {
        title: "Blog Details",
        blog: result,
      });
    })
    .catch((err) => {
      response.status(404).render("./error/404", { title: "Blog Not Found" });
    });
};

const destroy = (request, response) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.json({ redirect: "/" });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { details, create_get, create_post, destroy };
