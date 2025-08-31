// import { Link, useLocation } from 'react-router-dom';
// import { getUsernameFromToken } from '../utils/auth';

// const NavBar = ({ onLogout }) => {
//   const location = useLocation();
//   const username = getUsernameFromToken();

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav className="bg-blue-600 text-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-4">
//             <Link to="/" className="text-xl font-bold">
//               Personal Finance Assistant
//             </Link>
//             <div className="hidden md:flex space-x-4">
//               <Link 
//                 to="/" 
//                 className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/statement" 
//                 className={`px-3 py-2 rounded-md ${isActive('/statement') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//               >
//                 Statement
//               </Link>
//               <Link 
//                 to="/summary" 
//                 className={`px-3 py-2 rounded-md ${isActive('/summary') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//               >
//                 Summary
//               </Link>
//               <Link 
//                 to="/upload" 
//                 className={`px-3 py-2 rounded-md ${isActive('/upload') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//               >
//                 Upload
//               </Link>
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <span>Hello, {username}</span>
//             <button
//               onClick={onLogout}
//               className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile menu */}
//         <div className="md:hidden flex flex-wrap justify-center space-x-2 py-2">
//           <Link 
//             to="/" 
//             className={`px-3 py-1 rounded-md ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//           >
//             Home
//           </Link>
//           <Link 
//             to="/statement" 
//             className={`px-3 py-1 rounded-md ${isActive('/statement') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//           >
//             Statement
//           </Link>
//           <Link 
//             to="/summary" 
//             className={`px-3 py-1 rounded-md ${isActive('/summary') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//           >
//             Summary
//           </Link>
//           <Link 
//             to="/upload" 
//             className={`px-3 py-1 rounded-md ${isActive('/upload') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
//           >
//             Upload
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




// components/NavBar.jsx
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ onLogout, username }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">
              Personal Finance Assistant
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
                Home
              </Link>
              <Link 
                to="/statement" 
                className={`px-3 py-2 rounded-md ${isActive('/statement') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
                Statement
              </Link>
              <Link 
                to="/summary" 
                className={`px-3 py-2 rounded-md ${isActive('/summary') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
                Summary
              </Link>
              <Link 
                to="/upload" 
                className={`px-3 py-2 rounded-md ${isActive('/upload') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
                Upload
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>Hello, {username}</span>
            <button
              onClick={onLogout}
              className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden flex flex-wrap justify-center space-x-2 py-2">
          <Link 
            to="/" 
            className={`px-3 py-1 rounded-md ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
          >
            Home
          </Link>
          <Link 
            to="/statement" 
            className={`px-3 py-1 rounded-md ${isActive('/statement') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
          >
            Statement
          </Link>
          <Link 
            to="/summary" 
            className={`px-3 py-1 rounded-md ${isActive('/summary') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
          >
            Summary
          </Link>
          <Link 
            to="/upload" 
            className={`px-3 py-1 rounded-md ${isActive('/upload') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;