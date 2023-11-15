import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CuotaService from "../services/CuotaService";
import HeaderComponent from "./Headers/HeaderComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function BuscarCuotasComponent(){
    const initialState = {
        rut: "",
    };

    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const navigateList = (rut) => {
        navigate("/listado_cuotas/" + rut);
    };

    const changeRutHandler = (event) => {
        setInput({ ...input, rut: event.target.value });
        console.log(input.rut);
    };

    const ingresarRut = (event) => {
        Swal.fire({
            title: "¿Desea consultar el estudiante?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if(result.isConfirmed){
                console.log("rut: " + input.rut + "\n");
                CuotaService.getCuotas(input.rut);
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "succes",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                navigateList(input.rut);
            }
        });
    };

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div class="contenedor">
                <div class="Alinear">
                    <Form>
                        <Form.Group className="mb-3" controlId="rut" value={input.rut} onChange={changeRutHandler}>
                            <Form.Label className="agregar">Rut:</Form.Label>
                            <Form.Control className="agregar" type="text" name="rut" />
                        </Form.Group>
                        <Button className="boton" onClick={ingresarRut}>
                            Consultar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default BuscarCuotasComponent;