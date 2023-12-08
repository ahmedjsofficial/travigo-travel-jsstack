// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import New_features from './pages/New_features';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}  />
      <Route path='/feat' element={<New_features/>}  />
     </Routes>
  )
}
