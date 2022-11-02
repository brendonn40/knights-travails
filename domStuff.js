export function createBoardDisplay() {
  const board = document.getElementById("chess-board");
  const tbody = document.createElement("tbody");
  let letters = "abcdefgh";
  const letterRow = document.createElement("tr");
  letterRow.appendChild(document.createElement("th"));
  for (let i = 0; i < letters.length; i++) {
    let th = document.createElement("th");
    th.innerText = letters[i];
    letterRow.appendChild(th);
  }
  tbody.appendChild(letterRow);
  for (let i = 8; i > 0; i--) {
    tbody.appendChild(createRow(i));
  }
  board.appendChild(tbody);
}

function createRow(number) {
  let row = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = number;
  row.appendChild(th);
  if (number % 2 === 0) {
    for (let i = 0; i < 8; i++) {
      let td = document.createElement("td");
      if (i % 2 === 0) {
        td.classList.add("light");
        td.setAttribute("data-row", i);
        td.setAttribute("data-column", number - 1);
        row.appendChild(td);
      } else {
        td.classList.add("dark");
        td.setAttribute("data-row", i);
        td.setAttribute("data-column", number - 1);
        row.appendChild(td);
      }
    }
  } else {
    for (let i = 0; i < 8; i++) {
      let td = document.createElement("td");
      if (i % 2 === 0) {
        td.classList.add("dark");
        td.setAttribute("data-row", i);
        td.setAttribute("data-column", number - 1);
        row.appendChild(td);
      } else {
        td.classList.add("light");
        td.setAttribute("data-row", i);
        td.setAttribute("data-column", number - 1);
        row.appendChild(td);
      }
    }
  }
  return row;
}

export function putKnightOnCell(x, y) {
  let name = `[data-row="${x}"][data-column="${y}"]`;
  const cell = document.querySelector(name);
  let img = document.createElement("img");
  img.src = "./knight.svg";
  cell.appendChild(img);
}
export function makePath(arrayOfCoords) {
  for (let i = 1; i < arrayOfCoords.length; i++) {
    let name = `[data-row="${arrayOfCoords[i][0]}"][data-column="${arrayOfCoords[i][1]}"]`;
    const cell = document.querySelector(name);
    cell.innerText = i;
  }
  let cellName = `[data-row="${arrayOfCoords[0][0]}"][data-column="${arrayOfCoords[0][1]}"]`;
  const oldPos = document.querySelector(cellName);
  oldPos.innerHTML = "";
  oldPos.style.backgroundColor = "red";
  putKnightOnCell(...arrayOfCoords.pop());
}
function resetBoard(currentPos) {
  const board = document.getElementById("display");
  board.innerHTML = "";
  createBoardDisplay();
  putKnightOnCell(...currentPos);
}
