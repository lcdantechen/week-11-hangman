
var random = require('./game.js');

var radonNumber; 
var computerChoice;
var wordMeaning;
var answerWord;
var curWord = [];
var guessesLeft = 15;
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
    wordMeaning = random.randomWords[randomNumber].meaning;
   
    answerWord = computerChoice.split('');

	  if (curWord.indexOf("_")>=0) {
       
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
						 var afterString = curWord.toString();
		         console.log(afterString);
		        
		        

				} else {
							console.log('didnt match anything');
							guessesLeft -= 1;
		     			guessesSoFar.push(guess);
		     			console.log("Guesses remaining:" + " " + guessesLeft);
			 	    	console.log('Guess so far are:' + guessesSoFar);
			 	      
		    };

	  	} else if (answerWord == curWord){
	  		   console.log(answerWord);
           console.log(curWord);
     
		    	console.log("You Win!");
		    	console.log("In case you don't know what it means:");
		    	console.log("It means" + " " + wordMeaning);
		    	/*generateRandom();*/

		   } else { 

		  	 for (var i =0;i<answerWord.length;i++) {
				   curWord.push('_');
			   };


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
						 var afterString = curWord.toString();
		         console.log(afterString);
		        
		        

				} else {
							console.log('didnt match anything');
							guessesLeft -= 1;
		     			guessesSoFar.push(guess);
		     			console.log("Guesses remaining:" + " " + guessesLeft);
			 	    	console.log('Guess so far are:' + guessesSoFar);
			 	      
		    };

  
     };

       if (guessesLeft == 0){

		    	 console.log(answerWord);
           console.log(curWord);

		    	 console.log("You loss!")
		    	 console.log("In case you don't know what it means:");
		    	 console.log("It means" + " " + wordMeaning); 
		  	   generateRandom(); 
		  	  	  
		    };

		    
	};

};

module.exports = Check;