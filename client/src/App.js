import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginSignupPage from "./pages/LoginSignupPage";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./pages/Search";
import AuthContext from "./contexts/AuthContext";
import AddPlaylist from "./pages/AddPlaylist";
import Dashboard from "./pages/Dashboard";
import Playlist from "./pages/Playlist";
import EditPlaylist from "./pages/EditPlaylist";
import LoginCheckRoute from "./components/LoginCheckRoute.js";

function App() {

  const [loggedIn, setLoggedIn] = useState();

  return <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
    <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={Homepage} />
          <LoginCheckRoute exact path="/login" component={LoginSignupPage} />
          <ProtectedRoute exact path="/addplaylist" component={AddPlaylist} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/search" component={Search} />
          <ProtectedRoute exact path="/playlist/:playlistId" component={Playlist} />
          <ProtectedRoute exact path="/playlist/:playlistId/editplaylist" component={EditPlaylist} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App;
