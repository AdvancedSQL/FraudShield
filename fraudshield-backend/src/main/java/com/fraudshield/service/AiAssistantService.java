package com.fraudshield.service;

import com.fraudshield.dto.AiQueryResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AiAssistantService {
    public AiQueryResponse processQuery(String query, Long analystId) {
        // Mock implementation
        return AiQueryResponse.builder()
                .responseText("Based on the data, the recent flags are related to unusually high transaction volumes.")
                .relatedData(new HashMap<>())
                .build();
    }
}
