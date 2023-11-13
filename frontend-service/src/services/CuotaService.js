import axios from 'axios';

const CUOTAS_API_URL = "http://localhost:8080/cuota/";

class CuotaService {

    generarCuotas(rut){
        return axios.get(CUOTAS_API_URL + "generar/" + rut);
    }
    getCuotas(rut){
        return axios.get(CUOTAS_API_URL + rut);
    }

}
    
export default new CuotaService()