console.log('this is loaded');

var dotenv = require("dotenv").config();

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
};
//  # Spotify API keys

// SPOTIFY_ID=4195f350200c4115a47f15c71d728ebf
// SPOTIFY_SECRET=b84fafd140ff4bf5886c0d03300f4b1c
