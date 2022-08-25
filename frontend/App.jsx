import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../frontend/components/pages/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Students from './components/pages/students/Student';
import Teachers from './components/pages/teacher/Teacher';
import AllCategories from './components/pages/Trader/AllCategories';
import AllRooms from './components/pages/Trader/AllRooms';
import NewRoomForm from './components/pages/Trader/NewRoomForm';
import UpdateRoomForm from './components/pages/Trader/UpdateRoomForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/student-page' element={<Students />} />
                <Route path='/teacher-page' element={<Teachers />} />
                <Route path='/categories' element={<AllCategories />} />
                <Route path='/rooms' element={<AllRooms />} />
                <Route path='/add-room' element={<NewRoomForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;