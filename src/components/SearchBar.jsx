import React, { useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Search...' }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div style={{
      position: 'relative',
      marginBottom: '24px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '0 12px',
        border: '2px solid transparent',
        transition: 'all 0.3s'
      }}
      onFocus={(e) => e.currentTarget.style.borderColor = '#14B8A6'}
      onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}>
        <span style={{ fontSize: '18px', marginRight: '8px' }}>🔍</span>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          style={{
            flex: 1,
            border: 'none',
            backgroundColor: 'transparent',
            padding: '10px 0',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        {query && (
          <button
            onClick={handleClear}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px 8px',
              color: '#999'
            }}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
