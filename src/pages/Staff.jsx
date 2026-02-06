import React, { useMemo, useRef, useEffect, useState } from 'react'
import Card from '../ui/Card'
import SearchBar from '../components/SearchBar'

const STAFF = [
  {id:1,name:'Dr. Margaret Njoroge',role:'Principal',dept:'Leadership',bio:'Ph.D. Education, 20+ years experience in school management'},
  {id:2,name:'Mr. Paul Mwangi',role:'HOD - Sciences',dept:'Sciences',bio:'BSc Physics, specialized in STEM mentorship and innovation'},
  {id:3,name:'Ms. Amina Hassan',role:'School Counsellor',dept:'Student Support',bio:'MA Psychology, dedicated to student wellness and development'},
  {id:4,name:'Mr. James Kipchoge',role:'HOD - Languages',dept:'Languages',bio:'BA English Literature, accomplished debate coach and mentor'},
  {id:5,name:'Ms. Sarah Okonkwo',role:'HOD - Humanities',dept:'Humanities',bio:'BA History, curriculum development specialist and researcher'},
  {id:6,name:'Mr. David Mutua',role:'Games Master',dept:'Sports',bio:'Sports Science degree, former national athlete'},
  {id:7,name:'Ms. Emily Koech',role:'Librarian',dept:'Learning Resources',bio:'BA Information Science, research specialist and literacy advocate'},
  {id:8,name:'Mr. Joseph Muriithi',role:'ICT Coordinator',dept:'Technology',bio:'BSc Computer Science, coding mentor and tech innovator'},
]

export default function Staff(){
  const [searchQuery, setSearchQuery] = useState('')
  const animRefs = useRef([])

  const filteredStaff = useMemo(() => {
    if (!searchQuery.trim()) return STAFF
    const query = searchQuery.toLowerCase()
    return STAFF.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.role.toLowerCase().includes(query) ||
      s.dept.toLowerCase().includes(query) ||
      s.bio.toLowerCase().includes(query)
    )
  }, [searchQuery])

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
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>Our Leadership Team</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Dedicated educators and administrators committed to excellence</p>
      </div>

      <section style={{marginBottom:32}}>
        <Card className="enter-up" ref={el => animRefs.current[0] = el}>
          <h2 style={{marginTop:0,fontSize:'20px',color:'var(--text-color)',marginBottom:20}}>Find Staff Member</h2>
          <SearchBar onSearch={setSearchQuery} placeholder="Search by name, role, or department..." />
          
          {filteredStaff.length === 0 ? (
            <p style={{color:'var(--muted)',textAlign:'center',padding:'20px'}}>No staff members match your search.</p>
          ) : (
            <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))'}}>
              {filteredStaff.map((s, idx) => (
                <div
                  key={s.id}
                  className="card enter-up"
                  ref={el => animRefs.current[idx + 1] = el}
                  style={{
                    padding:'18px',
                    background:'linear-gradient(135deg,rgba(20,184,166,0.06),rgba(20,184,166,0.02))',
                    borderLeft:'4px solid #14B8A6',
                    transition:'all var(--motion-fast) var(--motion-ease)',
                    cursor:'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background='linear-gradient(135deg,rgba(20,184,166,0.12),rgba(20,184,166,0.06))'
                    e.currentTarget.style.transform='translateY(-2px)'
                    e.currentTarget.style.boxShadow='0 8px 24px rgba(20,184,166,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background='linear-gradient(135deg,rgba(20,184,166,0.06),rgba(20,184,166,0.02))'
                    e.currentTarget.style.transform='translateY(0)'
                    e.currentTarget.style.boxShadow='none'
                  }}
                >
                  <div style={{fontWeight:700,fontSize:'16px',color:'var(--text-color)',marginBottom:4}}>{s.name}</div>
                  <div style={{fontSize:'13px',color:'#14B8A6',fontWeight:600,marginBottom:8}}>{s.role}</div>
                  <div style={{fontSize:'12px',color:'var(--muted)',marginBottom:12,fontStyle:'italic'}}>📍 {s.dept}</div>
                  <p style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6,margin:0}}>{s.bio}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </section>

      <section>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Departments</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
          {['Sciences', 'Languages', 'Humanities', 'Student Support', 'Sports', 'Technology', 'Learning Resources'].map((dept, idx) => (
            <Card
              key={dept}
              className="enter-up"
              ref={el => animRefs.current[20 + idx] = el}
              style={{padding:'20px',textAlign:'center',background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.04))',borderTop:'3px solid #14B8A6'}}
            >
              <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'15px',fontWeight:700}}>{dept}</h4>
              <p style={{fontSize:'12px',color:'var(--muted)',margin:0}}>Headed by dedicated educators</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
