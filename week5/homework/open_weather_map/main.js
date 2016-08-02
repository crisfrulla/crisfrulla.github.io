/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/


$(document).ready(function () {
  var apiKey = '&appid=108d201c02ae127944ac45f8ddae6479';
  var newYourkUrl = '=NewYork';
  var londonUrl = '=London';
  var romeUrl = '=Rome';
  var sydneyUrl = '=Sydney';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q' +  newYourkUrl + apiKey;



  $('#weatherLocation').click(function(e) {
       e.preventDefault();
       $('#weatherResult').fadeIn();
       var city = $('#location').val();
       $('#location').val("");
       $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + apiKey, function(response) {
       $('#weatherResult').removeClass('hide');
       var tempRaw = JSON.stringify(response.main.temp);
       console.log(tempRaw);
       var tempCelsius = Math.ceil(tempRaw - 273.15) + '&#176;';
       var tempFahrenheit = Math.ceil((tempRaw * 9 / 5) - 459.67) + '&#176;';
       var humidityRaw = JSON.stringify(response.main.humidity);
       var humidity = humidityRaw + '%';

       var windRaw = JSON.stringify(response.wind.speed);
       var wind = Math.ceil(windRaw);

       var currentCity = response.name;

       var weatherDescriptionContent = response.weather[0].description;

       var iconCode = response.weather[0].description;
       //var iconCode = "snow";
       console.log(iconCode);
       console.log(response);
      var rain = ["rain", "shower", "light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle", "light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "ragged shower rain"] ;
      var cloudy = ["clouds", "scattered clouds", "broken clouds", "few clouds", "overcast clouds"];
      var thunderstorm = ["thunderstorm", "thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"];
      var snow = ["snow"];
      var fog = ["mist"];
      var clearSky = ["clear sky", "clear"];

      var iconWeatherFunc = function () {
        if (rain.indexOf(iconCode) == -1 && cloudy.indexOf(iconCode) == -1 && thunderstorm.indexOf(iconCode) == -1 && snow.indexOf(iconCode) == -1 && fog.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-day-sunny"></i>');
        } else if (clearSky.indexOf(iconCode) == -1 && cloudy.indexOf(iconCode) == -1 && thunderstorm.indexOf(iconCode) == -1 && snow.indexOf(iconCode) == -1 && fog.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-rain"></i>');
        } else if (clearSky.indexOf(iconCode) == -1 && rain.indexOf(iconCode) == -1 && thunderstorm.indexOf(iconCode) == -1 && snow.indexOf(iconCode) == -1 && fog.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-cloudy"></i>');
        } else if (clearSky.indexOf(iconCode) == -1 && rain.indexOf(iconCode) == -1 && cloudy.indexOf(iconCode) == -1 && snow.indexOf(iconCode) == -1 && fog.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-thunderstorm"></i>');
        } else if (clearSky.indexOf(iconCode) == -1 && rain.indexOf(iconCode) == -1 && cloudy.indexOf(iconCode) == -1 && thunderstorm.indexOf(iconCode) == -1 && fog.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-snow"></i>');
        } else if (clearSky.indexOf(iconCode) == -1 && rain.indexOf(iconCode) == -1 && cloudy.indexOf(iconCode) == -1 && thunderstorm.indexOf(iconCode) == -1 && snow.indexOf(iconCode) == -1) {
            $('#weatherIcon').html('<i class="wi wi-fog"></i>');
        } else {
          $('#weatherIcon').html('<i class="wi wi-na"></i>');
        }
      };
      iconWeatherFunc();
 console.log(iconWeatherFunc);
       $("#weatherDescription").html("<span class='text-capitalize'>" + weatherDescriptionContent + "</span>");

       $('#wind').html(wind + ' <i class="wi wi-wind-direction"></i>');
       $('#humidity').html(humidity);

       $('#currentCity').html(response.name);

       $('#tempFahrenheit').html(tempFahrenheit);
       $('#tempCelsius').html(tempCelsius);
     });
   });

   $('#tempValue').click(function() {
    if ($('#tempFahrenheit').hasClass('hide')) {
      $('#tempFahrenheit').removeClass('hide');
      $('#tempCelsius').addClass('hide');
      $('#tempValue').html('&#8451;')
    } else {
      $('#tempCelsius').removeClass('hide');
      $('#tempFahrenheit').addClass('hide');
      $('#tempValue').html('&#8457;')
    }
   });
});
