// import { endGame, getLevel } from "./glogic";


let difficulty = 1;
const DELAY = 4;
let counter;
let timeId;

function __set(time) {
    counter = Math.round(time);
}

function increase(n) {
    __set(counter + n);
}

function reset() {
    __set(DELAY);
}

function checkTimer() {
    return (counter < 0);
}

function setDiff(lvl) {
    // set the difficulty of the game, 
    //      it define how much time you have for each ingredient to put

    switch (lvl) {
        case ("easy"): {
            difficulty = 1;
            break;
        };
        case ("medium"): {
            difficulty = 1.4;
            break;
        };
        case ("hard"): {
            difficulty = 1.8;
            break;
        };
    }
}

function oneRound() {
    displayTimer();
    increase(-difficulty);
    if (checkTimer()) {
        endIt("you were a little bit late", false);
        Losing1();
    }
}

function displayTimer() {
    update('the-game-timer', "الوقت الباقي:" + Math.round(counter));
}

function loop() {
    timeId = setInterval(oneRound, 1000);
}

function timeIdGet(){
    return timeId;
}

function initTimer() {
    // timer initialization, 
    //      it set the difficulty that the player input, and reset the timer
    let lvl = getLevel();
    setDiff(lvl);
    reset();
}


function debugTime() {
    console.log(counter);
}