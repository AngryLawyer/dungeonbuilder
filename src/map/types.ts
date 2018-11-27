export const CELL_SIZE = 12;

export type MapData = Readonly<{
  width: number;
  height: number;
  cells: ReadonlyArray<boolean>
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
