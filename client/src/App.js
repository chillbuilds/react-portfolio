import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={resume} />
          <Route exact path="/newmatch" component={NewMatch} />
          <Route exact path="/fight" component={Fight} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;