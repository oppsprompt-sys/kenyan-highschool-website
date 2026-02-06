import React, { useEffect } from 'react'

export default function Drawer({ open, onClose, children }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose && onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div style={{position:'fixed',inset:0,zIndex:60}}>
      <div onClick={onClose} style={{position:'absolute',inset:0,background:'rgba(2,6,23,0.35)'}} />
      <aside style={{position:'absolute',right:0,top:0,height:'100%',width:'min(92%,420px)',background:'var(--card)',padding:16,boxShadow:'var(--e-2)'}}>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button className="btn ghost" onClick={onClose}>Close</button>
        </div>
        <div style={{marginTop:12}}>{children}</div>
      </aside>
    </div>
  )
}
