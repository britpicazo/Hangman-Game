
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
var updatedWord;
var wordAsArr=[];

function initialize() {
	gameStarted = true;
	currentWord = "";
	guessesLeft = 10;
	lettersGuessed = [];
	numWins++;
	correctGuesses = 0;
	wordPlace = Math.floor(Math.random() * 36);
	currentWord = breeds[wordPlace];
	wordAsDashes = makeIntoDashes(currentWord);
	wordAsArr =  makeIntoArray(currentWord);
}

function makeIntoDashes(word){
	var dashes = "";
	for(i = 0; i < word.length - 1; i++){
		dashes += "_ ";
	}
	dashes += "_";
	return dashes;
}

function makeIntoArray(currentWord){
	var arr=[];
	for(i = 0; i < currentWord.length; i++){
		arr.push(currentWord[i]);
	}
	return arr;
}

function playGame(){
	if(correctGuesses < currentWord.length || guessesLeft > 0){
		document.onkeyup = function(event){
			var letter = event.key.toLowerCase();
			if(alphabet.indexOf(letter) > -1){
				if(wordAsArr.indexOf(letter) > -1){
					correctGuesses++;
					displayLetter(wordAsArr.indexOf(letter));
				}
				else{
					guessesLeft--;
					document.getElementById("guessesLeft").innerHTML = guessesLeft;
					lettersGuessed.push[letter];
					document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

				}
			}
		}
	}
	initialize();
}

function displayLetter(indOfLetter){
	var updatedWord = "";
	for(i = 0; i < currentWord.length - 1; i++){
		if(parseInt(indOfLetter) == i && i != currentWord.length -1){
			updatedWord += currentWord[i] + " ";
		}
		else if(parseInt(indOfLetter) == i && i == currentWord.length -1){
			updatedWord += currentWord[i];
		}
		else if(parseInt(indOfLetter) != i && i == currentWord.length -1){
			updatedWord += "_";
		}
		else{
			updatedWord += "_ ";
		}
	}
	document.getElementById("currentWord").innerHTML = updatedWord;
}

document.onkeyup = function(event){
	if(!gameStarted){
		document.getElementById("letsPlay").innerHTML = "Let's Play!!";
		initialize();
		document.getElementById("currentWord").innerHTML = wordAsDashes;
		playGame();

	}
}