import { MdImageNotSupported } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const CardStock = ({
    nombre,
    codigo,
    descripcion,
    cantidad,
    alto,
    ancho,
    peso,
    imagen,
    onDelete,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md flex items-center gap-4 md:gap-8 w-full px-3 md:px-5 py-3 md:py-4">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                {imagen ? (
                    <img
                        src={imagen}
                        alt={nombre}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <MdImageNotSupported className="text-5xl md:text-7xl text-gray-300" />
                )}
            </div>
            <div className="flex-1">
                <div className="flex items-center">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-700">
                        {nombre}
                    </h2>

                    <button
                        onClick={onDelete}
                        className="ml-auto text-lg md:text-xl cursor-pointer hover:text-red-500 transition-colors"
                    >
                        <FaTrash />
                    </button>
                </div>
                <p className="text-gray-500 text-sm md:text-base mt-1">
                    ID: {codigo}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4 py-1">
                    <span className="bg-gray-100 text-green-500 px-3 py-1 md:px-5 md:py-2 rounded-2xl text-sm md:text-base font-semibold">
                        Cantidad: {cantidad}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 md:px-5 md:py-2 rounded-2xl text-sm md:text-base">
                        Alto: {alto} CM
                    </span>
                    <span className="bg-gray-100 px-3 py-1 md:px-5 md:py-2 rounded-2xl text-sm md:text-base">
                        Ancho: {ancho} CM
                    </span>
                    <span className="bg-gray-100 px-3 py-1 md:px-5 md:py-2 rounded-2xl text-sm md:text-base">
                        Peso: {peso} KG
                    </span>
                </div>
                <p className="text-gray-500 text-sm md:text-lg">
                    {descripcion}
                </p>

            </div>

        </div>
    );
};

export default CardStock;