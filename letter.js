

var Check = require('./word.js');

var Letter = function(letterInput){
	this.letterInput = letterInput;

	
	this.printInfo = function(){
		var computerRandom =  new Check(letterInput);
		
		computerRandom.generateRandom();


		if (this.letterInput == ' '){
			console.log("The letter you guessed is" + " " + "_");
		  }else{
		 console.log("The letter you guessed is" + " " + letterInput);
  
		 }
	}
}

module.exports = Letter;