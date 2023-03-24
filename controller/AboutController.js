const index = (request, response) => {
  response.render("./about/index", { title: "About" });
};

const redirect = (request, response) => {
  response.redirect("/about");
};

module.exports = { index, redirect };
