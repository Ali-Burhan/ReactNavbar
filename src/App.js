import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Weather from './component/weather';
import Todo from './component/Todo';
import TicTacToe from './component/TicTacToe';
import BudgetTracker from './component/BudgetTracker';
import About from './component/About';
import Contact from './component/Contact';
function App() {
  return (  
     <>
        <BrowserRouter>
        <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BudgetTracker" element={<BudgetTracker />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </div>
    </BrowserRouter>
     </>
  );
}

export default App;
