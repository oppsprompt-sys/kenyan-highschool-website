import React, { useState, useEffect, useRef } from 'react'
import Lightbox from './Lightbox'

export default function ImageLazy({ src, alt = '', className = '', style = {} }) {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } })
    })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <>
      <div ref={ref} style={{minHeight:80,background:'#f3f4f6',borderRadius:8,overflow:'hidden',cursor:'pointer'}} className={className} onClick={() => setOpen(true)}>
        {visible ? <img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} /> : <div style={{padding:12,color:'var(--muted)'}}>{alt}</div>}
      </div>
      <Lightbox open={open} src={src} alt={alt} onClose={() => setOpen(false)} />
    </>
  )
}
