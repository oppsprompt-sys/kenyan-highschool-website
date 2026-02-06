import React, { useState, useRef, useEffect } from 'react'
import Card from '../ui/Card'

function Step1({ onNext }) {
  return (
    <div>
      <h3>Step 1: Choose Your Path</h3>
      <p className="small">Select the type of admission that best fits your situation.</p>
      <div style={{display:'flex',gap:12,marginTop:16,flexWrap:'wrap'}}>
        <button className="btn primary" onClick={() => onNext('day')}>Day Student</button>
        <button className="btn ghost" onClick={() => onNext('boarding')}>Boarding Student</button>
      </div>
    </div>
  )
}

function Step2({ type, onBack }) {
  return (
    <div>
      <h3>Step 2: Required Documents</h3>
      <p className="small" style={{color:'var(--muted)',marginBottom:16}}>Here's what you need to submit for {type === 'day' ? 'day' : 'boarding'} admission:</p>
      <ul style={{margin:0,paddingLeft:20,fontSize:'13px',color:'var(--muted)',lineHeight:2}}>
        <li>Completed application form</li>
        <li>Birth certificate copy</li>
        <li>School leaving form from previous school</li>
        <li>Medical report (health certificate)</li>
        <li>Passport photo (2x2) - 2 copies</li>
        {type === 'boarding' && <li>Boarding preference form</li>}
        {type === 'boarding' && <li>Parental consent for boarding</li>}
      </ul>
      <div style={{marginTop:20,display:'flex',gap:12}}>
        <a className="btn primary" href="/contact">Download Forms</a>
        <button className="btn ghost" onClick={onBack}>← Back</button>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [step, setStep] = useState(1)
  const [type, setType] = useState(null)
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
        <h1 style={{margin:0,fontSize:'28px',fontWeight:800}}>Join Our School</h1>
        <p style={{margin:'8px 0 0',fontSize:'14px',opacity:0.95}}>Simple, transparent, and welcoming admission process</p>
      </div>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Admission Steps</h2>
        <Card className="enter-up" ref={el => animRefs.current[0] = el}>
          {step === 1 && (
            <Step1
              onNext={(t) => {
                setType(t)
                setStep(2)
              }}
            />
          )}
          {step === 2 && <Step2 type={type} onBack={() => setStep(1)} />}
        </Card>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Key Information</h2>
        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))'}}>
          <Card className="enter-up" ref={el => animRefs.current[1] = el}>
            <h3 style={{marginTop:0,color:'#14B8A6',fontSize:'16px',fontWeight:700}}>📅 Important Dates</h3>
            <ul style={{margin:0,paddingLeft:20,fontSize:'13px',color:'var(--muted)',lineHeight:1.8}}>
              <li><strong>Application closes:</strong> March 31, 2026</li>
              <li><strong>Entrance exam:</strong> April 10-11, 2026</li>
              <li><strong>Results announced:</strong> April 24, 2026</li>
              <li><strong>First term begins:</strong> May 18, 2026</li>
            </ul>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[2] = el}>
            <h3 style={{marginTop:0,color:'#14B8A6',fontSize:'16px',fontWeight:700}}>💰 Fees Structure</h3>
            <div style={{fontSize:'13px',color:'var(--muted)'}}>
              <p style={{marginBottom:12}}><strong style={{color:'var(--text-color)'}}>Day Student:</strong><br/>KES 85,000/term</p>
              <p style={{marginBottom:12}}><strong style={{color:'var(--text-color)'}}>Boarding:</strong><br/>KES 145,000/term</p>
              <p style={{margin:0,fontSize:'12px',color:'#999'}}>*Includes tuition, meals, facilities, and materials</p>
            </div>
          </Card>
          <Card className="enter-up" ref={el => animRefs.current[3] = el}>
            <h3 style={{marginTop:0,color:'#14B8A6',fontSize:'16px',fontWeight:700}}>📋 Required Documents</h3>
            <ul style={{margin:0,paddingLeft:20,fontSize:'13px',color:'var(--muted)',lineHeight:1.8}}>
              <li>Birth certificate</li>
              <li>Form One clearance</li>
              <li>School leaving form</li>
              <li>Medical report</li>
              <li>Passport photo (2x2)</li>
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:20,color:'var(--text-color)'}}>Frequently Asked Questions</h2>
        <Card className="enter-up" ref={el => animRefs.current[4] = el}>
          <div style={{display:'grid',gap:16}}>
            <div style={{borderBottom:'1px solid #eee',paddingBottom:16}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px'}}>What is the acceptance rate?</h4>
              <p style={{margin:0,fontSize:'13px',color:'var(--muted)'}}>We accept the top students based on entrance exams and school records to maintain academic excellence.</p>
            </div>
            <div style={{borderBottom:'1px solid #eee',paddingBottom:16}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px'}}>Do you offer scholarships?</h4>
              <p style={{margin:0,fontSize:'13px',color:'var(--muted)'}}>Yes! Merit and need-based scholarships are available. Contact admissions for more details.</p>
            </div>
            <div style={{borderBottom:'1px solid #eee',paddingBottom:16}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px'}}>Can I visit the campus?</h4>
              <p style={{margin:0,fontSize:'13px',color:'var(--muted)'}}>Absolutely! Schedule a campus tour through our contact page. Tours are available Saturdays 10-12 PM.</p>
            </div>
            <div style={{paddingBottom:0}}>
              <h4 style={{marginTop:0,color:'var(--text-color)',fontSize:'14px'}}>Is boarding mandatory?</h4>
              <p style={{margin:0,fontSize:'13px',color:'var(--muted)'}}>No, both day and boarding options are available. Choose what works best for your situation.</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
