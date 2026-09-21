package com.fraudshield.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerResponse {
    private Long customerId;
    private String username;
    private String email;
    private String fullName;
    private String phone;
    private String address;
    private LocalDateTime createdAt;
    private Object accounts; // Simplified representation
}
