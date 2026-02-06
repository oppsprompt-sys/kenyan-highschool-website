import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav(){
  const [open,setOpen] = useState(false)
  return (
    <div>
      <button className="btn ghost" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
      {open && (
        <div style={{position:'fixed',inset:0,zIndex:70}}>
          <div onClick={() => setOpen(false)} style={{position:'absolute',inset:0,background:'rgba(2,6,23,0.4)'}} />
          <nav style={{position:'absolute',left:0,top:0,height:'100%',width:'260px',background:'var(--card)',padding:16}}>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
              <button className="btn ghost" onClick={() => setOpen(false)}>Close</button>
            </div>
            <ul style={{listStyle:'none',padding:0,marginTop:12}}>
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/admissions" onClick={() => setOpen(false)}>Admissions</Link></li>
              <li><Link to="/academics" onClick={() => setOpen(false)}>Academics</Link></li>
              <li><Link to="/news" onClick={() => setOpen(false)}>News</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
