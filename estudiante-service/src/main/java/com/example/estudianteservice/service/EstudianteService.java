package com.example.estudianteservice.service;

import com.example.estudianteservice.entity.Estudiante;
import com.example.estudianteservice.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EstudianteService {
    @Autowired
    EstudianteRepository estudianteRepository;

    public void save(Estudiante estudiante){
        estudianteRepository.save(estudiante);
    }

    public List<Estudiante> findAll(){
        return estudianteRepository.findAll();
    }
}
