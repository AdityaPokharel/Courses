let express = require("express");
let app = express();
let bodyParser  = require("body-parser");
var campgrounds = [
    {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
    {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
    {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
    {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
    {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
    {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
    {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
    {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
    {name: "Rockedy Cliff", image: "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,g_center,h_360,q_50,w_480/v1/clients/asheville/RobTravis_NEW_HookerRED_MG_4125-Edit_65769f7c-dfcc-43a6-973e-f3e6b52f57da.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    // res.send("This will be the loading page soon.");
    res.render("landing.ejs");
});

app.get("/campgrounds", (req, res) => {

    res.render("campgrounds.ejs", {campgrounds: campgrounds});  // {name you want to give it: the variable you want to pass}
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/campgrounds", (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    // get data from form and add to campgrounds array.
    // Redirect back to campgrounds page.

});

app.listen(port=3000, () => console.log("YelpCamp has started!"));
