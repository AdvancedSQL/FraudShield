package com.fraudshield.repository;

import com.fraudshield.entity.FraudRule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FraudRuleRepository extends JpaRepository<FraudRule, Long> {
}
