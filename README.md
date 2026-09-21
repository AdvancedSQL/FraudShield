# FraudShield — AI-Powered Banking Fraud Detection & Investigation Platform

A full-stack enterprise fraud detection platform for banking fraud analysts.

## Architecture

```
┌─────────────────────┐     ┌──────────────────────┐     ┌─────────────────────┐
│  React + TypeScript  │────▶│   Spring Boot (8080)  │────▶│  FastAPI ML (8000)   │
│     Vite (5173)      │     │   Spring Security     │     │  scikit-learn model  │
│     Tailwind CSS     │     │   JWT Auth            │     │  RandomForest        │
└─────────────────────┘     └───────────┬──────────┘     └─────────────────────┘
                                        │
                                        ▼
                              ┌──────────────────┐
                              │   MySQL 8.0+     │
                              │   fraudshield DB │
                              └──────────────────┘
```

## Quick Start

### 1. Database Setup (MySQL)

```bash
mysql -u root -p
CREATE DATABASE fraudshield;
USE fraudshield;
SOURCE database/schema.sql;
SOURCE database/seed_data.sql;
SOURCE database/views.sql;
SOURCE database/stored_procedures.sql;
SOURCE database/triggers.sql;
SOURCE database/fraud_rules.sql;
```

### 2. ML Service (Python FastAPI)

```bash
cd fraudshield-ml
pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000
# Model auto-trains on first startup
```

### 3. Backend (Spring Boot)

```bash
cd fraudshield-backend
./mvnw spring-boot:run
# Or: mvn spring-boot:run
# Runs on http://localhost:8080
```

### 4. Frontend (React + Vite)

```bash
cd fraudshield-frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

## Login Credentials

### Admin Login
- Username: `admin1` (or `admin2`, `admin3`)
- Password: `admin123`

### Customer Login
- Username: `rajesh_sharma` (or any customer username from seed data)
- Password: `customer123`

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS 4 |
| Charts | Recharts |
| Backend | Spring Boot 3.2, Java 21 |
| Security | Spring Security 6, JWT (JJWT) |
| Database | MySQL 8.0+ |
| ML Service | Python FastAPI, scikit-learn |
| Icons | Lucide React |

## Features

### Admin / Fraud Analyst (Primary)
- Real-time fraud detection dashboard with KPIs
- Fraud alerts management with risk scoring
- Transaction monitoring and investigation
- SQL Fraud Engine with 7 advanced rules
- ML-based fraud probability scoring
- AI Investigation Assistant
- Customer risk profiling
- Investigation workflow with notes
- Analytics and reports

### Customer (Secondary)
- Personal banking dashboard
- Transaction history
- Security alerts
- AI Chatbot for fraud queries

## API Endpoints

### Authentication
- `POST /api/auth/login`

### Admin APIs (`/api/admin/**`)
- Dashboard, Fraud Alerts, Transactions, Investigations
- Customers, Analytics, SQL Engine, ML Detection, AI Assistant

### Customer APIs (`/api/customer/**`)
- Dashboard, Transactions, Alerts, Chatbot, Notifications
