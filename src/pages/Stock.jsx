import Navbar from "../components/components/Navbar"
import {FaFilter,FaAngleDown  } from "react-icons/fa"
import CardStock from "../components/components/CardStock";

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
                <div>
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
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
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
                        <CardStock
                        nombre="ZB25"
                        codigo="103010011"
                        descripcion="Maquina de Hielo tipo Bala"
                        estado="En stock"
                        rack={1}
                        fila={1}
                        columna={0}
                        pallet ="Pallet 1AB"
                        imagen="public/ZB25.png"
                        onEdit ={() => console.log("Editar")}
                        onDelete ={() => console.log("Eliminar")}/>
                    </div>
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
                        <CardStock
                        nombre="POP 6AR"
                        codigo="107020002"
                        descripcion="Maquina Pochoclera"
                        estado="En stock"
                        rack={2}
                        fila={2}
                        columna={2}
                        pallet ="Pallet 1AB"
                        imagen="public/6AR.png"
                        onEdit ={() => console.log("Editar")}
                        onDelete ={() => console.log("Eliminar")}/>
                    </div>
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
                        <CardStock
                        nombre="TAIYAKI"
                        codigo="1060016"
                        descripcion="WAFLERA"
                        estado="En stock"
                        rack={3}
                        fila={4}
                        columna={2}
                        pallet ="Pallet 6AB"
                        imagen="public/TAIYAKI.png"
                        onEdit ={() => console.log("Editar")}
                        onDelete ={() => console.log("Eliminar")}/>
                    </div>
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
                        <CardStock
                        nombre="SKYLINE 1"
                        codigo="102010010"
                        descripcion="Maquina Granizadora"
                        estado="En stock"
                        rack={6}
                        fila={2}
                        columna={1}
                        pallet ="Pallet 1BA"
                        imagen="public/SKILINE1.png"
                        onEdit ={() => console.log("Editar")}
                        onDelete ={() => console.log("Eliminar")}/>
                    </div>
                    <div className="py-6 hover:scale-105 transition-transform cursor-pointer">
                        <CardStock
                        nombre="SELLADORA AUTOMATIC H3"
                        codigo="108010005"
                        descripcion="SELLADORA AUTOMÁTICA"
                        estado="En stock"
                        rack={1}
                        fila={1}
                        columna={2}
                        pallet ="Pallet 1AB"
                        imagen="public/H3.png"
                        onEdit ={() => console.log("Editar")}
                        onDelete ={() => console.log("Eliminar")}/>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Stock