package com.fraudshield.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin/ml-detection")
public class AdminMlDetectionController {

    @GetMapping("/results")
    public ResponseEntity<List<Object>> getResults() { return ResponseEntity.ok(List.of()); }

    @PostMapping("/analyze/{txId}")
    public ResponseEntity<Object> analyzeTransaction(@PathVariable Long txId) { return ResponseEntity.ok().build(); }
}
