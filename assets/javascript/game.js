
// Global Variables 
var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
var wins = 0;
var loses = 0;
var userTallyScore;
var crystalvalue;


  
  
  // Function "initializevariables" is defined
   function initializevariables() {

   	//Generates random number for each crystal and target crystal
	crystalvalue =Math.floor(Math.random() * 120) + 19;

  gemOneValue = Math.floor(Math.random() * 12 + 1);

	gemTwoValue = Math.floor(Math.random() * 12 + 1);

	gemThreeValue = Math.floor(Math.random() * 12 + 1);

	gemFourValue = Math.floor(Math.random() * 12 + 1);

	//Sets tally score back to zero every time the round starts over
	userTallyScore = 0;

	//In puts target number into the HTML
   	$("#chosennumber").html("Random Number:  " + crystalvalue);
   	$("#totalpoints").html("Total Points:  " + userTallyScore);

  	};

  	//Function "wonorlost" is defined
  	function wonorlost() {
      if(userTallyScore == crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");

        //Calls "initializevariables" function to start a new round
        initializevariables();
      }

      else if(userTallyScore >crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("You lost");

		//Calls "initializevariables" function to start a new round
        initializevariables();
      }
    };
   	
   	//Calls initializevariables function to begin the game
   	initializevariables();
  
  	//On click listener. Each crystal has a value attribute of gem1, gem2, gem3, or crystal 4
    $(".gem").on("click", function() {

		// use this attribute to identify which crystal the user actually clicked
		var pressed = $(this).attr("value");

		//Compare to the current crystal that was clicked to the target crystal
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
        
        // then update the html for the user tally score
  		$("#totalpoints").html("Total Points:  " + userTallyScore);

  		//Calls the "wonorlost" function everytime when a crystal is clicked
  		wonorlost();
	});
  

