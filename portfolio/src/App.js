import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Switch, Route } from "react-router-dom";
 
function App() {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
