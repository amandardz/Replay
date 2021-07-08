import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Credentials from "./pages/Credentials";
import Homepage from "./pages/Homepage";
import NavDashboard from "./components/NavDashboard";
import NavSearch from "./components/NavSearch";

function App() {
  return <> 
  <BrowserRouter>
    <div className="d-flex flex-row">
        <Switch>
          <Route exact path={["/", "/home"]} component={Homepage} />
          <Route exact path="/login" component={Credentials} />
          <Route exact path="/dashboard" component={NavDashboard} />
          <Route exact path="/search" component={NavSearch} />
        </Switch>
      </div>
  </BrowserRouter>
  </>
}

export default App;
