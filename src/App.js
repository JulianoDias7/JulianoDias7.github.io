// App.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Estoque from './components/Pages/Estoque/Estoque';
import RH from './components/Pages/RH/RH';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rh" element={<RH />} />
          <Route path="/estoque" element={<Estoque />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
