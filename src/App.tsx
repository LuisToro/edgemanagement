import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, OurTeam, TheGroup, Contact } from './pages/';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/the-group" element={<TheGroup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
