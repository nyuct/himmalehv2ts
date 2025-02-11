import React from 'react'

interface ParallaxHeroProps {
  imgSrc: string
  text: string
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ imgSrc, text }) => (
  <div className="hero-section" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="display-1 fw-bold">{text}</div>
  </div>
)

export default ParallaxHero

