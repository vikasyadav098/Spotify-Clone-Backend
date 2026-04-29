const express=require("express")
const cookie=require("cookie-parser")
const cookieParser = require("cookie-parser")
const authRoutes=require("./routes/auth.routes")    
const musicRouter =require("./routes/music.routes")
const cors =require("cors")

const app= express()
app.use(cors({
   origin: "https://spotify-mern-stack-project.vercel.app/login",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/music',musicRouter)

module.exports=app 