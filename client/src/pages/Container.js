import React from 'react';
import { Route, Switch } from "react-router-dom";
import Credentials from "./Credentials";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Search from "./Search";

function Container() {
    return <main>
        <Switch>
            <Route exact path={["/", "/home"]} component={Homepage} />
            <Route exact path="/login" component={Credentials} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
        </Switch>
    </main>
}

export default Container;