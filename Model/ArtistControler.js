const Artist = require("../Model/UserControlers");

const getAllArtists = async(req, res , next) =>{

    let Artists;

   //All users
    try{
        artists = await Artist.find();
    }catch(err){
        console.log(err);
    }

    if(!artists){
        return res.status(404).json({Message:"Not found"});
    }
    
    //dispplay
    return res.status(200).json({artists});



};



exports.getAllArtists = this.getAllArtists;
