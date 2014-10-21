<?php

require_once('./lib/Stripe.php');

Stripe::setApiKey("YOUR_API_KEY"); // starts with sk_

// Grab the  details we sent VIA ajax
$token = $_POST['stripeToken'];
$email = $_POST['email'];

// // Create the charge on Stripe's servers - this will charge the user's card
try {

  $charge = Stripe_Charge::create(array(
    "amount" => 2000, // amount in cents, again
    "currency" => "cad",
    "card" => $token,
    "description" => $email
  ));


} catch (Stripe_CardError $e) {
    // Since it's a decline, Stripe_CardError will be caught
    echo json_encode($e);
} catch (Exception $e) {
    // echo $e->getMessage();
    echo json_encode($e);
} catch (ErrorException $e) {
    // echo $e->getMessage();
    echo json_encode($e);
}

echo $charge;