import api from "./api"

export const getPallets = async () =>{
    const response = await api.get("/pallets")
    return response.data
}