import axios from "axios";

export default {
  getPlaylists: function() {
    return axios.get('/api/playlist');
  },
  getPlaylist: function(id) {
    return axios.get('/api/playlist/' + id);
  },
  saveVideo: function(video) {
    return axios.post('/api/video', video)
  },
  deleteVideo: function(id) {
    return axios.delete('/api/video/' + id)
  },
  getSession: function() {
    return axios.get('/api/user/session');
  },
  getUser: function() {
    return axios.get('/api/user')
  }
};