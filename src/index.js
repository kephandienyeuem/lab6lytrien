import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/CartContext';
import './index.css';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    BrowserRouter >
    <
    CartProvider >
    <
    App / >
    <
    /CartProvider> <
    /BrowserRouter>
);

reportWebVitals();