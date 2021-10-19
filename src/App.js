import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item/add" component={AddItem} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
