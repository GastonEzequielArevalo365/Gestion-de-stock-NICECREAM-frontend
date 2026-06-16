import Navbar from "../components/components/Navbar"
import {FaFilter,FaAngleDown  } from "react-icons/fa"
import CardStock from "../components/CardStock";

const Stock = ()=>{
    return(
        <>
            <Navbar/>
            <div className="w-full bg-gray-100 shadow-md py-6 px-15 text-gray-700 font-bold">
                <div className="text-xl">
                    <h2 className="font-bold">
                        INVENTARIO
                    </h2>
                    <h2>
                        Vista completa del stock en depósito
                    </h2>
                </div>
                <div className="py-10 flex gap-20">
                    <input 
                        className="py-2 border rounded-full px-5 w-200 hover:scale-110 transition-transform font-bold"
                        type="text"
                        placeholder="Filtrar por nombre o Código de máquina.." 
                    />
                    <div className="flex gap-4">
                        <button className="flex items-center justify-between bg-white px-6 py-2 rounded-2xl shadow-sm border border-gray-200">
                           <div className="flex items-center gap-2">
                                <FaFilter></FaFilter>
                                <span>Todos</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="inline-flex rounded-full px-3 py-1 bg-gray-200">
                    Últimas 5 máquinas vistas
                </div>
                <div className="py-6">
                    <CardStock
                    nombre="BJH289 SRE"
                    codigo="0100200100"
                    descripcion="Maquina de Helado Soft"
                    estado="En stock"
                    rack={1}
                    fila={2}
                    columna={1}
                    pallet ="Pallet 1BA"
                    imagen="public/BJH289.png"
                    onEdit ={() => console.log("Editar")}
                    onDelete ={() => console.log("Eliminar")}/>
                </div>
            </div>
            
        </>
    );
}

export default Stock