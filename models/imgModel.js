const mongoose = require("mongoose");
const MONGO_DB = "mongodb://localhost:27017/Images";

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const imgSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = new mongoose.model("Image", imgSchema);