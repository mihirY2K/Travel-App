const express = require("express");
const router = express.Router();

const Destination = require("../models/destinations"); 
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

router.get("/favorites", async (req, res) => {
  try {
    const favorites = await Destination.find({});
    let tableHTML = "<table border='1'>";

        tableHTML += "<tr>";
        tableHTML += "<th>#</th>";
        tableHTML += "<th>City Name</th>";
        tableHTML += "<th>Most Recent</th>";
        tableHTML += "</tr>";

        if (favorites.length > 0) {
            favorites.forEach((fav, index) => {
                tableHTML += "<tr>";
                tableHTML += `<td>${index + 1}</td>`;
                tableHTML += `<td>${fav.name}</td>`;
                tableHTML += `<td>${index === favorites.length - 1 ? "index" : "-"}</td>`;
                tableHTML += "</tr>";
            });
        } else {
            tableHTML += "<tr>";
            tableHTML += "<td>No favorites yet</td>";
            tableHTML += "</tr>";
        }

        tableHTML += "</table>";

        res.render("favorites", { appTable: tableHTML });
} catch (e) {
    console.error(e);
}
 
});

router.post("/addFavorite", async (req, res) => {


  try {
    const { cityName } = req.body;
    await Destination.create({
      name: cityName,
   });
   res.redirect("/favorites")
  }catch (e) {
    console.error(e);
}
 
}); 

module.exports = router;
