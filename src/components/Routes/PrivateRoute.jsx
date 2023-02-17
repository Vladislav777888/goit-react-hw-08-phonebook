import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/login" replace /> : <Outlet />;
};
