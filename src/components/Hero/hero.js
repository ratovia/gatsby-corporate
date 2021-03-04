import React from 'react'
import "./hero.scss"
import LpTopVideo from "../../../static/lp-top-small.mp4"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-fixed-area">
        <div className="hero-image-area">
          <video src={LpTopVideo} muted autoPlay loop></video>
        </div>
      </div>
      <div className="hero-message-area">
        <h2>「感謝・貢献・挑戦」</h2>
        <p>挑み続け成長する</p>
      </div>
    </section>
  )
}

export default Hero
