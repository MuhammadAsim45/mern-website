const express = require("express");
const app = express();
const useRouter = require("./routes/route");

app.use(useRouter);
app.listen("8000", () => {
  console.log("listening to the port 8000");
});
