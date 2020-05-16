const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/googlebooks", (req, res) => {
  if (!req.query.q) {
    return res.status(400).send("Msust include 'q' param");
  }
  // example query : q=intitle:harry+potter

  axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: { q: req.query }
    })
    .then(response => {
      const validResults = response.data.items.map(item => {
        const googleId = item.id;
        const {
          title,
          authors,
          description,
          imageLinks,
          infoLink
        } = item.volumeInfo;
        const image = imageLinks.thumbnail;
        const link = infoLink;
      });
      return res.json(response.data.items);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.statusText);
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = router;
