import React from "react";
import mutifyVideo from "../assets/Mutify for Mac.mp4";
import wave1 from "../assets/wave-1.svg";

const Intro = () => {
  return (
    <div className=" text-center intro_container">
      <h1 className="intro_title">Mutify for Mac</h1>
      <p>
        Use a shortcut or the touch bar on any Mac device to quickly mute your
        microphone
      </p>
      <div className="intro_button_wrapper">
        <a className="button intro_button download_button" href="/">
          Download
        </a>
        <a className="button intro_button button_white" href="/">
          Buy: $4.99
        </a>
      </div>
      <div className="intro_video_wrapper">
        <video autoplay loop muted>
          <source src={mutifyVideo} type="video/mp4" />
        </video>
        <div class="intro_wave_wrapper">
          <img src={wave1} alt="wave" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
