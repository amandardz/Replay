import React from "react";
import DashboardNav from "../DashboardNav";
import SearchBar from "../SearchBar";
import Search from "../../pages/Search";

function NavSearch() {
    return <>
    <div className="col">
        <DashboardNav />
    </div>
    <div className="col">
        <SearchBar />
        <Search />
    </div>
    </>
}

export default NavSearch;