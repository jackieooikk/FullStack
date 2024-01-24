import express from "express"
import ejs from "ejs"


var app = express();
var port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day == 0 || day == 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
    }

    res.render("index.ejs", {
        daytype: type, 
        advice: adv,
    });
}); 

app.listen(port, () => {
    console.log("Server hosted on " + port);
});

