
var random = require('./game.js');

var radonNumber; 
var computerChoice;
var answerWord;
var curWord = [];
var guessesLeft = 0;
var guessesSoFar = [];






var Check = function(guess) {
	/*this.wins = wins;
	this.losses = losses;
	this.guessesLeft = guessesLeft;*/
	this.answerWord = [];
	this.curWord = [];
	this.generateRandom = function() {
		
    randomNumber =  Math.floor(Math.random() * random.randomWords.length);
    computerChoice = random.randomWords[randomNumber].word;
    answerWord = computerChoice.split('');
    guessesLeft = answerWord.length + 5;
   /* console.log(answerWord);*/
  	 for (var i =0;i<answerWord.length;i++) {
		   curWord.push('_');
	   };
	 /* console.log(curWord);*/

	  if (curWord.indexOf(guess)>=0) {
	  	console.log('You guessed this letter already!')
	  } else if (answerWord.indexOf(guess)>=0) {

			   for (var i =0;i<answerWord.length;i++) {
						if (answerWord[i] == guess) {
							curWord[i] = guess;  
					  };
				 };
				 guessesLeft -= 1;
				 console.log("You guessed right!")
				 console.log("Guesses remaining:" + " " + guessesLeft);
         console.log(curWord);
        
        

		} else {
					console.log('didnt match anything');
     			guessesSoFar.push(guess);
     			console.log("Guesses remaining:" + " " + guessesLeft);
	 	    	console.log('Guess so far are:' + guessesSoFar);
	 	      
    };

    if (guessesLeft == 0){
    	 console.log("You loss!")
  	   console.log('Guess so far are:' + guessesSoFar);  
  	  /*startGame();*/
  	  
    }



	};

};

module.exports = Check;