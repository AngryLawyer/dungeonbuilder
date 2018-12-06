import { AnyAction, combineReducers } from 'redux';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from './actions';
import { CurrentModal } from './types';

export type ModalStore = Readonly<{
  currentModal: CurrentModal;
}>;

export function currentModalReducer(state: CurrentModal = CurrentModal.CLOSED, action: AnyAction) {
  switch (action.type) {
    case OPEN_MODAL:
      return CurrentModal.OPEN;
    case CLOSE_MODAL:
      return CurrentModal.CLOSED;
    default:
      return state;
  }
}

export default combineReducers<ModalStore>({
  currentModal: currentModalReducer,
});
