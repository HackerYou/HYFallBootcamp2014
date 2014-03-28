  <?php
    // Sign up for an application AND a client here:  http://instagram.com/developer/

    // set the redirect URL to be localhost/path/to/dump.php

    // they will give you the client ID and client SECRET
    $clientId = "CLIENT_ID"; 
    $clientSecret = "CLIENT_SECRET";

    // Then follow these steps for generating a code and access token: http://dmolsen.com/2013/04/05/generating-access-tokens-for-instagram/
    $code = "YOUR-CODE";
    $accessToken = "YOUR-TOKEN";


    // Setup a curl function to fetch the data
    function fetchData($url){
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_TIMEOUT, 20);
         $result = curl_exec($ch);
         curl_close($ch); 
         return $result;
    }

    // Pull and parse any end points: http://instagram.com/developer/endpoints/


    // Here I'm grabbing 4 pages of  #hackeryou

    $result1 = fetchData("https://api.instagram.com/v1/tags/hackeryou/media/recent?access_token={$accessToken}");
    $result1 = json_decode($result1);
    $result2 = fetchData($result1->pagination->next_url);
    $result2 = json_decode($result2);
    $result3 = fetchData($result2->pagination->next_url);
    $result3 = json_decode($result3);
    $result4 = fetchData($result3->pagination->next_url);
    $result4 = json_decode($result4);


    // Merge all the data togehter
    $allResults = array_merge($result1->data, $result2->data);
    $allResults = array_merge($allResults, $result3->data);
    $allResults = array_merge($allResults, $result4->data);

  ?>

<!-- Now we have the choice of looping through each one or returning JSON. Here we loop over them on the serverside -->

<style>
  img {
    width:25%;
    float:left;
  }
</style>

<?php foreach ($allResults as $post): ?>
  <img src="<?php echo $post->images->standard_resolution->url; ?>">
<?php endforeach ?>