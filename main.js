import { createBoardDisplay, putKnightOnCell } from './domStuff.js'
import { boardFactory } from './board.js'
import { knightFactory } from './knight.js'
createBoardDisplay()

let board = boardFactory()
console.log(board.board)
putKnightOnCell(0, 0)

let k = knightFactory(board)
console.log(k.validMove(0, 0))
