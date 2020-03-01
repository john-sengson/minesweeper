document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{row:1, col:1, isMine:[true], isMarked:[true], hidden:[true]},
          {row:1.5, col:1.5, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:1.75, col:1.75, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:2, col:2, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:2.5, col:2.5, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:1.25, col:1.25, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:3, col:3, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:.5, col:.5, isMine:[true], isMarked:[true], hidden:[true]}, 
          {row:0, col:0, isMine:[true], isMarked:[true], hidden:[true]}]
  }
//console.log(board.cells.length); it gave 4 so the row and col numbers should be less than 4 as per the test that row and cell.number should be > length
// add cells to make it 9 squares

board.cells.forEach((a)=>{a.surroundingMines = countSurroundingMines})


function startGame () {
  // Don't remove this function call: it makes the game work!
//make a for loop of board.cells and its to call countSurroundingMines once for each cell
//assign result of countSurroundingMines to a new property in each called surroundingMines


 //for (var i= 0; i > board.cells.length; i++); {
 //countSurroundingMines 
for (var elem in board){
  //console.log(elem, board[elem]);
  countSurroundingMines= (elem, board[elem]);
}
console.log(countSurroundingMines);





  lib.initBoard()
}



console.log()



//board.forEach(function(cells){
  //cells.surroundingMines() = countSurroundingMines()
//});
// error of board.foreach is not a function :(



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}






//function addScore (gradebook, name, scores){
  //gradebook[name].testScores.push(scores)}