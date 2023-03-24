const status404 = (request, response) => {
  response.status(404).render("./error/404", { title: "Error" });
};

module.exports = { status404 };
