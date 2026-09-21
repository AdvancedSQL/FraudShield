package com.fraudshield.service;

import com.fraudshield.dto.FraudAlertResponse;
import com.fraudshield.entity.FraudAlert;
import com.fraudshield.repository.FraudAlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FraudAlertService {
    @Autowired
    private FraudAlertRepository fraudAlertRepository;

    public List<FraudAlertResponse> getAllAlerts() {
        return fraudAlertRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    public FraudAlertResponse getAlertById(Long id) {
        return mapToResponse(fraudAlertRepository.findById(id).orElseThrow());
    }

    public FraudAlertResponse updateAlertStatus(Long id, FraudAlert.AlertStatus status) {
        FraudAlert alert = fraudAlertRepository.findById(id).orElseThrow();
        alert.setStatus(status);
        return mapToResponse(fraudAlertRepository.save(alert));
    }

    public List<FraudAlertResponse> getCustomerAlerts(Long customerId) {
        return fraudAlertRepository.findByCustomerCustomerId(customerId).stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    private FraudAlertResponse mapToResponse(FraudAlert alert) {
        return FraudAlertResponse.builder()
                .alertId(alert.getAlertId())
                .riskLevel(alert.getRiskLevel().name())
                .status(alert.getStatus().name())
                .totalRiskScore(alert.getTotalRiskScore())
                .resolution(alert.getResolution())
                .createdAt(alert.getCreatedAt())
                .build();
    }
}
