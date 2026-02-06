import React from 'react'

export default function Container({ children, className = '', ...props }) {
  return (
    <div className={("app-shell " + className).trim()} {...props}>
      {children}
    </div>
  )
}
