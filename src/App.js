import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Trade from './components/Trade';
import Header from './components/Header';
import Accueil from './components/Accueil';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Accueil}/>

        <Route path="/trade" exact component={Trade}/>

      </Router>
    </div>
  );
}

export default App;
