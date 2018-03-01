let express     = require("express");
let app         = express();
let bodyParser  = require("body-parser");
let mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Greenie Creek",
//     image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
//     function(err, campground) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     }
// )

// var campgrounds = [
//     {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
//     {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
//     {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
//     {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
//     {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
//     {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
//     {name: "Splashy Falls", image: "http://mitadmissions.org/images/mit-blogs/P1030843.JPG"},
//     {name: "Greenie Creek", image: "http://www.bassettcreekwmo.org/application/files/1514/5676/5130/PlymouthCreek-BassettCreekWatershed.jpg"},
//     {name: "Rockedy Cliff", image: "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,g_center,h_360,q_50,w_480/v1/clients/asheville/RobTravis_NEW_HookerRED_MG_4125-Edit_65769f7c-dfcc-43a6-973e-f3e6b52f57da.jpg"}
// ];


app.get("/", (req, res) => {
    // res.send("This will be the loading page soon.");
    res.render("landing.ejs");
});

app.get("/campgrounds", (req, res) => {
    
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds.ejs", {campgrounds: allCampgrounds});  // {name you want to give it: the variable you want to pass}
        }
    })


});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/campgrounds", (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    // Create a new campground and save it to the DB.
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            // Redirect back to the campgrounds page.
            res.redirect("/campgrounds")
        }
    });

});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server is running...");
});
