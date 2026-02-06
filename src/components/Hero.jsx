import React from 'react'
import ImageLazy from './ImageLazy'

// Use supplied photo from public/photos as background image
export default function Hero({title = "Shaping Tomorrow's Leaders Today", subtitle = "A nurturing environment for confident, curious learners.", primaryCta = {label: 'Apply Now', href: '/admissions'}, secondaryCta = {label: 'Book a Campus Tour', href: '/contact'}}){
  const bg = '/photos/School aesthetic.jpeg'
  return (
    <div className="hero hero--landing" role="banner" aria-label="School hero" style={{backgroundImage: `url('${bg}')`}}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__body">{subtitle}</p>
          <div className="hero__actions" style={{display:'flex',gap:12,marginTop:18}}>
            <a className="btn primary" href={primaryCta.href} aria-label={primaryCta.label}>{primaryCta.label}</a>
            <a className="btn ghost" href={secondaryCta.href} aria-label={secondaryCta.label}>{secondaryCta.label}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
