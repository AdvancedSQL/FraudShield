package com.fraudshield.repository;

import com.fraudshield.entity.LoginActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LoginActivityRepository extends JpaRepository<LoginActivity, Long> {
    List<LoginActivity> findByCustomerCustomerIdOrderByLoginTimeDesc(Long customerId);
}
