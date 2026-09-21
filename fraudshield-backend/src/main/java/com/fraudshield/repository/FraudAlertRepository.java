package com.fraudshield.repository;

import com.fraudshield.entity.FraudAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FraudAlertRepository extends JpaRepository<FraudAlert, Long> {
    List<FraudAlert> findByCustomerCustomerId(Long customerId);
    List<FraudAlert> findByStatus(FraudAlert.AlertStatus status);
    List<FraudAlert> findByRiskLevel(FraudAlert.RiskLevel riskLevel);
    long countByRiskLevel(FraudAlert.RiskLevel riskLevel);
    long countByStatus(FraudAlert.AlertStatus status);
}
