import React from 'react'
import image from '../images/meme.jpg'
export default function header() {
  return (
    <div className='header'>
        <img className='header-image' src={image} alt='image'/>
        <h2 className='header-text'>Meme Generator</h2>
    </div>
  )
}
