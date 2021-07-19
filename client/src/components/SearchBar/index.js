import './style.css';
import React from 'react';

function SearchBar(props) {
    const { handleFormSubmit, search, handleInputChange } = props

    return (
        <form onSubmit={handleFormSubmit}>
            <div id='search-bar' className='input-group mt-3'>
                <input 
                type='text' 
                name='search'
                value={search}
                className='form-control border border-dark' 
                placeholder='Search for a song' 
                onChange={handleInputChange}
                aria-label='Song Search' 
                aria-describedby='button' />
                <button className='btn btn-outline-dark' type='submit' id='search-button'>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    )
}

export default SearchBar;