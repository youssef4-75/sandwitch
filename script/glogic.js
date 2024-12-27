let gameMode = false;


function getLevel(){
    // its either easy, medium or hard level
    let inp = document.querySelector('input[name="level"]:checked');
    if(inp === null){
        return "easy";
    }
    return inp.value;
}

function endGame(){
    gameMode = false;
}

function startGame(){
    gameMode = true;
}

function debugGame(){
    console.log(gameMode);
}

function onGame(){
    return gameMode;
}