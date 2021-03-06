import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from './Home';
import Weather from './Weather';

function App() {
    return (
        <Router>
            <Routes>
                    <Route exact path='/' element={ <Home /> } ></Route>
                    <Route exact path='/weather' element={ <Weather /> } ></Route>
            </Routes>
        </Router>
    );
  }
  
  export default App;
  