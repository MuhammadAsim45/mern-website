const mongoose = require("mongoose");
let uri =
  "mongodb+srv://asim:yOA6EgSERgLLmEbF@merncluster.ru9gp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to the database successfully");
  })
  .catch((e) => {
    console.log(e);
  });
module.exports = mongoose;
