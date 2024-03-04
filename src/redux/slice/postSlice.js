import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const getToken = () => {
    return localStorage.getItem('token');
};

export const postApiData = createAsyncThunk(
    'posts/postApiData',
    async ({ apiUrl, postData }, { getState }) => {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const response = await axios.post(apiUrl, postData, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        status: 'idle',
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postApiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postApiData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;


                toast.success(action.payload);
            })
            .addCase(postApiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;

                // Handle API error response here
                // You can access the error message from action.error.message
                console.error('API Error:', action.error.message);

                // Check for specific error conditions and display corresponding toast messages
                if (action.error.response && action.error.response.status === 400) {
                    const errorMessage = action.error.response.data.message;
                    if (errorMessage.includes("emailid") || errorMessage.includes("phone number") || errorMessage.includes("emp already exist")) {
                        toast.error(`Error occurred during user registration: ${errorMessage}`);
                    } else {
                        toast.error("An unexpected error occurred.");
                    }
                } else {
                    toast.error("An unexpected error occurred.");
                }
            });
    },
});

export default postSlice.reducer;
