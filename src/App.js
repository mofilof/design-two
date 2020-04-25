import React from 'react';
import Menu from './components/layout/Menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from "./components/layout/Home";
import Fonts from "./components/stylepages/Fonts";
import Color from "./components/stylepages/Color";
import Images from "./components/stylepages/Images";

function App() {
  return (
    <>
      <Menu />

      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/fonts" component={Fonts} />
            <Route path="/color" component={Color} />
            <Route path="/images" component={Images} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;


