package com.fraudshield.controller;

import com.fraudshield.dto.FraudAlertResponse;
import com.fraudshield.service.FraudAlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/customer/alerts")
public class CustomerAlertController {
    @Autowired
    private FraudAlertService fraudAlertService;

    @GetMapping
    public ResponseEntity<List<FraudAlertResponse>> getCustomerAlerts() {
        Long customerId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(fraudAlertService.getCustomerAlerts(customerId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<FraudAlertResponse> getAlertById(@PathVariable Long id) {
        return ResponseEntity.ok(fraudAlertService.getAlertById(id));
    }
}
