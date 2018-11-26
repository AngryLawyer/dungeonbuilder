import { AnyAction, combineReducers } from 'redux';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from './actions';
import mapStoreReducer, { MapStore } from './map/reducers';

export type Store = Readonly<{
  modal: boolean,
  map: MapStore
}>;

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
  map: mapStoreReducer,
  modal: modalReducer,
});
