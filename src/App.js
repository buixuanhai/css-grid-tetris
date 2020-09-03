import React from "react";

export const createBoard = (width, height) => {
  return Array(height)
    .fill()
    .map(() => Array(width).fill("."));
};

const board = createBoard(10, 20);

board[0][3] = 1;
board[1][3] = 1;
board[2][3] = 1;
board[3][3] = 1;

board[0][4] = 2;
board[0][5] = 2;
board[1][4] = 2;
board[1][5] = 2;

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

const colors = {
  0: "red",
  1: "yellow",
  2: "green",
  3: "blue",
  4: "black"
};

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gridTemplateRows: "repeat(20, 1fr)",
        width: 300,
        height: 600,
        gap: 2,
        gridTemplateAreas: toGridTemplateArea(board)
      }}
    >
      {board.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          return (
            <div
              key={`${rowIndex}-${cellIndex}`}
              style={{
                backgroundColor: colors[cell % 4],
                border: "1px solid black",
                gridArea: `'${cell}'`
              }}
            />
          );
        });
      })}
    </div>
  );
}
