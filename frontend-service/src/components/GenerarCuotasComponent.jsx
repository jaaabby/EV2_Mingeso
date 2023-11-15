import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Headers/HeaderComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import CuotaService from "../services/CuotaService";

function GenerarCuotasComponent() {
    const initialState = {
        rut: "",
    };

    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    };

    const changeRutHandler = (event) => {
        setInput({ ...input, rut: event.target.value });
    };

    const ingresarCuotas = (event) => {
        Swal.fire({
            title: "¿Desea generar las cuotas de este estudiante?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                CuotaService.generarCuotas(input.rut);
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "success",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                navigateHome();
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
                        <Button className="boton" onClick={ingresarCuotas}>
                            Generar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default GenerarCuotasComponent;