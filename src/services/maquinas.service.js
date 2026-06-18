import api from "./api"

export const getMaquinas = async () =>{
    const response = await api.get("/maquinas")
    return response.data
}