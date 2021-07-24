import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../utils/API';

function AddPlaylist() {
    
    const [formObject, setFormObject] = useState({
        userId: "",
        name: "",
        description: ""
    });

    const history = useHistory();

    function handleInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;

        API.getUser()
            .then((res) => {
                setFormObject({
                    ...formObject,
                    userId: res.data,
                    [name]: value
                });
            })

    }

    const playlistFormHandler = async (e) => {
        e.preventDefault();

        if (formObject.name) {
            const response = await fetch('/api/playlist', {
                method: 'POST',
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


    return(
        <form className='playlistContentContainer' onSubmit={(e) => {playlistFormHandler(e)}}>
            <div className='playlistContent'>
                <h1>Add playlist page</h1>
                <div className="mb-3">
                    <label for="playlist-title" className="form-label">Playlist Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="playlist-title"
                        name="name"
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description (optional)</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        maxLength='100'
                        onKeyUp={handleDescriptionLimit}
                        onChange={handleInputChange}/>
                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default AddPlaylist;