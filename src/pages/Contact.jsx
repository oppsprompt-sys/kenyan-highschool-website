import React, { useState } from 'react'
import Hero from '../components/Hero'

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!formData.message.trim()) {
      setError('Please enter a message')
      return
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters')
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 800)
  }

  const school = {
    name: 'Kenyan Highschool',
    phone: '+254 700 000000',
    email: 'info@kenyanhighschool.ac.ke',
    address: '123 School Lane, Mombasa, Kenya',
    whatsapp: '+254700000000',
    facebook: 'https://facebook.com/kenyanhighschool',
    lat: -4.0435,
    lng: 39.6682
  }

  return (
    <div>
      <Hero heading="Get in Touch" subheading="Contact Us" />

      {/* Success Toast */}
      {submitted && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          ✓ Message sent successfully! We'll respond soon.
        </div>
      )}

      {/* Error Toast */}
      {error && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          backgroundColor: '#ef4444',
          color: 'white',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          ✕ {error}
        </div>
      )}

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '30px 20px', marginTop: 12}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px'}}>
          {/* Contact Details */}
          <div className="card">
            <h3 style={{marginTop: 0}}>Contact Information</h3>
            <div style={{marginBottom: 16}}>
              <p style={{fontSize: '13px', color: 'var(--muted)', marginBottom: '5px'}}>Phone</p>
              <a href={`tel:${school.phone}`} style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 500}}>{school.phone}</a>
            </div>
            <div style={{marginBottom: 16}}>
              <p style={{fontSize: '13px', color: 'var(--muted)', marginBottom: '5px'}}>Email</p>
              <a href={`mailto:${school.email}`} style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 500}}>{school.email}</a>
            </div>
            <div style={{marginBottom: 16}}>
              <p style={{fontSize: '13px', color: 'var(--muted)', marginBottom: '5px'}}>Address</p>
              <p style={{margin: 0, fontSize: '14px'}}>{school.address}</p>
            </div>
            <div style={{paddingTop: 12, borderTop: '1px solid rgba(7,34,58,0.04)'}}>
              <p style={{fontSize: '13px', color: 'var(--muted)', marginBottom: 8}}>Follow Us</p>
              <div style={{display: 'flex', gap: 12}}>
                <a href={`https://wa.me/${school.whatsapp.replace('+','')}`} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{fontSize: '12px', padding: '6px 10px', flex: 1}}>WhatsApp</a>
                <a href={school.facebook} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{fontSize: '12px', padding: '6px 10px', flex: 1}}>Facebook</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 style={{marginTop: 0}}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: 12}}>
                <label style={{display: 'block', fontSize: '13px', marginBottom: 6, fontWeight: 600}}>Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="form-input"
                  style={{width: '100%'}}
                />
              </div>
              <div style={{marginBottom: 12}}>
                <label style={{display: 'block', fontSize: '13px', marginBottom: 6, fontWeight: 600}}>Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-input"
                  style={{width: '100%'}}
                />
              </div>
              <div style={{marginBottom: 12}}>
                <label style={{display: 'block', fontSize: '13px', marginBottom: 6, fontWeight: 600}}>Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  className="form-input"
                  style={{width: '100%'}}
                  rows="4"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="btn primary"
                style={{
                  width: '100%',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="card" style={{padding: 0, overflow: 'hidden', marginBottom: 30}}>
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7758394847736!2d${school.lng}!3d${school.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${school.lat}%2C${school.lng}!5e0!3m2!1sen!2ske!4v1234567890`} 
            width="100%" 
            height="400" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="School location"
          ></iframe>
        </div>

        {/* Visiting Info */}
        <section style={{backgroundColor: 'rgba(248,250,252,0.5)', padding: 24, borderRadius: 12}}>
          <h3>Visiting the School</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16}}>
            <div>
              <h4 style={{marginTop: 0, color: 'var(--color-primary)'}}>Hours</h4>
              <p style={{fontSize: '13px', color: 'var(--muted)'}}>Monday – Friday: 7:30 AM – 4:00 PM<br/>Saturday: 9:00 AM – 1:00 PM<br/>Sunday: Closed</p>
            </div>
            <div>
              <h4 style={{marginTop: 0, color: 'var(--color-primary)'}}>Admissions Tours</h4>
              <p style={{fontSize: '13px', color: 'var(--muted)'}}>Book a campus tour by emailing us or calling.<br/>Tours available by appointment.</p>
            </div>
            <div>
              <h4 style={{marginTop: 0, color: 'var(--color-primary)'}}>Directions</h4>
              <p style={{fontSize: '13px', color: 'var(--muted)'}}>Located on School Lane, 2km from the city center. Ample parking available for visitors.</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
