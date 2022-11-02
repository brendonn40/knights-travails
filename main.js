import { createBoardDisplay, makePath, putKnightOnCell } from "./domStuff.js";
import { knightFactory } from "./knight.js";
import { targetListener } from "./event.js";
createBoardDisplay();

putKnightOnCell(0, 0);

let k = knightFactory();

targetListener(k);
