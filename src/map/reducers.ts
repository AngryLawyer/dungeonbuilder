import { AnyAction, combineReducers } from 'redux';
import { repeat } from '../utils';
import {
  MOUSE_DOWN,
  MOUSE_UP,
  SET_CELLS,
  SET_MOUSE_POS,
} from './actions';
import { GridRef, MapData, MouseState } from './types';
import { gridRefToIndex } from './utils';

export type MapStore = Readonly<{
  map: MapData,
  mouse: MouseState,
}>;

const cellData = repeat(25 * 25, true);

const map: MapData = {
  cells: cellData,
  height: 25,
  width: 25,
}

export function mapReducer(state: MapData = map, action: AnyAction) {
  switch (action.type) {
    case SET_CELLS:
      const indexes = action.payload.cells.map((cell: GridRef) => gridRefToIndex(cell, state));
      return {
        ...state,
        cells: state.cells.map((cell, cellIndex) => {
          if (indexes.indexOf(cellIndex) > -1) {
            return false;
          }
          return cell;
        })
      }
    default:
      return state;
  }
}

export function mouseReducer(state: MouseState = { current: null, mouseDown: false }, action: AnyAction) {
  switch (action.type) {
    case SET_MOUSE_POS:
      return {
        ...state,
        current: action.payload,
      };
    case MOUSE_DOWN:
      return {
        ...state,
        mouseDown: true,
      };
    case MOUSE_UP:
      return {
        ...state,
        mouseDown: false,
      };
    default:
      return state;
  }
}

export default combineReducers<MapStore>({
  map: mapReducer,
  mouse: mouseReducer,
});
