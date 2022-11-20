const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`/static/index.html`));
};

module.exports = {
  getHome: home
};