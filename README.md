# Team Task Manager

A full-stack web application to manage team tasks, assign work, and track progress. Built using React, Node.js, Express, and MySQL, and deployed online.

---

## Live Demo

Frontend: https://client-livid-eight-87.vercel.app
Backend API: https://team-task-manager-production-5918.up.railway.app

---

## Features

* Create tasks
* Assign tasks to team members
* Track task status (Pending / In Progress / Done)
* Delete tasks
* Responsive user interface

---

## Tech Stack

### Frontend

* React.js
* Axios

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Deployment

* Vercel (Frontend)
* Railway (Backend)

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

---

### 2. Backend Setup

```bash
cd server
npm install
npm start
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm start
```

---

## Database Setup (MySQL)

Run the following SQL commands:

```sql
CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  assignedTo VARCHAR(255),
  status VARCHAR(50)
);
```

---

## API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Get all tasks   |
| POST   | /tasks     | Create new task |
| DELETE | /tasks/:id | Delete task     |



## Future Improvements

* User authentication (Login/Signup)
* Role-based access (Admin/Member)
* Project management
* Task update/edit feature

---

## Author

Sathwika

---

## Acknowledgement

This project was built as part of a full-stack development assignment.

---
