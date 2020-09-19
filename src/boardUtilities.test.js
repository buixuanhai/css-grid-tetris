import { createBoard, renderShape } from "./boardUtilities";
import { SHAPES } from "./constants";

describe.only("renderShape", () => {
  test("render shape", () => {
    const board = createBoard(4, 4);
    expect(renderShape(SHAPES.SQUARE, board, { x: 0, y: 0 })).toEqual([
      [1, 1, ".", "."],
      [1, 1, ".", "."],
      [".", ".", ".", "."],
      ["", ".", ".", "."]
    ]);
  });
});
