let Coolors = ["#f39c12", "#e74c3c", "#27ae60", "#c22f33"];

function colorify(container, color){
    const descButton = document.getElementById(container);
    descButton.style.backgroundColor = color;

}


function ranColor(){
    ranIndex = Math.floor(Math.random() * Coolors.length);
    return Coolors[ranIndex];
}


function resetCoolors(){
    colorify('the-game-text', undefined);
    Coolors = ["#f39c12", "#e74c3c", "#27ae60", "#c22f33"];
}

