import React, { useState } from 'react'

export default function Accordion({ items = [] }) {
  const [open, setOpen] = useState(null)
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} style={{marginBottom:8}}>
          <button onClick={() => setOpen(open === i ? null : i)} className="btn ghost" style={{width:'100%',textAlign:'left'}}>
            {it.title}
          </button>
          {open === i && (
            <div style={{padding:12,background:'#fbfdff',borderRadius:8,border:'1px solid #eef2f7',marginTop:6}}>
              {it.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
