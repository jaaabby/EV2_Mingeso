package com.example.cuotaservice.repository;

import com.example.cuotaservice.entity.Cuota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Repository
public interface CuotaRepository extends JpaRepository<Cuota, Long> {
    @Query("select e from Cuota e where e.rut = :rut")
    List<Cuota> findCuotaByRut(@Param("rut") String rut);
}
