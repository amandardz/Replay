import axios from 'axios';
import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

function Search() {
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const [genres, setGenres] = useState('');
    // const [playlist, setPlaylist] = useState('');
    // const [tracks, setTracks] = useState('');

    useEffect(() => {
        API.getToken()
            .then(tokenResponse => {
                setToken(tokenResponse.data.data)
            })
    }, [])

    useEffect(() => {
        if (search && isSubmitted) {

                axios(`https://api.spotify.com/v1/search?query=${search}&type=album,artist,playlist,track`, {
                    method: 'GET',
                    headers: { 'Authorization' : 'Bearer '+ token}
                })
                .then(res => {
                    if (res.data.length === 0){
                        throw new Error('No results found');
                    }
                    if (res.data.status === 'error'){
                        throw new Error(res.data.message);
                    }
                    setSearch('')
                    setIsSubmitted(false)
                })
                .catch(err => console.error(err))
            }        
    }, [search, isSubmitted]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        setIsSubmitted(true)
    };

    return (
    <div id='search-bar' className='input-group mt-3'>
        <form onSubmit={handleFormSubmit}><input 
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
        </form>
    </div>
    )
}

export default Search;