import React from 'react';

function Playlist(props) {

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ul>
                - list of videos -
            </ul>
        </div>
    )
}

export default Playlist;