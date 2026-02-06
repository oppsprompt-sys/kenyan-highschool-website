import React from 'react'
import { useContent } from '../engine/ContentEngine'

export default function AlertBanner() {
  const { hero, acknowledge } = useContent()
  if (!hero || hero.priority !== 'critical') return null
  return (
    <div role="status" aria-live="assertive" className="card" style={{background: 'linear-gradient(90deg,#6b0f0f,#8b1b1b)',color:'white',margin:'12px 0'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <strong style={{display:'block'}}>{hero.title}</strong>
          <div className="small" style={{opacity:0.95}}>{hero.body}</div>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn" onClick={() => alert('Open details')}>View</button>
          <button className="btn ghost" onClick={() => acknowledge(hero.id)}>Dismiss</button>
        </div>
      </div>
    </div>
  )
}
