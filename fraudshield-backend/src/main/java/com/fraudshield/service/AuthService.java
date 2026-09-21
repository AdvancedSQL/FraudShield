package com.fraudshield.service;

import com.fraudshield.dto.LoginRequest;
import com.fraudshield.dto.LoginResponse;
import com.fraudshield.entity.AdminUser;
import com.fraudshield.entity.Customer;
import com.fraudshield.repository.AdminUserRepository;
import com.fraudshield.repository.CustomerRepository;
import com.fraudshield.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AdminUserRepository adminUserRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    public LoginResponse loginAdmin(String username, String password) {
        AdminUser admin = adminUserRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!passwordEncoder.matches(password, admin.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        String token = jwtTokenProvider.generateToken(admin.getUsername(), admin.getRole(), admin.getId());
        return new LoginResponse(token, admin.getRole(), admin.getId(), admin.getUsername());
    }

    public LoginResponse loginCustomer(String username, String password) {
        Customer customer = customerRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!passwordEncoder.matches(password, customer.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        String token = jwtTokenProvider.generateToken(customer.getUsername(), "CUSTOMER", customer.getCustomerId());
        return new LoginResponse(token, "CUSTOMER", customer.getCustomerId(), customer.getFullName());
    }
}
