import React from 'react'
import MacBook from '../assets/macbook.png'

const WorkWithMac = () => {
    return (
        <div className="container">
            <img src={MacBook} className='macbook' alt=""/>
            <p>Use a shortcut or the touch bar on any Mac device to quickly mute your microphone</p>
            <a href="/">Download </a>

        </div>
    )
}

export default WorkWithMac
