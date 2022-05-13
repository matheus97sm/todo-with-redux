import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Global from 'global';
import App from './App';

import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Global />
      <App />
    </PersistGate>
  </Provider>
);
