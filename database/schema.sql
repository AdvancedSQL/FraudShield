SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS investigation_notes;
DROP TABLE IF EXISTS investigations;
DROP TABLE IF EXISTS risk_scores;
DROP TABLE IF EXISTS fraud_alert_rules;
DROP TABLE IF EXISTS fraud_alerts;
DROP TABLE IF EXISTS fraud_rules;
DROP TABLE IF EXISTS login_activity;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS admin_users;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE admin_users (
    admin_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role ENUM('SENIOR_ANALYST','ANALYST','ADMIN') DEFAULT 'ANALYST',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE customers (
    customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    date_of_birth DATE,
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    kyc_status ENUM('VERIFIED','PENDING','REJECTED') DEFAULT 'PENDING',
    risk_category ENUM('LOW','MEDIUM','HIGH') DEFAULT 'LOW',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE accounts (
    account_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    account_number VARCHAR(20) UNIQUE NOT NULL,
    account_type ENUM('SAVINGS','CURRENT','SALARY') NOT NULL,
    balance DECIMAL(15,2) DEFAULT 0.00 CHECK(balance >= 0),
    currency VARCHAR(3) DEFAULT 'INR',
    status ENUM('ACTIVE','FROZEN','CLOSED') DEFAULT 'ACTIVE',
    opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE transactions (
    transaction_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    account_id BIGINT,
    transaction_ref VARCHAR(20) UNIQUE NOT NULL,
    type ENUM('DEBIT','CREDIT','TRANSFER','WITHDRAWAL','PURCHASE','REFUND'),
    amount DECIMAL(15,2) NOT NULL CHECK(amount > 0),
    currency VARCHAR(3) DEFAULT 'INR',
    description VARCHAR(255),
    merchant_name VARCHAR(100),
    category VARCHAR(50),
    location VARCHAR(100),
    ip_address VARCHAR(45),
    device_info VARCHAR(255),
    status ENUM('COMPLETED','PENDING','FAILED','BLOCKED','REVERSED') DEFAULT 'COMPLETED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE login_activity (
    login_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    device_info VARCHAR(255),
    location VARCHAR(100),
    status ENUM('SUCCESS','FAILED') NOT NULL,
    failure_reason VARCHAR(100),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE fraud_rules (
    rule_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    rule_name VARCHAR(100) NOT NULL,
    rule_description TEXT,
    rule_query TEXT NOT NULL,
    severity ENUM('LOW','MEDIUM','HIGH','CRITICAL') DEFAULT 'MEDIUM',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE fraud_alerts (
    alert_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    transaction_id BIGINT,
    customer_id BIGINT,
    alert_ref VARCHAR(20) UNIQUE NOT NULL,
    risk_level ENUM('LOW','MEDIUM','HIGH','CRITICAL') NOT NULL,
    status ENUM('NEW','UNDER_REVIEW','INVESTIGATING','RESOLVED','DISMISSED') DEFAULT 'NEW',
    detection_source ENUM('SQL_ENGINE','ML_MODEL','COMBINED','MANUAL') DEFAULT 'COMBINED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE fraud_alert_rules (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    alert_id BIGINT,
    rule_id BIGINT,
    rule_triggered BOOLEAN DEFAULT FALSE,
    rule_score DECIMAL(5,2),
    details TEXT,
    FOREIGN KEY (alert_id) REFERENCES fraud_alerts(alert_id) ON DELETE CASCADE,
    FOREIGN KEY (rule_id) REFERENCES fraud_rules(rule_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE risk_scores (
    score_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    alert_id BIGINT UNIQUE,
    sql_risk_score DECIMAL(5,2),
    ml_risk_score DECIMAL(5,2),
    ml_fraud_probability DECIMAL(5,4),
    final_risk_score DECIMAL(5,2),
    scoring_details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (alert_id) REFERENCES fraud_alerts(alert_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE investigations (
    investigation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    alert_id BIGINT,
    assigned_analyst_id BIGINT,
    status ENUM('OPEN','IN_PROGRESS','ESCALATED','CLOSED_FRAUD','CLOSED_LEGITIMATE') DEFAULT 'OPEN',
    priority ENUM('LOW','MEDIUM','HIGH','CRITICAL') DEFAULT 'MEDIUM',
    fraud_classification VARCHAR(100),
    findings TEXT,
    action_taken VARCHAR(100),
    opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    closed_at TIMESTAMP NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (alert_id) REFERENCES fraud_alerts(alert_id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_analyst_id) REFERENCES admin_users(admin_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE investigation_notes (
    note_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    investigation_id BIGINT,
    analyst_id BIGINT,
    note_text TEXT NOT NULL,
    note_type ENUM('OBSERVATION','ACTION','ESCALATION','RESOLUTION') DEFAULT 'OBSERVATION',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(investigation_id) ON DELETE CASCADE,
    FOREIGN KEY (analyst_id) REFERENCES admin_users(admin_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE notifications (
    notification_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT NULL,
    admin_id BIGINT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('FRAUD_ALERT','SECURITY','TRANSACTION','SYSTEM') DEFAULT 'SYSTEM',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES admin_users(admin_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_transactions_acct_created ON transactions(account_id, created_at);
CREATE INDEX idx_transactions_status ON transactions(status);
CREATE INDEX idx_fraud_alerts_customer ON fraud_alerts(customer_id);
CREATE INDEX idx_fraud_alerts_status ON fraud_alerts(status);
CREATE INDEX idx_fraud_alerts_risk ON fraud_alerts(risk_level);
CREATE INDEX idx_login_activity_customer_time ON login_activity(customer_id, login_time);
CREATE INDEX idx_investigations_status ON investigations(status);
