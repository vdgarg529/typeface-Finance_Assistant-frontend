// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../utils/api';
// import { setToken } from '../utils/auth';

// const AuthForm = ({ mode, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       if (mode === 'register') {
//         await api.post('/auth/register', formData);
//       }

//       const response = await api.post('/auth/login', 
//         `username=${formData.username}&password=${formData.password}`,
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           }
//         }
//       );

//       setToken(response.data.access_token);
//       onSuccess();
//     } catch (err) {
//       setError(err.response?.data?.detail || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {mode === 'login' ? 'Login' : 'Register'}
//       </h2>
      
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
        
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
        
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
//         >
//           {loading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Register')}
//         </button>
        
//         <div className="mt-4 text-center">
//           {mode === 'login' ? (
//             <p>
//               Don't have an account?{' '}
//               <Link to="/register" className="text-blue-600 hover:underline">
//                 Register here
//               </Link>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-600 hover:underline">
//                 Login here
//               </Link>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;





// components/AuthForm.jsx
import React, { useState } from "react";
import { login, register } from "../utils/auth";
import { setToken } from "../utils/token";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // ✅ Login (x-www-form-urlencoded)
        const data = await login(username, password);
        setToken(data.access_token);
        window.location.href = "/"; // redirect after login
      } else {
        // ✅ Register (JSON)
        await register(username, password);
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError("Invalid credentials or server error.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
