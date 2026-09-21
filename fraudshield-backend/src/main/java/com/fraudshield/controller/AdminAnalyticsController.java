package com.fraudshield.controller;

import com.fraudshield.dto.AnalyticsResponse;
import com.fraudshield.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/analytics")
public class AdminAnalyticsController {
    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/fraud-alerts-over-time")
    public ResponseEntity<AnalyticsResponse> getFraudAlertsOverTime() {
        return ResponseEntity.ok(analyticsService.getFraudAlertsOverTime());
    }

    @GetMapping("/risk-distribution")
    public ResponseEntity<AnalyticsResponse> getRiskDistribution() {
        return ResponseEntity.ok(analyticsService.getRiskDistribution());
    }

    @GetMapping("/transaction-volume")
    public ResponseEntity<AnalyticsResponse> getTransactionVolume() {
        return ResponseEntity.ok(analyticsService.getTransactionVolume());
    }

    @GetMapping("/detection-by-rule")
    public ResponseEntity<AnalyticsResponse> getDetectionByRule() {
        return ResponseEntity.ok(analyticsService.getDetectionByRule());
    }

    @GetMapping("/sql-vs-ml")
    public ResponseEntity<AnalyticsResponse> getSqlVsMlDetection() {
        return ResponseEntity.ok(analyticsService.getSqlVsMlDetection());
    }
}
