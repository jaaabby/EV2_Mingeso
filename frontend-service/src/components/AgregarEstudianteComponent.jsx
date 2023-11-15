import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Headers/HeaderComponent";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import EstudianteService from "../services/EstudianteService";

function AgregarEstudianteComponent(props){

    const initialState = {
        rut: "",
        nombres: "",
        apellidos: "",
        fecha_nacimiento: "",
        tipo_colegio: "",
        nombre_colegio: "",
        anio_egreso: "",
        tipo_pago: "",
        cant_cuotas: "",
    };

    const [cuotasOptions, setCuotasOptions] = useState([
        { value: "0", label: "0"},
    ]);
    const updateCuotasOptions = (tipoPago, tipoColegio) => {
        let nuevasOpciones = [{value: "0", label: "0"}];
        if (tipoPago === "CONTADO"){
            nuevasOpciones = [{value: "0", label: "0"}];
        } else if (tipoPago === "CUOTAS"){
            if(tipoColegio === "MUNICIPAL"){
                nuevasOpciones = Array.from({length: 9}, (_, index) => ({ value: (index + 2).toString(), label: (index + 2).toString() }));
            } else if (tipoColegio === "SUBVENCIONADO") {
                nuevasOpciones = Array.from({ length: 6 }, (_, index) => ({ value: (index + 2).toString(), label: (index + 2).toString() }));
            } else if (tipoColegio === "PRIVADO"){
                nuevasOpciones = Array.from({ length: 3 }, (_, index) => ({ value: (index + 2).toString(), label: (index + 2).toString() }));
            }
        }
        setCuotasOptions(nuevasOpciones);
    }
    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    
    const changeTipoPagoHandler = event => {
        const tipoPagoValue = event.target.value;
        setInput({ ...input, tipo_pago: tipoPagoValue });
        updateCuotasOptions(tipoPagoValue, input.tipo_colegio);
    };
    const changeTipoColegioHandler = event => {
        const tipoColegioValue = event.target.value;
        setInput({ ...input, tipo_colegio: tipoColegioValue });
        updateCuotasOptions(input.tipo_pago, tipoColegioValue);
    };
    const changeRutHandler = event => {
        setInput({ ...input, rut: event.target.value });
    };
    const changeNombresHandler = event => {
        setInput({ ...input, nombres: event.target.value });
    };
    const changeApellidoHandler = event => {
        setInput({ ...input, apellidos: event.target.value });
    };
    const changeFechaNacimientoHandler = event => {
        setInput({ ...input, fecha_nacimiento: event.target.value });
    };
    const changeAnioEgresoIDHandler = event => {
        setInput({ ...input, anio_egreso: event.target.value });
    };
    const changeNombreColegioHandler = event => {
        setInput({ ...input, nombre_colegio: event.target.value });
    };
    const changeCantCuotasHandler = event => {
        setInput({ ...input, cant_cuotas: event.target.value });
    };

    
    const ingresarEstudiante = (event) => {
        Swal.fire({
            title: "¿Desea registrar el estudiante?",
            text: "No podra cambiarse en caso de equivocación",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(input.title);
                let newEstudiante = {
                    rut: input.rut,
                    nombres: input.nombres,
                    apellidos: input.apellidos,
                    fecha_nacimiento: input.fecha_nacimiento,
                    tipo_colegio: input.tipo_colegio,
                    nombre_colegio: input.nombre_colegio,
                    anio_egreso: input.anio_egreso,
                    tipo_pago: input.tipo_pago,
                    cant_cuotas: input.cant_cuotas,
                };
                console.log(newEstudiante);
                EstudianteService.createEstudiante(newEstudiante);
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "success",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                      },
                    })
                navigateHome();
            }
        });
    };

    return(
        <div className="general">
            <HeaderComponent />
            <div className="container-create">
                <Form>
                    <Form.Group className="mb-3" controlId="rut" value = {input.rut} onChange={changeRutHandler}>
                        <Form.Label className="agregar">Rut:</Form.Label>
                        <Form.Control className="agregar" type="text" name="rut"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nombres" value = {input.nombres} onChange={changeNombresHandler}>
                        <Form.Label className="agregar">Nombres:</Form.Label>
                        <Form.Control className="agregar" type="text" name="nombres"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellidos" value = {input.apellido} onChange={changeApellidoHandler}>
                        <Form.Label className="agregar">Apellidos:</Form.Label>
                        <Form.Control className="agregar" type="text" name="apellidos"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fecha_nacimiento" value = {input.fecha_nacimiento} onChange={changeFechaNacimientoHandler}>
                        <Form.Label className="agregar">Fecha de Nacimiento:</Form.Label>
                        <Form.Control className="agregar" type="date" name="fecha_nacimiento"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="anio_egreso" value = {input.anio_egreso} onChange={changeAnioEgresoIDHandler}>
                        <Form.Label className="agregar">Año de egreso del colegio:</Form.Label>
                        <Form.Control className="agregar" type="number" name="anio_egreso"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tipo_colegio">
                        <Form.Label className="agregar"> Tipo de colegio: </Form.Label>
                        <select className="agregar" name="tipo_colegio" required value = {input.tipo_colegio} onChange={changeTipoColegioHandler}>
                            <option value="0" disabled>Tipo colegio</option>
                            <option value="MUNICIPAL">MUNICIPAL</option>
                            <option value="SUBVENCIONADO">SUBVENCIONADO</option>
                            <option value="PRIVADO">PRIVADO</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nombre_colegio" value = {input.nombre_colegio} onChange={changeNombreColegioHandler}>
                        <Form.Label className="agregar">Nombre del colegio:</Form.Label>
                        <Form.Control className="agregar" type="text" name="nombre_colegio"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tipo_pago">
                        <Form.Label className="agregar"> Tipo de pago: </Form.Label>
                        <select className="agregar" name="tipo_pago" required value = {input.tipo_pago} onChange={changeTipoPagoHandler}>
                            <option value="0" disabled>Tipo pago</option>
                            <option value="CONTADO">CONTADO</option>
                            <option value="CUOTAS">CUOTAS</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cant_cuotas">
                        <Form.Label className="agregar"> Cantidad de cuotas: </Form.Label>
                        <select className="agregar" name="cant_cuotas" required value = {input.cant_cuotas} onChange={changeCantCuotasHandler}>
                            {cuotasOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </Form.Group>
                    <Button className="boton" onClick={ingresarEstudiante}>Registrar estudiante</Button>
                </Form>
            </div>
        </div>
    )
}
    export default AgregarEstudianteComponent;