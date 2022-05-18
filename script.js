let comp = 0;       // Sets scroes to 0
let user = 0;
let compScore = document.getElementById('comp-score').textContent = `${comp}`;      // Sets scores to live
let playerScore = document.getElementById('player-score').textContent = `${user}`;

const buttons = document.querySelectorAll('.option-btn');       // Adds optino-button events
buttons.forEach(button => button.addEventListener('click', round));

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

function reset() {      // Resets game
    comp = 0;       // Sets scroes to 0
    user = 0;

    compScore = document.getElementById('comp-score').textContent = `${comp}`;      // Sets scores to live
    playerScore = document.getElementById('player-score').textContent = `${user}`;

    document.getElementById('result').textContent = 'Choose your weapon to start.';     // Sets to starting text
    buttons.forEach(button => 
        button.disabled = false)
}

function userInput() {      // User inputs choice of r/p/s

    if (document.getElementById('rock').id == 'rock') {
        return 'rock';
    } else if (document.getElementById('paper').id == 'paper') {
        return 'paper';
    } else if (document.getElementById('scissors').id == 'scissors') {
        return 'scissors';
    } else {
        return console.error('No user input detected');
    }
}

function computerChoice() {     // Computer chooses r/p/s

    let compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}

function round() {      // Compares choices to see who wins & edits scores

    let compSelection = computerChoice();
    let userSelection = userInput();

    if (compSelection == userSelection) {   // Draw
        document.getElementById('result').textContent = `That round was a draw.`;
        logScores();
        
    } else if 
    ((compSelection == 'rock' && userSelection == 'scissors') ||
    (compSelection == 'paper' && userSelection == 'rock') || 
    (compSelection == 'scissors' && userSelection == 'paper')) {    // Comp wins

        document.getElementById('result').textContent = `Computer won that round. You lost.`;
        comp++;     // Computer score +1
        logScores();

    } else {    // User wins

        document.getElementById('result').textContent = 'You won that round. Computer lost.';
        user++;       // User score +1
        logScores();
    }
}

function logScores() {      // Updates scores
    document.getElementById('comp-score').textContent = `${comp}`;
    document.getElementById('player-score').textContent = `${user}`;

    console.log(`User: ${user}`);
    console.log(`Computer: ${comp}`);

    setTimeout(500);
    checkScores();
}

function checkScores() {        // Checks if score reaches 5
    if (comp == 5) {
        document.getElementById('result').textContent = 'Computer won the match! Do better.';
        buttons.forEach(button => button.disabled = true)
            setTimeout(() => {
                reset();
            }, 1500);

    } else if (user == 5) {
        document.getElementById('result').textContent = 'You won the match! You must be proud.';
        buttons.forEach(button => button.disabled = true)
            setTimeout(() => {
                reset();
            }, 1500);

    } else {
        return
    }
}

/* for (comp < 5; user < 5;) {     // Re-runs rounds until comp or user reaches 5 points

    round();

    if (comp == 5) {

        window.alert('Computer Won. Do better.');
        window.alert('Play again?');

    } else if (user == 5) {

        window.alert('You won! Pog');
        window.alert('Play again?');

    } else {

        window.alert('Next round?')

    }
} */

