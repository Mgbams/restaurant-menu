import React from "react";
import FoodMenu from "./components";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App mt-5">
      <h1 className="text-center">KING'S MENU</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FoodMenu />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

{
  /* <Router>
  <Navbar />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/people">
      <People />
    </Route>
    <Route path="/person/:id" children={<Person />}></Route>
    <Route path="*">
      <Error />
    </Route>
  </Switch>
</Router>; */
}
