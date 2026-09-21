package com.fraudshield.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin/sql-engine")
public class AdminSqlEngineController {
    
    @GetMapping("/rules")
    public ResponseEntity<List<Object>> getRules() { return ResponseEntity.ok(List.of()); }

    @GetMapping("/results")
    public ResponseEntity<List<Object>> getResults() { return ResponseEntity.ok(List.of()); }

    @GetMapping("/transaction/{txId}/rules")
    public ResponseEntity<List<Object>> getTransactionRules(@PathVariable Long txId) { return ResponseEntity.ok(List.of()); }
}
