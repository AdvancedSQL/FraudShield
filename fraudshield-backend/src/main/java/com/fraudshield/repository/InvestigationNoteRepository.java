package com.fraudshield.repository;

import com.fraudshield.entity.InvestigationNote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestigationNoteRepository extends JpaRepository<InvestigationNote, Long> {
}
