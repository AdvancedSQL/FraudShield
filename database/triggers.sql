DELIMITER $$

DROP TRIGGER IF EXISTS trg_after_fraud_alert_insert$$
CREATE TRIGGER trg_after_fraud_alert_insert
AFTER INSERT ON fraud_alerts
FOR EACH ROW
BEGIN
    -- Notify customer
    INSERT INTO notifications (customer_id, title, message, type)
    VALUES (NEW.customer_id, 'Security Alert', CONCAT('A new security alert (', NEW.alert_ref, ') was flagged on your account.'), 'SECURITY');
    
    -- Notify admin (Assigned to admin_id 1 as default)
    INSERT INTO notifications (admin_id, title, message, type)
    VALUES (1, 'New Fraud Alert', CONCAT('Alert ', NEW.alert_ref, ' generated for customer ', NEW.customer_id), 'FRAUD_ALERT');
END$$

DROP TRIGGER IF EXISTS trg_after_transaction_insert$$
CREATE TRIGGER trg_after_transaction_insert
AFTER INSERT ON transactions
FOR EACH ROW
BEGIN
    DECLARE v_customer_id BIGINT;
    
    IF NEW.amount > 100000 THEN
        SELECT customer_id INTO v_customer_id FROM accounts WHERE account_id = NEW.account_id;
        
        INSERT INTO fraud_alerts (transaction_id, customer_id, alert_ref, risk_level, status, detection_source)
        VALUES (NEW.transaction_id, v_customer_id, CONCAT('AL_TRG_', NEW.transaction_id), 'HIGH', 'NEW', 'SQL_ENGINE');
    END IF;
END$$

DELIMITER ;
