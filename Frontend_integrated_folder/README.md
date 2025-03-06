# Diabetes-Free Products

## Overview

This project consists of a _.JSX frontend_ and an _Express.js backend_ using _MySQL2_ for database management. The platform helps manage diabetes-free products efficiently.

## Tech Stack

- _Frontend:_ Next.js, React (.JSX We used Not .TSX)
- _Backend:_ Node.js, Express.js, MySQL2
- _Database:_ MySQL (XAMPP for local development)

---

## 1 frontend setup

sh
git clone (url)
cd frontend

## 2. Install Dependencies

sh
npm install

## Run the Frontend Server

sh
npm run dev

# backend setup

## 1. Clone the Repository

sh
git clone (url)
cd backend

## 2. Install Dependencies

sh
npm install

## 3. XAMPP (Database Setup)

- Install XAMPP
- Start MySQL
- Create a new database backend
- Create a users table with the following structure:

sql
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone VARCHAR(15) NOT NULL,
password_hash VARCHAR(255) NOT NULL,
role ENUM('admin', 'user') DEFAULT 'user',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

- Add dummy users:
  sql
  INSERT INTO users (name, email, phone, password_hash, role) VALUES
  ('Alice Johnson', 'alice@example.com', '1234567890', 'hashedpassword1', 'user'),
  ('Bob Smith', 'bob@example.com', '9876543210', 'hashedpassword2', 'admin'),
  ('Charlie Brown', 'charlie@example.com', '1122334455', 'hashedpassword3', 'user'),
  ('David Lee', 'david@example.com', '5566778899', 'hashedpassword4', 'user');

## 4. Run the Backend Server

sh
npm start

- Navigate to [http://localhost:8000/users](http://localhost:8000/users) to check if the backend is running correctly.

---

# Frontend Setup

## 1. Clone the Repository

sh

cd frontend

## 2. Install Dependencies

sh
npm install

## 3. Configure Environment Variables

Create a .env.local file and configure API URLs:
sh
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

## 4. Run the Frontend Server

sh
npm run dev

- Navigate to [http://localhost:3000](http://localhost:3000) to view the Next.js application.

---

## API Endpoints

### Users

- POST /auth/singup - Register a new user
- POST /auth/login - User login (returns token)
- POST /auth/logout - User logout
- GET /auth/profile - Fetch authenticated user's profile
- PUT /auth/profile - Update authenticated user's profile
- POST /auth/forgot-password - Initiate password reset process
- POST /auth/reset-password - Reset user password
- GET /users - Fetch all users
- POST /users - Create a new user
- GET /users/:id - Fetch user by ID
- PUT /users/:id - Update user details
- DELETE /users/:id - Delete user
- POST /auth/register - Register a new user
- POST /auth/login - User login (returns token)
- GET /users - Fetch all users
- POST /users - Create a new user
- GET /users/:id - Fetch user by ID
- PUT /users/:id - Update user details
- DELETE /users/:id - Delete user

---

## Features

- User Authentication & Role Management
- Secure API with Express and MySQL2
- Interactive UI using Next.js

---

## License

This project is open-source and available under the MIT License.

---

## Author

Developed by _Abhishek Yadav_
