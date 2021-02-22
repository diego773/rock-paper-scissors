// Array of options
var options = ["r", "p", "s"];
var wins = 0;
var losses= 0;
var ties = 0;


//I need the user to make a choice
document.onkeyup = function() {
    var userguess = string.fromCharCode(event.keycode).
    toLowerCase();

    console.log(userguess);
}
// Computer to make a choice
var computerGuess = options[Math.floor(Math.random()*
    options.length)];

console.log(computerGuess);

//Capture those choices

if (userguess=='r' || userguess=='p' || userguess=='s') {
    if ((userguess=='r') && (computerGuess== 's')) {
        wins++;
    }
    if ((userguess=='r') && (computerGuess== 'p')) {
        losses++;
    }
    if ((userguess=='s') && (computerGuess== 'p')) {
        wins++;
    }
    if ((userguess=='s') && (computerGuess== 'r')) {
        losses++;
    }
    if ((userguess=='p') && (computerGuess== 's')) {
        losses++;
    }
    if ((userguess=='p') && (computerGuess== 'r')) {
        wins++;
   }
    if ((userguess==computerGuess)) {
        ties++;
        alert("Ties: " + ties);
    } else {
    
}

    var html = "<p>Press r, p, or s to start playing</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";

    document.querySelector('#game').innerHTML = html;
}