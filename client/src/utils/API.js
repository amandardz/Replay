import axios from "axios";

export default {
  getToken: function() {
    return axios('/api/user/token', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  },
  getPlaylists: function() {
    return axios.get('/api/playlist');
  }
};