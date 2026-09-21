package com.fraudshield.controller;

import com.fraudshield.dto.TransactionResponse;
import com.fraudshield.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/transactions")
public class AdminTransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<Page<TransactionResponse>> getAllTransactions(Pageable pageable) {
        return ResponseEntity.ok(transactionService.getAllTransactions(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionResponse> getTransactionById(@PathVariable Long id) {
        return ResponseEntity.ok(transactionService.getTransactionById(id));
    }
}
