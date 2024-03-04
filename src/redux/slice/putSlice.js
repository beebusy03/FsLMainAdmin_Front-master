import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const putApiData = createAsyncThunk('put/putApiData', async ({ apiUrl, putData }) => {
    const response = await axios.put(apiUrl, putData);
    return response.data;
});

const putSlice = createSlice({
    name: 'posts',
    initialState: {
        status: 'idle',
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(putApiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(putApiData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                toast.success('Success');
            })
            .addCase(putApiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default putSlice.reducer;
