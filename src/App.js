// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAccommodation from './Components/Pages/AddAccommodation';
import AddHall from './Components/Pages/AddHall';
import AddRoom from './Components/Pages/AddRoom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add-accommodation" element={<AddAccommodation />} />
          <Route path="/" element={<AddHall />} />
          <Route path="/add-room" element={<AddRoom />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;