var inquirer = require('inquirer');
var Letter = require('./letter.js');

var userInput = function() {


	  inquirer.prompt([{
		    name: "letter",
		    message: "What letter is on your mind?"
		}]).then(function(answers) {

        /*console.log("The letter you guessed is" + " " + answers.letter);*/

		    var userGuessLetter = new Letter(answers.letter);
		    
		    userGuessLetter.printInfo();

		    userInput();
		})

  

};

userInput();

module.exports = userInput;

