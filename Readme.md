# वर्तालाप (Vartalaap) – The Art of Conversation

> _"Where every conversation matters."_

---

![Vartalaap Banner](https://img.shields.io/badge/Vartalaap-Chat_App-blueviolet?style=for-the-badge&logo=wechat)

Vartalaap (वर्तालाप) is a modern, real-time chat application inspired by the spirit of open, joyful conversation. Built with a robust Node.js/Express backend and a sleek React + Tailwind CSS frontend, it delivers a seamless messaging experience with a touch of Indian flair.

---

## ✨ Features

- **Real-Time Messaging:** Instant chat powered by Socket.IO.
- **User Authentication:** Secure signup/login with JWT, bcrypt, and cookies.
- **Modern UI:** Responsive, glassmorphic design with Tailwind CSS and DaisyUI.
- **Online Presence:** See who’s online in real time.
- **Search & Conversations:** Effortlessly find and chat with friends.
- **Profile Avatars:** Auto-generated avatars based on gender and username.
- **Notifications:** Sound and visual cues for new messages.
- **Logout & Session Management:** Secure, one-click logout.
- **Mobile Friendly:** Works beautifully on all devices.

---

## 🛠️ Tech Stack

**Backend:**<br>
<img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/bcryptjs-003A70?logo=javascript&logoColor=white" />

**Frontend:**<br>
<img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/DaisyUI-FF69B4?logo=daisyui&logoColor=white" />
<img src="https://img.shields.io/badge/Zustand-000000?logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/React_Hot_Toast-FFB300?logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white" />

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Vartalaap.git
cd Vartalaap
```

### 2. Setup Environment Variables

Create a `.env` file in `/backend` with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 3. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run the App

```bash
# In /backend
npm run dev

# In /frontend (in a new terminal)
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to start chatting!

---

## 🖼️ App Preview

> _Add screenshots or GIFs here: login, chat, sidebar, mobile view, etc._

---

## 📚 Project Structure

```text
Vartalaap/
  backend/      # Express, MongoDB, Socket.IO
  frontend/     # React, Vite, Tailwind CSS
```

- **backend/controllers/** – Auth, user, and message logic
- **backend/models/** – Mongoose schemas for User, Message, Conversation
- **backend/socket/** – Real-time server logic
- **frontend/src/components/** – Modular React UI (messages, sidebar, etc.)
- **frontend/src/context/** – Auth and Socket context providers
- **frontend/src/hooks/** – Custom React hooks for API and state
- **frontend/src/zustand/** – Global state management

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [DiceBear Avatars](https://www.dicebear.com/) for profile images
- [Socket.IO](https://socket.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

---

> _Vartalaap – Where every conversation matters._
