import { AnyAction, combineReducers } from 'redux';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  TOGGLE_CELL
} from './actions';
import { GridRef, MapData } from './map/types';
import { gridRefToIndex } from './map/utils';

export type Store = Readonly<{
  map: MapData,
  modal: boolean,
}>;

function repeat<T>(limit:number, item: T): T[] {
  const data = [];
  let index = 0;
  while (index < limit) {
    data.push(item);
    ++index;
  }
  return data;
}

const cellData = repeat(100, true);
cellData[5] = false;
cellData[6] = false;
cellData[16] = false;

const map: MapData = {
  cells: cellData,
  height: 10,
  width: 10,
}

export function mapReducer(state: MapData = map, action: AnyAction) {
  switch (action.type) {
    case TOGGLE_CELL:
      const cellRef: GridRef = action.payload;
      const index = gridRefToIndex(cellRef, state);
      return {
        ...state,
        cells: state.cells.map((cell, cellIndex) => {
          if (index === cellIndex) {
            return !cell;
          }
          return cell;
        })
      }
    default:
      return state;
  }
}

export function modalReducer(state: boolean = false, action: AnyAction) {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}

export default combineReducers<Store>({
  map: mapReducer,
  modal: modalReducer,
});
