import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

function PlayListDropdown(props) {

    const [playlists, setPlaylists] = useState([]);
    const [choice, setChoice] = useState('');
    const history = useHistory();
    const [formObject, setFormObject] = useState({
        playlistId: '',
        title: '',
        channel: '',
        linkId: '',
        description: '',
        thumbnail: ''
    });

    useEffect(() => {
        loadPlaylists()
    }, []);

    const loadPlaylists = () => {
        API.getPlaylists()
            .then(res => setPlaylists(res.data))
            .catch(err => console.log(err));
    }

    const handleInputChange = (event) =>  {
        setChoice(event.target.value)
        console.log(event.target.value)
        let playlistId
            for(let i = 0; i < playlists.length; i++) {
                if(playlists[i].name === event.target.value) {
                    playlistId = playlists[i]._id;
                }
            }
            setFormObject({
                playlistId: playlistId,
                title: props.videoInfo.title,
                channel: props.videoInfo.channel,
                linkId: props.videoInfo.linkId,
                description: props.videoInfo.description,
                thumbnail: props.videoInfo.thumbnail.url
            })
    }

    const addToPlaylist = async (e) =>  {
        e.preventDefault();

        if(!choice) {
            alert("Please choose a playlist.");
            return;
        }
    
        if(choice === "Add New Playlist") {
            history.replace("/addplaylist");
        } else {
            if(formObject.title && formObject.channel && formObject.linkId) {
                API.saveVideo(formObject)
                    .then(res => setPlaylists(res.data)) 
                    .catch(err => console.error(err));
            }
        }
    }

    return (
    <form className='playlistSelectionContainer' onSubmit={(e) => addToPlaylist(e)}>
        <div className="playlistSelection form-group">
            <select className="form-control" id="selectPlaylist" onChange={handleInputChange}>
            <option className="disabled">Select &#x276F;</option>
            <option>Add New Playlist</option>
            {playlists.length > 0 &&
                playlists.map(playlist => {
                    return <option key={playlist._id}>{playlist.name}</option>
                })
            }
            </select>
            <button className='btn btn-outline-dark'>Add to Playlist</button>
        </div>
    </form>
    )
}

export default PlayListDropdown;