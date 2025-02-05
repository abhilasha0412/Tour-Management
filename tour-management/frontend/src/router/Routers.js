

import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'


import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import SearchResultList from '../pages/SearchResultList';

const Routers = ( ) =>{
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/tour" element={<Tour/>}/>
            <Route path="/tour/:id" element={<TourDetails/>}/>
            <Route path="/login " element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/tour/search" element={<SearchResultList/>}/>
        </Routes>
    )
};

export default Routers;