import { BrushType, GridRef, ToolType } from './types';

export const SET_CELLS = 'SET_CELLS';
export function setCells(cells: ReadonlyArray<GridRef>, brushType: BrushType) {
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

export const SET_BRUSH = 'SET_BRUSH';
export function setBrush(brush: BrushType) {
  return {
    payload: brush,
    type: SET_BRUSH,
  };
}

export const SET_TOOL = 'SET_TOOL';
export function setTool(tool: ToolType) {
  return {
    payload: tool,
    type: SET_TOOL,
  };
}
