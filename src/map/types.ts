export const CELL_SIZE = 12;

export type MapData = Readonly<{
  width: number;
  height: number;
  cells: ReadonlyArray<BrushType>
}>;

export type GridRef = Readonly<{
  x: number;
  y: number;
}>;

export type MouseState = Readonly<{
  mouseDown: boolean;
  current: GridRef | null;
}>;

export enum BrushType {
  WALL = 'WALL',
  FLOOR = 'FLOOR',
}

export enum ToolType {
  BRUSH = 'BRUSH',
  RECTANGLE = 'RECTANGLE',
}
