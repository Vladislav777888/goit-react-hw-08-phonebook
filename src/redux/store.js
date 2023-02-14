import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitState } from './contacts/contactsSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterInitState } from './filter/filterSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import { authInitialState } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
  auth: authInitialState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
