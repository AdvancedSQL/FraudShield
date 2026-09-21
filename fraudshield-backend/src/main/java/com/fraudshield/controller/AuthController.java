package com.fraudshield.controller;

import com.fraudshield.dto.LoginRequest;
import com.fraudshield.dto.LoginResponse;
import com.fraudshield.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        if ("ADMIN".equalsIgnoreCase(request.getRole())) {
            return ResponseEntity.ok(authService.loginAdmin(request.getUsername(), request.getPassword()));
        } else {
            return ResponseEntity.ok(authService.loginCustomer(request.getUsername(), request.getPassword()));
        }
    }
}
