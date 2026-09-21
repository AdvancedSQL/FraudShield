package com.fraudshield.controller;

import com.fraudshield.dto.AiQueryRequest;
import com.fraudshield.dto.AiQueryResponse;
import com.fraudshield.service.AiAssistantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/ai-assistant")
public class AdminAiAssistantController {
    @Autowired
    private AiAssistantService aiAssistantService;

    @PostMapping
    public ResponseEntity<AiQueryResponse> processQuery(@RequestBody AiQueryRequest request) {
        Long analystId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(aiAssistantService.processQuery(request.getQuery(), analystId));
    }
}
