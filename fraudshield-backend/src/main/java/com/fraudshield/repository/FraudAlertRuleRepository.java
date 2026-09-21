package com.fraudshield.repository;

import com.fraudshield.entity.FraudAlertRule;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FraudAlertRuleRepository extends JpaRepository<FraudAlertRule, Long> {
    List<FraudAlertRule> findByAlertAlertId(Long alertId);
}
