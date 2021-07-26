import './style.css';
import React from 'react';

function SearchBar(props) {
    const { handleFormSubmit, search, handleInputChange } = props

    return (
        <form className='searchBarContainer' onSubmit={handleFormSubmit}>
            <div className='search-bar input-group mt-2'>
                <input 
                    type='text' 
                    name='search'
                    value={search}
                    className='form-control border border-dark' 
                    placeholder='Search for a video' 
                    onChange={handleInputChange}
                    aria-label='Video Search' 
                    aria-describedby='button'
                />
                <button className='btn btn-outline-dark' type='submit' id='search-button'>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    )
}

export default SearchBar;