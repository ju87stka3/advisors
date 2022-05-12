require("dotenv").config()
const express=require("express")
const cors=require("cors")
const router=require("./routes/index")
const PORT=process.env.PORT||5000
const app=express()
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(PORT,()=>console.log(`Server is started on port ${PORT}`))
