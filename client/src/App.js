import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Credentials from "./pages/Credentials";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";

function App() {
  return <> 
  <BrowserRouter>
    <div>
      <Credentials />
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]} component={Homepage} />
        <Route exact path="/login" component={Credentials} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </BrowserRouter>
  
  </>
}

export default App;
