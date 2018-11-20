import { GridRef } from './map/types';

export const TOGGLE_CELL = 'TOGGLE_CELL';

export function toggleCell(cell: GridRef) {
  return {
    payload: cell,
    type: TOGGLE_CELL,
  };
}
