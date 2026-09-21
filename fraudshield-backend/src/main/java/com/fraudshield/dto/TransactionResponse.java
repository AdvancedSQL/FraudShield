package com.fraudshield.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionResponse {
    private Long transactionId;
    private Long accountId;
    private BigDecimal amount;
    private String currency;
    private String type;
    private String status;
    private String targetAccount;
    private String deviceIp;
    private String location;
    private LocalDateTime timestamp;
}
