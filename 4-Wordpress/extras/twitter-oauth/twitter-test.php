<?php
session_start();
// get the twitter oauth library
require_once('twitteroauth/twitteroauth.php');
// get the config data
require_once('config.php');

$connection = new TwitterOAuth($API_KEY, $API_SECRET, $oauth_token, $oauth_token_secret);

// These are a few examples of endpoints:
// all available at https://dev.twitter.com/docs/api/1.1

// Get your timeline of latest tweets
$timeline = $connection->get("statuses/home_timeline");

// Get your mentions
$mentions = $connection->get("statuses/mentions_timeline");

// get heathers tweets, use an array to pass params
$heatherstweets = $connection->get("statuses/user_timeline",array(
  "screen_name" => "heatherpayne"
));

// search for tweets with the hackeryou hashtag
$hashtag = $connection->get("search/tweets",array(
  "q" => "#hackeryou"
));

// search for tweets within 200 meters of the hackeryou offices
$nearby = $connection->get("search/tweets",array(
  "geocode" => "43.648209,-79.397865,0.2km"
));

// search for pictures of lunch 
// within 800 meters of the HackerYou office
$lunch = $connection->get("search/tweets",array(
  "geocode" => "43.648209,-79.397865,0.8km",
  "q" => "lunch AND pic.twitter.com"
));


// Output the tweet and image

// foreach ($lunch->statuses as $tweet) {
//   echo "<div clas='tweet'>";
//   $imageSrc = $tweet->entities->media[0]->media_url;
//   echo "<h3>".$tweet->text."</h3>";
//   echo "<img src='".$imageSrc."'>";
//   echo "</div>";
// }