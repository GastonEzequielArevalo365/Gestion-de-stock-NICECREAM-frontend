import {HiHome} from "react-icons/hi"
import {FaBoxes,FaThLarge} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom"

const Navbar = ({busqueda,setBusqueda})=>{
    return(
    <nav className="w-full md:w-auto bg-white shadow-md text-gray-700">
      <div className="mx-auto px-4 py-3 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-3">
            <img
            src ="public/logo.png"
            alt ="Logo"
            className="h-10 w-20 md:h-12 md:w-24"
            />
            <h1 className="text-lg md:text-xl">Control de stock</h1>
        </div>
        <div>
            <input 
                className="border rounded-full px-5 py-2 w-full max-w-sm md:w-[600px] hover:scale-110 transition-transform"
                type="text"
                placeholder="Buscar por nombre o ID de la máquinas"
                value={busqueda}
                onChange = {(e) => setBusqueda(e.target.value)}
            />
        </div>
        <ul className="flex gap-6 hover:scale-110 transition-transform justify-center">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 flex items-center gap-x-2 hover:border rounded-full px-3 border-gray-400"
            >
              <HiHome />
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/stock"
              className="hover:text-gray-900 flex items-center gap-x-2 hover:border rounded-full px-3 border-gray-400"
            >
              <FaBoxes/>
              Stock
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;