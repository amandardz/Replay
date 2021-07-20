import React from 'react'
import {
    useEffect,
    useState
} from 'react';
import API from '../utils/API'
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

import { set } from 'mongoose';
import MusicPlayer from '../components/MusicPlayer';
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
        // setIsSubmitted(true)
        axios.get('/api/youtube', {params: {query: search }})
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

  {/* <div
                     key={i}>{track.name}</div>
                    )} */}
                
                {/* </Container> */}
             
                // <MusicPlayer />
                {/* <iframe src="https://open.spotify.com/embed/track/37BZB0z9T8Xu7U3e65qxFy" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

                {/* <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/1539950/favorites" width="100%" height="465" scrolling="no" frameborder="no"></iframe> */}

                {/* <iframe title="YouTube video player" class="youtube-player" type="text/html" width="560" height="345" src="http://www.youtube.com/embed/8v_4O44sfjM?autoplay=1&mute=1" frameborder="0" allowFullScreen></iframe> */}
               
            // </div>
            // </div> 

export default Search;