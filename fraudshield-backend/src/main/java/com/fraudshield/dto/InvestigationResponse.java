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
public class InvestigationResponse {
    private Long id;
    private Long alertId;
    private String status;
    private String priority;
    private String assignedAnalyst;
    private LocalDateTime startedAt;
    private LocalDateTime resolvedAt;
    private List<Object> notes;
}
