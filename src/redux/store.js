// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slice/postSlice';
import putData from './slice/putSlice';
import getData from './slice/dataSlice.js';
import pdfdownload from './slice/PdfSlice.js';
import sectionListSlice from './slice/sectionSlice.js';
import dataReducer from './slice/dataSlice.js';
import userRegistrationSlice from './slice/userRegistration.js';

const store = configureStore({
    reducer: {
        posts: postReducer,
        put: putData,
        pdfdownload: pdfdownload,
        get: getData,
        sectionList: sectionListSlice,
        data: dataReducer,
        userRegistrationInfo: userRegistrationSlice,
        },
});

export default store;
