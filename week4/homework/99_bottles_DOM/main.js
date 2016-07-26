$('h1').html('99 Bottles of Beers');
$('#beerMeBtn').click(function (event) {
	event.preventDefault();
	$('.well').toggleClass('hide');
	for (var i= 100; i >= 1; i--) {
		if (i === 1) {
			$('#beers-pack').append('<li class="beers-count">' + i + ' bottle of beer' + '</li>');
	  } else {
	    $('#beers-pack').append('<li class="beers-count">' + i + ' bottles of beer' + '</li>');
	  }
	}
});
