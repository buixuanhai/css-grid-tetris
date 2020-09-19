import React from "react";
import Game from "./Game";

export const createBoard = (width, height) => {
  return Array(height)
    .fill()
    .map(() => Array(width).fill("."));
};

export const shapes = {
  SQUARE: [
    [1, 1],
    [1, 1]
  ],
  L1: [
    [2, 0],
    [2, 0],
    [2, 0],
    [2, 2]
  ]
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

export const toGridTemplateArea = (arr) => {
  let result = "";
  arr.forEach((row) => {
    result += "'" + row.join(" ") + "'";
    result += "\n";
  });

  return result;
};

export default function App() {
  return (
    <Game
      config={{
        width: 10,
        height: 20
      }}
    />
  );
}
