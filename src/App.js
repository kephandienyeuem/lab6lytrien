// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
    return ( <
        div >
        <
        header className = 'bg-gray-800 text-white p-4' >
        <
        nav className = 'flex justify-between' >
        <
        Link to = "/"
        className = 'font-bold' > Trang Chủ < /Link> <
        Link to = "/cart"
        className = 'font-bold' > Giỏ Hàng < /Link> <
        /nav> <
        /header> <
        Routes >
        <
        Route path = "/"
        element = { < Products / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        /Routes> <
        /div>
    );
}

export default App;