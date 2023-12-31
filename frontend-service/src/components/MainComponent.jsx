import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/listas.css";
//import "../styles/subir_excel.css";
import "../styles/navbar.css";
import "../styles/agregar.css";
import "../styles/navbar.css";
import Agregar from "../images/agregar-estudiante.png"
import Estudiantes from "../images/estudiantes.png"
import ListaCuotas from "../images/plan-de-estudios.png"
import Cuota from "../images/grafico-circular.png"
import HeaderComponent from "./Headers/HeaderComponent";
import Pago from "../images/registrar-pago.png"

function MainComponents() {
    const navigate = useNavigate();
    const handleClickAgregarEstudiante = () => {
        navigate("/agregar_estudiante");
    };
    const handleClickListaEstudiantes = () => {
        navigate("/lista_estudiantes");
    }
    const handleClickGenerarCuotas = () => {
        navigate("/generar_cuotas");
    };
    const handleClickListaCuotas = () => {
        navigate("/listado_cuotas");
    };
    const handleClickRegistroPago = () => {
        navigate("/registrar_pago");
    }
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div className="container_main">
                <div className="card" onClick={handleClickAgregarEstudiante}>
                    <img id="agregar_estudiante" src={Agregar} alt="Imagen_1" />
                    <h2>Agregar estudiante</h2>
                </div>
                <div className="card" onClick={handleClickListaEstudiantes}>
                    <img id="lista_estudiantes" src={Estudiantes} alt="Imagen_2" />
                    <h2>Listado de Estudiantes</h2>
                </div>
                <div className="card" onClick={handleClickGenerarCuotas}>
                    <img id="generar_cuotas" src={Cuota} alt="Imagen_3" />
                    <h2>Generar Cuotas</h2>
                </div>
                <div className="card" onClick={handleClickListaCuotas}>
                    <img id="listado_cuotas" src={ListaCuotas} alt="Imagen_4" />
                    <h2>Listado Cuotas</h2>
                </div>
                <div className="card" onClick={handleClickRegistroPago}>
                    <img id="registrar_pago" src={Pago} alt="Imagen_5" />
                    <h2>Registrar Pago</h2>
                </div>
            </div>
        </div>
    );
}

export default MainComponents;