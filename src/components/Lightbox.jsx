import React, { useEffect } from 'react'

export default function Lightbox({ open, src, alt, onClose }) {
  useEffect(() => {
    function onKey(e){ if(e.key==='Escape') onClose && onClose() }
    if(open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  },[open,onClose])

  if(!open) return null
  return (
    <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:80}}>
      <div onClick={onClose} style={{position:'absolute',inset:0,background:'rgba(2,6,23,0.6)'}} />
      <div style={{position:'relative',maxWidth:'92%',maxHeight:'92%'}}>
        <img src={src} alt={alt} style={{width:'100%',height:'auto',borderRadius:8,display:'block'}} />
        <button className="btn ghost" onClick={onClose} style={{position:'absolute',right:8,top:8}}>Close</button>
      </div>
    </div>
  )
}
