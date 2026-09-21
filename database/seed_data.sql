SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE notifications;
TRUNCATE TABLE investigation_notes;
TRUNCATE TABLE investigations;
TRUNCATE TABLE risk_scores;
TRUNCATE TABLE fraud_alert_rules;
TRUNCATE TABLE fraud_alerts;
TRUNCATE TABLE fraud_rules;
TRUNCATE TABLE login_activity;
TRUNCATE TABLE transactions;
TRUNCATE TABLE accounts;
TRUNCATE TABLE customers;
TRUNCATE TABLE admin_users;
SET FOREIGN_KEY_CHECKS = 1;

-- Seed Admin Users
INSERT INTO admin_users (username, password_hash, full_name, email, role) VALUES 
('admin_ram', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Ram Prasad', 'ram@fraudshield.in', 'ADMIN'),
('analyst_shriya', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Shriya Sharma', 'shriya@fraudshield.in', 'SENIOR_ANALYST'),
('analyst_karan', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Karan Singh', 'karan@fraudshield.in', 'ANALYST');

-- Seed Customers
INSERT INTO customers (username, password_hash, first_name, last_name, email, phone, city, state, risk_category) VALUES 
('rajesh_s', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Rajesh', 'Sharma', 'rajesh@example.com', '9876543210', 'Mumbai', 'Maharashtra', 'LOW'),
('priya_p', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Priya', 'Patel', 'priya@example.com', '9876543211', 'Ahmedabad', 'Gujarat', 'LOW'),
('amit_k', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Amit', 'Kumar', 'amit@example.com', '9876543212', 'Delhi', 'Delhi', 'HIGH'),
('sneha_r', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Sneha', 'Reddy', 'sneha@example.com', '9876543213', 'Hyderabad', 'Telangana', 'MEDIUM'),
('vikram_m', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Vikram', 'Menon', 'vikram@example.com', '9876543214', 'Kochi', 'Kerala', 'LOW'),
('neha_g', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Neha', 'Gupta', 'neha@example.com', '9876543215', 'Pune', 'Maharashtra', 'LOW'),
('anil_d', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Anil', 'Deshmukh', 'anil@example.com', '9876543216', 'Nagpur', 'Maharashtra', 'MEDIUM'),
('kavita_s', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Kavita', 'Singh', 'kavita@example.com', '9876543217', 'Lucknow', 'Uttar Pradesh', 'LOW'),
('rohit_v', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Rohit', 'Verma', 'rohit@example.com', '9876543218', 'Jaipur', 'Rajasthan', 'HIGH'),
('pooja_j', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Pooja', 'Joshi', 'pooja@example.com', '9876543219', 'Indore', 'Madhya Pradesh', 'LOW'),
('manish_t', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Manish', 'Tiwari', 'manish@example.com', '9876543220', 'Bhopal', 'Madhya Pradesh', 'MEDIUM'),
('swati_n', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Swati', 'Nair', 'swati@example.com', '9876543221', 'Thiruvananthapuram', 'Kerala', 'LOW'),
('arun_c', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Arun', 'Choudhury', 'arun@example.com', '9876543222', 'Kolkata', 'West Bengal', 'HIGH'),
('divya_b', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Divya', 'Bose', 'divya@example.com', '9876543223', 'Kolkata', 'West Bengal', 'LOW'),
('suresh_p', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Suresh', 'Pillai', 'suresh@example.com', '9876543224', 'Chennai', 'Tamil Nadu', 'MEDIUM');

-- Seed Accounts (20)
INSERT INTO accounts (customer_id, account_number, account_type, balance) VALUES
(1, 'ACC10001', 'SAVINGS', 150000.00),
(1, 'ACC10002', 'CURRENT', 50000.00),
(2, 'ACC10003', 'SALARY', 85000.00),
(3, 'ACC10004', 'SAVINGS', 25000.00),
(4, 'ACC10005', 'SAVINGS', 300000.00),
(5, 'ACC10006', 'CURRENT', 10500.00),
(6, 'ACC10007', 'SALARY', 120000.00),
(7, 'ACC10008', 'SAVINGS', 45000.00),
(8, 'ACC10009', 'SAVINGS', 60000.00),
(9, 'ACC10010', 'CURRENT', 15000.00),
(10, 'ACC10011', 'SALARY', 90000.00),
(11, 'ACC10012', 'SAVINGS', 55000.00),
(12, 'ACC10013', 'SAVINGS', 200000.00),
(13, 'ACC10014', 'CURRENT', 12500.00),
(14, 'ACC10015', 'SALARY', 110000.00),
(15, 'ACC10016', 'SAVINGS', 75000.00),
(2, 'ACC10017', 'SAVINGS', 20000.00),
(3, 'ACC10018', 'CURRENT', 5000.00),
(4, 'ACC10019', 'SALARY', 350000.00),
(5, 'ACC10020', 'SAVINGS', 40000.00);

-- Generate 200+ Transactions using recursive CTE (Available in MySQL 8.0+)
INSERT INTO transactions (account_id, transaction_ref, type, amount, description, merchant_name, category, location, ip_address, device_info, created_at, status)
WITH RECURSIVE seq AS (
  SELECT 1 AS id
  UNION ALL
  SELECT id + 1 FROM seq WHERE id < 250
)
SELECT 
  (id % 20) + 1, 
  CONCAT('TX', 1000 + id), 
  CASE WHEN id % 5 = 0 THEN 'CREDIT' ELSE 'DEBIT' END,
  CASE WHEN id % 17 = 0 THEN ROUND(RAND() * 400000 + 100000, 2) ELSE ROUND(RAND() * 50000 + 500, 2) END,
  CASE WHEN id % 17 = 0 THEN 'High Value Transfer' ELSE 'Standard Transaction' END,
  CASE 
    WHEN id % 4 = 0 THEN 'Amazon India' 
    WHEN id % 4 = 1 THEN 'Flipkart'
    WHEN id % 4 = 2 THEN 'Zomato'
    ELSE 'Local Store' 
  END,
  CASE WHEN id % 5 = 0 THEN 'Salary' ELSE 'Shopping' END,
  CASE 
    WHEN id % 25 = 0 THEN 'International'
    WHEN id % 3 = 0 THEN 'Mumbai' 
    WHEN id % 3 = 1 THEN 'Delhi' 
    ELSE 'Bangalore' 
  END,
  CONCAT('192.168.1.', (id % 254) + 1),
  CASE WHEN id % 2 = 0 THEN 'Mobile App' ELSE 'Web Browser' END,
  DATE_SUB('2026-09-21 22:24:56', INTERVAL (id * 2) HOUR),
  CASE WHEN id % 30 = 0 THEN 'FAILED' ELSE 'COMPLETED' END
FROM seq;

-- Some suspicious transactions
INSERT INTO transactions (account_id, transaction_ref, type, amount, description, merchant_name, category, location, ip_address, device_info, created_at, status)
VALUES 
(3, 'TX1301', 'DEBIT', 450000.00, 'Suspicious Transfer', 'Unknown Merchant', 'Transfer', 'Russia', '10.0.0.1', 'Unknown Device', '2026-09-21 20:00:00', 'COMPLETED'),
(3, 'TX1302', 'DEBIT', 490000.00, 'Suspicious Transfer 2', 'Unknown Merchant', 'Transfer', 'Russia', '10.0.0.1', 'Unknown Device', '2026-09-21 20:05:00', 'COMPLETED'),
(9, 'TX1303', 'DEBIT', 25000.00, 'Rapid Tx 1', 'Store A', 'Shopping', 'Jaipur', '192.168.2.1', 'Mobile', '2026-09-21 15:00:00', 'COMPLETED'),
(9, 'TX1304', 'DEBIT', 25000.00, 'Rapid Tx 2', 'Store B', 'Shopping', 'Jaipur', '192.168.2.1', 'Mobile', '2026-09-21 15:01:00', 'COMPLETED'),
(9, 'TX1305', 'DEBIT', 25000.00, 'Rapid Tx 3', 'Store C', 'Shopping', 'Jaipur', '192.168.2.1', 'Mobile', '2026-09-21 15:02:00', 'COMPLETED');


-- Login Activity
INSERT INTO login_activity (customer_id, login_time, ip_address, device_info, location, status, failure_reason)
WITH RECURSIVE seq AS (
  SELECT 1 AS id
  UNION ALL
  SELECT id + 1 FROM seq WHERE id < 50
)
SELECT 
  (id % 15) + 1,
  DATE_SUB('2026-09-21 22:24:56', INTERVAL id DAY),
  CONCAT('192.168.1.', (id % 254) + 1),
  'Mobile App',
  'Mumbai',
  CASE WHEN id % 7 = 0 THEN 'FAILED' ELSE 'SUCCESS' END,
  CASE WHEN id % 7 = 0 THEN 'Invalid Password' ELSE NULL END
FROM seq;

INSERT INTO login_activity (customer_id, login_time, ip_address, location, status, failure_reason)
VALUES 
(3, '2026-09-21 19:50:00', '10.0.0.1', 'Russia', 'FAILED', 'Invalid Password'),
(3, '2026-09-21 19:51:00', '10.0.0.1', 'Russia', 'FAILED', 'Invalid Password'),
(3, '2026-09-21 19:55:00', '10.0.0.1', 'Russia', 'SUCCESS', NULL);


-- Fraud Rules
INSERT INTO fraud_rules (rule_name, rule_description, rule_query, severity) VALUES
('High Value Transaction', 'Amount > 5x customer average', 'SELECT * FROM transactions t WHERE amount > (SELECT AVG(amount)*5 FROM transactions t2 WHERE t2.account_id = t.account_id)', 'HIGH'),
('Rapid Transactions', '3+ transactions in 5 minutes', 'SELECT * FROM (SELECT t.*, LAG(created_at, 2) OVER (PARTITION BY account_id ORDER BY created_at) as prev_2_time FROM transactions t) sq WHERE TIMESTAMPDIFF(MINUTE, prev_2_time, created_at) <= 5', 'CRITICAL'),
('Amount Deviation', 'Amount > 3 std dev from mean', 'SELECT t.* FROM transactions t JOIN (SELECT account_id, AVG(amount) as avg_amt, STDDEV(amount) as std_amt FROM transactions GROUP BY account_id) stats ON t.account_id = stats.account_id WHERE t.amount > (stats.avg_amt + 3 * stats.std_amt)', 'HIGH'),
('Location Anomaly', 'Different city from last transaction', 'SELECT * FROM (SELECT t.*, LAG(location) OVER (PARTITION BY account_id ORDER BY created_at) as prev_loc FROM transactions t) sq WHERE location != prev_loc', 'MEDIUM'),
('Unusual Frequency', '10+ transactions in 24h', 'SELECT account_id, COUNT(*) FROM transactions WHERE created_at >= NOW() - INTERVAL 1 DAY GROUP BY account_id HAVING COUNT(*) >= 10', 'MEDIUM'),
('Multiple Failed Logins', '3+ failed logins in 1 hour', 'WITH failed AS (SELECT customer_id, login_time FROM login_activity WHERE status = ''FAILED'' AND login_time >= NOW() - INTERVAL 1 HOUR) SELECT customer_id, COUNT(*) FROM failed GROUP BY customer_id HAVING COUNT(*) >= 3', 'HIGH'),
('Rapid Sequence Detector', 'Checks rapid sequence of actions', 'SELECT t.*, LEAD(created_at) OVER (PARTITION BY account_id ORDER BY created_at) as next_tx_time, ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY amount DESC) as amt_rank FROM transactions t', 'HIGH');

-- Fraud Alerts
INSERT INTO fraud_alerts (transaction_id, customer_id, alert_ref, risk_level, status, detection_source, created_at)
WITH RECURSIVE seq AS (
  SELECT 1 AS id
  UNION ALL
  SELECT id + 1 FROM seq WHERE id < 30
)
SELECT 
  (id * 7) % 250 + 1,
  (id % 15) + 1,
  CONCAT('AL', 1000 + id),
  CASE WHEN id % 4 = 0 THEN 'CRITICAL' WHEN id % 4 = 1 THEN 'HIGH' ELSE 'MEDIUM' END,
  CASE WHEN id % 5 = 0 THEN 'NEW' WHEN id % 5 = 1 THEN 'UNDER_REVIEW' ELSE 'RESOLVED' END,
  'COMBINED',
  DATE_SUB('2026-09-21 22:24:56', INTERVAL (id * 12) HOUR)
FROM seq;

INSERT INTO fraud_alerts (transaction_id, customer_id, alert_ref, risk_level, status, detection_source, created_at)
VALUES 
((SELECT transaction_id FROM transactions WHERE transaction_ref = 'TX1301'), 3, 'AL1031', 'CRITICAL', 'NEW', 'SQL_ENGINE', '2026-09-21 20:01:00'),
((SELECT transaction_id FROM transactions WHERE transaction_ref = 'TX1303'), 9, 'AL1032', 'HIGH', 'UNDER_REVIEW', 'COMBINED', '2026-09-21 15:03:00');

-- Risk Scores
INSERT INTO risk_scores (alert_id, sql_risk_score, ml_risk_score, ml_fraud_probability, final_risk_score, scoring_details)
SELECT 
  alert_id,
  ROUND(RAND() * 40 + 50, 2),
  ROUND(RAND() * 40 + 50, 2),
  ROUND(RAND(), 4),
  ROUND(RAND() * 40 + 60, 2),
  'Scoring details computed'
FROM fraud_alerts;

-- Fraud Alert Rules
INSERT INTO fraud_alert_rules (alert_id, rule_id, rule_triggered, rule_score)
SELECT alert_id, (alert_id % 7) + 1, TRUE, 85.50
FROM fraud_alerts;

-- Investigations
INSERT INTO investigations (alert_id, assigned_analyst_id, status, priority, fraud_classification, findings, action_taken)
SELECT 
  alert_id,
  (alert_id % 3) + 1,
  CASE WHEN alert_id % 2 = 0 THEN 'IN_PROGRESS' ELSE 'CLOSED_FRAUD' END,
  'HIGH',
  'Account Takeover',
  'Suspicious IP detected',
  'Account Frozen'
FROM fraud_alerts 
LIMIT 8;

-- Investigation Notes
INSERT INTO investigation_notes (investigation_id, analyst_id, note_text, note_type)
SELECT 
  investigation_id,
  assigned_analyst_id,
  'Initial review started. IP looks suspicious.',
  'OBSERVATION'
FROM investigations;

-- Notifications
INSERT INTO notifications (customer_id, title, message, type)
SELECT 
  customer_id,
  'Suspicious Activity Detected',
  'We have detected suspicious activity on your account.',
  'FRAUD_ALERT'
FROM customers
LIMIT 5;
