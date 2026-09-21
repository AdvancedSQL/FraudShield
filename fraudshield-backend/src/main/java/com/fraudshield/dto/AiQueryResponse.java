package com.fraudshield.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiQueryResponse {
    private String responseText;
    private Map<String, Object> relatedData;
}
