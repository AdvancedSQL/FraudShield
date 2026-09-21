package com.fraudshield.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.fraudshield.dto.AnalyticsResponse;

@Service
public class AnalyticsService {
    public AnalyticsResponse getFraudAlertsOverTime() {
        return new AnalyticsResponse("LINE", List.of());
    }

    public AnalyticsResponse getRiskDistribution() {
        return new AnalyticsResponse("PIE", List.of());
    }

    public AnalyticsResponse getTransactionVolume() {
        return new AnalyticsResponse("BAR", List.of());
    }

    public AnalyticsResponse getDetectionByRule() {
        return new AnalyticsResponse("BAR", List.of());
    }

    public AnalyticsResponse getSqlVsMlDetection() {
        return new AnalyticsResponse("COMPARISON", List.of());
    }
}
