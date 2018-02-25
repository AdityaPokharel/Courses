let express = require("express");
let app = express();
let request = require("request");


app.get("/", (req, res) => {
    res.render("search.ejs");

});

app.get("/results", (req, res) => {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, (error, response, body) => {
        if(!error & response.statusCode == 200){
            var data = JSON.parse(body);
            // res.send(results["Search"][0]["Title"]);
            res.render("results.ejs", {data: data});
        }
    });
});


app.listen(port=3000, () => console.log("Movie app has started!"));
