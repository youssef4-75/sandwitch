let mainMessage = '';

function updateText(){
    update('the-game-text', mainMessage);
}

function write(text){
    mainMessage = text;
}

function add(text){
    mainMessage += text;
}

function update(container, text){
    const descButton = document.getElementById(container);
    descButton.innerHTML = text;
}