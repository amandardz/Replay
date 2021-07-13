import React from 'react';
import { Route, Switch } from "react-router-dom";
import Credentials from "./Credentials";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Search from "./Search";

function Container() {
    return (
    <main>
        <Switch>
            <Route exact path={["/", "/home"]} component={Homepage} />
          <Route exact path="/login" component={Credentials} />
          <ProtectedRoute exact path="/dashboard" component={NavDashboard} />
          <ProtectedRoute exact path="/search" component={NavSearch} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </main>
)}

export default Container;