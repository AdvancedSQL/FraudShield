package com.fraudshield.controller;

import com.fraudshield.dto.InvestigationResponse;
import com.fraudshield.dto.InvestigationNoteRequest;
import com.fraudshield.entity.Investigation;
import com.fraudshield.service.InvestigationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/investigations")
public class AdminInvestigationController {
    @Autowired
    private InvestigationService investigationService;

    @GetMapping
    public ResponseEntity<List<InvestigationResponse>> getAllInvestigations() {
        return ResponseEntity.ok(investigationService.getAllInvestigations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvestigationResponse> getInvestigationById(@PathVariable Long id) {
        return ResponseEntity.ok(investigationService.getInvestigationById(id));
    }

    @PostMapping
    public ResponseEntity<InvestigationResponse> createInvestigation(@RequestBody Investigation investigation) {
        // Mock simple return
        return ResponseEntity.ok(new InvestigationResponse());
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvestigationResponse> updateInvestigation(@PathVariable Long id, @RequestBody Investigation investigation) {
        return ResponseEntity.ok(investigationService.updateInvestigation(id, investigation));
    }

    @PostMapping("/{id}/notes")
    public ResponseEntity<Object> addNote(@PathVariable Long id, @RequestBody InvestigationNoteRequest noteRequest) {
        Long authorId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(investigationService.addNote(id, noteRequest, authorId));
    }
}
