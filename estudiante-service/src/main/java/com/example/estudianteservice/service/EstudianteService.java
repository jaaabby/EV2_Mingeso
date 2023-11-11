package com.example.estudianteservice.service;

import com.example.estudianteservice.entity.Estudiante;
import com.example.estudianteservice.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class EstudianteService {
    @Autowired
    EstudianteRepository estudianteRepository;

    public void guardarEstudiante(String rut, String apellidos, String nombres, LocalDate fecha_nac,
                                  String tipo_colegio, String nombre_colegio, Integer año_egreso,
                                  String tipo_pago, Integer cant_cuotas){
        Estudiante estudiante = new Estudiante();
        estudiante.setRut(rut);
        estudiante.setApellidos(apellidos);
        estudiante.setNombres(nombres);
        estudiante.setFecha_nac(fecha_nac);
        estudiante.setTipo_colegio(tipo_colegio);
        estudiante.setNombre_colegio(nombre_colegio);
        estudiante.setAño_egreso(año_egreso);
        estudiante.setTipo_pago(tipo_pago);
        estudiante.setCant_cuotas(cant_cuotas);
        estudianteRepository.save(estudiante);
    }
}
