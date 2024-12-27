let boxMessage = ``;
let description;



function writeMessage(){
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");

    h1.innerHTML = boxMessage;
    h2.innerHTML = description;
}

function Winning(){
    boxMessage = `teratera terra`
    description = `you made a sandwitch`
    
}


function Losing1(){
    boxMessage = `zanen desu`
    description = `you were too late`
}

function Losing2(){
    boxMessage = `zanen desu`
    description = `you chose the wrong ingredient to make the custommer`
}

function appear(){
    let message = document.getElementById("blurScreen");
    message.style.zIndex = 0;
    message.style.opacity = 1;
}

function dissapear(){
    let message = document.getElementById("blurScreen");
    message.style.zIndex = -1;
    message.style.opacity = 0;  
}


function debugText(){
    console.log(boxMessage);
    console.log(description);
}

function finilize(method){
    method();
    writeMessage();
    appear();
}

