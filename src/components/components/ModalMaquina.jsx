import { useState } from "react";
import { createMaquina } from "../../services/maquinas.service";

const ModalMaquina = ({ modalOpen, modalClose,onSave }) => {

    const [formData, setFormData] = useState({
        nombre: "",
        cantidad: 0,
        alto: 0,
        ancho: 0,
        profundidad: 0,
        peso: 0,
        imagen: "",
        categoria: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) =>{
        await createMaquina(formData);
        onSave()
        modalClose()
    }

    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8">

                <h2 className="text-2xl font-bold text-gray-700 mb-6">
                    Nueva Máquina
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Nombre */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold text-gray-700">
                            Nombre
                        </label>

                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ingrese el nombre"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Categoría */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Categoría
                        </label>

                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            placeholder="Ingrese la categoría"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Cantidad */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Cantidad
                        </label>

                        <input
                            type="number"
                            name="cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Alto */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Alto (cm)
                        </label>

                        <input
                            type="number"
                            name="alto"
                            value={formData.alto}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Ancho */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Ancho (cm)
                        </label>

                        <input
                            type="number"
                            name="ancho"
                            value={formData.ancho}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Profundidad */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Profundidad (cm)
                        </label>

                        <input
                            type="number"
                            name="profundidad"
                            value={formData.profundidad}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Peso */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Peso (kg)
                        </label>

                        <input
                            type="number"
                            name="peso"
                            value={formData.peso}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Imagen */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold text-gray-700">
                            Imagen
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
                        />
                    </div>

                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8">

                    <button
                        onClick={modalClose}
                        className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                        onClick={handleSubmit}
                    >
                        Guardar
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ModalMaquina;