# 🚀 Multi-User Todo Collaboration App

## 📌 Overview

This is a full-stack **multi-user todo collaboration system** that allows users to manage tasks individually and collaboratively. Users can create todos, invite others via email, and work together with role-based permissions. The application focuses on real-world functionality such as secure authentication, token-based invitations, and reliable email delivery.

---

## 🧩 Features

* 🔐 User Authentication (Signup, Login, Logout)
* 📝 Create, Update, Delete Todos
* 📌 Subtasks management
* 👥 Invite collaborators via email
* 🔗 Token-based invitation system
* 📧 Email integration using SendGrid
* 🔑 JWT-based authentication with HTTP-only cookies
* 🔄 OTP-based password reset
* ⚠️ Error handling and edge case management

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* SendGrid (Email Service)

---

## 📂 Project Structure

```
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 ├── db/
 └── index.js

frontend/
 ├── src/
 ├── components/
 ├── pages/
 └── services/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file in backend:

```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
FRONTEND_BASE_URL=http://localhost:5173

SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxx
SENDER_EMAIL=your_verified_email@gmail.com
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔐 Authentication Flow

1. User registers → password hashed → stored in DB
2. User logs in → JWT token generated
3. Token stored in HTTP-only cookies
4. Protected routes verified using middleware

---

## 👥 Collaboration Flow

1. User creates a todo
2. Invites another user via email
3. Backend generates invitation token
4. Email sent using SendGrid
5. User clicks link → token verified
6. Access granted to todo

---

## 📧 Email System

Emails are sent using SendGrid API.

Types of emails:

* Welcome email
* Invitation email
* OTP for password reset

---

## 🔄 API Endpoints (Sample)

### Auth

* POST `/api/user/register`
* POST `/api/user/login`
* POST `/api/user/logout`

### Todos

* POST `/api/todo`
* GET `/api/todo`
* PUT `/api/todo/:id`
* DELETE `/api/todo/:id`

### Collaboration

* POST `/api/todo/invite/:todoId`
* POST `/api/todo/accept-invite`

---

## 🧠 Key Highlights

* Secure authentication using JWT and cookies
* Token-based collaboration system
* Real-world email integration
* Scalable backend architecture
* Clean separation of concerns

---

## ⚠️ Challenges Solved

* Fixed SMTP timeout issues by migrating to SendGrid
* Implemented secure token-based invitation system
* Handled edge cases like expired tokens and unregistered users
* Ensured reliable email delivery

---

## 🚀 Future Improvements

* Real-time collaboration (WebSockets)
* Notifications system
* File attachments in todos
* Role-based access control enhancements

---

## 👨‍💻 Author

**Babu Ali**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
