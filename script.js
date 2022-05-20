let comp = 0;       // Sets points to 0
let user = 0;

let userChoice;     // Initialise variable

let compScore = document.getElementById('comp-score').textContent = `${comp}`;      // Sets scores to live
let playerScore = document.getElementById('player-score').textContent = `${user}`;

let options = document.querySelectorAll('.icons-div');      // Adds click event to weapons div
options.forEach(option => option.addEventListener('click', userInput));

const resetBtn = document.getElementById('reset');      // Adds click event to 'reset' button
resetBtn.addEventListener('click', reset);

function reset() {      // Resets game
    console.log('Reset');

    comp = 0;       // Sets scroes to 0
    user = 0;

    document.getElementById('cheer').pl;

    compScore = document.getElementById('comp-score').textContent = `${comp}`;      // Sets scores to live
    playerScore = document.getElementById('player-score').textContent = `${user}`;
    
    document.getElementById('comp-choice').textContent = `Computer: "Lets play again."`;     // Changes visual text
    document.getElementById('result').textContent = 'Pick your weapon:';
}

function userInput(e) {      // User inputs choice of r/p/s

    let playerSelection = e.currentTarget;      // Clicks on the parent div of choice

    if (playerSelection.id == 'Rock') {

        document.getElementById('rock-img').style.transform = 'rotateZ(20deg)';     // Adds animation on click
        setTimeout(() => {
            document.getElementById('rock-img').style.transform = '';
        }, 500);

        console.log('User choice: Rock')
        userChoice = 'Rock';

        return round();
    } else if (playerSelection.id == 'Paper') {

        document.getElementById('paper-img').style.transform = 'rotateZ(20deg)';     // Adds animation on click
        setTimeout(() => {
            document.getElementById('paper-img').style.transform = '';
        }, 500);

        console.log('User choice: Paper');
        userChoice = 'Paper';

        return round();
    } else if (playerSelection.id == 'Scissors') {

        document.getElementById('scissors-img').style.transform = 'rotateZ(20deg)';     // Adds animation on click
        setTimeout(() => {
            document.getElementById('scissors-img').style.transform = '';
        }, 500);

        console.log('User choice: Scissors');
        userChoice = 'Scissors';

        return round();
    } else {
        console.error('userInput: fail');
    }
}

function computerChoice() {     // Computer chooses r/p/s

    let compOptions = ['Rock', 'Paper', 'Scissors'];        // Comp chooses from array
    let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];

    document.getElementById('comp-choice').textContent = `Computer " "`;        // Adds visual feedback of choice
    setTimeout(() => {
        document.getElementById('comp-choice').textContent = `Computer: "${compChoice}"`;
    }, 200);

    console.log(`Comp choice: ${compChoice}`);
    return compChoice;
}

function round() {      // Compares choices to see who wins & edits scores

    let compSelection = computerChoice();       // Gets choices
    let userSelection = userChoice;

    if (compSelection === userSelection) {   // Draw
        logScores();
        document.getElementById('result').textContent = ``;
        setTimeout(() => {
            document.getElementById('result').textContent = `That round was a draw.`;
        }, 200);
        
    } else if 
    ((compSelection == 'Rock' && userSelection == 'Scissors') ||
    (compSelection == 'Paper' && userSelection == 'Rock') || 
    (compSelection == 'Scissors' && userSelection == 'Paper')) {    // Comp wins round

        comp++;     // Computer score +1
        logScores();
        document.getElementById('result').textContent = ``;
        setTimeout(() => {
        document.getElementById('result').textContent = `Computer won that round.`;
        }, 200);

    } else {    // User wins round

        user++;       // User score +1
        logScores();
        document.getElementById('result').textContent = ``;
        setTimeout(() => {
        document.getElementById('result').textContent = 'You won that round.';
        }, 200);
    }
}

function logScores() {      // Updates scores

    document.getElementById('comp-score').textContent = `${comp}`;
    document.getElementById('player-score').textContent = `${user}`;

    console.log(`User: ${user}`);
    console.log(`Computer: ${comp}`);

    checkScores();
}

function checkScores() {        // Checks if score reaches 5
    if (comp > 4) {     // Comp wins match

        options.forEach(option => option.classList.add('no-events'));
        booAudio();

        setTimeout(() => {
            result.style.textDecoration = 'none';
            result.style.fontSize = '2.8rem';
            options.forEach(option => option.classList.remove('no-events'));
            reset();
        }, 2500);

        setTimeout(() => {
            const result = document.getElementById('result');
                result.style.textDecoration = 'overline var(--red) wavy 4px';
                result.style.fontSize = '3.8rem';
                result.textContent = 'Computer won the match!';
                document.getElementById('comp-choice').textContent = `Computer "That was too easy."`;
        }, 201);

    } else if (user > 4) {      // Player wins match

        options.forEach(option => option.classList.add('no-events'));
        cheerAudio();

        setTimeout(() => {
            result.style.textDecoration = 'none';
            result.style.fontSize = '2.8rem';
            options.forEach(option => option.classList.remove('no-events'));
            reset();
        }, 2500);

        setTimeout(() => {
            const result = document.getElementById('result');
                result.style.textDecoration = 'overline var(--green) wavy 4px';
                result.style.fontSize = '3.8rem';
                result.textContent = 'You won the match!';
                document.getElementById('comp-choice').textContent = `Computer "You got lucky for once."`;
        }, 201);

    } else {
        return
    }
}

// Audio

document.getElementById('Rock').addEventListener('click', weaponAudio);
document.getElementById('Paper').addEventListener('click', weaponAudio);
document.getElementById('Scissors').addEventListener('click', weaponAudio);

document.getElementById('mute').addEventListener('click', mute);

function weaponAudio() {
    const one = document.getElementById('whoosh1');
    const two = document.getElementById('whoosh2');
    const three = document.getElementById('whoosh3');

    const fx = [one, two, three]

    return fx[Math.floor(Math.random() * fx.length)].play();

}

function cheerAudio() {
    audio.currentTime = 0;
    document.getElementById('cheer').play();
}

function booAudio() {
    audio.currentTime = 0;
    document.getElementById('boo').play();
}

function mute() {

    let muteBtn = document.getElementById('mute');
    const allAudio = document.querySelectorAll('audio');

    if (muteBtn.className == 'mute') {
        allAudio.forEach(sound => sound.muted = true);
        muteBtn.src = './images/mute.png';
        muteBtn.className = 'unmute';
        console.log('Mute');
    } else {
        allAudio.forEach(sound => sound.muted = false);
        muteBtn.src = './images/unmute.png';
        muteBtn.className = 'mute';
        console.log('Unmute');
    }
}