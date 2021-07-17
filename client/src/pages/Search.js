import React from 'react'
import {
    useEffect,
    useState
} from 'react';
import API from '../utils/API'
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import SearchResultsCard from '../components/SearchResultCard';
import { set } from 'mongoose';

function Search() {

    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [results, setResults] = useState([]);
    console.log(results)

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
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => {
                    if (res.data.length === 0) {
                        throw new Error('No results found');
                    }
                    if (res.data.status === 'error') {
                        throw new Error(res.data.message);
                    }
                    setSearch('')
                    setIsSubmitted(false)
                    setResults(res.data.tracks.items)
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
        <>
            <div className = 'dashNav' >
                < Navbar />
            </div> 
            <div className = 'mainContainer' >
            <div className = 'searchContainer' >
                <SearchBar handleInputChange = {handleInputChange}
                search = {search}
                handleFormSubmit = {handleFormSubmit}
                /> 
            </div> 
            <div>
                <Container>
                    {results.map(result =>
                    <SearchResultsCard 
                        key={result.id}
                        title={result.name}
                        artists={result.artists}
                        link={result.href}/>
                    )}
                
                </Container>


               
            </div>
            </div> 
        </>
    )
}

export default Search;