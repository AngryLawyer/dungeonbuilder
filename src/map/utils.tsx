import { range } from '../utils';
import { GridRef, MapData, Square } from './types';

export function gridRefToIndex(gridRef: GridRef, map: MapData): number {
  if (gridRef.x >= map.width || gridRef.y >= map.height) {
    throw new Error(`GridRef out of bounds - ${gridRef.x} vs ${map.width} and ${gridRef.y} vs ${map.height}`);
  }
  return (gridRef.y * map.width) + gridRef.x;
}

export function makeSquare(a: GridRef, b: GridRef): Square {
  return {
    bottomRight: {
      x: Math.max(a.x, b.x),
      y: Math.max(a.y, b.y),
    },
    topLeft: {
      x: Math.min(a.x, b.x),
      y: Math.min(a.y, b.y),
    },
  };
}

export function gridRefInside(gridRef: GridRef, square: Square): boolean {
  const {
    topLeft,
    bottomRight
  } = square;
  return (gridRef.x >= topLeft.x && gridRef.x <= bottomRight.x &&
    gridRef.y >= topLeft.y && gridRef.y <= bottomRight.y);
}

export function squareToCells(square: Square): GridRef[] {
  const out: GridRef[] = [];
  range(square.topLeft.x, square.bottomRight.x + 1).forEach((x => {
    range(square.topLeft.y, square.bottomRight.y + 1).forEach((y => {
      out.push({x, y});
    }));
  }));
  return out;
}
