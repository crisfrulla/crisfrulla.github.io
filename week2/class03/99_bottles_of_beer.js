// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

for (var i= 100; i >= 1; i--) {
	if (i === 1) {
    console.log(i + " bottle of beer - Oh No, too late!!");
  }else if  (i === 100) {
    console.log(i + " bottles of beer - \"The Place We Call Paradise\" ");
  } else if (i <= 10 && i >= 6) {
  	console.log(i + " bottles of beer - Better Run to the bottle shop");
  } else if (i <= 6 && i >= 2) {
  	console.log(i + " bottles of beer - Go go go go");
  } else {
    console.log(i + " bottles of beer");
  }
}
