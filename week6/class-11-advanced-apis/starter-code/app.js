$(function() {
  // DOM is now ready
  _500px.init({
     sdk_key: '106866519818a79f04cdfcd7fc8a5d2427776358'
  });

  $('#login').click(function(){
    _500px.login();
    // $.get("https://500px.com", function(){
    //     console.log("Got it");
    // });
  });

});
