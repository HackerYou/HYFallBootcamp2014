var handler = StripeCheckout.configure({
  key: 'YOUR_API_KEY', // Something that starts with pk_
  image: 'wes.jpg',
  token: function(token, args) {
    console.log(token,args);
    // Use the token to create the charge with a server-side script.
    // You can access the token ID with `token.id`
    $.ajax('./checkout.php',{
      type : 'POST',
      dataType : 'json',
      data : {
        stripeToken : token.id,
        email : token.email
      },
      success : function(result) {
        console.log(result);
        // check if it worked
        if(result.paid) {
          alert("Success!");
        }
        // otherwise 
        else {
          alert(result.jsonBody.error.message);
        }
      }
    });
  }
});

$(function() {

  $('.buyNow').on('click',function(e) {
    handler.open({
      name: 'Sublime Text Book',
      description: 'Awesomesauce',
      amount: 2000,
      email : 'wesbos@gmail.com'
    });
    e.preventDefault();
  });

});