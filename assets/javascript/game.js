// variables to start our code
var wins = 0;
var losses = 0;
var totalScore = 0;
var computerPick = 0;

var crystal = {
    diamond: {
        name: "Diamond",
        value: 0
    },
    emerald: {
        name: "Emerald",
        value: 0
    },
    ruby: {
        name: "Ruby",
        value: 0
    },
    topaz: {
        name: "Topaz",
        value: 0
    }
};

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var start = function() {
    computerPick = getRandom(1, 150);
    totalScore = 0;
    // this is the computers number picked the user must add up to


    crystal.ruby.value = getRandom(1, 12);
    crystal.emerald.value = getRandom(1, 12);
    crystal.topaz.value = getRandom(1, 12);
    crystal.diamond.value = getRandom(1, 12);

    $("#comp-score-2").html(computerPick);
    $("#scoreboard").html(totalScore);


    console.log(computerPick);
}

// function restart() {
//     $("#comp-score-2").html(computerPick);
//     computerPick = Math.floor(Math.random() * 150) + 1;
//     ruby = Math.floor(Math.random() * 12) + 1;
//     emerald = Math.floor(Math.random() * 12) + 1;
//     topaz = Math.floor(Math.random() * 12) + 1;
//     diamond = Math.floor(Math.random() * 12) + 1;

//     totalScore = 0;
//     gameOver = false;
// }



function checkScore() {

    if (totalScore > computerPick) {
        losses++;
        $("#losses").html(losses);
        console.log(computerPick);
        alert("Wow you're great at math...not")
        start();

    } else if (totalScore === computerPick) {
        alert("Nerd Alert!!!");
        wins++;
        $("#wins").html(wins);
        start();

    }

}

var addValues = function(clickedCrystal) {

    // Change currentScore
    totalScore += clickedCrystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#your-score").html(totalScore);

    // Call the checkWin Function
    checkScore();

    // Testing Console
    console.log("Your Score: " + totalScore);
};

// Main process for the game

start();

$("#diamond").click(function() {
    addValues(crystal.diamond);
});

$("#ruby").click(function() {
    addValues(crystal.ruby);
});

$("#emerald").click(function() {
    addValues(crystal.emerald);
});

$("#topaz").click(function() {
    addValues(crystal.topaz);
});
