function happyStory()
{
	var a1 = prompt("Enter an adjective.");
	var n1 = prompt("Enter a noun.");
	var v1 = prompt("Enter a verb ending in (ing).");
	var a2 = prompt("Enter an adjective.");
	var n2 = prompt("Enter a noun.");
	var v2 = prompt("Enter a verb ending in (ing).");	
	
	document.getElementById("display").innerHTML =  "Once upon a time there was a " + a1 + " " + n1 
	+ " that lived in a little cottage. One day the " + n1 
	+  " decided to go " + v1 
	+ " down to the pond to meet its best friend. The " + n1 
	+ "'s best friend is a " + a2 + " " + n2
	+ " named Happy. Happy is well known for " + v2 
	+ " through every garden in town even though he is so " + a2 + ".";
}
function sadStory()
{	
	var a1 = prompt("Enter an adjective.");
	var n1 = prompt("Enter a noun.");
	var v1 = prompt("Enter a verb not ending in (ing).");
	var a2 = prompt("Enter an adjective.");
	var n2 = prompt("Enter a noun.");
	var v2 = prompt("Enter a verb not ending in (ing).");
	
	document.getElementById("display").innerHTML =  
	"Once upon a time in a dusty old village called Newton, a " + a1 + " " + n1
	+ " prowled the streets searching for " + a2 + " " + n2 + " to " + v1
	+ " back to his hideout. Every time the " + a1 + " " + n1 
	+ " found a " + a2 + " " + n2
	+ ", the " + a1 + " " + n1
	+ " would quietly make it disappear. " 
	+ "Eventually there were no more " + a2 + " " + n2 + "s to " + v2
	+ " through the city. All the townfolk mourned the loss.";
}