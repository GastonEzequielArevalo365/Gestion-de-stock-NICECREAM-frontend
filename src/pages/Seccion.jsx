import Navbar from "../components/components/Navbar"
import { useState } from "react";

const Seccion = () =>{
    const tabs = ["Racks", "Calles", "Pallets", "Maquinas"]
    const [activeTab, setActiveTab] = useState("Racks")
    return(
        <>
            <Navbar/>
            <div className="w-full bg-gray-100 shadow-md py-6 px-15 text-gray-700 font-bold">
                <div className="text-xl">
                    <h2 className="font-bold">
                        SELECCIONES DEL DEPOSITO
                    </h2>
                    <h2>
                        Gestioná la estructura de jerarquía: Rack → Calle → Pallet → Máquina
                    </h2>
                </div>
                <div className="rounded-2xl p-1 mt-15 flex bg-gray-200">
                    {
                        tabs.map(tab =>(
                            <button
                                key={tab}
                                onClick={()=>setActiveTab(tab)}
                                className={`
                                    flex-1 py-3 rounded-2xl transition-all
                                    ${activeTab === tab ?
                                        "bg-white shadow font-semibold"
                                        :"text-gray-500"}
                                `}
                            >
                                {tab}
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Seccion