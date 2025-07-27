📊 Excel Analytics Platform

A powerful MERN stack application that enables users to upload Excel files, parse and visualize data dynamically, generate 2D/3D charts, and download them as PNG/PDF. Built for data-driven insights with optional AI summaries.

---
Features:
- User & Admin Authentication (JWT based)
- Excel File Upload & Parsing (.xls/.xlsx via SheetJS)
- Dynamic 2D/3D Chart Generation (Bar, Line, Pie, Scatter)
- Choose X/Y Axes Dynamically
- Upload History Dashboard
- Downloadable Charts (PNG/PDF)
- AI Insights (Optional via OpenAI or similar API)
- Modern & Responsive UI (Tailwind CSS)

---
Tech Stack:
Frontend
- React.js
- Redux Toolkit (optional)
- Tailwind CSS
- Chart.js
- Three.js
- Axios

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file upload)
- SheetJS (xlsx)

Tools & Optional:
- JWT for authentication
- Postman for testing APIs
- Cloudinary (optional for file storage)
- OpenAI API (optional for AI summaries)

---
Folder Structure
```
excel-analytics-platform/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   └── server.js
└── frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── App.js
│   ├── index.js
│   └── index.css

````
---
Setup Instructions:

1. Clone the Repo:
```bash
git clone https://github.com/yourusername/excel-analytics-platform.git
cd excel-analytics-platform
````

---
2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` in `/backend`:

```
MONGO_URI=mongodb://127.0.0.1:27017/excel-analytics
JWT_SECRET=your_jwt_secret
```
Start MongoDB (make sure it's running) and then:

```bash
node server.js
```

---
3. Frontend Setup
```bash
cd ../frontend
npm install
```

Start the frontend:
```bash
npm start
```

---
API Routes
>Auth
* `POST /api/auth/register`
* `POST /api/auth/login`

>Files
* `POST /api/files/upload`
* `GET /api/files/history`

---
Deployment Tips:
* Frontend: Deploy on [Netlify](https://netlify.com)
* Backend: Deploy on [Render](https://render.com) or [Railway](https://railway.app)
* Use environment variables for secure secrets in production.

---
AI Integration (Optional)
Use OpenAI's API to generate summaries from parsed Excel data.
```bash
npm install openai
```

Add an API call in the backend to summarize structured Excel data.

---
Author
Made with ❤️ by VIvek(https://github.com/Vivek-CODER-crypto)
For internship/project submission @ Zidio
---

## 📄 License
This project is licensed under the MIT License.
