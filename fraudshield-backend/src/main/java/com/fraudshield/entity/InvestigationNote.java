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
@Table(name = "investigation_notes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InvestigationNote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "investigation_id", nullable = false)
    @JsonIgnore
    private Investigation investigation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnore
    private AdminUser author;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String noteText;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
