package com.example.estudianteservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "estudiante")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Estudiante {
    @Id
    @Column(unique = true,nullable = false)
    private String rut;
    private String apellidos;
    private String nombres;
    private LocalDate fecha_nac;
    private String tipo_colegio;
    private String nombre_colegio;
    private Integer año_egreso;
    private String tipo_pago;
    private Integer cant_cuotas;
}
