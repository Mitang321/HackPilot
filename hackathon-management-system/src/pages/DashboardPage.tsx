import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { User, LogOut } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  
  if (!user) return null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Hackathon Management System
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors duration-200">
                  <User className="h-5 w-5" />
                </button>
              </div>
              
              <button 
                onClick={() => signOut()}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                aria-label="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Hello {user.firstName || user.username}
          </h2>
          <p className="text-lg text-gray-700">
            Welcome to the Hackathon Management System
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;