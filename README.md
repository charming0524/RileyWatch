# 🎬 RileyWatch

**RileyWatch** is a full-stack **Movie Recommendation App** that suggests personalized movies using a **hybrid recommender system** (content-based + collaborative filtering).  
It features a **dark-themed UI**, secure authentication, favourites, watchlist, and infinite movie carousels — built to give you a modern streaming-like experience.

---

## ✨ Features

- 🎥 **AI-Powered Recommendations** – Personalized suggestions with hybrid algorithms.
- 🔐 **User Authentication** – Secure JWT login/register system.
- ❤️ **Favourites & Watchlist** – Save and manage your movies.
- 🔎 **Smart Search & Genre Filter** – Explore by genres and search across TMDb.
- 📺 **Trending & Popular Sections** – Auto-scrolling movie carousels.
- 🎨 **Dark Themed UI** – Netflix-inspired, responsive design with smooth animations.

---

## 🚀 Live Demo

👉 [https://rileywatch.netlify.app]


![img1](/img/GuestHomePage.png)
![img6](/img/MovieDetails.png)
![img8](/img/SimilarMovies.png)

---

## 🛠️ Tech Stack

**Frontend:**

- ⚛️ React (Vite + TypeScript)
- 🎨 CSS (Dark Theme, Responsive Design)

**Backend:**

- 🌐 Node.js + Express
- 🗄️ MongoDB + Mongoose
- 🔑 JWT Authentication
- 🎬 TMDb API (movie data)

**Other Tools:**

- Vercel + Netlify (Deployment)
- Hybrid Recommender (Content-based + Collaborative Filtering)

---

## 📂 Repository Structure

```
RileyWatch/
│── frontend/   # React + Vite frontend
│── backend/    # Node.js + Express + MongoDB backend
```

---

## 📸 Screenshots / Demo

- Login & Register
  ![img4](/img/LoginPage.png)
- Home Page with Trending & Popular  
  ![img2](/img/RegisteredUserHomePage.png)
- Search & Genre browsing  
  ![img5](/img/SearchResults.png)
  ![img3](/img/MoviesPage.png)
- Favourites / Watchlist  
  ![img7](/img/ProfilePage.png)

---

## 📖 Project Overview

RileyWatch combines **machine learning recommendations** with a **streaming-style UI**.  
The goal is to help users discover new movies based on their interests and habits.

---

## 🔧 Getting Started (Local Development)

### Prerequisites

- Node.js
- MongoDB
- TMDb API Key

### Environment Variables

Create a `.env` file in the `backend/` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TMDB_API_KEY=your_tmdb_api_key
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Reference (Highlights)

- **Auth**: `/api/auth/login`, `/api/auth/register`
- **Movies**: `/api/movies/popular`, `/api/movies/trending`, `/api/movies/recommendations`
- **User**: `/api/user/favourites`, `/api/user/watchlist`

---

## 🧠 Recommender System (How it Works)

- **Content-based filtering** – Recommends movies similar to what you’ve liked.
- **Collaborative filtering** – Suggests based on ratings from users with similar taste.
- **Hybrid approach** – Combines both methods for smarter results.

---

## 📊 Data Models (Overview)

- **User** – authentication, favourites, watchlist
- **Movie** – movie details synced from TMDb
- **Rating** – stores ratings & comments for collaborative filtering

---

## 🎯 About This Project

I built RileyWatch to explore **AI-driven movie recommendations** and sharpen my **fullstack skills**:

- Learned how to implement **secure authentication** with JWT.
- Integrated **TMDb API** for real movie data.
- Built a **hybrid recommendation system** from scratch.
- Designed a **responsive dark theme UI** inspired by modern streaming apps.

---

## ⭐ Get Involved

- Star ⭐ the repo if you like it
- Fork & experiment with your own recommender ideas
- Share feedback with me on LinkedIn!
