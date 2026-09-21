import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  allowedRole?: 'ADMIN' | 'CUSTOMER';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRole }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to={user.role === 'ADMIN' ? '/admin' : '/customer'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
