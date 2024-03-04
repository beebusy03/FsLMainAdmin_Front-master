import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const getToken = () => {
    return localStorage.getItem('token');
};

export const downloadPdf = createAsyncThunk(
    'posts/downloadPdf',
    async ({ pdfUrl }, { getState }) => {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            responseType: 'blob', // Set the response type to blob for downloading files
        };
        try {
            const response = await axios.get(pdfUrl, config);

            // Create a Blob from the PDF data
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Create a link element to trigger the download
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'downloaded_file.pdf';
            document.body.appendChild(a);
            a.click();

            // Cleanup
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            return 'Download successful';
        } catch (error) {
            throw error;
        }
    }
);

const PdfSlice = createSlice({
    name: 'posts',
    initialState: {
        status: 'idle',
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(downloadPdf.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(downloadPdf.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;

                toast.success(action.payload);
            })
            .addCase(downloadPdf.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;

                // Handle download error response here
                console.error('Download Error:', action.error.message);
                toast.error("An error occurred during PDF download.");
            });
    },
});

export default PdfSlice.reducer;
