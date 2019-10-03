import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import('normalize.css');

function App() {
      return (

            <Router>
                  <div>
                        <NavBar />
                        <Jumbotron />

                        <Switch>
                              <Route exact path="/" component={Search}>Search</Route>
                              <Route path="/saved" component={Saved}>Saved</Route>
                        </Switch>
                  </div>
                 
            </Router>
      );
}

export default App;