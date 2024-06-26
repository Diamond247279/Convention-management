// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAccommodation from './Components/Pages/AddAccommodation';
import AddHall from './Components/Pages/AddHall';
import AddRoom from './Components/Pages/AddRoom';
import NewChurch from './Components/Pages/newchurch';
import NewConvention from './Components/Pages/newconvention';
import Batch from './Components/Pages/batch';
import Swap from './Components/Pages/swap';
import Register from './Components/Pages/register';
import RegisterDirect from './Components/Pages/directregistration';
import ListHall from './Components/Pages/listhall';
import ListChurch from './Components/Pages/listchurch';
import ListConvention from './Components/Pages/listconvention';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add-accommodation" element={<AddAccommodation />} />
          <Route path="/add-hall" element={<AddHall />} />
          <Route path="/" element={<Register />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/convention" element={<NewConvention />} />
          <Route path="/church" element={<NewChurch/>} />
          <Route path="/batch" element={<Batch/>} />
          <Route path="/swap" element={<Swap/>} />
          <Route path="/register" element={<RegisterDirect/>} />
          <Route path="/list-hall" element={<ListHall/>} />
          <Route path="/list-church" element={<ListChurch/>} />
          <Route path="/list-convention" element={<ListConvention/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;