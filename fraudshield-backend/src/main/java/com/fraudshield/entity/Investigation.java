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
@Table(name = "investigations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Investigation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "alert_id", nullable = false)
    @JsonIgnore
    private FraudAlert alert;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "analyst_id")
    @JsonIgnore
    private AdminUser assignedAnalyst;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private InvestigationStatus status;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private InvestigationPriority priority;

    @CreationTimestamp
    private LocalDateTime startedAt;

    private LocalDateTime resolvedAt;

    public enum InvestigationStatus {
        OPEN, IN_PROGRESS, RESOLVED, CLOSED
    }

    public enum InvestigationPriority {
        LOW, MEDIUM, HIGH, URGENT
    }
}
