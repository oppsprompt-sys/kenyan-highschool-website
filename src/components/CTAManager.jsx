import React from 'react'
import { useContent } from '../engine/ContentEngine'

export default function CTAManager() {
  const { hero, acknowledge } = useContent()
  if (!hero) return null
  // show persistent CTA for high or critical
  if (hero.priority === 'high' || hero.priority === 'critical') {
    return (
      <div className="card sidebar-sticky">
        <div className="cta-banner">
          <div style={{fontWeight:600}}>{hero.title}</div>
          <div className="small" style={{marginTop:6}}>{hero.body}</div>
          <div style={{marginTop:10,display:'flex',gap:8}}>
            <button className="btn accent" onClick={() => alert('CTA action')}>Take action</button>
            <button className="btn ghost" onClick={() => acknowledge(hero.id)}>Dismiss</button>
          </div>
        </div>
      </div>
    )
  }
  return null
}
