import React from "react";
import "./css/App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
