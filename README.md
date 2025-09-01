# Personal Finance Assistant

A **React-based web application** for managing personal finances, tracking transactions, and generating financial summaries.


---
(*Kindly Find the fastapi based Backend Repository using the below link*)
## [Finance Assistant Backend Github Repository](https://github.com/vdgarg529/typeface-Finance_Assistant-backend.git)
---

## ✨ Features
- **User Authentication**: Secure login and registration system  
- **Transaction Management**: Add, view, and filter income/expense transactions  
- **Financial Statements**: View transaction history with filtering options  
- **Data Visualization**: Interactive charts for spending analysis by category and over time  
- **File Upload**: Support for receipt images and PDF bank statements  
- **Responsive Design**: Works on desktop and mobile devices  

---

## 🛠 Technology Stack
- **Frontend**: React, React Router  
- **Styling**: Tailwind CSS  
- **Charts**: Recharts  
- **HTTP Client**: Axios  
- **Authentication**: JWT tokens  

---

## 📂 Project Structure
```
src/
├── components/              # Reusable UI components
│   ├── AuthForm.jsx         # Login/Registration form
│   ├── ChartCard.jsx        # Data visualization component
│   ├── FileUpload.jsx       # File upload component
│   ├── NavBar.jsx           # Navigation component
│   ├── Pagination.jsx       # Pagination controls
│   ├── TransactionForm.jsx  # Transaction creation form
│   └── TransactionList.jsx  # Transaction display component
├── pages/                   # Main application pages
│   ├── Home.jsx             # Dashboard
│   ├── Statement.jsx        # Transaction statement
│   ├── Summary.jsx          # Financial summary
│   └── Uploads.jsx          # File upload page
├── utils/                   # Utility functions
│   ├── api.js               # API configuration
│   ├── auth.js              # Authentication functions
│   └── token.js             # Token management
├── App.jsx                  # Main application component
└── main.jsx                 # Application entry point
```

---

## ⚙️ Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the root directory with**
   ```env
   VITE_API_BASE_URL=backend_api_url
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🚀 Usage
1. Register a new account or login with existing credentials  
2. Add transactions manually or upload receipt images/PDF statements  
3. View your transaction history on the **Statement** page  
4. Analyze your spending patterns on the **Summary** page with interactive charts  
5. Use filtering options to view specific time periods or categories  

---

## 🔗 API Integration
This frontend is designed to work with a backend API that provides:
- User authentication endpoints  
- Transaction CRUD operations  
- File upload endpoints for receipts and statements  
- Summary data endpoints for charts  

The application uses **JWT tokens** for authentication, stored in **session storage**.

---
