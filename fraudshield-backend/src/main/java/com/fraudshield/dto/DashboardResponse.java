package com.fraudshield.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardResponse {
    private long totalTransactions;
    private long fraudAlerts;
    private long highRiskCount;
    private long criticalCount;
    private long openInvestigations;
    private long blockedTransactions;
}
