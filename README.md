# 👥 ContribHub Leaderboard

A full-stack web application that fetches, stores, and ranks developers based on their **GitHub** and **StackOverflow** public contributions.

---

## 🔍 Features

- 🔐 **User Registration and Login** with GitHub ID & StackOverflow ID  
- 📊 **Leaderboard** displaying top contributors based on GitHub followers and StackOverflow reputation  
- 🧑‍💼 **Personal Profile Page** with GitHub & StackOverflow data  
- 🔁 **Manual Refresh** to update public data in the database  
- ⏰ **Cron Job** for automatic midnight data refresh  
- 🧠 **Auto-highlight** for logged-in users on the leaderboard  
- 📂 **Data stored in MongoDB**  
- 🔗 **Direct links** to external GitHub and StackOverflow profiles  

---

## 🛠 Tech Stack

### 🚀 Frontend:
- HTML  
- CSS  
- EJS (Embedded JavaScript Templates)

### 🔧 Backend:
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- Bcrypt for password hashing

### 🌐 APIs Used:
- GitHub REST API  
- StackOverflow API (via StackExchange)

---

## 🚀 Getting Started

### 📦 1. Clone the Repository

```bash
git clone https://github.com/hitesh-jadav/contribhub-leaderboard.git
cd contribhub-leaderboard
```

### 📁 2. Install Dependencies

```bash
npm install
```

### 🔑 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=mongodb://localhost:27017/contribhub
JWT_SECRET=your_secret_key
PORT=5002
```

### ▶ 4. Run the Project

```bash
npm start
```

Open your browser and go to:

```
http://localhost:5002
```

---

## 📂 Folder Structure

```bash
contribhub-leaderboard/
│
├── models/               # MongoDB models
├── controllers/          # Business logic
├── routes/               # Express routes
├── views/                # EJS templates
├── public/               # CSS and static files
├── utils/                # API fetchers for GitHub & SO
├── middleware/           # JWT auth middleware
├── scheduler/            # Cron job for auto-refresh
├── server.js             # Main server entry point
└── .env                  # Environment config
```

---

## 🧠 Future Improvements

- 📈 Add charts for contribution growth  
- 🕵️ Filter leaderboard by tech stacks  
- 👤 Add follow buttons for profiles  

---

## 💬 Feedback

If you have any feedback, suggestions, or feature requests, feel free to open an issue or connect with me on GitHub!

---

