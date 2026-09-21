package com.fraudshield.service;

import com.fraudshield.dto.TransactionResponse;
import com.fraudshield.entity.Transaction;
import com.fraudshield.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public Page<TransactionResponse> getAllTransactions(Pageable pageable) {
        return transactionRepository.findAll(pageable).map(this::mapToResponse);
    }

    public TransactionResponse getTransactionById(Long id) {
        Transaction tx = transactionRepository.findById(id).orElseThrow();
        return mapToResponse(tx);
    }

    public List<TransactionResponse> getCustomerTransactions(Long customerId) {
        return transactionRepository.findByAccountCustomerCustomerId(customerId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private TransactionResponse mapToResponse(Transaction tx) {
        return TransactionResponse.builder()
                .transactionId(tx.getTransactionId())
                .accountId(tx.getAccount().getAccountId())
                .amount(tx.getAmount())
                .currency(tx.getCurrency())
                .type(tx.getType().name())
                .status(tx.getStatus().name())
                .targetAccount(tx.getTargetAccount())
                .deviceIp(tx.getDeviceIp())
                .location(tx.getLocation())
                .timestamp(tx.getTimestamp())
                .build();
    }
}
