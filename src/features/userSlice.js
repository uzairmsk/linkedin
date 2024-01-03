//userSlice.js
import {createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
      name: "user",
      initialState: {
        user: null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
        // console.log(action);
    },
    logout: (state) => {
      state.user = null;
  },
  },
});
export const { login, logout } = userSlice.actions;

//Selector: allows to pull information from data layer
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
