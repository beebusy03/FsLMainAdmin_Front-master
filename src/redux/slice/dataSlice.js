// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {
        setData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;
export const selectData = (state) => state.data;
export default dataSlice.reducer;
