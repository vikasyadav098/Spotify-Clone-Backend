const express=require("express")
const cookie=require("cookie-parser")
const cookieParser = require("cookie-parser")
const authRoutes=require("./routes/auth.routes")    
const musicRouter =require("./routes/music.routes")
const cors =require("cors")

const app= express()
const allowedOrigins = [
   "http://localhost:5173",
  "https://spotify-mern-stack-project-git-main-vikasyadav098s-projects.vercel.app",
  "https://spotify-mern-stack-project-87j41fao2-vikasyadav098s-projects.vercel.app",
]

app.use(cors({
  origin: function(origin, callback) {
    if(!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/music',musicRouter)

module.exports=app 
