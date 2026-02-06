import React, { useState } from 'react'

export default function FloatingInput({ label, id, value: initial = '', onChange, type = 'text' }) {
  const [value, setValue] = useState(initial)
  return (
    <label style={{display:'block',position:'relative',marginTop:12,fontSize:'var(--type-md)'}}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => { setValue(e.target.value); onChange && onChange(e) }}
        style={{width:'100%',padding:'14px 12px 6px 12px',borderRadius:8,border:'1px solid #e6edf3'}}
        aria-label={label}
      />
      <span style={{position:'absolute',left:12,top:8,transition:'all 120ms',color:'var(--muted)',fontSize:'var(--type-sm)'}}>
        {label}
      </span>
    </label>
  )
}
