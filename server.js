let express=require("express")
let app=express();
require("dotenv").config();


app.get("/",(req,res)=>{
let secret=process.env.SECRET;
res.send(secret);
})
app.get("/linux",(req,res)=>{
res.send("linux");


})

app.listen(process.env.PORT,console.log("server is running"));
