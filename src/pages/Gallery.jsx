import React, { useState, useRef, useEffect } from 'react'
import Card from '../ui/Card'
import ImageLazy from '../components/ImageLazy'

const CATEGORIES = {
  all: 'All Photos',
  campus: 'Campus',
  academics: 'Academics',
  sports: 'Sports',
  community: 'Community'
}

const GALLERY_ITEMS = [
  {file:"School aesthetic.jpeg",caption:"Main Campus Building",category:"campus"},
  {file:"_ - 2026-02-05T115812.411.jpeg",caption:"Student Activities",category:"academics"},
  {file:"_ - 2026-02-05T120003.775.jpeg",caption:"PE Class",category:"sports"},
  {file:"_ - 2026-02-05T120017.179.jpeg",caption:"Sports & Recreation",category:"sports"},
  {file:"10 Ways to Save Money on Sporting Equipment for Your Kids.jpeg",caption:"Athletics Program",category:"sports"},
  {file:"Black People Can't Even Watch Their Children Play Soccer In Peace Now — ESSENCE.jpeg",caption:"Football Championship",category:"sports"},
]

export default function Gallery(){
  const [activeCategory, setActiveCategory] = useState('all')
  const animRefs = useRef([])

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

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
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>Campus Gallery</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Explore moments from our vibrant school community</p>
      </div>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Browse by Category</h2>
        <Card className="enter-up" ref={el => animRefs.current[0] = el}>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:24}}>
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                style={{
                  padding:'10px 16px',
                  backgroundColor: activeCategory === key ? '#14B8A6' : '#f5f5f5',
                  color: activeCategory === key ? 'white' : 'var(--text-color)',
                  border: 'none',
                  borderRadius:'6px',
                  cursor:'pointer',
                  fontWeight:600,
                  fontSize:'13px',
                  transition:'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== key) {
                    e.target.style.backgroundColor = '#e5e5e5'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== key) {
                    e.target.style.backgroundColor = '#f5f5f5'
                  }
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:16}}>
            {filteredItems.map((item, idx)=> (
              <div
                key={idx}
                className="card enter-up"
                ref={el => animRefs.current[idx + 1] = el}
                style={{borderRadius:10,overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.1)',transition:'all var(--motion-fast) var(--motion-ease)',cursor:'pointer'}}
                onMouseEnter={(e)=>{
                  e.currentTarget.style.transform='scale(1.05)'
                  e.currentTarget.style.boxShadow='0 8px 24px rgba(37,99,235,0.2)'
                }}
                onMouseLeave={(e)=>{
                  e.currentTarget.style.transform='scale(1)'
                  e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{position:'relative',height:'200px'}}>
                  <ImageLazy src={`/photos/${encodeURIComponent(item.file)}`} alt={item.caption} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(to top,rgba(0,0,0,0.7),transparent)',color:'white',padding:'12px'}}>
                    <p style={{margin:0,fontSize:'13px',fontWeight:600}}>{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p style={{textAlign:'center',color:'var(--muted)',padding:'40px 20px'}}>No photos in this category yet.</p>
          )}
        </Card>
      </section>

      <section>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>More to Explore</h2>
        <Card className="enter-up" ref={el => animRefs.current[20] = el}>
          <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>Our gallery showcases the vibrant life on campus—from academic excellence and sporting achievements to community service and cultural celebrations. These images represent the spirit, diversity, and achievements of our school community.</p>
          <p style={{color:'var(--muted)',lineHeight:1.8,margin:0}}>For more information or to schedule a campus visit where you can see our facilities firsthand, <a href="/contact" style={{color:'#14B8A6',textDecoration:'none',fontWeight:600}}>contact us</a>.</p>
        </Card>
      </section>
    </div>
  )
}
