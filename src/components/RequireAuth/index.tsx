import { useAuth } from '../Auth';
import { Navigate, useLocation } from 'react-router-dom';

export type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    return <Navigate to="/login" state={{ path: location }} />;
  }

  return children;
};
