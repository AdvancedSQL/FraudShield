CREATE OR REPLACE VIEW v_transaction_risk_summary AS
SELECT 
    t.transaction_id,
    t.transaction_ref,
    t.amount,
    t.currency,
    t.status AS transaction_status,
    t.created_at AS transaction_date,
    c.customer_id,
    c.first_name,
    c.last_name,
    fa.alert_ref,
    fa.risk_level,
    fa.status AS alert_status,
    rs.final_risk_score,
    rs.ml_fraud_probability
FROM transactions t
LEFT JOIN fraud_alerts fa ON t.transaction_id = fa.transaction_id
LEFT JOIN risk_scores rs ON fa.alert_id = rs.alert_id
JOIN accounts a ON t.account_id = a.account_id
JOIN customers c ON a.customer_id = c.customer_id;

CREATE OR REPLACE VIEW v_customer_fraud_overview AS
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.risk_category,
    COUNT(t.transaction_id) AS total_transactions,
    SUM(t.amount) AS total_volume,
    COUNT(fa.alert_id) AS total_alerts,
    AVG(rs.final_risk_score) AS avg_risk_score,
    MAX(rs.final_risk_score) AS max_risk_score
FROM customers c
LEFT JOIN accounts a ON c.customer_id = a.customer_id
LEFT JOIN transactions t ON a.account_id = t.account_id
LEFT JOIN fraud_alerts fa ON c.customer_id = fa.customer_id
LEFT JOIN risk_scores rs ON fa.alert_id = rs.alert_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.risk_category;

CREATE OR REPLACE VIEW v_daily_fraud_stats AS
SELECT 
    DATE(t.created_at) AS stat_date,
    COUNT(t.transaction_id) AS total_tx,
    SUM(CASE WHEN fa.alert_id IS NOT NULL THEN 1 ELSE 0 END) AS flagged_tx,
    AVG(rs.final_risk_score) AS avg_risk,
    SUM(CASE WHEN fa.risk_level = 'CRITICAL' THEN 1 ELSE 0 END) AS critical_count
FROM transactions t
LEFT JOIN fraud_alerts fa ON t.transaction_id = fa.transaction_id
LEFT JOIN risk_scores rs ON fa.alert_id = rs.alert_id
GROUP BY DATE(t.created_at);
