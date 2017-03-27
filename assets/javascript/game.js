
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var breeds = ["affenpinscher", "akita", "basenji", "beagle", "beauceron",   "bloodhound", "borzoi", "boxer","briard", "brittany", "bulldog", "bullmastiff","chihuahua", "collie", "dachshund", "dalmatian", "greyhound", "havanese", "leonberger", "maltese","mastiff", "newfoundland", "poodle", "pug", "retriever", "rottweiler", "saluki","samoyed", "schipperke", "setter","sloughi", "spaniel","vizsla", "weimaraner", "whippet", "xoloitzcuintil"];

var gameStarted=false;
var currentWord;
var wordAsDashes;
var guessesLeft;
var lettersGuessed;
var numWins;
var getNewWord;
var wordPlace; //place in breeds array
var correctGuesses; 


function initialize() {
	gameStarted = true;
	currentWord = "";
	guessesLeft = 10;
	lettersGuessed = [];
	numWins++;
	wordPlace = Math.floor(Math.random() * 36);
	currentWord = breeds[wordPlace];
	wordAsDashes = makeIntoDashes(currentWord);
}

function makeIntoDashes(word){
	var dashes = "";
	for(i = 0; i < word.length - 1; i++){
		dashes += "_ ";
	}
	dashes += "_";
	return dashes;
}


document.onkeyup = function(event){
	if(!gameStarted){
		document.getElementById("letsPlay").innerHTML = "Let's Play!!";
		initialize();
		console.log(currentWord);
		console.log(wordAsDashes);
		document.getElementById("currentWord").innerHTML = wordAsDashes;
		// playGame();

	}
}