const router = require('express').Router();
const axios = require('axios');

const {google} = require('googleapis');
const youtube = google.youtube ({
  version: 'v3',
  auth: process.env.YOUTUBE_API // specify your API key here
});

router.get('/', async(req, res) => {
  req.query.query
  console.log(req.query.query)

 const data = await youtube.search.list({part: 'id, snippet',q: req.query.query})

  res.json(data);
})

module.exports = router;
