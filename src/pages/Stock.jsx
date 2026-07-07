import Navbar from "../components/components/Navbar"
import { FaFilter, FaAngleDown } from "react-icons/fa"
import CardStock from "../components/components/CardStock";
import { useEffect, useState } from "react"
import { getMaquinas, importStock, deleteMaquina } from "../services/maquinas.service";
import { readExcelFile } from "../utils/excel"

const Stock = () => {

    const [maquinas, setMaquinas] = useState([]);
    const [busqueda, setBusqueda] = useState("")
    const [modalOpen, setModalOpen] = useState(false);

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

    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        if (!file) return;
        const maquinasExcel = await readExcelFile(file)
        await importStock(maquinasExcel)
        const maquinasActualizadas = await getMaquinas()
        setMaquinas(maquinasActualizadas)
        event.target.value = ""
    }

    return (
        <>
            <Navbar busqueda={busqueda} setBusqueda={setBusqueda} />
            <div className="w-full bg-gray-100 py-8 px-4 md:px-15">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <img
                            src="public/logo.png"
                            alt="Logo"
                            className="h-10 w-16 md:h-15 md:w-25"
                        />

                        <div>
                            <h2 className="text-lg md:text-xl text-gray-700">
                                INVENTARIO
                            </h2>
                            <h2 className="text-lg md:text-xl text-gray-700">
                                Stock en depósito
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <button>
                            + Nueva Máquina
                        </button>
                        <label className="cursor-pointer hover:scale-105 transition-transform bg-red-500 hover:bg-red-600 transition-colors text-white rounded-2xl py-2 px-4">
                            Importación masiva
                            <input
                                type="file"
                                accept=".xlsx,.xls"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
                    {maquinasFiltradas.map((maquina) => (
                        <div
                            key={maquina.id}
                            className="py-6 hover:scale-105 transition-transform cursor-pointer"
                        >
                            <CardStock
                                nombre={maquina.nombre}
                                codigo={maquina.id}
                                descripcion={maquina.categoria}
                                cantidad={maquina.cantidad}
                                alto={maquina.alto}
                                ancho={maquina.ancho}
                                peso={maquina.peso}
                                imagen={`http://192.168.1.33:3001/uploads/${maquina.imagen}`}
                                onEdit={() => console.log("Editar")}
                                onDelete={async () => {
                                    const confirmar = window.confirm(
                                        "¿Está seguro que desea eliminar esta máquina?"
                                    );

                                    if (!confirmar) return;
                                    await deleteMaquina(maquina.id);
                                    const maquinasActualizadas = await getMaquinas()
                                    setMaquinas(maquinasActualizadas)
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Stock