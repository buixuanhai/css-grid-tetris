import React from "react";
import Board from "./Board";
const Game = ({ config: { width, height } }) => {
  return <Board {...{ width, height }} />;
};

export default Game;
