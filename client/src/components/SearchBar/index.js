import React from 'react';
import './style.css';

function Search() {
    return (
    <div id='search-bar' class='input-group mt-3'>
        <input type='text' class='form-control border border-dark' placeholder='Search for a song' aria-label='Song Search' aria-describedby='button' />
        <button class='btn btn-outline-dark' type='button' id='search-button'>
        <i class="bi bi-search"></i>
        </button>
    </div>
    )
}

export default Search;