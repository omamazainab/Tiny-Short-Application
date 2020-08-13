import React from 'react'
import mutifyVideo from '../assets/mutify-video.jpg'
import wave1 from '../assets/wave-1.svg'

const Intro = () => {
    return (
        <div className='container text-center intro_container'>
            <h1 className='intro_title'>
                Mutify for Mac
            </h1>
            <p >
                Use a shortcut or the touch bar on any Mac device to quickly mute your microphone
            </p>
            <div className="intro_button_wrapper">
                <a className="button intro_button download_button" href="/">Download</a>
                <a className="button intro_button button_white" href="/">Buy: $4.99</a>
            </div>
            <div className="intro_video_wrapper">
                    <img src={mutifyVideo}  alt="" />
                    {/* <div className="intro_wave_wrapper">
                        <img src={wave1} alt="" />
                    </div> */}
            </div>
        </div>
    )
}

export default Intro


