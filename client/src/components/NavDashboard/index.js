import React from "react";
import DashboardNav from "../DashboardNav";
import SearchBar from "../SearchBar";
import Dashboard from "../../pages/Dashboard";

function NavDashboard() {
    return <>
    <div className="col">
        <DashboardNav />
    </div>
    <div className="col">
        <SearchBar />
        <Dashboard />
    </div>
    </>
}

export default NavDashboard;