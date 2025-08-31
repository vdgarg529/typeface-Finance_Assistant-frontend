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



import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { setToken } from '../utils/auth';

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Register first if in register mode
      if (mode === 'register') {
        await api.post('/auth/register', formData);
      }

      // Then log in
      const response = await api.post(
        '/auth/login',
        `username=${formData.username}&password=${formData.password}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      // ✅ Debug: see what backend returns
      console.log("Login response:", response.data);

      // Save token
      setToken(response.data.access_token);

      // ✅ Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === 'login' ? 'Login' : 'Register'}
      </h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          {loading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Register')}
        </button>
        
        <div className="mt-4 text-center">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
