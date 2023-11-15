import React, { useState, useEffect } from "react";
import CuotaService from "../services/CuotaService";
import HeaderComponent from "./Headers/HeaderComponent";
import { useParams } from "react-router-dom";

function ListadoCuotasComponent(){

    const {rut} = useParams();
    const [cuotaEntity, setCuotaEntity] = useState([]);
    useEffect(() => {
        CuotaService.getCuotas(rut).then((res) => {
            setCuotaEntity(res.data);
        });
    }, [rut]);

    return(
        <div className="general">
            <HeaderComponent/>
            <div align="center" className="container-2">
                <h1><b>Listado de Cuotas</b></h1>
                <table border="1" className="content-table">
                    <thead>
                        <tr>
                            <th>RUT</th>
                            <th>Numero de cuota</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cuotaEntity.map((cuota) => (
                                <tr key= {cuota.id_cuota}>
                                    <td> {cuota.rut} </td>
                                    <td> {cuota.nro_cuota} </td>
                                    <td> {cuota.monto} </td>
                                    <td> {cuota.estado} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )  
}


export default ListadoCuotasComponent;