import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import MainPage from './Page/MainPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
