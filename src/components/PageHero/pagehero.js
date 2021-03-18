import React from 'react'
import "./pagehero.scss"
import image from "../../../static/business.jpg"

const Hero = () => {
  return (
    <section id="page-hero">

      <img src={image} alt="企業イメージ"></img>
    </section>
  )
}

export default Hero
