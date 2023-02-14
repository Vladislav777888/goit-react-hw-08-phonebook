import { configureStore } from '@reduxjs/toolkit';

import { contactsInitState } from './contactsSlice';
import { contactsReducer } from './contactsSlice';
import { filterInitState } from './filterSlice';
import { filterReducer } from './filterSlice';

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
