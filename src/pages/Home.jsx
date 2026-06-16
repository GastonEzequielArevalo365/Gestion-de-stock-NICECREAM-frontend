import Navbar from '../components/components/Navbar'
import { FaLayerGroup, FaClock, FaArrowRight,FaCube } from "react-icons/fa";
import { TbRoute  } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { MdInventory2} from "react-icons/md";

const Home = ()=>{
    return(
        <>
            <Navbar/>
            <div className ="w-full bg-gray-100 shadow-md py-6 px-15">
                <div className="flex items-center gap-x-10">
                    <img 
                        src="public/logo.png" 
                        alt="Logo" 
                        className="h-15 w-25"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">
                            NICECREAM
                        </h2>
                        <h2 className="text-xl text-gray-700">
                            Panel de Control - Depósito
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 py-8">
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-red-500 text-3xl mb-2">
                            <FaLayerGroup></FaLayerGroup>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">0</h2>
                            <span className="text-gray-700">Racks</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-blue-500 text-3xl mb-2">
                            <TbRoute></TbRoute>
                        </div>  
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">0</h2>
                            <span className="text-gray-700">Calles</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-yellow-500 text-3xl mb-2">
                                <BsBoxSeam></BsBoxSeam>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">0</h2>
                            <span className="text-gray-700">Pallets</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-green-500 text-3xl">
                            <MdInventory2></MdInventory2>
                        </div> 
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">5</h2>
                            <span className="text-gray-700">Máquinas</span>
                        </div> 
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <span className="text-gray-700 font-bold flex items-center gap-x-2"><FaClock></FaClock>Ultimas máquinas agregadas</span>
                    <button className="flex items-center gap-x-2 text-red-500 font-bold cursor-pointer hover:scale-110 ml-auto">Ver todo <FaArrowRight ></FaArrowRight></button>
                </div>
                <div className="grid grid-cols-3 gap-5 py-5">
                    <div className="bg-white shadow-md rounded-lg h-27 p-2 hover:scale-105 transition-transform cursor-pointer flex items-center ">
                        <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center ">
                            <FaCube className="text-gray-500 text-4xl flex" />
                        </div>
                        <div className="text-l font-bold text-gray-700 p-1">
                            <h2>Maquina de Helado Soft BJH 289 SRE</h2>
                            <span  className="text-gray-500">Cod: 0101010026</span>
                            <div className="flex gap-4 py-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-500">En Stock</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500">C1 - R5 - F1 - C2</span>
                            </div>
                        </div>   
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-2 h-27 hover:scale-105 transition-transform cursor-pointer flex items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center ">
                            <FaCube className="text-gray-500 text-4xl flex" />
                        </div>
                        <div className="text-l font-bold text-gray-700 p-1">
                            <h2>Maquina de Hielo ZB25</h2>
                            <span  className="text-gray-500">Cod: 0103010011</span>
                            <div className="flex gap-4 py-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-500">En Stock</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500">C1 - R1 - F0 - C1</span>
                            </div>
                        </div>   
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-2 h-27 hover:scale-105 transition-transform cursor-pointer flex items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center ">
                            <FaCube className="text-gray-500 text-4xl flex" />
                        </div>
                        <div className="text-l font-bold text-gray-700 p-1">
                            <h2>Maquina de Hielo ZB50</h2>
                            <span  className="text-gray-500">Cod: 0103010002</span>
                            <div className="flex gap-4 py-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-500">Mantenimiento</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500">C1 - R2 - F1 - C2</span>
                            </div>
                        </div>  
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-2 h-27 hover:scale-105 transition-transform cursor-pointer flex items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center ">
                            <FaCube className="text-gray-500 text-4xl flex" />
                        </div>
                        <div className="text-l font-bold text-gray-700 p-1">
                            <h2>Maquina Granizadora XRJ15X3</h2>
                            <span  className="text-gray-500">Cod: 0102010003</span>
                            <div className="flex gap-4 py-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-500">Sin Stock</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500">C10 - R7 - F3 - C1</span>
                            </div>
                        </div>  
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-2 h-27 hover:scale-105 transition-transform cursor-pointer flex items-center    ">
                        <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center ">
                            <FaCube className="text-gray-500 text-4xl flex" />
                        </div>
                        <div className="text-l font-bold text-gray-700 p-1">
                            <h2>Maquina de Helado Soft 6240A</h2>
                            <span  className="text-gray-500">Cod: 0101010034</span>
                            <div className="flex gap-4 py-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-500">En stock</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500">C7 - R2 - F1 - C2</span>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="flex gap-32">
                    <button className="w-1/2 bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 hover:scale-105 transition-transform cursor-pointer">
                        + Nueva Máquina
                    </button>
                    <button className="w-1/2 bg-white text-black px-4 py-2 rounded-md font-semibold border border-gray-300 hover:bg-gray-100 hover:scale-105 transition-transform cursor-pointer">
                        Gestionar Secciones
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;