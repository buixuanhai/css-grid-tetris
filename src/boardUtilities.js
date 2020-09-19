import { toGridTemplateArea } from "./App";

export const createBoard = (width, height) => {
  return Array(height)
    .fill()
    .map(() => Array(width).fill("."));
};

export const renderShape = (shape, board, { x, y }) => {
  const result = JSON.parse(JSON.stringify(board));
  for (let rowIndex = shape.length - 1; rowIndex >= 0; rowIndex--) {
    const row = shape[rowIndex];
    row.forEach((cell, cellIndex) => {
      result[board.length - 1 - rowIndex][
        board[0].length - 1 - cellIndex
      ] = cell;
      console.log(cell);
    });
  }
  console.log(toGridTemplateArea(result));
  return result;
};
