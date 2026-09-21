package com.fraudshield.service;

import org.springframework.stereotype.Service;

@Service
public class FraudDetectionService {
    public void detectFraud(Long transactionId) {
        // Mock logic for fraud detection, calls ML service via WebClient and checks SQL rules
    }
}
