const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  description: {
    type: String
  },
  videos: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist; 