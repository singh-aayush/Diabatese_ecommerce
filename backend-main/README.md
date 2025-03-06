
## Backend - Diabetes-Free Products

### 1. Clone the Repository
```sh
git clone https://github.com/Abhishekyaduvanahi/backend
cd backend
```
### 2. Install Dependencies
```sh
npm install
```

### 3. XAMPP
- Install XAMPP
- Run MySQL
- Create new database 'backend'
- Create users table with dummy database
```sh
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- Add dummy users
```sh
INSERT INTO users (name, email, phone, password_hash, role) VALUES
('Alice Johnson', 'alice@example.com', '1234567890', 'hashedpassword1', 'user'),
('Bob Smith', 'bob@example.com', '9876543210', 'hashedpassword2', 'admin'),
('Charlie Brown', 'charlie@example.com', '1122334455', 'hashedpassword3', 'user'),
('David Lee', 'david@example.com', '5566778899', 'hashedpassword4', 'user');
```

### 4.Run the project
```sh
npm start
```
- Go to http://localhost:8000/users must give you list of all users.