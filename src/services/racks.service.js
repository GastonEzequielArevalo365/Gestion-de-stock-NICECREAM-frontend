import api from "./api"

export const getRacks = async () =>{
    const response = await api.get("/racks");
    return response.data
}

