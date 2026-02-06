import React, { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import ImageLazy from '../components/ImageLazy'

export default function Home() {
  const animRefs = useRef([])

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.1 })

    animRefs.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Hero />

      <main style={{maxWidth:1100,margin:'0 auto',padding:'0 12px'}}>
        <section className="section" aria-label="About and Quick Access" style={{paddingTop:16,paddingBottom:20}}>
          <div>
            {/* About Info */}
            <div style={{marginBottom:24}}>
              <h2 style={{margin:'0 0 12px',color:'var(--text-color)',fontSize:'20px',fontWeight:700}}>About Our School</h2>
              <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:16,fontSize:'14px'}}>We are a proud Kenyan secondary school combining strong academics with character formation. Our curriculum follows KCSE frameworks and we offer a range of co-curricular activities.</p>
              
              <div style={{display:'grid',gap:12,gridTemplateColumns:'1fr 1fr',marginBottom:16}}>
                <div 
                  className="card enter-up" 
                  ref={el => animRefs.current[0] = el}
                  style={{background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderLeft:'4px solid #FACC15',padding:'14px'}}>
                  <h4 style={{margin:'0 0 6px',color:'#F59E0B',fontWeight:700,fontSize:'13px'}}>Our Mission</h4>
                  <p style={{color:'var(--muted)',lineHeight:1.5,fontSize:'12px',margin:0}}>To nurture curious, resilient learners who contribute positively to society.</p>
                </div>

                <div 
                  className="card enter-up" 
                  ref={el => animRefs.current[1] = el}
                  style={{background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(6,182,212,0.04))',borderLeft:'4px solid #14B8A6',padding:'14px'}}>
                  <h4 style={{margin:'0 0 6px',color:'#14B8A6',fontWeight:700,fontSize:'13px'}}>Our Vision</h4>
                  <p style={{color:'var(--muted)',lineHeight:1.5,fontSize:'12px',margin:0}}>An inclusive, innovative learning community recognized for transformative education.</p>
                </div>
              </div>
              
              <p style={{color:'var(--muted)',lineHeight:1.7,fontSize:'13px',margin:0}}>Founded to serve the local community, we focus on scholarship, service, and leadership ensuring holistic development of every student.</p>
            </div>

            {/* Quick Access Cards - Bottom Section */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}} className='quick-access-cards'>
              <a 
                href="/admissions" 
                className="card enter-up" 
                ref={el => animRefs.current[2] = el}
                style={{display:'block',overflow:'hidden',padding:0,position:'relative',transition:'all var(--motion-fast) var(--motion-ease)',cursor:'pointer',height:'160px'}} 
                onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-4px)"} 
                onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
              > 
                <ImageLazy src="/photos/School aesthetic.jpeg" alt="Admissions" />
                <div style={{padding:'12px',fontSize:'13px',background:'linear-gradient(135deg,rgba(250,204,21,0.95),rgba(20,184,166,0.8))',color:'#1F2937',position:'absolute',bottom:0,width:'100%',zIndex:2}}>
                  <h3 style={{margin:'0 0 4px',fontSize:'16px',fontWeight:700}}>Admissions</h3>
                  <p style={{marginTop:2,color:'rgba(31,41,55,0.9)',fontSize:'13px',margin:0}}>Apply for 2025–26</p>
                </div>
              </a>

              <a 
                href="/academics" 
                className="card enter-up" 
                ref={el => animRefs.current[3] = el}
                style={{display:'block',overflow:'hidden',padding:0,position:'relative',transition:'all var(--motion-fast) var(--motion-ease)',cursor:'pointer',height:'160px'}} 
                onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-4px)"} 
                onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
              > 
                <ImageLazy src="/photos/_ - 2026-02-05T120003.775.jpeg" alt="Academics" />
                <div style={{padding:'12px',fontSize:'13px',background:'linear-gradient(135deg,rgba(20,184,166,0.9),rgba(6,182,212,0.8))',color:'white',position:'absolute',bottom:0,width:'100%',zIndex:2}}>
                  <h3 style={{margin:'0 0 4px',fontSize:'16px',fontWeight:700}}>Academics</h3>
                  <p style={{marginTop:2,color:'rgba(255,255,255,0.9)',fontSize:'13px',margin:0}}>Excellence in learning</p>
                </div>
              </a>

              <a 
                href="/books" 
                className="card enter-up" 
                ref={el => animRefs.current[4] = el}
                style={{display:'block',overflow:'hidden',padding:0,position:'relative',transition:'all var(--motion-fast) var(--motion-ease)',cursor:'pointer',height:'160px',background:'linear-gradient(135deg,rgba(139,92,246,0.1),rgba(59,130,246,0.1))'}} 
                onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-4px)"} 
                onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
              > 
                <div style={{padding:'12px',fontSize:'13px',background:'linear-gradient(135deg,rgba(139,92,246,0.9),rgba(59,130,246,0.8))',color:'white',position:'absolute',bottom:0,width:'100%',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                  <h3 style={{margin:'0 0 4px',fontSize:'16px',fontWeight:700}}>📚 Books</h3>
                  <p style={{marginTop:2,color:'rgba(255,255,255,0.9)',fontSize:'13px',margin:0}}>CBC book guidance</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Gallery" style={{paddingTop:8,paddingBottom:8}}>
          <h3 style={{margin:'0 0 12px'}}>Gallery</h3>
          <div className="home-gallery">
            <div className="card enter-up" ref={el => animRefs.current[5] = el}><ImageLazy src="/photos/School aesthetic.jpeg" alt="Campus" /><div className="card-body"><small style={{color:'var(--muted)'}}>Campus</small></div></div>
            <div className="card enter-up" ref={el => animRefs.current[6] = el}><ImageLazy src="/photos/_ - 2026-02-05T115812.411.jpeg" alt="Students" /><div className="card-body"><small style={{color:'var(--muted)'}}>Students</small></div></div>
            <div className="card enter-up" ref={el => animRefs.current[7] = el}><ImageLazy src="/photos/_ - 2026-02-05T120003.775.jpeg" alt="Sports" /><div className="card-body"><small style={{color:'var(--muted)'}}>Sports</small></div></div>
            <div className="card enter-up" ref={el => animRefs.current[8] = el}><ImageLazy src="/photos/10 Ways to Save Money on Sporting Equipment for Your Kids.jpeg" alt="Community" /><div className="card-body"><small style={{color:'var(--muted)'}}>Community</small></div></div>
          </div>
        </section>

        <section className="section" aria-label="Call to action">
          <div className="card card--highlight enter-up" ref={el => animRefs.current[9] = el} style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
            <div>
              <h3 style={{margin:0,fontSize:'18px',fontWeight:700,color:'var(--text-color)'}}>Admissions Open for 2025–26</h3>
              <p style={{margin:'4px 0 0',fontSize:'14px',color:'var(--muted)'}}>Apply now and join our community</p>
            </div>
            <div>
              <a className="btn primary" href="/admissions" style={{whiteSpace:'nowrap'}}>Apply Now</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
