# YelpCamp

* Add Landing page
* Add campgrounds page that lists al the campgrounds

Each Campground has:
    * Name
    * Image

Array of campground objects:
[
    {name: "Salmon Creek", image: "<URL>"},
    {name: "Sardine Bay", image: "<URL>"},
    {name: "Cod Wharf", image: "<URL>"},
    {name: "Tuna Falls", image: "<URL>"}
]

# Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

## RESTful Routes
=================================================================
name    url         verb    description
=================================================================
INDEX   /dogs       GET     Display a list of all dog
NEW     /dogs/new   GET     Displays a form to make a new dog
CREATE  /dogs       POST    Add a new dogo to DB
SHOW    /dogs/:id   GET     Shows info about one dog
=================================================================