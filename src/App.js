import React, { useState }  from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import TextStones from './pages/TextStones';
import FootballStones from './pages/FootballStones';
import MusicStones from './pages/MusicStones';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle}/>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/products/textstones" exact component={TextStones}/>
       <Route path="/products/musicstones" exact component={MusicStones}/>
       <Route path="/products/footballstones" exact component={FootballStones}/>
       </Switch>
    </Router>
  );
}

export default App;
