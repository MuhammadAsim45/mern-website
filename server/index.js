const express = require("express");
require("./dbCon/conn");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const useRouter = require("./routes/route");
app.use(cors());
app.use(bodyParser.json());
app.use(useRouter);
app.listen("8000", () => {
  console.log("listening to the port 8000");
});
