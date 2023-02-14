import { createSlice } from '@reduxjs/toolkit';

export const filterInitState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    contactsSearchAction(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { contactsSearchAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
