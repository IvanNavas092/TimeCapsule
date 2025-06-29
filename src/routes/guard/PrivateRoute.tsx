// routes/guard/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
