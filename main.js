import { createBoardDisplay, makePath, putKnightOnCell } from "./domStuff.js";
import { knightFactory } from "./knight.js";
createBoardDisplay();

putKnightOnCell(0, 0);

let k = knightFactory();

console.log(k.findPath([3, 3]));

makePath(k.findPath([7, 7]));
