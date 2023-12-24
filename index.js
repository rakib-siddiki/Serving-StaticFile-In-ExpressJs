import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.listen(port, console.log("this port is runnnig on" + port));

app.get('/',(req,res)=>{
    res.send(path.join(process.cwd(),'./public/index.html'))
})
