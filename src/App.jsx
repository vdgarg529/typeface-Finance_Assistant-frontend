// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import AuthForm from './components/AuthForm';
// import Home from './pages/Home';
// import Statement from './pages/Statement';
// import Summary from './pages/Summary';
// import Uploads from './pages/Uploads';
// import { getToken, removeToken } from './utils/auth';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is authenticated on app load
//     const token = getToken();
//     setIsAuthenticated(!!token);
//     setIsLoading(false);
//   }, []);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     removeToken();
//     setIsAuthenticated(false);
//   };

//   if (isLoading) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {isAuthenticated && <NavBar onLogout={handleLogout} />}
        
//         <main className={isAuthenticated ? "container mx-auto px-4 py-8" : ""}>
//           <Routes>
//             {isAuthenticated ? (
//               <>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/statement" element={<Statement />} />
//                 <Route path="/summary" element={<Summary />} />
//                 <Route path="/upload" element={<Uploads />} />
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </>
//             ) : (
//               <>
//                 <Route 
//                   path="/login" 
//                   element={<AuthForm mode="login" onSuccess={handleLoginSuccess} />} 
//                 />
//                 <Route 
//                   path="/register" 
//                   element={<AuthForm mode="register" onSuccess={handleLoginSuccess} />} 
//                 />
//                 <Route path="*" element={<Navigate to="/login" replace />} />
//               </>
//             )}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;





// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import Statement from './pages/Statement';
import Summary from './pages/Summary';
import Uploads from './pages/Uploads';
import { getToken, removeToken } from './utils/token';
import { getUsernameFromToken } from './utils/token';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
      setUsername(getUsernameFromToken() || '');
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    const token = getToken();
    setIsAuthenticated(true);
    setUsername(getUsernameFromToken() || '');
  };

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
    setUsername('');
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isAuthenticated && <NavBar onLogout={handleLogout} username={username} />}
        
        <main className={isAuthenticated ? "container mx-auto px-4 py-8" : ""}>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/upload" element={<Uploads />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route 
                  path="/login" 
                  element={<AuthForm onSuccess={handleLoginSuccess} />} 
                />
                <Route 
                  path="/register" 
                  element={<AuthForm onSuccess={handleLoginSuccess} />} 
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;