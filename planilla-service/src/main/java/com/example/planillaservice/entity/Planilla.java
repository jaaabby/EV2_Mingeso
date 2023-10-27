package com.example.planillaservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "planilla")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Planilla {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id_examen;
    private String fecha_examen;
    private String puntaje;
    private String rut;
}
