let canvas = document.getElementById("gameScreen");
let ctx = canvas .getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

let lastTime = 0;
function gameloop(){

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);