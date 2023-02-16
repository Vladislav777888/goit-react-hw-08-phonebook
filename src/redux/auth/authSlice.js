import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './auth.operations';
import { STATUS } from 'constants';

export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
  status: STATUS.idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status = STATUS.success;
      })
      .addCase(register.rejected, state => {
        state.status = STATUS.error;
      })
      .addCase(logIn.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status = STATUS.success;
      })
      .addCase(logIn.rejected, state => {
        state.status = STATUS.error;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.status = STATUS.idle;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = STATUS.success;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
