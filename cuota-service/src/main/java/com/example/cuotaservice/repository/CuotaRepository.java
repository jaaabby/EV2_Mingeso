package com.example.cuotaservice.repository;

import com.example.cuotaservice.entity.Cuota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuotaRepository extends JpaRepository<Cuota, Long> {
}
