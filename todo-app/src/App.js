import React from 'react';
import {  BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Home from './component/home/Home';
import Done from './component/todo/Done';
import Active from './component/todo/Active';
import Add from './component/todo/Add';

function App() {
  return (
    <Router>
     <Switch>
      <Route  exact path="/" component={Home}/>
      <Route path="/done" component={Done}/>
       <Route path="/active" component={Active}/>
       <Route path="/add" component={Add}/>
  </Switch>
  
 </Router>
  );
}

export default App;
