const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
const qs = require('qs');

router.get('/', async (req, res) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };
    const data = {
      grant_type: 'client_credentials',
    };

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      res.status(200).json({
        success: true,
        data: response.data.access_token
      })
    } catch (error) {
      console.log(error);
    }
  }
)


module.exports = router;