package com.fraudshield.controller;

import com.fraudshield.entity.Notification;
import com.fraudshield.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/customer/notifications")
public class CustomerNotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public ResponseEntity<List<Notification>> getNotifications() {
        Long customerId = (Long) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        return ResponseEntity.ok(notificationService.getCustomerNotifications(customerId));
    }
}
