package com.fraudshield.service;

import com.fraudshield.dto.DashboardResponse;
import com.fraudshield.entity.FraudAlert;
import com.fraudshield.entity.Investigation;
import com.fraudshield.repository.FraudAlertRepository;
import com.fraudshield.repository.InvestigationRepository;
import com.fraudshield.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    @Autowired
    private FraudAlertRepository fraudAlertRepository;
    
    @Autowired
    private InvestigationRepository investigationRepository;

    public DashboardResponse getAdminDashboard() {
        long totalTransactions = transactionRepository.count();
        long fraudAlerts = fraudAlertRepository.count();
        long highRiskCount = fraudAlertRepository.countByRiskLevel(FraudAlert.RiskLevel.HIGH);
        long criticalCount = fraudAlertRepository.countByRiskLevel(FraudAlert.RiskLevel.CRITICAL);
        
        long openInvestigations = investigationRepository.findByStatus(Investigation.InvestigationStatus.OPEN).size()
                                + investigationRepository.findByStatus(Investigation.InvestigationStatus.IN_PROGRESS).size();
        
        return DashboardResponse.builder()
                .totalTransactions(totalTransactions)
                .fraudAlerts(fraudAlerts)
                .highRiskCount(highRiskCount)
                .criticalCount(criticalCount)
                .openInvestigations(openInvestigations)
                .build();
    }

    public DashboardResponse getCustomerDashboard(Long customerId) {
        // Implement specific customer dashboard logic
        return DashboardResponse.builder().build();
    }
}
