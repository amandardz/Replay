import React from 'react';

function PlayListDropdown() {
    return (
    <form class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Select Playlist
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/addplaylist">Add</a></li>
        </ul>
        <button>Add to Playlist</button>
    </form>
    )
}


export default PlayListDropdown;