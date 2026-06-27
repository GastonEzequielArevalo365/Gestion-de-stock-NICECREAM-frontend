import Navbar from "../components/components/Navbar"
import { FaFilter, FaAngleDown } from "react-icons/fa"
import CardStock from "../components/components/CardStock";
import { useEffect, useState } from "react"
import { getMaquinas } from "../services/maquinas.service";

const Stock = () => {

    const [maquinas, setMaquinas] = useState([]);
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        const cargarMaquinas = async () => {
            const maquinas = await getMaquinas()
            setMaquinas(maquinas)
        }
        cargarMaquinas()
    }, [])

    const maquinasFiltradas = maquinas.filter((m) =>
        m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        m.id.toString().includes(busqueda)
    )

    return (
        <>
            <Navbar busqueda={busqueda} setBusqueda={setBusqueda} />

            <div className="w-full bg-gray-100 shadow-md py-6 px-15 text-gray-700 font-bold">
                <div className="flex items-center gap-x-10  mb-8">
                    <img
                        src="public/logo.png"
                        alt="Logo"
                        className="h-15 w-25"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">
                            INVENTARIO
                        </h2>
                        <h2 className="text-xl text-gray-700">
                            Vista completa del stock en depósito    
                        </h2>
                    </div>
                </div>
                <div>
                    {maquinasFiltradas.map((maquina) => (
                        <div
                            key={maquina.id}
                            className="py-6 hover:scale-105 transition-transform cursor-pointer"
                        >
                            <CardStock
                                nombre={maquina.nombre}
                                codigo={maquina.id}
                                descripcion={maquina.categoria}
                                cantidad = {maquina.cantidad}
                                alto = {maquina.alto}
                                ancho = {maquina.ancho}
                                peso={maquina.peso}
                                imagen={`http://192.168.1.43:3001/uploads/${maquina.imagen}`}
                                onEdit={() => console.log("Editar")}
                                onDelete={() => console.log("Eliminar")}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Stock