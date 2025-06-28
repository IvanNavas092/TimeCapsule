import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <>{children}</> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
