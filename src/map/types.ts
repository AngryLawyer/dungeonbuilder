export const CELL_SIZE = 12;
export const WALL_THICKNESS = CELL_SIZE / 6;

export type MapData = Readonly<{
  width: number;
  height: number;
  cells: ReadonlyArray<BrushType>
}>;

export type GridRef = Readonly<{
  x: number;
  y: number;
}>;

export type Square = Readonly<{
  topLeft: GridRef;
  bottomRight: GridRef;
}>;

export type MouseState = Readonly<{
  mouseDown: GridRef | null;
  current: GridRef | null;
}>;

export enum BrushType {
  WALL = 'WALL',
  FLOOR = 'FLOOR',
  DOOR = 'DOOR',
}

export enum ToolType {
  BRUSH = 'BRUSH',
  RECTANGLE = 'RECTANGLE',
}
