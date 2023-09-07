import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: '',
  isAuthentication: true,
  authLoading: false,
};

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.authLoading = false;
      state.isAuthentication = true;
    },

    loadUser: (state, action) => {
      state.user = action.payload.user;
      state.authLoading = false;
      state.isAuthentication = action.payload.isAuthentication;
    },

    logout: (state, action) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = '';
      state.authLoading = false;
      state.isAuthentication = false;
    },
  },
  extraReducers: {},
});

export const { setToken, logout, loadUser } = authSlicer.actions;
export default authSlicer.reducer;
