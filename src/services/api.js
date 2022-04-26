import axios from "axios";

const api = axios.create({
    baseURL: `https://tattoostudioo.herokuapp.com`
})

export default api; 