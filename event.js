import { makePath, resetBoard } from "./domStuff.js";
import { knightFactory } from "./knight.js";

function targetListener(knight) {
  const button = document.getElementById("todo");
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    resetBoard(knight.knightPos);
    let target = cellListener();
    makePath(knight.findPath(target));
    knight.knightPos = target;
  });
}
function cellListener() {
  const cells = document.querySelectorAll("td");
  let arr = Array.from(cells);
  arr.forEach((item) =>
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      return [item.getAttribute("data-row"), item.getAttribute("data-column")];
    })
  );
}
