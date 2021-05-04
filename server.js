let express = require("express");
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  let secret = process.env.SECRET;
  res.send(secret);
});
app.get("/linux", (req, res) => {
  res.send("linux");
});

//adding stuff from local machine
app.get("/local", (req, res) => {
  res.send("this is from the Local Machine");
});

app.listen(process.env.PORT || 3000, console.log("server is running"));
