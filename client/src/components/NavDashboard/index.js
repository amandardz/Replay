import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Dashboard from "../../pages/Dashboard";
import './style.css'

function NavDashboard() {
    return <>
    <div className='dashNav'>
        <Navbar />
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