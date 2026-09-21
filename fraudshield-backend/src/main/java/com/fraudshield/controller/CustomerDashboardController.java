package com.fraudshield.controller;

import com.fraudshield.dto.DashboardResponse;
import com.fraudshield.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer/dashboard")
public class CustomerDashboardController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping
    public ResponseEntity<DashboardResponse> getDashboard() {
        Long customerId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(dashboardService.getCustomerDashboard(customerId));
    }
}
