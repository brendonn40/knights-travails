export const boardFactory = () => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let arr = [];
    for (let j = 0; j < 8; j++) {
      arr.push(`[${i},${j}]`);
    }
    board.push(arr);
  }
  return {
    board,
  };
};
