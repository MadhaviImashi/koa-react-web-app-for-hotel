import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../frontend/components/pages/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import AllCategories from './components/pages/Trader/AllCategories';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/categories' element={<AllCategories />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;