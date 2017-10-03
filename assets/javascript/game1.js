var gem1, gem2, gem3, gem4, crystalvalue;
var wins = 0;
var loses = 0;
var userTallyScore;
var totalpoints;

function initializevariables(){
	gemonevalue = Math.floor((Math.random() * 12) + 1);
	gemtwovalue = Math.floor((Math.random() * 12) + 1);
	gemthreevalue = Math.floor((Math.random() * 12) + 1);
	gemfourvalue = Math.floor((Math.random() * 12) + 1);
	crystalvalue = Math.floor((Math.random() * 120) + 1);
	userTallyScore = 0;

	$("#chosennumber").html("Random Number:  " + crystalvalue);
   	$("#totalpoints").html("Total Points:  " + userTallyScore);
};

function wonorlost() {

	if(userTallyScore == crystalvalue) {
		wins++;
		alert("You Win")
		$("#wins").html("Wins: " + wins);
		initializevariables();
	}

	if(userTallyScore > crystalvalue) {
		loses++;
		alert("You Lose")
		$("#loses").html("Loses: " + loses);
		initializevariables();
	}
};

initializevariables();

$(".gem").on("click", function() {

	var pressed = $(this).attr("value");

	console.log(pressed);

	if(pressed == "gem1" ){
		userTallyScore += gemonevalue;
	}

	else if(pressed == "gem2"){
		 userTallyScore+= gemtwovalue;
	}

	else if(pressed == "gem3"){
		userTallyScore += gemthreevalue;
	}

	else if(pressed == "gem4"){
		userTallyScore += gemfourvalue;
	}

	$("#totalpoints").html("Total Points:  " + userTallyScore);

	wonorlost();

});