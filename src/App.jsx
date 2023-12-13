// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import New_features from './pages/New_features';
// import Jungle from './pages/Jungle';
import Arbifalls from './pages/Arbifalls';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}  />
      <Route path='/feat' element={<New_features/>}  />
      <Route path='/jungle' element={<Arbifalls/>} />
     </Routes>
  )
}
