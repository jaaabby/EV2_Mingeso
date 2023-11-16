package com.example.cuotaservice.service;

import com.example.cuotaservice.entity.Cuota;
import com.example.cuotaservice.model.EstudianteEntity;
import com.example.cuotaservice.repository.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class CuotaService {
    @Autowired
    CuotaRepository cuotaRepository;
    @Autowired
    AdministradorService administradorService;
    @Autowired
    RestTemplate restTemplate;

    public void save(Cuota cuota){cuotaRepository.save(cuota);}
    public boolean existeCuota(EstudianteEntity estudiante){
        String rut = estudiante.getRut();
        ArrayList<Cuota> cuotas = (ArrayList<Cuota>) cuotaRepository.findAll();
        boolean existe = false;
        for(int i = 0; i < cuotas.size(); i++){
            if(cuotas.get(i).getRut().equals(rut)){
                existe = true;
                break;
            }
        }
        return existe;
    }
    public void generarCuotas(EstudianteEntity estudiante){
        if(existeCuota(estudiante)){
        }else{
            int cantCuotas = estudiante.getCant_cuotas();
            double monto = administradorService.calcularValorPorCuota(estudiante);
            for (int i = 1; i <= cantCuotas; i = i + 1){
                Cuota cuota = new Cuota();
                cuota.setNro_cuota(i);
                cuota.setMonto(monto);
                cuota.setEstado("PENDIENTE");
                cuota.setRut(estudiante.getRut());
                save(cuota);
            }
        }
    }

    public EstudianteEntity findByRut(String rut){
        ResponseEntity<EstudianteEntity> response = restTemplate.exchange(
                "http://gateway-service:8080/estudiante/" + rut,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<EstudianteEntity>() {}
        );
        return response.getBody();
    }

    public List<Cuota> findCuotaByRut(String rut){
        return cuotaRepository.findCuotaByRut(rut);
    }

    public void registrarPago(String rut){
        int diaActual = LocalDate.now().getDayOfMonth();
        if(diaActual >= 12 && diaActual <= 20){
            List<Cuota> cuotasEstudiante = findCuotaByRut(rut);
            for (int i = 0; i < cuotasEstudiante.size();i++){
                Cuota cuota = cuotasEstudiante.get(i);
                if (cuota.getEstado().equals("PENDIENTE")){
                    cuota.setEstado("PAGADO");
                    cuotaRepository.save(cuota);
                    break;
                }
            }
        }
    }
}
