"use client";

import { useEffect, useState } from 'react';
import Login from '../Login';
import AdminPanel from '../AdminPanel';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    // Check localStorage for authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      // Store authentication status in localStorage
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      // Clear authentication status
      localStorage.removeItem('isAuthenticated');
    }
  }, [isAuthenticated]);

  return (
    <div>
      {isAuthenticated ? (
        <AdminPanel />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
