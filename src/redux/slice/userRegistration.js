// src/slice/userRegistration.js
import { createSlice } from '@reduxjs/toolkit';
let index = 0
let currentUser = 0;
const userRegistrationSlice= createSlice({
  name: 'userRegistrationInfo',
  initialState: {},
  reducers: {
    addData: (state, action) => {
        const { responce } = action.payload;
        state[index] = { responce };
        index++;
    },
    removeData: (state, action) => {
      const { delete_ind } = action.payload;
      delete state[delete_ind];
      index--;
    },
  },
});

export const { actions, reducer } = userRegistrationSlice;
export default reducer;