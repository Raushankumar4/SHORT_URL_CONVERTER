import express from "express";
import mongoose from "mongoose";
import { urlShort } from "./Controllers/url.Controller.js";
import { getOrginalUrl } from "./Controllers/url.Controller.js";
const app = express();

const port = 3008;

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://raushankumarguptag:O826tBPQomSGi579@cluster0.ajyps0w.mongodb.net/",
    {
      dbName: "URL_SHORTER_PROJECT",
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// connecting server.ejs for client view
app.get("/", (req, res) => {
  res.render("server.ejs", { shortUrl: null });
});

// Routing
app.post("/shorten", urlShort);
app.post("/:shortCode", getOrginalUrl);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
