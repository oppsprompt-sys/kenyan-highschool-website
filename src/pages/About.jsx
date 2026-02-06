import React, { useEffect, useRef } from 'react'

export default function About(){
  const animRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.1 })
    animRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 12px',marginTop:12}}>
      <div style={{background:'linear-gradient(135deg,#0A2540 0%,#14B8A6 100%)',color:'white',padding:'40px 20px',borderRadius:16,marginBottom:32}}>
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>About Our School</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Building tomorrow's leaders through academic excellence and character development</p>
      </div>

      <section style={{marginBottom:32}}>
        <div className="card enter-up" ref={el => animRefs.current[0] = el}>
          <h2 style={{marginTop:0,fontSize:'20px',color:'var(--text-color)',fontWeight:700}}>Who We Are</h2>
          <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:0}}>Kenyan Highschool is a premier educational institution committed to academic excellence, character formation, and holistic development. Since our founding in 2005, we have consistently provided quality education that prepares students for success in tertiary education and life.</p>
        </div>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Our Journey</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))'}}>
          <div className="card enter-up" ref={el => animRefs.current[1] = el} style={{background:'linear-gradient(135deg,rgba(10,37,64,0.04),rgba(10,37,64,0.02))',borderLeft:'4px solid #0A2540'}}>
            <h4 style={{marginTop:0,color:'#0A2540',fontSize:'15px',fontWeight:700}}>📍 Founded 2005</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Born from a vision to provide accessible, quality education. Started with 120 students, now serving over 800 students across all form levels.</p>
          </div>
          <div className="card enter-up" ref={el => animRefs.current[2] = el} style={{background:'linear-gradient(135deg,rgba(20,184,166,0.04),rgba(20,184,166,0.02))',borderLeft:'4px solid #14B8A6'}}>
            <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'15px',fontWeight:700}}>🎓 2000+ Alumni</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Our graduates excel in universities across Africa and globally. Strong alumni network supporting current students and mentoring programs.</p>
          </div>
          <div className="card enter-up" ref={el => animRefs.current[3] = el} style={{background:'linear-gradient(135deg,rgba(250,204,21,0.04),rgba(250,204,21,0.02))',borderLeft:'4px solid #FACC15'}}>
            <h4 style={{marginTop:0,color:'#F59E0B',fontSize:'15px',fontWeight:700}}>⭐ Recognition</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Recognized for academic excellence, innovation in teaching, and contribution to community development. Member of various educational associations.</p>
          </div>
        </div>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Our Core Values</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))'}}>
          <div className="card enter-up" ref={el => animRefs.current[4] = el} style={{padding:'20px',background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.04))',borderLeft:'4px solid #14B8A6'}}>
            <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'15px',fontWeight:700}}>🤝 Integrity</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Honesty and moral excellence in all we do. Trust, transparency, and ethical leadership guide our actions.</p>
          </div>
          <div className="card enter-up" ref={el => animRefs.current[5] = el} style={{padding:'20px',background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderLeft:'4px solid #FACC15'}}>
            <h4 style={{marginTop:0,color:'#F59E0B',fontSize:'15px',fontWeight:700}}>⭐ Excellence</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Pursuit of highest standards in academics and character. We strive for continuous improvement.</p>
          </div>
          <div className="card enter-up" ref={el => animRefs.current[6] = el} style={{padding:'20px',background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(59,130,246,0.04))',borderLeft:'4px solid #3b82f6'}}>
            <h4 style={{marginTop:0,color:'#3b82f6',fontSize:'15px',fontWeight:700}}>🤲 Service</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Commitment to community and social responsibility. Students engage in meaningful service initiatives.</p>
          </div>
          <div className="card enter-up" ref={el => animRefs.current[7] = el} style={{padding:'20px',background:'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(34,197,94,0.04))',borderLeft:'4px solid #22c55e'}}>
            <h4 style={{marginTop:0,color:'#22c55e',fontSize:'15px',fontWeight:700}}>🌍 Inclusivity</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Welcoming all learners regardless of background. Diversity strengthens our community.</p>
          </div>
        </div>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Mission & Vision</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'1fr 1fr'}}>
          <div className="card enter-up" ref={el => animRefs.current[8] = el} style={{background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderLeft:'4px solid #FACC15',padding:'20px'}}>
            <h3 style={{marginTop:0,color:'#F59E0B',fontSize:'18px',fontWeight:700}}>Our Mission</h3>
            <p style={{color:'var(--text-color)',lineHeight:1.8,margin:0}}>To nurture curious, resilient learners who contribute positively to society through academic excellence, ethical character, and meaningful service.</p>
          </div>

          <div className="card enter-up" ref={el => animRefs.current[9] = el} style={{background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(6,182,212,0.04))',borderLeft:'4px solid #14B8A6',padding:'20px'}}>
            <h3 style={{marginTop:0,color:'#14B8A6',fontSize:'18px',fontWeight:700}}>Our Vision</h3>
            <p style={{color:'var(--text-color)',lineHeight:1.8,margin:0}}>An inclusive, innovative learning community recognized for transformative education that prepares students for global citizenship and lifelong success.</p>
          </div>
        </div>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Our Facilities</h2>
        <div className="card enter-up" ref={el => animRefs.current[10] = el}>
          <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))'}}>
            <div style={{padding:'16px'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>🏫 Academic Facilities</h4>
              <ul style={{margin:0,paddingLeft:20,fontSize:'12px',color:'var(--muted)',lineHeight:1.8}}>
                <li>Modern classrooms</li>
                <li>Science labs</li>
                <li>Computer labs</li>
                <li>Library</li>
              </ul>
            </div>
            <div style={{padding:'16px'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>🏆 Sports & Recreation</h4>
              <ul style={{margin:0,paddingLeft:20,fontSize:'12px',color:'var(--muted)',lineHeight:1.8}}>
                <li>Football pitch</li>
                <li>Volleyball court</li>
                <li>Tennis courts</li>
                <li>Gymnasium</li>
              </ul>
            </div>
            <div style={{padding:'16px'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>🛏️ Boarding Facilities</h4>
              <ul style={{margin:0,paddingLeft:20,fontSize:'12px',color:'var(--muted)',lineHeight:1.8}}>
                <li>Comfortable dormitories</li>
                <li>Dining hall</li>
                <li>Medical center</li>
                <li>Recreational areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card enter-up" ref={el => animRefs.current[11] = el}>
          <h3 style={{marginTop:0,color:'var(--text-color)',fontSize:'18px'}}>Let's Connect</h3>
          <p style={{color:'var(--muted)',marginTop:8,marginBottom:16}}>Have questions about our school? We'd love to hear from you. Schedule a campus tour, request prospectus, or just say hello!</p>
          <a className="btn primary" href="/contact" style={{display:'inline-block'}}>Get In Touch</a>
        </div>
      </section>
    </div>
  )
}
