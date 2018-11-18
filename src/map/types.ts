export const CELL_SIZE = 8;

export type MapData = Readonly<{
  width: number;
  height: number;
  cells: ReadonlyArray<boolean>
}>;
