# Reading Documentation

Learning how an API works will take some time. Good APIs (and themoviedb is a good one) have enough information and examples to get you started. The examples should show how to make the request and what the response data looks like. Reading this stuff helps a lot. So it can't be stressed enough, read the documentation carefully.

1. Understand REST & HTTP requests. The vocabulary will make the documentation much easier to understand.
2. Look for information that you really need (covered below)
3. Explore and play around (nothing beats hands-on experience)

## Find the API documention
First of course find the API documentation. Search google or find a link on the web-services webpage.

Doing both leads us to:
http://docs.themoviedb.apiary.io/

## Response format
Next we need to know how the responses of this API are formatted. Do we get back XML or JSON (pray for JSON). In this case they say JSON. 

## CORS or JSONP?
We need to access their data from a different domain name so does the API have CORS enabled or do they work with JSONP? In this case they say they will accept JSONP requests.

## Limitations & Authentication
We need to be aware of how many requests we can make before being throttled. We also need to know whether we need to identify ourselves with an API key. Themoviedb allows us 30 requests every 10 seconds per IP. We need an API key for every request. How do we get an API key? At the top of the page it says:

> To register for an API key, head into your account page on The Movie Database and generate a new key from within the "API" section

Lets go to themoviedb.com and sign up for an account. Sign in, click on "API" and generate an API key. Choose "developer" as the role and fill out the form with your contact information. The request for an API key should be granted immediately. Save the API key somewhere safe.

## Base URI
This is a RESTful API so all requests should look like this:

`<base_url>/<resource>` + method(`GET`, `POST`, `PUT`, `DELETE`)

Several examples on the page provide us with clues as to how to use this API. On the right side, at the very bottom, there is an API url: http://api.themoviedb.org/3. This is the base uri.

The "Required Parameters" section of the documentation says that all requests look like this:
`http://api.themoviedb.org/3/movie/550?api_key=###`. 

The `base_uri` is **http://api.themoviedb.org/3**. `movie/500` is the resource location and it looks like we always append at the end the api_key parameter `?api_key=`.

## Resources
On the side we see that there are sections to the API. `Movies` and `Genres` seem to be relevant sections to check out. So many "resources" that we can play with!

**A few useful resources for movies**:
/3/movie/{id} => get info for single movie by id
/3/movie/upcoming => list of upcoming movies, refreshes daily
/3/movie/now_playing => list of movies in theatres atm
/3/movie/top_rated

**A few useful resources for genre**:
/3/genre/list => gives a list of the genres and their ids
/3/genre/{id}/movies => list of movies for a genre by id

## Play around with API

www.huril.it is a great app for testing out HTTP requests. 

1. Choose method (GET is default, which is what we want)
2. Add a header => name: Accept, value: application/json
3. Add parameters => name: api_key, value: <your key>
4. Type the path and click "Launch Request"

## Getting "Now Playing" movies

Add the now_playing resource as the destination for our request and then click "Launch Request". hurl.it will format the response nicely.

Destination: http://api.themoviedb.org/3/movie/now_playing

The response has a `header` and a `body`. The header gives us a bit of information about the response, including status, content-type, content-length, etc. The body is the JSON data. 

The "now playing" resource (JSON object) is composed of four properties.

1. dates => object
2. page => number
3. results => array of objects
4. total pages => number
5. total results => number

The page, total pages and total results tells us that there are many movies that are "now playing". Twenty movies are retrieved at a time. If we want to get the next twenty then we have to add another parameter to our request (name: page, value: number).

The results array has the 20 movie objects. Each movie object looks like this:

{
"adult": false,
"backdrop_path": "/2GDbEEk8gPnXxvYyYsecnWBiSth.jpg",
"id": 107846,
"original_title": "Escape Plan",
"release_date": "2013-10-18",
"poster_path": "/j3XZwBeWgoAbVmkW3JyOme79I2e.jpg",
"popularity": 237.850324106662,
"title": "Escape Plan",
"vote_average": 6.8,
"vote_count": 25
}

If we wanted to get more information about this movie then the `id` will be handy. We can make another request, this time to /movie/{id}, and pass long this movie's id. 

We want to display these movies on a page and the movie posters would be very handy. The problem is that we just get the image name, not where to retrieve it! 

## Configuration
The configuration section tells us that we can request the configuration object which includes information such as the path to the poster images. 

> Get the system wide configuration information. Some elements of the API require some knowledge of this configuration data. The purpose of this is to try and keep the actual API responses as light as possible. It is recommended you store this data within your application and check for updates every so often.

> To build an image URL, you will need 3 pieces of data. The base_url, size and file_path. 
> Here's an example URL: http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

So what we need to do is make one request at the beginning and store the configuration object somewhere. Then we need to access the `base_url` and `poster_sizes` properties for this object.

