// src/slice/sectionListSlice.js
import { createSlice } from '@reduxjs/toolkit';
let index = 0
const sectionListSlice = createSlice({
    name: 'sectionList',
    initialState: {},
    reducers: {
        addList: (state, action) => {
            const { fileNo, list, no_of_parcel } = action.payload;
            state[index] = { fileNo, list, no_of_parcel };
            index++;
        },
        removeList: (state, action) => {
            const { delete_ind } = action.payload;
            delete state[delete_ind];
            index--;
        },
    },
});

export const { actions, reducer } = sectionListSlice;
export default reducer;