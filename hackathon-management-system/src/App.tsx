import { Routes, Route } from 'react-router-dom';
import { ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <>
      <ClerkLoading>
        <LoadingScreen />
      </ClerkLoading>
      
      <ClerkLoaded>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </ClerkLoaded>
    </>
  );
}

export default App;