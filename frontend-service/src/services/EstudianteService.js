import axios from 'axios';

const ESTUDIANTE_API_URL = "http://localhost:8080/estudiante/";

class EstudianteService {

    getEstudiantes(){
        return axios.get(ESTUDIANTE_API_URL);
    }

    createEstudiante(estudiante){
        return axios.post(ESTUDIANTE_API_URL, estudiante);
    }

    getEstudianteByRut(rut){
        return axios.get(ESTUDIANTE_API_URL + rut);
    }
}

export default new EstudianteService()