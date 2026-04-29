const express=require("express")
const musicController = require("../controllers/music.controller")
const authMiddileware=require("../middlewares/auth.middleware")
const multer=require("multer")


const router =express.Router();

const upload= multer({
    storage:multer.memoryStorage()
})

router.post("/upload",authMiddileware.authArtist,upload.single("music"),musicController.createMusic)

router.post("/album",authMiddileware.authArtist,musicController.createAlbum)


router.get("/",authMiddileware.authUser,musicController.getAllMusic)

router.get("/albums",authMiddileware.authUser,musicController.getAllAlbums)

router.get("/albums/:albumId",authMiddileware.authUser,musicController.getAllAlbumById)


module.exports=router; 