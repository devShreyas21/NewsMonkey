import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';

export default function App() {
  let apiKey = process.env.REACT_APP_NEWS_APP
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} key="gernal" pageSize={5} country={"in"} category={"general"} />} />
          <Route exact path='/business' element={<News apiKey={apiKey} key="business" pageSize={5} country={"in"} category={"business"} />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} key="entertainment" pageSize={5} country={"in"} category={"entertainment"} />} />
          <Route exact path='/health' element={<News apiKey={apiKey} key="health" pageSize={5} country={"in"} category={"health"} />} />
          <Route exact path='/science' element={<News apiKey={apiKey} key="science" pageSize={5} country={"in"} category={"science"} />} />
          <Route exact path='/sports' element={<News apiKey={apiKey} key="sports" pageSize={5} country={"in"} category={"sports"} />} />
          <Route exact path='/technology' element={<News apiKey={apiKey} key="technology" pageSize={5} country={"in"} category={"technology"} />} />
        </Routes>
      </Router>
    </div>
  )
}