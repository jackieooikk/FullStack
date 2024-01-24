import express from "express"
import ejs from "ejs"


var app = express();
var port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", {
        daytype: "a weekday", 
        advice: "it's time to work hard"
    });
}); 

app.listen(port, () => {
    console.log("Server hosted on " + port);
});

