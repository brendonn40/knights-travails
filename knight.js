export const knightFactory = (board) => {
  let possible = [
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ]
  const validMove = (x, y) => {
    let moves = []
    for (const move of possible) {
      if (
        x + move[0] < 8 &&
        x + move[0] >= 0 &&
        y + move[1] < 8 &&
        y + move[1] >= 0
      ) {
        moves.push(move)
      }
    }
    return moves
  }
  return {
    validMove,
  }
}
