# Broadcast Order Notification API

This project implements a backend API that broadcasts order notifications to nearby drivers based on pincodes.

The goal of this assignment is to demonstrate:
- clean backend structure
- correct matching logic
- clear separation of concerns
- readable and testable code

All external services are mocked as instructed.

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/devkrishna18/broadcast-order-api.git
cd broadcast-order-api
```
### 2.Install Dependecies
```bash
  npm install
```
### 3. Create .env file
```bash
  MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/broadcast
  ```
### 4. Seed sample driver data
```bash
  npm run seed
```
### 5. Start the server
```bash
  npm start
```
Server runs on: 
http://localhost:3000


---

## 🧠 How It Works

1. An order is placed at a given pincode
2. Nearby pincodes are determined using mocked logic
3. Drivers working in those pincodes are matched
4. SMS notifications are simulated via console logs
5. API returns the number of drivers notified

---

## 📍 Nearby Pincode Logic (Mocked)

To keep the solution simple and aligned with the assignment example, nearby pincodes are mocked.
For an order pincode `P`, nearby pincodes are assumed as: [P, P+1, P+2, P+3, P+4]


This simulates a small service radius without using real geolocation APIs.

---

## 👥 Driver Matching Logic

Each driver stores a list of pincodes where they operate.

A driver is considered a match if **any** of their working pincodes exists in the nearby pincode list.

MongoDB `$in` query is used for efficient matching.

---
---

## 🖥️ Sample Output

When an order is placed at pincode `123456`, the following drivers are matched:

Matched Users:

Sita: +916666666666 (works in 123456, 123460)

xyz: +916666886666 (works in 123457, 123459)  
SMS sent to +916666666666: New order available near pincode 123456   
SMS sent to +916666886666: New order available near pincode 123456

API Response:

```json
{
  "success": true,
  "driversNotified": 2
}
```

## 📂 Project Structure
broadcast-order-api/  
│  
├── seed.js  
├── package.json  
├── .gitignore  
│  
└── src/  
├── index.js  
├── config/  
│ └── database.js  
├── controllers/  
│ └── bsControllers.js  
├── models/  
│ └── Drivers.js  
├── routes/  
│ └── broadcastRoutes.js  
└── utils/  
├── pincode.js  
└── sms.js  

---



