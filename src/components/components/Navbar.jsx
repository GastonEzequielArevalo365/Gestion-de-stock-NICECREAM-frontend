import {HiHome} from "react-icons/hi"
import {FaBoxes,FaThLarge} from "react-icons/fa";
import {useState} from "react";

const Navbar = ()=>{
    return(
    <nav className="top-0 left-0 w-full bg-white shadow-md z-50 text-gray-700 font-bold">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-5">
            <img
            src ="public/logo.png"
            alt ="Logo"
            className="h-10 w-20"
            />
            <h1 className="text-xl">Control de stock</h1>
        </div>
        <div>
            <input 
                className="border rounded-full px-5 py-2 w-150 hover:scale-110 transition-transform"
                type="text"
                placeholder="Buscar por nombre o ID de la máquinas" 
            />
        </div>
        <ul className="flex space-x-6 hover:scale-110 transition-transform">
          <li><a href="#" className="hover:text-gray-900 flex items-center gap-x-2 hover:border rounded-full px-3 border-gray-400"><HiHome/>Inicio</a></li>
          <li><a href="#" className="hover:text-gray-900 flex items-center gap-x-2 hover:border rounded-full px-3 border-gray-400"><FaBoxes/>Stock</a></li>
          <li><a href="#" className="hover:text-gray-900 flex items-center gap-x-2 hover:border rounded-full px-3 border-gray-400"><FaThLarge/>Secciones</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;