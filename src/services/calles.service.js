import api from "./api"


export const getCalles = async() =>{
    const response = await api.get("/calles")
    return response.data
}