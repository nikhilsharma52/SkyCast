import React from 'react'
import "./Login.css"
import Main_content from './Main_content'
export default function Login() {
  return (
    <div className='login--main'>
        {/* Spotify Logo */}
        <img src='https://e7.pngegg.com/pngimages/589/778/png-clipart-spotify-london-the-edtech-podcast-festival-music-playlist-spotify-logo-text-musical-composition-thumbnail.png' alt='Spotify'/>
        {/* Login with spotify button */}
        <br />
        <a id='login--btn' href='#'>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
