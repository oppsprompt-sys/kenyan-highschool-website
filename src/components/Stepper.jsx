import React from 'react'

export default function Stepper({ steps = [], current = 0 }) {
  return (
    <div style={{display:'flex',gap:12,alignItems:'center'}} aria-hidden>
      {steps.map((s, i) => (
        <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:34,height:34,borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',background:i<=current? 'var(--accent)' : '#f1f5f9',color:i<=current? 'white' : 'var(--muted)'}}>{i+1}</div>
          <div className="small" style={{marginTop:6}}>{s}</div>
        </div>
      ))}
    </div>
  )
}
