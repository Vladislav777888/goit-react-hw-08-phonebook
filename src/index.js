import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { /*chakraThemePallets*/ theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'redux/store';

import { App } from 'components/App';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          {/* <ChakraProvider theme={chakraThemePallets}> */}
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
          {/* </ChakraProvider> */}
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
