package com.fraudshield.service;

import com.fraudshield.dto.CustomerResponse;
import com.fraudshield.entity.Customer;
import com.fraudshield.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerResponse> getAllCustomers() {
        return customerRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    public CustomerResponse getCustomerById(Long id) {
        return mapToResponse(customerRepository.findById(id).orElseThrow());
    }

    private CustomerResponse mapToResponse(Customer c) {
        return CustomerResponse.builder()
                .customerId(c.getCustomerId())
                .username(c.getUsername())
                .email(c.getEmail())
                .fullName(c.getFullName())
                .phone(c.getPhone())
                .address(c.getAddress())
                .createdAt(c.getCreatedAt())
                .build();
    }
}
