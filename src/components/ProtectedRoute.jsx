import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute() {
  const { user } = useAuth();

  // If the user isn't logged in, redirect them to /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If they are logged in, render the protected page (Outlet)
  return <Outlet />;
}