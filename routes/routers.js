const express = require("express");
const router = express.Router();

router.get("/favorites", (req, res) => {
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

router.post("/addFavorite", (req, res) => {
  res.redirect("/favorites")
}); 

module.exports = router;
