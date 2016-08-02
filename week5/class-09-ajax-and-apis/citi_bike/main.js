/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

// window.onload = function () {
// 	document.getElementById('getDataButton').onclick = makeRequest
//
// 	function makeRequest() {
// 		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
//
// 		var httpRequest = new XMLHttpRequest();
//
// 		httpRequest.onreadystatechange = responseMethod
//
// 		httpRequest.open('GET', url);
//
// 		httpRequest.send();
//
// 		function responseMethod () {
// 			if (httpRequest.readyState === XMLHttpRequest.DONE) {
// 				if (httpRequest.status === 200) {
// 					console.log(JSON.parse(httpRequest.response));
// 				} else {
// 					console.log('Request Error');
// 				}
// 			}
// 		}
// 	}
// };


window.onload = function () {
	var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

	// $.get(url, function (response) {
	// 	console.log(response);
	// })

	$.ajax({
	  url: 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json',
	  type: 'GET',
	  success: function (response) {
	  	console.log(response);
	  },
	  error: function (response) {
	    console.log(response);
	  }
	})

};
