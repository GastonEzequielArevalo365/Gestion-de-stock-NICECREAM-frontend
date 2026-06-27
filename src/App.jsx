import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Stock from './pages/Stock'

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/stock" element={<Stock/>} />
        </Routes>
    )
}