How the whole thing works:

You get a "movie ID" of a  certain movie from OMDB and you can look up
a lot of information about that particular movie.

Request here:
    http://omdbapi.com/?s=<search>
    http://omdbapi.com/?i=<ID>
    http://omdbapi.com/?t=<title>


You can search by:   (* required)

- ID or Title:
    parameter: i --------- a valid IMDB ID
    parameter: t --------- Movie title to search for.
    parameter: type ------ type of movies to search for
    parameter: [check the rest on omdbapi.com]
    parameter: tomatoes -- Gives a rotten tomatoes score.

- OR Search:
  * parameter: s ---------- Movie title to search for.
    parameter: type: ------ Type of results to return.
    [Check the rest on omdbapi.com].
