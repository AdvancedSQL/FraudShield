package com.fraudshield.service;

import com.fraudshield.dto.AiQueryResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AiChatbotService {
    public AiQueryResponse processQuery(String query, Long customerId) {
        // Mock implementation
        return AiQueryResponse.builder()
                .responseText("Your transaction was flagged for your safety due to a login from an unknown location. Please confirm if it was you.")
                .relatedData(new HashMap<>())
                .build();
    }
}
