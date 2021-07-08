import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardNav from "./components/DashboardNav";
import Container from "./pages/Container";


function App() {
  return <> 
  <BrowserRouter>
    <div className="row">
      <div className="col">
        <DashboardNav />
      </div>
      <div className="col">
        <Container />
      </div>
    </div>
  </BrowserRouter>
  </>
}

export default App;
