# 🧑‍💼 Online Job Portal – MERN Stack

A full-stack **Job Portal web application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
This project connects **job seekers (students)** and **recruiters** on a single platform with secure authentication, role-based access, and real-world backend logic.

🌐 **Live Demo:**  
https://online-job-portal-ptpz.onrender.com

---

## 🚀 Features

### 👨‍🎓 Student
- User registration & login
- Browse and search jobs
- Filter jobs by category and location
- Apply for jobs
- Upload resume
- Track application status
- Manage profile

### 🧑‍💼 Recruiter (Admin)
- Recruiter authentication
- Register and manage companies
- Upload company logo
- Create, update & delete job postings
- View applicants for each job
- Update application status
- Protected admin routes

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS + shadcn/ui
- Redux Toolkit
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js
- Multer (file uploads)
- Cloudinary (media storage)

### Deployment
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## 🧩 Project Structure

```text
Job_portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   │
│   └── index.html
│
├── package.json
├── package-lock.json
└── .gitignore
```



---

## 🔐 Security & Best Practices

- Environment variables for sensitive data
- `.env` file excluded from GitHub
- Password hashing using bcrypt
- JWT-based authentication with cookies
- Role-based route protection
- CORS configured for production deployment

---

## ⚙️ Environment Variables (Backend)

```env
PORT=8001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=your_frontend_url
```

▶️ Run Locally
# Install dependencies
```
npm install
npm install --prefix frontend
```
# Build frontend
```
npm run build
```
# Start backend
```
npm run dev
```
Backend runs on:
```
http://localhost:8001
```


```
📚 What I Learned

Designing RESTful APIs with Express.js

Implementing authentication & authorization

MongoDB schema design and relationships

File uploads using Multer and Cloudinary

Global state management with Redux Toolkit

Securing applications using environment variables

Deploying a full-stack MERN application

```

```

🔮 Future Enhancements

Email notifications for job updates

Pagination and advanced search filters

Admin analytics dashboard

CI/CD pipeline integration


```

```

👨‍💻 Author

Niraj Kumar
Computer Science Student | MERN Stack Developer

⭐ Acknowledgement

This project was built with a strong focus on concept clarity, backend logic, and real-world development practices, inspired by a detailed MERN stack tutorial.

```





