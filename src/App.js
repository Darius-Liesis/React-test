import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import List from './pages/List'
import Details from './pages/Details'
import Record from './pages/Record'


const App = () => {
  return (
    <Router>
      <List></List>
      {/*<div><Link to='/details'> Go to Details Page/Pereiti į išplėstinės informacijos puslapį </Link></div>
      <div><Link to='/Record'> Make a New Record / Sukurti naują įrašą </Link></div>*/}

      <Routes>
        <Route path="/" component={<List />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Record" element={<Record />} />
      </Routes>
    </Router>
  );
}

export default App;
