import React, { useEffect, useState } from 'react'

export default function Toast({ message, type = 'success', duration = 5000, onClose = () => {} }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!message) {
      setIsVisible(false)
      return
    }

    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [message, duration, onClose])

  if (!isVisible || !message) return null

  const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      backgroundColor: bgColor,
      color: 'white',
      padding: '16px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      zIndex: 1000,
      animation: 'slideIn 0.3s ease-out',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <span style={{ fontSize: '18px' }}>{icon}</span>
      <span>{message}</span>
    </div>
  )
}
