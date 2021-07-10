import React from "react";
import DashboardNav from "../DashboardNav";
import SearchBar from "../SearchBar";
import Search from "../../pages/Search";
import './style.css'

function NavSearch() {
    return <>
    <div className='dashNav'>
        <DashboardNav />
    </div>
    <div className='mainContainer'>
        <div className='searchContainer'>
            <SearchBar />
        </div>
        <div>
            <Search />
        </div>
    </div>
    </>
}

export default NavSearch;