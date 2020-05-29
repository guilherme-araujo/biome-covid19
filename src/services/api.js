import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bioinfo.imd.ufrn.br/covid19-api/v1/',    
})

export default api;