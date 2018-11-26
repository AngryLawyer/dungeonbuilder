import { GridRef } from './types';

export const SET_CELLS = 'SET_CELLS';
export function setCells(cells: ReadonlyArray<GridRef>, brushType: true) {
  return {
    payload: {
      brushType,
      cells,
    },
    type: SET_CELLS,
  };
}

export const SET_MOUSE_POS = 'SET_MOUSE_POS';

export function setMousePos(ref: GridRef) {
  return {
    payload: ref,
    type: SET_MOUSE_POS,
  };
}

export const MOUSE_UP = 'MOUSE_UP';

export function mouseUp() {
  return {
    type: MOUSE_UP,
  };
}

export const MOUSE_DOWN = 'MOUSE_DOWN';

export function mouseDown() {
  return {
    type: MOUSE_DOWN,
  };
}
