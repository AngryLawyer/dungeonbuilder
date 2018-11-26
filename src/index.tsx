import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

import 'foundation-sites/dist/css/foundation-float.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
