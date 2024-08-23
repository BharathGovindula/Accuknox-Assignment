import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './index.css';

// Find the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

