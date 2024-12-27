// import { check, debugIngred } from "./generator";
// import { endGame, startGame } from "./glogic";
// import { increasePoint } from "./pointSystem";
// import { initTimer, reset } from "./timer";


function main() {
    mp = getMaxPoint();
    if (mp !== null){displayMaxPoints()};
}



function start() {
    if (onGame()) {
        return;
    }
    startGame();
    initTimer();
    startGame();
    ingrediant(0);
    loop();
    resetSandwich();

}



function selectIngred(ingred) {
    if (!onGame()) {
        return;
    }
    if (!checkIngred(ingred)) {
        endIt("wrong answer", false);
        Losing2();
        return;
    }
    increasePoint();
    reset();
    ingrediant(1);
    addIngredtoSandwitch(ingred);
    display();
    displayPoints();
    resetCoolors();

}



function addIngredient() {
    endGame();
}


function endIt(text, win) {
    endGame();
    clearInterval(timeIdGet());
    write(text);
    updateText();
    resetPoints(win);
    displayPoints();
    resetCoolors();

}


main()

