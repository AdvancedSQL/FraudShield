package com.fraudshield.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FraudAlertResponse {
    private Long alertId;
    private TransactionResponse transaction;
    private String riskLevel;
    private String status;
    private Double totalRiskScore;
    private String resolution;
    private LocalDateTime createdAt;
    
    private List<Object> riskScores;
    private List<Object> triggeredRules;
}
