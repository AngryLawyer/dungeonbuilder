import { combineReducers } from 'redux';
import mapStoreReducer, { MapStore } from './map/reducers';
import modalStoreReducer, { ModalStore } from './modals/reducers';

export type Store = Readonly<{
  modal: ModalStore,
  map: MapStore
}>;

export default combineReducers<Store>({
  map: mapStoreReducer,
  modal: modalStoreReducer,
});
