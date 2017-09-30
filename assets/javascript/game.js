// Global Variables for random number
 var targetNumber = Math.floor(Math.random() * 50) + 30;

 var randomnumber1 = Math.floor(Math.random() * 15) + 1;

 var randomnumber2 = Math.floor(Math.random() * 15) + 5;

 var randomnumber3 = Math.floor(Math.random() * 15) + 10;

 var randomnumber4 = Math.floor(Math.random() * 15) + 8;

var counter = 0;
var wins = 0;
var loses = 0;


 //In puts target number into the HTML

  $("#chosennumber").text("Random Number:  " + targetNumber);

  $("#totalpoints").text("Total Points:");

  // Function startgame is defined
  function startgame() {
  	

  	$(".blue").on("click", function(){
  		console.log(randomnumber1);
  		counter += randomnumber1;
  		$("#totalpoints").text("Total Points:  " + counter);
  	})

  	$(".purple").on("click", function(){
  		console.log(randomnumber2);
  		counter += randomnumber2;
  		$("#totalpoints").text("Total Points:  " + counter);
  	})

  	$(".red").on("click", function(){
  		console.log(randomnumber3);
  		counter += randomnumber3;
  		$("#totalpoints").text("Total Points:  " + counter);
  	})

  	$(".yellow").on("click", function(){
  		console.log(randomnumber4);
  		counter += randomnumber4;
  		$("#totalpoints").text("Total Points:  " + counter);
  	})
  
	checkcount();
  };

  function checkcount(){
  // Check Numbers
	  if (counter === targetNumber) {
	  	console.log("You Win");
	  	wins++;
	  	$("#wins").text("Wins:  " + wins);
	  	}

	  else if(counter >= targetNumber){
	  	console.log("you loose");
	  	loses++;
	  	$("#loses").text("Loses:  " + loses);
	  }
}

  
// Calls startgame function and excutes code
startgame();

    
  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //   counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //   alert("New score: " + counter);

  //   if (counter === targetNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= targetNumber) {
  //     alert("You lose!!");
  //   }

  // });
