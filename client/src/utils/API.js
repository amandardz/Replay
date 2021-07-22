import axios from "axios";

export default {
  getPlaylists: function() {
    return axios.get('/api/playlist');
  }
};