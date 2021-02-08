import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "assets/scss/style.scss";
import "./App.css";
import GamerPg from "pages/Gamer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={GamerPg} />
      </Router>
    </div>
  );
}

export default App;
