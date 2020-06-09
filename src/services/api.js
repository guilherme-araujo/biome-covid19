import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bioinfo.imd.ufrn.br/covid19-api/v1/',    
    //baseURL: 'http://localhost:5000/covid19-api/v1/',    
})

export default api;