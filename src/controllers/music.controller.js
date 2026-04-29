const musicModel=require("../models/music.model");
const{uploadFile}=require("../services/storage.service")
const jwt=require("jsonwebtoken");
const albumModel= require("../models/album.model")
const mongoose = require("mongoose")



async function createMusic(req,res){
 
    
    const {title}=req.body;
    const {file}=req.file;   

    const result= await uploadFile(req.file.buffer.toString('base64'))

    const music=await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id
    })
    res.status(201).json({
        message:"Music created successfully",
        musix:{
            id: music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })

    } 


async function createAlbum(req,res){
    
       

            const{title , musics}=req.body
 const musicObjectIds = musics.map(id =>
    new mongoose.Types.ObjectId(id)
  );
            const album = await albumModel.create({
                title,
                artist:req.user.id,
                musics:musicObjectIds,
            })

            res.status(201).json({
                message:"Album created successfully",
                album:{
                    id:album._id,
                    title: album.title,
                    artist:album.artist,
                    music:album.musics,
                }
            })

        } 
    
        
async function getAllMusic(req,res){
    const musics =await musicModel
    .find()
    .limit(10)
    .populate("artist","username")

    res.status(200).json({message:"Music fetched successfully",musics:musics})
}    
async function getAllAlbums(req,res){
    const albums=await albumModel.find().select("title artist").populate("artist","username email").populate("musics")

   return res.status(200).json({message:"Album fetched successfully",albums:albums})
}

async  function getAllAlbumById(req,res){
    const albumId=req.params.albumId;

const album= await albumModel
.findById(albumId)
.populate("artist","username,email")
.populate("musics")

return res.status(200).json({message:"Album fetched Successfully",
    album:album,
})
}

        module.exports={createMusic,createAlbum,getAllMusic,getAllAlbums,getAllAlbumById}
 