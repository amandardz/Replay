import React from "react";
import DashboardNav from "../DashboardNav";
import SearchBar from "../SearchBar";
import Dashboard from "../../pages/Dashboard";
import './style.css'

function NavDashboard() {
    return <>
    <div className='dashNav'>
        <DashboardNav />
    </div>
    <div className='mainContainer'>
        <div className='searchContainer'>
            <SearchBar />
        </div>
        <div>
            <Dashboard />
        </div>
    </div>
    </>
}

export default NavDashboard;