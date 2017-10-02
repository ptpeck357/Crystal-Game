$(document).ready(function() {
// Global Variables for random number
var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
var wins = 0;
var loses = 0;
var userTallyScore;
var crystalvalue;


  //In puts target number into the HTML
  
  // Function startgame is defined
   function initializevariables() {

	crystalvalue =Math.floor(Math.random() * 120) + 19;

   	gemOneValue = Math.floor(Math.random() * 12 + 1);

	gemTwoValue = Math.floor(Math.random() * 12 + 1);

	gemThreeValue = Math.floor(Math.random() * 12 + 1);

	gemFourValue = Math.floor(Math.random() * 12 + 1);

	userTallyScore = 0;

   	$("#chosennumber").html("Random Number:  " + crystalvalue);
   	$("#totalpoints").html("Total Points:  " + userTallyScore);

  	};

  	function wonorlost() {
      if(userTallyScore == crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");
        initializevariables();
      }

      else if(userTallyScore >crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("loose");
        initializevariables();
      }
      }
   	
   	initializevariables();
  
    $(".gem").on("click", function() {
		// each gem has a value attribute of gem1, gem2, gem3, or gem 4
		// use this attribute to identify which gem the user actually clicked
		var pressed = $(this).attr("value");

        console.log(pressed);
        if (pressed == "gem1") {
        	userTallyScore += gemOneValue;
        } 
        else if (pressed == "gem2") {
        	userTallyScore += gemTwoValue;
        } 
        else if (pressed == "gem3") {
        	userTallyScore += gemThreeValue;
        } 
        else if (pressed == "gem4") {
        	userTallyScore += gemFourValue;
        } 
        else {
        	console.log("error");
        }
        // then update the html for the user score
  		$("#totalpoints").html("Total Points:  " + userTallyScore);

  		wonorlost();
});
    });









        // Check Numbers
      

    
// Calls startgame function and excutes code


