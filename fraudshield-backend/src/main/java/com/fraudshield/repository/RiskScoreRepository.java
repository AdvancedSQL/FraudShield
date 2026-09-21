package com.fraudshield.repository;

import com.fraudshield.entity.RiskScore;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RiskScoreRepository extends JpaRepository<RiskScore, Long> {
    List<RiskScore> findByAlertAlertId(Long alertId);
}
