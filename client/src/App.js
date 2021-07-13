import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Credentials from "./pages/Credentials";
import Homepage from "./pages/Homepage";
import NavDashboard from "./components/NavDashboard";
import NavSearch from "./components/NavSearch";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return <> 
  <BrowserRouter>
    <div className="d-flex flex-row">
        <Switch>
          <Route exact path={["/", "/home"]} component={Homepage} />
          <Route exact path="/login" component={Credentials} />
          <ProtectedRoute exact path="/dashboard" component={NavDashboard} />
          <ProtectedRoute exact path="/search" component={NavSearch} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
  </BrowserRouter>
  </>
}

export default App;
