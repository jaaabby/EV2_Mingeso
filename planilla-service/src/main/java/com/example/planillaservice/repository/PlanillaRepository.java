package com.example.planillaservice.repository;

import com.example.planillaservice.entity.Planilla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanillaRepository extends JpaRepository<Planilla, Long> {
}
