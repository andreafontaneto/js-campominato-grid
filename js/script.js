/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const gridEasy = document.querySelector('.grid-easy');

for(let i = 0; i < 100; i++){
  
  const squareComplete = createSquare(gridEasy);

}



function createSquare (target){

  const square = document.createElement('div');

  square.className = 'square';

  target.append(square);

  return square;

}



// function generateNumCell (){

//   let counter = 0;

//   for(let i = 0; i < 100; i++){
//     counter++;
//     counter = counter + 1;
//   }

//   return counter;
// }

