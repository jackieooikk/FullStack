import express from "express"
import bodyParser from "body-parser"
import fs from "fs"

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {texts: texts});
    for (let i = 0; i < texts.length; i++) {
        console.log(texts[i]);
    }
});

app.post("/submit", (req, res) => { 
    texts.push(req.body.text);
    for (let i = 0; i < texts.length; i++) {
        console.log(texts[i]);
    }
    res.render("index.ejs", {texts: texts});
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});

let texts = [];
