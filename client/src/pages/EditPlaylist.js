import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import API from '../utils/API';

function EditPlaylist() {

    const [formObject, setFormObject] = useState({
        name: "",
        description: ""
    });
    
    let {playlistId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getPlaylistDetails()
    }, [])
        
        
    const getPlaylistDetails = () => {
        API.getPlaylist(playlistId)
            .then(res => setFormObject({
                name: res.data.name,
                description: res.data.description
            }))
            .catch(err => console.log(err))
    };
    
    function handleInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;
        
        setFormObject({
            ...formObject,
            [name]: value
        });
    }

    const editPlaylistFormHandler = async (e) => {
        e.preventDefault();

        if (formObject.name) {
            const response = await fetch(`/api/playlist/${playlistId}/editplaylist`, {
                method: 'PUT',
                body: JSON.stringify(formObject),
                headers: { 'Content-Type': 'application/json'}
            });

            if(response.ok) {
                history.replace('/dashboard');
            } else {
                alert("Something went wrong.");
            }
        } else {
            alert("Please enter a title.")
        }
    }

    function handleDescriptionLimit () {
        const descriptionCharacters = document.querySelector('#description')
        let characterLength = 100

        if(descriptionCharacters.value.length >= characterLength) {
            alert('You have reached character limit.')
        }
    }

    return (
        <form className='playlistContentContainer' onSubmit={(e) => {editPlaylistFormHandler(e)}}>
            <div className='playlistContent'>
                <h1>Edit Playlist</h1>
                <div className="mb-3">
                    <label htmlFor="playlist-title" className="form-label">Playlist Title</label>
                    <input
                        value={formObject.name}
                        type="text"
                        className="form-control"
                        id="playlist-title"
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description (optional)</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formObject.description}
                        maxLength='100'
                        onKeyUp={handleDescriptionLimit}
                        onChange={handleInputChange}
                    />
                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default EditPlaylist;