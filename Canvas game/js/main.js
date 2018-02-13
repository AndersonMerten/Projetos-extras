window.onload = buildStage;
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: //left
        player1.animation.direction =1;
        player1.animation.position.x = player1.animation.position.x-3;
        gameLoop();
            break;
        case 38:// up
        player1.animation.direction =3;
        player1.animation.position.y = player1.animation.position.y-3;
        gameLoop();
            break;
        case 39://right
        player1.animation.direction =2;
        player1.animation.position.x = player1.animation.position.x+3;
        gameLoop();
            break;
        case 40://down
        player1.animation.direction =0;
        player1.animation.position.y = player1.animation.position.y+3;
        gameLoop();
            break;
    }
};
