# MERN Stack Admin Dashboard

This project is a full-featured MERN (MongoDB, Express, React, Node.js) Admin Dashboard application. Designed for managing and visualizing product and transaction data, it offers a comprehensive set of tools for admins, including interactive charts, data tables, and detailed user insights

## Project Overview

The Admin Dashboard allows users to track products, customers, transactions, and overall sales statistics. The application provides an interactive interface for managing data and generating analytics. The frontend is built with React, Redux Toolkit, Material UI, and Nivo Charts, while the backend uses Node.js, Express, and MongoDB.

### Key Features

- **Dashboard Layout:** An interactive and responsive dashboard to monitor product, transaction and sales data.
- **State Management:** Redux Toolkit is utilized for efficient state management across the application.
- **Material UI:** A comprehensive component library for building the UI.
- **Nivo Charts:** A charting library for visualizing data with dynamic charts.
- **API Integration:** RESTful APIs for managing products, transactions, and user information.
- **Geographic Insights:** Visual representation of user locations.

## Project Structure

The project is divided into two main folders:

- **server:** Contains the backend code with Node.js and Express.
- **client:** Contains the frontend code built with React.

### Backend (`server`)

- **Node.js:** Used as the runtime environment.
- **Express.js:** Serves as the backend framework for handling requests and routing.
- **MongoDB:** A NoSQL database for storing and managing application data.
- **Mongoose:** Used for data modeling and schema validation.

### Frontend (`client`)

- **React:** The JavaScript library for building user interfaces.
- **Redux Toolkit:** Manages the application state.
- **Material UI:** Provides a set of reusable components for building the UI.
- **Nivo Charts:** Used to create dynamic and interactive charts for data visualization.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- npm or yarn


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mahmoudhusam/admin-dashboard-mern.git
   cd admin-dashboard-mern

2. **Install dependencies:**
    Navigate to both the `server` and `client` directories and run the following commands:

   ```bash
   cd server
   npm install
   
   cd ../client
   npm install   


3. **Set Up Environment Variables:**

   Create a .env file in the server directory and add your environment variables (e.g., MONGO_URI).

4. **Run the Application:**:

- ***Start the Backend Server:***
   ```bash
   cd server
   npm run dev

- ***Start the Frontend Server:***
   ```bash
   cd ../client
   npm run start