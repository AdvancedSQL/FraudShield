package com.fraudshield.repository;

import com.fraudshield.entity.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Page<Transaction> findByAccountCustomerCustomerId(Long customerId, Pageable pageable);
    List<Transaction> findByAccountCustomerCustomerId(Long customerId);
    List<Transaction> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    long countByStatus(Transaction.TransactionStatus status);
}
