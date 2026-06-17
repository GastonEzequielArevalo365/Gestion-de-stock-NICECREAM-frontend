import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Stock from './pages/Stock'
import Seccion from './pages/Seccion'

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/stock" element={<Stock/>} />
            <Route path="/seccion" element={<Seccion/>}/>
        </Routes>
    )
}