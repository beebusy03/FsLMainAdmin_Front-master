import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './redux/store'
import ErrorBoundary from './ErrorBoundary';
const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(
    <ErrorBoundary>

        <React.Fragment>
            <Provider store={store}>
                <App />
                <ToastContainer />
            </Provider>
        </React.Fragment>
    </ErrorBoundary>

);
