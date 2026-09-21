package com.fraudshield.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "risk_scores")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RiskScore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "alert_id", nullable = false)
    @JsonIgnore
    private FraudAlert alert;

    @Column(nullable = false)
    private String scoreType; // SQL or ML

    @Column(nullable = false)
    private Double score;

    private String modelVersion;
}
