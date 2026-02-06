import React, { useState, useRef, useEffect, useMemo } from 'react'
import Card from '../ui/Card'

const BOOKS_DATA = [
  { id: 1, subject: 'English', grade: 1, title: 'English Language & Literature Grade 9-12 CBC', author: 'Henry Kamau', publisher: 'East African', image: '📚', description: 'Comprehensive communication-focused content with comprehension, grammar, writing, and speaking exercises aligned to CBC competencies.', rating: 4.8, reviews: 124, popularity: 95, tags: ['communication', 'literature', 'core'], trending: true },
  { id: 2, subject: 'Mathematics', grade: 1, title: 'Mathematics for CBC Grade 9-12', author: 'Prof. Kariuki', publisher: 'Longhorn', image: '📐', description: 'Problem-solving approach with worked examples, practice questions, and real-world applications. Develops critical thinking competencies.', rating: 4.9, reviews: 156, popularity: 98, tags: ['stem', 'problem-solving', 'core'], trending: true },
  { id: 3, subject: 'Physics', grade: 2, title: 'Physics Essentials (CBC)', author: 'Dr. Mutua', publisher: 'KLB', image: '🔬', description: 'Practical experiments, lab procedures, and real-world physics with digital access. Aligns with KNEC practical requirements.', rating: 4.7, reviews: 89, popularity: 92, tags: ['stem', 'practical', 'science'] },
  { id: 4, subject: 'Chemistry', grade: 2, title: 'Chemistry Explorer CBC', author: 'Odongo & Team', publisher: 'Jomo Kenyatta', image: '⚗️', description: 'Interactive chemistry with safe lab practices, molecular animations, and industry connections. Builds scientific competencies.', rating: 4.6, reviews: 76, popularity: 88, tags: ['stem', 'practical', 'science'] },
  { id: 5, subject: 'Biology', grade: 2, title: 'Living World Biology Grade 9-12', author: 'Dr. Mwangi', publisher: 'East African', image: '🧬', description: 'Life sciences integrated with environmental focus. Includes practical dissection guides and ecological case studies.', rating: 4.7, reviews: 98, popularity: 91, tags: ['stem', 'environmental', 'science'] },
  { id: 6, subject: 'Kiswahili', grade: 1, title: 'Kiswahili Lugha Halisi CBC', author: 'Prof. Kinyua', publisher: 'Jomo Kenyatta', image: '📖', description: 'Literature, grammar, communication skills with authentic Kenyan texts. Develops language competencies with cultural integration.', rating: 4.5, reviews: 67, popularity: 85, tags: ['communication', 'language', 'core'] },
  { id: 7, subject: 'History', grade: 3, title: 'History of Africa & Kenya CBC', author: 'Dr. Mwai', publisher: 'KLB', image: '🏛️', description: 'Comprehensive history with critical analysis, document interpretation, and contemporary connections for better understanding.', rating: 4.4, reviews: 52, popularity: 80, tags: ['social-studies', 'analysis'] },
  { id: 8, subject: 'Geography', grade: 3, title: 'Geography World & Kenya CBC', author: 'Kipkemboi', publisher: 'Longhorn', image: '🌍', description: 'Physical and human geography with case studies, field study guides, and real-world environmental applications.', rating: 4.5, reviews: 58, popularity: 82, tags: ['social-studies', 'environmental'] },
  { id: 9, subject: 'Christian RE', grade: 1, title: 'Christian Religious Education Values', author: 'Rev. Karanja', publisher: 'Bible Society', image: '✝️', description: 'Biblical studies, ethics, character formation, and moral development integrated with social responsibility projects.', rating: 4.3, reviews: 44, popularity: 75, tags: ['character', 'values'] },
  { id: 10, subject: 'Computer Studies', grade: 3, title: 'Digital Literacy & Coding CBC', author: 'Tech. Njoroge', publisher: 'Tech Publishers', image: '💻', description: '21st-century skills including digital safety, coding basics, spreadsheets, presentations, and cybersecurity awareness.', rating: 4.9, reviews: 142, popularity: 96, tags: ['stem', 'technology', 'future-skills'], trending: true },
  { id: 11, subject: 'Business Studies', grade: 3, title: 'Entrepreneurship & Business CBC', author: 'Dr. Kimani', publisher: 'KLB', image: '💼', description: 'Enterprise development, business plans, financial literacy, and real entrepreneurship case studies from Kenya and Africa.', rating: 4.6, reviews: 71, popularity: 87, tags: ['career', 'skills'] },
  { id: 12, subject: 'Economics', grade: 4, title: 'Economics Principles & Practice', author: 'Prof. Kipchoge', publisher: 'East African', image: '💰', description: 'Microeconomics, macroeconomics, and Kenyan economic context with policy analysis and current events integration.', rating: 4.5, reviews: 63, popularity: 83, tags: ['social-studies', 'analysis'] },
]

// Recommendation algorithm
const getRecommendations = (userGrade, userSubjects, learningStyle) => {
  return BOOKS_DATA
    .map(book => {
      let score = 0
      
      // Grade compatibility (40 points)
      if (book.grade <= userGrade) {
        score += 40 - (userGrade - book.grade) * 5
      }
      
      // Subject match (40 points)
      if (userSubjects.includes(book.subject)) {
        score += 40
      }
      
      // Learning style match (10 points)
      if (learningStyle === 'practical' && book.tags.includes('practical')) {
        score += 10
      } else if (learningStyle === 'theoretical' && book.tags.includes('analysis')) {
        score += 10
      } else if (learningStyle === 'applied' && book.tags.includes('real-world')) {
        score += 10
      }
      
      // Trending boost (5 points)
      if (book.trending) {
        score += 5
      }
      
      // Rating consideration (5 points)
      score += (book.rating / 5) * 5
      
      return { ...book, recommendationScore: Math.min(100, Math.round(score)), matchReason: getMatchReason(book, userSubjects, learningStyle) }
    })
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
}

const getMatchReason = (book, userSubjects, learningStyle) => {
  if (userSubjects.includes(book.subject)) {
    return '✓ Perfect match for your subject'
  }
  return '✓ Great for exploring'
}

function StarRating({ rating }) {
  return (
    <div style={{display:'flex',gap:2,alignItems:'center'}}>
      <span>{'⭐'.repeat(Math.floor(rating))}</span>
      <span style={{fontSize:'13px',color:'var(--muted)'}}>{rating.toFixed(1)}</span>
    </div>
  )
}

function BookRecommendationCard({ book, recommendationScore, matchReason }) {
  return (
    <div className="enter-up" style={{padding:'18px',background:'linear-gradient(135deg,rgba(20,184,166,0.06),rgba(10,37,64,0.03))',borderRadius:'12px',border:'1px solid rgba(20,184,166,0.15)',cursor:'pointer',transition:'all 0.3s',position:'relative',overflow:'hidden'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 12px 24px rgba(20,184,166,0.15)',e.currentTarget.style.borderColor='rgba(20,184,166,0.4)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none',e.currentTarget.style.borderColor='rgba(20,184,166,0.15)'}}>
      {/* Recommendation Score Badge */}
      <div style={{position:'absolute',top:12,right:12,background:`linear-gradient(135deg,#14B8A6,#0A2540)`,color:'white',padding:'6px 12px',borderRadius:'20px',fontSize:'12px',fontWeight:700}}>
        {recommendationScore}% Match
      </div>

      <div style={{fontSize:'40px',marginBottom:'12px'}}>{book.image}</div>
      <h4 style={{marginTop:0,marginBottom:'6px',color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>{book.title}</h4>
      <p className="small" style={{marginTop:0,marginBottom:'8px',color:'#14B8A6',fontWeight:600}}>{book.author} • {book.publisher}</p>
      
      <p className="small" style={{color:'var(--muted)',marginBottom:'12px',lineHeight:1.5}}>{book.description}</p>
      
      <div style={{marginBottom:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <StarRating rating={book.rating} />
        <span style={{fontSize:'12px',background:'rgba(250,204,21,0.2)',color:'#F59E0B',padding:'4px 10px',borderRadius:'20px',fontWeight:600}}>Popular</span>
      </div>

      <div style={{background:'rgba(20,184,166,0.1)',padding:'10px 12px',borderRadius:'8px',marginBottom:'12px'}}>
        <p style={{margin:0,fontSize:'12px',color:'#14B8A6',fontWeight:600}}>{matchReason}</p>
      </div>

      <p className="small" style={{margin:'8px 0',color:'var(--muted)',fontSize:'12px'}}>📊 {book.reviews} reviews • Used by {book.popularity}% of students</p>
      
      <button className="btn primary" style={{width:'100%',padding:'10px',fontSize:'13px'}} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>View Details</button>
    </div>
  )
}

export default function Books(){
  const [userRole, setUserRole] = useState(null) // 'student' or 'parent'
  const [selectedGrade, setSelectedGrade] = useState(1)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [learningStyle, setLearningStyle] = useState('balanced')
  const [viewMode, setViewMode] = useState('customize') // 'customize' or 'results'
  const [searchTerm, setSearchTerm] = useState('')
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

  const subjects = ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Kiswahili', 'History', 'Geography', 'Christian RE', 'Computer Studies', 'Business Studies', 'Economics']
  
  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  const recommendations = useMemo(() => {
    if (selectedSubjects.length === 0) return []
    return getRecommendations(selectedGrade, selectedSubjects, learningStyle)
  }, [selectedGrade, selectedSubjects, learningStyle])

  const trendingBooks = useMemo(() => {
    return BOOKS_DATA.filter(b => b.trending).sort((a, b) => b.popularity - a.popularity).slice(0, 4)
  }, [])

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [recommendations, searchTerm])

  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'0 12px',marginTop:12}}>
      <div style={{background:'linear-gradient(135deg,#0A2540 0%,#14B8A6 100%)',color:'white',padding:'40px 20px',borderRadius:16,marginBottom:32}}>
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>📚 Smart Book Recommendation Library</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>AI-powered recommendations tailored to your grade, subjects, and learning style</p>
      </div>

      {!userRole ? (
        <section style={{marginBottom:32}}>
          <Card className="enter-up" ref={el => animRefs.current[0] = el}>
            <h2 style={{marginTop:0,fontSize:'20px',color:'var(--text-color)',fontWeight:700,marginBottom:20}}>👤 Who are you?</h2>
            <p style={{color:'var(--muted)',marginBottom:20}}>Tell us about yourself so we can recommend the perfect books for your needs.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <button className="btn primary" style={{padding:'16px',fontSize:'16px',fontWeight:700,cursor:'pointer'}} onClick={()=>setUserRole('student')}>
                🎓 I'm a Student
              </button>
              <button className="btn ghost" style={{padding:'16px',fontSize:'16px',fontWeight:700,cursor:'pointer'}} onClick={()=>setUserRole('parent')}>
                👨‍👩‍👧 I'm a Parent/Guardian
              </button>
            </div>
          </Card>
        </section>
      ) : (
        <>
          {viewMode === 'customize' ? (
            <section style={{marginBottom:32}}>
              <Card className="enter-up" ref={el => animRefs.current[1] = el}>
                <h2 style={{marginTop:0,fontSize:'20px',color:'var(--text-color)',fontWeight:700,marginBottom:20}}>
                  🎯 Customize Your Recommendations
                  <button className="btn ghost" style={{float:'right',padding:'6px 12px',fontSize:'12px',cursor:'pointer'}} onClick={()=>setUserRole(null)}>Change Role</button>
                </h2>

                <div style={{marginBottom:24}}>
                  <label style={{display:'block',marginBottom:'12px',fontWeight:700,color:'var(--text-color)'}}>
                    Which Form are you in?
                  </label>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10}}>
                    {[1,2,3,4].map(grade => (
                      <button key={grade} onClick={()=>setSelectedGrade(grade)} style={{padding:'12px',border:`2px solid ${selectedGrade === grade ? '#14B8A6' : '#ddd'}`,background:selectedGrade === grade ? '#14B8A6' : 'white',color:selectedGrade === grade ? 'white' : 'var(--text-color)',borderRadius:'8px',fontWeight:700,fontSize:'14px',cursor:'pointer',transition:'all 0.3s'}}>
                        Form {grade}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{marginBottom:24}}>
                  <label style={{display:'block',marginBottom:'12px',fontWeight:700,color:'var(--text-color)'}}>
                    📚 Select your subjects ({selectedSubjects.length} selected)
                  </label>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:10}}>
                    {subjects.map(subject => (
                      <button key={subject} onClick={()=>toggleSubject(subject)} style={{padding:'12px',border:`2px solid ${selectedSubjects.includes(subject) ? '#14B8A6' : '#ddd'}`,background:selectedSubjects.includes(subject) ? 'rgba(20,184,166,0.1)' : 'white',color:'var(--text-color)',borderRadius:'8px',fontWeight:600,fontSize:'13px',cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='#14B8A6'}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor=selectedSubjects.includes(subject) ? '#14B8A6' : '#ddd'}}>
                        {selectedSubjects.includes(subject) ? '✓ ' : ''}{subject}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{marginBottom:24}}>
                  <label style={{display:'block',marginBottom:'12px',fontWeight:700,color:'var(--text-color)'}}>
                    🧠 How do you prefer to learn?
                  </label>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
                    {[
                      {id:'practical',label:'🔬 Practical & Hands-on',desc:'With experiments and real-world examples'},
                      {id:'theoretical',label:'📖 Theoretical & Analytical',desc:'Deep concepts and critical analysis'},
                      {id:'balanced',label:'⚖️ Balanced Approach',desc:'Mix of theory and practice'}
                    ].map(style => (
                      <button key={style.id} onClick={()=>setLearningStyle(style.id)} style={{padding:'16px',border:`2px solid ${learningStyle === style.id ? '#14B8A6' : '#ddd'}`,background:learningStyle === style.id ? 'rgba(20,184,166,0.1)' : 'white',color:'var(--text-color)',borderRadius:'8px',textAlign:'left',cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>e.currentTarget.style.borderColor='#14B8A6'} onMouseLeave={(e)=>e.currentTarget.style.borderColor=learningStyle === style.id ? '#14B8A6' : '#ddd'}>
                        <div style={{fontWeight:700,marginBottom:4}}>{style.label}</div>
                        <div style={{fontSize:'12px',color:'var(--muted)'}}>{style.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{display:'flex',gap:12}}>
                  <button className="btn primary" style={{flex:1,padding:'14px',fontWeight:700,cursor:'pointer',fontSize:'16px'}} onClick={()=>setViewMode('results')} disabled={selectedSubjects.length === 0}>
                    🚀 Get Recommendations ({recommendations.length})
                  </button>
                  <button className="btn ghost" style={{padding:'14px',fontWeight:700,cursor:'pointer'}} onClick={()=>{setSelectedSubjects([]); setSelectedGrade(1); setLearningStyle('balanced')}}>
                    Reset
                  </button>
                </div>
              </Card>
            </section>
          ) : (
            <>
              <section style={{marginBottom:32}}>
                <Card className="enter-up" ref={el => animRefs.current[2] = el} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap'}}>
                  <div>
                    <h2 style={{marginTop:0,marginBottom:8,color:'var(--text-color)'}}>📊 Your Personalized Recommendations</h2>
                    <p style={{margin:0,color:'var(--muted)',fontSize:'14px'}}>Based on Form {selectedGrade} • {selectedSubjects.join(', ')} • {learningStyle === 'practical' ? 'Practical' : learningStyle === 'theoretical' ? 'Analytical' : 'Balanced'} learning</p>
                  </div>
                  <button className="btn ghost" style={{padding:'10px 16px',cursor:'pointer'}} onClick={()=>{setViewMode('customize');setSearchTerm('')}}>← Change Preferences</button>
                </Card>
              </section>

              <section style={{marginBottom:32}}>
                <div style={{marginBottom:20}}>
                  <input type="text" placeholder="Search recommendations..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} style={{width:'100%',padding:'12px 16px',border:'1px solid #ddd',borderRadius:'8px',fontSize:'14px',fontFamily:'inherit',boxSizing:'border-box'}} />
                </div>

                {filteredRecommendations.length > 0 ? (
                  <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))'}}>
                    {filteredRecommendations.map(book => (
                      <BookRecommendationCard key={book.id} book={book} recommendationScore={book.recommendationScore} matchReason={book.matchReason} />
                    ))}
                  </div>
                ) : (
                  <Card style={{textAlign:'center',padding:'40px'}}>
                    <p style={{fontSize:'16px',fontWeight:600,color:'var(--muted)'}}>No books match your search</p>
                    <button className="btn primary" onClick={()=>setSearchTerm('')} style={{marginTop:12}}>Clear Search</button>
                  </Card>
                )}
              </section>
            </>
          )}
        </>
      )}

      {trendingBooks.length > 0 && (
        <section style={{marginBottom:32}}>
          <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>🔥 Trending Now</h2>
          <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
            {trendingBooks.map(book => (
              <div key={book.id} className="enter-up" style={{padding:'16px',background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderRadius:'12px',border:'1px solid rgba(250,204,21,0.3)',cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{fontSize:'32px',marginBottom:'8px'}}>{book.image}</div>
                <h4 style={{marginTop:0,marginBottom:'4px',color:'var(--text-color)',fontSize:'14px',fontWeight:700}}>{book.title}</h4>
                <p className="small" style={{marginTop:0,color:'#F59E0B',fontWeight:600,marginBottom:8}}>⭐ {book.rating} • {book.reviews} reviews</p>
                <p className="small" style={{color:'var(--muted)',margin:0}}>{book.description.substring(0,60)}...</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>❓ Common Questions</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))'}}>
          <Card className="enter-up" ref={el => animRefs.current[3] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>How does the recommendation system work?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Our algorithm analyzes your grade level, subject selection, learning style, and book ratings to suggest the most relevant titles for your needs.</p>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[4] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>Can I change my preferences later?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Yes! You can update your grade, subjects, and learning style at any time. Just click "Change Preferences" to get new recommendations.</p>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[5] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>What do the match percentages mean?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>The percentage shows how well each book aligns with your preferences. Higher scores mean better matches for your selected grade and subjects.</p>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[6] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>Are ratings from actual readers?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Yes! Ratings are based on feedback from students and teachers who've used these books in CBC curriculum.</p>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[7] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>Can I get advice on purchases?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Absolutely! Contact our team via WhatsApp for personalized advice on which books to purchase for your situation.</p>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[8] = el}>
            <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700}}>Do recommendations change by grade?</h4>
            <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Yes, our system prioritizes books appropriate for your form level while considering books from adjacent levels for advanced/remedial needs.</p>
          </Card>
        </div>
      </section>

      <section>
        <Card className="enter-up" ref={el => animRefs.current[9] = el} style={{background:'linear-gradient(135deg,#0A2540 0%,#14B8A6 100%)',color:'white',textAlign:'center'}}>
          <h2 style={{marginTop:0,fontSize:'20px',fontWeight:700}}>Ready to Get Your Books?</h2>
          <p style={{color:'rgba(255,255,255,0.9)',lineHeight:1.8}}>Found the books you need? Contact our team for pricing, availability, and delivery information.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center'}}>
            <a href="https://wa.me/254712345678?text=Hi!%20I%20found%20some%20great%20book%20recommendations%20on%20your%20library.%20I%27d%20like%20to%20order%20them." target="_blank" rel="noopener noreferrer" className="btn" style={{background:'white',color:'#0A2540',fontWeight:700,textDecoration:'none',display:'inline-block',padding:'12px 24px',borderRadius:'8px',border:'none',cursor:'pointer'}}>💬 WhatsApp</a>
            <a href="/contact" className="btn ghost" style={{color:'white',borderColor:'white',textDecoration:'none',display:'inline-block',padding:'12px 24px',borderRadius:'8px',border:'2px solid white',cursor:'pointer',fontWeight:700}}>📋 Contact Form</a>
          </div>
        </Card>
      </section>
    </div>
  )
}
