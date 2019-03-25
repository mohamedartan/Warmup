// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.




function makeGame(upperbound) {
 var instance = { };
   instance.upper = upperbound;
   instance.randInt = randIn;
   instance.counter = 0;
   instance.rand = 0;
   instance.guessMyNumber = guessMyNumber;
   instance.giveUp = giveUp;

   return instance;
}


var randInt = function(n) {
    n = this.upper; 
    this.rand = Math.floor(Math.random() * (n + 1));
    return this.rand;
}

var guessMyNumber = function(n){
      this.counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    };

var giveUp = function(){
      return this.rand;
    };

var numOfGuesses = function(){
      return this.counter;
    }        

