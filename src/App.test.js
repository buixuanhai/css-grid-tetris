import { createBoard, toGridTemplateArea, renderShape, shapes } from "./App";
describe("createBoard", () => {
  test("should create board", () => {
    expect(createBoard(4, 4)).toEqual([
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."]
    ]);
  });
});

describe("toGridTemplateArea", () => {
  test("should generate grid area", () => {
    const board = createBoard(4, 4);
    expect(toGridTemplateArea(board)).toEqual(
      `'. . . .'\n'. . . .'\n'. . . .'\n'. . . .'\n`
    );
  });
});

describe("renderShape", () => {
  test("render shape", () => {
    const board = createBoard(4, 4);
    // console.log(toGridTemplateArea(board));
    expect(renderShape(shapes.SQUARE, board, { x: 0, y: 0 })).toEqual([
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [1, 1, ".", "."],
      [1, 1, ".", "."]
    ]);
  });
});
