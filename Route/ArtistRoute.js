const express = require("express");
const artist = express.Router();

//Insert model
const Artist = require("../Model/ArtistModel");

//artist controler
const ArtistControler = require("../Controlers/ArtistControler");

router.get("/",ArtistControler.getAllArtist);
router.post("/", ArtistControler.addArtists);
router.get("/:id", ArtistControler.getById);
router.put("/:id", ArtistControler.updateArtists);
router.delete("/:id", ArtistControler.deleteArtists);

//export
module.exports = artist;
