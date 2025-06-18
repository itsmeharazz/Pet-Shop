# 🐾 Pet Shop E-commerce Website & Admin Dashboard

>![User site screebShot](https://i.postimg.cc/XYF3tddc/Screenshot-2025-06-19-020446.png)
---

> ![Admin Dashbord screebShot](https://i.postimg.cc/mrQD3Qh5/screencapture-localhost-5173-admin-2025-06-14-23-45-26.png)

A complete **Pet Food E-commerce platform** built with **React** and **Tailwind CSS** featuring a user-friendly storefront and a powerful admin dashboard. It includes product listings, Google login, data visualization, and dynamic routing.

### 🔗 Live Demo

- 🌐 **User Site**: [Live previwe of my Pet-Shop wevsite](https://pet-shop-one-jade.vercel.app/)

---

## 📦 Features Overview

### 👥 User Website (Client Side)

> Developed with **React**, **Tailwind CSS**, **React Router DOM**, **React Icons**, **Shadcn UI**, and **Google OAuth**.

- **Home Page**: Showcases hero section, categories, and featured products.
- **Shop Page**: Lists all products with pagination, filtering by brand and category.
- **Product Detail Page**: Individual product descriptions, reviews, and add-to-cart option.
- **About Page**: Business story, goals, and customer values.
- **Blog Page**: Articles and pet-related content for customer engagement.
- **Contact Page**: Form with user details, address, and message.
- **Google Login**: User verification using OAuth (with email authentication).
- **Cart & Order Placement**: Add to cart, checkout flow, order placement.

### 🔐 Authentication

- **Google OAuth 2.0**: Login & logout for users via Google account.
- **Email Verification**: Email data is securely extracted for logged-in users.

---

### 🧑‍💼 Admin Dashboard (Admin Side)

> Developed with **React**, **Tailwind CSS**, **React Icons**, **Syncfusion**, and **React Router**.

- **Dashboard Page**: Metrics, stats, and recent activity summary.
- **Order Management**: View, manage, and update customer orders.
- **Charts & Reports**: Interactive charts using **Syncfusion React Charts** (e.g., bar, line, pie charts).
- **Side Navigation & Protected Routes**: Organized layout and route-based access for admins.

---

## ⚙️ Technologies Used

| Area             | Tech Stack                                                            |
| ---------------- | --------------------------------------------------------------------- |
| Frontend (UI)    | React, Tailwind CSS, Shadcn/UI, React Icons                           |
| Routing          | React Router DOM                                                      |
| Charts/Analytics | Syncfusion React Components                                           |
| Authentication   | Google OAuth 2.0                                                      |
| Backend API      | Mock API using JSON Server hosted on [Render.com](https://render.com) |
| State Management | React Context API (for cart, auth, and order management)              |

---

## 🌍 Folder Structure

petfood-ecommerce/
├── client/ # User website
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.js
├── admin/ # Admin dashboard
│ ├── components/
│ ├── pages/
│ └── App.js
├── server/ (Optional) # Local development data
│

---

## 🚀 Getting Started Locally

### 1. Clone Repository

git clone https://github.com/itsmeharazz/Pet-Shop

cd pet-Shop

2. Install Client Dependencies

npm install

npm start

The website will start on http://localhost:5173

3. Install Admin Dependencies

npm install

npm start

The website will start on http://localhost:5173/admin

4. JSON Server (Optional if using Render)

cd ../server

npx json-server --watch db.json --port 3000

🔗 Or use the Render-hosted JSON server:

fetch("https://your-render-api-url.onrender.com/products");
🔐 Google OAuth Setup
OAuth login integrated via @react-oauth/google.

Client ID and scopes configured via Google Cloud Console.

Tokens are stored in state for secure access and user sessions.
