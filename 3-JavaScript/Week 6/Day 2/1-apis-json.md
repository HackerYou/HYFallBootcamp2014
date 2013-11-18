# APIs & JSON

Application Programming Interfaces (APIs) are "interfaces", meaning where two entities interact. An API can be thought of as a connection point; it's a program that allows one program to exchange data with another. 

For example, Twitter is a piece of software with lots of data. The Twitter API exists so that another piece of software can connect to Twitter and grab or manipulate some of its data.

## RESTful APIs

In order to interface with an API, the interaction needs to be predictable. If every API had its own rules then we would have to learn each API separately. Thankfully, the APIs that we will be working with will be RESTful Web Services. Representational State Transfer (**REST**) is a way to architect/design web APIs.

1. Represent data as "resources". The URL specifies which resource we want to work with. Example: `<base_url>/books/55`, this says we're looking for a book that can be identified with the id 55.
2. Standard methods (GET, POST, PUT, DELETE) are used to work with resources. Read a resource with GET, create a resource with POST, update a resource with PUT and you guessed it... delete a resource with DELETE.

## API keys and Authentication

APIs are best learned by doing some hands-on work. Go to:
http://www.wunderground.com/weather/api

1. Create a free account
2. Sign in
3. From the API link above click on "Pricing".
4. The default options will work just fine. With a free developer account you can make up to 10 requests per minute and up to 500 requests per day. This will be plenty for our needs. Click on "Purchase Key".
5. Fill out the API form and upon completion you will see your Key ID.

APIs that are unprotected can be abused by spammers. So most if not all APIs require that the user of the API identify themselves in some way. The API key serves as authentication, it tells the API owner (Wunderground in this case) who you are. Incidentally the keys are also a way to limit the amount of requests from each user.

Note: the key is supposed to be like a password, don't share it with others. Put the key somewhere safe, we'll need it soon.

## Making a request

1. Click on the "documentation" link at the top.
2. The documentation shows us an example of an API request:

```
http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/CA/San_Francisco.json
```

Let's break that down:

- `http://api.wunderground.com/api/` is the base url. We're telling the browser to get data from underground's API.
- `61f0a55cb00602dc` is an API key. This should be your key if you're logged in.
- `conditions` is a resource. If you look on the side you'll see a list of resources (forecast, astronomy, hourly, etc.).
- In order to specify a city to get current weather conditions for we add a query. `q/CA/San_Francisco`, CA for California and of course the city San Francisco.
- JSON is a data format. `.json` says that we want data formatted in JSON.
- We can change the url to `.xml` to get the data formatted in XML.

So the URL represents the path to the **resource** that want. That's the first half of making an API request. Next we need to specific a method. Pasting the url in your browser and pressing enter is by default a **GET request**. You should see a bunch of text, this is the resource that we requested.

## JSON

If you look closely at the result you should notice that the data looks suspiciously like JavaScript objects. This is because JSON based on JavaScript’s object literal syntax. JavaScript Object Notation (JSON) is a data format that is extremely popular on the web because it's easy to work with for both humans and machines.

JSON objects are collections of name/value pairs separated by commas. Note that the names must be strings. So `{name: "Homer"}` is invalid JSON, `{"name": "Homer"}` is valid.

> JSON has six kinds of values: objects, arrays, strings, numbers, booleans (true and false), and the special value null.
>
> JavaScript The Good Parts

## Recap

* We have communicated with an API using an authentication key. * We retrieved some data. 

Now what? How do we use this data? This is where AJAX comes in.