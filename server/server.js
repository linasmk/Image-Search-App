const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const Unsplash = require("unsplash-js").default;
require("dotenv").config();

/* Environment variable that Heroku sets up for the application.
If the application runs on a local machine then the application defaults to port 3000 */
const port = process.env.PORT || 3005;

const UnsplashAccessKey = new Unsplash({
  accessKey: JSON.stringify(process.env.API_KEY),
});

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
