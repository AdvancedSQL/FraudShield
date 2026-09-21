package com.fraudshield.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "fraud_rules")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FraudRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ruleId;

    @Column(unique = true, nullable = false)
    private String ruleName;

    private String description;

    @Column(name = "rule_condition", nullable = false)
    private String condition;

    @Column(nullable = false)
    private Double riskWeight;

    @Column(nullable = false)
    private Boolean isActive;
}
