import Navbar from '../components/components/Navbar'
import { FaLayerGroup, FaClock, FaArrowRight, FaCube } from "react-icons/fa";
import { TbRoute } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { MdInventory2 } from "react-icons/md";
import { useEffect, useState } from "react";
import { getRacks } from "../services/racks.service"
import { getCalles } from "../services/calles.service"
import { getPallets } from "../services/pallets.service"
import { getMaquinas } from "../services/maquinas.service"

const Home = () => {
    //Use state es un Hook de react que te permite guardar datos (estados) dentro de un componente funcional.
    //Y hacer que la interfaz se vuelva a renderizar cuando estos datos cambian.
    //Es importante importarlo antes de usarlo.

    //Use state para cantidades en el dashboard
    //cantidadRacks --> Es el valor actual del estado.
    //setCantidadRacks --> Función para modificar ese estado.
    //useState(0) --> Crea el estado con valor inicial 0
    const [cantidadRacks, setCantidadRacks] = useState(0)
    const [cantidadCalles, setCantidadCalles] = useState(0)
    const [cantidadPallets, setCantidadPallets] = useState(0)
    const [cantidadMaquinas, setCantidadMaquinas] = useState(0)

    //Use state para filtro de máquinas
    const [maquinas, setMaquinas] = useState([]);
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        const cargarDashboard = async () => {
            const racks = await getRacks()
            const calles = await getCalles()
            const pallets = await getPallets()
            const maquinas = await getMaquinas()

            setCantidadRacks(racks.length)
            setCantidadCalles(calles.length)
            setCantidadPallets(pallets.length)
            setCantidadMaquinas(maquinas.length)
            setMaquinas(maquinas)
        }
        cargarDashboard()
    }, []);

    const maquinasFiltradas = maquinas.filter((maquina) =>
        maquina.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        maquina.id.toString().includes(busqueda)
    )

    return (
        <>
            <Navbar busqueda={busqueda} setBusqueda={setBusqueda} />
            <div className="w-full bg-gray-100 py-8 px-4 md:px-15">
                <div className="flex items-center gap-3">
                    <img
                        src="public/logo.png"
                        alt="Logo"
                        className="h-10 w-16 md:h-15 md:w-25"
                    />
                    <div>
                        <h2 className="text-lg md:text-xl text-gray-700">
                            NICECREAM
                        </h2>
                        <h2 className="text-sm md:text-xl text-gray-700">
                            Panel de Control - Depósito
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-red-500 text-3xl mb-2">
                            <FaLayerGroup></FaLayerGroup>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">{cantidadRacks}</h2>
                            <span className="text-gray-700">Racks</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-blue-500 text-3xl mb-2">
                            <TbRoute></TbRoute>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">{cantidadCalles}</h2>
                            <span className="text-gray-700">Calles</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-yellow-500 text-3xl mb-2">
                            <BsBoxSeam></BsBoxSeam>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">{cantidadPallets}</h2>
                            <span className="text-gray-700">Pallets</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-green-500 text-3xl">
                            <MdInventory2></MdInventory2>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">{cantidadMaquinas}</h2>
                            <span className="text-gray-700">Máquinas</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <span className="text-gray-700 font-bold flex items-center gap-x-2"><FaClock></FaClock>Ubicación de máquinas</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
                    {maquinasFiltradas.slice(0,6).map((maquina) => (
                        <div
                            key={maquina.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform flex gap-4"
                        >
                            <div className="w-24 h-24 bg-gray-200 rounded-3xl overflow-hidden flex-shrink-0">
                                <img
                                    src={`http://192.168.1.33:3001/uploads/${maquina.imagen}`}
                                    alt={maquina.nombre}
                                    className="w-full h-full "
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-700">
                                    {maquina.nombre}
                                </h2>

                                <p className="text-sm text-gray-500 mb-3">
                                    ID: {maquina.id}
                                </p>

                                <div className="grid grid-cols-2 gap-2 text-sm">

                                    <div className="bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-center">
                                        {maquina.pallet?.nombre ?? "Sin pallet"}
                                    </div>

                                    <div className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-center">
                                        Rack {maquina.pallet?.rack?.numero ?? "-"}
                                    </div>

                                    <div className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-center">
                                        Fila {maquina.pallet?.fila ?? "-"}
                                    </div>

                                    <div className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-center">
                                        Columna {maquina.pallet?.columna ?? "-"}
                                    </div>

                                    <div className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-center">
                                        Calle {maquina.pallet?.rack?.calle?.numero ?? "-"}
                                    </div>

                                    <div className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-center">
                                        Lado {maquina.pallet?.rack?.lado ?? "-"}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;