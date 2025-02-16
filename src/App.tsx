import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import DonationPage from './pages/DonationPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Rewards from './pages/Rewards';
import Feedback from './pages/Feedback';
import Settings from './pages/Settings';
import LearningModules from './pages/LearningModules';
import FAQ from './pages/FAQ';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/signup" 
          element={!isAuthenticated ? <SignUp onSignup={handleSignup} /> : <Navigate to="/" />} 
        />
        <Route path="/donate/:referralCode" element={<DonationPage />} />
        {isAuthenticated ? (
          <Route path="/" element={<Layout onLogout={handleLogout} />}>
            <Route index element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="learning" element={<LearningModules />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;