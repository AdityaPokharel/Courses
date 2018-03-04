var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express();
    
    
// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// title
// image
// body
// created


// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type:Date, default:Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", (req, res) => {
    res.redirect("/blogs");
})

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(err);
        }
        else{
            res.render("index.ejs", {blogs, blogs});
        }
    })
});

// APP CONFIG
app.listen(process.env.PORT, process.env.IP, () => console.log("SERVER IS RUNNING!"))