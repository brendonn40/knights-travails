import { makePath, resetBoard } from "./domStuff.js";

export function targetListener(knight) {
  const button = document.getElementById("new-target");
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    resetBoard(knight.knightPos);
    cellListener(knight);
  });
}
function cellListener(knight) {
  const cells = document.querySelectorAll("td");
  let arr = Array.from(cells);
  arr.forEach((item) =>
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      let target = [
        parseInt(item.getAttribute("data-row")),
        parseInt(item.getAttribute("data-column")),
      ];
      if (target === knight.knightPos) {
        return;
      }
      let path = knight.findPath(target);
      makePath(path);
      knight.knightPos = target;
      return;
    })
  );
}
