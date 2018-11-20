export const CELL_SIZE = 8;

export type MapData = Readonly<{
  width: number;
  height: number;
  cells: ReadonlyArray<boolean>
}>;

export type GridRef = Readonly<{
  x: number;
  y: number;
}>;
