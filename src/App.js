import React from 'react';

import Home from './components/Home'
import Navbar from './components/Navbar';
import TVPage from './components/TVPage';
import MoviePage from './components/MoviePage';
import NotFound from './components/NotFound';
import Results from './components/Results';
import WhereToWatch from './components/WhereToWatch';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findTV" element={<TVPage />} />
        <Route path="/findMovie" element={<MoviePage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/whereToWatch" element={<WhereToWatch />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
