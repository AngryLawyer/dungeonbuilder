import { createStore } from 'redux';
import reducers, { Store } from './reducers';

export default createStore<Store, any, {}, {}>(reducers);
