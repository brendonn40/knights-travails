export const knightFactory = () => {
  let knightPos = [0, 0];
  let possible = [
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];
  const validMove = (array) => {
    let moves = [];
    let valid = [];
    for (const move of possible) {
      if (
        array[0] + move[0] < 8 &&
        array[0] + move[0] >= 0 &&
        array[1] + move[1] < 8 &&
        array[1] + move[1] >= 0
      ) {
        moves.push(move);
      }
    }
    for (const move of moves) {
      let arr = [];
      arr.push(array[0] + move[0]);
      arr.push(array[1] + move[1]);
      valid.push(arr);
    }
    return valid;
  };
  const findPath = (target) => {
    let queue = [[knightPos, [knightPos]]];
    let visited = new Set([JSON.stringify(knightPos)]);
    while (queue.length > 0) {
      let [coord, path] = queue.shift();
      visited.add(JSON.stringify(coord));
      if (JSON.stringify(coord) === JSON.stringify(target)) {
        return path;
      }
      let moves = validMove(coord);
      for (const move of moves) {
        if (!visited.has(JSON.stringify(move))) {
          queue.push([move, [...path, move]]);
        }
      }
    }
  };
  return {
    validMove,
    findPath,
    knightPos,
  };
};
