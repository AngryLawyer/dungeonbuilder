import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mapStoreReducer, { MapStore } from './map/reducers';
import modalStoreReducer, { ModalStore } from './modals/reducers';

export type Store = Readonly<{
  form: any,
  map: MapStore,
  modal: ModalStore,
}>;

export default combineReducers<Store>({
  form: formReducer,
  map: mapStoreReducer,
  modal: modalStoreReducer,
});
