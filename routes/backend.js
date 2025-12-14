const express = require("express");
const app = express();
const path = require("path");
const portNumber = 7003;
const bodyParser = require("body-parser");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});




const PORT = process.env.PORT || 7003; // use Render's port in production

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs"); 
//app.set("views", path.resolve(__dirname, "templates"));
app.set("views", path.join(__dirname, "..", "public", "templates"));


const routes = require("./routers");


app.use("/", routes);

// Serve index.html when someone visits "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


// Serve all frontend files from the public folder
app.use(express.static(path.join(__dirname, "..", "public")));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});