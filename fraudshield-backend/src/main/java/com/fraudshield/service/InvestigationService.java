package com.fraudshield.service;

import com.fraudshield.dto.InvestigationResponse;
import com.fraudshield.dto.InvestigationNoteRequest;
import com.fraudshield.entity.Investigation;
import com.fraudshield.entity.InvestigationNote;
import com.fraudshield.repository.AdminUserRepository;
import com.fraudshield.repository.InvestigationNoteRepository;
import com.fraudshield.repository.InvestigationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InvestigationService {
    @Autowired
    private InvestigationRepository investigationRepository;
    @Autowired
    private InvestigationNoteRepository investigationNoteRepository;
    @Autowired
    private AdminUserRepository adminUserRepository;

    public List<InvestigationResponse> getAllInvestigations() {
        return investigationRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    public InvestigationResponse getInvestigationById(Long id) {
        return mapToResponse(investigationRepository.findById(id).orElseThrow());
    }
    
    public InvestigationResponse updateInvestigation(Long id, Investigation updates) {
        Investigation inv = investigationRepository.findById(id).orElseThrow();
        if(updates.getStatus() != null) inv.setStatus(updates.getStatus());
        return mapToResponse(investigationRepository.save(inv));
    }

    public Object addNote(Long investigationId, InvestigationNoteRequest request, Long authorId) {
        Investigation inv = investigationRepository.findById(investigationId).orElseThrow();
        InvestigationNote note = InvestigationNote.builder()
                .investigation(inv)
                .author(adminUserRepository.findById(authorId).orElseThrow())
                .noteText(request.getNoteText())
                .build();
        return investigationNoteRepository.save(note);
    }

    private InvestigationResponse mapToResponse(Investigation inv) {
        return InvestigationResponse.builder()
                .id(inv.getId())
                .alertId(inv.getAlert().getAlertId())
                .status(inv.getStatus().name())
                .priority(inv.getPriority().name())
                .assignedAnalyst(inv.getAssignedAnalyst() != null ? inv.getAssignedAnalyst().getUsername() : null)
                .startedAt(inv.getStartedAt())
                .resolvedAt(inv.getResolvedAt())
                .build();
    }
}
