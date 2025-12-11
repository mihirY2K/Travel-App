const express = require("express");
const app = express();
const path = require("path");
const portNumber = 7003;
const bodyParser = require("body-parser");


// Do i need this ? app.set("view engine", "ejs");
// Do I need this ? app.set("views", path.resolve(__dirname, "templates"));

const PORT = process.env.PORT || 7003; // use Render's port in production

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
   res.send(`Kyle the bacon man, Mihir the dragon slayer, neil the pizza guy`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});