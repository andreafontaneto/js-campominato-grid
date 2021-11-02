/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const gridEasy = document.querySelector('.grid-easy');

//devo intercettare le 3 opzioni dell'html
const easyOpt = document.getElementById('easy');
const hardOpt = document.getElementById('hard');
const crazyOpt = document.getElementById('crazy');


generateEasyGrid();


// creo la funzione per generare la griglia easy
function generateEasyGrid(tot){
  for(let i = 0; i < 100; i++){
    
    const squareComplete = createSquare(gridEasy);

    squareComplete.innerHTML = i + 1;

    squareComplete.style.width = 'calc(100% / 10)';
    squareComplete.style.height = 'calc(100% / 10)';

  }
}

// creo la funzione per creare un singolo quadrato
function createSquare (target){

  const square = document.createElement('div');

  square.className = 'square';

  target.append(square);

  return square;

}