function popUp(mainMessage, secondaryMessage){
    const bg = document.getElementById("blurScreen");
    bg.style.opacity = 1;
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");

    h1.innerHTML = mainMessage;
    h2.innerHTML = secondaryMessage;
}


function dissapear(){
    const bg = document.getElementById("blurScreen");
    bg.style.opacity = 0;

}