package com.fraudshield.controller;

import com.fraudshield.dto.AiQueryRequest;
import com.fraudshield.dto.AiQueryResponse;
import com.fraudshield.service.AiChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customer/chatbot")
public class CustomerChatbotController {
    @Autowired
    private AiChatbotService aiChatbotService;

    @PostMapping
    public ResponseEntity<AiQueryResponse> processQuery(@RequestBody AiQueryRequest request) {
        Long customerId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(aiChatbotService.processQuery(request.getQuery(), customerId));
    }
}
