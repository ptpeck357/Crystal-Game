// Global Variables for random number
var wins = 0;
var loses = 0;
var counter = 0;

var crystalvalue = Math.floor(Math.random() * 50) + 19;
var randomnumber1 = Math.floor(Math.random() * 12) + 1;
var randomnumber2 = Math.floor(Math.random() * 12) + 1;
var randomnumber3 = Math.floor(Math.random() * 12) + 1;
var randomnumber4 = Math.floor(Math.random() * 12) + 1;

  //In puts target number into the HTML
  $("#chosennumber").text("Random Number:  " + crystalvalue);
  $("#totalpoints").text("Total Points:  " + counter);
  
  // Function startgame is defined
    function startgame() {
      
      counter = 0;
    	$(".blue").on("click", function(){
          counter += randomnumber1;
    		$("#totalpoints").text("Total Points:  " + counter);

        // Check Numbers
      if(counter === crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");
        counter = 0;
        
      }

      else if(counter >=crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("loose");
        counter = 0;
      }

    	});





      $(".red").on("click", function(){
          counter += randomnumber2;
        $("#totalpoints").text("Total Points:  " + counter);

        // Check Numbers
      if(counter === crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");
        counter = 0;
      }

      else if(counter >=crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("loose");
        counter = 0;
      }

      });





      $(".purple").on("click", function(){
        counter += randomnumber3;
        $("#totalpoints").text("Total Points:  " + counter);

        // Check Numbers
      if(counter === crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");
        counter = 0;
      }

      else if(counter >=crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("loose");
        counter = 0;
        
      }

      });



      

      $(".yellow").on("click", function(){
         counter += randomnumber4;
        $("#totalpoints").text("Total Points:  " + counter);

        // Check Numbers
      if(counter === crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");
        counter = 0;
      }

      else if(counter >=crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("loose");
        counter = 0;
      }

      });
    }
  
// Calls startgame function and excutes code
startgame()

