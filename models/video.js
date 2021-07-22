const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true
  }, 
  channel: {
    type: String,
    required: true
  },
  linkId: {
    type: String
  }, 
  description: {
    type: String
  },
  thumbnail: {
    type: String
  },
  dateAdded: {
    type: Date, 
    default: Date.now
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video; 