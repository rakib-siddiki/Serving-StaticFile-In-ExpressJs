import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.listen(port, console.log("im runnig on " + port));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd("./public/index.html")));
});
