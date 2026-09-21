package com.fraudshield.service;

import com.fraudshield.entity.Notification;
import com.fraudshield.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> getCustomerNotifications(Long customerId) {
        return notificationRepository.findByCustomerCustomerIdOrderByCreatedAtDesc(customerId);
    }
    
    public List<Notification> getAdminNotifications(Long adminId) {
        return notificationRepository.findByAdminIdOrderByCreatedAtDesc(adminId);
    }

    public void markAsRead(Long id) {
        Notification notification = notificationRepository.findById(id).orElseThrow();
        notification.setIsRead(true);
        notificationRepository.save(notification);
    }
}
