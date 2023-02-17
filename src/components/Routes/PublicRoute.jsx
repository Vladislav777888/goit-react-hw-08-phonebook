import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  // const location = useLocation();

  return isLoggedIn ? <Navigate to="/contacts" replace /> : <Outlet />;
};
