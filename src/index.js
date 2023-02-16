import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

import { persistor, store } from 'redux/store';

import { App } from 'components/App';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <ChakraProvider>
            <BrowserRouter basename="goit-react-hw-08-phonebook">
              <App />
              <ToastContainer />
            </BrowserRouter>
          </ChakraProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
