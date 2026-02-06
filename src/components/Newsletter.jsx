import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }, 800)
  }

  return (
    <section style={{
      backgroundColor: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(10,37,64,0.04))',
      padding: '32px 20px',
      borderRadius: '12px',
      border: '1px solid rgba(20,184,166,0.2)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: '700' }}>Stay Updated</h3>
      <p style={{ margin: '0 0 20px', color: '#666', fontSize: '14px' }}>Get the latest news and updates from our school delivered to your inbox.</p>

      {submitted && (
        <div style={{
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          ✓ Thanks for subscribing! Check your email for confirmation.
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: '#fee2e2',
          color: '#991b1b',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          className="form-input"
          style={{ flex: 1 }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '8px 16px',
            backgroundColor: loading ? '#a3a3a3' : '#14B8A6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s',
            opacity: loading ? 0.7 : 1,
            whiteSpace: 'nowrap'
          }}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  )
}
