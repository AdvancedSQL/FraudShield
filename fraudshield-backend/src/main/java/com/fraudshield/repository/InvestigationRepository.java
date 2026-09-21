package com.fraudshield.repository;

import com.fraudshield.entity.Investigation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvestigationRepository extends JpaRepository<Investigation, Long> {
    List<Investigation> findByStatus(Investigation.InvestigationStatus status);
    List<Investigation> findByAssignedAnalystId(Long analystId);
}
