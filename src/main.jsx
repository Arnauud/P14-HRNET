import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use `react-dom/client`
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot()

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);