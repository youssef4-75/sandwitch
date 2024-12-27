let upper = false;

function win(){
    if (!onGame()){
        return
    }
    if (upper){
        endIt("here is your sandwitch", true);
        finishy();
        upper = false;
        finilize(Winning);
        return;
    }

    upper = true;
    selectIngred('Bread');
    startify();
}


function reseBread(){
    upper = false
}


