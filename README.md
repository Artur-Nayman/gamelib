# 🎮 Game Library Aggregator

A **full-stack web application** that allows users to view and manage their owned game libraries from multiple platforms in one place.

The project focuses on **secure authentication**, **OAuth integrations**, and **clean, scalable architecture**, inspired by launchers like Heroic — but built as a web-first solution.

---

## 🚀 Key Features

- 🔐 **User Authentication**
  - Secure user registration and login
  - Token-based authentication using JWT

- 🔗 **OAuth Integrations**
  - Connect external gaming accounts (Epic Games, GOG)
  - No password storage — OAuth 2.0 only
  - Secure access and refresh token handling

- 🎮 **Unified Game Library**
  - Fetch and display owned games from multiple platforms
  - Grid-based UI with game covers and titles
  - Platform-based filtering

- 🔄 **Library Synchronization**
  - Initial and manual re-sync of connected accounts
  - Only new games are added — no duplication

- 🧱 **Scalable Architecture**
  - Decoupled frontend and backend
  - Ready for desktop (Electron / Tauri) or mobile extensions

---

## 🛠 Tech Stack

### Frontend
- React
- REST API communication
- State-based UI (authentication, loading, errors)

### Backend
- Node.js
- Express
- RESTful API architecture

### Database
- MongoDB
- Flexible schema for multi-provider data

### Authentication & Security
- JWT for internal authentication
- OAuth 2.0 for third-party platform access
- Secure token storage and refresh handling

---

## 🧠 Architecture Overview

- Client–server architecture
- REST API with clear separation of concerns
- Token-based authentication
- Provider-agnostic game data model

The backend is fully independent from the frontend, allowing easy scaling and future extensions such as desktop or mobile clients.

---

## 📌 Project Goals

- Practice real-world OAuth 2.0 integrations
- Build a production-style full-stack architecture
- Work with external APIs and secure token management
- Create a clean, portfolio-ready project

---

## ⚠️ Disclaimer

This project is **not affiliated with Epic Games, GOG, or any other gaming platform**.  
All trademarks and platform names belong to their respective owners.

---

## 📈 Possible Future Improvements

- Steam integration
- Tags and advanced search filters
- Public / private libraries
- Desktop application wrapper
- Extended game metadata

---

## 📄 License

This project is intended for **educational and portfolio purposes**.
