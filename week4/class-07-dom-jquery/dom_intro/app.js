// var myName = "Cris";
// console.log(myName);

// window.onload = function () {
// 	alert("loaded!")
// }
// alert("still loading")

var helloEl = document.getElementById('hello');

helloEl.innerHTML = "JS is so cool!";

var pEl = document.querySelector('p');

var listEls = document.querySelectorAll('li');

document.getElementById('new-thing-button').onclick = function (event){
	console.log("Yo")
	//var input = document.elementById('myInput').value = "cats";
};


console.log(helloEl);
console.log(pEl);
console.log(listEls);
