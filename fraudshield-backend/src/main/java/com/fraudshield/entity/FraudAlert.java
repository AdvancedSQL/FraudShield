package com.fraudshield.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "fraud_alerts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FraudAlert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alertId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transaction_id", nullable = false)
    @JsonIgnore
    private Transaction transaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnore
    private Customer customer;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RiskLevel riskLevel;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private AlertStatus status;

    @Column(nullable = false)
    private Double totalRiskScore;

    private String resolution;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum RiskLevel {
        LOW, MEDIUM, HIGH, CRITICAL
    }

    public enum AlertStatus {
        OPEN, IN_PROGRESS, RESOLVED, DISMISSED
    }
}
