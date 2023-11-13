package com.example.cuotaservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EstudianteEntity {
    private String rut;
    private String apellidos;
    private String nombres;
    private LocalDate fecha_nacimiento;
    private String tipo_colegio;
    private String nombre_colegio;
    private Integer anio_egreso;
    private String tipo_pago;
    private Integer cant_cuotas;
}
