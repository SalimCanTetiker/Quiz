import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';

const router = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default router
