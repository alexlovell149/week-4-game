

// variables to start our code
var wins = 0;
var losses = 0;
var totalScore = 0;
var gameOver = false;
var computerPick = 0;



$(document).ready(function() {
		computerPick = Math.floor(Math.random() * 150) +1;

// this is the computers number picked the user must add up to

$("#comp-score-2").html(computerPick);


var ruby = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;
var topaz = Math.floor(Math.random() * 12) + 1;
var diamond = Math.floor(Math.random() * 12) + 1;

function restart() {
	$("#comp-score-2").html(computerPick);
		computerPick = Math.floor(Math.random() *150) +1;
		ruby = Math.floor(Math.random() * 12) + 1;
		emerald = Math.floor(Math.random() * 12) + 1;
		topaz = Math.floor(Math.random() * 12) + 1;
		diamond = Math.floor(Math.random() * 12) + 1;

		totalScore = 0;
		gameOver = false;
	}

$("#ruby").on("click", function() {
	totalScore = totalScore + ruby;
	$("#scoreboard").html(totalScore);
	checkScore();
	console.log(ruby);
});

$("#emerald").on("click", function() {
	totalScore = totalScore + emerald;
	$("#scoreboard").html(totalScore);
	checkScore();
	console.log(emerald);
});

$("#topaz").on("click", function() {
	totalScore = totalScore + topaz;
	$("#scoreboard").html(totalScore);
	checkScore();
	console.log(topaz);
});

$("#diamond").on("click", function() {
	totalScore = totalScore + diamond;
	$("#scoreboard").html(totalScore);
	checkScore();
	console.log(diamond);
});

function checkScore() {

if  (totalScore > computerPick) {
		losses++;
		$("#losses").html(losses);
		console.log(computerPick);
		restart();
		alert("Wow you're great at math...")
		
	}

if (totalScore == computerPick) {
	wins++;
	gameOver = true;
	$("#wins").html(wins);
	restart();
	alert("Nerd Alert!!!")
	
}




}

});




























