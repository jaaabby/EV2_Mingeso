package com.example.cuotaservice.controller;

import com.example.cuotaservice.entity.Cuota;
import com.example.cuotaservice.model.EstudianteEntity;
import com.example.cuotaservice.service.CuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.GeneratedValue;
import java.util.List;

@RestController
@RequestMapping("/cuota")
public class CuotaController {
    @Autowired
    CuotaService cuotaService;

    @GetMapping("/generar/{rut}")
    public ResponseEntity<List<Cuota>> cuotas(@PathVariable("rut") String rut){
        EstudianteEntity estudiante = cuotaService.findByRut(rut);
        if(estudiante != null){
            cuotaService.generarCuotas(estudiante);
            List<Cuota> cuotas = cuotaService.findCuotaByRut(rut);
            return ResponseEntity.ok(cuotas);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{rut}")
    public ResponseEntity<List<Cuota>> listado(@PathVariable("rut") String rut){
        EstudianteEntity estudiante = cuotaService.findByRut(rut);
        if(estudiante != null){
            List<Cuota> cuotas = cuotaService.findCuotaByRut(rut);
            return ResponseEntity.ok(cuotas);
        }
        return ResponseEntity.ok(null);
    }

    @GetMapping("/pagar/{rut}")
    public ResponseEntity<List<Cuota>> pagarCuota(@PathVariable("rut") String rut){
        EstudianteEntity estudiante = cuotaService.findByRut(rut);
        if(estudiante != null){
            cuotaService.registrarPago(rut);
            List<Cuota> cuotas = cuotaService.findCuotaByRut(rut);
            return ResponseEntity.ok(cuotas);
        }
        return ResponseEntity.ok(null);

    }
}
