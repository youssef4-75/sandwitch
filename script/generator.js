let CurrentIngredient;
let Ingredients = ["Meat", "Cheese", "Veggies", "Tomate"];



function GenerateNext() {
    ranIndex = Math.floor(Math.random() * Ingredients.length);
    CurrentIngredient = Ingredients[ranIndex];
}


function checkIngred(ingred) {
    // check if the clicked value is the current value, if so,
    //      it generate another ingredient and move to the next step
    // otherwise, it return false to indicate the unmatched click

    if (ingred === CurrentIngredient) {
        GenerateNext();
        return true;
    }
    return false;
}



function debugIngred() {
    console.log(CurrentIngredient);
}

function ingrediant(state) {
    if (state === 0) {
        __ingredient0();
    } else {
        GenerateNext();
    }

    write(CurrentIngredient);
    colorify('the-game-text', ranColor());
    updateText();
}




function __ingredient0() {
    CurrentIngredient = "Bread";
}
