// import {  Routes, Route, Navigate } from 'react-router-dom';
// // import Home from "./pages/home/Home";
// import Cart from "./pages/cart/Cart";
// import Orders from "./pages/orders/Orders";
// import Category from "./pages/category/Category";
// import ProductDetails from "./pages/product details/ProductDetails";
// import Login from "./pages/login/Login.jsx";
// import Register from "./pages/register/Register.jsx";
// import { AuthProvider, useAuth } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute.jsx';
// // import './App.css'

// // This acts as a temporary "Home" screen you see after logging in
// function Home() {
//     const { user, logout } = useAuth();
//     if (!user) {
//         return null; 
//     }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
//       <h1 className="text-2xl font-bold text-green-700 mb-4">Welcome Home, {user.fullName}!</h1>
//       <pre className="bg-white p-4 rounded-lg shadow text-sm border border-green-200 mb-4 text-left">
//         {JSON.stringify(user, null, 2)}
//       </pre>
//       <button onClick={logout} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//         Logout
//       </button>
//     </div>
//   );
// }

// function App() {

//   return (
//     <>
//       <AuthProvider>
       
//             <Routes>
//                 <Route path="/" element={<Home />} />

//                 <Route path="/cart" element={<Cart />} />

//                 {/* Public Routes */}
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
                
//                 {/* Protected Routes (Require Login) */}
//                 <Route element={<ProtectedRoute />}>
//                     <Route path="/" element={<Home />} />
//                     {/* Add more protected pages here later like <Route path="/cart" element={<Cart/>} /> */}
//                 </Route>

//                 {/* Fallback route: If URL is not found, redirect to login */}
//                 <Route path="*" element={<Navigate to="/login" replace />} />

//                 <Route
//                     path="/categories/:category"
//                     element={<Category />}
//                 />

//                 <Route
//                     path="/products/:productId"
//                     element={<ProductDetails />}
//                 />
//             </Routes>
        
 
//       </AuthProvider>
      
      
//     </>
//   )
// }

// export default App



import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  const { user, logout } = useAuth();

  // 1. First safety check
  if (!user) {
    return null; 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      {/* 2. Second safety check: Notice the question mark ? before .fullName */}
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Welcome Home, {user?.fullName}!
      </h1>
      
      <pre className="bg-white p-4 rounded-lg shadow text-sm border border-green-200 mb-4 text-left">
        {JSON.stringify(user, null, 2)}
      </pre>
      
      <button onClick={logout} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}