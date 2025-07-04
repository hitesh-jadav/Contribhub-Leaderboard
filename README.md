👥 ContribHub Leaderboard
A full-stack web application that fetches, stores, and ranks developers based on their GitHub and StackOverflow public contributions.

🔍 Features
🔐 User Registration and Login with GitHub ID & StackOverflow ID

📊 Leaderboard displaying top contributors based on GitHub followers and SO reputation

🧑‍💼 Personal Profile page with GitHub & StackOverflow data

🔁 Manual refresh to update public data in the database

⏰ cron job for automatic midnight data refresh

🧠 Auto-highlight for logged-in users on the leaderboard

📂 Data stored and managed in MongoDB

🔗 Direct linking to external GitHub or StackOverflow profiles

🛠️ Tech Stack
Frontend:

HTML

CSS

EJS (Embedded JavaScript Templates)

Backend:

Node.js

Express.js

MongoDB with Mongoose

JWT Authentication

Bcrypt for password hashing

APIs Used:

GitHub REST API

StackOverflow API (via StackExchange)

🚀 Getting Started
📦 1. Clone the Repository

git clone https://github.com/hitesh-jadav/contribhub-leaderboard.git
cd contribhub-leaderboard

📁 2. Install Dependencies

npm install

🔑 3. Setup Environment Variables
Create a .env file in the root with the following:

MONGO_URI=mongodb://localhost:27017/contribhub
JWT_SECRET=your_secret_key
PORT=5002

▶️ 4. Run the Project

npm start

Now, open your browser at:

http://localhost:5002


📂 Folder Structure

contribhub-leaderboard/
│
├── models/               # MongoDB models
├── controllers/          # Business logic
├── routes/               # Express routes
├── views/                # EJS templates
├── public/               # CSS and static files
├── utils/                # API fetchers for GitHub & SO
├── middleware/           # JWT auth middleware
├── scheduler/            # Auto Schedular 
├── server.js             # Main server entry point
└── .env                  # Environment config


🧠 Future Improvements

📈 Add charts for contribution growth

🕵️‍♂️ Filter leaderboard by tech stacks

👤 Add follow button.
