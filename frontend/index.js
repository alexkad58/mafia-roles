const BG_COLOUR = 'white';

const socket = io('https://mafia-roles.alexkad58.repl.co');

socket.on('init', handleInit);

const gameScreen = document.getElementById('gameScreen');
const initialScreen = document.getElementById('initialScreen');
const bodyPartDisplay = document.getElementById('bodyPartDisplay');
const doneButton = document.getElementById('doneButton')
const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

function init() {
  initialScreen.style.display = "none";
  gameScreen.style.display = "block";

  gameActive = true;
}

function paintGame(state) {

  if (state.players[queuePos].isDrawing) {
    canvas.style.display = 'block'
    canvas.width = canvas.height = 600;

    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    doneButton.style.display = 'block'
    doneButton.addEventListener('click', done);
    initDraw()
  } else {
    doneButton.style.display = 'none'
    canvas.style.display = 'none'
  }
}

function handleInit(roomName, queue, gameState) {
  queuePos = queue[roomName].indexOf(socket.id)
  bodyPart = gameState.players[queuePos].bodyPart
  bodyPartDisplay.innerText = `Ты рисуешь: ${bodyPart}`
}








