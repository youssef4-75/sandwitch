let Sandwitch = [];
let finishing = false;
let starting = false;

// @param {number} a 
function addIngredtoSandwitch(ingred) {
    ingred = ingred.toLowerCase();
    if (ingred=="bread") return;
    Sandwitch.push(ingred);
}


function display(){
    const area = document.getElementById("sandwitch");
    area.innerHTML = ``;
    let res = ``;
    for(block of genBlocks()){
        res += block;
    }
    area.innerHTML = res;

}


function* genBlocks(){
    if(finishing){yield `
        <div id="upper-bread"></div>
        `;}
    for (element of Sandwitch){
        yield `
        <div id="${element}"></div>
        `;
    }
    if(starting){yield `
        <div id="down-bread"></div>
        `;}
}



function finishy(){
    finishing = true;
    display()
}

function startify(){
    starting = true;
    display()
}


function resetSandwich(){
    Sandwitch = [];
    finishing = false;
    starting = false;
    display();
}
