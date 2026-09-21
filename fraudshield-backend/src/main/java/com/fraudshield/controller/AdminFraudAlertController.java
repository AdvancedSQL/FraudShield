package com.fraudshield.controller;

import com.fraudshield.dto.FraudAlertResponse;
import com.fraudshield.entity.FraudAlert;
import com.fraudshield.service.FraudAlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/fraud-alerts")
public class AdminFraudAlertController {
    @Autowired
    private FraudAlertService fraudAlertService;

    @GetMapping
    public ResponseEntity<List<FraudAlertResponse>> getAllAlerts() {
        return ResponseEntity.ok(fraudAlertService.getAllAlerts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FraudAlertResponse> getAlertById(@PathVariable Long id) {
        return ResponseEntity.ok(fraudAlertService.getAlertById(id));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<FraudAlertResponse> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        FraudAlert.AlertStatus status = FraudAlert.AlertStatus.valueOf(body.get("status"));
        return ResponseEntity.ok(fraudAlertService.updateAlertStatus(id, status));
    }
}
