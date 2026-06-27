import {MdImageNotSupported} from "react-icons/md"
import {FaTrash,FaMapMarkerAlt} from "react-icons/fa"

const CardStock = ({
    nombre,
    codigo,
    descripcion,
    cantidad,
    alto,
    ancho,
    peso,
    imagen,
    onEdit,
    onDelete
}) => {
    return(
        <div className="bg-white rounded-lg shadow-md flex items-center overflow-hidden gap-10 w-full">
            <div className="w-30 h-30 bg-gray-100 flex items-center justify-center">
                {
                    imagen ? (
                    <img src={imagen} alt={nombre} />
                    ):(
                        <MdImageNotSupported className="text-7xl text-gray-300" />
                    )
                }   
            </div>
            <div>
                <div className="flex items-center gap-4 py-3">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {nombre}
                    </h2>
                    <span className= "px-4 py-1 rounded-full font-semibold">
                        {descripcion}
                    </span>
                    <div className="flex gap-6 ext-2xl">
                        <button onClick={onDelete} className="cursor-pointer hover:text-red-500">
                            <FaTrash /> 
                        </button>
                    </div>  
                </div>
                <p className="text-gray-500 text-1xl">
                        ID:{codigo}
                </p>
                <div className="flex gap-4 py-2">
                    <span className="bg-gray-100 text-green-500 px-5 py-2 rounded-2xl font-semibold flex items-center gap-2">
                        Cantidad: {cantidad} 
                    </span>
                    <span className="bg-gray-100 px-5 py-2 rounded-2xl">
                        Alto: {alto} CM
                    </span>

                    <span className="bg-gray-100 px-5 py-2 rounded-2xl">
                        Ancho:{ancho} CM
                    </span>

                    <span className="bg-gray-100 px-5 py-2 rounded-2xl">
                        Peso: {peso} KG
                    </span>

                </div>
                <div className="py-2">
                    <p className="text-gray-500 text-xl">
                    {descripcion}
                    </p>
                </div> 
            </div>
        </div>
    )   
}

export default CardStock