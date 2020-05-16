const express = require("express");
const mongoose = require("mongoose");
const gooogleRouter = require("./controllers/google");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// initialize mongodb connection
const mongoUri = process.env.MONGO_URI || "mongodb://localhost/googlebooks";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", gooogleRouter);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
