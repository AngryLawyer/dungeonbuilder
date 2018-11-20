import { GridRef, MapData } from './types';

export function gridRefToIndex(gridRef: GridRef, map: MapData): number {
  if (gridRef.x >= map.width || gridRef.y >= map.height) {
    throw new Error(`GridRef out of bounds - ${gridRef.x} vs ${map.width} and ${gridRef.y} vs ${map.height}`);
  }
  return (gridRef.y * map.width) + gridRef.x;
}
