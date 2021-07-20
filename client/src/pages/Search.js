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
import Wrapper from '../components/Wrapper';

function Search() {

    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [results, setResults] = useState([]);
    console.log(results)
    const [navbarHeight, setNavbarHeight] = useState(document.body.clientHeight)

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
                    setNavbarHeight(res.data.length)
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
        <Container className='d-flex flex-row'>
            <Navbar navbarHeight={navbarHeight}/>
            <Wrapper className='col-8 col-lg-10'>
                <div className='d-flex justify-content-center'>
                    <SearchBar handleInputChange = {handleInputChange}
                    search = {search}
                    handleFormSubmit = {handleFormSubmit}
                    />
                </div>
                <div className="song-container justify-content-center d-flex">
                    <Container>
                        {results.length > 0 ? 
                        results.map(result =>
                        <SearchResultsCard 
                            key={result.id}
                            title={result.name}
                            artists={result.artists}
                            link={result.href}/>
                        ) : <h3>Search for songs!</h3>}
                    
                    </Container>
                </div>

            </Wrapper>
        </Container>
        </>
    )
}

export default Search;