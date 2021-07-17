const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  artists: {
    type: Array,
    required: true
  },
  link: {
    type: String
  }, 
  explicit: {
    type: Boolean
  },
  album: {
    type: String
  },
  images: {
    type: Array
  },
  dateAdded: {
    type: Date, 
    default: Date.now
  }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song; 