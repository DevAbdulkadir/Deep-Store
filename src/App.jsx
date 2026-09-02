import {  Routes, Route, Navigate } from 'react-router-dom';
// import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Category from "./pages/category/Category";
import ProductDetails from "./pages/product details/ProductDetails";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './App.css'


function App() {

  return (
    <>
      <AuthProvider>
       
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />

                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes (Require Login) */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    {/* Add more protected pages here later like <Route path="/cart" element={<Cart/>} /> */}
                </Route>

                {/* Fallback route: If URL is not found, redirect to login */}
                <Route path="*" element={<Navigate to="/login" replace />} />

                <Route
                    path="/categories/:category"
                    element={<Category />}
                />

                <Route
                    path="/products/:productId"
                    element={<ProductDetails />}
                />
            </Routes>
        
 
      </AuthProvider>
      
      
    </>
  )
}

export default App

