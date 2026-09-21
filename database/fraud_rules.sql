-- 1. High-value transaction (amount > 5x customer average) - uses subquery, AVG, JOIN
SELECT t.* 
FROM transactions t 
JOIN accounts a ON t.account_id = a.account_id
WHERE t.amount > (
    SELECT AVG(amount) * 5 
    FROM transactions t2 
    WHERE t2.account_id = t.account_id
);

-- 2. Rapid transactions (3+ in 5 minutes) - uses LAG(), window functions
SELECT * FROM (
    SELECT 
        t.*, 
        LAG(created_at, 2) OVER (PARTITION BY account_id ORDER BY created_at) as prev_2_time 
    FROM transactions t
) sq 
WHERE TIMESTAMPDIFF(MINUTE, prev_2_time, created_at) <= 5;

-- 3. Amount deviation (amount > 3 std dev from mean) - uses subquery, aggregate
SELECT t.* 
FROM transactions t 
JOIN (
    SELECT account_id, AVG(amount) as avg_amt, STDDEV(amount) as std_amt 
    FROM transactions 
    GROUP BY account_id
) stats ON t.account_id = stats.account_id 
WHERE t.amount > (stats.avg_amt + 3 * stats.std_amt);

-- 4. Location anomaly (different city from last transaction) - uses LAG(), PARTITION BY
SELECT * FROM (
    SELECT 
        t.*, 
        LAG(location) OVER (PARTITION BY account_id ORDER BY created_at) as prev_loc 
    FROM transactions t
) sq 
WHERE location != prev_loc AND prev_loc IS NOT NULL;

-- 5. Unusual frequency (10+ transactions in 24h) - uses COUNT, GROUP BY, HAVING
SELECT account_id, COUNT(*) as tx_count 
FROM transactions 
WHERE created_at >= NOW() - INTERVAL 1 DAY 
GROUP BY account_id 
HAVING COUNT(*) >= 10;

-- 6. Multiple failed logins (3+ in 1 hour) - uses CTE, COUNT, GROUP BY
WITH failed_logins AS (
    SELECT customer_id, login_time 
    FROM login_activity 
    WHERE status = 'FAILED' 
    AND login_time >= NOW() - INTERVAL 1 HOUR
) 
SELECT customer_id, COUNT(*) as failed_count 
FROM failed_logins 
GROUP BY customer_id 
HAVING COUNT(*) >= 3;

-- 7. Rapid sequence detector - uses LEAD(), time diff, ROW_NUMBER
SELECT 
    t.*, 
    LEAD(created_at) OVER (PARTITION BY account_id ORDER BY created_at) as next_tx_time, 
    TIMESTAMPDIFF(MINUTE, created_at, LEAD(created_at) OVER (PARTITION BY account_id ORDER BY created_at)) as mins_to_next,
    ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY amount DESC) as amt_rank 
FROM transactions t;

-- Additional Requirements:
-- Comprehensive INNER JOIN + LEFT JOIN example
SELECT 
    c.first_name, 
    c.last_name, 
    a.account_number, 
    t.transaction_ref, 
    fa.alert_ref
FROM customers c
INNER JOIN accounts a ON c.customer_id = a.customer_id
INNER JOIN transactions t ON a.account_id = t.account_id
LEFT JOIN fraud_alerts fa ON t.transaction_id = fa.transaction_id;

-- RANK() example ranking customers by risk
SELECT 
    c.customer_id, 
    c.first_name, 
    SUM(rs.final_risk_score) as total_risk,
    RANK() OVER (ORDER BY SUM(rs.final_risk_score) DESC) as risk_rank
FROM customers c
JOIN fraud_alerts fa ON c.customer_id = fa.customer_id
JOIN risk_scores rs ON fa.alert_id = rs.alert_id
GROUP BY c.customer_id, c.first_name;

-- CASE expression for risk categorization
SELECT 
    transaction_id, 
    amount,
    CASE 
        WHEN amount > 100000 THEN 'HIGH_RISK'
        WHEN amount > 50000 THEN 'MEDIUM_RISK'
        ELSE 'LOW_RISK' 
    END as amount_risk_category
FROM transactions;
