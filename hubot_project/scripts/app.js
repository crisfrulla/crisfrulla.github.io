module.exports = function(robot) {

  // robot.hear(/hello|hi|yo/i, function(res) {
  //     return res.send("Hello there!");
  // });


	robot.respond(/What's your favorite season?/i, function(res) {
    return res.send("Ahah! I'm a robot!");
  });


	robot.respond(/what's the weather today in (.*)?/i, function(res) {

		var coldCities = ["Detroit", "Chicago", "Boston", "DC"];
		var hotCities = ["San Diego", "Dallas", "Miami", "Phoenix"];

		var city = res.match[1];

		for (var i = 0; i < hotCities.length; i++) {
    	if (city === hotCities[i]) {
        return res.send("This's hot in " + city + " today");
    	} else if (city === coldCities[i]) {
				return res.reply("This's cold in " + city + " today");
			}
		}
		return res.reply("Mmmh, I'm not sure. Just in case bring a jacket and a pair of flip-flop ;)");
	});

  //
	// robot.hear(/what should I wear in (.*)?/i, function(res) {
  //
	// 	var summer = ["hat", "flip-flop", "shorts", "t-shirt"];
	// 	var winter = ["beany", "boots", " fleece pants", "wool sweaters"];
  //
	// 	var weather = res.match[1];
  //
	// 	if (weather === "summer") {
	// 		return res.send( "if the weather is" + weather + ". You should wear:" + summer);
  //   }
	// 	} else if (weather === "winter") {
  //     return res.reply( "if the weather is" + weather +". You should wear:" + winter);
  //   } else if (weather === "fall") {
  //     return res.reply( "if the weather is" + weather +". You should wear something warm");
  //   } else if (weather === "spring") {
  //     return res.reply( "if the weather is" + weather +". You should wear something light");
  //   }
  //
  //
	// });



	// robot.hear(/add (.*) and (.*)/i, function (res){
	// 	var x = parseInt(res.match[1]);
	//   var y = parseInt(res.match[2]);
	// 	var sum = x + y;
	//
	// 	return res.reply(x + " + " + y + " = " + sum);
	// });


}
