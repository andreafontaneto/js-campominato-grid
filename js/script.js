/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


// intercetto il contenitore delle griglie
const gridEasy = document.querySelector('.grid-easy');

// intercetto il menù con le 3 opzioni dell'html
const difficulty = document.getElementById('difficulty');

// intercetto il bottone Play
const playButton = document.querySelector('.btn');


// creo le 3 condizioni al click del play
switch(difficulty.value){

  case '2':
    playButton.addEventListener('click', function(){
    generateHardGrid();
    })
  case '3':
    playButton.addEventListener('click', function(){
    generateCrazyGrid();
    })
  default:
    playButton.addEventListener('click', function(){
    generateEasyGrid();
    })
}




// creo la funzione per generare la griglia easy
function generateEasyGrid(tot){
  for(let i = 0; i < 100; i++){
    
    const squareComplete = createSquare(gridEasy);

    squareComplete.innerHTML = i + 1;

    squareComplete.style.width = 'calc(100% / 10)';
    squareComplete.style.height = 'calc(100% / 10)';

  }
}

// creo la funzione per generare la griglia hard
function generateHardGrid(tot){
  for(let i = 0; i < 81; i++){
    
    const squareComplete = createSquare(gridEasy);

    squareComplete.innerHTML = i + 1;

    squareComplete.style.width = 'calc(100% / 9)';
    squareComplete.style.height = 'calc(100% / 9)';

  }
}

// creo la funzione per generare la griglia crazy
function generateCrazyGrid(tot){
  for(let i = 0; i < 49; i++){
    
    const squareComplete = createSquare(gridEasy);

    squareComplete.innerHTML = i + 1;

    squareComplete.style.width = 'calc(100% / 7)';
    squareComplete.style.height = 'calc(100% / 7)';

  }
}

// creo la funzione generale per creare un singolo quadrato
function createSquare (target){

  const square = document.createElement('div');

  square.className = 'square';

  target.append(square);

  return square;

}