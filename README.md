# 📝 KANBAN BOARD



https://github.com/user-attachments/assets/6aa8f840-99a5-414d-a666-4307cb595a4e


A Kanban Board web application with drag-and-drop functionality, real-time search, and MongoDB integration to manage tasks efficiently.

---

## 🚀 FEATURES

### 📌 KANBAN BOARD LAYOUT

✅ Four sections: **To Do, In Progress, Peer Review, Done**

✅ Tasks are displayed in their respective columns

### 📌 TASK CARDS

✅ Each task displays a **Title** and shortened **Description**

✅ Tasks can be **dragged** between columns

### 🎯 DRAG AND DROP FUNCTIONALITY

✅ Move tasks between columns **seamlessly**

✅ Maintain task **order** and **position** correctly

### 🔎 SEARCH FUNCTIONALITY

✅ Search bar at the **top** of the board

✅ Filters tasks across all columns **in real-time**

✅ Only matching tasks are displayed as the user types

### ➕ ADD NEW TASKS

✅ Floating button to create new tasks (default to **To Do** column)

✅ Task creation form with **Title** and **Description**

### 🛠️ MONGODB INTEGRATION

✅ Tasks are stored and fetched from **MongoDB Database**

✅ Updates reflect instantly after **drag-and-drop** or **search**

---

## 📥 INSTALLATION & SETUP

### 🔧 BACKEND SETUP

#### Clone the Repository

```sh
git clone https://github.com/your-repo/kanban-board.git
cd kanban-board
```

#### Navigate to Backend Folder

```sh
cd backend
```

#### Install Dependencies

```sh
npm install
```

#### Set Up Environment Variables

Create a `.env` file in the **backend** folder.

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### Create a Project in MongoDB Atlas
- Set up a **cluster**
- Retrieve your **connection string** from the database settings

#### Start the Backend Server

```sh
node server.js
```

---

### 🎨 FRONTEND SETUP

#### Open a New Terminal in the Project Root

#### Install Frontend Dependencies

```sh
npm install
```

#### Start the Frontend Server

```sh
npm run dev
```

#### Access the App

Open [http://localhost:5173](http://localhost:5173) in your browser (Vite default port)

---

## 🛠️ TECHNOLOGIES USED

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Drag & Drop:** react-beautiful-dnd

---

## ✨ CONTRIBUTING

Contributions are welcome! Feel free to fork this repo and submit a pull request. 🚀

---

