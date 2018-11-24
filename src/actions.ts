import { GridRef } from './map/types';

export const TOGGLE_CELL = 'TOGGLE_CELL';

export function toggleCell(cell: GridRef) {
  return {
    payload: cell,
    type: TOGGLE_CELL,
  };
}

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export const SET_MOUSE_POS = 'SET_MOUSE_POS';

export function setMousePos(ref: GridRef) {
  return {
    payload: ref,
    type: SET_MOUSE_POS,
  };
}
