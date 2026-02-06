import React, {useEffect, useRef, useState} from 'react'

function useCountUp(active, target, duration = 1200){
  const [value, setValue] = useState(0)
  const rafRef = useRef()
  useEffect(()=>{
    if(!active) return
    let start = null
    const step = (ts)=>{
      if(!start) start = ts
      const elapsed = ts - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.floor(progress * target))
      if(progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(rafRef.current)
  },[active,target,duration])
  return value
}

export default function Stats(){
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if(!ref.current) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) setVisible(true) })
    },{threshold:0.3})
    obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[])

  const items = [
    {label: 'Years of Excellence', value: 25},
    {label: 'Graduation Rate', value: 98, suffix: '%'},
    {label: 'Expert Faculty', value: 50, suffix: '+'}
  ]

  return (
    <section ref={ref} className="section" aria-label="Key highlights">
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
        {items.map((it,idx)=>{
          const n = useCountUp(visible, it.value, 1200 + idx*200)
          return (
            <div key={idx} className="card enter-up stat-card" style={{textAlign:'center'}}>
              <div style={{fontFamily:'DM Sans, Inter',fontSize:28,fontWeight:700,color:'var(--color-primary)'}}>{n}{it.suffix || ''}</div>
              <div style={{marginTop:8,color:'var(--muted)'}}>{it.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
