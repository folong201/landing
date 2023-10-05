import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; 

import Accueil from './Accueil';
import APropos from './APropos';
import Contact from './Contact';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className='bg-black h-screen'>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
