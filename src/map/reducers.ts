import { AnyAction, combineReducers } from 'redux';
import { repeat } from '../utils';
import {
  MOUSE_DOWN,
  MOUSE_UP,
  SET_BRUSH,
  SET_CELLS,
  SET_MOUSE_POS,
  SET_TOOL,
} from './actions';
import { BrushType, GridRef, MapData, MouseState, ToolType } from './types';
import { gridRefToIndex } from './utils';

export type MapStore = Readonly<{
  brush: BrushType,
  tool: ToolType,
  map: MapData,
  mouse: MouseState,
}>;

const cellData = repeat(25 * 25, BrushType.WALL);

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
            return action.payload.brushType;
          }
          return cell;
        })
      }
    default:
      return state;
  }
}

export function mouseReducer(state: MouseState = { current: null, mouseDown: null }, action: AnyAction) {
  switch (action.type) {
    case SET_MOUSE_POS:
      return {
        ...state,
        current: action.payload,
      };
    case MOUSE_DOWN:
      return {
        ...state,
        mouseDown: action.payload,
      };
    case MOUSE_UP:
      return {
        ...state,
        mouseDown: null,
      };
    default:
      return state;
  }
}

export function brushReducer(state: BrushType = BrushType.FLOOR, action: AnyAction) {
  switch (action.type) {
    case SET_BRUSH:
      return action.payload;
    default:
      return state;
  }
}

export function toolReducer(state: ToolType = ToolType.BRUSH, action: AnyAction) {
  switch (action.type) {
    case SET_TOOL:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers<MapStore>({
  brush: brushReducer,
  map: mapReducer,
  mouse: mouseReducer,
  tool: toolReducer,
});
