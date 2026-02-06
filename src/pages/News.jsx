import React, { useState, useEffect, useRef } from 'react'
import SearchBar from '../components/SearchBar'

const NEWS_ARTICLES = [
  {id:1,title:'Form Four Results Released',date:'Feb 5, 2026',category:'Academics',excerpt:'Congratulations to our Form Four students on their excellent KCSE results. Average score improved by 12%.'},
  {id:2,title:'Football Team Wins County Championship',date:'Feb 1, 2026',category:'Sports',excerpt:'Our boys football team won the county championship after an exciting final match. Excellent performance!'},
  {id:3,title:'New Science Laboratory Opened',date:'Jan 28, 2026',category:'Infrastructure',excerpt:'We are proud to open our state-of-the-art science laboratory equipped with modern equipment for hands-on learning.'},
  {id:4,title:'2026 Admissions Now Open',date:'Jan 20, 2026',category:'Admissions',excerpt:'Applications for the 2025-26 academic year are now open. Deadline: March 31, 2026. Apply now!'},
  {id:5,title:'Debate Team Qualifies for Nationals',date:'Jan 15, 2026',category:'Activities',excerpt:'Our debate team impressed judges and qualified for the national championships. We wish them all the best!'},
  {id:6,title:'Alumni Visits Campus',date:'Jan 10, 2026',category:'Community',excerpt:'Distinguished alumnus, Prof. James Mwangi, visited campus to mentor current students in research methodology.'},
]

export default function News(){
  const [searchQuery, setSearchQuery] = useState('')
  const animRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.1 })

    if (animRef.current) observer.observe(animRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 12px',marginTop:12}}>
      <div style={{background:'linear-gradient(135deg,#0A2540 0%,#14B8A6 100%)',color:'white',padding:'40px 20px',borderRadius:16,marginBottom:28}}>
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>News & Notices</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Stay updated with school announcements and events</p>
      </div>
      <div className="card enter-up" ref={animRef} style={{marginBottom:28}}>
        <SearchBar onSearch={setSearchQuery} placeholder="Search news and announcements..." />
      </div>

      <div style={{display:'grid',gap:16}}>
        {NEWS_ARTICLES.map((article, idx)=> {
          const matches = !searchQuery || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || article.category.toLowerCase().includes(searchQuery.toLowerCase())
          return matches ? (
            <div key={article.id} className="card enter-up" style={{borderLeft:'4px solid #14B8A6'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
                <div style={{flex:1}}>
                  <div style={{display:'flex',gap:8,marginBottom:8,alignItems:'center'}}>
                    <span style={{fontSize:'11px',background:'#14B8A6',color:'white',padding:'3px 8px',borderRadius:'4px',fontWeight:600}}>{article.category}</span>
                    <span style={{fontSize:'12px',color:'var(--muted)'}}>{article.date}</span>
                  </div>
                  <h3 style={{margin:'0 0 8px',fontSize:'16px',fontWeight:700,color:'var(--text-color)'}}>{article.title}</h3>
                  <p style={{margin:0,fontSize:'14px',color:'var(--muted)',lineHeight:1.6}}>{article.excerpt}</p>
                </div>
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}
