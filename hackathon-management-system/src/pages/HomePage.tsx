import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full p-6">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full group flex items-center justify-center space-x-2 px-6 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
        >
          <span>Dashboard</span>
          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;