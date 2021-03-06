document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{row:0, col:0, isMine:false, isMarked:false, hidden:true},
          {row:0, col:1, isMine:false, isMarked:false, hidden:true},
          {row:0, col:2, isMine:true,  isMarked:false, hidden:true}, 
          {row:0, col:3, isMine:false, isMarked:false, hidden:true}, 
          {row:1, col:0, isMine:true,  isMarked:false, hidden:true}, 
          {row:1, col:1, isMine:true,  isMarked:false, hidden:true}, 
          {row:1, col:2, isMine:false, isMarked:false, hidden:true}, 
          {row:1, col:3, isMine:false, isMarked:false, hidden:true}, 
          {row:2, col:0, isMine:false, isMarked:false, hidden:true}, 
          ]
  }
//console.log(board.cells.length); it gave 4 so the row and col numbers should be less than 4 as per the test that row and cell.number should be > length
// add cells to make it 9 squares

function startGame () {
  // Don't remove this function call: it makes the game work!
  //write a loop that go through contents of board cell- should call countSurroundingMines to a property to eaach cell object it should be called surroundingMines
//function countSurroundingMines need to be define to return the number of cells aroud the current cell that have the isMine property set to true


 //for (var i = 0; i < board.cells.length; i++){
  // board.cells[i].surroundingMines= countSurroundingMines(board.cells[i])
 //}
 // board is gone if i use this but if i use below which shouldnt be right coz len should have no .length


//var countSurroundingMines = board.cells
//for (var i= 0, len= countSurroundingMines.length; i < len.length; i++){
 //len[i].surroundingMines = countSurroundingMines(len[i]);
//}


for (var i= 0; i < board.cells.length; i++) {
board.cells[i].surroundingMines= countSurroundingMines(board.cells[i])
}

document.addEventListener("click", checkforWin);
document.addEventListener("contextmenu", checkforWin);



  lib.initBoard()
}


// add event listeners to call for checkwin when left button is clicked use document.addEventListener
// create another for the right click as well
// go to function checkforWin for next step
// syntax is element.addEventListener("click", function())


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
// make a loop through all of board.cells and check if both isMine and .isMarked are true
// if there is a mine not marked then not win
// if every mine is marked but still some hidden = true then not win yet
//both criteria above pass then displayMesage function at the bottom of function to use .
//need 3 var for 3 properties the do if else statements

//for (var i= 0; i < board.cells.length; i++){
  //if (board.cells[i].isMine){
  // isMineCounter++
 //}  if (board.cells[i].isMarked){
   // isMarkedCounter++
   // console.log(isMineCounter)
 // } if (board.cells[i].isMine == board.cells[i].hidden){
   //hiddenCounter++
  //} if (isMineCounter == isMarkedCounter && hiddenCounter== 0){
   //lib.displayMessage('You win!');
 // }
//}
//}

function isMineCount(){
var isMineCounter= 0;
for (var i= 0; i < board.cells.length; i++){
  if (board.cells[i].isMine){
   isMineCounter++
  }
  return isMineCounter;
}
}

function isMarkedCount(){
var isMarkedCounter= 0;
for (var i= 0; i < board.cells.length; i++){
  if (board.cells[i].isMarked){
   isMarkedCounter++
  }
  return isMarkedCounter;
}
}

function hiddenCount(){
  var hiddenCounter= 0;
  for (var i= 0; i < board.cells.length; i++){
    if (board.cells[i].isMine === false && board.cells[i].hidden === false){
      hiddenCounter++ 
    }
  }
  return hiddenCounter;
}

function winningCond(){
  var winningCondition=0
  for (let i = 0; i < board.cells.length; i++) {
   if (board.cells[i].isMarked && board.cells[i].isMine){
      winningCondition++
    }
  }
  return winningCondition;
}
  function checkforWin(){
   if ( isMineCount() === hiddenCount() && winningCond() === isMineCount()){
      return lib.displayMessage('You win!');
       }
      }
    

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
// define function above to return number of cells around the cell that have the isMine= true


var surrounding = lib.getSurroundingCells(cell.row, cell.col);
var count= 0;
for (var i = 0; i < surrounding.length; i++)
 if (surrounding[i].isMine) {
   count++;
 }

 return count;
}

  