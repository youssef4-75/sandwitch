let points = 0;


function getMaxPoint(){
    return localStorage.getItem("max-point");
}

function setMaxPoint(point){
    localStorage.setItem("max-point", point);
}

function increasePoint(){
    points += 1;
}

function displayPoints(){
    update('the-game-pointer', `points: ${points}`);
}

function resetPoints(win){
    if(win === undefined){
        throw new Error("win arg is definitely needed");
    }
    if (win){
        updateMax();
    }
    points = 0;
    displayMaxPoints();
}


function displayMaxPoints(){
    let strv = getMaxPoint();
    update('the-max-pointer', `points: ${strv}`);
}


function updateMax(){
    if(points>getMaxPoint()){
        setMaxPoint(points);
    }
}


