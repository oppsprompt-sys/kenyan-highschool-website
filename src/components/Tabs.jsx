import React, { useState } from 'react'

export default function Tabs({ tabs = [] }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div style={{display:'flex',gap:8,borderBottom:'1px solid #eef2f7',paddingBottom:8}}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setActive(i)} className={i===active? 'btn' : 'btn ghost'}>{t.title}</button>
        ))}
      </div>
      <div style={{marginTop:12}}>{tabs[active] && tabs[active].content}</div>
    </div>
  )
}
