import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Hours from './components/Hours';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/mottomo' exact component={Hero}/>
        <Route path='/hours' component={Hours}/>
      </Switch>
    </Router>
  );
}

export default App;
