

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
						"p","q","r","s","t","u","v","w","x","y","z"];

var wins= 0;

var losses= 0;

var guessesLeft= 9;

var random;

var guessesSofar= [];


function computerGuess(){ 
	random = alphabet[Math.floor(Math.random() * alphabet.length)];
	
	console.log(random);
}

function startOver(){
	guessesLeft = 9;
	computerGuess();
	guessesSofar = [];

}



	computerGuess();

document.onkeyup = function(event) {
	var yourGuess = event.key;
	guessesSofar.push(" " + yourGuess);

	if (yourGuess === random) {
		wins++;
		alert("NICE GUESS!!");
		startOver();
	}

	else{
		guessesLeft--;
	}

	if (guessesLeft===0) {
		losses++;
		alert("HAHA LOSER! ");
		startOver();

	}





document.getElementById("wins").innerHTML = "wins:" + wins;

document.getElementById("losses").innerHTML = "losses:" + losses;

document.getElementById("guessesLeft").innerHTML = "guesses left:" + guessesLeft;

document.getElementById("guessesSofar").innerHTML = "guesses so far:" + guessesSofar;

}


