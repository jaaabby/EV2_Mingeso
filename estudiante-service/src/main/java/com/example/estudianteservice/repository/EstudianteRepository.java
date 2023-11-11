package com.example.estudianteservice.repository;

import com.example.estudianteservice.entity.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, String> {

    @Query("select e.cant_cuotas from Estudiante e where e.rut = :rut")
    Integer findCantCuotas(@Param("rut") String rut);

    @Query("select e from Estudiante e where e.rut = :rut")
    Estudiante findByRut(@Param("rut")String rut);
}
