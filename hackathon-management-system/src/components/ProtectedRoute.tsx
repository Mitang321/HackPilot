import React from 'react';
import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, userId } = useAuth();
  
  if (!isLoaded) {
    return <LoadingScreen />;
  }
  
  if (!userId) {
    return <RedirectToSignIn />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;