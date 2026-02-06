import React, { useEffect, useRef } from 'react'
import Card from '../ui/Card'

function Trend({label, value}){
  const points = '0,10 20,6 40,14 60,8 80,12 100,4'
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px',background:'rgba(37,99,235,0.06)',borderRadius:8,marginBottom:8}}>
      <div>
        <div style={{fontWeight:700,color:'var(--text-color)'}}>{label}</div>
        <div className="small" style={{marginTop:2}}>{value}</div>
      </div>
      <svg width="100" height="28" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden>
        <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function Academics(){
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
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>Academic Excellence</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Rigorous curriculum, inspired teaching, exceptional results</p>
      </div>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Performance & Achievement</h2>
        <Card className="enter-up" ref={el => animRefs.current[0] = el}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
            <Trend label="Form Four mean trend" value="Consistent improvement" />
            <Trend label="STEM uptake" value="Rising enrollment in sciences" />
            <Trend label="University placement" value="95%+ proceed to tertiary" />
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>CBC Curriculum Framework</h2>
        <Card className="enter-up" ref={el => animRefs.current[1] = el} style={{marginBottom:16}}>
          <h3 style={{marginTop:0,color:'var(--text-color)',fontSize:'18px'}}>What is CBC?</h3>
          <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>The Competency-Based Curriculum (CBC) is Kenya's modern educational framework designed to develop learners with practical skills, critical thinking, and competencies for the 21st century. It shifts from traditional rote learning to outcome-focused education emphasizing practical application.</p>
          
          <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))'}}>
            <div style={{padding:'16px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderTop:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'14px',fontWeight:700}}>🎯 Core Competencies</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Communication, collaboration, critical thinking, creativity, and problem-solving are integrated across all subjects.</p>
            </div>
            <div style={{padding:'16px',background:'rgba(250,204,21,0.08)',borderRadius:'8px',borderTop:'4px solid #FACC15'}}>
              <h4 style={{marginTop:0,color:'#F59E0B',fontSize:'14px',fontWeight:700}}>⚙️ Curriculum Areas</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Languages, STEM, Social Studies, Religious Education, and Physical Education form the foundation.</p>
            </div>
            <div style={{padding:'16px',background:'rgba(59,130,246,0.08)',borderRadius:'8px',borderTop:'4px solid #3b82f6'}}>
              <h4 style={{marginTop:0,color:'#3b82f6',fontSize:'14px',fontWeight:700}}>📚 Integrated Learning</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Subjects connect across disciplines. Students learn through projects, discussions, and real-world applications.</p>
            </div>
          </div>
        </Card>

        <Card className="enter-up" ref={el => animRefs.current[2] = el}>
          <h3 style={{marginTop:0,color:'var(--text-color)',fontSize:'18px'}}>How CBC Works</h3>
          <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',marginTop:16}}>
            <div style={{paddingLeft:20,borderLeft:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px',fontWeight:700}}>1. Learning Outcomes</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Clear, measurable objectives guide each lesson. Students know exactly what competencies they'll develop.</p>
            </div>
            <div style={{paddingLeft:20,borderLeft:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px',fontWeight:700}}>2. Interactive Methods</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Group work, discussions, experiments, and projects replace passive lecturing. Active engagement drives learning.</p>
            </div>
            <div style={{paddingLeft:20,borderLeft:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px',fontWeight:700}}>3. Continuous Assessment</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Regular formative assessments track progress. Feedback helps students improve continuously throughout the term.</p>
            </div>
            <div style={{paddingLeft:20,borderLeft:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px',fontWeight:700}}>4. Summative Evaluation</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>National exams assess mastery of competencies at the end of each level (Grade 4, 6, 8, 12).</p>
            </div>
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Course Offerings</h2>
        <Card className="enter-up" ref={el => animRefs.current[3] = el}>
          <h3 style={{marginTop:0,color:'var(--text-color)'}}>Core Subjects (CBC Aligned)</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:12}}>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Languages</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>English, Kiswahili, French</p>
            </div>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Sciences</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>Physics, Chemistry, Biology</p>
            </div>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Mathematics</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>Pure & Applied Maths</p>
            </div>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Humanities</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>History, Geography, CRE</p>
            </div>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Electives</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>Business, Computer Studies</p>
            </div>
            <div style={{padding:'14px',background:'rgba(20,184,166,0.08)',borderRadius:'8px',borderLeft:'3px solid #14B8A6'}}>
              <strong style={{fontSize:'13px',color:'#14B8A6',display:'block',marginBottom:'4px'}}>Arts</strong>
              <p className="small" style={{color:'var(--muted)',margin:0}}>Visual Arts, Music, Drama</p>
            </div>
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Learning Experience</h2>
        <Card className="enter-up" ref={el => animRefs.current[2] = el}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:20}}>
            <div style={{padding:'20px',background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderRadius:'10px',borderLeft:'4px solid #FACC15'}}>
              <h4 style={{marginTop:0,color:'#F59E0B',fontSize:'15px',fontWeight:700}}>Modern Facilities</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Well-equipped science labs, computer labs with latest technology, library with extensive resources, and comfortable classrooms.</p>
            </div>
            <div style={{padding:'20px',background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.04))',borderRadius:'10px',borderLeft:'4px solid #14B8A6'}}>
              <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'15px',fontWeight:700}}>Expert Teachers</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Experienced and qualified teachers dedicated to student success. Regular professional development and mentoring programs.</p>
            </div>
            <div style={{padding:'20px',background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(59,130,246,0.04))',borderRadius:'10px',borderLeft:'4px solid #3b82f6'}}>
              <h4 style={{marginTop:0,color:'#3b82f6',fontSize:'15px',fontWeight:700}}>Student Support</h4>
              <p className="small" style={{color:'var(--muted)',margin:0,lineHeight:1.6}}>Guidance counselors, academic mentoring, and pastoral care. We nurture both intellectual and emotional growth.</p>
            </div>
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Co-Curricular Activities</h2>
        <Card className="enter-up" ref={el => animRefs.current[3] = el}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            <div>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700,marginBottom:12}}>🏆 Sports</h4>
              <ul style={{margin:0,paddingLeft:20,fontSize:'13px',color:'var(--muted)',lineHeight:1.8}}>
                <li>Football (Boys & Girls)</li>
                <li>Volleyball</li>
                <li>Athletics & Track</li>
                <li>Tennis</li>
                <li>Swimming</li>
              </ul>
            </div>
            <div>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'15px',fontWeight:700,marginBottom:12}}>🎯 Clubs & Societies</h4>
              <ul style={{margin:0,paddingLeft:20,fontSize:'13px',color:'var(--muted)',lineHeight:1.8}}>
                <li>Debate & Public Speaking</li>
                <li>Science Club</li>
                <li>Entrepreneurship Club</li>
                <li>Environmental Club</li>
                <li>Drama & Arts Club</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Recommended Learning Materials</h2>
        <Card className="enter-up" ref={el => animRefs.current[5] = el}>
          <p style={{color:'var(--muted)',marginBottom:20}}>High-quality textbooks and reference materials supporting our CBC curriculum. All books are carefully selected to align with learning outcomes and competency development.</p>
          
          <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.04))',borderRadius:'10px',border:'1px solid rgba(20,184,166,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(20,184,166,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📚</div>
              <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'14px',fontWeight:700}}>English Language</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Communication-focused textbooks with comprehension, grammar, and writing exercises.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 850-1,200</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(250,204,21,0.08),rgba(250,204,21,0.04))',borderRadius:'10px',border:'1px solid rgba(250,204,21,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(250,204,21,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>🔬</div>
              <h4 style={{marginTop:0,color:'#F59E0B',fontSize:'14px',fontWeight:700}}>Sciences (Physics)</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Practical experiments, real-world applications, with lab procedure guides.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 950-1,400</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(59,130,246,0.04))',borderRadius:'10px',border:'1px solid rgba(59,130,246,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(59,130,246,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📐</div>
              <h4 style={{marginTop:0,color:'#3b82f6',fontSize:'14px',fontWeight:700}}>Mathematics</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Problem-solving focus with worked examples and practice questions aligned to CBC.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 1,000-1,500</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(34,197,94,0.04))',borderRadius:'10px',border:'1px solid rgba(34,197,94,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(34,197,94,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>🌍</div>
              <h4 style={{marginTop:0,color:'#22c55e',fontSize:'14px',fontWeight:700}}>Social Studies</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Geography, History, Citizenship with case studies and current events integration.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 750-1,100</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(139,92,246,0.08),rgba(139,92,246,0.04))',borderRadius:'10px',border:'1px solid rgba(139,92,246,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(139,92,246,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📖</div>
              <h4 style={{marginTop:0,color:'#8b5cf6',fontSize:'14px',fontWeight:700}}>Kiswahili</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Literature, grammar, and communication skills with authentic texts.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 800-1,200</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(236,72,153,0.08),rgba(236,72,153,0.04))',borderRadius:'10px',border:'1px solid rgba(236,72,153,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(236,72,153,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>✝️</div>
              <h4 style={{marginTop:0,color:'#ec4899',fontSize:'14px',fontWeight:700}}>Christian Religious Ed.</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Biblical studies, ethics, and character development integrated throughout.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 600-900</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.04))',borderRadius:'10px',border:'1px solid rgba(20,184,166,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(20,184,166,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>💻</div>
              <h4 style={{marginTop:0,color:'#14B8A6',fontSize:'14px',fontWeight:700}}>Computer Studies</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Digital literacy, coding basics, and 21st-century tech skills.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 1,100-1,600</p>
            </div>

            <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(59,130,246,0.04))',borderRadius:'10px',border:'1px solid rgba(59,130,246,0.2)',transition:'all 0.3s',cursor:'pointer'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 16px rgba(59,130,246,0.1)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>⭐</div>
              <h4 style={{marginTop:0,color:'#3b82f6',fontSize:'14px',fontWeight:700}}>Reference Sets</h4>
              <p className="small" style={{color:'var(--muted)',margin:'6px 0 0',lineHeight:1.5}}>Complete CBC curriculum sets with teacher guides and answer keys included.</p>
              <p style={{margin:'8px 0 0',fontSize:'12px',color:'var(--text-color)',fontWeight:600}}>KES 8,500-12,000</p>
            </div>
          </div>

          <div style={{marginTop:24,padding:'16px',background:'rgba(20,184,166,0.04)',borderRadius:'8px',borderLeft:'4px solid #14B8A6'}}>
            <p className="small" style={{margin:0,color:'var(--muted)',lineHeight:1.6}}><strong>📝 Note:</strong> All recommended materials align with Kenya CBC framework and KNEC standards. Contact our office to order in bulk or for school accounts with discounts. We also provide digital versions for select titles.</p>
          </div>
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Teaching Approach</h2>
        <Card className="enter-up" ref={el => animRefs.current[6] = el}>
          <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>Our teaching aligns with CBC principles: student-centered learning, critical thinking, hands-on experiences, and competency development. Teachers facilitate learning through projects, discussions, real-world applications, and collaborative work—preparing students for university and modern careers.</p>
          <div style={{marginTop:20}}>
            <a className="btn primary" href="/contact" style={{display:'inline-block'}}>Request Prospectus</a>
          </div>
        </Card>
      </section>
    </div>
  )
}


