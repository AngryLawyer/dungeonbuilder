import { AnyAction, combineReducers } from 'redux';
import { MapData } from './map/types';

export type Store = Readonly<{
  map: MapData,
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

export function mapReducer(state: MapData = map, action: AnyAction){
  return state;
}

export default combineReducers<Store>({
  map: mapReducer,
});
