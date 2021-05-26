const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/addressbook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((result) => console.log("Connected succesfully"))
  .catch((err) => console.log("Failed to connect"));
