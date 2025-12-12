const express = require("express");
const app = express();
const path = require("path");
const portNumber = 7003;
const bodyParser = require("body-parser");





const PORT = process.env.PORT || 7003; // use Render's port in production

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs"); 
//app.set("views", path.resolve(__dirname, "templates"));
app.set("views", path.join(__dirname, "..", "public", "templates"));

// Serve index.html when someone visits "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/favorites", (req, res) => {
  let params = {
    otherFavorites: "This is the spot for the list of user favorites",
    city: "Most recently added favorite city",
    time: "Time for most recently added favorite city",
    temperature: "Temperature for most recently added favorite city",
    feelsLike: "Feels like for most recently added favorite city",
    condition: "Condition for most recently added favorite city",
    cityWeatherImg: "Entire image tag based on condition"
  }
  res.render("favorites",params)
});

app.post("/addFavorite", (req, res) => {
  res.redirect("/favorites")
});

// Serve all frontend files from the public folder
app.use(express.static(path.join(__dirname, "..", "public")));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});