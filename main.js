import { createBoardDisplay, putKnightOnCell } from "./domStuff.js";
import { boardFactory } from "./board.js";
createBoardDisplay();

let board = boardFactory();
console.log(board.board);
putKnightOnCell(2, 3);
