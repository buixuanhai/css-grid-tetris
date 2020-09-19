import React from "react";
import { createBoard, toGridTemplateArea } from "./App";

const COLORS = {
  0: "red",
  1: "yellow",
  2: "green",
  3: "blue",
  4: "black"
};

const Board = ({ width, height }) => {
  const [board, setBoard] = React.useState(() => {
    const board = createBoard(width, height);

    board[0][3] = 1;
    board[1][3] = 1;
    board[2][3] = 1;
    board[3][3] = 1;

    board[0][4] = 2;
    board[0][5] = 2;
    board[1][4] = 2;
    board[1][5] = 2;
    return board;
  });

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
                backgroundColor: COLORS[cell % 4],
                border: "1px solid black",
                gridArea: `'${cell}'`
              }}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
