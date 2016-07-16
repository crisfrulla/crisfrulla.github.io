// 1. Write a function, areaOfCircle, that takes a radius parameter and calculates the area of a circle
// Hint: use Math.PI and Math.pow
// Hint 2: ensure you are using the return statement
// A = π * (r^2)

function areaOfCircle (radius) {
	return Math.PI * Math.pow(radius, 2);
}



// 2. Write a function, volumeOfCylinder, that takes two parameters:
// - circleArea
// - height
// that calculates the volume of a cylinder
// V = π * (r^2) * h
function volumeOfCylinder (circleArea, height) {
	return circleArea * height;
}


// 3. Write a function, volumeOfCone, that takes two parameters:
// - circleArea
// - height
// that calculates the volume of a cone
// V = π * (r^2) * (h/3)
function volumeOfCone (circleArea, height) {
	return circleArea * (height/3);
}

// Only chance radius and height after you confirm the expected values below
var radius = 5;
var height = 8;
var circle = areaOfCircle(radius);
var cylinder = volumeOfCylinder(circle, height);
var cone = volumeOfCone(circle, height);

console.log(circle);
console.log(cylinder);
console.log(cone);

// Expect:
// 78.53981633974483
// 628.3185307179587
// 209.43951023931956
