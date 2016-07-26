// for (var i= 100; i >= 1; i--) {
// 	if (i === 1) {
//     console.log(i + " bottle of beer - Oh No, too late!!");
//   }else if  (i === 100) {
//     console.log(i + " bottles of beer - \"The Place We Call Paradise\" ");
//   } else if (i <= 10 && i >= 6) {
//   	console.log(i + " bottles of beer - Better Run to the bottle shop");
//   } else if (i <= 6 && i >= 2) {
//   	console.log(i + " bottles of beer - Go go go go");
//   } else {
//     console.log(i + " bottles of beer");
//   }
// }




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
