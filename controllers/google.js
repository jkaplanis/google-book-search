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
      const validBookData = createBooksFromGoogleData(response.data);
      return res.json(validBookData);
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

function createBooksFromGoogleData(googleData) {
  return googleData.items
    .map(item => {
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
      return { title, authors, description, image, link, googleId };
    })
    .filter(item => validateBook(item));
}

function validateBook({ title, authors, description, image, link, googleId }) {
  return (
    title && Array.isArray(authors) && description && image && link && googleId
  );
}

module.exports = router;
