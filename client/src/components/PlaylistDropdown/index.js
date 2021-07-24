import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

function PlayListDropdown(videoInfo) {

    const [playlists, setPlaylists] = useState([]);
    const [choice, setChoice] = useState('');
    const [choiceId, setChoiceId] = useState('');
    const history = useHistory();
    const [formObject, setFormObject] = useState({
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
        setChoice(event.target.value);
    }

    const addToPlaylist = async (e) =>  {
        e.preventDefault();

        if(!choice) {
            alert("Please choose a playlist.");
            return;
        }
        
        var playlistId;

        for(let i = 0; i < playlists.length; i++) {
            if(playlists[i].name === choice) {
                playlistId = playlists[i]._id;
            }
        }
        setChoiceId(playlistId);

        if(choice === "Add New Playlist") {
            history.replace("/addplaylist");
        } else {
            console.log("Push video id to playlist info.");
            setFormObject({
                title: videoInfo.videoInfo.title,
                channel: videoInfo.videoInfo.channel,
                linkId: videoInfo.videoInfo.linkId,
                description: videoInfo.videoInfo.description,
                thumbnail: videoInfo.videoInfo.thumbnail.url
            })
            
            if(formObject.title && formObject.channel) {
                API.saveVideo(formObject)
                    .then(res => console.log(choiceId))
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