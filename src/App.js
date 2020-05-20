import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ItemsList from "./containers/ItemsList";
import ItemPage from "./containers/ItemPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <ItemsList />
          </Route>
          <Route exact path="/:id">
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
