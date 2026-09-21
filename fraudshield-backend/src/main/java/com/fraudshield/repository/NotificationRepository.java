package com.fraudshield.repository;

import com.fraudshield.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByCustomerCustomerIdOrderByCreatedAtDesc(Long customerId);
    List<Notification> findByAdminIdOrderByCreatedAtDesc(Long adminId);
}
