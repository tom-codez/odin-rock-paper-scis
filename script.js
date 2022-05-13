function computerChoice() {

    let compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}

function userInput() {
    
    let userChoice = window.prompt("Choose (R/P/S): ");

    if (['rock', 'paper', 'scissors'].indexOf(userChoice) >= 0) {

        return userChoice.toLowerCase();

    } else {

        return window.alert('Use a valid word'), userInput();

    }
}

let comp = 0;
let user = 0;

function round() {

    let compSelection = computerChoice();
    let userSelection = userInput();

    if (compSelection == userSelection) {   // Draw

        window.alert('That one was a draw.');
        console.log(`User: ${user}`);
        console.log(`Computer: ${comp}`)
        
    } else if 
    ((compSelection == 'rock' && userSelection == 'scissors') ||
    (compSelection == 'paper' && userSelection == 'rock') || 
    (compSelection == 'scissors' && userSelection == 'paper')) {    // Comp wins

        window.alert('Computer Won. You lost.');
        comp++;
        console.log(`User: ${user}`);
        console.log(`Computer: ${comp}`);

    } else {    // User wins

        window.alert('Computer lost. You won!');
        user++;
        console.log(`User: ${user}`);
        console.log(`Computer: ${comp}`);
    }
}

for (comp < 5; user < 5;) {

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
}