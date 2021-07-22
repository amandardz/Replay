import axios from "axios";

export default {
  getPlaylists: function() {
    return axios.get('/api/playlist');
  },
  getPlaylist: function(id) {
    return axios.get('/api/playlist/' + id);
  }
};