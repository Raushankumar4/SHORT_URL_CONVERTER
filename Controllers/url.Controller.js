import shortid from "shortid";
import { Url } from "../Models/url.Schema.js";

export const urlShort = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:3008/${shortCode}`;

  // save to db
  const newUrl = new Url({ shortCode, longUrl });
  await newUrl.save();
  res.render("server.ejs", { shortUrl });
};

export const getOrginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;
  const url = await Url.findOne({ shortCode });
  if (url) {
    res.redirect(url.longUrl);
  } else {
    res.status(404).send("Url not found");
  }
};
