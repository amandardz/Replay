import React from 'react';
import './style.css';

function Search() {
    return (
    <div id='search-bar' className='input-group mt-3'>
        <input type='text' className='form-control border border-dark' placeholder='Search for a song' aria-label='Song Search' aria-describedby='button' />
        <button className='btn btn-outline-dark' type='button' id='search-button'>
            <i className="bi bi-search"></i>
        </button>
    </div>
    )
}

export default Search;