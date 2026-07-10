import api from "./api"

export const getMaquinas = async () =>{
    const response = await api.get("/maquinas")
    return response.data
}

export const importStock = async (excelData) => {
    await api.post("/maquinas/import", excelData)
}

export const deleteMaquina = async (id) =>{
    await api.delete(`/maquinas/${id}`)
}

export const createMaquina = async (maquina) =>{
    const response = await api.post("/maquinas",maquina)
    return response.data
}