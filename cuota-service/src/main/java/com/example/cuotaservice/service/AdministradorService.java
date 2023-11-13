package com.example.cuotaservice.service;

import com.example.cuotaservice.model.EstudianteEntity;
import com.example.cuotaservice.repository.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

@Service
public class AdministradorService {
    @Autowired
    CuotaRepository cuotaRepository;
    @Autowired
    RestTemplate restTemplate;

    public double calcularDescuentoPorTipoPago(EstudianteEntity estudiante){
        double descuentoPorTipoPago = 0;
        if(estudiante.getTipo_pago().equals("CONTADO")){
            descuentoPorTipoPago = 0.5;
        }
        return descuentoPorTipoPago;
    }

    public double calcularDescuentoPorTipoColegio(EstudianteEntity estudiante){
        double descuentoPorTipoColegio = 0;
        if(estudiante.getTipo_pago().equals("CONTADO")){
            return descuentoPorTipoColegio;
        }else{
            if(estudiante.getTipo_colegio().equals("MUNICIPAL")){
                descuentoPorTipoColegio = 0.2;
            } else if (estudiante.getTipo_colegio().equals("SUBVENCIONADO")) {
                descuentoPorTipoColegio = 0.1;
            }
        }
        return descuentoPorTipoColegio;
    }

    public double calcularDescuentoPorAñosDeEgreso(EstudianteEntity estudiante){
        int cantidadAñosDeEgreso = LocalDateTime.now().getYear() - estudiante.getAnio_egreso();
        double descuentoPorAñosDeEgreso = 0;
        if(estudiante.getTipo_pago().equals("CONTADO")){
            return descuentoPorAñosDeEgreso;
        }else{
            if (cantidadAñosDeEgreso == 0){
                descuentoPorAñosDeEgreso = 0.15;
            } else if (cantidadAñosDeEgreso == 1 || cantidadAñosDeEgreso == 2) {
                descuentoPorAñosDeEgreso = 0.08;
            } else if (cantidadAñosDeEgreso == 3 || cantidadAñosDeEgreso == 4) {
                descuentoPorAñosDeEgreso = 0.04;
            }
        }
        return descuentoPorAñosDeEgreso;
    }

    public double calcularValorPorCuota(EstudianteEntity estudiante){
        double descuentoTotal = calcularDescuentoPorTipoPago(estudiante) +
                calcularDescuentoPorTipoColegio(estudiante) +
                calcularDescuentoPorAñosDeEgreso(estudiante);
        double valorPorCuota = (1500000 - 1500000*descuentoTotal)/estudiante.getCant_cuotas();
        return valorPorCuota;
    }
}
