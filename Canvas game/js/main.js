window.onload = buildStage;
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: //left
        player1.animation.direction =1;
        gameLoop();
            break;
        case 38:// up
        player1.animation.direction =3;
        gameLoop();
            break;
        case 39://right
        player1.animation.direction =2;
        gameLoop();
            break;
        case 40://down
        player1.animation.direction =0;
        gameLoop();
            break;
    }
};
